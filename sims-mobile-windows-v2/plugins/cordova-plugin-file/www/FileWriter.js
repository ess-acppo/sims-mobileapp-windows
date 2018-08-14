<<<<<<< HEAD
/*
=======
﻿/*
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
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
var ProgressEvent = require('./ProgressEvent');
=======
var exec = require('cordova/exec'),
    FileError = require('./FileError'),
    ProgressEvent = require('./ProgressEvent');
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

/**
 * This class writes to the mobile device file system.
 *
 * For Android:
 *      The root directory is the root of the file system.
 *      To write to the SD card, the file name is "sdcard/my_file.txt"
 *
 * @constructor
 * @param file {File} File object containing file properties
 * @param append if true write to the end of the file, otherwise overwrite the file
 */
<<<<<<< HEAD
var FileWriter = function (file) {
    this.fileName = '';
=======
var FileWriter = function(file) {
    this.fileName = "";
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    this.length = 0;
    if (file) {
        this.localURL = file.localURL || file;
        this.length = file.size || 0;
    }
    // default is to write at the beginning of the file
    this.position = 0;

    this.readyState = 0; // EMPTY

    this.result = null;

    // Error
    this.error = null;

    // Event handlers
    this.onwritestart = null;   // When writing starts
    this.onprogress = null;     // While writing the file, and reporting partial file data
    this.onwrite = null;        // When the write has successfully completed.
    this.onwriteend = null;     // When the request has completed (either in success or failure).
    this.onabort = null;        // When the write has been aborted. For instance, by invoking the abort() method.
    this.onerror = null;        // When the write has failed (see errors).
};

// States
FileWriter.INIT = 0;
FileWriter.WRITING = 1;
FileWriter.DONE = 2;

/**
 * Abort writing file.
 */
<<<<<<< HEAD
FileWriter.prototype.abort = function () {
=======
FileWriter.prototype.abort = function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    // check for invalid state
    if (this.readyState === FileWriter.DONE || this.readyState === FileWriter.INIT) {
        throw new FileError(FileError.INVALID_STATE_ERR);
    }

    // set error
    this.error = new FileError(FileError.ABORT_ERR);

    this.readyState = FileWriter.DONE;

    // If abort callback
<<<<<<< HEAD
    if (typeof this.onabort === 'function') {
        this.onabort(new ProgressEvent('abort', {'target': this}));
    }

    // If write end callback
    if (typeof this.onwriteend === 'function') {
        this.onwriteend(new ProgressEvent('writeend', {'target': this}));
=======
    if (typeof this.onabort === "function") {
        this.onabort(new ProgressEvent("abort", {"target":this}));
    }

    // If write end callback
    if (typeof this.onwriteend === "function") {
        this.onwriteend(new ProgressEvent("writeend", {"target":this}));
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }
};

/**
 * Writes data to the file
 *
 * @param data text or blob to be written
 * @param isPendingBlobReadResult {Boolean} true if the data is the pending blob read operation result
 */
<<<<<<< HEAD
FileWriter.prototype.write = function (data, isPendingBlobReadResult) {

    var that = this;
    var supportsBinary = (typeof window.Blob !== 'undefined' && typeof window.ArrayBuffer !== 'undefined');
    /* eslint-disable no-undef */
    var isProxySupportBlobNatively = (cordova.platformId === 'windows8' || cordova.platformId === 'windows');
=======
FileWriter.prototype.write = function(data, isPendingBlobReadResult) {

    var that=this;
    var supportsBinary = (typeof window.Blob !== 'undefined' && typeof window.ArrayBuffer !== 'undefined');
    var isProxySupportBlobNatively = (cordova.platformId === "windows8" || cordova.platformId === "windows");
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    var isBinary;

    // Check to see if the incoming data is a blob
    if (data instanceof File || (!isProxySupportBlobNatively && supportsBinary && data instanceof Blob)) {
        var fileReader = new FileReader();
<<<<<<< HEAD
        /* eslint-enable no-undef */
        fileReader.onload = function () {
=======
        fileReader.onload = function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // Call this method again, with the arraybuffer as argument
            FileWriter.prototype.write.call(that, this.result, true /* isPendingBlobReadResult */);
        };
        fileReader.onerror = function () {
            // DONE state
            that.readyState = FileWriter.DONE;

            // Save error
            that.error = this.error;

            // If onerror callback
<<<<<<< HEAD
            if (typeof that.onerror === 'function') {
                that.onerror(new ProgressEvent('error', {'target': that}));
            }

            // If onwriteend callback
            if (typeof that.onwriteend === 'function') {
                that.onwriteend(new ProgressEvent('writeend', {'target': that}));
=======
            if (typeof that.onerror === "function") {
                that.onerror(new ProgressEvent("error", {"target":that}));
            }

            // If onwriteend callback
            if (typeof that.onwriteend === "function") {
                that.onwriteend(new ProgressEvent("writeend", {"target":that}));
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            }
        };

        // WRITING state
        this.readyState = FileWriter.WRITING;

        if (supportsBinary) {
            fileReader.readAsArrayBuffer(data);
        } else {
            fileReader.readAsText(data);
        }
        return;
    }

    // Mark data type for safer transport over the binary bridge
    isBinary = supportsBinary && (data instanceof ArrayBuffer);
<<<<<<< HEAD
    if (isBinary && cordova.platformId === 'windowsphone') { // eslint-disable-line no-undef
        // create a plain array, using the keys from the Uint8Array view so that we can serialize it
        data = Array.apply(null, new Uint8Array(data));
    }

=======
    if (isBinary && cordova.platformId === "windowsphone") {
        // create a plain array, using the keys from the Uint8Array view so that we can serialize it
        data = Array.apply(null, new Uint8Array(data));
    }
    
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    // Throw an exception if we are already writing a file
    if (this.readyState === FileWriter.WRITING && !isPendingBlobReadResult) {
        throw new FileError(FileError.INVALID_STATE_ERR);
    }

    // WRITING state
    this.readyState = FileWriter.WRITING;

    var me = this;

    // If onwritestart callback
<<<<<<< HEAD
    if (typeof me.onwritestart === 'function') {
        me.onwritestart(new ProgressEvent('writestart', {'target': me}));
=======
    if (typeof me.onwritestart === "function") {
        me.onwritestart(new ProgressEvent("writestart", {"target":me}));
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }

    // Write file
    exec(
        // Success callback
<<<<<<< HEAD
        function (r) {
=======
        function(r) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // If DONE (cancelled), then don't do anything
            if (me.readyState === FileWriter.DONE) {
                return;
            }

            // position always increases by bytes written because file would be extended
            me.position += r;
            // The length of the file is now where we are done writing.

            me.length = me.position;

            // DONE state
            me.readyState = FileWriter.DONE;

            // If onwrite callback
<<<<<<< HEAD
            if (typeof me.onwrite === 'function') {
                me.onwrite(new ProgressEvent('write', {'target': me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === 'function') {
                me.onwriteend(new ProgressEvent('writeend', {'target': me}));
            }
        },
        // Error callback
        function (e) {
=======
            if (typeof me.onwrite === "function") {
                me.onwrite(new ProgressEvent("write", {"target":me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === "function") {
                me.onwriteend(new ProgressEvent("writeend", {"target":me}));
            }
        },
        // Error callback
        function(e) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // If DONE (cancelled), then don't do anything
            if (me.readyState === FileWriter.DONE) {
                return;
            }

            // DONE state
            me.readyState = FileWriter.DONE;

            // Save error
            me.error = new FileError(e);

            // If onerror callback
<<<<<<< HEAD
            if (typeof me.onerror === 'function') {
                me.onerror(new ProgressEvent('error', {'target': me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === 'function') {
                me.onwriteend(new ProgressEvent('writeend', {'target': me}));
            }
        }, 'File', 'write', [this.localURL, data, this.position, isBinary]);
=======
            if (typeof me.onerror === "function") {
                me.onerror(new ProgressEvent("error", {"target":me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === "function") {
                me.onwriteend(new ProgressEvent("writeend", {"target":me}));
            }
        }, "File", "write", [this.localURL, data, this.position, isBinary]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

/**
 * Moves the file pointer to the location specified.
 *
 * If the offset is a negative number the position of the file
 * pointer is rewound.  If the offset is greater than the file
 * size the position is set to the end of the file.
 *
 * @param offset is the location to move the file pointer to.
 */
<<<<<<< HEAD
FileWriter.prototype.seek = function (offset) {
=======
FileWriter.prototype.seek = function(offset) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    // Throw an exception if we are already writing a file
    if (this.readyState === FileWriter.WRITING) {
        throw new FileError(FileError.INVALID_STATE_ERR);
    }

    if (!offset && offset !== 0) {
        return;
    }

    // See back from end of file.
    if (offset < 0) {
        this.position = Math.max(offset + this.length, 0);
<<<<<<< HEAD
    // Offset is bigger than file size so set position
    // to the end of the file.
    } else if (offset > this.length) {
        this.position = this.length;
    // Offset is between 0 and file size so set the position
    // to start writing.
    } else {
=======
    }
    // Offset is bigger than file size so set position
    // to the end of the file.
    else if (offset > this.length) {
        this.position = this.length;
    }
    // Offset is between 0 and file size so set the position
    // to start writing.
    else {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        this.position = offset;
    }
};

/**
 * Truncates the file to the size specified.
 *
 * @param size to chop the file at.
 */
<<<<<<< HEAD
FileWriter.prototype.truncate = function (size) {
=======
FileWriter.prototype.truncate = function(size) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    // Throw an exception if we are already writing a file
    if (this.readyState === FileWriter.WRITING) {
        throw new FileError(FileError.INVALID_STATE_ERR);
    }

    // WRITING state
    this.readyState = FileWriter.WRITING;

    var me = this;

    // If onwritestart callback
<<<<<<< HEAD
    if (typeof me.onwritestart === 'function') {
        me.onwritestart(new ProgressEvent('writestart', {'target': this}));
=======
    if (typeof me.onwritestart === "function") {
        me.onwritestart(new ProgressEvent("writestart", {"target":this}));
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }

    // Write file
    exec(
        // Success callback
<<<<<<< HEAD
        function (r) {
=======
        function(r) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // If DONE (cancelled), then don't do anything
            if (me.readyState === FileWriter.DONE) {
                return;
            }

            // DONE state
            me.readyState = FileWriter.DONE;

            // Update the length of the file
            me.length = r;
            me.position = Math.min(me.position, r);

            // If onwrite callback
<<<<<<< HEAD
            if (typeof me.onwrite === 'function') {
                me.onwrite(new ProgressEvent('write', {'target': me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === 'function') {
                me.onwriteend(new ProgressEvent('writeend', {'target': me}));
            }
        },
        // Error callback
        function (e) {
=======
            if (typeof me.onwrite === "function") {
                me.onwrite(new ProgressEvent("write", {"target":me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === "function") {
                me.onwriteend(new ProgressEvent("writeend", {"target":me}));
            }
        },
        // Error callback
        function(e) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // If DONE (cancelled), then don't do anything
            if (me.readyState === FileWriter.DONE) {
                return;
            }

            // DONE state
            me.readyState = FileWriter.DONE;

            // Save error
            me.error = new FileError(e);

            // If onerror callback
<<<<<<< HEAD
            if (typeof me.onerror === 'function') {
                me.onerror(new ProgressEvent('error', {'target': me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === 'function') {
                me.onwriteend(new ProgressEvent('writeend', {'target': me}));
            }
        }, 'File', 'truncate', [this.localURL, size]);
=======
            if (typeof me.onerror === "function") {
                me.onerror(new ProgressEvent("error", {"target":me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === "function") {
                me.onwriteend(new ProgressEvent("writeend", {"target":me}));
            }
        }, "File", "truncate", [this.localURL, size]);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

module.exports = FileWriter;
