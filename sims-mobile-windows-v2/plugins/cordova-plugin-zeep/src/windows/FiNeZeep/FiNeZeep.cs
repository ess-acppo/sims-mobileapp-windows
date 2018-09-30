using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;
using Windows.ApplicationModel;
using Windows.Foundation;
using Windows.Storage;
using Windows.Storage.Streams;

namespace FiNeZeep
{
    public sealed class FiNeZeep
    {
        public static IAsyncOperation<string> zip([ReadOnlyArray] object[] args)
        {
            return zipImpl(args).AsAsyncOperation();
        }

        public static IAsyncOperation<string> unzip([ReadOnlyArray] object[] args)
        {
            return unzipImpl(args).AsAsyncOperation();
        }

        public static IAsyncOperation<string> submitURL([ReadOnlyArray] object[] args)
        {
            return SubmitURLImpl(args).AsAsyncOperation();
        }

        private static async Task<string> zipImpl(object[] args)
        {
            try
            {
                string from = (string)args[0];
                string fromPath = getPath(from);

                string to = (string)args[1];
                string toPath = getPath(to);

                ZipFile.CreateFromDirectory(fromPath, toPath);
                return string.Empty;
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        private static string getRelativePath(StorageFolder fromFolder, StorageFile file)
        {
            string path = file.Path.Replace(fromFolder.Path, string.Empty);
            while (path.StartsWith("/") || path.StartsWith("\\"))
            {
                path = path.Substring(1);
            }
            return path;
        }

        private static async Task<string> unzipImpl(object[] args)
        {
            try
            {
                string from = (string)args[0];
                string fromPath = getPath(from);

                string to = (string)args[1];
                string toPath = getPath(to);

                ZipFile.ExtractToDirectory(fromPath, toPath);

                return string.Empty;
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        private static async Task<string> SubmitURLImpl(object[] args)
        {
            string url = (string)args[0];
            string authInfo = (string)args[1];
            //var authToken = Encoding.ASCII.GetBytes(authInfo);
            _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", authInfo);
            // The actual Get method
            using (var result = await _httpClient.GetAsync(url))
            {
                if (result.StatusCode == HttpStatusCode.OK)
                {
                    string content = await result.Content.ReadAsStringAsync();
                    return content;
                }
                else { throw new HttpRequestException("Webrequest failed!"); }
            }
        }

        //UTILS

        delegate Task onFile(StorageFile file);

        private static async Task walk(StorageFolder parentFolder, onFile onfile)
        {
            IReadOnlyList<IStorageItem> items = await parentFolder.GetItemsAsync();
            if (items != null)
            {
                foreach (IStorageItem item in items)
                {
                    if (item.IsOfType(StorageItemTypes.Folder))
                    {
                        await walk((StorageFolder)item, onfile);
                    }
                    else if (item.IsOfType(StorageItemTypes.File))
                    {
                        await onfile((StorageFile)item);
                    }
                }
            }
        }

        private static string getPathParent(string path)
        {
            return path.Substring(0, path.LastIndexOf("\\"));
        }

        private static Dictionary<string, string> urlToPathMap = null;
        private static string getPath(String urlOrPath)
        {
            if (Path.IsPathRooted(urlOrPath))
            {
                return urlOrPath;
            }
            else
            {
                if (urlToPathMap == null)
                {
                    //SOURCE: http://lunarfrog.com/blog/winrt-folders-access
                    urlToPathMap = new Dictionary<string, string>();
                    urlToPathMap["ms-appdata:///roaming"] = ApplicationData.Current.RoamingFolder.Path;
                    urlToPathMap["ms-appdata:///local"] = ApplicationData.Current.LocalFolder.Path;
                    urlToPathMap["ms-appdata:///temp"] = ApplicationData.Current.TemporaryFolder.Path;
                    urlToPathMap["ms-appdata://"] = getPathParent(ApplicationData.Current.LocalFolder.Path);
                }

                foreach (KeyValuePair<string, string> pair in urlToPathMap)
                {
                    if (urlOrPath.StartsWith(pair.Key))
                    {
                        return urlOrPath.Replace(pair.Key, pair.Value).Replace("/", "\\");
                    }
                }

                return null;
            }
        }

        private static readonly HttpClient _httpClient = new HttpClient();
    }
}
