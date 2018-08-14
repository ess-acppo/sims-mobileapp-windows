/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
<<<<<<< HEAD
(function () {
    /* global require, exports, module */
    /* global FILESYSTEM_PREFIX */
    /* global IDBKeyRange */
=======
(function() {
    /*global require, exports, module*/
    /*global FILESYSTEM_PREFIX*/
    /*global IDBKeyRange*/
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

    /* Heavily based on https://github.com/ebidel/idb.filesystem.js */

    // For chrome we don't need to implement proxy methods
    // All functionality can be accessed natively.
    if (require('./isChrome')()) {
        var pathsPrefix = {
            // Read-only directory where the application is installed.
<<<<<<< HEAD
            applicationDirectory: location.origin + '/', // eslint-disable-line no-undef
=======
            applicationDirectory: location.origin + "/",
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // Where to put app-specific data files.
            dataDirectory: 'filesystem:file:///persistent/',
            // Cached files that should survive app restarts.
            // Apps should not rely on the OS to delete files in here.
<<<<<<< HEAD
            cacheDirectory: 'filesystem:file:///temporary/'
        };

        exports.requestAllPaths = function (successCallback) {
            successCallback(pathsPrefix);
        };

        require('cordova/exec/proxy').add('File', module.exports);
        return;
    }

    var LocalFileSystem = require('./LocalFileSystem');
    var FileSystem = require('./FileSystem');
    var FileEntry = require('./FileEntry');
    var FileError = require('./FileError');
    var DirectoryEntry = require('./DirectoryEntry');
    var File = require('./File');

    (function (exports, global) {
        var indexedDB = global.indexedDB || global.mozIndexedDB;
        if (!indexedDB) {
            throw 'Firefox OS File plugin: indexedDB not supported';
=======
            cacheDirectory: 'filesystem:file:///temporary/',
        };

        exports.requestAllPaths = function(successCallback) {
            successCallback(pathsPrefix);
        };

        require("cordova/exec/proxy").add("File", module.exports);
        return;
    }

    var LocalFileSystem = require('./LocalFileSystem'),
        FileSystem = require('./FileSystem'),
        FileEntry = require('./FileEntry'),
        FileError = require('./FileError'),
        DirectoryEntry = require('./DirectoryEntry'),
        File = require('./File');

    (function(exports, global) {
        var indexedDB = global.indexedDB || global.mozIndexedDB;
        if (!indexedDB) {
            throw "Firefox OS File plugin: indexedDB not supported";
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        }

        var fs_ = null;

        var idb_ = {};
        idb_.db = null;
        var FILE_STORE_ = 'entries';

        var DIR_SEPARATOR = '/';

        var pathsPrefix = {
            // Read-only directory where the application is installed.
<<<<<<< HEAD
            applicationDirectory: location.origin + '/', // eslint-disable-line no-undef
=======
            applicationDirectory: location.origin + "/",
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // Where to put app-specific data files.
            dataDirectory: 'file:///persistent/',
            // Cached files that should survive app restarts.
            // Apps should not rely on the OS to delete files in here.
<<<<<<< HEAD
            cacheDirectory: 'file:///temporary/'
=======
            cacheDirectory: 'file:///temporary/',
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        };

        var unicodeLastChar = 65535;

<<<<<<< HEAD
    /** * Exported functionality ***/

        exports.requestFileSystem = function (successCallback, errorCallback, args) {
            var type = args[0];
            // Size is ignored since IDB filesystem size depends
            // on browser implementation and can't be set up by user
            var size = args[1]; // eslint-disable-line no-unused-vars
=======
    /*** Exported functionality ***/

        exports.requestFileSystem = function(successCallback, errorCallback, args) {
            var type = args[0];
            // Size is ignored since IDB filesystem size depends
            // on browser implementation and can't be set up by user
            var size = args[1]; // jshint ignore: line
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            if (type !== LocalFileSystem.TEMPORARY && type !== LocalFileSystem.PERSISTENT) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var name = type === LocalFileSystem.TEMPORARY ? 'temporary' : 'persistent';
<<<<<<< HEAD
            var storageName = (location.protocol + location.host).replace(/:/g, '_'); // eslint-disable-line no-undef
=======
            var storageName = (location.protocol + location.host).replace(/:/g, '_');
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            var root = new DirectoryEntry('', DIR_SEPARATOR);
            fs_ = new FileSystem(name, root);

<<<<<<< HEAD
            idb_.open(storageName, function () {
=======
            idb_.open(storageName, function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                successCallback(fs_);
            }, errorCallback);
        };

        // Overridden by Android, BlackBerry 10 and iOS to populate fsMap
<<<<<<< HEAD
        require('./fileSystems').getFs = function (name, callback) {
=======
        require('./fileSystems').getFs = function(name, callback) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            callback(new FileSystem(name, fs_.root));
        };

        // list a directory's contents (files and folders).
<<<<<<< HEAD
        exports.readEntries = function (successCallback, errorCallback, args) {
=======
        exports.readEntries = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            var fullPath = args[0];

            if (typeof successCallback !== 'function') {
                throw Error('Expected successCallback argument.');
            }

            var path = resolveToFullPath_(fullPath);

<<<<<<< HEAD
            exports.getDirectory(function () {
                idb_.getAllEntries(path.fullPath + DIR_SEPARATOR, path.storagePath, function (entries) {
                    successCallback(entries);
                }, errorCallback);
            }, function () {
=======
            exports.getDirectory(function() {
                idb_.getAllEntries(path.fullPath + DIR_SEPARATOR, path.storagePath, function(entries) {
                    successCallback(entries);
                }, errorCallback);
            }, function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                if (errorCallback) {
                    errorCallback(FileError.NOT_FOUND_ERR);
                }
            }, [path.storagePath, path.fullPath, {create: false}]);
        };

<<<<<<< HEAD
        exports.getFile = function (successCallback, errorCallback, args) {
=======
        exports.getFile = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            var fullPath = args[0];
            var path = args[1];
            var options = args[2] || {};

            // Create an absolute path if we were handed a relative one.
            path = resolveToFullPath_(fullPath, path);

<<<<<<< HEAD
            idb_.get(path.storagePath, function (fileEntry) {
=======
            idb_.get(path.storagePath, function(fileEntry) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                if (options.create === true && options.exclusive === true && fileEntry) {
                    // If create and exclusive are both true, and the path already exists,
                    // getFile must fail.

                    if (errorCallback) {
                        errorCallback(FileError.PATH_EXISTS_ERR);
                    }
                } else if (options.create === true && !fileEntry) {
                    // If create is true, the path doesn't exist, and no other error occurs,
                    // getFile must create it as a zero-length file and return a corresponding
                    // FileEntry.
                    var newFileEntry = new FileEntry(path.fileName, path.fullPath, new FileSystem(path.fsName, fs_.root));

                    newFileEntry.file_ = new MyFile({
                        size: 0,
                        name: newFileEntry.name,
                        lastModifiedDate: new Date(),
                        storagePath: path.storagePath
                    });

                    idb_.put(newFileEntry, path.storagePath, successCallback, errorCallback);
                } else if (options.create === true && fileEntry) {
                    if (fileEntry.isFile) {
                        // Overwrite file, delete then create new.
<<<<<<< HEAD
                        idb_['delete'](path.storagePath, function () {
=======
                        idb_['delete'](path.storagePath, function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                            var newFileEntry = new FileEntry(path.fileName, path.fullPath, new FileSystem(path.fsName, fs_.root));

                            newFileEntry.file_ = new MyFile({
                                size: 0,
                                name: newFileEntry.name,
                                lastModifiedDate: new Date(),
                                storagePath: path.storagePath
                            });

                            idb_.put(newFileEntry, path.storagePath, successCallback, errorCallback);
                        }, errorCallback);
                    } else {
                        if (errorCallback) {
                            errorCallback(FileError.INVALID_MODIFICATION_ERR);
                        }
                    }
                } else if ((!options.create || options.create === false) && !fileEntry) {
                    // If create is not true and the path doesn't exist, getFile must fail.
                    if (errorCallback) {
                        errorCallback(FileError.NOT_FOUND_ERR);
                    }
                } else if ((!options.create || options.create === false) && fileEntry &&
                    fileEntry.isDirectory) {
                    // If create is not true and the path exists, but is a directory, getFile
                    // must fail.
                    if (errorCallback) {
                        errorCallback(FileError.TYPE_MISMATCH_ERR);
                    }
                } else {
                    // Otherwise, if no other error occurs, getFile must return a FileEntry
                    // corresponding to path.

                    successCallback(fileEntryFromIdbEntry(fileEntry));
                }
            }, errorCallback);
        };

<<<<<<< HEAD
        exports.getFileMetadata = function (successCallback, errorCallback, args) {
            var fullPath = args[0];

            exports.getFile(function (fileEntry) {
=======
        exports.getFileMetadata = function(successCallback, errorCallback, args) {
            var fullPath = args[0];

            exports.getFile(function(fileEntry) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                successCallback(new File(fileEntry.file_.name, fileEntry.fullPath, '', fileEntry.file_.lastModifiedDate,
                    fileEntry.file_.size));
            }, errorCallback, [fullPath, null]);
        };

<<<<<<< HEAD
        exports.getMetadata = function (successCallback, errorCallback, args) {
=======
        exports.getMetadata = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            exports.getFile(function (fileEntry) {
                successCallback(
                    {
                        modificationTime: fileEntry.file_.lastModifiedDate,
                        size: fileEntry.file_.lastModifiedDate
                    });
            }, errorCallback, args);
        };

<<<<<<< HEAD
        exports.setMetadata = function (successCallback, errorCallback, args) {
=======
        exports.setMetadata = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            var fullPath = args[0];
            var metadataObject = args[1];

            exports.getFile(function (fileEntry) {
<<<<<<< HEAD
                fileEntry.file_.lastModifiedDate = metadataObject.modificationTime;
                idb_.put(fileEntry, fileEntry.file_.storagePath, successCallback, errorCallback);
            }, errorCallback, [fullPath, null]);
        };

        exports.write = function (successCallback, errorCallback, args) {
            var fileName = args[0];
            var data = args[1];
            var position = args[2];
            var isBinary = args[3]; // eslint-disable-line no-unused-vars
=======
                  fileEntry.file_.lastModifiedDate = metadataObject.modificationTime;
                  idb_.put(fileEntry, fileEntry.file_.storagePath, successCallback, errorCallback);
            }, errorCallback, [fullPath, null]);
        };

        exports.write = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                data = args[1],
                position = args[2],
                isBinary = args[3]; // jshint ignore: line
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            if (!data) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            if (typeof data === 'string' || data instanceof String) {
<<<<<<< HEAD
                data = new Blob([data]); // eslint-disable-line no-undef
            }

            exports.getFile(function (fileEntry) {
                var blob_ = fileEntry.file_.blob_;

                if (!blob_) {
                    blob_ = new Blob([data], {type: data.type}); // eslint-disable-line no-undef
=======
                data = new Blob([data]);
            }

            exports.getFile(function(fileEntry) {
                var blob_ = fileEntry.file_.blob_;

                if (!blob_) {
                    blob_ = new Blob([data], {type: data.type});
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                } else {
                    // Calc the head and tail fragments
                    var head = blob_.slice(0, position);
                    var tail = blob_.slice(position + (data.size || data.byteLength));

                    // Calc the padding
                    var padding = position - head.size;
                    if (padding < 0) {
                        padding = 0;
                    }

                    // Do the "write". In fact, a full overwrite of the Blob.
<<<<<<< HEAD
                    blob_ = new Blob([head, new Uint8Array(padding), data, tail], // eslint-disable-line no-undef
=======
                    blob_ = new Blob([head, new Uint8Array(padding), data, tail],
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                        {type: data.type});
                }

                // Set the blob we're writing on this file entry so we can recall it later.
                fileEntry.file_.blob_ = blob_;
                fileEntry.file_.lastModifiedDate = new Date() || null;
                fileEntry.file_.size = blob_.size;
                fileEntry.file_.name = blob_.name;
                fileEntry.file_.type = blob_.type;

<<<<<<< HEAD
                idb_.put(fileEntry, fileEntry.file_.storagePath, function () {
=======
                idb_.put(fileEntry, fileEntry.file_.storagePath, function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                    successCallback(data.size || data.byteLength);
                }, errorCallback);
            }, errorCallback, [fileName, null]);
        };

<<<<<<< HEAD
        exports.readAsText = function (successCallback, errorCallback, args) {
            var fileName = args[0];
            var enc = args[1];
            var startPos = args[2];
            var endPos = args[3];
=======
        exports.readAsText = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                enc = args[1],
                startPos = args[2],
                endPos = args[3];
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            readAs('text', fileName, enc, startPos, endPos, successCallback, errorCallback);
        };

<<<<<<< HEAD
        exports.readAsDataURL = function (successCallback, errorCallback, args) {
            var fileName = args[0];
            var startPos = args[1];
            var endPos = args[2];
=======
        exports.readAsDataURL = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                startPos = args[1],
                endPos = args[2];
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            readAs('dataURL', fileName, null, startPos, endPos, successCallback, errorCallback);
        };

<<<<<<< HEAD
        exports.readAsBinaryString = function (successCallback, errorCallback, args) {
            var fileName = args[0];
            var startPos = args[1];
            var endPos = args[2];
=======
        exports.readAsBinaryString = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                startPos = args[1],
                endPos = args[2];
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            readAs('binaryString', fileName, null, startPos, endPos, successCallback, errorCallback);
        };

<<<<<<< HEAD
        exports.readAsArrayBuffer = function (successCallback, errorCallback, args) {
            var fileName = args[0];
            var startPos = args[1];
            var endPos = args[2];
=======
        exports.readAsArrayBuffer = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                startPos = args[1],
                endPos = args[2];
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            readAs('arrayBuffer', fileName, null, startPos, endPos, successCallback, errorCallback);
        };

<<<<<<< HEAD
        exports.removeRecursively = exports.remove = function (successCallback, errorCallback, args) {
=======
        exports.removeRecursively = exports.remove = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            if (typeof successCallback !== 'function') {
                throw Error('Expected successCallback argument.');
            }

            var fullPath = resolveToFullPath_(args[0]).storagePath;
            if (fullPath === pathsPrefix.cacheDirectory || fullPath === pathsPrefix.dataDirectory) {
                errorCallback(FileError.NO_MODIFICATION_ALLOWED_ERR);
                return;
            }

<<<<<<< HEAD
            function deleteEntry (isDirectory) {
                // TODO: This doesn't protect against directories that have content in it.
                // Should throw an error instead if the dirEntry is not empty.
                idb_['delete'](fullPath, function () {
                    successCallback();
                }, function () {
                    if (errorCallback) { errorCallback(); }
=======
            function deleteEntry(isDirectory) {
                // TODO: This doesn't protect against directories that have content in it.
                // Should throw an error instead if the dirEntry is not empty.
                idb_['delete'](fullPath, function() {
                    successCallback();
                }, function() {
                        if (errorCallback) { errorCallback(); }
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                }, isDirectory);
            }

            // We need to to understand what we are deleting:
<<<<<<< HEAD
            exports.getDirectory(function (entry) {
                deleteEntry(entry.isDirectory);
            }, function () {
                // DirectoryEntry was already deleted or entry is FileEntry
=======
            exports.getDirectory(function(entry) {
                deleteEntry(entry.isDirectory);
            }, function(){
                //DirectoryEntry was already deleted or entry is FileEntry
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                deleteEntry(false);
            }, [fullPath, null, {create: false}]);
        };

<<<<<<< HEAD
        exports.getDirectory = function (successCallback, errorCallback, args) {
=======
        exports.getDirectory = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            var fullPath = args[0];
            var path = args[1];
            var options = args[2];

            // Create an absolute path if we were handed a relative one.
            path = resolveToFullPath_(fullPath, path);

<<<<<<< HEAD
            idb_.get(path.storagePath, function (folderEntry) {
=======
            idb_.get(path.storagePath, function(folderEntry) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                if (!options) {
                    options = {};
                }

                if (options.create === true && options.exclusive === true && folderEntry) {
                    // If create and exclusive are both true, and the path already exists,
                    // getDirectory must fail.
                    if (errorCallback) {
                        errorCallback(FileError.PATH_EXISTS_ERR);
                    }
                    // There is a strange bug in mobilespec + FF, which results in coming to multiple else-if's
                    // so we are shielding from it with returns.
                    return;
                }

                if (options.create === true && !folderEntry) {
                    // If create is true, the path doesn't exist, and no other error occurs,
                    // getDirectory must create it as a zero-length file and return a corresponding
                    // MyDirectoryEntry.
                    var dirEntry = new DirectoryEntry(path.fileName, path.fullPath, new FileSystem(path.fsName, fs_.root));

                    idb_.put(dirEntry, path.storagePath, successCallback, errorCallback);
                    return;
                }

                if (options.create === true && folderEntry) {

                    if (folderEntry.isDirectory) {
                        // IDB won't save methods, so we need re-create the MyDirectoryEntry.
                        successCallback(new DirectoryEntry(folderEntry.name, folderEntry.fullPath, folderEntry.filesystem));
                    } else {
                        if (errorCallback) {
                            errorCallback(FileError.INVALID_MODIFICATION_ERR);
                        }
                    }
                    return;
                }

                if ((!options.create || options.create === false) && !folderEntry) {
                    // Handle root special. It should always exist.
                    if (path.fullPath === DIR_SEPARATOR) {
                        successCallback(fs_.root);
                        return;
                    }

                    // If create is not true and the path doesn't exist, getDirectory must fail.
                    if (errorCallback) {
                        errorCallback(FileError.NOT_FOUND_ERR);
                    }

                    return;
                }
                if ((!options.create || options.create === false) && folderEntry && folderEntry.isFile) {
                    // If create is not true and the path exists, but is a file, getDirectory
                    // must fail.
                    if (errorCallback) {
                        errorCallback(FileError.TYPE_MISMATCH_ERR);
                    }
                    return;
                }

                // Otherwise, if no other error occurs, getDirectory must return a
                // MyDirectoryEntry corresponding to path.

                // IDB won't' save methods, so we need re-create MyDirectoryEntry.
                successCallback(new DirectoryEntry(folderEntry.name, folderEntry.fullPath, folderEntry.filesystem));
            }, errorCallback);
        };

<<<<<<< HEAD
        exports.getParent = function (successCallback, errorCallback, args) {
=======
        exports.getParent = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            if (typeof successCallback !== 'function') {
                throw Error('Expected successCallback argument.');
            }

            var fullPath = args[0];
<<<<<<< HEAD
            // fullPath is like this:
            // file:///persistent/path/to/file or
            // file:///persistent/path/to/directory/
=======
            //fullPath is like this:
            //file:///persistent/path/to/file or
            //file:///persistent/path/to/directory/
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            if (fullPath === DIR_SEPARATOR || fullPath === pathsPrefix.cacheDirectory ||
                fullPath === pathsPrefix.dataDirectory) {
                successCallback(fs_.root);
                return;
            }

<<<<<<< HEAD
            // To delete all slashes at the end
=======
            //To delete all slashes at the end
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            while (fullPath[fullPath.length - 1] === '/') {
                fullPath = fullPath.substr(0, fullPath.length - 1);
            }

            var pathArr = fullPath.split(DIR_SEPARATOR);
            pathArr.pop();
            var parentName = pathArr.pop();
            var path = pathArr.join(DIR_SEPARATOR) + DIR_SEPARATOR;

<<<<<<< HEAD
            // To get parent of root files
            var joined = path + parentName + DIR_SEPARATOR;// is like this: file:///persistent/
=======
            //To get parent of root files
            var joined = path + parentName + DIR_SEPARATOR;//is like this: file:///persistent/
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            if (joined === pathsPrefix.cacheDirectory || joined === pathsPrefix.dataDirectory) {
                exports.getDirectory(successCallback, errorCallback, [joined, DIR_SEPARATOR, {create: false}]);
                return;
            }

            exports.getDirectory(successCallback, errorCallback, [path, parentName, {create: false}]);
        };

<<<<<<< HEAD
        exports.copyTo = function (successCallback, errorCallback, args) {
=======
        exports.copyTo = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            var srcPath = args[0];
            var parentFullPath = args[1];
            var name = args[2];

            if (name.indexOf('/') !== -1 || srcPath === parentFullPath + name) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }

                return;
            }

            // Read src file
<<<<<<< HEAD
            exports.getFile(function (srcFileEntry) {

                var path = resolveToFullPath_(parentFullPath);
                // Check directory
                exports.getDirectory(function () {

                    // Create dest file
                    exports.getFile(function (dstFileEntry) {

                        exports.write(function () {
=======
            exports.getFile(function(srcFileEntry) {

                var path = resolveToFullPath_(parentFullPath);
                //Check directory
                exports.getDirectory(function() {

                    // Create dest file
                    exports.getFile(function(dstFileEntry) {

                        exports.write(function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                            successCallback(dstFileEntry);
                        }, errorCallback, [dstFileEntry.file_.storagePath, srcFileEntry.file_.blob_, 0]);

                    }, errorCallback, [parentFullPath, name, {create: true}]);

<<<<<<< HEAD
                }, function () { if (errorCallback) { errorCallback(FileError.NOT_FOUND_ERR); } },
                [path.storagePath, null, {create: false}]);
=======
                }, function() { if (errorCallback) { errorCallback(FileError.NOT_FOUND_ERR); }},
                [path.storagePath, null, {create:false}]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            }, errorCallback, [srcPath, null]);
        };

<<<<<<< HEAD
        exports.moveTo = function (successCallback, errorCallback, args) {
            var srcPath = args[0];
            // parentFullPath and name parameters is ignored because
            // args is being passed downstream to exports.copyTo method
            var parentFullPath = args[1]; // eslint-disable-line
            var name = args[2]; // eslint-disable-line
=======
        exports.moveTo = function(successCallback, errorCallback, args) {
            var srcPath = args[0];
            // parentFullPath and name parameters is ignored because
            // args is being passed downstream to exports.copyTo method
            var parentFullPath = args[1]; // jshint ignore: line
            var name = args[2]; // jshint ignore: line
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            exports.copyTo(function (fileEntry) {

                exports.remove(function () {
                    successCallback(fileEntry);
                }, errorCallback, [srcPath]);

            }, errorCallback, args);
        };

<<<<<<< HEAD
        exports.resolveLocalFileSystemURI = function (successCallback, errorCallback, args) {
=======
        exports.resolveLocalFileSystemURI = function(successCallback, errorCallback, args) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            var path = args[0];

            // Ignore parameters
            if (path.indexOf('?') !== -1) {
<<<<<<< HEAD
                path = String(path).split('?')[0];
            }

            // support for encodeURI
            if (/\%5/g.test(path) || /\%20/g.test(path)) {  // eslint-disable-line no-useless-escape
=======
                path = String(path).split("?")[0];
            }

            // support for encodeURI
            if (/\%5/g.test(path) || /\%20/g.test(path)) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                path = decodeURI(path);
            }

            if (path.trim()[0] === '/') {
                if (errorCallback) {
                    errorCallback(FileError.ENCODING_ERR);
                }
                return;
            }

<<<<<<< HEAD
            // support for cdvfile
            if (path.trim().substr(0, 7) === 'cdvfile') {
                if (path.indexOf('cdvfile://localhost') === -1) {
=======
            //support for cdvfile
            if (path.trim().substr(0,7) === "cdvfile") {
                if (path.indexOf("cdvfile://localhost") === -1) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                    if (errorCallback) {
                        errorCallback(FileError.ENCODING_ERR);
                    }
                    return;
                }

<<<<<<< HEAD
                var indexPersistent = path.indexOf('persistent');
                var indexTemporary = path.indexOf('temporary');

                // cdvfile://localhost/persistent/path/to/file
                if (indexPersistent !== -1) {
                    path = 'file:///persistent' + path.substr(indexPersistent + 10);
                } else if (indexTemporary !== -1) {
                    path = 'file:///temporary' + path.substr(indexTemporary + 9);
=======
                var indexPersistent = path.indexOf("persistent");
                var indexTemporary = path.indexOf("temporary");

                //cdvfile://localhost/persistent/path/to/file
                if (indexPersistent !== -1) {
                    path =  "file:///persistent" + path.substr(indexPersistent + 10);
                } else if (indexTemporary !== -1) {
                    path = "file:///temporary" + path.substr(indexTemporary + 9);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                } else {
                    if (errorCallback) {
                        errorCallback(FileError.ENCODING_ERR);
                    }
                    return;
                }
            }

            // to avoid path form of '///path/to/file'
<<<<<<< HEAD
            function handlePathSlashes (path) {
                var cutIndex = 0;
=======
            function handlePathSlashes(path) {
                var cutIndex  = 0;
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                for (var i = 0; i < path.length - 1; i++) {
                    if (path[i] === DIR_SEPARATOR && path[i + 1] === DIR_SEPARATOR) {
                        cutIndex = i + 1;
                    } else break;
                }

                return path.substr(cutIndex);
            }

            // Handle localhost containing paths (see specs )
            if (path.indexOf('file://localhost/') === 0) {
                path = path.replace('file://localhost/', 'file:///');
            }

            if (path.indexOf(pathsPrefix.dataDirectory) === 0) {
                path = path.substring(pathsPrefix.dataDirectory.length - 1);
                path = handlePathSlashes(path);

<<<<<<< HEAD
                exports.requestFileSystem(function () {
                    exports.getFile(successCallback, function () {
=======
                exports.requestFileSystem(function() {
                    exports.getFile(successCallback, function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                        exports.getDirectory(successCallback, errorCallback, [pathsPrefix.dataDirectory, path,
                        {create: false}]);
                    }, [pathsPrefix.dataDirectory, path, {create: false}]);
                }, errorCallback, [LocalFileSystem.PERSISTENT]);
            } else if (path.indexOf(pathsPrefix.cacheDirectory) === 0) {
                path = path.substring(pathsPrefix.cacheDirectory.length - 1);
                path = handlePathSlashes(path);

<<<<<<< HEAD
                exports.requestFileSystem(function () {
                    exports.getFile(successCallback, function () {
=======
                exports.requestFileSystem(function() {
                    exports.getFile(successCallback, function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                        exports.getDirectory(successCallback, errorCallback, [pathsPrefix.cacheDirectory, path,
                        {create: false}]);
                    }, [pathsPrefix.cacheDirectory, path, {create: false}]);
                }, errorCallback, [LocalFileSystem.TEMPORARY]);
            } else if (path.indexOf(pathsPrefix.applicationDirectory) === 0) {
                path = path.substring(pathsPrefix.applicationDirectory.length);
<<<<<<< HEAD
                // TODO: need to cut out redundant slashes?

                var xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
                xhr.open('GET', path, true);
                xhr.onreadystatechange = function () {
                    if (xhr.status === 200 && xhr.readyState === 4) {
                        exports.requestFileSystem(function (fs) {
                            fs.name = location.hostname; // eslint-disable-line no-undef

                            // TODO: need to call exports.getFile(...) to handle errors correct
=======
                //TODO: need to cut out redundant slashes?

                var xhr = new XMLHttpRequest();
                xhr.open("GET", path, true);
                xhr.onreadystatechange = function () {
                    if (xhr.status === 200 && xhr.readyState === 4) {
                        exports.requestFileSystem(function(fs) {
                            fs.name = location.hostname;

                            //TODO: need to call exports.getFile(...) to handle errors correct
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                            fs.root.getFile(path, {create: true}, writeFile, errorCallback);
                        }, errorCallback, [LocalFileSystem.PERSISTENT]);
                    }
                };

                xhr.onerror = function () {
<<<<<<< HEAD
                    if (errorCallback) {
=======
                    if(errorCallback) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                        errorCallback(FileError.NOT_READABLE_ERR);
                    }
                };

                xhr.send();
            } else {
<<<<<<< HEAD
                if (errorCallback) {
=======
                if(errorCallback) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                    errorCallback(FileError.NOT_FOUND_ERR);
                }
            }

<<<<<<< HEAD
            function writeFile (entry) {
                entry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function (evt) {
                        if (!evt.target.error) {
                            entry.filesystemName = location.hostname; // eslint-disable-line no-undef
=======
            function writeFile(entry) {
                entry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function (evt) {
                        if (!evt.target.error) {
                            entry.filesystemName = location.hostname;
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                            successCallback(entry);
                        }
                    };
                    fileWriter.onerror = function () {
                        if (errorCallback) {
                            errorCallback(FileError.NOT_READABLE_ERR);
                        }
                    };
<<<<<<< HEAD
                    fileWriter.write(new Blob([xhr.response])); // eslint-disable-line no-undef
                }, errorCallback); // eslint-disable-line no-undef
            }
        };

        exports.requestAllPaths = function (successCallback) {
            successCallback(pathsPrefix);
        };

    /** * Helpers ***/
=======
                    fileWriter.write(new Blob([xhr.response]));
                }, errorCallback);
            }
        };

        exports.requestAllPaths = function(successCallback) {
            successCallback(pathsPrefix);
        };

    /*** Helpers ***/
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

        /**
         * Interface to wrap the native File interface.
         *
         * This interface is necessary for creating zero-length (empty) files,
         * something the Filesystem API allows you to do. Unfortunately, File's
         * constructor cannot be called directly, making it impossible to instantiate
         * an empty File in JS.
         *
         * @param {Object} opts Initial values.
         * @constructor
         */
<<<<<<< HEAD
        function MyFile (opts) {
            var blob_ = new Blob(); // eslint-disable-line no-undef
=======
        function MyFile(opts) {
            var blob_ = new Blob();
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

            this.size = opts.size || 0;
            this.name = opts.name || '';
            this.type = opts.type || '';
            this.lastModifiedDate = opts.lastModifiedDate || null;
            this.storagePath = opts.storagePath || '';

            // Need some black magic to correct the object's size/name/type based on the
            // blob that is saved.
            Object.defineProperty(this, 'blob_', {
                enumerable: true,
<<<<<<< HEAD
                get: function () {
                    return blob_;
                },
                set: function (val) {
=======
                get: function() {
                    return blob_;
                },
                set: function(val) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                    blob_ = val;
                    this.size = blob_.size;
                    this.name = blob_.name;
                    this.type = blob_.type;
                    this.lastModifiedDate = blob_.lastModifiedDate;
                }.bind(this)
            });
        }

        MyFile.prototype.constructor = MyFile;

        // When saving an entry, the fullPath should always lead with a slash and never
        // end with one (e.g. a directory). Also, resolve '.' and '..' to an absolute
        // one. This method ensures path is legit!
<<<<<<< HEAD
        function resolveToFullPath_ (cwdFullPath, path) {
=======
        function resolveToFullPath_(cwdFullPath, path) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            path = path || '';
            var fullPath = path;
            var prefix = '';

            cwdFullPath = cwdFullPath || DIR_SEPARATOR;
            if (cwdFullPath.indexOf(FILESYSTEM_PREFIX) === 0) {
                prefix = cwdFullPath.substring(0, cwdFullPath.indexOf(DIR_SEPARATOR, FILESYSTEM_PREFIX.length));
                cwdFullPath = cwdFullPath.substring(cwdFullPath.indexOf(DIR_SEPARATOR, FILESYSTEM_PREFIX.length));
            }

            var relativePath = path[0] !== DIR_SEPARATOR;
            if (relativePath) {
                fullPath = cwdFullPath;
                if (cwdFullPath !== DIR_SEPARATOR) {
                    fullPath += DIR_SEPARATOR + path;
                } else {
                    fullPath += path;
                }
            }

            // Remove doubled separator substrings
            var re = new RegExp(DIR_SEPARATOR + DIR_SEPARATOR, 'g');
            fullPath = fullPath.replace(re, DIR_SEPARATOR);

            // Adjust '..'s by removing parent directories when '..' flows in path.
            var parts = fullPath.split(DIR_SEPARATOR);
            for (var i = 0; i < parts.length; ++i) {
                var part = parts[i];
                if (part === '..') {
                    parts[i - 1] = '';
                    parts[i] = '';
                }
            }
<<<<<<< HEAD
            fullPath = parts.filter(function (el) {
=======
            fullPath = parts.filter(function(el) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                return el;
            }).join(DIR_SEPARATOR);

            // Add back in leading slash.
            if (fullPath[0] !== DIR_SEPARATOR) {
                fullPath = DIR_SEPARATOR + fullPath;
            }

            // Replace './' by current dir. ('./one/./two' -> one/two)
            fullPath = fullPath.replace(/\.\//g, DIR_SEPARATOR);

            // Replace '//' with '/'.
            fullPath = fullPath.replace(/\/\//g, DIR_SEPARATOR);

            // Replace '/.' with '/'.
            fullPath = fullPath.replace(/\/\./g, DIR_SEPARATOR);

            // Remove '/' if it appears on the end.
            if (fullPath[fullPath.length - 1] === DIR_SEPARATOR &&
                fullPath !== DIR_SEPARATOR) {
                fullPath = fullPath.substring(0, fullPath.length - 1);
            }

            var storagePath = prefix + fullPath;
            storagePath = decodeURI(storagePath);
            fullPath = decodeURI(fullPath);

            return {
                storagePath: storagePath,
                fullPath: fullPath,
                fileName: fullPath.split(DIR_SEPARATOR).pop(),
                fsName: prefix.split(DIR_SEPARATOR).pop()
            };
        }

<<<<<<< HEAD
        function fileEntryFromIdbEntry (fileEntry) {
=======
        function fileEntryFromIdbEntry(fileEntry) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // IDB won't save methods, so we need re-create the FileEntry.
            var clonedFileEntry = new FileEntry(fileEntry.name, fileEntry.fullPath, fileEntry.filesystem);
            clonedFileEntry.file_ = fileEntry.file_;

            return clonedFileEntry;
        }

<<<<<<< HEAD
        function readAs (what, fullPath, encoding, startPos, endPos, successCallback, errorCallback) {
            exports.getFile(function (fileEntry) {
                var fileReader = new FileReader(); // eslint-disable-line no-undef
                var blob = fileEntry.file_.blob_.slice(startPos, endPos);

                fileReader.onload = function (e) {
=======
        function readAs(what, fullPath, encoding, startPos, endPos, successCallback, errorCallback) {
            exports.getFile(function(fileEntry) {
                var fileReader = new FileReader(),
                    blob = fileEntry.file_.blob_.slice(startPos, endPos);

                fileReader.onload = function(e) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                    successCallback(e.target.result);
                };

                fileReader.onerror = errorCallback;

                switch (what) {
<<<<<<< HEAD
                case 'text':
                    fileReader.readAsText(blob, encoding);
                    break;
                case 'dataURL':
                    fileReader.readAsDataURL(blob);
                    break;
                case 'arrayBuffer':
                    fileReader.readAsArrayBuffer(blob);
                    break;
                case 'binaryString':
                    fileReader.readAsBinaryString(blob);
                    break;
=======
                    case 'text':
                        fileReader.readAsText(blob, encoding);
                        break;
                    case 'dataURL':
                        fileReader.readAsDataURL(blob);
                        break;
                    case 'arrayBuffer':
                        fileReader.readAsArrayBuffer(blob);
                        break;
                    case 'binaryString':
                        fileReader.readAsBinaryString(blob);
                        break;
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                }

            }, errorCallback, [fullPath, null]);
        }

<<<<<<< HEAD
    /** * Core logic to handle IDB operations ***/

        idb_.open = function (dbName, successCallback, errorCallback) {
            var self = this;

            // TODO: FF 12.0a1 isn't liking a db name with : in it.
            var request = indexedDB.open(dbName.replace(':', '_')/*, 1 /*version */);

            request.onerror = errorCallback || onError;

            request.onupgradeneeded = function (e) {
=======
    /*** Core logic to handle IDB operations ***/

        idb_.open = function(dbName, successCallback, errorCallback) {
            var self = this;

            // TODO: FF 12.0a1 isn't liking a db name with : in it.
            var request = indexedDB.open(dbName.replace(':', '_')/*, 1 /*version*/);

            request.onerror = errorCallback || onError;

            request.onupgradeneeded = function(e) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                // First open was called or higher db version was used.

                // console.log('onupgradeneeded: oldVersion:' + e.oldVersion,
                //           'newVersion:' + e.newVersion);

                self.db = e.target.result;
                self.db.onerror = onError;

                if (!self.db.objectStoreNames.contains(FILE_STORE_)) {
<<<<<<< HEAD
                    self.db.createObjectStore(FILE_STORE_/*, {keyPath: 'id', autoIncrement: true} */);
                }
            };

            request.onsuccess = function (e) {
=======
                    self.db.createObjectStore(FILE_STORE_/*,{keyPath: 'id', autoIncrement: true}*/);
                }
            };

            request.onsuccess = function(e) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                self.db = e.target.result;
                self.db.onerror = onError;
                successCallback(e);
            };

            request.onblocked = errorCallback || onError;
        };

<<<<<<< HEAD
        idb_.close = function () {
=======
        idb_.close = function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            this.db.close();
            this.db = null;
        };

<<<<<<< HEAD
        idb_.get = function (fullPath, successCallback, errorCallback) {
=======
        idb_.get = function(fullPath, successCallback, errorCallback) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            if (!this.db) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var tx = this.db.transaction([FILE_STORE_], 'readonly');

            var request = tx.objectStore(FILE_STORE_).get(fullPath);

            tx.onabort = errorCallback || onError;
<<<<<<< HEAD
            tx.oncomplete = function () {
=======
            tx.oncomplete = function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                successCallback(request.result);
            };
        };

<<<<<<< HEAD
        idb_.getAllEntries = function (fullPath, storagePath, successCallback, errorCallback) {
=======
        idb_.getAllEntries = function(fullPath, storagePath, successCallback, errorCallback) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            if (!this.db) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var results = [];

            if (storagePath[storagePath.length - 1] === DIR_SEPARATOR) {
                storagePath = storagePath.substring(0, storagePath.length - 1);
            }

            var range = IDBKeyRange.bound(storagePath + DIR_SEPARATOR + ' ',
                storagePath + DIR_SEPARATOR + String.fromCharCode(unicodeLastChar));

            var tx = this.db.transaction([FILE_STORE_], 'readonly');
            tx.onabort = errorCallback || onError;
<<<<<<< HEAD
            tx.oncomplete = function () {
                results = results.filter(function (val) {
=======
            tx.oncomplete = function() {
                results = results.filter(function(val) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                    var pathWithoutSlash = val.fullPath;

                    if (val.fullPath[val.fullPath.length - 1] === DIR_SEPARATOR) {
                        pathWithoutSlash = pathWithoutSlash.substr(0, pathWithoutSlash.length - 1);
                    }

                    var valPartsLen = pathWithoutSlash.split(DIR_SEPARATOR).length;
                    var fullPathPartsLen = fullPath.split(DIR_SEPARATOR).length;

                    /* Input fullPath parameter  equals '//' for root folder */
                    /* Entries in root folder has valPartsLen equals 2 (see below) */
<<<<<<< HEAD
                    if (fullPath[fullPath.length - 1] === DIR_SEPARATOR && fullPath.trim().length === 2) {
                        fullPathPartsLen = 1;
                    } else if (fullPath[fullPath.length - 1] === DIR_SEPARATOR) {
=======
                    if (fullPath[fullPath.length -1] === DIR_SEPARATOR && fullPath.trim().length === 2) {
                        fullPathPartsLen = 1;
                    } else if (fullPath[fullPath.length -1] === DIR_SEPARATOR) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                        fullPathPartsLen = fullPath.substr(0, fullPath.length - 1).split(DIR_SEPARATOR).length;
                    } else {
                        fullPathPartsLen = fullPath.split(DIR_SEPARATOR).length;
                    }

                    if (valPartsLen === fullPathPartsLen + 1) {
                        // If this a subfolder and entry is a direct child, include it in
                        // the results. Otherwise, it's not an entry of this folder.
                        return val;
                    } else return false;
                });

                successCallback(results);
            };

            var request = tx.objectStore(FILE_STORE_).openCursor(range);

<<<<<<< HEAD
            request.onsuccess = function (e) {
=======
            request.onsuccess = function(e) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                var cursor = e.target.result;
                if (cursor) {
                    var val = cursor.value;

                    results.push(val.isFile ? fileEntryFromIdbEntry(val) : new DirectoryEntry(val.name, val.fullPath, val.filesystem));
                    cursor['continue']();
                }
            };
        };

<<<<<<< HEAD
        idb_['delete'] = function (fullPath, successCallback, errorCallback, isDirectory) {
=======
        idb_['delete'] = function(fullPath, successCallback, errorCallback, isDirectory) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            if (!idb_.db) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var tx = this.db.transaction([FILE_STORE_], 'readwrite');
            tx.oncomplete = successCallback;
            tx.onabort = errorCallback || onError;
<<<<<<< HEAD
            tx.oncomplete = function () {
                if (isDirectory) {
                    // We delete nested files and folders after deleting parent folder
                    // We use ranges: https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange
                    fullPath = fullPath + DIR_SEPARATOR;

                    // Range contains all entries in the form fullPath<symbol> where
                    // symbol in the range from ' ' to symbol which has code `unicodeLastChar`
=======
            tx.oncomplete = function() {
                if (isDirectory) {
                    //We delete nested files and folders after deleting parent folder
                    //We use ranges: https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange
                    fullPath = fullPath + DIR_SEPARATOR;

                    //Range contains all entries in the form fullPath<symbol> where
                    //symbol in the range from ' ' to symbol which has code `unicodeLastChar`
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                    var range = IDBKeyRange.bound(fullPath + ' ', fullPath + String.fromCharCode(unicodeLastChar));

                    var newTx = this.db.transaction([FILE_STORE_], 'readwrite');
                    newTx.oncomplete = successCallback;
                    newTx.onabort = errorCallback || onError;
                    newTx.objectStore(FILE_STORE_)['delete'](range);
                } else {
                    successCallback();
                }
            };
            tx.objectStore(FILE_STORE_)['delete'](fullPath);
        };

<<<<<<< HEAD
        idb_.put = function (entry, storagePath, successCallback, errorCallback) {
=======
        idb_.put = function(entry, storagePath, successCallback, errorCallback) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            if (!this.db) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var tx = this.db.transaction([FILE_STORE_], 'readwrite');
            tx.onabort = errorCallback || onError;
<<<<<<< HEAD
            tx.oncomplete = function () {
=======
            tx.oncomplete = function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                // TODO: Error is thrown if we pass the request event back instead.
                successCallback(entry);
            };

            tx.objectStore(FILE_STORE_).put(entry, storagePath);
        };

        // Global error handler. Errors bubble from request, to transaction, to db.
<<<<<<< HEAD
        function onError (e) {
            switch (e.target.errorCode) {
            case 12:
                console.log('Error - Attempt to open db with a lower version than the ' +
                        'current one.');
                break;
            default:
                console.log('errorCode: ' + e.target.errorCode);
=======
        function onError(e) {
            switch (e.target.errorCode) {
                case 12:
                    console.log('Error - Attempt to open db with a lower version than the ' +
                        'current one.');
                    break;
                default:
                    console.log('errorCode: ' + e.target.errorCode);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            }

            console.log(e, e.code, e.message);
        }

    })(module.exports, window);

<<<<<<< HEAD
    require('cordova/exec/proxy').add('File', module.exports);
=======
    require("cordova/exec/proxy").add("File", module.exports);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
})();
