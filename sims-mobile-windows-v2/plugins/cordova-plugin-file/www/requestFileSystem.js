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
    // For browser platform: not all browsers use this file.
    function checkBrowser () {
        if (cordova.platformId === 'browser' && require('./isChrome')()) { // eslint-disable-line no-undef
=======
(function() {
    //For browser platform: not all browsers use this file.
    function checkBrowser() {
        if (cordova.platformId === "browser" && require('./isChrome')()) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            module.exports = window.requestFileSystem || window.webkitRequestFileSystem;
            return true;
        }
        return false;
    }
    if (checkBrowser()) {
        return;
    }

<<<<<<< HEAD
    var argscheck = require('cordova/argscheck');
    var FileError = require('./FileError');
    var FileSystem = require('./FileSystem');
    var exec = require('cordova/exec');
=======
    var argscheck = require('cordova/argscheck'),
        FileError = require('./FileError'),
        FileSystem = require('./FileSystem'),
        exec = require('cordova/exec');
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    var fileSystems = require('./fileSystems');

    /**
     * Request a file system in which to store application data.
     * @param type  local file system type
     * @param size  indicates how much storage space, in bytes, the application expects to need
     * @param successCallback  invoked with a FileSystem object
     * @param errorCallback  invoked if error occurs retrieving file system
     */
<<<<<<< HEAD
    var requestFileSystem = function (type, size, successCallback, errorCallback) {
        argscheck.checkArgs('nnFF', 'requestFileSystem', arguments);
        var fail = function (code) {
=======
    var requestFileSystem = function(type, size, successCallback, errorCallback) {
        argscheck.checkArgs('nnFF', 'requestFileSystem', arguments);
        var fail = function(code) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            if (errorCallback) {
                errorCallback(new FileError(code));
            }
        };

        if (type < 0) {
            fail(FileError.SYNTAX_ERR);
        } else {
            // if successful, return a FileSystem object
<<<<<<< HEAD
            var success = function (file_system) {
                if (file_system) {
                    if (successCallback) {
                        fileSystems.getFs(file_system.name, function (fs) {
=======
            var success = function(file_system) {
                if (file_system) {
                    if (successCallback) {
                        fileSystems.getFs(file_system.name, function(fs) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                            // This should happen only on platforms that haven't implemented requestAllFileSystems (windows)
                            if (!fs) {
                                fs = new FileSystem(file_system.name, file_system.root);
                            }
                            successCallback(fs);
                        });
                    }
<<<<<<< HEAD
                } else {
=======
                }
                else {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
                    // no FileSystem object returned
                    fail(FileError.NOT_FOUND_ERR);
                }
            };
<<<<<<< HEAD
            exec(success, fail, 'File', 'requestFileSystem', [type, size]);
=======
            exec(success, fail, "File", "requestFileSystem", [type, size]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        }
    };

    module.exports = requestFileSystem;
})();
