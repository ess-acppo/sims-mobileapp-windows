var siteData;
var staffData;
var staffDataNPH;
var staffDataBPH;
var staffDataIPH;
var staffDataS;
var statType;
var MoB;
var elifeStage;
var plifeStage;
var eCollMethod;
var percInfested;
var damageLevel;
var pestLevel;
var incidence;
var severity;
var HostStatCount;
var HostStatAreaNo;
var cLatitude;
var cLongitude;
var cWkt;
var vError = 0;
var vErrDescription = [];
var vFailed = false;
var HostStatCountFlag = 0;
var HostStatAreaFlag = 0;
var PathTargetObservedCodeFlag = 0;
var PHRefCodes;
var ActivityData;
var programId;
var taxaData;
var t0 = 0, t1 = 0, t3 = 0;

//function loadPHDefaults() {
//    // Loading Activity Defaults //
//    $.getJSON("data/activity.json", function (data) {
//        var option = $('<option />');
//        option.attr('value', data.activities.activity.metadata.id).text(data.activities.activity.metadata.name);
//        $("#form1").find('select[name="SurvActivityId_M_N"]').append(option);
//    });
//    // Loading sites //
//    $.getJSON("data/activity.json", function (data) {
//        siteData = data.activities.activity.metadata.sites;
//        $.each(data.activities.activity.metadata.sites, function (key, val) {
//            var option = $('<option />');
//            option.attr('value', val.id).text(val.name);
//            $("#form1").find('select[name="SiteId_O_N"]').append(option);
//        });
//    });
//    // Loading Team Defaults //
//    $.getJSON("data/staff_team.json", function (data) {
//        $.each(data.staffs.staff, function (key, val) {
//            var option = $('<option />');
//            option.attr('value', val.id).text(val.displayName);
//            $("#form1").find('select[name="ObservationStaffId_M_N"]').append(option);
//        });
//        staffData = '<option value="NONE">- select -</option>';
//        $.each(data.staffs.staff, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.id + '">';
//            option1 = option1 + val.displayName + "</option>";
//            staffData = staffData + option1;
//        });
//    });
//    // Loading Plant Statistic Type //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        statType = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.PlantStatisticType, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            statType = statType + option1;
//        });
//    });
//    // Loading Plant Observation Method //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        MoB = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.PlantObservationMethod, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            MoB = MoB + option1;
//        });
//    });
//    // Loading Life Stage //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        elifeStage = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.EntoLifeStage, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            elifeStage = elifeStage + option1;
//        });
//    });
//    $.getJSON("data/PHDefaults.json", function (data) {
//        plifeStage = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.PlantLifeStage, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            plifeStage = plifeStage + option1;
//        });
//    });
//    // Loading Ento Collection Method //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        eCollMethod = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.EntoCollectionMethod, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            eCollMethod = eCollMethod + option1;
//        });
//    });
//    // Loading Ento Percentage Infested //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        percInfested = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.EntoInfestedPct, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            percInfested = percInfested + option1;
//        });
//    });
//    // Loading Ento Damage Level //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        damageLevel = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.EntoDamageLevel, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            damageLevel = damageLevel + option1;
//        });
//    });
//    // Loading Ento Pest Level //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        pestLevel = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.EntoPestLevel, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            pestLevel = pestLevel + option1;
//        });
//    });
//    // Loading Path Incidence //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        incidence = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.PathIncidence, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            incidence = incidence + option1;
//        });
//    });
//    // Loading Path Severity //
//    $.getJSON("data/PHDefaults.json", function (data) {
//        severity = '<option value="NONE">- select -</option>';
//        $.each(data.PlantHealthReferenceCodes.PathSeverity, function (key, val) {
//            var option1 = '<option';
//            option1 = option1 + ' value="' + val.code + '">';
//            option1 = option1 + val.desc + "</option>";
//            severity = severity + option1;
//        });
//    });
//}
function syncPHRefCodes() {
    // Loading Activity Defaults //
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://online-dev.agriculture.gov.au/ords-int/rest/sims/plant_health/referenceCodes",
        "method": "GET",
        "beforeSend": function () {
            $('#mb6 .progText').text("Syncing Reference Codes ...");
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(settings).done(function (data) {
        //alert(JSON.stringify(response));
        PHRefCodes = data;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM phrefcodes", [], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting PHRefCodes from DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO phrefcodes (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'refcodes', JSON.stringify(PHRefCodes)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating PHRefCodes to DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE phrefcodes SET settingsval = ? WHERE id = ?", [JSON.stringify(PHRefCodes), 1], function (tx, res) {
                //alert("Dataset updated.");
                //$.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large", fixed: "true" });
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating PHRefCodes to DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        $('#modalProgress').modal('hide');
    }).fail(function (response) {
        $('#mb6 .progText').text("");
        $('#modalProgress').modal('hide');
        $.growl.error({ title: "", message: "An error occurred while fetching reference codes. " + err.message, location: "bc", size: "large" });
    });
}
function loadPHRefCodes() {
    statType = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.PlantStatisticType, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        statType = statType + option1;
    });
    MoB = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.PlantObservationMethod, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        MoB = MoB + option1;
    });
    elifeStage = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.EntoLifeStage, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        elifeStage = elifeStage + option1;
    });
    percInfested = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.EntoInfestedPct, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        percInfested = percInfested + option1;
    });
    damageLevel = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.EntoDamageLevel, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        damageLevel = damageLevel + option1;
    });
    plifeStage = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.PlantLifeStage, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        plifeStage = plifeStage + option1;
    });
    eCollMethod = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.EntoCollectionMethod, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        eCollMethod = eCollMethod + option1;
    });
    pestLevel = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.EntoPestLevel, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        pestLevel = pestLevel + option1;
    });
    incidence = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.PathIncidence, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        incidence = incidence + option1;
    });
    severity = '<option value="NONE">- select -</option>';
    $.each(PHRefCodes.PlantHealthReferenceCodes.PathSeverity, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.code + '">';
        option1 = option1 + val.desc + "</option>";
        severity = severity + option1;
    });
}
function syncActivityData() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://online-dev.agriculture.gov.au/ords-int/rest/sims/plant_health/activity",
        "method": "GET",
        "beforeSend": function () {
            $('#mb6 .progText').text("Syncing Activity Data ...");
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(settings).done(function (data) {
        ActivityData = data;
        siteData = data.activities[0].sites;
        programId = data.activities[0].programId;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM activitydata", [], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting ActivityData from DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO activitydata (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'activity', JSON.stringify(ActivityData)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE activitydata SET settingsval = ? WHERE id = ?", [JSON.stringify(ActivityData), 1], function (tx, res) {
                //alert("Dataset updated.");
                //$.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large", fixed: "true" });
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $('#mb6 .progText').text("");
        $('#modalProgress').modal('hide');
        $.growl.error({ title: "", message: "An error occurred while fetching ActivityData. " + err.message, location: "bc", size: "large" });
    });
}
function loadActivityData() {
    $.each(ActivityData.activities, function (key, val) {
        var option = $('<option />');
        option.attr('value', val.activityId).text(val.activityName);
        $("#form1").find('select[name="SurvActivityId_M_N"]').append(option);
    });
    $.each(siteData, function (key, val) {
        var option = $('<option />');
        option.attr('value', val.id).text(val.name);
        $("#form1").find('select[name="SiteId_O_N"]').append(option);
    });
}
function syncstaffData() {
    var NPHsettings = {
        "async": false,
        "crossDomain": true,
        "url": "https://online-dev.agriculture.gov.au/ords-int/rest/sims/common/program/NPH/team",
        "method": "GET",
        "beforeSend": function () {
            $('#mb6 .progText').text("Syncing NPH Staff Data ...");
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
            $.growl.error({ title: "", message: "An error occured while deleting NPH StaffData from database. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO staffdata (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'NPHstaff', JSON.stringify(staffDataNPH)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating NPH StaffData to database. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE staffdata SET settingsval = ? WHERE id = ?", [JSON.stringify(staffDataNPH), 1], function (tx, res) {
                //alert("Dataset updated.");
                //$.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large", fixed: "true" });
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating NPH StaffData to database. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        syncBPHstaffData();
    }).fail(function (response) {
        $('#mb6 .progText').text("");
        $('#modalProgress').modal('hide');
        $.growl.error({ title: "", message: "An error occurred while fetching StaffData. " + err.message, location: "bc", size: "large" });
    });
}
function syncBPHstaffData() {
    var BPHsettings = {
        "async": false,
        "crossDomain": true,
        "url": "https://online-dev.agriculture.gov.au/ords-int/rest/sims/common/program/BPH/team",
        "method": "GET",
        "beforeSend": function () {
            $('#mb6 .progText').text("Syncing BPH Staff Data ...");
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
            $.growl.error({ title: "", message: "An error occured while deleting BPH StaffData from database. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO staffdata (id, settingstext, settingsval) VALUES (?,?,?)", [2, 'BPHstaff', JSON.stringify(staffDataBPH)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating BPH StaffData to DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE staffdata SET settingsval = ? WHERE id = ?", [JSON.stringify(staffDataBPH), 2], function (tx, res) {
                //alert("Dataset updated.");
                //$.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large", fixed: "true" });
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating BPH StaffData to DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        syncIPHstaffData();
    }).fail(function (response) {
        $('#mb6 .progText').text("");
        $('#modalProgress').modal('hide');
        $.growl.error({ title: "", message: "An error occurred while fetching BPH StaffData. " + err.message, location: "bc", size: "large" });
    });
}
function syncIPHstaffData() {
    var IPHsettings = {
        "async": false,
        "crossDomain": true,
        "url": "https://online-dev.agriculture.gov.au/ords-int/rest/sims/common/program/IPH/team",
        "method": "GET",
        "beforeSend": function () {
            $('#mb6 .progText').text("Syncing IPH Staff Data ...");
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
            $.growl.error({ title: "", message: "An error occured while deleting IPH StaffData from database. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO staffdata (id, settingstext, settingsval) VALUES (?,?,?)", [3, 'IPHstaff', JSON.stringify(staffDataIPH)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating IPH StaffData to DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE staffdata SET settingsval = ? WHERE id = ?", [JSON.stringify(staffDataIPH), 3], function (tx, res) {
                //alert("Dataset updated.");
                //$.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large", fixed: "true" });
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating IPH StaffData to DB. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
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
        }
    }).fail(function (response) {
        $('#mb6 .progText').text("");
        $('#modalProgress').modal('hide');
        $.growl.error({ title: "", message: "An error occurred while fetching IPH StaffData. " + err.message, location: "bc", size: "large" });
    });
}
function syncTaxaData() {
    var Taxasettings = {
        "async": false,
        "crossDomain": true,
        "url": "https://online-dev.agriculture.gov.au/ords-int/rest/sims/plant_health/taxa",
        "method": "GET",
        "beforeSend": function () {
            $('#mb6 .progText').text("Syncing Taxa ...");
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(Taxasettings).done(function (data) {
        taxaData = data;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM taxadata", [], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting Taxa Data from database. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO taxadata (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'taxa', JSON.stringify(taxaData)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating Taxa Data to database. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE taxadata SET settingsval = ? WHERE id = ?", [JSON.stringify(taxaData), 1], function (tx, res) {
                //alert("Dataset updated.");
                //$.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large", fixed: "true" });
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating Taxa Data to database. " + err.message, location: "bc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $('#mb6 .progText').text("");
        $('#modalProgress').modal('hide');
        $.growl.error({ title: "", message: "An error occurred while fetching Taxa Data. " + err.message, location: "bc", size: "large" });
    });
}
function loadstaffData() {
    // Loading Team Defaults //
    $.each(staffDataS.staffs.staff, function (key, val) {
        var option = $('<option />');
        option.attr('value', val.id).text(val.displayName);
        $("#form1").find('select[name="ObservationStaffId_M_N"]').append(option);
    });
    staffData = '<option value="NONE">- select -</option>';
    $.each(staffDataS.staffs.staff, function (key, val) {
        var option1 = '<option';
        option1 = option1 + ' value="' + val.id + '">';
        option1 = option1 + val.displayName + "</option>";
        staffData = staffData + option1;
    });
}
function loadSitePolygons() {
    $.each(siteData, function (key, val) {
        if (val.id == 99999) { return true; }
        var wkt = new Wkt.Wkt();
        wkt.read(val.locationDatum.wkt);
        wkt.toObject();

        var tC = [];
        // Add each GPS entry to an array
        for (var k = 0; k < wkt.toJson().coordinates[0].length; k++) {
            var latlngc = new google.maps.LatLng(wkt.toJson().coordinates[0][k][1], wkt.toJson().coordinates[0][k][0]);
            tC.push(latlngc);
        };
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
    });
}
function loadBotanySample() {
    bsamples = bsamples + 1;
    var that = $(botSample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    //that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    $('#samples').append(that);
    $('#numSamples').text(bsamples);
    BindAutoCompleteBS(that.find('.taxonTextBS'));
}
function loadEntoSample() {
    esamples = esamples + 1;
    var that = $(entosample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name^="EntoCollMethodCode"]').find('option').remove().end().append($(eCollMethod));
    that.find('select[name^="EntoInfestedPctCode"]').find('option').remove().end().append($(percInfested));
    that.find('select[name^="EntoDamageLevelCode"]').find('option').remove().end().append($(damageLevel));
    that.find('select[name^="EntoPestLevelCode"]').find('option').remove().end().append($(pestLevel));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    $('#samples').append(that);
    $('#numSamples').text(esamples);
    BindAutoCompleteES(that.find('.taxonTextES'));
}
function loadPathSample() {
    psamples = psamples + 1;
    var that = $(pathsample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name^="PathIncidCode"]').find('option').remove().end().append($(incidence));
    that.find('select[name^="PathSevCode"]').find('option').remove().end().append($(severity));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    //that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    $('#samples').append(that);
    $('#numSamples').text(psamples);
    BindAutoCompletePS(that.find('.taxonTextPS'));
}
function getNextID(e) {
    //Read from DB
    var nextID = resSettings.settings.device.currentSampleNumber * 1 + 1;
    resSettings.settings.device.currentSampleNumber = nextID;
    db.transaction(function (tx) {
        tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
            //alert("Row inserted.");
            //return e + pad(nextID.toString(), 4);
            $("#form1").find('input[type="text"].nextid').last().val(e + pad(nextID.toString(), 6));
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while incrementing ID. " + err.message, location: "bc", size: "large" });
    });
};
function loadModal(pagename) {
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#modalProgress').modal();
            $('#mb6 .progText').text("Loading ...");
            $('#mb').empty();
            $('#mt').empty();
            $('#mt2').empty();
            $(document).find('script[id="pageScript"]').remove();
            $('#mb').load(pagename + '.html');
            t0 = performance.now();
            bsamples = 0;
            esamples = 0;
            psamples = 0;
            numPlants = 0;
            numEntoHosts = 0;
            numEntoTargets = 0;
            numPathHosts = 0;
            numPathTargets = 0;
        }
    }).complete(function (e) {
        $('#form1').find("input[type=text],input[type=date],input[type=number], textarea").val("");
        $('#form1').find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
        $('#form1').find("input[type='radio'].minimal").iCheck('uncheck');
        $.ajax({
            beforeSend: function () {
                loadPHRefCodes();
                loadActivityData();
                loadstaffData();
            }
        }).complete(function () {
            if (curIdx > -1) {
                var data = results.observations[curIdx - 1];
                //console.log(JSON.stringify(data));
                //console.time('load Modal');
                $.each(data, function (key, value) {
                    //console.time('load Modal 1');
                    if (key.startsWith('ObservationWhereWktClob') && value != "") {
                        var wkt = new Wkt.Wkt();
                        wkt.read(value);
                        wkt.toObject();
                        $('#form1').find("input[type='number'][name='Longitude']").val(wkt.toJson().coordinates[0]);
                        $('#form1').find("input[type='number'][name='Latitude']").val(wkt.toJson().coordinates[1]);
                    }
                    if (key == "AdditionalObserverTab" && value.length > 0) {
                        $('#form1').find("input[type='checkbox'][name='AdditionalObserverTab']").iCheck('check');
                        addlObservers = '<option value="NONE">- select -</option>';
                        $.each(value, function (key1, value1) {
                            //$('#form1').find("input[type='text'][name='AdditionalObserverName']").eq(key1).val(value1.AdditionalObserverName);
                            $('#form1').find("input[type='text'][name^='AdditionalObserverName" + value1.ObserverNo + "']").val(value1.AdditionalObserverName);
                            var option1 = '<option';
                            option1 = option1 + ' value="' + value1.ObserverNo + '">';
                            option1 = option1 + value1.AdditionalObserverName + "</option>";
                            addlObservers = addlObservers + option1;
                        });
                    }
                    if (key == "PlantObsTab" && curDiscipline == "B" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $("#addPlant").trigger("click");
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2.startsWith("PlantTaxonText") && value2.length > 0) {
                                        $('div.hostweed').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2.startsWith("HostStatCount") && value2 > 0) {
                                        $('div.hostweed').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("div.countArea").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                                    }
                                    if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                                        $('div.hostweed').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("div.countArea").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                                    }
                                    if (key2.startsWith("LocationPointWktClob") && value2.length > 0) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.hostweed').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.hostweed').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.hostweed').eq(key1).find("input:not([name^='CountList'])[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 == "PlantObsAttachmentTab") {
                                        $.each(value2, function (key3, value3) {
                                            var pKey = key3 + 1;
                                            if (value3.AttachmentPath != "") {
                                                $('div.hostweed').eq(key1).find("input:hidden[name^='PlantObsAttachment" + pKey + "']").val(value3.AttachmentPath);
                                                $('div.hostweed').eq(key1).find("img[name^='iPlantObsAttachment" + pKey + "']").attr("src", value3.AttachmentPath);
                                            }
                                            if (value3.AttachmentPath == "") {
                                                $('div.hostweed').eq(key1).find("input:hidden[name^='PlantObsAttachment" + pKey + "']").val("");
                                                $('div.hostweed').eq(key1).find("img[name^='iPlantObsAttachment" + pKey + "']").attr("src", "images/plant.png");
                                            }
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key == "PlantObsTab" && curDiscipline == "E" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $("#addEntoHost").trigger("click");
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2.startsWith("PlantTaxonText") && value2.length > 0) {
                                        $('div.entobox').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2.startsWith("HostStatCount") && value2 > 0) {
                                        $('div.entobox').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                                        $('div.entobox').eq(key1).find("div.countArea").removeClass('hide');
                                        $('div.entobox').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                                    }
                                    if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                                        $('div.entobox').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                                    }
                                    if (key2.startsWith("LocationPointWktClob") && value2.length > 0) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.entobox').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 == "PlantObsTargetTab") {
                                        $.each(value2, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    if (key3 > 0) {
                                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3 - 1).find("[data-action=addEntoTarget]").trigger("click");
                                                    }
                                                }
                                            }).complete(function (e) {
                                                $.each(value3, function (key4, value4) {
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='text'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='date'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='number'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("select[name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("textarea[name^='" + key4 + "']").val(value4);
                                                });
                                            });
                                        });
                                    }
                                    if (key2 == "PlantObsAttachmentTab") {
                                        $.each(value2, function (key3, value3) {
                                            var pKey = key3 + 1;
                                            if (value3.AttachmentPath != "") {
                                                $('div.hostweed').eq(key1).find("input:hidden[name^='PlantObsAttachment" + pKey + "']").val(value3.AttachmentPath);
                                                $('div.hostweed').eq(key1).find("img[name^='iPlantObsAttachment" + pKey + "']").attr("src", value3.AttachmentPath);
                                            }
                                            if (value3.AttachmentPath == "") {
                                                $('div.hostweed').eq(key1).find("input:hidden[name^='PlantObsAttachment" + pKey + "']").val("");
                                                $('div.hostweed').eq(key1).find("img[name^='iPlantObsAttachment" + pKey + "']").attr("src", "images/plant.png");
                                            }
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key == "PlantObsTab" && curDiscipline == "P" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $("#addPathHost").trigger("click");
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2.startsWith("PlantTaxonText") && value2.length > 0) {
                                        $('div.pathbox').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2.startsWith("HostStatCount") && value2 > 0) {
                                        $('div.pathbox').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                                        $('div.pathbox').eq(key1).find("div.countArea").removeClass('hide');
                                        $('div.pathbox').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                                    }
                                    if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                                        $('div.pathbox').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                                    }
                                    if (key2.startsWith("LocationPointWktClob") && value2.length > 0) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.pathbox').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 == "PlantObsTargetTab") {
                                        $.each(value2, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    if (key3 > 0) {
                                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3 - 1).find("[data-action=addPathTarget]").trigger("click");
                                                    }
                                                }
                                            }).complete(function (e) {
                                                $.each(value3, function (key4, value4) {
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='text'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='date'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='number'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("select[name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("textarea[name^='" + key4 + "']").val(value4);
                                                });
                                            });
                                        });
                                    }
                                    if (key2 == "PlantObsAttachmentTab") {
                                        $.each(value2, function (key3, value3) {
                                            var pKey = key3 + 1;
                                            if (value3.AttachmentPath != "") {
                                                $('div.hostweed').eq(key1).find("input:hidden[name^='PlantObsAttachment" + pKey + "']").val(value3.AttachmentPath);
                                                $('div.hostweed').eq(key1).find("img[name^='iPlantObsAttachment" + pKey + "']").attr("src", value3.AttachmentPath);
                                            }
                                            if (value3.AttachmentPath == "") {
                                                $('div.hostweed').eq(key1).find("input:hidden[name^='PlantObsAttachment" + pKey + "']").val("");
                                                $('div.hostweed').eq(key1).find("img[name^='iPlantObsAttachment" + pKey + "']").attr("src", "images/plant.png");
                                            }
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key == "PlantSampleTab" && curDiscipline == "B" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    loadBotanySample();
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2.startsWith("SamplePointWktClob") && value2.length > 0) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    if (key2 == "AdditionalCollectorTab") {
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        if (value2.length > 0) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectorTab']").iCheck('check');
                                            $.each(value2, function (key3, value3) {
                                                $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                            });
                                        }
                                    }
                                    if (key2 == "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 == "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 == "SampleAttachmentTab") {
                                        $.each(value2, function (key3, value3) {
                                            var pKey = key3 + 1;
                                            if (value3.AttachmentPath != "") {
                                                $('div.sample').eq(key1).find("input:hidden[name^='PlantSampleAttachment" + pKey + "']").val(value3.AttachmentPath);
                                                $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment" + pKey + "']").attr("src", value3.AttachmentPath);
                                            }
                                            if (value3.AttachmentPath == "") {
                                                $('div.sample').eq(key1).find("input:hidden[name^='PlantSampleAttachment" + pKey + "']").val("");
                                                $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment" + pKey + "']").attr("src", "images/plant.png");
                                            }
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key == "PlantSampleTab" && curDiscipline == "E" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    loadEntoSample();
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2.startsWith("SamplePointWktClob") && value2.length > 0) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    if (key2 == "AdditionalCollectorTab") {
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        if (value2.length > 0) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectorTab']").iCheck('check');
                                            $.each(value2, function (key3, value3) {
                                                $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                            });
                                        }
                                    }
                                    if (key2 == "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 == "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 == "EntoLifeStgTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 == "SampleAttachmentTab") {
                                        $.each(value2, function (key3, value3) {
                                            var pKey = key3 + 1;
                                            if (value3.AttachmentPath != "") {
                                                $('div.sample').eq(key1).find("input:hidden[name^='PlantSampleAttachment" + pKey + "']").val(value3.AttachmentPath);
                                                $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment" + pKey + "']").attr("src", value3.AttachmentPath);
                                            }
                                            if (value3.AttachmentPath == "") {
                                                $('div.sample').eq(key1).find("input:hidden[name^='PlantSampleAttachment" + pKey + "']").val("");
                                                $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment" + pKey + "']").attr("src", "images/plant.png");
                                            }
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key == "PlantSampleTab" && curDiscipline == "P" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    loadPathSample();
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2.startsWith("SamplePointWktClob") && value2.length > 0) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    if (key2 == "AdditionalCollectorTab") {
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        if (value2.length > 0) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectorTab']").iCheck('check');
                                            $.each(value2, function (key3, value3) {
                                                $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                            });
                                        }
                                    }
                                    if (key2 == "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 == "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 == "SampleAttachmentTab") {
                                        $.each(value2, function (key3, value3) {
                                            var pKey = key3 + 1;
                                            if (value3.AttachmentPath != "") {
                                                $('div.sample').eq(key1).find("input:hidden[name^='PlantSampleAttachment" + pKey + "']").val(value3.AttachmentPath);
                                                $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment" + pKey + "']").attr("src", value3.AttachmentPath);
                                            }
                                            if (value3.AttachmentPath == "") {
                                                $('div.sample').eq(key1).find("input:hidden[name^='PlantSampleAttachment" + pKey + "']").val("");
                                                $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment" + pKey + "']").attr("src", "images/plant.png");
                                            }
                                        });
                                    }
                                });
                            });
                        });
                    }
                    $('#form1').find("input[type='text'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='date'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='datetime-local'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='number'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name^='" + key + "'][value='on']").iCheck('check');
                    $('#form1').find("input[type='radio'][name^='" + key + "'][value='" + value + "']").iCheck('check');
                    $('#form1').find("input[type='radio'][name^='" + key + "']").val(value);
                    $('#form1').find("select[name^='" + key + "']").val(value);
                    $('#form1').find("textarea[name^='" + key + "']").val(value);
                    //console.timeEnd('load Modal 6');
                });
                $('#form1').find("input[type='text'][name^='id']").val(curIdx);
                //$('#form1').find("input[type='text'][name='track_id']").val(curIdx);
                //$('#form1').find("input[type='text'][name='age']").inputmask("99:99");
                $('.nextid').text('');
                //console.timeEnd('load Modal');
            }
            else {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd
                }
                if (mm < 10) {
                    mm = '0' + mm
                }
                today = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();
                $('#form1').find('select[id="ObservationStaffId"]').find('option').remove().end().append($(staffData));
                if (curIdx == -1) {
                    $('#form1').find("input[type='number'][name^='Latitude']").val(curLat.toFixed(5));
                    $('#form1').find("input[type='number'][name^='Longitude']").val(curLng.toFixed(5));
                    $('#form1').find("input[type='text'][name^='ObservationWhereWktClob']").val(curWkt);
                    getAltitude();
                }
                $('#form1').find("input[type='date'][name^='ObservationDatetime']").val(today);
                $('#form1').find("input[type='number'][name^='TimeHourCount']").val("0");
                if (results.observations.length == 0) {
                    $('#form1').find("input[type='number'][name^='id']").val(1);
                } else { $('#form1').find("input[type='number'][name^='id']").val(results.observations[results.observations.length - 1].id_M_N + 1); }
                //$('#form1').find("input[type='text'][name^='track_id']").val(results.observations.length + 1);
                $('#form1').find("input[type='number'][name^='status']").val("0");
                $('#form1').find("input[type='text'][name^='PlantDisciplineCode']").val(curDiscipline);
                $('#form1').find("input[type='number'][name^='SubmittedByStaffId']").val("2");
                //$('#form1').find("input[type='text'][name='age']").inputmask("99:99");
                $('.nextid').text('');
            }
        });
    }).done(function () {
        $('#modalProgress').modal('hide');
        t1 = performance.now();
        $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>&nbsp;" + Math.round((t1 - t0)) + " ms");
    });
};
function objectifyPHFormforSave(formArray) {
    var addlObserver = 1;
    var obsAttachment = 1;
    var sampleAttachment = 1;
    var observation = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            if (formArray[i]['name'].startsWith('AdditionalCollectorTab')) { continue; }
            if (formArray[i]['name'].startsWith('PlantStatisticType')) { continue; }
            if (formArray[i]['name'].startsWith('Latitude')) { continue; }
            if (formArray[i]['name'].startsWith('Longitude')) { continue; }
            if (formArray[i]['name'].startsWith('AdditionalObserverTab')) { continue; }
            if (formArray[i]['name'].startsWith('AdditionalObserverName') && formArray[i]['value'] == "") {
                continue;
            }
            if (formArray[i]['name'].startsWith('PlantObsAttachment') && formArray[i]['value'] == "") {
                continue;
            }
            if (formArray[i]['name'].startsWith('PlantSampleAttachment') && formArray[i]['value'] == "") {
                continue;
            }
            var fname = formArray[i]['name'].split("_")[0];
            var fMOC = formArray[i]['name'].split("_")[1];
            var fNSD = formArray[i]['name'].split("_")[2];
            var fnum = formArray[i]['name'].split("_")[3];
            var ftype = formArray[i]['name'].split("_")[4];

            //if (fMOC = 'M' && formArray[i]['value'] == null) {
            //    return false;
            //}

            if (formArray[i]['name'].startsWith('AdditionalObserverName') && formArray[i]['value'] != "") {
                //var x = formArray[i]['name'].substr(formArray[i]['name'].length - 1);
                var observer = { "ObserverNo": "", "AdditionalObserverName": "" };
                observer.ObserverNo = addlObserver;
                observer.AdditionalObserverName = formArray[i]['value'];
                observation.AdditionalObserverTab.push(observer);
                addlObserver++;
                continue;
            }

            if (ftype == 'H' && fname != 'GpsDatumId') {
                if (fname == 'PlantTaxonId') {
                    var vPlantObsTab = {};
                }
                if (fname.startsWith('PlantObsAttachment')) {
                    //var x = fname.substr(fname.length - 1);
                    var attachment = { "AttachmentNo": "", "AttachmentPath": "" };
                    attachment.AttachmentNo = obsAttachment;
                    attachment.AttachmentPath = formArray[i]['value'];
                    vPlantObsTab.PlantObsAttachmentTab.push(attachment);
                    obsAttachment++;
                    continue;
                }
                if (fNSD === 'N') {
                    vPlantObsTab[formArray[i]['name']] = Number(formArray[i]['value']);
                }
                else { vPlantObsTab[formArray[i]['name']] = formArray[i]['value']; }
                if (fname === 'LocationPointWktClob') {
                    vPlantObsTab["PlantObsTargetTab"] = [];
                    vPlantObsTab["PlantObsAttachmentTab"] = [];
                }
                continue;
            }
            if (ftype == 'T' && fname != 'CommentText') {
                if (fname == 'TargetTaxonId') {
                    var vPlantObsTargetTab = {};
                }
                vPlantObsTargetTab[formArray[i]['name']] = formArray[i]['value'];
                continue;
            }
            if (ftype == 'T' && fname == 'CommentText') {
                vPlantObsTargetTab[formArray[i]['name']] = formArray[i]['value'];
                vPlantObsTab.PlantObsTargetTab.push(vPlantObsTargetTab);
                continue;
            }
            if (ftype == 'H' && fname == 'GpsDatumId') {
                vPlantObsTab[formArray[i]['name']] = formArray[i]['value'];
                observation.PlantObsTab.push(vPlantObsTab);
                continue;
            }
            if (ftype == 'S' && fname != 'EndOfSample') {
                if (fname == 'SampleFieldLabelText') {
                    var vPlantSampleTab = {};
                }
                if (fname.startsWith('AdditionalCollectorName') && (formArray[i]['value'] == 'NONE' || formArray[i]['value'] == '')) {
                    continue;
                }
                if (fname.startsWith('AdditionalCollectorName') && (formArray[i]['value'] != 'NONE' || formArray[i]['value'] != '')) {
                    vPlantSampleTab.AdditionalCollectorTab.push(Number(formArray[i]['value']));
                    continue;
                }
                if (fname.startsWith('PlantPartTab') && formArray[i]['value'] != 'Y') {
                    continue;
                }
                if (fname.startsWith('PlantPartTab') && formArray[i]['value'] == 'Y') {
                    //var vPlantpart = fname.split("_")[0];
                    var vPlantpart = fname.split("-")[1];
                    vPlantSampleTab.PlantPartTab.push(vPlantpart);
                    continue;
                }
                if (fname.startsWith('PlantPreservationTab') && formArray[i]['value'] != 'Y') {
                    continue;
                }
                if (fname.startsWith('PlantPreservationTab') && formArray[i]['value'] == 'Y') {
                    //var vPlantPreservation = fname.split("_")[0];
                    var vPlantPreservation = fname.split("-")[1];
                    vPlantSampleTab.PlantPreservationTab.push(vPlantPreservation);
                    continue;
                }
                if (fname.startsWith('EntoLifeStgTab') && formArray[i]['value'] != 'Y') {
                    continue;
                }
                if (fname.startsWith('EntoLifeStgTab') && formArray[i]['value'] == 'Y') {
                    //var vEntoLifeStgTab = fname.split("_")[0];
                    var vEntoLifeStgTab = fname.split("-")[1];
                    vPlantSampleTab.EntoLifeStgTab.push(vEntoLifeStgTab);
                    continue;
                }
                if (fname.startsWith('PlantSampleAttachment')) {
                    //var x = fname.substr(fname.length - 1);
                    var attachment = { "AttachmentNo": "", "AttachmentPath": "" };
                    attachment.AttachmentNo = sampleAttachment;
                    attachment.AttachmentPath = formArray[i]['value'];
                    vPlantSampleTab.SampleAttachmentTab.push(attachment);
                    sampleAttachment++;
                    continue;
                }         
                if (fNSD === 'N') {
                    vPlantSampleTab[formArray[i]['name']] = Number(formArray[i]['value']);
                }
                else { vPlantSampleTab[formArray[i]['name']] = formArray[i]['value']; }
                if (fname === 'ExternalPhotoExistFlag') {
                    vPlantSampleTab["PlantPreservationTab"] = [];
                    vPlantSampleTab["PlantPartTab"] = [];
                    vPlantSampleTab["EntoLifeStgTab"] = [];
                    vPlantSampleTab["SampleAttachmentTab"] = [];
                }
                if (fname === 'CommentText') {
                    vPlantSampleTab["AdditionalCollectorTab"] = [];
                }
                continue;
            }
            if (ftype == 'S' && fname == 'EndOfSample') {
                //vPlantSampleTab[formArray[i]['name']] = formArray[i]['value'];
                observation.PlantSampleTab.push(vPlantSampleTab);
                continue;
            }
            //alert(formArray[i]['name'] + ':' + formArray[i]['value']);
            if (fNSD === 'N') {
                observation[formArray[i]['name']] = Number(formArray[i]['value']);
            }
            else { observation[formArray[i]['name']] = formArray[i]['value']; }
            if (fname === 'AltitudeNo' && addlObserver === 1) {
                observation["AdditionalObserverTab"] = [];
                observation["PlantObsTab"] = [];
                observation["PlantSampleTab"] = [];
            }
        }
    }
    return observation;
}
function objectifyPHFormforSubmit(data) {//serialize data function
    var modData = JSON.parse(JSON.stringify(data));
    var jsonStr = JSON.stringify(modData);
    jsonStr = jsonStr.replace(/_O_N_\d_T/g, '').replace(/_M_S_\d_T/g, '').replace(/_O_S_\d_T/g, '').replace(/_M_N_\d_H/g, '').replace(/_M_S_\d_H/g, '').replace(/_O_S_\d_H/g, '').replace(/_O_N_\d_H/g, '');
    jsonStr = jsonStr.replace(/_M_S_\d_S/g, '').replace(/_O_N_\d_S/g, '').replace(/_M_S_\d_S/g, '').replace(/_M_D_\d_S/g, '').replace(/_O_S_\d_S/g, '');
    jsonStr = jsonStr.replace(/_M_N/g, '').replace(/_O_N/g, '').replace(/_M_D/g, '').replace(/_M_S/g, '');
    var jsonData = JSON.parse(jsonStr);
    if (jsonData.AdditionalObserverTab.length === 0) { delete jsonData.AdditionalObserverTab };
    //if (jsonData.ObsAttachmentTab.length === 0) { delete jsonData.ObsAttachmentTab };
    $.each(jsonData.PlantObsTab, function (i, item) {
        delete item.CountList;
        if (item.HostStatAreaNo === 0) { delete item.HostStatAreaNo };
        if (item.HostStatCount === 0) { delete item.HostStatCount };
        if (item.PlantObsTargetTab.length === 0) { delete item.PlantObsTargetTab };
        if (item.PlantObsAttachmentTab.length === 0) { delete item.PlantObsAttachmentTab };
        if (item.PlantTaxonText !== "") {
            delete item.PlantTaxonId;
        }
    });
    $.each(jsonData.PlantSampleTab, function (i, item) {
        if (item.AdditionalCollectorTab.length === 0) { delete item.AdditionalCollectorTab };
        if (item.EntoLifeStgTab.length === 0) { delete item.EntoLifeStgTab };
        if (item.PlantPartTab.length === 0) { delete item.PlantPartTab };
        if (item.PlantPreservationTab.length === 0) { delete item.PlantPreservationTab };
        if (item.SampleAttachmentTab.length === 0) { delete item.SampleAttachmentTab };
        if (item.PrelimTaxonText !== "") {
            delete item.PrelimTaxonId;
        }
        if (item.PlantPreservOtherText === "") {
            delete item.PlantPreservOtherText;
        }
        if (item.HostIdentifiedUserId === 0) {
            delete item.HostIdentifiedUserId;
        }
    });
    delete jsonData.status;
    delete jsonData.id;
    return jsonData;
}
function Iterate(data) {
    var modData = JSON.parse(JSON.stringify(data));
    delete modData.status_M_N;
    $.each(modData, function (index, value) {
        if (typeof value == 'object') {
            if (index == 'PlantObsTab' && value.length == 0) {
                vError = 1;
                vErrDescription.push('Minimum one Host expected.You can Save & Exit instead.');
                vFailed = true;
                return false;
            }
            if (index == 'PlantSampleTab' && value.length == 0) {
                vError = 1;
                vErrDescription.push('Minimum one Sample expected.You can Save & Exit instead.');
                vFailed = true;
                return false;
            }
            Iterate(value);
        }
        else {
            //console.log(index + ":" + value);
            if (isNaN(index)) {
                var fname = index.split("_")[0];
                var fMOC = index.split("_")[1];
                var fNSD = index.split("_")[2];
                var fnum = index.split("_")[3];
                var ftype = index.split("_")[4];
                if (fname == 'HostStatCount' && value == 0) { HostStatCountFlag = 1; }
                if (fname == 'TargetObservedCode' && value == 'N') { PathTargetObservedCodeFlag = 1; }
                if (fname == 'HostStatAreaNo' && value == 0 && HostStatCountFlag == 1) {
                    //console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push('HostStatCount and Area fields - both cannot be NULL');
                    vFailed = true;
                    return false;
                }
                if (fname == 'CommentText' && value == "" && PathTargetObservedCodeFlag == 1) {
                    //console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push('Comments Text for TargetObserved field cannot be NULL');
                    vFailed = true;
                    return false;
                }
                if (fMOC == 'M' && fNSD == 'S' && value == '') {
                    //console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push(fname + ' field cannot be NULL');
                    vFailed = true;
                    return false;
                }
                if (fMOC == 'M' && fNSD == 'D' && value == '') {
                    //console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push(fname + ' field cannot be NULL');
                    vFailed = true;
                    return false;
                }
                if (fMOC == 'M' && fNSD == 'N' && value == 0) {
                    if (fname == 'HostStatCount') return true;
                    if (fname == 'HostStatAreaNo') return true;
                    //console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push(fname + ' field cannot be NULL');
                    vFailed = true;
                    return false;
                }
            }
        }
    });
    if (vFailed == true) {
        return { "vError": vError, "vErrDescription": vErrDescription.join('<br/>') };
    } else { return { "vError": 0, "vErrDescription": "" }; }
};
function SubmitRecord(formArray) {//serialize data function
    var guid1 = guid().toUpperCase();
    var obsWrapper = {
        "header": {
            "ebmCID": guid1,
            "ebmMID": guid1,
            "ebmSID": "ESFA",
            "ebmTimestamp": new Date().toISOString()
        },
        "body": {
            "plantHealthObservation": ""
        }
    };
    obsWrapper.body.plantHealthObservation = formArray;
    return obsWrapper;
}
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
function BindAutoCompleteB(e) {
    var options = {
        data: taxaData.taxaBotany,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.hostweed').find("input.taxonIDB").val(selectedItemValue);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteE(e) {
    var options = {
        data: taxaData.taxaEntomology,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.entobox').find("input.taxonIDE").val(selectedItemValue);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteP(e) {
    var options = {
        data: taxaData.taxaPathology,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.pathbox').find("input.taxonIDP").val(selectedItemValue);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteET(e) {
    var options = {
        data: taxaData.taxaEntomology,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.entotarget').find("input.taxonIDET").val(selectedItemValue);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompletePT(e) {
    var options = {
        data: taxaData.taxaPathology,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.pathtarget').find("input.taxonIDPT").val(selectedItemValue);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteBS(e) {
    var options = {
        data: taxaData.taxaBotany,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.sample').find("input.taxonIDBS").val(selectedItemValue);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteES(e) {
    var options = {
        data: taxaData.taxaEntomology,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.sample').find("input.taxonIDES").val(selectedItemValue);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompletePS(e) {
    var options = {
        data: taxaData.taxaPathology,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.sample').find("input.taxonIDPS").val(selectedItemValue);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
$(document).on('click', '.qtyplus', function (e) {
    e.preventDefault();
    pStatisticType = $(this).parent().parent().find('select[name^=PlantStatisticType]').val();
    if (pStatisticType == 'C') {
        fieldName = $(this).parent().find('input.count').attr('name');
    } else { fieldName = $(this).parent().find('input.area').attr('name'); }
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    if (!isNaN(currentVal)) {
        $('input[name=' + fieldName + ']').text(currentVal + 1);
        $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        $('input[name=' + fieldName + ']').text(0);
        $('input[name=' + fieldName + ']').val(0);
    }
})
$(document).on('click', ".qtyminus", function (e) {
    e.preventDefault();
    pStatisticType = $(this).parent().parent().find('select[name^=PlantStatisticType]').val();
    if (pStatisticType == 'C') {
        fieldName = $(this).parent().find('input.count').attr('name');
    } else { fieldName = $(this).parent().find('input.area').attr('name'); }
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $('input[name=' + fieldName + ']').text(currentVal - 1);
        $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        $('input[name=' + fieldName + ']').text(0);
        $('input[name=' + fieldName + ']').val(0);
    }
})
$(document).on('click', "#addPlant", function () {
    var Idx = numPlants;
    var that1 = $(hostweed);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('select[name^="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name^="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name^="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    //that1.find("input[type='radio'][name='CountList']").attr('name', 'CountList-' + Idx);
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numPlants++;
    $('#numPlants').text(numPlants);
    BindAutoCompleteB(that1.find('.taxonTextB'));
})
$(document).on('click', "#addEntoHost", function () {
    var Idx = numEntoHosts;
    var that1 = $(entobox);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('select[name^="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name^="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name^="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('.entotarget input').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find('.entotarget select').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find('.entotarget textarea').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-host').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numEntoHosts++;
    numEntoTargets++;
    $('#numEntoHosts').text(numEntoHosts);
    BindAutoCompleteE(that1.find('.taxonTextE'));
    BindAutoCompleteET(that1.find('.taxonTextET'));
})
$(document).on('click', "[data-action=addEntoTarget]", function () {
    var Idx = numEntoTargets;
    var that = $(this).closest('.entotarget');
    var that1 = $(entotarget);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');;
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-target').text(Idx * 1);
    that1.insertAfter(that);
    numEntoTargets++;
})
$(document).on('click', "#addPathHost", function () {
    var Idx = numPathHosts;
    var that1 = $(pathbox);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('select[name^="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name^="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name^="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('.pathtarget input').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find('.pathtarget select').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find('.pathtarget textarea').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-host').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numPathHosts++;
    numPathTargets++;
    $('#numPathHosts').text(numPathHosts);
    BindAutoCompleteP(that1.find('.taxonTextP'));
    BindAutoCompletePT(that1.find('.taxonTextPT'));
})
$(document).on('click', "[data-action=addPathTarget]", function () {
    var Idx = numPathTargets;
    var that = $(this).closest('.pathtarget');
    var that1 = $(pathtarget);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-target').text(Idx * 1);
    that1.insertAfter(that);
    numPathTargets++;
})
$(document).on('click', "[data-action=removePlant]", function () {
    var x = $(this);
    if (numPlants > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Plant?',
            buttons: {
                Ok: function () {
                    x.closest('.hostweed').remove();
                    numPlants--;
                    $('#numPlants').text(numPlants);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
})
$(document).on('click', "[data-action=removeEntoHost]", function () {
    var x = $(this);
    if (numEntoHosts > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Host?',
            buttons: {
                Ok: function () {
                    x.closest('.entobox').remove();
                    numEntoHosts--;
                    $('#numEntoHosts').text(numEntoHosts);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
})
$(document).on('click', "[data-action=removeEntoTarget]", function () {
    var x = $(this);
    if (numEntoTargets > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Target?',
            buttons: {
                Ok: function () {
                    x.closest('.entotarget').remove();
                    numEntoTargets--;
                    //$('#numEntoHosts').text(numEntoTargets);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
})
$(document).on('click', "[data-action=removePathHost]", function () {
    var x = $(this);
    if (numPathHosts > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Host?',
            buttons: {
                Ok: function () {
                    x.closest('.pathbox').remove();
                    numPathHosts--;
                    $('#numEntoHosts').text(numPathHosts);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
})
$(document).on('click', "[data-action=removePathTarget]", function () {
    var x = $(this);
    if (numPathTargets > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Target?',
            buttons: {
                Ok: function () {
                    x.closest('.pathtarget').remove();
                    numPathTargets--;
                    //$('#numEntoHosts').text(numEntoTargets);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
})
$(document).on('click', "[data-action=expand]", function () {
    var x = $(this).closest('.collapsed');
    x.removeClass('collapsed');
    x.addClass('expanded');
    x.find('.collapse').removeClass('hide');
    x.find('.expand').addClass('hide');
    x.css("background-color", "#fffcec");
})
$(document).on('click', "[data-action=collapse]", function () {
    var x = $(this).closest('.expanded');
    x.addClass('collapsed');
    x.removeClass('expanded');
    x.find('.collapse').addClass('hide');
    x.find('.expand').removeClass('hide');
    x.css("background-color", "#fff");
})
$(document).on('click', '#addBotanySample', function (e) {
    if (bsamples > 0) {
        var sampleLat = $('div.sample').last().find('input[name^="Latitude"]').val();
        var sampleLng = $('div.sample').last().find('input[name^="Longitude"]').val();
        var sampleTime = $('div.sample').last().find('input[name^="CollectedDatetime"]').val();
        var samplePrelimID = $('div.sample').last().find('input[name^="PrelimTaxonText"]').val();
        var errString = "The following attributes cannot be NULL in the current Sample:<br/> Sample Latitude, Longitude, CollectedTime and PrelimTaxonText.";
        if (sampleLat == null || sampleLat == 0 || sampleLng == null || sampleLng == 0 || sampleTime == null || sampleTime == '' || samplePrelimID == null || samplePrelimID == '') {
            $.growl.warning({ title: "Error", message: errString, location: "bc", size: "large" });
            return;
        }
    }
    bsamples = bsamples + 1;
    var that = $(botSample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
    //that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID(resSettings.settings.device.samplePrefix));
    that.find('.badge').text(bsamples);
    $('#samples').append(that);
    $('#numSamples').text(bsamples);
    BindAutoCompleteBS(that.find('.taxonTextBS'));
})
$(document).on('click', '.removeBotSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                bsamples = bsamples - 1;
                x.parent().parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
})
$(document).on('click', '#addEntoSample', function (e) {
    if (esamples > 0) {
        var sampleLat = $('div.sample').last().find('input[name^="Latitude"]').val();
        var sampleLng = $('div.sample').last().find('input[name^="Longitude"]').val();
        var sampleTime = $('div.sample').last().find('input[name^="CollectedDatetime"]').val();
        var samplePrelimID = $('div.sample').last().find('input[name^="PrelimTaxonText"]').val();
        var errString = "The following attributes cannot be NULL in the current Sample:<br/> Sample Latitude, Longitude, CollectedTime and PrelimTaxonText.";
        if (sampleLat == null || sampleLat == 0 || sampleLng == null || sampleLng == 0 || sampleTime == null || sampleTime == '' || samplePrelimID == null || samplePrelimID == '') {
            $.growl.warning({ title: "Error", message: errString, location: "bc", size: "large" });
            return;
        }
    }
    esamples = esamples + 1;
    var that = $(entosample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name^="EntoCollMethodCode"]').find('option').remove().end().append($(eCollMethod));
    that.find('select[name^="EntoInfestedPctCode"]').find('option').remove().end().append($(percInfested));
    that.find('select[name^="EntoDamageLevelCode"]').find('option').remove().end().append($(damageLevel));
    that.find('select[name^="EntoPestLevelCode"]').find('option').remove().end().append($(pestLevel));
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID(resSettings.settings.device.samplePrefix));
    that.find('.badge').text(esamples);
    $('#samples').append(that);
    $('#numSamples').text(esamples);
    BindAutoCompleteES(that.find('.taxonTextES'));
})
$(document).on('click', '.removeEntoSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                esamples = esamples - 1;
                x.parent().parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
})
$(document).on('click', '#addPathSample', function (e) {
    if (psamples > 0) {
        var sampleLat = $('div.sample').last().find('input[name^="Latitude"]').val();
        var sampleLng = $('div.sample').last().find('input[name^="Longitude"]').val();
        var sampleTime = $('div.sample').last().find('input[name^="CollectedDatetime"]').val();
        var samplePrelimID = $('div.sample').last().find('input[name^="PrelimTaxonText"]').val();
        var errString = "The following attributes cannot be NULL in the current Sample:<br/> Sample Latitude, Longitude, CollectedTime and PrelimTaxonText.";
        if (sampleLat == null || sampleLat == 0 || sampleLng == null || sampleLng == 0 || sampleTime == null || sampleTime == '' || samplePrelimID == null || samplePrelimID == '') {
            $.growl.warning({ title: "Error", message: errString, location: "bc", size: "large" });
            return;
        }
    }
    psamples = psamples + 1;
    var that = $(pathsample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name^="PathIncidCode"]').find('option').remove().end().append($(incidence));
    that.find('select[name^="PathSevCode"]').find('option').remove().end().append($(severity));
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    //that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID(resSettings.settings.device.samplePrefix));
    that.find('.badge').text(psamples);
    $('#samples').append(that);
    $('#numSamples').text(psamples);
    BindAutoCompletePS(that.find('.taxonTextPS'));
})
$(document).on('click', '.removePathSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                psamples = psamples - 1;
                x.parent().parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
})
var btns = $(document).on('click', 'div.btn-group.glossary > .btn', function (e) {
    e.preventDefault();
    if (this.id === 'all') {
        $('#hostweeds > div').fadeIn(450);
        $(this).parent().parent().find('.badge').text(numPlants);
    } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#hostweeds > div').not($el).hide();
        $(this).parent().parent().find('.badge').text($el.length);
    }
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
})
$('input[type="checkbox"].minimal').on('ifClicked', function (event) {
    //alert(event.type + ' callback');
    event.preventDefault();
    $(this).val('Y');
})
$(document).on('ifChecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'AdditionalObserverTab') {
        $('.addlObserver').removeClass('hide');
    };
    if ($(this).attr('name').startsWith('AdditionalCollectorTab')) {
        $('.addlCollectors').removeClass('hide');
    };
    $(this).val('Y');
})
$(document).on('ifUnchecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'AdditionalObserverTab') {
        $('.addlObserver').addClass('hide');
    };
    if ($(this).attr('name').startsWith('AdditionalCollectorTab')) {
        $('.addlCollectors').addClass('hide');
    };
    $(this).val('N');
})
$(document).on('click', '.getCoords', function (e) {
    var xlat = $('#form1').find('input.obslat');
    var xlng = $('#form1').find('input.obslng');
    var xdat = $('#form1').find('input.obsdat');
    var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
    var siteID = $('#form1').find('select[name="SiteId_O_N"] option:selected').val();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (siteID < 99999 && checkMapBoundsBySite(position, siteID)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
            if (siteID == 99999 && checkMapBoundsByPos(position)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "bc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "bc", size: "large" });
    };
    e.preventDefault();
})
$(document).on('click', '.getPlantCoords', function (e) {
    var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
    var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
    var xdat = $(this).closest('.hostweed').find('input.hostweeddat');
    var xwkt = $(this).closest('.hostweed').find('input[name^="LocationPointWktClob"]');
    var siteID = $('#form1').find('select[name="SiteId_O_N"] option:selected').val();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (siteID < 99999 && checkMapBoundsBySite(position, siteID)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
            if (siteID == 99999 && checkMapBoundsByPos(position)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "bc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "bc", size: "large" });
    };
    e.preventDefault();
})
$(document).on('click', '.getEntoHostCoords', function (e) {
    var xlat = $(this).closest('.entobox').find('input.entolat');
    var xlng = $(this).closest('.entobox').find('input.entolng');
    var xdat = $(this).closest('.entobox').find('input.entodat');
    var xwkt = $(this).closest('.entobox').find('input[name^="LocationPointWktClob"]');
    var siteID = $('#form1').find('select[name="SiteId_O_N"] option:selected').val();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (siteID < 99999 && checkMapBoundsBySite(position, siteID)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
            if (siteID == 99999 && checkMapBoundsByPos(position)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "bc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "bc", size: "large" });
    };
    e.preventDefault();
})
$(document).on('click', '.getPathHostCoords', function (e) {
    var xlat = $(this).closest('.pathbox').find('input.pathlat');
    var xlng = $(this).closest('.pathbox').find('input.pathlng');
    var xdat = $(this).closest('.sample').find('input.pathdat');
    var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
    var siteID = $('#form1').find('select[name="SiteId_O_N"] option:selected').val();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (siteID < 99999 && checkMapBoundsBySite(position, siteID)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
            if (siteID == 99999 && checkMapBoundsByPos(position)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "bc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "bc", size: "large" });
    };
    e.preventDefault();
})
$(document).on('click', '.getSampleCoords', function (e) {
    var xlat = $(this).closest('.sample').find('input.samplelat');
    var xlng = $(this).closest('.sample').find('input.samplelng');
    var xalt = $(this).closest('.sample').find('input.samplealt');
    var xdat = $(this).closest('.sample').find('input.sampledat');
    var xwkt = $(this).closest('.sample').find('input[name^="SamplePointWktClob"]');
    var siteID = $('#form1').find('select[name="SiteId_O_N"] option:selected').val();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (siteID < 99999 && checkMapBoundsBySite(position, siteID)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xalt.val(position.coords.altitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
            if (siteID == 99999 && checkMapBoundsByPos(position)) {
                xlat.val(position.coords.latitude);
                xlng.val(position.coords.longitude);
                xalt.val(position.coords.altitude);
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "bc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "bc", size: "large" });
    };
    e.preventDefault();
})
$(document).on('click', 'img.pp', function () {
    var that = $(this);
    var ppname = that.attr("name");
    var inpname = that.attr("name").substr(1, that.attr("name").length - 1);
    if (!navigator.camera) {
        $.growl.warning({ title: "Error", message: "Camera API not supported!", location: "bc", size: "large" });
        return;
    }
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
        encodingType: 0,     // 0=JPG 1=PNG
        targetWidth: 640,
        targetHeight: 480,
        saveToPhotoAlbum: false
    };

    navigator.camera.getPicture(
        function onSuccess(imgURI) {
            that.attr("src", imgURI);
            $("#form1").find('input:hidden[name=' + inpname + ']').val(imgURI);
        },
        function onFail(error) {
            $.growl.warning({ title: "Error", message: error, location: "bc", size: "large" });
        },
        options);

    return false;
});
$(document).on('ifClicked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    event.preventDefault();
    if ($(this).data('validate') != 'N') {
        $('#form1').find("input[type='radio'][name^='" + $(this).attr('name') + "']").val($(this).val());
    }
})
$(document).on('change', 'input:radio', function (e) {
    e.preventDefault();
    if ($(this).is(":checked") && $(this).data('validate') != 'N') {
        $('#form1').find("input[type='radio'][name^='" + $(this).attr('name') + "']").val($(this).val());
    }
})
$(document).on('ifChecked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') == 'addlCollectors') {
        $('#Roles').modal();
    };
    if ($(this).attr('name') == 'otherSample') {
        $(this).parent('div').parent('div').find('input[type="text"]').removeClass('hide');
    };
    if ($(this).attr('name').startsWith('CountList') && $(this).val() === 'Count') {
        var that = $(this).parentsUntil('.hostweed').parent().find('div.countArea');
        that.find("input[type='number'][name^='HostStatAreaNo']").val(HostStatAreaNo);
        that.find("input[type='number'][name^='HostStatCount']").val(HostStatCount);
        that.find("select[name^='PlantStatisticType']").val('C');
        that.find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        that.find("input[type='number'][name^='HostStatCount']").removeClass('hide');
        that.find("input[type='number'][name^='HostStatCount']").val(0);
        that.find("input[type='number'][name^='HostStatCount']").text(0);
        that.removeClass('hide');
    };
    if ($(this).attr('name').startsWith('CountList') && $(this).val() === 'List') {
        var that = $(this).parentsUntil('.hostweed').parent().find('div.countArea');
        HostStatAreaNo = that.find("input[type='number'][name^='HostStatAreaNo']").val();
        HostStatCount = that.find("input[type='number'][name^='HostStatCount']").val();
        that.find("input[type='number'][name^='HostStatAreaNo']").val("0");
        that.find("input[type='number'][name^='HostStatCount']").val("0");
        that.addClass('hide');
    };
})
$(document).on('change', 'select[name^="PlantStatisticType"]', function () {
    var str = $(this).val();
    if (str == 'C') {
        $(this).parent().parent().find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        $(this).parent().parent().find("input[type='number'][name^='HostStatCount']").removeClass('hide');
    }
    if (str == 'A') {
        $(this).parent().parent().find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
        $(this).parent().parent().find("input[type='number'][name^='HostStatCount']").addClass('hide');
    }
})
$(document).on('click', '#SaveSettingsExit', function (e) {
    var v_appMode = $('#form3').find('#appMode').val();
    if (!v_appMode) {
        $.growl.warning({ title: "", message: "Provide a valid mode: PH!", location: "bc", size: "large" });
        return false;
    }
    /* Set AppMode */
    resSettings.settings.app.appMode = v_appMode;
    /* Clear active Flag on Mapsets */
    $.each(resSettings.settings.mapSets, function (i, v) {
        resSettings.settings.mapSets[i].activeFlag = 0;
    });
    /* Set active Mapset */
    var activeMapset = $("input[name='optMaps']:checked").data('id');
    if (activeMapset) { resSettings.settings.mapSets[activeMapset].activeFlag = 1; }
    /* Set Device Owner */
    resSettings.settings.device.ownerId = $('#form3').find('select[id="deviceOwner"]').val();
    resSettings.settings.device.ownerName = $('#form3').find('select[id="deviceOwner"]').text();
    resSettings.settings.device.samplePrefix = $('#form3').find('input[name="samplePrefix"]').val();
    resSettings.settings.device.sampleStartNumber = $('#form3').find('input[name="sampleStartNum"]').val();
    resSettings.settings.device.currentSampleNumber = $('#form3').find('input[name="sampleCurrNum"]').val();
    /* Save to DB */
    db.transaction(function (tx) {
        tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
            //alert("Row inserted.");
            //return e + pad(nextID.toString(), 4);
            initSettings();
            $('#modalSettings').modal('hide');
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while updating settings. " + err.message, location: "bc", size: "large" });
    });
})
$(document).on('click', 'a.downloadMaps', function (e) {
    var url = $('#form3').find("input[name='optMaps']:checked").data("url");
    var numfiles = $('#form3').find("input[name='optMaps']:checked").data("files");
    var mapset = $('#form3').find("input[name='optMaps']:checked").val();
    var filename;
    var filenum = 0;
    t0 = performance.now();
    $('#modalProgress').modal();
    $('#mb6 .progText').text("Download in progress ...");
    $('#mb6 .progTime').text(new Date().toString());
    getFileandExtract(url, mapset, 1, numfiles);
})
$(document).on('change', 'select[name="SiteId_O_N"]', function () {
    var that = $(this);
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#modalProgress').modal();
            $('#mb6 .progText').text("Refreshing site coordinates ...");
        }
    })
        .complete(function (e) {
            var str = that.val();
            if (str === 99999) {
                //alert('NewSite selected');
                var xlat = $('#form1').find('input.obslat');
                var xlng = $('#form1').find('input.obslng');
                var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
                if (xlat.val() !== "") { cLatitude = xlat.val(); }
                if (xlng.val() !== "") { cLongitude = xlng.val(); }
                if (xwkt.val() !== "") { cWkt = xwkt.val(); }
                xlat.val("");
                xlng.val("");
                xwkt.val("");
            }
            else {
                //alert('Existing site selected');
                var xlat = $('#form1').find('input.obslat');
                var xlng = $('#form1').find('input.obslng');
                var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
                if (cLatitude !== "") { xlat.val(cLatitude); }
                if (cLongitude !== "") { xlng.val(cLongitude); }
                if (cWkt !== "") { xwkt.val(cWkt); }
            }
        }).done(function () {
            $('#modalProgress').modal('hide');
            $('#mb6 .progText').text("");
        });
})
function getFileandExtract(url, mapset, i, n) {
    window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024, function (fs) {
        var xhr = new XMLHttpRequest();
        url2 = url + mapset + pad(i, 2) + ".zip";
        filename = mapset + pad(i, 2) + ".zip";
        //console.log(filename);
        xhr.open('GET', url2, true);
        xhr.responseType = 'blob';
        t0 = performance.now();
        xhr.onloadstart = function () {
            //$('#modalProgress').modal();
            t1 = performance.now();
            t3 = t3 + Math.round((t1 - t0));
            $('#mb6 .progText').text("File " + i + " out of " + n + ": Download in progress ...");
        }
        xhr.onloadend = function () {
            if (this.status === 200) {
                t1 = performance.now();
                t3 = t3 + Math.round((t1 - t0));
                $('#mb6 .progText').text("File " + i + " out of " + n + ": Download in progress ...");
                var blob = new Blob([this.response], { type: "octet/stream" });
                fs.root.getFile(filename, { create: true, exclusive: false }, function (fileEntry) {
                    writeFile(fileEntry, mapset, blob, i, n);
                    i++;
                    //if (i == 10) {
                    //    $('#modalProgress').modal('hide');
                    //    initSettings();
                    //    $.growl.notice({ title: "", message: "Maps downloaded in progress.", location: "bl", size: "medium", fixed: "true" });
                    //}
                    if (i > n) {
                        resSettings.settings.mapSets[ActiveMapSet].downloaded = 1;
                        resSettings.settings.mapSets[ActiveMapSet].lastDownloadDate = new Date().toString();
                        db.transaction(function (tx) {
                            tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
                                //alert("Row inserted.");
                                //return e + pad(nextID.toString(), 4);
                            });
                        }, function (err) {
                            $.growl({ title: "", message: "An error occured while updating mapsets. " + err.message, location: "bc", size: "large" });
                        });
                        $('#modalProgress').modal('hide');
                        $('#form3').find('label.mapNotes').eq(ActiveMapSet).text("Last downloaded on:" + new Date().toString());
                        initSettings();
                        $('#mb6 .progTime').text("");
                        $.growl({ title: "", message: "Maps downloaded successfully.", location: "bc", size: "large" });
                        return false;
                    } else {
                        setTimeout(getFileandExtract(url, mapset, i, n), 10000);
                    }
                }, function (e) {
                    $.growl({ title: "", message: "Failed file save: " + e.toString(), location: "bc", size: "large" });
                });
            }
        };
        xhr.send();
    });
}
function processZip2(zipSource, destination) {
    //var zip = cordova.file.cacheDirectory + zipSource;
    var filename = zipSource.substr(zipSource.lastIndexOf('/') + 1);
    //console.log(filename);
    var extracted = cordova.file.dataDirectory + destination;
    //console.log('unzipping ...');
    Zeep.unzip({
        from: zipSource,
        to: extracted
    }, function () {
        setTimeout(removefile(filename), 10000);
        //console.log('unzip success!');
    }, function (e) {
        //console.log('unzip error: ', e);
        $('#modalProgress').modal('hide');
        $.growl.error({ title: "", message: "Failed extracting zip file.", location: "bc", size: "large" });
    });
}
function removefile(filename) {
    //filename = mapset + pad(i, 2) + ".zip";
    window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024, function (fs) {
        fs.root.getFile(filename, { create: false }, function (fileEntry) {
            fileEntry.remove(function () {
                // The file has been removed succesfully
                //$.growl({ title: "", message: "Zip file is removed successfully.", location: "bc", size: "large" });
            }, function (error) {
                // Error deleting the file
                $.growl.error({ title: "", message: "Error removing zip file.", location: "bc", size: "large" });
            }, function () {
                // The file doesn't exist
                $.growl.notice({ title: "", message: "Zip file does not exist.", location: "bc", size: "large" });
            });
        });
    });
}
function writeFile(fileEntry, filename, dataObj, i, n) {
    fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwriteend = function () {
            //$('#mb6 .progText').text(fileEntry.toURL());
            //processZip("ms-appdata:///local/PNG.zip", cordova.file.dataDirectory);
            t1 = performance.now();
            t3 = t3 + Math.round((t1 - t0));
            $('#mb6 .progText').text("Extracting Zip file " + i + " out of " + n + ". This might take a while ...");
            $('.progress-bar').css('width', Math.round(i / n * 100) + '%').attr('aria-valuenow', Math.round(i / n * 100)).text(Math.round(i / n * 100) + '%');
            setTimeout(processZip2(fileEntry.toURL(), "maps/" + filename), 20000);
        };
        fileWriter.onerror = function (e) {
            $.growl.error({ title: "", message: "Failed file write: " + e.toString(), location: "bc", size: "large" });
        };
        fileWriter.write(dataObj);
    });
}
$(document).on('blur', 'input.samplelat', function (e) {
    if ($(this).val() !== "") {
        var xlat = $(this).closest('.sample').find('input.samplelat');
        var xlng = $(this).closest('.sample').find('input.samplelng');
        var xwkt = $(this).closest('.sample').find('input[name^="SamplePointWktClob"]');
        xwkt.val("POINT (" + xlng.val() + " " + xlat.val() + ")");
    }
});
$(document).on('blur', 'input.samplelng', function (e) {
    if ($(this).val() !== "") {
        var xlat = $(this).closest('.sample').find('input.samplelat');
        var xlng = $(this).closest('.sample').find('input.samplelng');
        var xwkt = $(this).closest('.sample').find('input[name^="SamplePointWktClob"]');
        xwkt.val("POINT (" + xlng.val() + " " + xlat.val() + ")");
    }
});
$(document).on('blur', 'input.entolat', function (e) {
    if ($(this).val() !== "") {
        var xlat = $(this).closest('.entobox').find('input.entolat');
        var xlng = $(this).closest('.entobox').find('input.entolng');
        var xwkt = $(this).closest('.entobox').find('input[name^="LocationPointWktClob"]');
        xwkt.val("POINT (" + xlng.val() + " " + xlat.val() + ")");
    }
});
$(document).on('blur', 'input.entolng', function (e) {
    if ($(this).val() !== "") {
        var xlat = $(this).closest('.entobox').find('input.entolat');
        var xlng = $(this).closest('.entobox').find('input.entolng');
        var xwkt = $(this).closest('.entobox').find('input[name^="LocationPointWktClob"]');
        xwkt.val("POINT (" + xlng.val() + " " + xlat.val() + ")");
    }
});
$(document).on('blur', 'input.pathlat', function (e) {
    if ($(this).val() !== "") {
        var xlat = $(this).closest('.pathbox').find('input.pathlat');
        var xlng = $(this).closest('.pathbox').find('input.pathlng');
        var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
        xwkt.val("POINT (" + xlng.val() + " " + xlat.val() + ")");
    }
});
$(document).on('blur', 'input.pathlng', function (e) {
    if ($(this).val() !== "") {
        var xlat = $(this).closest('.pathbox').find('input.pathlat');
        var xlng = $(this).closest('.pathbox').find('input.pathlng');
        var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
        xwkt.val("POINT (" + xlng.val() + " " + xlat.val() + ")");
    }
});
$(document).on('blur', 'input.hostweedlat', function (e) {
    if ($(this).val() !== "") {
        var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
        var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
        var xwkt = $(this).closest('.hostweed').find('input[name^="LocationPointWktClob"]');
        xwkt.val("POINT (" + xlng.val() + " " + xlat.val() + ")");
    }
});
$(document).on('blur', 'input.hostweedlng', function (e) {
    if ($(this).val() !== "") {
        var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
        var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
        var xwkt = $(this).closest('.hostweed').find('input[name^="LocationPointWktClob"]');
        xwkt.val("POINT (" + xlng.val() + " " + xlat.val() + ")");
    }
});