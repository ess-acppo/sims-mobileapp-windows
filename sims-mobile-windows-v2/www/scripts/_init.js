/* Framework Variables */
var mapPath;
var emptyTilePath;
var greenTilePath;
var AppMode;
var debugMode;
var ServerAddress;
var devServerAddress;
var sitServerAddress;
var uatServerAddress;
var prodServerAddress;
var authAddress;
var ActivityAddress;
var ActivityAddressAH;
var refCodesAddress;
var refCodesAddressAH;
var BPHStaffAddress;
var IPHStaffAddress;
var NPHStaffAddress;
var NAFStaffAddress;
var taxaAddress;
var submitPHObsAddress;
var submitAHObsAddress;
var submitAHFAObsAddress;
var submitAHGObsAddress;
var speciesTaxonSyndromSamplesAddress;
var infoWindow;
var zoomlevel = document.getElementById('zoomlevel');
var settings = document.getElementById('AppMode');
var statusElem = document.getElementById('status');
var appEnv = document.getElementById('AppEnv');
var map;
var myCenter;
var results;
var resSettings;
var newMarker;
var db = null;
var markers = [];
var markerCluster;
var table;
var curPos;
var curIdx;
var curLat;
var curLng;
var curAlt;
var curWkt;
var curDiscipline;
var resizeId;
var firstLoad = 0;
var numAttachments = 0;
var numObsAttachments = 0;
var numSampleAttachments = 0;
var downerId;
var downerTeam;
var TILE_SIZE = 256;
var tiles = 0;
var minX;
var minY;
var maxX;
var maxY;
var cX;
var cY;
var allLats = [];
var allLngs = [];
var curLats = [];
var curLngs = [];
var alltPs = [];
var cLatitude;
var cLongitude;
var cWkt;
var staffData;
var staffDataNPH;
var staffDataBPH;
var staffDataIPH;
var staffDataNAF;
var staffDataS;
var staffDataFull;
var track_id = '';
var watch_id = null;
var tracking_data = [];
var elementc;
var mapc;
var trackCoords;
var myLatLng;
var paths = [];
var trackPath;
/* Framework Variables */

/* AH Initialized variables */
//var species = '<div class="row col-md-12 sims dynarow"><div class="form-group col-xs-2"><input type="text" class="form-control speciesText"/></div><div class="form-group col-xs-2"><label>Taxon Name<span class="bold-red">*</span></label></div><div class="form-group col-xs-2"><input type="text" class="form-control taxonText" placeholder="Taxon Name" name="taxonName"></div><div class="form-group col-xs-3" ><label>Number in Group<span class="bold-red">*</span></label></div><div class="form-group col-xs-1"><input type="text" class="form-control" placeholder="#" name="Number"></div><div class="form-group col-xs-1"><button type="button" class="btn btn-danger btn-circle btn-xs pull-right removeSpecies"><i class="fa fa-times-circle fa-2x"></i></button></div></div>';
//var fieldtest = '<div class="row col-md-12 sims dynarow fieldtest"><div class="form-group col-xs-12"><label class="ftName">Field Test 1</label><i class="fa fa-times-circle fa-2x text-default removeFieldTest pull-right"></i></div><div class="form-group col-xs-6"><label>Fieldtest Name<span class="bold-red">*</span></label><input type="text" class="form-control hide" placeholder="Field Test ID" name="ftId"/><select class="form-control" name="fieldTest"></select></div><div class="form-group col-xs-6"><label>&nbsp;</label><br/><input type="checkbox" name="ftInvalid" class="minimal"><label>Invalid</label></div><div class="row col-xs-12 diseases indentLeft"></div><div class="form-group col-xs-11"><label>Field Test Comment</label><input type="text" class="form-control" name="ftComment"/></div></div>';
//var preFieldtest = '<div class="row col-md-12 sims dynarow fieldtest"><div class="form-group col-xs-12"><label class="ftName">Field Test 1</label><i class="fa fa-times-circle fa-2x text-default removePreFieldTest pull-right"></i></div><div class="form-group col-xs-6"><label>Fieldtest Name<span class="bold-red">*</span></label><input type="text" class="form-control hide" placeholder="Field Test ID" name="ftId"/><select class="form-control" name="pFieldTest"></select></div><div class="form-group col-xs-6"><label>&nbsp;</label><br/><input type="checkbox" name="ftInvalid" class="minimal"><label>Invalid</label></div><div class="row col-xs-12 diseases indentLeft"></div><div class="form-group col-xs-11"><label>Field Test Comment</label><input type="text" class="form-control" name="ftComment"/></div></div>';
///var maggotSample = '<div class="row col-md-12 sims dynarow maggotSample"><div class="form-group col-xs-12"><label class="sampleName">Maggot Sample 1</label><i class="fa fa-times-circle fa-2x text-default removeMaggotSample pull-right"></i></div><div class="form-group col-xs-12"><label>Sample Field Id<span class="bold-red">*</span></label><input type="text" class="form-control nextid" placeholder="Sample Field Id" name="msfieldID" value="1"></div><div class="form-group col-xs-12"><label>Sample Type<span class="bold-red">*</span></label><select class="form-control" name="msType"><option selected>Maggots</option></select></div><div class="form-group col-xs-12"><label>Pathogen/Test Type</label><br /><input type="checkbox" class="form-control minimal" name="swfExcl" value="swfExcl" checked><label>SWF Exclusion</label></div><div class="form-group col-xs-12"><label>Additional Comment</label><textarea class="form-control" rows="3" name="msNotes" placeholder="Notes ..."></textarea></div></div>';
//var sample = '<div class="row col-md-12 sims dynarow sample"><div class="form-group col-xs-12"><label class="sampleName">Sample 1</label><i class="fa fa-times-circle fa-2x text-default removeSample pull-right"></i></div><div class="form-group col-xs-6"><label>Sample Field ID</label><input type="text" class="form-control nextid" readonly placeholder="Sample Field ID" value="1" name="sampleId"></div><div class="form-group col-xs-6"><label>Sample Type</label><select class="form-control" name="sampleType"></select></div><div class="form-group col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 sims testTypes indentLeft"></div></div><div class="form-group col-xs-12 border-bottom"><label>Additional Comments</label><textarea class="form-control" rows="6" name="sAddlComments"></textarea></div></div>';
//var preSample = '<div class="row col-md-12 sims dynarow sample"><div class="form-group col-xs-12"><label class="sampleName">Sample 1</label><i class="fa fa-times-circle fa-2x text-default removePreSample pull-right"></i></div><div class="form-group col-xs-6"><label>Sample Field ID</label><input type="text" class="form-control nextid" readonly placeholder="Sample Field ID" value="" name="sampleId"></div><div class="form-group col-xs-6"><label>Sample Type</label><select class="form-control" name="sampleType"></select></div><div class="form-group col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 sims testTypes indentLeft"></div></div><div class="form-group col-xs-12 border-bottom"><label>Additional Comments</label><textarea class="form-control" rows="6" name="sAddlComments"></textarea></div></div>';
//var samples = 0;
//var fieldTests = 0;
/* AH Initialized variables */

/* Core Framework Code */
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}
google.maps.Polygon.prototype.Contains = function (point) {
    var crossings = 0,
        path = this.getPath();

    // for each edge
    for (var i = 0; i < path.getLength(); i++) {
        var a = path.getAt(i),
            j = i + 1;
        if (j >= path.getLength()) {
            j = 0;
        }
        var b = path.getAt(j);
        if (rayCrossesSegment(point, a, b)) {
            crossings++;
        }
    }

    // odd number of crossings?
    return (crossings % 2 === 1);

    function rayCrossesSegment(point, a, b) {
        var px = point.lng(),
            py = point.lat(),
            ax = a.lng(),
            ay = a.lat(),
            bx = b.lng(),
            by = b.lat();
        if (ay > by) {
            ax = b.lng();
            ay = b.lat();
            bx = a.lng();
            by = a.lat();
        }
        // alter longitude to cater for 180 degree crossings
        if (px < 0) {
            px += 360;
        }
        if (ax < 0) {
            ax += 360;
        }
        if (bx < 0) {
            bx += 360;
        }

        if (py === ay || py === by) py += 0.00000001;
        if ((py > by || py < ay) || (px > Math.max(ax, bx))) return false;
        if (px < Math.min(ax, bx)) return true;

        var red = (ax !== bx) ? ((by - ay) / (bx - ax)) : Infinity;
        var blue = (ax !== px) ? ((py - ay) / (px - ax)) : Infinity;
        return (blue >= red);

    }
};
function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}
function xmlToJson(xml) {
    // Create the return object
    var obj = {};
    if (xml.nodeType === 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === 3) { // text
        obj = xml.nodeValue;
    }
    // do children
    // If just one text node inside
    if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
        obj = xml.childNodes[0].nodeValue;
    }
    else if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) === "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) === "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}
function sortObject(o) {
    var sorted = {},
        key, a = [];
    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }
    a.sort();
    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}
String.prototype.escapeSpecialChars = function () {
    return this.replace(/\\"/g, '\\"').replace('image\/jpeg', 'image/jpeg');
};
function flatObjectToString(obj) {
    var s = "";
    Object.keys(obj).map(key => {
        if (obj[key] === null) {
            s += key + ":";
        } else if (obj[key].toLocaleDateString) {
            s += key + ": " + obj[key].toLocaleDateString() + "\n";
        } else if (obj[key] instanceof Array) {
            s += key + ":\n" + listToFlatString(obj[key]);
        } else if (typeof obj[key] === "object") {
            s += key + ":\n" + flatObjectToString(obj[key]);
        } else {
            s += key + ":" + obj[key];
        }
        s += "\n";
    });
    return s;
}
function listToFlatString(list) {
    var s = "";
    list.map(item => {
        Object.keys(item).map(key => {
            s += "";
            if (item[key] instanceof Array) {
                s += key + "\n" + listToFlatString(item[key]);
            } else if (typeof item[key] === "object" && item[key] !== null) {
                s += key + ": " + flatObjectToString(item[key]);
            } else {
                s += key + ": " + (item[key] === null ? "" : item[key].toLocaleDateString ? item[key].toLocaleDateString : item[key].toString());
            }
            s += "\n";
        });
    });
    return s;
}
function flatten(object, addToList, prefix) {
    Object.keys(object).map(key => {
        if (object[key] === null) {
            addToList[prefix + key] = "";
        } else
            if (object[key] instanceof Array) {
                // addToList[prefix + key] = listToFlatString(object[key]);
                for (i in object[key]) {
                    //flatten(object[key][i], addToList, prefix + key + "." + i);
                    flatten(object[key][i], addToList, '');
                }
            } else if (typeof object[key] === 'object' && !object[key].toLocaleDateString) {
                //flatten(object[key], addToList, prefix + key + '.');
                flatten(object[key], addToList, '');
            } else {
                if (key === "SurvActivityId_M_N") {
                    addToList[prefix + key] = getSurvActivity(object[key]);
                }
                else if (key === "SiteId_O_N") {
                    addToList[prefix + key] = getSite(object["SurvActivityId_M_N"], object[key]);
                }
                else { addToList[prefix + key] = object[key]; }
            }
    });
    return addToList;
}
function project(latLng) {
    var siny = Math.sin(latLng.lat() * Math.PI / 180);
    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);
    return new google.maps.Point(
        TILE_SIZE * (0.5 + latLng.lng() / 360),
        TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
}
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
$('input[type="checkbox"].minimal').on('ifClicked', function (event) {
    //alert(event.type + ' callback');
    event.preventDefault();
    $(this).val('Y');
});
$(document).on('ifClicked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    event.preventDefault();
    if ($(this).data('validate') !== 'N') {
        //console.log($(this).val());
        $('#form1').find("input[name^='" + $(this).attr('name') + "']").val($(this).data("code"));
    }
});
$(document).on('change', 'input:radio', function (e) {
    e.preventDefault();
    if ($(this).is(":checked") && $(this).data('validate') !== 'N') {
        $('#form1').find("input[type='radio'][name^='" + $(this).attr('name') + "']").val($(this).data("code"));
    }
});
/* Core Framework Code */

/* SprinQ Framework Code */
$(document).ready(function () {
    $('.modal-body').height($(window).height() / 1.4);
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
});
function doneResizing() {
    $('.modal-body').height($(window).height() / 1.4);
}
$(window).resize(function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
});
setInterval(function () {
    statusElem.className = navigator.onLine ? 'label label-success' : 'label label-info';
    statusElem.innerHTML = navigator.onLine ? 'online' : 'offline';
}, 1000);
function checkPermissions() {
    var permissions = cordova.plugins.permissions;
    permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE,
        function success(status) {
            if (!status.hasPermission) error();
        }, function error() {
            console.warn('Storage permission not granted!');
        });
    permissions.requestPermission(permissions.ACCESS_FINE_LOCATION,
        function success(status) {
            if (!status.hasPermission) error();
        }, function error() {
            console.warn('Location permission not granted!');
        });
    permissions.requestPermission(permissions.CAMERA,
        function success(status) {
            if (!status.hasPermission) error();
        }, function error() {
            console.warn('Location permission not granted!');
        });
    function error() {
        console.warn('Error granting permission!');
    }
}
function initSettings() {
    switch (AppMode) {
        case "PH":
            //$('#mb6 .progText').text("Loading App Defaults ...");
            //$.growl.notice({ title: "", message: "Loading ...", location: "bc", size: "small" });
            //Loading PH reference codes
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM phrefcodes WHERE id = ?", [1], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        PHRefCodes = JSON.parse(res.rows.item(0).settingsval);
                        loadPHRefCodes();
                    }
                    else {
                        //This is the first load
                        syncPHRefCodes();
                        loadPHRefCodes();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading PH ReferenceCodes. ", location: "tc", size: "large", fixed: "true" });
            });
            //Loading taxa data
            //$.growl.notice({ title: "", message: "Loading PH Taxa ...", location: "bc", size: "small" });
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM taxadata WHERE id = ?", [1], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        taxaData = JSON.parse(res.rows.item(0).settingsval);
                    }
                    else {
                        //This is the first load
                        syncTaxaData();
                    }
                    taxaBotEnt = { "taxaBotEnt": [] };
                    taxaBotEnt.taxaBotEnt = taxaData.taxaBotany;
                    var result1 = { "id": 0, "name": "" };
                    var obj1 = taxaData.taxaEntomology;
                    $.each(obj1, function (key, value) {
                        result1 = { "id": value.id, "name": value.name };
                        taxaBotEnt.taxaBotEnt.push(result1);
                    });

                    taxaBotPath = { "taxaBotPath": [] };
                    taxaBotPath.taxaBotPath = taxaData.taxaBotany;
                    var result2 = { "id": 0, "name": "" };
                    var obj2 = taxaData.taxaPathology;
                    $.each(obj2, function (key, value) {
                        result2 = { "id": value.id, "name": value.name };
                        taxaBotPath.taxaBotPath.push(result2);
                    });
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading Taxa Data. ", location: "tc", size: "large", fixed: "true" });
            });
            //Loading Activity Data
            //$.growl.notice({ title: "", message: "Loading Activity Data ...", location: "bc", size: "small" });
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM activitydata WHERE id = ?", [1], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        ActivityData = JSON.parse(res.rows.item(0).settingsval);
                        //siteData = ActivityData.activities[0].sites;
                        //programId = ActivityData.activities[0].programId;
                        loadActivityData();
                    }
                    else {
                        //This is the first load
                        syncActivityData();
                        loadActivityData();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading PH Activity Data. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            //Loading Staff Data
            //$.growl.notice({ title: "", message: "Loading PH Staff Data ...", location: "bc", size: "small" });
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM staffdata WHERE settingstext = ?", ['BPHstaff'], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        staffDataBPH = JSON.parse(res.rows.item(0).settingsval);
                    }
                    else {
                        //This is the first load
                        syncBPHstaffData();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading BPH Staff Data. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM staffdata WHERE settingstext = ?", ['IPHstaff'], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        staffDataIPH = JSON.parse(res.rows.item(0).settingsval);
                    }
                    else {
                        //This is the first load
                        syncIPHstaffData();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading IPH Staff Data. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM staffdata WHERE settingstext = ?", ['NPHstaff'], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        staffDataNPH = JSON.parse(res.rows.item(0).settingsval);
                    }
                    else {
                        //This is the first load
                        syncNPHstaffData();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading NPH Staff Data. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            break;
        case "AH":
            //Loading PH reference codes
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM ahrefcodes WHERE id = ?", [1], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        AHRefCodes = JSON.parse(res.rows.item(0).settingsval);
                    }
                    else {
                        //This is the first load
                        syncAHRefCodes();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading AH ReferenceCodes." + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM ahrefcodes WHERE id = ?", [2], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        speciesTaxonSyndromSamples = JSON.parse(res.rows.item(0).settingsval);
                        defaultSpecies = JSON.parse(res.rows.item(0).settingsval);
                    }
                    else {
                        //This is the first load
                        syncspeciesTaxonSyndromSamples();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading AH ReferenceCodes2." + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM activitydataAH WHERE id = ?", [1], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        ActivityDataAH = JSON.parse(res.rows.item(0).settingsval);
                    }
                    else {
                        //This is the first load
                        syncActivityDataAH();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading AH Activity Data. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            //Loading Staff Data
            //$.growl.notice({ title: "", message: "Loading PH Staff Data ...", location: "bc", size: "small" });
            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM staffdataAH WHERE settingstext = ?", ['NAFstaff'], function (tx, res) {
                    //This is not the first load
                    if (res.rows && res.rows.length > 0) {
                        staffDataNAF = JSON.parse(res.rows.item(0).settingsval);
                    }
                    else {
                        //This is the first load
                        syncNAFstaffData();
                    }
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while loading BPH Staff Data. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            break;
    }
    //Loading maps and Markers
    //$.growl.notice({ title: "", message: "Loading Maps ...", location: "bc", size: "small" });
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM observations WHERE id = ?", [1], function (tx, res) {
            //This is not the first load
            //var arr = resSettings.settings.mapSets.filter(function (el) {
            //    return (el.activeFlag === 1);
            //});
            mapPath = resSettings.settings.mapSets[0].mapPath;
            emptyTilePath = resSettings.settings.mapSets[0].emptyTilePath;
            greenTilePath = resSettings.settings.mapSets[0].greenTilePath;
            myCenter = new google.maps.LatLng(Number(resSettings.settings.mapSets[0].mapCenter.lat), Number(resSettings.settings.mapSets[0].mapCenter.lng));
            var mymap = new MyMapType();
            function MyMapType() { }
            MyMapType.prototype.tileSize = new google.maps.Size(256, 256);
            MyMapType.prototype.maxZoom = resSettings.settings.mapSets[0].endZoom;
            MyMapType.prototype.minZoom = resSettings.settings.mapSets[0].startZoom;
            MyMapType.prototype.name = "Offline Map";
            MyMapType.prototype.getTile = function (coord, zoom, ownerDocument) {
                zoomlevel.innerHTML = 'zoom: ' + zoom;
                curZoom = zoom;
                var div = ownerDocument.createElement('div');
                var image = $('<img name="" src="' + mapPath + zoom + "/" + coord.x + "/" + coord.y + '.jpg"/>');
                image.error(function () {
                    if (curZoom >= 10) {
                        div.innerHTML = '<img name="" src="' + greenTilePath + '"/>';
                    } else { div.innerHTML = '<img name="" src="' + emptyTilePath + '"/>'; }
                });
                div.innerHTML = '<img name="" src="' + mapPath + zoom + "/" + coord.x + "/" + coord.y + '.jpg"/>';
                div.style.width = this.tileSize.width + 'px'; div.style.height = this.tileSize.height + 'px';
                return div;
            };
            var mapOptions = { zoom: resSettings.settings.mapSets[0].startZoom, center: myCenter, streetViewControl: false, panControl: false, zoomControl: false, mapTypeControl: false, scaleControl: false, overviewMapControl: false, mapTypeControlOptions: { mapTypeIds: ["xx"] } };
            map = new google.maps.Map(document.getElementById("map"), mapOptions); map.mapTypes.set('xx', mymap); map.setMapTypeId('xx');
            if (res.rows && res.rows.length > 0) {
                clearMarkers();
                if (AppMode === "PH") {
                    loadMapMarkers;
                }
                if (AppMode === "AH") {
                    loadMapMarkersAH();
                }
                google.maps.event.addListener(map, 'click', function (event) {
                    placeMarker(event.latLng);
                });
            }
            else {
                //This is the first load
                $.ajax({
                    method: "GET",
                    url: "data/observations2.json",
                    contentType: "json",
                    success: function (data) {
                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1; //January is 0!
                        var yyyy = today.getFullYear();
                        if (dd < 10) {
                            dd = '0' + dd;
                        }
                        if (mm < 10) {
                            mm = '0' + mm;
                        }
                        today = dd.toString() + '/' + mm.toString() + '/' + yyyy.toString();
                        results = JSON.parse(data);
                        db.transaction(function (tx) {
                            tx.executeSql("DELETE FROM observations", [], function (tx, res) {
                                //alert("Rows deleted.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while deleting row from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
                        });
                        db.transaction(function (tx) {
                            tx.executeSql("INSERT INTO observations (id, filedt, data) VALUES (?,?,?)", [1, today, JSON.stringify(data)], function (tx, res) {
                                //alert("Row inserted.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while inserting row to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
                        });
                        db.transaction(function (tx) {
                            tx.executeSql("UPDATE observations SET data = ?,filedt = ? WHERE id = ?", [JSON.stringify(results), today, 1], function (tx, res) {
                                //alert("Dataset updated.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while loading observations to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
                        });
                        clearMarkers();
                        if (AppMode === "PH") {
                            loadMapMarkers;
                        }
                        if (AppMode === "AH") {
                            loadMapMarkersAH();
                        }
                        google.maps.event.addListener(map, 'click', function (event) {
                            placeMarker(event.latLng);
                        });
                    },
                    failure: function () {
                        $.growl.error({ title: "", message: "Error!", location: "tc", size: "large", fixed: "true" });
                    }
                });
            }
            loadstaffData();
            if (AppMode === "PH") { loadSitePolygons(); }
            if ($("#modalProgress").data('bs.modal') && $("#modalProgress").data('bs.modal').isShown) { $('#modalProgress').modal('hide'); }
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while loading app settings. " + err.message, location: "tc", size: "large", fixed: "true" });
    });
}
function loadMapMarkers() {
    db.readTransaction(function (tx) {
        tx.executeSql("SELECT * FROM observations WHERE id = ?", [1], function (tx, res) {
            if (res.rows && res.rows.length > 0) {
                results = JSON.parse(res.rows.item(0).data);
                if (results.observations && results.observations.length > 0) {
                    for (var i = 0; i < results.observations.length; i++) {
                        if (results.observations[i].ObservationWhereWktClob_M_S && results.observations[i].ObservationWhereWktClob_M_S !== '') {
                            var wkt = new Wkt.Wkt();
                            wkt.read(results.observations[i].ObservationWhereWktClob_M_S);
                            wkt.toObject();
                            var latLng = new google.maps.LatLng(wkt.toJson().coordinates[1], wkt.toJson().coordinates[0]);
                            if (results.observations[i].PlantDisciplineCode_M_S) {
                                var ti = results.observations[i].id_M_N.toString().trim() + "/" + results.observations[i].PlantDisciplineCode_M_S.toString().trim();
                                var marker = new google.maps.Marker({
                                    position: latLng,
                                    map: map,
                                    title: ti
                                });
                                markers.push(marker);
                                google.maps.event.addListener(marker, 'click', function () {
                                    curIdx = this.title.split("/")[0];
                                    var curD = "'" + this.title.split("/")[1].toString().trim() + "'";
                                    curLat = this.getPosition().lat();
                                    curLng = this.getPosition().lng();
                                    //curAlt = this.getPosition().altitude();
                                    if (infoWindow) {
                                        infoWindow.close();
                                    }
                                    infoWindow = new google.maps.InfoWindow({
                                        content: '<div id="content"><h4>Observation ' + this.title + '</h4><div id="bodyContent">' +
                                        '<i class="fa fa-pencil fa-2x text-info" onclick="launchModal(' + curIdx + ',' + curD + ')"></i><label class="text-info">Edit</label></div></div>'
                                    });
                                    infoWindow.setPosition(this.position);
                                    infoWindow.open(map);
                                    map.setCenter(this.position);
                                });
                            }
                        }
                    }
                    var mcOptions = { gridSize: 50, maxZoom: 9, imagePath: 'mapfiles/markers2/m' };
                    markerCluster = new MarkerClusterer(map, markers, mcOptions);
                    google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
                        map.setCenter(cluster.getCenter());
                    });
                }
                //if ($("#modalProgress").data('bs.modal').isShown) { $('#modalProgress').modal('hide'); }
            }
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while retrieving observations. " + err.message, location: "tc", size: "large" });
    });
}
function loadMapMarkersAH() {
    db.readTransaction(function (tx) {
        tx.executeSql("SELECT * FROM observations WHERE id = ?", [1], function (tx, res) {
            if (res.rows && res.rows.length > 0) {
                results = JSON.parse(res.rows.item(0).data);
                if (results.observations && results.observations.length > 0) {
                    for (var i = 0; i < results.observations.length; i++) {
                        if (results.observations[i].ObservationWhereWktClob_M_S_0_1 && results.observations[i].ObservationWhereWktClob_M_S_0_1 !== '') {
                            var wkt = new Wkt.Wkt();
                            wkt.read(results.observations[i].ObservationWhereWktClob_M_S_0_1);
                            wkt.toObject();
                            var latLng = new google.maps.LatLng(wkt.toJson().coordinates[1], wkt.toJson().coordinates[0]);
                            if (results.observations[i].AnimalDisciplineCode_M_S) {
                                var ti = results.observations[i].id_M_N.toString().trim() + "/" + results.observations[i].AnimalDisciplineCode_M_S.toString().trim();
                                var marker = new google.maps.Marker({
                                    position: latLng,
                                    map: map,
                                    title: ti
                                });
                                markers.push(marker);
                                google.maps.event.addListener(marker, 'click', function () {
                                    curIdx = this.title.split("/")[0];
                                    var curD = "'" + this.title.split("/")[1].toString().trim() + "'";
                                    curLat = this.getPosition().lat();
                                    curLng = this.getPosition().lng();
                                    //curAlt = this.getPosition().altitude();
                                    if (infoWindow) {
                                        infoWindow.close();
                                    }
                                    infoWindow = new google.maps.InfoWindow({
                                        content: '<div id="content"><h4>Observation ' + this.title + '</h4><div id="bodyContent">' +
                                        '<i class="fa fa-pencil fa-2x text-info" onclick="launchModal(' + curIdx + ',' + curD + ')"></i><label class="text-info">Edit</label></div></div>'
                                    });
                                    infoWindow.setPosition(this.position);
                                    infoWindow.open(map);
                                    map.setCenter(this.position);
                                });
                            }
                        }
                    }
                    var mcOptions = { gridSize: 50, maxZoom: 9, imagePath: 'mapfiles/markers2/m' };
                    markerCluster = new MarkerClusterer(map, markers, mcOptions);
                    google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
                        map.setCenter(cluster.getCenter());
                    });
                }
                //if ($("#modalProgress").data('bs.modal').isShown) { $('#modalProgress').modal('hide'); }
            }
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while retrieving observations. " + err.message, location: "tc", size: "large" });
    });
}
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    if (markerCluster) { markerCluster.clearMarkers(); }
    markers = [];
}
$(document).on('click', '.getCoords', function (e) {
    var xlat = $('#form1').find('input.obslat');
    var xlng = $('#form1').find('input.obslng');
    var xdat = $('#form1').find('select.obsdat');
    var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
    var siteID = Number($('#form1').find('select[name="SiteId_O_N"] option:selected').val());
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (siteID > 0 && siteID < 99999 && checkMapBoundsBySite(position, siteID)) {
                xlat.val(position.coords.latitude.toFixed(5));
                xlng.val(position.coords.longitude.toFixed(5));
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
            if ((siteID === 0 || siteID === 99999) && checkMapBoundsByPos(position)) {
                xlat.val(position.coords.latitude.toFixed(5));
                xlng.val(position.coords.longitude.toFixed(5));
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "tc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "tc", size: "large" });
    }
    e.preventDefault();
});
function checkMapBoundsByLoc(location) {
    var outofbounds = true;
    $.each(alltPs, function (key, value) {
        if (value.Contains(location)) {
            outofbounds = false;
        }
    });
    if (outofbounds) {
        $.growl.warning({ title: "", message: "Location is outside map bounds!", location: "bc", size: "small" });
    }
    return true;
}
function checkMapBoundsByPos(position) {
    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var outofbounds = true;
    $.each(alltPs, function (key, value) {
        if (value.Contains(pos)) {
            outofbounds = false;
        }
    });
    if (outofbounds) {
        $.growl.warning({ title: "", message: "Location is outside map bounds!", location: "bc", size: "small" });
    }
    return true;
}
function checkMapBoundsBySite(position, siteId) {
    var arr = siteData.filter(function (el) {
        return (el.id === Number(siteId));
    });
    if (arr) {
        var wkt = new Wkt.Wkt();
        wkt.read(arr[0].locationDatum.wkt);
        wkt.toObject();

        // Set the initial Lat and Long of the Google Map
        var x = wkt.toJson().coordinates[0].length - 1;
        var myLatLng = new google.maps.LatLng(wkt.toJson().coordinates[0][x][1], wkt.toJson().coordinates[0][x][0]);

        trackCoords = [];
        if (trackPath) { trackPath.setMap(null); }
        // Add each GPS entry to an array
        for (var k = 0; k < wkt.toJson().coordinates[0].length; k++) {
            var latlngc = new google.maps.LatLng(wkt.toJson().coordinates[0][k][1], wkt.toJson().coordinates[0][k][0]);
            trackCoords.push(latlngc);
        };
        // Plot the GPS entries as a line on the Google Map
        trackPath = new google.maps.Polygon({
            map: map,
            path: trackCoords,
            strokeColor: "#FF0000",
            strokeOpacity: 0.0,
            strokeWeight: 2
        });
        //mapc.fitBounds(trackCoords);
        trackPath.setMap(map);
        //map.setZoom(15);
        //map.setCenter(myLatLng);

        var cLat = position.coords.latitude;
        var cLng = position.coords.longitude;
        var point = new google.maps.LatLng(cLat, cLng);

        if (trackPath.Contains(point)) {
            return true;
        }
        else {
            $.growl.warning({ title: "", message: "Location is outside site bounds!", location: "bc", size: "small" });
            return true;
            //return false;
        }
    }
    else {
        $.growl.warning({ title: "", message: "Location is outside site bounds!", location: "bc", size: "small" });
        return true;
        //return false;
    }
}
function placeMarker(location) {
    newMarker = new google.maps.Marker({
        position: location,
        map: map
    });
    curLat = newMarker.getPosition().lat();
    curLng = newMarker.getPosition().lng();
    curWkt = "POINT (" + curLng.toFixed(5) + " " + curLat.toFixed(5) + ")";
    //curAlt = newMarker.getPosition().altitude();
    if (AppMode === "PH" && !checkMapBoundsByLoc(location)) {
        newMarker.setMap(null);
    }
    else {
        curIdx = -1;
        switch (AppMode) {
            case 'IAH':
                $('#modalAHMenu').modal();
                break;
            case 'AH':
                $('#modalAHMenu').modal();
                break;
            case 'PH':
                $('#modalPHMenu').modal();
                break;
        };
    }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
function myLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (AppMode === "PH" && checkMapBoundsByPos(position)) {
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setZoom(9);
                map.setCenter(pos);
                $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
                placeMarker(pos);
            }
            if (AppMode === "AH") {
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setZoom(9);
                map.setCenter(pos);
                $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
                placeMarker(pos);
            }
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "tc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "tc", size: "large" });
    }
}
function getAltitude() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            //$('#form1').find("input[type='text'][name='latitude']").val(position.coords.latitude);
            //$('#form1').find("input[type='text'][name='longitude']").val(position.coords.longitude);
            //alert(position.coords.altitude);
            if (position.coords.altitude) {
                $('#form1').find("input[type='number'][name^='AltitudeNo']").val(Math.round(position.coords.altitude));
            }
        }, function () {
            $.growl.error({ title: "", message: "GetAltitude Failed on this platform.", location: "tc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "GeoLocation Failed.", location: "tc", size: "large" });
    }
}
function downloadCSV() {
    $('#mt1').text('All Observations');
    switch (AppMode) {
        case "IAH":
            $('#modalAHGrid').modal();
            break;
        case "AH":
            $('#modalAHGrid').modal();
            break;
        case "PH":
            $('#modalPHGrid').modal();
            break;
        default:
            break;
    }
}
function launchModal(e, f) {
    curIdx = e;
    curDiscipline = f;
    var arr = results.observations.filter(function (el, index) {
        if (el.id_M_N === e) { curPos = index; }
        return (el.id_M_N === e);
    });
    switch (f) {
        case 'SF':
            loadModalAH('mo_sngObservation');
            break;
        case 'G':
            loadModalAH('mo_grpObservation');
            break;
        case 'B':
            loadModal('mo_BotObservation');
            break;
        case 'E':
            loadModal('mo_EntObservation');
            break;
        case 'P':
            loadModal('mo_PatObservation');
            break;
    }
    $('#modalForm').modal();
}
function loadData() {
    var data;
    var tab;
    switch (AppMode) {
        case "AH":
            data = jQuery.grep(results.observations, function (n, i) {
                return (n.AnimalDisciplineCode_M_S === 'SF' || n.AnimalDisciplineCode_M_S === 'G');
            });
            table = $('#srchAHTable').DataTable({
                "data": data,
                "columns": [
                    { "data": "id_M_N" },
                    {
                        "data": "AnimalDisciplineCode_M_S",
                        "render": function (data, type, row, meta) {
                            if (data === 'SF') return "Single Feral";
                            if (data === 'G') return "Group";
                        }
                    },
                    {
                        "data": "activityId_M_N",
                        "render": function (data, type, row, meta) {
                            return getSurvActivityAH(data);
                        }
                    },
                    {
                        "data": "commonName_M_S",
                        "render": function (data, type, row, meta) {
                            return getCommonName(data);
                        }
                    },
                    {
                        "data": null,
                        "render": function (data, type, row) {
                            if (data["animalNumber_M_S"])
                            { return data["animalNumber_M_S"] * 1; }
                            else { return "-"; }
                        }
                    },
                    {
                        "data": "dateTime_M_D_0_1",
                        "render": function (data, type, row, meta) {
                            return moment(data).format("YYYY-MM-DD HH:MM:SS");
                        }
                    },
                    { "data": "ObservationWhereWktClob_M_S_0_1" },
                    { "data": "ObservWhereGpsDatumId_M_S_0_1" },
                    {
                        "data": "status_M_N",
                        "render": function (data, type, row, meta) {
                            if (data === 0) return "Saved";
                            if (data === 1) return "Submitted";
                        }
                    }
                ],
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": false
            });
            break;
        case "PH":
            data = jQuery.grep(results.observations, function (n, i) {
                return (n.PlantDisciplineCode_M_S === 'P' || n.PlantDisciplineCode_M_S === 'E' || n.PlantDisciplineCode_M_S === 'B');
            });
            table = $('#srchPHTable').DataTable({
                "data": data,
                "columns": [
                    { "data": "id_M_N" },
                    {
                        "data": "PlantDisciplineCode_M_S",
                        "render": function (data, type, row, meta) {
                            if (data === 'B') return "Botany";
                            if (data === 'E') return "Entomology";
                            if (data === 'P') return "Pathology";
                        }
                    },
                    {
                        "data": "SurvActivityId_M_N",
                        "render": function (data, type, row, meta) {
                            return getSurvActivity(data);
                        }
                    },
                    {
                        "data": "SiteId_O_N",
                        "render": function (data, type, row, meta) {
                            return getSite(row.SurvActivityId_M_N, data);
                        }
                    },
                    {
                        "data": "ObservationDate_M_D",
                        "render": function (data, type, row, meta) {
                            return moment(data).format("YYYY-MM-DD HH:MM:SS");
                        }
                    },
                    { "data": "WaypointNumber_O_N" },
                    { "data": "ObservationWhereWktClob_M_S" },
                    { "data": "ObservWhereGpsDatumId_M_S" },
                    {
                        "data": "status_M_N",
                        "render": function (data, type, row, meta) {
                            if (data === 0) return "Saved";
                            if (data === 1) return "Submitted";
                        }
                    }
                ],
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": false
            });
            break;
        default:
            data = results.observations;
    }
    //table.column(10).visible(false);
}
$(document).on('click', '#DownloadPH', function (event) {
    exportObservationsToCSV();
});
$(document).on('click', '#DownloadAH', function (event) {
    exportObservationsToCSV();
});
function objectifyForm(formArray) {//serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
    }
    return returnArray;
}
$(document).on('click', '#Save', function (e) {
    var obj;
    switch (AppMode) {
        case "PH":
            //var obj1 = JSON.stringify(objectifyForm(form1));
            obj = objectifyPHFormforSave(form1);
            obj.status_M_N = 0;
            //if (debugMode === 1) {
            //    $.confirm({
            //        title: 'Payload Saved!',
            //        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
            //        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
            //        buttons: {
            //            ok: function () { },
            //            copy: {
            //                text: 'Copy', // With spaces and symbols
            //                action: function () {
            //                    var copytext = this.$content.find("#Payload");
            //                    copytext.select();
            //                    document.execCommand("copy");
            //                    return false;
            //                }
            //            }
            //        }
            //    });
            //}
            if (curIdx > 0) {
                results.observations[curPos] = obj;
            }
            else {
                //console.log(JSON.stringify(obj));
                results.observations.push(obj);
                curIdx = obj.id_M_N;
                curPos = results.observations.length - 1;
            }
            db.transaction(function (tx) {
                tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                    //alert("Dataset updated.");
                    $.growl({ title: "", message: "Your changes have been saved!", location: "bc", size: "small" });
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while updating row to DB. " + err.message, location: "tc", size: "large" });
            });
            //$('#modalForm').modal('hide');
            //clearMarkers();
            //loadMapMarkers();
            //if (infoWindow) {
            //    infoWindow.close();
            //}
            break;
        case "AH":
            obj = objectifyAHFormforSave(form1);
            obj.status_M_N = 0;
            //if (debugMode === 1) {
            //    $.confirm({
            //        title: 'Payload Saved!',
            //        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
            //        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
            //        buttons: {
            //            ok: function () { },
            //            copy: {
            //                text: 'Copy', // With spaces and symbols
            //                action: function () {
            //                    var copytext = this.$content.find("#Payload");
            //                    copytext.select();
            //                    document.execCommand("copy");
            //                    return false;
            //                }
            //            }
            //        }
            //    });
            //}
            if (curIdx > 0) {
                results.observations[curPos] = obj;
            }
            else {
                //console.log(JSON.stringify(obj));
                results.observations.push(obj);
                curIdx = obj.id_M_N;
                curPos = results.observations.length - 1;
            }
            db.transaction(function (tx) {
                tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                    //alert("Dataset updated.");
                    $.growl({ title: "", message: "Your changes have been saved!", location: "bc", size: "small" });
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while updating row to DB. " + err.message, location: "tc", size: "large" });
            });
            //$('#modalForm').modal('hide');
            //clearMarkers();
            //loadMapMarkers();
            //if (infoWindow) {
            //    infoWindow.close();
            //}
            break;
    }

});
$(document).on('click', '#SaveExit', function (e) {
    var obj;
    switch (AppMode) {
        case "PH":
            //var obj1 = JSON.stringify(objectifyForm(form1));
            obj = objectifyPHFormforSave(form1);
            obj.status_M_N = 0;
            //if (debugMode === 1) {
            //    $.confirm({
            //        title: 'Payload Saved!',
            //        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
            //        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
            //        buttons: {
            //            ok: function () { },
            //            copy: {
            //                text: 'Copy', // With spaces and symbols
            //                action: function () {
            //                    var copytext = this.$content.find("#Payload");
            //                    copytext.select();
            //                    document.execCommand("copy");
            //                    return false;
            //                }
            //            }
            //        }
            //    });
            //}
            if (curIdx > 0) {
                results.observations[curPos] = obj;
            }
            else {
                //console.log(JSON.stringify(obj));
                results.observations.push(obj);
                curIdx = obj.id_M_N;
                //curIdx = results.observations.length;
            }
            db.transaction(function (tx) {
                tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                    //alert("Dataset updated.");
                    $.growl({ title: "", message: "Your changes have been saved!", location: "bc", size: "small" });
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while updating row to DB. " + err.message, location: "tc", size: "large" });
            });
            $('#modalForm').modal('hide');
            break;
        case "AH":
            //var obj1 = JSON.stringify(objectifyAHFormforSave(form1));
            //console.log(obj1);
            obj = objectifyAHFormforSave(form1);
            obj.status_M_N = 0;
            //if (debugMode === 1) {
            //    $.confirm({
            //        title: 'Payload Saved!',
            //        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
            //        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
            //        buttons: {
            //            ok: function () { },
            //            copy: {
            //                text: 'Copy', // With spaces and symbols
            //                action: function () {
            //                    var copytext = this.$content.find("#Payload");
            //                    copytext.select();
            //                    document.execCommand("copy");
            //                    return false;
            //                }
            //            }
            //        }
            //    });
            //}
            if (curIdx > 0) {
                results.observations[curPos] = obj;
            }
            else {
                //console.log(JSON.stringify(obj));
                results.observations.push(obj);
                curIdx = obj.id_M_N;
                //curIdx = results.observations.length;
            }
            db.transaction(function (tx) {
                tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                    //alert("Dataset updated.");
                    $.growl({ title: "", message: "Your changes have been saved!", location: "bc", size: "small" });
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while updating row to DB. " + err.message, location: "tc", size: "large" });
            });
            $('#modalForm').modal('hide');
            break;
    }
});
$(document).on('click', '#Submit2', function (e) {
    var obj;
    var rowsFailedErr = [];
    vError = 0;
    vErrDescription = [];
    vFailed = false;
    attachmentFlag = 0;
    CountListFlag = '';
    HostStatCountFlag = 0;
    HostStatAreaFlag = 0;
    PlantPreservationOtherFlag = 0;
    PlantTargetObservedCodeFlag = 0;
    var result;
    var preVal;
    switch (AppMode) {
        case "PH":
            obj = objectifyPHFormforSave(form1);
            //console.log(JSON.stringify(obj));
            preVal = preValidate();
            if (preVal.vError !== 0) {
                rowsFailedErr.push(preVal.vErrDescription);
                $.growl.error({ title: "", message: rowsFailedErr.join('<br/>'), location: "tc", size: "large", fixed: "true" });
                return false;
            }
            result = Iterate(obj);
            if (result.vError === 0) {
                //console.log(JSON.stringify(SubmitRecord(objectifyPHFormforSubmit(obj))));
                obj.status_M_N = 1;
                //if (debugMode === 1) {
                //    $.confirm({
                //        title: 'Payload marked for Submit!',
                //        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
                //        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                //        buttons: {
                //            ok: function () { },
                //            copy: {
                //                text: 'Copy', // With spaces and symbols
                //                action: function () {
                //                    var copytext = this.$content.find("#Payload");
                //                    copytext.select();
                //                    document.execCommand("copy");
                //                    return false;
                //                }
                //            }
                //        }
                //    });
                //}
                if (curIdx > 0) {
                    results.observations[curPos] = obj;
                }
                else {
                    results.observations.push(obj);
                    curIdx = obj.id_M_N;
                    //curIdx = results.observations.length;
                }
                db.transaction(function (tx) {
                    tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                        $.growl.notice({ title: "", message: "Observation marked for Sync.", location: "bc", size: "small" });
                    });
                }, function (err) {
                    $.growl.error({ title: "", message: "An error occured while saving row to DB. " + err.message, location: "tc", size: "large" });
                });
                $('#modalForm').modal('hide');
                //clearMarkers();
                //loadMapMarkers();
                //if (infoWindow) {
                //    infoWindow.close();
                //}
            }
            else {
                rowsFailedErr.push(result.vErrDescription);
                $.growl.error({ title: "", message: rowsFailedErr.join('<br/>'), location: "tc", size: "large", fixed: "true" });
            }
            break;
        case "AH":
            obj = objectifyAHFormforSave(form1);
            //console.log(JSON.stringify(obj));
            preVal = preValidateAH();
            if (preVal.vError !== 0) {
                rowsFailedErr.push(preVal.vErrDescription);
                $.growl.error({ title: "Errors", message: rowsFailedErr.join('<br/>'), location: "tc", size: "large", fixed: "true" });
                return false;
            }
            result = IterateAH(obj);
            if (result.vError === 0) {
                //console.log(JSON.stringify(SubmitRecord(objectifyPHFormforSubmit(obj))));
                obj.status_M_N = 1;
                //if (debugMode === 1) {
                //    $.confirm({
                //        title: 'Payload marked for Submit!',
                //        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
                //        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                //        buttons: {
                //            ok: function () { },
                //            copy: {
                //                text: 'Copy', // With spaces and symbols
                //                action: function () {
                //                    var copytext = this.$content.find("#Payload");
                //                    copytext.select();
                //                    document.execCommand("copy");
                //                    return false;
                //                }
                //            }
                //        }
                //    });
                //}
                if (curIdx > 0) {
                    results.observations[curPos] = obj;
                }
                else {
                    results.observations.push(obj);
                    curIdx = obj.id_M_N;
                    //curIdx = results.observations.length;
                }
                db.transaction(function (tx) {
                    tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                        $.growl.notice({ title: "", message: "Observation marked for Sync.", location: "bc", size: "small" });
                    });
                }, function (err) {
                    $.growl.error({ title: "", message: "An error occured while saving row to DB. " + err.message, location: "tc", size: "large" });
                });
                $('#modalForm').modal('hide');
            }
            else {
                rowsFailedErr.push(result.vErrDescription);
                $.growl.error({ title: "Errors", message: rowsFailedErr.join('<br/>'), location: "tc", size: "large", fixed: "true" });
            }
            break;
    }
});
$(document).on('click', '#settings', function (e) {
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#modalProgress').modal();
            $('#mb6 .progText').text("Loading ...");
            $('#mb6 .progress').addClass('hide');
            $('#mb6 .fa-clock-o').addClass('hide');
            $('#mb5').empty();
            $('#mt5').empty();
            $(document).find('script[id="pageScript"]').remove();
            $('#mb5').load('settings.html');
        }
    }).complete(function (e) {
        setTimeout(function (e) {
            if (AppMode === "PH") {
                $(".AnimalCurrNumber").addClass('hide');
                $("#curActivities").find('option').remove().end().append($('<option value="0">- select -</option>'));
                $.each(ActivityData.activities, function (key, val) {
                    if (val.programId === downerTeam) {
                        var option = $('<option />');
                        option.attr('value', val.activityId).text(val.activityName);
                        $("#curActivities").append(option);
                    }
                });
                $(".activityMaps").removeClass('hide');
                $('#form3').find('select[id="doTeam"]').find('option').remove().end().append("<option value=NPH>NPH</option><option value=BPH>BPH</option><option value=IPH>IPH</option>");
                $('#form3').find('select[id="deviceOwner"]').find('option').remove().end().append($(getStaffData(resSettings.settings.device.ownerTeam))).val(resSettings.settings.device.ownerId);
            }
            if (AppMode === "AH") {
                $(".SampleCurrNumber").addClass('hide');
                $(".activityMaps").addClass('hide');
                $('#form3').find('select[id="doTeam"]').find('option').remove().end().append("<option value=NAF>NAF</option>");
                $('#form3').find('select[id="deviceOwner"]').find('option').remove().end().append($(getStaffData("NAF"))).val(resSettings.settings.device.ownerId);
            }
        }, 300);
        $('#mb5').find('#appMode').val(AppMode);
        //var arr = resSettings.settings.mapSets.filter(function (el) {
        //    return (el.activeFlag === 1);
        //});
        //$('#form3').find('input[name="optMaps"][data-id="' + resSettings.settings.mapSets[0].mapsetID + '"]').iCheck('check');
        $('#form3').find('select[id="curActivities"]').val(resSettings.settings.mapSets[0].curActivity);
        $('#form3').find('label.mapNotes').eq(resSettings.settings.mapSets[0].mapsetID).text("Last downloaded on:" + resSettings.settings.mapSets[0].lastDownloadDate);
        $('#form3').find('label.mapBNotes').eq(resSettings.settings.mapSets[0].mapsetID).text("Last downloaded on:" + resSettings.settings.mapSets[0].lastDownloadBDate);
        if (resSettings.settings.device.ownerTeam) { $('#form3').find('select[id="doTeam"]').val(resSettings.settings.device.ownerTeam); }
        if (resSettings.settings.device.debugMode === 0) {
            $('#form3').find('input[id="debugMode"]').iCheck('uncheck');
            $('#showPayloads').addClass('hide');
        }
        if (resSettings.settings.device.debugMode === 1) {
            $('#form3').find('input[id="debugMode"]').iCheck('check');
            $('#showPayloads').removeClass('hide');
        }
        $('#form3').find('input[name="samplePrefix"]').val(resSettings.settings.device.samplePrefix);
        $('#form3').find('input[name="sampleCurrNum"]').val(resSettings.settings.device.currentSampleNumber);
        $('#form3').find('input[name="AnimalCurrNum"]').val(resSettings.settings.device.currentAnimalNumber);
    }).done(function () {
        $('#modalProgress').modal('hide');
        if (statusElem.innerHTML === 'online') {
            $('a.btnSync').removeClass('hide');
        }
        if (statusElem.innerHTML === 'offline') {
            $('a.btnSync').addClass('hide');
        }
    });
    $('#modalSettings').modal();
});
$(document).on('click', '#SaveSettingsExit', function (e) {
    var v_appMode = $('#form3').find('#appMode').val();
    if (!v_appMode) {
        $.growl.warning({ title: "", message: "Provide a valid mode: PH!", location: "tc", size: "large" });
        return false;
    }
    /* Set AppMode */
    resSettings.settings.app.appMode = v_appMode;
    /* Clear active Flag on Mapsets */
    $.each(resSettings.settings.mapSets, function (i, v) {
        resSettings.settings.mapSets[i].activeFlag = 0;
    });
    /* Set active Mapset */
    //ActiveMapset = $("input[name='optMaps']:checked").data('id');
    //if (ActiveMapset) { resSettings.settings.mapSets[ActiveMapset].activeFlag = 1; }
    resSettings.settings.mapSets[0].curActivity = $('#form3').find('select[id="curActivities"]').val();
    if (Number($('#form3').find('select[id="curActivities"]').val()) > 0)
        $.when(getMapBounds()).then(function () {
            resSettings.settings.mapSets[0].mapBounds.topLat = minX;
            resSettings.settings.mapSets[0].mapBounds.leftLng = minY;
            resSettings.settings.mapSets[0].mapBounds.bottomLat = maxX;
            resSettings.settings.mapSets[0].mapBounds.rightLng = maxY;
        });
    /* Set Device Owner */
    resSettings.settings.device.ownerId = $('#form3').find('select[id="deviceOwner"]').val();
    resSettings.settings.device.ownerTeam = $('#form3').find('select[id="doTeam"]').val();
    resSettings.settings.device.ownerName = $('#form3').find('select[id="deviceOwner"]').text();
    if ($('#form3').find('input[id="debugMode"]').val() === 'Y') {
        resSettings.settings.device.debugMode = 1;
        debugMode = 1;
    }
    if ($('#form3').find('input[id="debugMode"]').val() === 'N') {
        resSettings.settings.device.debugMode = 0;
        debugMode = 0;
    }
    resSettings.settings.device.samplePrefix = $('#form3').find('input[name="samplePrefix"]').val();
    resSettings.settings.device.sampleStartNumber = $('#form3').find('input[name="sampleStartNum"]').val();
    resSettings.settings.device.currentSampleNumber = $('#form3').find('input[name="sampleCurrNum"]').val();
    resSettings.settings.device.currentAnimalNumber = $('#form3').find('input[name="AnimalCurrNum"]').val();
    /* Save to DB */
    db.transaction(function (tx) {
        tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
            $.when(fetchSettings()).then(initSettings()).done(function () {
                $('#modalSettings').modal('hide');
            });
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while updating settings. " + err.message, location: "tc", size: "large" });
    });
});
$(document).on('click', '#zplus', function (e) {
    map.setZoom(curZoom + 1);
});
$(document).on('click', '#zminus', function (e) {
    map.setZoom(curZoom - 1);
});
$(document).on('click', '#Delete', function (e) {
    $.confirm({
        title: 'Delete Observation?',
        content: 'Do you want to delete this observation?',
        buttons: {
            Ok: function () {
                results.observations.splice(curPos, 1);
                db.transaction(function (tx) {
                    tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                        //alert("Dataset updated.");
                    });
                }, function (err) {
                    $.growl.error({ title: "", message: "An error occured while updating row to DB. " + err.message, location: "tc", size: "large" });
                });
                $('#modalForm').modal('hide');
                //table.destroy();
                //loadData();
                clearMarkers();
                if (AppMode === "PH") {
                    loadMapMarkers;
                }
                if (AppMode === "AH") {
                    loadMapMarkersAH();
                }
                if (infoWindow) {
                    infoWindow.close();
                }
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#srchPHTable tbody tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
    var d = table.row(this).data();
    curIdx = d.id_M_N;
    curDiscipline = d.PlantDisciplineCode_M_S;
    curPos = table.row(this).index();
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#modalProgress').modal();
            $('#mb6 .progText').text("Loading ...");
            $('#mb6 .progress').addClass('hide');
            $('#mb6 .fa-clock-o').addClass('hide');
        }
    })
        .complete(function (data) {
            switch (curDiscipline) {
                case "0":
                    loadModal('mo_sngObservation');
                    break;
                case "1":
                    loadModal('mo_grpObservation');
                    break;
                case "B":
                    loadModal('mo_BotObservation');
                    break;
                case "E":
                    loadModal('mo_EntObservation');
                    break;
                case "P":
                    loadModal('mo_PatObservation');
                    break;
            }
            //var zi = $('#modalPHGrid').css('z-index');
            //$('#modalForm').css('z-index', zi + 100);
            $('#modalPHGrid').modal('hide');
            $('#modalForm').modal();
        }).done(function () {
            $('#modalProgress').modal('hide');
        });
});
$(document).on('click', '#srchAHTable tbody tr', function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
    var d = table.row(this).data();
    curIdx = d.id_M_N;
    curDiscipline = d.AnimalDisciplineCode_M_S;
    curPos = table.row(this).index();
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#modalProgress').modal();
            $('#mb6 .progText').text("Loading ...");
            $('#mb6 .progress').addClass('hide');
            $('#mb6 .fa-clock-o').addClass('hide');
        }

    }).complete(function (data) {
        switch (curDiscipline) {
            case "SF":
                loadModalAH('mo_sngObservation');
                break;
            case "G":
                loadModalAH('mo_grpObservation');
                break;
        }
        //var zi = $('#modalPHGrid').css('z-index');
        //$('#modalForm').css('z-index', zi + 100);
        $('#modalAHGrid').modal('hide');
        $('#modalForm').modal();
    }).done(function () {
        $('#modalProgress').modal('hide');
    });
});
$(document).on('click', '#SyncPH', function (event) {
    $.when(setTimeout(DisableFormPH(), 1000));
});
$(document).on('click', '#SyncAH', function (event) {
    $.when(setTimeout(DisableFormAH(), 1000));
});
$(document).on('shown.bs.modal', '#modalPHGrid', function () {
    loadPHRefCodes();
    loadActivityData();
    loadstaffData();
    loadData();
    if (statusElem.innerHTML === 'online') {
        $('#SyncPH').removeClass('hide');
    }
    if (statusElem.innerHTML === 'offline') {
        $('#SyncPH').addClass('hide');
    }
});
$(document).on('shown.bs.modal', '#modalAHGrid', function () {
    loadActivityDataAH();
    //loadAHDefaults();
    loadData();
    if (statusElem.innerHTML === 'online') {
        $('#SyncAH').removeClass('hide');
    }
    if (statusElem.innerHTML === 'offline') {
        $('#SyncAH').addClass('hide');
    }
});
$(document).on('hidden.bs.modal', '#modalPHGrid', function () {
    table.destroy();
});
$(document).on('hidden.bs.modal', '#modalAHGrid', function () {
    table.destroy();
});
$(document).on('hidden.bs.modal', '#modalForm', function () {
    //table.destroy();
    //loadAHDefaults();
    //loadData();
    clearMarkers();
    if (AppMode === "PH") {
        loadMapMarkers;
    }
    if (AppMode === "AH") {
        loadMapMarkersAH();
    }
});
$(document).on('click', 'a.btnResetData', function (e) {
    $.confirm({
        title: 'Confirm Data Reset!',
        content: 'Do you want to delete all the observation records?',
        buttons: {
            Ok: function () {
                $.ajax({
                    method: "GET",
                    url: "data/observations2.json",
                    contentType: "json",
                    success: function (data) {
                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1; //January is 0!
                        var yyyy = today.getFullYear();
                        if (dd < 10) {
                            dd = '0' + dd;
                        }
                        if (mm < 10) {
                            mm = '0' + mm;
                        }
                        today = dd.toString() + '/' + mm.toString() + '/' + yyyy.toString();
                        results = JSON.parse(data);
                        db.transaction(function (tx) {
                            tx.executeSql("DELETE FROM observations", [], function (tx, res) {
                                //alert("Rows deleted.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while deleting row from DB. " + err.message, location: "tc", size: "large" });
                        });
                        db.transaction(function (tx) {
                            tx.executeSql("INSERT INTO observations (id, filedt, data) VALUES (?,?,?)", [1, today, JSON.stringify(data)], function (tx, res) {
                                //alert("Row inserted.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while inserting row to DB. " + err.message, location: "tc", size: "large" });
                            });
                        db.transaction(function (tx) {
                            tx.executeSql("UPDATE observations SET data = ?,filedt = ? WHERE id = ?", [JSON.stringify(results), today, 1], function (tx, res) {
                                //alert("Dataset updated.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while updating data to DB. " + err.message, location: "tc", size: "large" });
                        });
                        clearMarkers();
                        if (AppMode === "PH") {
                            loadMapMarkers;
                        }
                        if (AppMode === "AH") {
                            loadMapMarkersAH();
                        }
                        google.maps.event.addListener(map, 'click', function (event) {
                            placeMarker(event.latLng);
                        });
                        $.growl.notice({ title: "", message: "Data reset complete!", location: "bc", size: "small" });
                    },
                    failure: function () {
                        $.growl.error({ title: "", message: "Error!", location: "tc", size: "large" });
                    }
                });
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', 'a.btnSync', function (e) {
    $.confirm({
        title: 'Confirm Data Sync!',
        content: 'Do you want to sync application data with the Server?<br/>Note: <b>Observations will not be Synced.</b>',
        buttons: {
            Ok: function () {
                $.when(clearCache()).then(fetchSettings()).then(initSettings()).done(function () {
                    $.growl.notice({ title: "", message: "Sync Complete!.", location: "bc", size: "small" });
                });
                //syncPHRefCodes();
                //syncActivityData();
                //syncBPHstaffData();
                //syncIPHstaffData();
                //syncNPHstaffData();
                //syncTaxaData();
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#showPayloads', function (e) {
    if (debugMode === 1) {
        switch (AppMode) {
            case "PH":
                $.confirm({
                    title: 'Activity',
                    content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadAD">' + JSON.stringify(ActivityData) + '</textarea></div>',
                    columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                    buttons: {
                        Ok: function () {
                            $.confirm({
                                title: 'RefCodes',
                                content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadPHRC">' + JSON.stringify(PHRefCodes) + '</textarea></div>',
                                columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                                buttons: {
                                    Ok: function () {
                                        $.confirm({
                                            title: 'Staff',
                                            content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadSD">' + JSON.stringify(staffDataBPH) + JSON.stringify(staffDataIPH) + JSON.stringify(staffDataNPH) + '</textarea></div>',
                                            columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                                            buttons: {
                                                Ok: function () {
                                                    $.confirm({
                                                        title: 'Taxa Data',
                                                        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadTD">' + JSON.stringify(taxaData) + '</textarea></div>',
                                                        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                                                        buttons: {
                                                            Ok: function () { },
                                                            copy: {
                                                                text: 'Copy', // With spaces and symbols
                                                                action: function () {
                                                                    var copytext = this.$content.find("#PayloadTD");
                                                                    copytext.select();
                                                                    document.execCommand("copy");
                                                                    return false;
                                                                }
                                                            }
                                                        }
                                                    });
                                                },
                                                copy: {
                                                    text: 'Copy', // With spaces and symbols
                                                    action: function () {
                                                        var copytext = this.$content.find("#PayloadSD");
                                                        copytext.select();
                                                        document.execCommand("copy");
                                                        return false;
                                                    }
                                                }
                                            }
                                        });
                                    },
                                    copy: {
                                        text: 'Copy', // With spaces and symbols
                                        action: function () {
                                            var copytext = this.$content.find("#PayloadPHRC");
                                            copytext.select();
                                            document.execCommand("copy");
                                            return false;
                                        }
                                    }
                                }
                            });
                        },
                        copy: {
                            text: 'Copy', // With spaces and symbols
                            action: function () {
                                var copytext = this.$content.find("#PayloadAD");
                                copytext.select();
                                document.execCommand("copy");
                                return false;
                            }
                        }
                    }
                });
                break;
            case "AH":
                $.confirm({
                    title: 'Activity',
                    content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadAD">' + JSON.stringify(ActivityDataAH) + '</textarea></div>',
                    columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                    buttons: {
                        Ok: function () {
                            $.confirm({
                                title: 'Reference Codes',
                                content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadAHRC">' + JSON.stringify(AHRefCodes) + '</textarea></div>',
                                columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                                buttons: {
                                    Ok: function () {
                                        $.confirm({
                                            title: 'Staff',
                                            content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadSD">' + JSON.stringify(staffDataNAF) + '</textarea></div>',
                                            columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                                            buttons: {
                                                Ok: function () { },
                                                copy: {
                                                    text: 'Copy', // With spaces and symbols
                                                    action: function () {
                                                        var copytext = this.$content.find("#PayloadSD");
                                                        copytext.select();
                                                        document.execCommand("copy");
                                                        return false;
                                                    }
                                                }
                                            }
                                        });
                                    },
                                    copy: {
                                        text: 'Copy', // With spaces and symbols
                                        action: function () {
                                            var copytext = this.$content.find("#PayloadAHRC");
                                            copytext.select();
                                            document.execCommand("copy");
                                            return false;
                                        }
                                    }
                                }
                            });
                        },
                        copy: {
                            text: 'Copy', // With spaces and symbols
                            action: function () {
                                var copytext = this.$content.find("#PayloadAD");
                                copytext.select();
                                document.execCommand("copy");
                                return false;
                            }
                        }
                    }
                });
                break;
        }
    }
});
$(document).on('click', '.obsForm', function (e) {
    $('.obsForm').removeClass('bg-Obs');
    $(this).addClass('bg-Obs');
    curDiscipline = $(this).find('input[type=radio][name="optObs"]').attr('data-discipline');
    $(this).find('input[type="radio"].minimal').iCheck('check');
});
$(document).on('click', '#showFormPH', function (e) {
    var zi;
    curDiscipline = $('input[type=radio][name="optObs"]:checked').attr('data-discipline');
    var formName = $("input[name='optObs']:checked").val();
    if (formName) {
        zi = $('#modalPHMenu').css('z-index');
        $('#modalForm').css('z-index', zi + 100);
        loadModal(formName);
        $('#modalForm').modal();
        $('#modalPHMenu').modal('hide');
    }
});
$(document).on('click', '#showFormAH', function (e) {
    var zi;
    curDiscipline = $('input[type=radio][name="optObs"]:checked').attr('data-discipline');
    var formName = $("input[name='optObs']:checked").val();
    if (formName) {
        zi = $('#modalAHMenu').css('z-index');
        $('#modalForm').css('z-index', zi + 100);
        loadModalAH(formName);
        $('#modalForm').modal();
        $('#modalAHMenu').modal('hide');
    }
});
$(document).on('hidden.bs.modal', '#modalForm', function () {
    if (newMarker && (curIdx === -1 || curIdx === -2)) {
        newMarker.setMap(null);
    }
});
$(document).on('hidden.bs.modal', '#modalPHMenu', function () {
    if (newMarker && (curIdx === -1 || curIdx === -2)) {
        newMarker.setMap(null);
    }
});
$(document).on('hidden.bs.modal', '#modalAHMenu', function () {
    if (newMarker && (curIdx === -1 || curIdx === -2)) {
        newMarker.setMap(null);
    }
});
$(document).on('change', 'input:checkbox', function (e) {
    e.preventDefault();
    if ($(this).is(":checked")) {
        $(this).val('Y');
    } else {
        $(this).val('N');
    }
});
$(document).on('click', '#newObservationPH', function () {
    curIdx = -2;
    $('#modalPHGrid').modal('hide');
    $('#modalPHMenu').modal();
});
$(document).on('click', '#newObservationAH', function () {
    curIdx = -2;
    $('#modalAHGrid').modal('hide');
    $('#modalAHMenu').modal();
});
$(document).on('click', 'a.btnBackupData', function (e) {
    backupDatabase();
});
$(document).on('click', 'a.btnRestoreData', function (e) {
    restoreDatabase();
});
function getMapTiles(zoom) {
    if (allLats.length > 0 && allLngs.length > 0) {
        var scale = 1 << zoom;
        allLats.sort();
        allLngs.sort();
        minX = allLats[0];
        minY = allLngs[0];
        maxX = allLats[allLats.length - 1];
        maxY = allLngs[allLngs.length - 1];
        var minLatLng = new google.maps.LatLng(minX, minY);
        var maxLatLng = new google.maps.LatLng(maxX, maxY);
        var wC1 = project(minLatLng);
        var wC2 = project(maxLatLng);
        var pC1x = Math.floor(wC1.x * scale / TILE_SIZE);
        var pC1y = Math.floor(wC1.y * scale / TILE_SIZE);
        var pC2x = Math.floor(wC2.x * scale / TILE_SIZE);
        var pC2y = Math.floor(wC2.y * scale / TILE_SIZE);
        $('#modalProgress').modal();
        $('#mb6 .progText').text("Download in progress ...");
        $('#mb6 .progress').removeClass('hide');
        tiles = 0;
        fetchAndSaveTile(pC1x, pC1y, zoom, pC2x, pC1y, pC2y);
    }
}
/* SprinQ Framework Code */

/* SIMS Framework */
function syncActivityData() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": ActivityAddress,
        "method": "GET",
        "beforeSend": function () {
            //$.growl.notice({ title: "", message: "Syncing Activity Data ...", location: "bc", size: "small" });
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(settings).done(function (data) {
        ActivityData = data;
        //siteData = data.activities[0].sites;
        //programId = data.activities[0].programId;
        lastSurvActValue = data.activities[0].activityId;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM activitydata", [], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting ActivityData from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO activitydata (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'activity', JSON.stringify(ActivityData)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE activitydata SET settingsval = ? WHERE id = ?", [JSON.stringify(ActivityData), 1], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching Activity Data. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    });
}
function loadActivityData() {
    $("#form1").find('select[name="SurvActivityId_M_N"]').find('option').remove().end().append($('<option value="0">- select -</option>'));
    $.each(ActivityData.activities, function (key, val) {
        if (val.programId === downerTeam) {
            var option = $('<option />');
            option.attr('value', val.activityId).text(val.activityName);
            $("#form1").find('select[name="SurvActivityId_M_N"]').append(option);
        }
    });
    $("#form1").find('select[name="SiteId_O_N"]').find('option').remove().end().append($('<option value="0">- select -</option>'));
    $.each(siteData, function (key, val) {
        var option = $('<option />');
        option.attr('value', val.id).text(val.name);
        $("#form1").find('select[name="SiteId_O_N"]').append(option);
    });
    $("#form1").find('select[name="SiteId_O_N"]').append($('<option value="99999">New Site</option>'));
}
function refreshActivityData(str) {
    var arr = ActivityData.activities.filter(function (el) {
        return (el.activityId === Number(str));
    });
    if (arr && arr.length > 0) {
        siteData = arr[0].sites;
        programId = arr[0].programId;
        lastSurvActValue = arr[0].activityId;
        lastSiteValue = 0;
        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM staffdata WHERE settingstext = ?", [programId + 'staff'], function (tx, res) {
                //This is not the first load
                if (res.rows && res.rows.length > 0) {
                    //alert(JSON.stringify(res.rows.item(0).settingsval));
                    staffDataS = JSON.parse(res.rows.item(0).settingsval);
                }
                else {
                    $.growl.error({ title: "", message: "No staff Data available for this Activity.", location: "tc", size: "large", fixed: "true" });
                }
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while loading staff Data. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    };
    $("#form1").find('select[name="SiteId_O_N"]').find('option').remove().end().append($('<option value="0">- select -</option>'));
    $.each(siteData, function (key, val) {
        var option = $('<option />');
        option.attr('value', val.id).text(val.name);
        $("#form1").find('select[name="SiteId_O_N"]').append(option);
    });
    $("#form1").find('select[name="SiteId_O_N"]').append($('<option value="99999">New Site</option>'));
}
function syncNPHstaffData() {
    var NPHsettings = {
        "async": false,
        "crossDomain": true,
        "url": NPHStaffAddress,
        "method": "GET",
        "beforeSend": function () {
            //$.growl.notice({ title: "", message: "Syncing NPH Staff Data ...", location: "bc", size: "small" });
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(NPHsettings).done(function (data) {
        //alert(JSON.stringify(xmlToJson(data)));
        staffDataNPH = xmlToJson(data);
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM staffdata WHERE id = ?", [1], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting NPH StaffData from database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO staffdata (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'NPHstaff', JSON.stringify(staffDataNPH)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating NPH StaffData to database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE staffdata SET settingsval = ? WHERE id = ?", [JSON.stringify(staffDataNPH), 1], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating NPH StaffData to database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching StaffData. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    });
}
function syncBPHstaffData() {
    var BPHsettings = {
        "async": false,
        "crossDomain": true,
        "url": BPHStaffAddress,
        "method": "GET",
        "beforeSend": function () {
            //$.growl.notice({ title: "", message: "Syncing BPH Staff Data ...", location: "bc", size: "small" });
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(BPHsettings).done(function (data) {
        staffDataBPH = xmlToJson(data);
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM staffdata WHERE id = ?", [2], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting BPH StaffData from database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO staffdata (id, settingstext, settingsval) VALUES (?,?,?)", [2, 'BPHstaff', JSON.stringify(staffDataBPH)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating BPH StaffData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE staffdata SET settingsval = ? WHERE id = ?", [JSON.stringify(staffDataBPH), 2], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating BPH StaffData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching BPH StaffData. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    });
}
function syncIPHstaffData() {
    var IPHsettings = {
        "async": false,
        "crossDomain": true,
        "url": IPHStaffAddress,
        "method": "GET",
        "beforeSend": function () {
            //$.growl.notice({ title: "", message: "Syncing IPH Staff Data ...", location: "bc", size: "small" });
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(IPHsettings).done(function (data) {
        staffDataIPH = xmlToJson(data);
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM staffdata WHERE id = ?", [3], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting IPH StaffData from database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO staffdata (id, settingstext, settingsval) VALUES (?,?,?)", [3, 'IPHstaff', JSON.stringify(staffDataIPH)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating IPH StaffData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE staffdata SET settingsval = ? WHERE id = ?", [JSON.stringify(staffDataIPH), 3], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating IPH StaffData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching IPH StaffData. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    });
}
function syncNAFstaffData() {
    var NAFsettings = {
        "async": false,
        "crossDomain": true,
        "url": NAFStaffAddress,
        "method": "GET",
        "beforeSend": function () {
            //$.growl.notice({ title: "", message: "Syncing IPH Staff Data ...", location: "bc", size: "small" });
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(NAFsettings).done(function (data) {
        staffDataNAF = xmlToJson(data);
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM staffdataAH WHERE id = ?", [1], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting NAF StaffData from database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO staffdataAH (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'NAFstaff', JSON.stringify(staffDataNAF)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating NAF StaffData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE staffdataAH SET settingsval = ? WHERE id = ?", [JSON.stringify(staffDataNAF), 1], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating NAF StaffData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching NAF StaffData. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    });
}
function loadstaffData() {
    // Loading StaffData for device Owner //
    //staffDataFull = '<option value="0">- select -</option>';
    //$.each(staffDataNPH.staffs.staff, function (key, val) {
    //    var option1 = '<option';
    //    option1 = option1 + ' value="' + val.id + '">';
    //    option1 = option1 + val.displayName + "</option>";
    //    staffDataFull = staffDataFull + option1;
    //});
    // Loading StaffData per programID //
    if (programId && programId !== "") {
        switch (programId) {
            case "NPH":
                staffDataS = staffDataNPH;
                break;
            case "BPH":
                staffDataS = staffDataBPH;
                break;
            case "IPH":
                staffDataS = staffDataIPH;
                break;
            case "NAF":
                staffDataS = staffDataNAF;
                break;
        }
    } else {
        switch (AppMode) {
            case "PH":
                staffDataS = staffDataNPH;
                break;
            case "AH":
                staffDataS = staffDataNAF;
                break;
        }
    }
    staffData = '<option value="0">- select -</option>';
    $.each(staffDataS.staffs.staff, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.id + '">';
        option1 = option1 + val.displayName + "</option>";
        staffData = staffData + option1;
    });
    $("#form1").find('select[name^="ObservationStaffId_M_N"]').find('option').remove().end().append($(staffData));
}
function loadSitePolygons() {
    allLats = [];
    allLngs = [];
    $.each(ActivityData.activities, function (key1, val1) {
        $.each(val1.sites, function (key, val) {
            if (val.id === 99999) { return true; }
            var wkt = new Wkt.Wkt();
            wkt.read(val.locationDatum.wkt);
            wkt.toObject();
            var tC = [];
            // Add each GPS entry to an array
            for (var k = 0; k < wkt.toJson().coordinates[0].length; k++) {
                var latlngc = new google.maps.LatLng(wkt.toJson().coordinates[0][k][1], wkt.toJson().coordinates[0][k][0]);
                tC.push(latlngc);
                allLats.push(wkt.toJson().coordinates[0][k][1]);
                allLngs.push(wkt.toJson().coordinates[0][k][0]);
            }
            // Plot the GPS entries as a line on the Google Map
            var tP = new google.maps.Polygon({
                map: map,
                path: tC,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2,
                fillOpacity: 0.0
            });
            //mapc.fitBounds(trackCoords);
            tP.setMap(map);
            google.maps.event.addListener(tP, 'click', function (event) {
                placeMarker(event.latLng);
            });
            alltPs.push(tP);
        });
    });
}
function getSurvActivity(id) {
    var arr = ActivityData.activities.filter(function (el) {
        return (el.activityId === id);
    });
    if (arr && arr.length > 0) { return arr[0].activityName; } else { return ""; }
}
function getSurvActivityAH(id) {
    var arr = ActivityDataAH.activities.filter(function (el) {
        return (el.activityId === id);
    });
    if (arr && arr.length > 0) { return arr[0].activityName; } else { return ""; }
}
function getCommonName(id) {
    var arr = speciesTaxonSyndromSamples.species.filter(function (el) {
        return (el.speciesCode === id);
    });
    if (arr && arr.length > 0) { return arr[0].speciesName; } else { return ""; }
}
function getSite(ActivityId, id) {
    var arr = ActivityData.activities.filter(function (el) {
        return (el.activityId === ActivityId);
    });
    if (arr && arr.length > 0) {
        var arr2 = arr[0].sites.filter(function (el) {
            return (el.id === id);
        });
        if (arr2 && arr2.length > 0) { return arr2[0].name; } else { return ""; }
    }
    else { return ""; }
}
function fetchSettings() {
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM settings WHERE id = ?", [1], function (tx, res) {
            //This is not the first load
            if (res.rows && res.rows.length > 0) {
                resSettings = JSON.parse(res.rows.item(0).settingsval);
                AppMode = resSettings.settings.app.appMode;
                settings.innerHTML = AppMode;
                downerId = resSettings.settings.device.ownerId;
                downerTeam = resSettings.settings.device.ownerTeam;
                debugMode = resSettings.settings.device.debugMode;
                $("#serverMode").val(resSettings.settings.app.serverMode);
                $("#appMode2").val(resSettings.settings.app.appMode);
            }
            else {
                $.ajax({
                    method: "GET",
                    url: "data/settings.json",
                    contentType: "json",
                    success: function (dataS) {
                        resSettings = JSON.parse(dataS);
                        db.transaction(function (tx) {
                            tx.executeSql("DELETE FROM settings", [], function (tx, res) {
                                //alert("Rows deleted.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while deleting settings from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
                        });
                        db.transaction(function (tx) {
                            tx.executeSql("INSERT INTO settings (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'appSettings', JSON.stringify(resSettings)], function (tx, res) {
                                //alert("Row inserted.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while updating settings to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
                        });
                        db.transaction(function (tx) {
                            tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
                                //alert("Dataset updated.");
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while updating settings to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
                        });
                        AppMode = resSettings.settings.app.appMode;
                        settings.innerHTML = AppMode;
                        downerId = resSettings.settings.device.ownerId;
                        downerTeam = resSettings.settings.device.ownerTeam;
                        debugMode = resSettings.settings.device.debugMode;
                        $("#serverMode").val(resSettings.settings.app.serverMode);
                        $("#appMode2").val(resSettings.settings.app.appMode);
                    },
                    failure: function () {
                        $.growl.error({ title: "", message: "Error loading settings!", location: "tc", size: "large", fixed: "true" });
                    }
                });
                //console.log('1-' + JSON.stringify(resSettings));
            }
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured fetching app settings. " + err.message, location: "tc", size: "large", fixed: "true" });
    });
}
function fetchServerDetails(serverMode, appMode) {
    AppMode = resSettings.settings.app.appMode;
    settings.innerHTML = AppMode;
    appEnv.innerHTML = serverMode;
    downerId = resSettings.settings.device.ownerId;
    downerTeam = resSettings.settings.device.ownerTeam;
    debugMode = resSettings.settings.device.debugMode;
    devServerAddress = resSettings.settings.app.devServerAddress;
    sitServerAddress = resSettings.settings.app.sitServerAddress;
    uatServerAddress = resSettings.settings.app.uatServerAddress;
    prodServerAddress = resSettings.settings.app.prodServerAddress;
    switch (appMode) {
        case "PH":
            switch (serverMode) {
                case "DEV":
                    ServerAddress = devServerAddress;
                    authAddress = ServerAddress + resSettings.settings.app.authAddress;
                    ActivityAddress = ServerAddress + resSettings.settings.app.activityAddress;
                    refCodesAddress = ServerAddress + resSettings.settings.app.refCodesAddress;
                    BPHStaffAddress = ServerAddress + resSettings.settings.app.BPHStaffAddress;
                    IPHStaffAddress = ServerAddress + resSettings.settings.app.IPHStaffAddress;
                    NPHStaffAddress = ServerAddress + resSettings.settings.app.NPHStaffAddress;
                    taxaAddress = ServerAddress + resSettings.settings.app.taxaAddress;
                    submitPHObsAddress = ServerAddress + resSettings.settings.app.submitPHObsAddress;
                    break;
                case "SIT":
                    ServerAddress = sitServerAddress;
                    authAddress = ServerAddress + resSettings.settings.app.authAddress;
                    ActivityAddress = ServerAddress + resSettings.settings.app.activityAddress;
                    refCodesAddress = ServerAddress + resSettings.settings.app.refCodesAddress;
                    BPHStaffAddress = ServerAddress + resSettings.settings.app.BPHStaffAddress;
                    IPHStaffAddress = ServerAddress + resSettings.settings.app.IPHStaffAddress;
                    NPHStaffAddress = ServerAddress + resSettings.settings.app.NPHStaffAddress;
                    taxaAddress = ServerAddress + resSettings.settings.app.taxaAddress;
                    submitPHObsAddress = ServerAddress + resSettings.settings.app.submitPHObsAddress;
                    break;
                case "UAT":
                    ServerAddress = uatServerAddress;
                    authAddress = ServerAddress + resSettings.settings.app.authAddress;
                    ActivityAddress = ServerAddress + resSettings.settings.app.activityAddress;
                    refCodesAddress = ServerAddress + resSettings.settings.app.refCodesAddress;
                    BPHStaffAddress = ServerAddress + resSettings.settings.app.BPHStaffAddress;
                    IPHStaffAddress = ServerAddress + resSettings.settings.app.IPHStaffAddress;
                    NPHStaffAddress = ServerAddress + resSettings.settings.app.NPHStaffAddress;
                    taxaAddress = ServerAddress + resSettings.settings.app.taxaAddress;
                    submitPHObsAddress = ServerAddress + resSettings.settings.app.submitPHObsAddress;
                    break;
                case "PROD":
                    ServerAddress = prodServerAddress;
                    authAddress = ServerAddress + resSettings.settings.app.authAddress;
                    ActivityAddress = ServerAddress + resSettings.settings.app.activityAddress;
                    refCodesAddress = ServerAddress + resSettings.settings.app.refCodesAddress;
                    BPHStaffAddress = ServerAddress + resSettings.settings.app.BPHStaffAddress;
                    IPHStaffAddress = ServerAddress + resSettings.settings.app.IPHStaffAddress;
                    NPHStaffAddress = ServerAddress + resSettings.settings.app.NPHStaffAddress;
                    taxaAddress = ServerAddress + resSettings.settings.app.taxaAddress;
                    submitPHObsAddress = ServerAddress + resSettings.settings.app.submitPHObsAddress;
                    break;
            }
            break;
        case "AH":
            switch (serverMode) {
                case "DEV":
                    ServerAddress = devServerAddress;
                    authAddress = ServerAddress + resSettings.settings.app.authAddressAH;
                    ActivityAddressAH = ServerAddress + resSettings.settings.app.activityAddressAH;
                    refCodesAddressAH = ServerAddress + resSettings.settings.app.refCodesAddressAH;
                    NAFStaffAddress = ServerAddress + resSettings.settings.app.NAFStaffAddress;
                    speciesTaxonSyndromSamplesAddress = ServerAddress + resSettings.settings.app.speciesTaxonSyndromSamplesAddress;
                    submitAHFAObsAddress = ServerAddress + resSettings.settings.app.submitAHFAObsAddress;
                    submitAHGObsAddress = ServerAddress + resSettings.settings.app.submitAHGObsAddress;
                    break;
                case "SIT":
                    ServerAddress = sitServerAddress;
                    authAddress = ServerAddress + resSettings.settings.app.authAddressAH;
                    ActivityAddressAH = ServerAddress + resSettings.settings.app.activityAddressAH;
                    refCodesAddressAH = ServerAddress + resSettings.settings.app.refCodesAddressAH;
                    NAFStaffAddress = ServerAddress + resSettings.settings.app.NAFStaffAddress;
                    speciesTaxonSyndromSamplesAddress = ServerAddress + resSettings.settings.app.speciesTaxonSyndromSamplesAddress;
                    submitAHFAObsAddress = ServerAddress + resSettings.settings.app.submitAHFAObsAddress;
                    submitAHGObsAddress = ServerAddress + resSettings.settings.app.submitAHGObsAddress;
                    break;
                case "UAT":
                    ServerAddress = uatServerAddress;
                    authAddress = ServerAddress + resSettings.settings.app.authAddressAH;
                    ActivityAddressAH = ServerAddress + resSettings.settings.app.activityAddressAH;
                    refCodesAddressAH = ServerAddress + resSettings.settings.app.refCodesAddressAH;
                    NAFStaffAddress = ServerAddress + resSettings.settings.app.NAFStaffAddress;
                    speciesTaxonSyndromSamplesAddress = ServerAddress + resSettings.settings.app.speciesTaxonSyndromSamplesAddress;
                    submitAHFAObsAddress = ServerAddress + resSettings.settings.app.submitAHFAObsAddress;
                    submitAHGObsAddress = ServerAddress + resSettings.settings.app.submitAHGObsAddress;
                    break;
                case "PROD":
                    ServerAddress = prodServerAddress;
                    authAddress = ServerAddress + resSettings.settings.app.authAddressAH;
                    ActivityAddressAH = ServerAddress + resSettings.settings.app.activityAddressAH;
                    refCodesAddressAH = ServerAddress + resSettings.settings.app.refCodesAddressAH;
                    NAFStaffAddress = ServerAddress + resSettings.settings.app.NAFStaffAddress;
                    speciesTaxonSyndromSamplesAddress = ServerAddress + resSettings.settings.app.speciesTaxonSyndromSamplesAddress;
                    submitAHFAObsAddress = ServerAddress + resSettings.settings.app.submitAHFAObsAddress;
                    submitAHGObsAddress = ServerAddress + resSettings.settings.app.submitAHGObsAddress;
                    break;
            }
            break;
    }
    return authAddress;
}
function updateSettings(serverMode, appMode) {
    var changeFlag = 0;
    if (serverMode !== resSettings.settings.app.serverMode) {
        resSettings.settings.app.serverMode = serverMode;
        changeFlag = 1;
    }
    if (appMode !== resSettings.settings.app.appMode) {
        resSettings.settings.app.appMode = appMode;
        AppMode = appMode;
        changeFlag = 1;
    }
    if (changeFlag === 1) {
        db.transaction(function (tx) {
            tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
                //Updated serverMode to current.
                $.growl.notice({ title: "", message: "Syncing app cache ... ", location: "bc", size: "small" });
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating settings. " + err.message, location: "tc", size: "large" });
        });
    }
}
function clearCache(appMode) {
    switch (appMode) {
        case "PH":
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM activitydata", [], function (tx, res) {
                    //alert("Rows deleted.");
                    ActivityData = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting ActivityData from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM phrefcodes", [], function (tx, res) {
                    //alert("Rows deleted.");
                    PHRefCodes = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting PHRefCodes from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM staffdata WHERE id = ?", [1], function (tx, res) {
                    //alert("Rows deleted.");
                    staffDataNPH = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting NPH StaffData from database. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM staffdata WHERE id = ?", [2], function (tx, res) {
                    //alert("Rows deleted.");
                    staffDataBPH = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting BPH StaffData from database. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM staffdata WHERE id = ?", [3], function (tx, res) {
                    //alert("Rows deleted.");
                    staffDataIPH = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting IPH StaffData from database. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM taxadata", [], function (tx, res) {
                    //alert("Rows deleted.");
                    taxaData = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting Taxa Data from database. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            break;
        case "AH":
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM activitydataAH", [], function (tx, res) {
                    //alert("Rows deleted.");
                    ActivityDataAH = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting ActivityData from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM ahrefcodes", [], function (tx, res) {
                    //alert("Rows deleted.");
                    AHRefCodes = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting PHRefCodes from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            db.transaction(function (tx) {
                tx.executeSql("DELETE FROM staffdataAH", [], function (tx, res) {
                    //alert("Rows deleted.");
                    staffdataAH = "";
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while deleting StaffData from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
            });
            break;
    }
}
function getCurrentActivityTiles(str, zoom) {
    if (Number(str) === 99999) { return true; }
    curLats = []; curLngs = [];
    var arr = ActivityData.activities.filter(function (el) {
        return (el.activityId === Number(str));
    });
    if (arr && arr.length > 0) {
        $.each(arr[0].sites, function (key, val) {
            var wkt = new Wkt.Wkt();
            wkt.read(val.locationDatum.wkt);
            wkt.toObject();
            for (var k = 0; k < wkt.toJson().coordinates[0].length; k++) {
                curLats.push(wkt.toJson().coordinates[0][k][1]);
                curLngs.push(wkt.toJson().coordinates[0][k][0]);
            }
        });
        if (curLats.length > 0 && curLngs.length > 0) {
            var scale = 1 << zoom;
            cX = curLats[0];
            cY = curLngs[0];
            curLats.sort();
            curLngs.sort();
            minX = curLats[0];
            minY = curLngs[0];
            maxX = curLats[curLats.length - 1];
            maxY = curLngs[curLngs.length - 1];
            var minLatLng = new google.maps.LatLng(minX, minY);
            var maxLatLng = new google.maps.LatLng(maxX, maxY);
            var wC1 = project(minLatLng);
            var wC2 = project(maxLatLng);
            var pC1x = Math.floor(wC1.x * scale / TILE_SIZE) - 1;
            var pC1y = Math.floor(wC1.y * scale / TILE_SIZE) - 1;
            var pC2x = Math.floor(wC2.x * scale / TILE_SIZE) + 1;
            var pC2y = Math.floor(wC2.y * scale / TILE_SIZE) + 1;
            tiles = 0;
            fetchAndSaveTile(pC1x, pC1y, zoom, pC2x, pC1y, pC2y);
        }
    }
}
function getMapBounds() {
    if (allLats.length > 0 && allLngs.length > 0) {
        allLats.sort();
        allLngs.sort();
        minX = allLats[0];
        minY = allLngs[0];
        maxX = allLats[allLats.length - 1];
        maxY = allLngs[allLngs.length - 1];
    }
}
function getCurrentActivityBounds(str) {
    if (Number(str) === 99999) { return true; }
    curLats = []; curLngs = [];
    var arr = ActivityData.activities.filter(function (el) {
        return (el.activityId === Number(str));
    });
    if (arr && arr.length > 0) {
        $.each(arr[0].sites, function (key, val) {
            var wkt = new Wkt.Wkt();
            wkt.read(val.locationDatum.wkt);
            wkt.toObject();
            for (var k = 0; k < wkt.toJson().coordinates[0].length; k++) {
                curLats.push(wkt.toJson().coordinates[0][k][1]);
                curLngs.push(wkt.toJson().coordinates[0][k][0]);
            }
        });
        if (curLats.length > 0 && curLngs.length > 0) {
            cX = curLats[0];
            cY = curLngs[0];
            curLats.sort();
            curLngs.sort();
            minX = curLats[0];
            minY = curLngs[0];
            maxX = curLats[curLats.length - 1];
            maxY = curLngs[curLngs.length - 1];
        }
    }
}
/* SIMS Framework */

/* Windows Only */
function initLoad() {
    db = window.sqlitePlugin.openDatabase({ name: "sims.db", location: 'default' });
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS observations (id integer primary key, filedt text, data blob)");
        tx.executeSql("CREATE TABLE IF NOT EXISTS settings (id integer primary key, settingstext text, settingsval text default '{}')");
        tx.executeSql("CREATE TABLE IF NOT EXISTS phrefcodes (id integer primary key, settingstext text, settingsval text default '{}')");
        tx.executeSql("CREATE TABLE IF NOT EXISTS activitydata (id integer primary key, settingstext text, settingsval text default '{}')");
        tx.executeSql("CREATE TABLE IF NOT EXISTS staffdata (id integer primary key, settingstext text, settingsval text default '{}')");
        tx.executeSql("CREATE TABLE IF NOT EXISTS taxadata (id integer primary key, settingstext text, settingsval text default '{}')");
        tx.executeSql("CREATE TABLE IF NOT EXISTS ahrefcodes (id integer primary key, settingstext text, settingsval text default '{}')");
        tx.executeSql("CREATE TABLE IF NOT EXISTS activitydataAH (id integer primary key, settingstext text, settingsval text default '{}')");
        tx.executeSql("CREATE TABLE IF NOT EXISTS staffdataAH (id integer primary key, settingstext text, settingsval text default '{}')");
        tx.executeSql("CREATE TABLE IF NOT EXISTS seqnum (id integer primary key, attrname text, attrval int default 0)");
    }, function (err) {
        $.growl.error({ title: "", message: "An error occurred while initializing the DB. " + err.message, location: "tc", size: "large" });
    });
    //Invoke Authentication functionality ---------------
    /* Not required for Windows platform */
    //checkPermissions();
    /* Not required for Windows platform */
    /* Not required for Android and iOS platforms */
    var myElement = document.getElementById('map');
    var hammertime = new Hammer(myElement);
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    /* Not required for Android and iOS platform */
    $.when(fetchSettings()).then(initAuth()).done(function () {
        $('#modalAuth').modal();
        $('.auth-username').focus();
    });
    //return;
    //OTP functionality ends -----------------
    //Invoke OTP functionality ---------------
    //initVerify();
    //$('#modalVerify').modal();
    //return;
    //OTP functionality ends -----------------
}
function exportObservationsToCSV() {
    var data;
    switch (AppMode) {
        case "PH":
            data = jQuery.grep(results.observations, function (n, i) {
                return (n.PlantDisciplineCode_M_S === 'P' || n.PlantDisciplineCode_M_S === 'E' || n.PlantDisciplineCode_M_S === 'B');
            });
            break;
        case "AH":
            data = jQuery.grep(results.observations, function (n, i) {
                return (n.AnimalDisciplineCode_M_S === 'SF' || n.AnimalDisciplineCode_M_S === 'G');
            });
            break;
    }
    var flatJSON = data.map(record => flatten(record, {}, ''));
    var csv = JSON.stringify(flatJSON);
    csv = csv.replace(/_O_N_\d_T/g, '').replace(/_M_S_\d_T/g, '').replace(/_O_S_\d_T/g, '').replace(/_M_N_\d_H/g, '').replace(/_M_S_\d_H/g, '').replace(/_O_S_\d_H/g, '').replace(/_O_N_\d_H/g, '');
    csv = csv.replace(/_M_S_\d_S/g, '').replace(/_O_N_\d_S/g, '').replace(/_M_S_\d_S/g, '').replace(/_M_D_\d_S/g, '').replace(/_O_S_\d_S/g, '');
    csv = csv.replace(/_M_N/g, '').replace(/_O_N/g, '').replace(/_M_D/g, '').replace(/_M_S/g, '');
    csv = csv.replace("[{", "").replace("}]", "").replace("},", "\r\n").replace(",{", "\r\n").replace("{", "").replace("}", "");

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy.toString() + mm.toString() + dd.toString();

    var savePicker = new Windows.Storage.Pickers.FileSavePicker();
    savePicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
    savePicker.fileTypeChoices.insert("CSV", [".csv"]);
    savePicker.suggestedFileName = "Observations" + today + ".csv";
    savePicker.pickSaveFileAsync().then(function (file) {
        if (file) {
            Windows.Storage.CachedFileManager.deferUpdates(file);
            Windows.Storage.FileIO.writeTextAsync(file, csv).done(function () {
                Windows.Storage.CachedFileManager.completeUpdatesAsync(file).done(function (updateStatus) {
                    if (updateStatus === Windows.Storage.Provider.FileUpdateStatus.complete) {
                        $.growl.notice({ title: "", message: 'File saved to Documents folder.', location: "bc", size: "small" });
                    } else {
                        $.growl.error({ title: "", message: 'File save failed!', location: "tc", size: "large" });
                    }
                });
            });
        } else {
            $.growl.notice({ title: "", message: 'Operation Cancelled!', location: "bc", size: "small" });
        }
    });
}
$(document).on('click', '.btnDownloadLogs', function (event) {
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fs) {
        fs.getDirectory("Logs", { create: true, exclusive: false }, function (dirEntry) {
            dirEntry.getFile("log.txt", { create: true, exclusive: false }, function (fileEntry) {
                //console.log("fileEntry is file?" + fileEntry.isFile.toString());
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        //console.log("Successful file read: " + this.result);
                        var logtext = this.result;
                        var savePicker = new Windows.Storage.Pickers.FileSavePicker();
                        savePicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
                        savePicker.fileTypeChoices.insert("TEXT", [".txt"]);
                        savePicker.suggestedFileName = "log.txt";
                        savePicker.pickSaveFileAsync().then(function (file) {
                            if (file) {
                                Windows.Storage.CachedFileManager.deferUpdates(file);
                                Windows.Storage.FileIO.writeTextAsync(file, logtext).done(function () {
                                    Windows.Storage.CachedFileManager.completeUpdatesAsync(file).done(function (updateStatus) {
                                        if (updateStatus === Windows.Storage.Provider.FileUpdateStatus.complete) {
                                            $.growl.notice({ title: "", message: 'File saved to Documents folder.', location: "bc", size: "small" });
                                        } else {
                                            $.growl.error({ title: "", message: 'File save failed!', location: "tc", size: "large" });
                                        }
                                    });
                                });
                            } else {
                                $.growl.notice({ title: "", message: 'Operation Cancelled!', location: "bc", size: "small" });
                            }
                        });
                    };
                    reader.readAsText(file);
                }, function () {
                    $.growl.error({ title: "", message: 'File read error!', location: "tc", size: "large" });
                });
            });
        });
    });
});
$(document).on('click', '.btnClearLogs', function (event) {
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fs) {
        fs.getDirectory("Logs", { create: true, exclusive: false }, function (dirEntry) {
            dirEntry.getFile("log.txt", { create: true, exclusive: false }, function (fileEntry) {
                fileEntry.remove(function () {
                    // The file has been removed succesfully
                    $.growl.notice({ title: "", message: "Logs cleared.", location: "bc", size: "small" });
                }, function (error) {
                    // Error deleting the file
                    $.growl.error({ title: "", message: "Error removing zip file.", location: "tc", size: "large" });
                }, function () {
                    // The file doesn't exist
                    $.growl.notice({ title: "", message: "Zip file does not exist.", location: "bc", size: "small" });
                });
            });
        });
    });
});
function exportTableToCSV($table, filename) {
    csv = "";
    var $rows = $table.find('tr:has(td)'),

        // Temporary delimiter characters unlikely to be typed by keyboard
        // This is to avoid accidentally splitting the actual contents
        tmpColDelim = String.fromCharCode(11), // vertical tab character
        tmpRowDelim = String.fromCharCode(0), // null character

        // actual delimiter characters for CSV format
        colDelim = '","',
        rowDelim = '"\r\n"',

        // Grab text from table into CSV formatted string
        csv = '"' + $rows.map(function (i, row) {
            var $row = $(row),
                $cols = $row.find('td');

            return $cols.map(function (j, col) {
                var $col = $(col),
                    text = $col.text();

                return text.replace(/"/g, '""'); // escape double quotes

            }).get().join(tmpColDelim);

        }).get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim) + '"';

    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fs) {
        //console.log('file system open: ' + fs);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy.toString() + mm.toString() + dd.toString();
        fs.getDirectory("ESFA", { create: true, exclusive: false }, function (dirEntry) {
            dirEntry.getFile("Observations" + today + ".csv", { create: true, exclusive: false }, function (fileEntry) {
                //console.log("fileEntry is file?" + fileEntry.isFile.toString());
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        console.log("Successful file read...");
                        //readFile(fileEntry);
                    };
                    fileWriter.onerror = function (e) {
                        //$.growl.error({ title: "", message: "Failed file read: " + e.toString(), location: "tc", size: "large" });
                    };
                    fileWriter.seek(0);
                    var blob = new Blob([csv], { type: 'text/plain' });
                    fileWriter.write(blob);
                    $.growl.notice({ title: "", message: 'File saved to Local folder.', location: "bc", size: "small" });
                });
            });
        });
    });
}
function backupDatabase() {
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fs) {
        fs.getFile("sims.db", { create: false, exclusive: false }, function (fileEntry) {
            //console.log("fileEntry is file?" + fileEntry.isFile.toString());
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function () {
                    //console.log("Successful file read: " + this.result);
                    var blob = new Blob([this.result], { type: "octet/stream" });
                    writeBlobToFile(blob);
                    $.growl({ title: "", message: 'File backed up to Documents folder.', location: "tc", size: "large" });
                };
                reader.readAsArrayBuffer(file);
            }, function () {
                $.growl.error({ title: "", message: 'File read error!', location: "tc", size: "large" });
            });
        });
    });
}
function writeBlobToFile(blob) {
    // Open the picker to create a file to save the blob 
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy.toString() + mm.toString() + dd.toString();
    Windows.Storage.KnownFolders.documentsLibrary.createFileAsync("sims_" + today + ".db", Windows.Storage.CreationCollisionOption.generateUniqueName).then(function (file) {
        // Open the returned file in order to copy the data 
        file.openAsync(Windows.Storage.FileAccessMode.readWrite).then(function (output) {
            // Get the IInputStream stream from the blob object 
            var input = blob.msDetachStream();
            // Copy the stream from the blob to the File stream 
            Windows.Storage.Streams.RandomAccessStream.copyAsync(input, output).then(function () {
                output.flushAsync().done(function () {
                    input.close();
                    output.close();
                });
            });
        });
    });
} 
function restoreDatabase() {
    var picker = new Windows.Storage.Pickers.FileOpenPicker();
    picker.ViewMode = Windows.Storage.Pickers.PickerViewMode.Thumbnail;
    picker.SuggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
    picker.fileTypeFilter.append(".db");
    picker.pickSingleFileAsync().then(function (file) {
        if (file) {
            $.confirm({
                title: 'Confirm Restore!',
                content: 'Do you want to restore data from this backup?',
                buttons: {
                    Ok: function () {
                        file.copyAsync(Windows.Storage.ApplicationData.current.localFolder, "sims.db", Windows.Storage.NameCollisionOption.replaceExisting).done(function () {
                            $.when(fetchSettings()).then(initSettings()).done(function () {
                                $.growl({ title: "", message: 'Backup restored to App folder.', location: "bc", size: "large" });
                            });
                        });
                    },
                    cancel: function () {
                        //close
                    }
                }
            });
            // Application now has read/write access to the picked file
        }
        else {
            this.textBlock.Text = "Operation cancelled.";
        }
    });
}
function logRecord(record) {
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fs) {
        //console.log('file system open: ' + fs);
        //var today = new Date();
        //var dd = today.getDate();
        //var mm = today.getMonth() + 1; //January is 0!
        //var yyyy = today.getFullYear();
        //if (dd < 10) {
        //    dd = '0' + dd;
        //}
        //if (mm < 10) {
        //    mm = '0' + mm;
        //}
        //today = yyyy.toString() + mm.toString() + dd.toString();
        fs.getDirectory("Logs", { create: true, exclusive: false }, function (dirEntry) {
            dirEntry.getFile("log.txt", { create: true, exclusive: false }, function (fileEntry) {
                //console.log("fileEntry is file?" + fileEntry.isFile.toString());
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        //console.log("Successful file read...");
                        //readFile(fileEntry);
                    };
                    fileWriter.onerror = function (e) {
                        $.growl.error({ title: "", message: "Failed to log record: " + e.toString(), location: "tc", size: "large" });
                    };
                    fileWriter.seek(fileWriter.length);
                    var blob = new Blob([record], { type: 'text/plain' });
                    fileWriter.write(blob);
                    //$.growl.notice({ title: "", message: 'Record logged.', location: "tc", size: "large" });
                });
            });
        });
    });
}
$(document).on('click', 'a.downloadBaseMaps', function (e) {
    var url = resSettings.settings.mapSets[0].downloadPath;
    var numfiles = resSettings.settings.mapSets[0].numfiles;
    var mapset = "BASE";
    var filename;
    var filenum = 0;
    t0 = performance.now();
    $('#modalDownload').modal();
    $('#mb8 .progText').text("Download in progress ...");
    $('#mb8 .progress').removeClass('hide');
    $('#mb8 .progTime').text(new Date().toString());
    getFileandExtractWin(url, mapset, 1, numfiles);
});
$(document).on('click', 'a.downloadMaps', function (e) {
    var str = $('#curActivities').val();
    if (str === "0") { return true; }
    $('#modalDownload').modal();
    $('#mb8 .progText').text("Download in progress ...");
    $('#mb8 .progress').removeClass('hide');
    $.when(getCurrentActivityTiles(str, 10)).then(getCurrentActivityTiles(str, 11)).then(getCurrentActivityTiles(str, 12))
        .then(getCurrentActivityTiles(str, 13)).then(getCurrentActivityTiles(str, 14))
        .then(getCurrentActivityTiles(str, 15)).then(getCurrentActivityTiles(str, 16)).done(function () {
            resSettings.settings.mapSets[0].lastDownloadDate = new Date().toString();
            db.transaction(function (tx) {
                tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
                    $('#form3').find('label.mapNotes').text("Last downloaded on:" + new Date().toString());
                    //$('#modalProgress').modal('hide');
                });
            }, function (err) {
                $.growl({ title: "", message: "An error occured while updating mapsets. " + err.message, location: "tc", size: "large" });
            });
        });
});
function fetchAndSaveTile(i, j, zoom, xlimit, ystart, ylimit) {
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fs) {
        var numtiles = Math.pow(2, zoom);
        var xhr = new XMLHttpRequest();
        var url = "http://mt1.google.com/vt/lyrs=y&x=" + i + "&y=" + j + "&z=" + zoom;
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onloadstart = function () {
            tiles++;
            $('#mb8 .progText').text("File " + tiles + ": Download in progress ...");
            $('#mb8 .progress-bar').css('width', Math.round(tiles % 100) + '%').attr('aria-valuenow', Math.round(tiles % 100)).text(Math.round(tiles % 100) + '%');
            $('#mb8 .progress').removeClass('hide');
        };
        xhr.onloadend = function () {
            if (this.status === 200) {
                var blob = new Blob([this.response], { type: "image/jpeg" });
                fs.getDirectory("maps", { create: true, exclusive: false }, function (dir0Entry) {
                    dir0Entry.getDirectory(zoom.toString(), { create: true, exclusive: false }, function (dir2Entry) {
                        dir2Entry.getDirectory(i.toString(), { create: true, exclusive: false }, function (dir4Entry) {
                            dir4Entry.getFile(j + ".jpg", { create: true, exclusive: false }, function (fileEntry) {
                                //console.log("fileEntry is file?" + fileEntry.isFile.toString());
                                fileEntry.createWriter(function (fileWriter) {
                                    fileWriter.onwriteend = function () {
                                        //console.log("Successful file write...");
                                        //readFile(fileEntry);
                                        if (i <= xlimit) {
                                            if (j <= ylimit) {
                                                j++;
                                                fetchAndSaveTile(i, j, zoom, xlimit, ystart, ylimit);
                                            } else {
                                                i++;
                                                //if (i > xlimit) {
                                                //    $('#modalProgress').modal('hide');
                                                //    $('#mb6 .progText').text("");
                                                //    return false;
                                                //}
                                                j = ystart;
                                                fetchAndSaveTile(i, j, zoom, xlimit, ystart, ylimit);
                                            }
                                        } else {
                                            $('#modalDownload').modal('hide');
                                            $('#mb8 .progText').text("");
                                            return false;
                                        }
                                    };
                                    fileWriter.onerror = function (e) {
                                        //$.growl.error({ title: "", message: "Failed file read: " + e.toString(), location: "tc", size: "large" });
                                    };
                                    fileWriter.write(blob);
                                    //$.growl.notice({ title: "", message: 'File saved to Local folder.', location: "tc", size: "large" });
                                });
                            });
                        });
                    });
                });
            }
        };
        xhr.send();
    });
}
function getFileandExtractWin(url, mapset, i, n) {
    window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024, function (fs) {
        var xhr = new XMLHttpRequest();
        url2 = url + mapset + pad(i, 2) + ".zip";
        filename = mapset + pad(i, 2) + ".zip";
        //console.log(filename);
        xhr.open('GET', url2, true);
        xhr.responseType = 'blob';
        //t0 = performance.now();
        xhr.onloadstart = function () {
            //$('#modalProgress').modal();
            //t1 = performance.now();
            //t3 = t3 + Math.round((t1 - t0));
            $('#mb8 .progText').text("File " + i + " out of " + n + ": Download in progress ...");
            $('#mb8 .progress').removeClass('hide');
            //$('#mb6 .fa-clock-o').removeClass('hide');
        };
        xhr.onloadend = function () {
            if (this.status === 200) {
                //t1 = performance.now();
                //t3 = t3 + Math.round((t1 - t0));
                $('#mb8 .progText').text("File " + i + " out of " + n + ": Download in progress ...");
                $('#mb8 .progress-bar').css('width', '70%').attr('aria-valuenow', 100).text('70%');
                $('#mb8 .progress').removeClass('hide');
                //$('#mb6 .fa-clock-o').removeClass('hide');
                var blob = new Blob([this.response], { type: "octet/stream" });
                fs.root.getFile(filename, { create: true, exclusive: false }, function (fileEntry) {
                    writeFileWin(fileEntry, mapset, blob, i, n);
                    i++;
                    if (i > n) {
                        //resSettings.settings.mapSets[ActiveMapSet].downloaded = 1;
                        resSettings.settings.mapSets[0].lastDownloadBDate = new Date().toString();
                        db.transaction(function (tx) {
                            tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
                                //alert("Row inserted.");
                            });
                        }, function (err) {
                            $.growl({ title: "", message: "An error occured while updating mapsets. " + err.message, location: "tc", size: "large" });
                        });
                        $('#modalDownload').modal('hide');
                        $('#form3').find('label.mapBNotes').text("Last downloaded on:" + new Date().toString());
                        //initSettings();
                        //$('#mb6 .progTime').text("");
                        $.growl.notice({ title: "", message: "Download complete", location: "bc", size: "small" });
                        return false;
                    } else {
                        setTimeout(getFileandExtractWin(url, mapset, i, n), 10000);
                    }
                }, function (e) {
                    $.growl({ title: "", message: "Failed file save: " + e.toString(), location: "tc", size: "large" });
                });
            }
        };
        xhr.send();
    });
}
function processzipWin(zipSource, destination) {
    //var zip = cordova.file.cacheDirectory + zipSource;
    var filename = zipSource.substr(zipSource.lastIndexOf('/') + 1);
    //console.log(filename);
    var extracted = cordova.file.dataDirectory + destination;
    //console.log('unzipping ...');
    Zeep.unzip({
        from: zipSource,
        to: extracted
    }, function () {
        setTimeout(removefileWin(filename), 10000);
        //console.log('unzip success!');
    }, function (e) {
        //console.log('unzip error: ', e);
        $('#modalDownload').modal('hide');
        $.growl.error({ title: "", message: "Failed extracting zip file.", location: "tc", size: "large" });
    });
}
function removefileWin(filename) {
    //filename = mapset + pad(i, 2) + ".zip";
    window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024, function (fs) {
        fs.root.getFile(filename, { create: false }, function (fileEntry) {
            fileEntry.remove(function () {
                // The file has been removed succesfully
                //$.growl({ title: "", message: "Zip file is removed successfully.", location: "tc", size: "large" });
            }, function (error) {
                // Error deleting the file
                $.growl.error({ title: "", message: "Error removing zip file.", location: "tc", size: "large" });
            }, function () {
                // The file doesn't exist
                $.growl.notice({ title: "", message: "Zip file does not exist.", location: "tc", size: "large" });
            });
        });
    });
}
function writeFileWin(fileEntry, filename, dataObj, i, n) {
    fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwriteend = function () {
            //$('#mb6 .progText').text(fileEntry.toURL());
            //processZip("ms-appdata:///local/PNG.zip", cordova.file.dataDirectory);
            t1 = performance.now();
            t3 = t3 + Math.round((t1 - t0));
            $('#mb8 .progText').text("Extracting Zip file " + i + " out of " + n + ". This might take a while ...");
            $('#mb8 .progress').removeClass('hide');
            //$('#mb6 .fa-clock-o').removeClass('hide');
            $('#mb8 .progress-bar').css('width', Math.round(i / n * 100) + '%').attr('aria-valuenow', Math.round(i / n * 100)).text(Math.round(i / n * 100) + '%');
            //setTimeout(processzipWin(fileEntry.toURL(), "maps/" + filename), 20000);
            setTimeout(processzipWin(fileEntry.toURL(), "maps"), 20000);
        };
        fileWriter.onerror = function (e) {
            $.growl.error({ title: "", message: "Failed file write: " + e.toString(), location: "tc", size: "large" });
        };
        fileWriter.write(dataObj);
    });
}
//$(document).on('click', 'a.downloadMaps', function (e) {
//    var url = $('#form3').find("input[name='optMaps']:checked").data("url");
//    var numfiles = $('#form3').find("input[name='optMaps']:checked").data("files");
//    var mapset = $('#form3').find("input[name='optMaps']:checked").val();
//    var filename;
//    var filenum = 0;
//    t0 = performance.now();
//    $('#modalProgress').modal();
//    $('#mb6 .progText').text("Download in progress ...");
//    $('#mb6 .progress').removeClass('hide');
//    //$('#mb6 .fa-clock-o').removeClass('hide');
//    $('#mb6 .progTime').text(new Date().toString());
//    getFileandExtractWin(url, mapset, 1, numfiles);
//});
/*Windows Only*/