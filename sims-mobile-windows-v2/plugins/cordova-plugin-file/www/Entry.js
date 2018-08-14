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
var argscheck = require('cordova/argscheck');
var exec = require('cordova/exec');
var FileError = require('./FileError');
var Metadata = require('./Metadata');
=======
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    FileError = require('./FileError'),
    Metadata = require('./Metadata');
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

/**
 * Represents a file or directory on the local file system.
 *
 * @param isFile
 *            {boolean} true if Entry is a file (readonly)
 * @param isDirectory
 *            {boolean} true if Entry is a directory (readonly)
 * @param name
 *            {DOMString} name of the file or directory, excluding the path
 *            leading to it (readonly)
 * @param fullPath
 *            {DOMString} the absolute full path to the file or directory
 *            (readonly)
 * @param fileSystem
 *            {FileSystem} the filesystem on which this entry resides
 *            (readonly)
 * @param nativeURL
 *            {DOMString} an alternate URL which can be used by native
 *            webview controls, for example media players.
 *            (optional, readonly)
 */
<<<<<<< HEAD
function Entry (isFile, isDirectory, name, fullPath, fileSystem, nativeURL) {
=======
function Entry(isFile, isDirectory, name, fullPath, fileSystem, nativeURL) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    this.isFile = !!isFile;
    this.isDirectory = !!isDirectory;
    this.name = name || '';
    this.fullPath = fullPath || '';
    this.filesystem = fileSystem || null;
    this.nativeURL = nativeURL || null;
}

/**
 * Look up the metadata of the entry.
 *
 * @param successCallback
 *            {Function} is called with a Metadata object
 * @param errorCallback
 *            {Function} is called with a FileError
 */
<<<<<<< HEAD
Entry.prototype.getMetadata = function (successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.getMetadata', arguments);
    var success = successCallback && function (entryMetadata) {
=======
Entry.prototype.getMetadata = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.getMetadata', arguments);
    var success = successCallback && function(entryMetadata) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        var metadata = new Metadata({
            size: entryMetadata.size,
            modificationTime: entryMetadata.lastModifiedDate
        });
        successCallback(metadata);
    };
<<<<<<< HEAD
    var fail = errorCallback && function (code) {
        errorCallback(new FileError(code));
    };
    exec(success, fail, 'File', 'getFileMetadata', [this.toInternalURL()]);
=======
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(success, fail, "File", "getFileMetadata", [this.toInternalURL()]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

/**
 * Set the metadata of the entry.
 *
 * @param successCallback
 *            {Function} is called with a Metadata object
 * @param errorCallback
 *            {Function} is called with a FileError
 * @param metadataObject
 *            {Object} keys and values to set
 */
<<<<<<< HEAD
Entry.prototype.setMetadata = function (successCallback, errorCallback, metadataObject) {
    argscheck.checkArgs('FFO', 'Entry.setMetadata', arguments);
    exec(successCallback, errorCallback, 'File', 'setMetadata', [this.toInternalURL(), metadataObject]);
=======
Entry.prototype.setMetadata = function(successCallback, errorCallback, metadataObject) {
    argscheck.checkArgs('FFO', 'Entry.setMetadata', arguments);
    exec(successCallback, errorCallback, "File", "setMetadata", [this.toInternalURL(), metadataObject]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

/**
 * Move a file or directory to a new location.
 *
 * @param parent
 *            {DirectoryEntry} the directory to which to move this entry
 * @param newName
 *            {DOMString} new name of the entry, defaults to the current name
 * @param successCallback
 *            {Function} called with the new DirectoryEntry object
 * @param errorCallback
 *            {Function} called with a FileError
 */
<<<<<<< HEAD
Entry.prototype.moveTo = function (parent, newName, successCallback, errorCallback) {
    argscheck.checkArgs('oSFF', 'Entry.moveTo', arguments);
    var fail = errorCallback && function (code) {
        errorCallback(new FileError(code));
    };
    var srcURL = this.toInternalURL();
    // entry name
    var name = newName || this.name;
    var success = function (entry) {
        if (entry) {
            if (successCallback) {
                // create appropriate Entry object
                var newFSName = entry.filesystemName || (entry.filesystem && entry.filesystem.name);
                var fs = newFSName ? new FileSystem(newFSName, { name: '', fullPath: '/' }) : new FileSystem(parent.filesystem.name, { name: '', fullPath: '/' }); // eslint-disable-line no-undef
                var result = (entry.isDirectory) ? new (require('./DirectoryEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL) : new (require('cordova-plugin-file.FileEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL);
                successCallback(result);
            }
        } else {
            // no Entry object returned
            if (fail) {
                fail(FileError.NOT_FOUND_ERR);
            }
        }
    };

    // copy
    exec(success, fail, 'File', 'moveTo', [srcURL, parent.toInternalURL(), name]);
=======
Entry.prototype.moveTo = function(parent, newName, successCallback, errorCallback) {
    argscheck.checkArgs('oSFF', 'Entry.moveTo', arguments);
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    var srcURL = this.toInternalURL(),
        // entry name
        name = newName || this.name,
        success = function(entry) {
            if (entry) {
                if (successCallback) {
                    // create appropriate Entry object
                    var newFSName = entry.filesystemName || (entry.filesystem && entry.filesystem.name);
                    var fs = newFSName ? new FileSystem(newFSName, { name: "", fullPath: "/" }) : new FileSystem(parent.filesystem.name, { name: "", fullPath: "/" });
                    var result = (entry.isDirectory) ? new (require('./DirectoryEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL) : new (require('cordova-plugin-file.FileEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL);
                    successCallback(result);
                }
            }
            else {
                // no Entry object returned
                if (fail) {
                    fail(FileError.NOT_FOUND_ERR);
                }
            }
        };

    // copy
    exec(success, fail, "File", "moveTo", [srcURL, parent.toInternalURL(), name]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

/**
 * Copy a directory to a different location.
 *
 * @param parent
 *            {DirectoryEntry} the directory to which to copy the entry
 * @param newName
 *            {DOMString} new name of the entry, defaults to the current name
 * @param successCallback
 *            {Function} called with the new Entry object
 * @param errorCallback
 *            {Function} called with a FileError
 */
<<<<<<< HEAD
Entry.prototype.copyTo = function (parent, newName, successCallback, errorCallback) {
    argscheck.checkArgs('oSFF', 'Entry.copyTo', arguments);
    var fail = errorCallback && function (code) {
        errorCallback(new FileError(code));
    };
    var srcURL = this.toInternalURL();
        // entry name
    var name = newName || this.name;
    // success callback
    var success = function (entry) {
        if (entry) {
            if (successCallback) {
                // create appropriate Entry object
                var newFSName = entry.filesystemName || (entry.filesystem && entry.filesystem.name);
                var fs = newFSName ? new FileSystem(newFSName, { name: '', fullPath: '/' }) : new FileSystem(parent.filesystem.name, { name: '', fullPath: '/' }); // eslint-disable-line no-undef
                var result = (entry.isDirectory) ? new (require('./DirectoryEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL) : new (require('cordova-plugin-file.FileEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL);
                successCallback(result);
            }
        } else {
            // no Entry object returned
            if (fail) {
                fail(FileError.NOT_FOUND_ERR);
            }
        }
    };

    // copy
    exec(success, fail, 'File', 'copyTo', [srcURL, parent.toInternalURL(), name]);
=======
Entry.prototype.copyTo = function(parent, newName, successCallback, errorCallback) {
    argscheck.checkArgs('oSFF', 'Entry.copyTo', arguments);
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    var srcURL = this.toInternalURL(),
        // entry name
        name = newName || this.name,
        // success callback
        success = function(entry) {
            if (entry) {
                if (successCallback) {
                    // create appropriate Entry object
                    var newFSName = entry.filesystemName || (entry.filesystem && entry.filesystem.name);
                    var fs = newFSName ? new FileSystem(newFSName, { name: "", fullPath: "/" }) : new FileSystem(parent.filesystem.name, { name: "", fullPath: "/" });
                    var result = (entry.isDirectory) ? new (require('./DirectoryEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL) : new (require('cordova-plugin-file.FileEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL);
                    successCallback(result);
                }
            }
            else {
                // no Entry object returned
                if (fail) {
                    fail(FileError.NOT_FOUND_ERR);
                }
            }
        };

    // copy
    exec(success, fail, "File", "copyTo", [srcURL, parent.toInternalURL(), name]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

/**
 * Return a URL that can be passed across the bridge to identify this entry.
 */
<<<<<<< HEAD
Entry.prototype.toInternalURL = function () {
    if (this.filesystem && this.filesystem.__format__) {
        return this.filesystem.__format__(this.fullPath, this.nativeURL);
=======
Entry.prototype.toInternalURL = function() {
    if (this.filesystem && this.filesystem.__format__) {
      return this.filesystem.__format__(this.fullPath, this.nativeURL);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }
};

/**
 * Return a URL that can be used to identify this entry.
 * Use a URL that can be used to as the src attribute of a <video> or
 * <audio> tag. If that is not possible, construct a cdvfile:// URL.
 */
<<<<<<< HEAD
Entry.prototype.toURL = function () {
    if (this.nativeURL) {
        return this.nativeURL;
    }
    // fullPath attribute may contain the full URL in the case that
    // toInternalURL fails.
    return this.toInternalURL() || 'file://localhost' + this.fullPath;
=======
Entry.prototype.toURL = function() {
    if (this.nativeURL) {
      return this.nativeURL;
    }
    // fullPath attribute may contain the full URL in the case that
    // toInternalURL fails.
    return this.toInternalURL() || "file://localhost" + this.fullPath;
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

/**
 * Backwards-compatibility: In v1.0.0 - 1.0.2, .toURL would only return a
 * cdvfile:// URL, and this method was necessary to obtain URLs usable by the
 * webview.
 * See CB-6051, CB-6106, CB-6117, CB-6152, CB-6199, CB-6201, CB-6243, CB-6249,
 * and CB-6300.
 */
<<<<<<< HEAD
Entry.prototype.toNativeURL = function () {
=======
Entry.prototype.toNativeURL = function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    console.log("DEPRECATED: Update your code to use 'toURL'");
    return this.toURL();
};

/**
 * Returns a URI that can be used to identify this entry.
 *
 * @param {DOMString} mimeType for a FileEntry, the mime type to be used to interpret the file, when loaded through this URI.
 * @return uri
 */
<<<<<<< HEAD
Entry.prototype.toURI = function (mimeType) {
=======
Entry.prototype.toURI = function(mimeType) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    console.log("DEPRECATED: Update your code to use 'toURL'");
    return this.toURL();
};

/**
 * Remove a file or directory. It is an error to attempt to delete a
 * directory that is not empty. It is an error to attempt to delete a
 * root directory of a file system.
 *
 * @param successCallback {Function} called with no parameters
 * @param errorCallback {Function} called with a FileError
 */
<<<<<<< HEAD
Entry.prototype.remove = function (successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.remove', arguments);
    var fail = errorCallback && function (code) {
        errorCallback(new FileError(code));
    };
    exec(successCallback, fail, 'File', 'remove', [this.toInternalURL()]);
=======
Entry.prototype.remove = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.remove', arguments);
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(successCallback, fail, "File", "remove", [this.toInternalURL()]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

/**
 * Look up the parent DirectoryEntry of this entry.
 *
 * @param successCallback {Function} called with the parent DirectoryEntry object
 * @param errorCallback {Function} called with a FileError
 */
<<<<<<< HEAD
Entry.prototype.getParent = function (successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.getParent', arguments);
    var fs = this.filesystem;
    var win = successCallback && function (result) {
=======
Entry.prototype.getParent = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.getParent', arguments);
    var fs = this.filesystem;
    var win = successCallback && function(result) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        var DirectoryEntry = require('./DirectoryEntry');
        var entry = new DirectoryEntry(result.name, result.fullPath, fs, result.nativeURL);
        successCallback(entry);
    };
<<<<<<< HEAD
    var fail = errorCallback && function (code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, 'File', 'getParent', [this.toInternalURL()]);
=======
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, "File", "getParent", [this.toInternalURL()]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

module.exports = Entry;
