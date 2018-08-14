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
var modulemapper = require('cordova/modulemapper');
var utils = require('cordova/utils');
var FileError = require('./FileError');
var ProgressEvent = require('./ProgressEvent');
var origFileReader = modulemapper.getOriginalSymbol(window, 'FileReader');
=======
var exec = require('cordova/exec'),
    modulemapper = require('cordova/modulemapper'),
    utils = require('cordova/utils'),
    FileError = require('./FileError'),
    ProgressEvent = require('./ProgressEvent'),
    origFileReader = modulemapper.getOriginalSymbol(window, 'FileReader');
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

/**
 * This class reads the mobile device file system.
 *
 * For Android:
 *      The root directory is the root of the file system.
 *      To read from the SD card, the file name is "sdcard/my_file.txt"
 * @constructor
 */
<<<<<<< HEAD
var FileReader = function () {
=======
var FileReader = function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    this._readyState = 0;
    this._error = null;
    this._result = null;
    this._progress = null;
    this._localURL = '';
<<<<<<< HEAD
    this._realReader = origFileReader ? new origFileReader() : {}; // eslint-disable-line new-cap
=======
    this._realReader = origFileReader ? new origFileReader() : {};
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
};

/**
 * Defines the maximum size to read at a time via the native API. The default value is a compromise between
 * minimizing the overhead of many exec() calls while still reporting progress frequently enough for large files.
 * (Note attempts to allocate more than a few MB of contiguous memory on the native side are likely to cause
 * OOM exceptions, while the JS engine seems to have fewer problems managing large strings or ArrayBuffers.)
 */
<<<<<<< HEAD
FileReader.READ_CHUNK_SIZE = 256 * 1024;
=======
FileReader.READ_CHUNK_SIZE = 256*1024;
>>>>>>> 64eb6f1... Plant Health Screens Draft 1

// States
FileReader.EMPTY = 0;
FileReader.LOADING = 1;
FileReader.DONE = 2;

<<<<<<< HEAD
utils.defineGetter(FileReader.prototype, 'readyState', function () {
    return this._localURL ? this._readyState : this._realReader.readyState;
});

utils.defineGetter(FileReader.prototype, 'error', function () {
    return this._localURL ? this._error : this._realReader.error;
});

utils.defineGetter(FileReader.prototype, 'result', function () {
    return this._localURL ? this._result : this._realReader.result;
});

function defineEvent (eventName) {
    utils.defineGetterSetter(FileReader.prototype, eventName, function () {
        return this._realReader[eventName] || null;
    }, function (value) {
=======
utils.defineGetter(FileReader.prototype, 'readyState', function() {
    return this._localURL ? this._readyState : this._realReader.readyState;
});

utils.defineGetter(FileReader.prototype, 'error', function() {
    return this._localURL ? this._error: this._realReader.error;
});

utils.defineGetter(FileReader.prototype, 'result', function() {
    return this._localURL ? this._result: this._realReader.result;
});

function defineEvent(eventName) {
    utils.defineGetterSetter(FileReader.prototype, eventName, function() {
        return this._realReader[eventName] || null;
    }, function(value) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        this._realReader[eventName] = value;
    });
}
defineEvent('onloadstart');    // When the read starts.
defineEvent('onprogress');     // While reading (and decoding) file or fileBlob data, and reporting partial file data (progress.loaded/progress.total)
defineEvent('onload');         // When the read has successfully completed.
defineEvent('onerror');        // When the read has failed (see errors).
defineEvent('onloadend');      // When the request has completed (either in success or failure).
defineEvent('onabort');        // When the read has been aborted. For instance, by invoking the abort() method.

<<<<<<< HEAD
function initRead (reader, file) {
    // Already loading something
    if (reader.readyState === FileReader.LOADING) {
        throw new FileError(FileError.INVALID_STATE_ERR);
=======
function initRead(reader, file) {
    // Already loading something
    if (reader.readyState == FileReader.LOADING) {
      throw new FileError(FileError.INVALID_STATE_ERR);
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }

    reader._result = null;
    reader._error = null;
    reader._progress = 0;
    reader._readyState = FileReader.LOADING;

<<<<<<< HEAD
    if (typeof file.localURL === 'string') {
=======
    if (typeof file.localURL == 'string') {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        reader._localURL = file.localURL;
    } else {
        reader._localURL = '';
        return true;
    }

    if (reader.onloadstart) {
<<<<<<< HEAD
        reader.onloadstart(new ProgressEvent('loadstart', {target: reader}));
=======
        reader.onloadstart(new ProgressEvent("loadstart", {target:reader}));
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }
}

/**
 * Callback used by the following read* functions to handle incremental or final success.
 * Must be bound to the FileReader's this along with all but the last parameter,
 * e.g. readSuccessCallback.bind(this, "readAsText", "UTF-8", offset, totalSize, accumulate)
 * @param readType The name of the read function to call.
 * @param encoding Text encoding, or null if this is not a text type read.
 * @param offset Starting offset of the read.
 * @param totalSize Total number of bytes or chars to read.
 * @param accumulate A function that takes the callback result and accumulates it in this._result.
 * @param r Callback result returned by the last read exec() call, or null to begin reading.
 */
<<<<<<< HEAD
function readSuccessCallback (readType, encoding, offset, totalSize, accumulate, r) {
=======
function readSuccessCallback(readType, encoding, offset, totalSize, accumulate, r) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    if (this._readyState === FileReader.DONE) {
        return;
    }

    var CHUNK_SIZE = FileReader.READ_CHUNK_SIZE;
    if (readType === 'readAsDataURL') {
        // Windows proxy does not support reading file slices as Data URLs
        // so read the whole file at once.
<<<<<<< HEAD
        CHUNK_SIZE = cordova.platformId === 'windows' ? totalSize : // eslint-disable-line no-undef
=======
        CHUNK_SIZE = cordova.platformId === 'windows' ? totalSize :
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
            // Calculate new chunk size for data URLs to be multiply of 3
            // Otherwise concatenated base64 chunks won't be valid base64 data
            FileReader.READ_CHUNK_SIZE - (FileReader.READ_CHUNK_SIZE % 3) + 3;
    }

<<<<<<< HEAD
    if (typeof r !== 'undefined') {
        accumulate(r);
        this._progress = Math.min(this._progress + CHUNK_SIZE, totalSize);

        if (typeof this.onprogress === 'function') {
            this.onprogress(new ProgressEvent('progress', {loaded: this._progress, total: totalSize}));
        }
    }

    if (typeof r === 'undefined' || this._progress < totalSize) {
=======
    if (typeof r !== "undefined") {
        accumulate(r);
        this._progress = Math.min(this._progress + CHUNK_SIZE, totalSize);

        if (typeof this.onprogress === "function") {
            this.onprogress(new ProgressEvent("progress", {loaded:this._progress, total:totalSize}));
        }
    }

    if (typeof r === "undefined" || this._progress < totalSize) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        var execArgs = [
            this._localURL,
            offset + this._progress,
            offset + this._progress + Math.min(totalSize - this._progress, CHUNK_SIZE)];
        if (encoding) {
            execArgs.splice(1, 0, encoding);
        }
        exec(
            readSuccessCallback.bind(this, readType, encoding, offset, totalSize, accumulate),
            readFailureCallback.bind(this),
<<<<<<< HEAD
            'File', readType, execArgs);
    } else {
        this._readyState = FileReader.DONE;

        if (typeof this.onload === 'function') {
            this.onload(new ProgressEvent('load', {target: this}));
        }

        if (typeof this.onloadend === 'function') {
            this.onloadend(new ProgressEvent('loadend', {target: this}));
=======
            "File", readType, execArgs);
    } else {
        this._readyState = FileReader.DONE;

        if (typeof this.onload === "function") {
            this.onload(new ProgressEvent("load", {target:this}));
        }

        if (typeof this.onloadend === "function") {
            this.onloadend(new ProgressEvent("loadend", {target:this}));
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        }
    }
}

/**
 * Callback used by the following read* functions to handle errors.
 * Must be bound to the FileReader's this, e.g. readFailureCallback.bind(this)
 */
<<<<<<< HEAD
function readFailureCallback (e) {
=======
function readFailureCallback(e) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    if (this._readyState === FileReader.DONE) {
        return;
    }

    this._readyState = FileReader.DONE;
    this._result = null;
    this._error = new FileError(e);

<<<<<<< HEAD
    if (typeof this.onerror === 'function') {
        this.onerror(new ProgressEvent('error', {target: this}));
    }

    if (typeof this.onloadend === 'function') {
        this.onloadend(new ProgressEvent('loadend', {target: this}));
=======
    if (typeof this.onerror === "function") {
        this.onerror(new ProgressEvent("error", {target:this}));
    }

    if (typeof this.onloadend === "function") {
        this.onloadend(new ProgressEvent("loadend", {target:this}));
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }
}

/**
 * Abort reading file.
 */
<<<<<<< HEAD
FileReader.prototype.abort = function () {
=======
FileReader.prototype.abort = function() {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    if (origFileReader && !this._localURL) {
        return this._realReader.abort();
    }
    this._result = null;

<<<<<<< HEAD
    if (this._readyState === FileReader.DONE || this._readyState === FileReader.EMPTY) {
        return;
=======
    if (this._readyState == FileReader.DONE || this._readyState == FileReader.EMPTY) {
      return;
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }

    this._readyState = FileReader.DONE;

    // If abort callback
    if (typeof this.onabort === 'function') {
<<<<<<< HEAD
        this.onabort(new ProgressEvent('abort', {target: this}));
    }
    // If load end callback
    if (typeof this.onloadend === 'function') {
        this.onloadend(new ProgressEvent('loadend', {target: this}));
=======
        this.onabort(new ProgressEvent('abort', {target:this}));
    }
    // If load end callback
    if (typeof this.onloadend === 'function') {
        this.onloadend(new ProgressEvent('loadend', {target:this}));
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    }
};

/**
 * Read text file.
 *
 * @param file          {File} File object containing file properties
 * @param encoding      [Optional] (see http://www.iana.org/assignments/character-sets)
 */
<<<<<<< HEAD
FileReader.prototype.readAsText = function (file, encoding) {
=======
FileReader.prototype.readAsText = function(file, encoding) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    if (initRead(this, file)) {
        return this._realReader.readAsText(file, encoding);
    }

    // Default encoding is UTF-8
<<<<<<< HEAD
    var enc = encoding || 'UTF-8';

    var totalSize = file.end - file.start;
    readSuccessCallback.bind(this)('readAsText', enc, file.start, totalSize, function (r) {
        if (this._progress === 0) {
            this._result = '';
=======
    var enc = encoding ? encoding : "UTF-8";

    var totalSize = file.end - file.start;
    readSuccessCallback.bind(this)("readAsText", enc, file.start, totalSize, function(r) {
        if (this._progress === 0) {
            this._result = "";
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        }
        this._result += r;
    }.bind(this));
};

<<<<<<< HEAD
=======

>>>>>>> 64eb6f1... Plant Health Screens Draft 1
/**
 * Read file and return data as a base64 encoded data url.
 * A data url is of the form:
 *      data:[<mediatype>][;base64],<data>
 *
 * @param file          {File} File object containing file properties
 */
<<<<<<< HEAD
FileReader.prototype.readAsDataURL = function (file) {
=======
FileReader.prototype.readAsDataURL = function(file) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    if (initRead(this, file)) {
        return this._realReader.readAsDataURL(file);
    }

    var totalSize = file.end - file.start;
<<<<<<< HEAD
    readSuccessCallback.bind(this)('readAsDataURL', null, file.start, totalSize, function (r) {
=======
    readSuccessCallback.bind(this)("readAsDataURL", null, file.start, totalSize, function(r) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        var commaIndex = r.indexOf(',');
        if (this._progress === 0) {
            this._result = r;
        } else {
            this._result += r.substring(commaIndex + 1);
        }
    }.bind(this));
};

/**
 * Read file and return data as a binary data.
 *
 * @param file          {File} File object containing file properties
 */
<<<<<<< HEAD
FileReader.prototype.readAsBinaryString = function (file) {
=======
FileReader.prototype.readAsBinaryString = function(file) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    if (initRead(this, file)) {
        return this._realReader.readAsBinaryString(file);
    }

    var totalSize = file.end - file.start;
<<<<<<< HEAD
    readSuccessCallback.bind(this)('readAsBinaryString', null, file.start, totalSize, function (r) {
        if (this._progress === 0) {
            this._result = '';
=======
    readSuccessCallback.bind(this)("readAsBinaryString", null, file.start, totalSize, function(r) {
        if (this._progress === 0) {
            this._result = "";
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        }
        this._result += r;
    }.bind(this));
};

/**
 * Read file and return data as a binary data.
 *
 * @param file          {File} File object containing file properties
 */
<<<<<<< HEAD
FileReader.prototype.readAsArrayBuffer = function (file) {
=======
FileReader.prototype.readAsArrayBuffer = function(file) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
    if (initRead(this, file)) {
        return this._realReader.readAsArrayBuffer(file);
    }

    var totalSize = file.end - file.start;
<<<<<<< HEAD
    readSuccessCallback.bind(this)('readAsArrayBuffer', null, file.start, totalSize, function (r) {
=======
    readSuccessCallback.bind(this)("readAsArrayBuffer", null, file.start, totalSize, function(r) {
>>>>>>> 64eb6f1... Plant Health Screens Draft 1
        var resultArray = (this._progress === 0 ? new Uint8Array(totalSize) : new Uint8Array(this._result));
        resultArray.set(new Uint8Array(r), this._progress);
        this._result = resultArray.buffer;
    }.bind(this));
};

module.exports = FileReader;
