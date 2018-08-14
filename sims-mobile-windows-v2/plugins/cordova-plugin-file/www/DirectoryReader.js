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
var exec = require('cordova/exec');
var FileError = require('./FileError');
=======
var exec = require('cordova/exec'),
    FileError = require('./FileError') ;
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

/**
 * An interface that lists the files and directories in a directory.
 */
<<<<<<< HEAD
function DirectoryReader (localURL) {
=======
function DirectoryReader(localURL) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    this.localURL = localURL || null;
    this.hasReadEntries = false;
}

/**
 * Returns a list of entries from a directory.
 *
 * @param {Function} successCallback is called with a list of entries
 * @param {Function} errorCallback is called with a FileError
 */
<<<<<<< HEAD
DirectoryReader.prototype.readEntries = function (successCallback, errorCallback) {
=======
DirectoryReader.prototype.readEntries = function(successCallback, errorCallback) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    // If we've already read and passed on this directory's entries, return an empty list.
    if (this.hasReadEntries) {
        successCallback([]);
        return;
    }
    var reader = this;
<<<<<<< HEAD
    var win = typeof successCallback !== 'function' ? null : function (result) {
        var retVal = [];
        for (var i = 0; i < result.length; i++) {
            var entry = null;
            if (result[i].isDirectory) {
                entry = new (require('./DirectoryEntry'))();
            } else if (result[i].isFile) {
=======
    var win = typeof successCallback !== 'function' ? null : function(result) {
        var retVal = [];
        for (var i=0; i<result.length; i++) {
            var entry = null;
            if (result[i].isDirectory) {
                entry = new (require('./DirectoryEntry'))();
            }
            else if (result[i].isFile) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                entry = new (require('./FileEntry'))();
            }
            entry.isDirectory = result[i].isDirectory;
            entry.isFile = result[i].isFile;
            entry.name = result[i].name;
            entry.fullPath = result[i].fullPath;
            entry.filesystem = new (require('./FileSystem'))(result[i].filesystemName);
            entry.nativeURL = result[i].nativeURL;
            retVal.push(entry);
        }
        reader.hasReadEntries = true;
        successCallback(retVal);
    };
<<<<<<< HEAD
    var fail = typeof errorCallback !== 'function' ? null : function (code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, 'File', 'readEntries', [this.localURL]);
=======
    var fail = typeof errorCallback !== 'function' ? null : function(code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, "File", "readEntries", [this.localURL]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

module.exports = DirectoryReader;
