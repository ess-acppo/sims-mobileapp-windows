var bcs = '<div class="form-group col-md-3 col-sm-3 col-xs-12 ripple"><input type="radio" class="minimal" name="bodyConditionScore_M_N_0_2" value="0" data-code="0" data-validate="Y" data-name="Body Condition Score">&nbsp;<label class="bcstext"></label></div>';
var defSyndrome = '<div class="row col-md-12 col-sm-12 col-xs-12 dynarow defSyndromeX"><div class="form-group col-md-3 col-sm-3 col-xs-3 hide"><label>Code</label><input type="text" class="form-control" name="SyndromeCode_M_S" readonly value="" data-name="Syndrome Code"></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Syndrome Text</label><input type="text" class="form-control" name="SyndromeText_M_S" readonly value="" data-name="Syndrome Text"></div><div class="form-group col-md-3 col-sm-3 col-xs-6 ripple"><input type="radio" class="minimal" name="SyndromeFlag_M_S" data-code="Y" data-validate="Y" value="Y" data-name="Syndrome Yes/No Flag">&nbsp;<label>Yes</label></div><div class="form-group col-md-3 col-sm-3 col-xs-6 ripple"><input type="radio" class="minimal" name="SyndromeFlag_M_S" data-code="N" data-validate="Y" value="N" data-name="Syndrome Yes/No Flag">&nbsp;<label>No</label></div><div class="form-group col-md-12 col-sm-12 col-xs-12 defSyndComments hide"><label><span class="bold-red">*</span>Comments</label><input type="text" class="form-control" placeholder="Syndrome Comments" name="SyndromeComments_O_S" data-name="Syndrome Comments"></div></div>';
var syndrome = '<div class="row col-md-12 col-sm-12 col-xs-12 dynarow syndromeX"><div class="form-group col-md-2 col-sm-2 col-xs-2 hide"><label>Code</label><input type="text" class="form-control" name="XSyndromeCode_M_S" readonly value="" data-name="Syndrome Code"></div><div class="form-group col-md-10 col-sm-10 col-xs-10"><label>Syndrome Text</label><input type="text" class="form-control" name="XSyndromeText_M_S" readonly value="" data-name="Syndrome Text"></div><div class="form-group col-md-2 col-sm-2 col-xs-2"><a href="#" class="form-control btn btn-md btn-danger text-arrows removeSyndrome"><i class="fa fa-remove"></i></a></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label><span class="bold-red">*</span>Comments</label><input type="text" class="form-control" placeholder="Syndrome Comments" name="XSyndromeComments_O_S" data-name="Syndrome Comments"></div></div>';
var gSyndrome = '<div class="row col-md-12 col-sm-12 col-xs-12 dynarow syndromeY"><div class="form-group col-md-2 col-sm-2 col-xs-2 hide"><label>Code</label><input type="text" class="form-control" name="YSyndromeCode_M_S" readonly value="" data-name="Syndrome Code"></div><div class="form-group col-md-9 col-sm-9 col-xs-10"><label>Syndrome Text</label><input type="text" class="form-control" name="YSyndromeText_M_S" readonly value="" data-name="Syndrome Text"></div><div class="form-group col-md-3 col-sm-3 col-xs-2"><a href="#" class="form-control btn btn-md btn-danger text-arrows removeGSyndrome"><i class="fa fa-remove"></i></a></div><div class="form-group col-md-1 col-sm-1 col-xs-3"><label>Number</label><input type="number" class="form-control percentCal" placeholder="0" name="YSyndromesCount_M_N" data-name="Numbers of Animals with Syndromes" data-section="Observation"></div><div class="form-group col-md-1 col-sm-1 col-xs-3"><label>Percent</label><input type="number" class="form-control targetPcnt" placeholder="0" name="YSyndromesPercent_O_N" readonly data-name="Percentage of Animals with Syndromes" data-section="Observation"></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label><span class="bold-red">*</span>Comments</label><input type="text" class="form-control" placeholder="Syndrome Comments" name="YSyndromeComments_O_S" data-name="Syndrome Comments"></div></div>';
var speciesTaxonSyndromSamples;
var syndromes = 0;
var syndromesData;
var possibleSamples;
var sampleTypes;
var defFieldTests;
var defaultSpecies;
var fieldTestsData;
/* AH Initialized variables */
var species = '<div class="row col-md-12 dynarow"><div class="form-group col-xs-2"><input type="text" class="form-control speciesText"/></div><div class="form-group col-xs-2"><label>Taxon Name<span class="bold-red">*</span></label></div><div class="form-group col-xs-2"><input type="text" class="form-control taxonText" placeholder="Taxon Name" name="taxonName"></div><div class="form-group col-xs-3" ><label>Number in Group<span class="bold-red">*</span></label></div><div class="form-group col-xs-1"><input type="text" class="form-control" placeholder="#" name="Number"></div><div class="form-group col-xs-1"><button type="button" class="btn btn-danger btn-circle btn-xs pull-right removeSpecies"><i class="fa fa-times-circle fa-2x"></i></button></div></div>';
var fieldtest = '<div class="row col-md-12 col-sm-12 col-xs-12 fieldtest collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*</span>Fieldtest ID</label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeFieldTest"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control" placeholder="Field Test ID" readonly name="FieldTestID_M_N" /></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test Name</label><input type="text" class="form-control" placeholder="Field Test Name" name="FieldTestName_M_S" /></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test</label><select class="form-control fieldTest" name="FieldTests_M_S"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="InvalidFlag_M_S" class="minimal">&nbsp;<label>Invalid</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Diseases</label><div class="row col-md-12 col-sm-12 col-xs-12 diseases"></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test Comments</label><textarea class="form-control" rows="5" name="FieldTestComment_O_S" data-name="FieldTest-Additional Comments" data-section="AnimalFieldTestTab"></textarea></div></div></div>';
var preFieldtest = '<div class="row col-md-12 col-sm-12 col-xs-12 fieldtest collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*</span>Fieldtest ID</label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removePreFieldTest"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control" placeholder="Field Test ID" readonly name="PFieldTestID_M_N" /></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test Name</label><input type="text" class="form-control" placeholder="Field Test Name" name="PFieldTestName_M_S" /></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test</label><select class="form-control fieldTest" name="PFieldTests_M_S"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PInvalidFlag_M_S" class="minimal">&nbsp;<label>Invalid</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Diseases</label><div class="row col-md-12 col-sm-12 col-xs-12 diseases"></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test Comments</label><textarea class="form-control" rows="5" name="PFieldTestComment_O_S" data-name="FieldTest-Additional Comments" data-section="AnimalFieldTestTab"></textarea></div></div></div>';
var maggotSample = '<div class="row col-md-12 col-sm-12 col-xs-12 maggotSample collapsed "><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Maggot Sample FieldID</label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeMaggotSample"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="number" class="form-control nextid" placeholder="Sample Field ID" name="MSampleFieldLabelText_M_S_0_S" readonly data-name="Sample-Field Label" data-section="AnimalSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Sample Type</label><select class="form-control sampleType" name="MSampleType_M_S_0_S" data-name="Sample-Type" data-section="AnimalSampleTab"><option value="M" selected>Maggots</option></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 col-sm-12 col-xs-12 testTypes"><input type="checkbox" class="form-control minimal" name="MTestFor_M_S_0_8" value="Y" checked>&nbsp;<label>SWF Exclusion</label></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="5" name="MAdditionalComments_O_S_0_S" data-name="Sample-Additional Comments" data-section="AnimalSampleTab"></textarea></div></div></div>';
var animalSample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample FieldID </label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeAnimalSample"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="number" class="form-control" placeholder="Sample Field ID" name="SampleFieldLabelText_M_S" readonly data-name="Sample-Field Label" data-section="AnimalSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Sample Type</label><select class="form-control sampleType" name="SampleType_M_S" data-name="Sample-Type" data-section="AnimalSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 col-sm-12 col-xs-12 testTypes"></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="5" name="AdditionalComments_O_S" data-name="Sample-Additional Comments" data-section="AnimalSampleTab"></textarea></div></div></div>';
var preAnimalSample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample FieldID </label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removePreSample"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="number" class="form-control nextid" placeholder="Sample Field ID" name="PSampleFieldLabelText_M_S" readonly data-name="Sample-Field Label" data-section="AnimalSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Sample Type</label><select class="form-control sampleType" name="PSampleType_M_S" data-name="Sample-Type" data-section="AnimalSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 col-sm-12 col-xs-12 testTypes"></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="5" name="PAdditionalComments_O_S" data-name="Sample-Additional Comments" data-section="AnimalSampleTab"></textarea></div></div></div>';
var animalAttachment = '<div class="row col-md-12 col-sm-12 col-xs-12 AnimalAttachment pl-0 pr-0 collapsed"><div class="form-group col-md-2 col-sm-2 col-xs-2"><img class="pp pull-right" src="images/plant.png" name="iAnimalAttachment_M_S"></div><div class="form-group col-md-7 col-sm-8 col-xs-8"><input type="text" class="form-control" name="AnimalAttachmentD_M_S" value=""><textarea class="form-control hide" name="AnimalAttachment_M_S" rows="5" cols="5"></textarea></div><div class="form-group col-md-2 col-sm-1 col-xs-1"><i class="fa fa-remove text-info fa-2x removeAnimalAttachment" style="cursor:pointer;"></i></div></div>';
var samples = 0;
var fieldTests = 0;
var AHRefCodes;
var ActivityDataAH;
var commonNames;
var bodyConditionScores;

var hidWidth;
var scrollBarWidths = 40;
/* AH Initialized variables */

function syncActivityDataAH() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": ActivityAddressAH,
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
        ActivityDataAH = data;
        //siteData = data.activities[0].sites;
        programId = data.activities[0].programId;
        defaultSpecies = data.activities[0].species;
        lastSurvActValue = data.activities[0].activityId;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM activitydataAH", [], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting ActivityData from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO activitydataAH (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'activity', JSON.stringify(ActivityDataAH)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE activitydataAH SET settingsval = ? WHERE id = ?", [JSON.stringify(ActivityDataAH), 1], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching Activity Data. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    });
}
function loadActivityDataAH() {
    defaultSpecies = ActivityDataAH.activities[0].species;
    $("#SurvActivityIdAH").find('option').remove().end().append($('<option value="0">- select -</option>'));
    $.each(ActivityDataAH.activities, function (key, val) {
        if (val.programId === downerTeam) {
            var option = $('<option />');
            option.attr('value', val.activityId).text(val.activityName);
            $("#SurvActivityIdAH").append(option);
        }
    });
    //$("#SiteIdAH").find('option').remove().end().append($('<option value="0">- select -</option>'));
    //$.each(siteData, function (key, val) {
    //    var option = $('<option />');
    //    option.attr('value', val.id).text(val.name);
    //    $("#form1").find('select[id="SiteIdAH"]').append(option);
    //});
    //$("#SiteIdAH").append($('<option value="99999">New Site</option>'));
}
function syncAHRefCodes() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": refCodesAddressAH,
        "method": "GET",
        "beforeSend": function () {
            //$.growl.notice({ title: "", message: "Syncing reference codes ...", location: "bc", size: "small" });
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(settings).done(function (data) {
        //alert(JSON.stringify(response));
        AHRefCodes = data;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM ahrefcodes", [], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting AHRefCodes from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO ahrefcodes (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'refcodes', JSON.stringify(AHRefCodes)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating AHRefCodes to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE ahrefcodes SET settingsval = ? WHERE id = ?", [JSON.stringify(AHRefCodes), 1], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating AHRefCodes to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching AH Reference Codes. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    });
}
function syncspeciesTaxonSyndromSamples() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": speciesTaxonSyndromSamplesAddress,
        "method": "GET",
        "beforeSend": function () {
            //$.growl.notice({ title: "", message: "Syncing reference codes ...", location: "bc", size: "small" });
        },
        "headers": {
            "authorization": authCode,
            "cache-control": "no-cache"
        }
    };
    $.ajax(settings).done(function (data) {
        //alert(JSON.stringify(response));
        speciesTaxonSyndromSamples = data;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM ahrefcodes WHERE id = ?", [2], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting AHRefCodes2 from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO ahrefcodes (id, settingstext, settingsval) VALUES (?,?,?)", [2, 'refcodes', JSON.stringify(speciesTaxonSyndromSamples)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating AHRefCodes to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE ahrefcodes SET settingsval = ? WHERE id = ?", [JSON.stringify(speciesTaxonSyndromSamples), 2], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating AHRefCodes2 to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching AH Reference2 Codes. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    });
}
function loadAHRefCodes() {
    $.each(AHRefCodes.AnimalHealthReferenceCodes.BodyConditionScore, function (key, val) {
        var v_bcs = $(bcs);
        v_bcs.find('input[type="radio"][name^="bodyConditionScore_M_N"]').val(val.code);
        v_bcs.find('input[type="radio"][name^="bodyConditionScore_M_N"]').attr("data-code", val.code);
        v_bcs.find('.bcstext').text(val.desc);
        $("#form1").find(".body_condition_score").append(v_bcs);
        v_bcs.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
    });
    syndromesData = AHRefCodes.AnimalHealthReferenceCodes.Syndrome;
    $("#form1").find('#lstSyndromes').find('option').remove().end();
    $.each(AHRefCodes.AnimalHealthReferenceCodes.Syndrome, function (key, val) {
        var option = $('<option />');
        option.attr('value', val.code).text(val.desc);
        $("#form1").find('#lstSyndromes').append(option);
    });
}
function refreshActivityDataAH(str) {
    var arr = ActivityDataAH.activities.filter(function (el) {
        return (el.activityId === Number(str));
    });
    if (arr && arr.length > 0) {
        //siteData = arr[0].sites;
        programId = arr[0].programId;
        defaultSpecies = arr[0].species;
        lastSurvActValue = arr[0].activityId;

        $("#commonName").find('option').remove().end().append('<option value="NONE">- select -</option>');
        $.each(speciesTaxonSyndromSamples.species, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.speciesCode).text(val.speciesName);
            $("#commonName").append(option);
        });

        var options = "option[value='NONE']";
        $.each(defaultSpecies, function (key, val) {
            options = options + ",option[value='" + val.speciesCode + "']"; 
        });
        $("#commonName :not(" + options + ")").remove();
        //lastSiteValue = 0;
        //db.transaction(function (tx) {
        //    tx.executeSql("SELECT * FROM staffdataAH WHERE settingstext = ?", [programId + 'staff'], function (tx, res) {
        //        //This is not the first load
        //        if (res.rows && res.rows.length > 0) {
        //            //alert(JSON.stringify(res.rows.item(0).settingsval));
        //            staffDataS = JSON.parse(res.rows.item(0).settingsval);
        //        }
        //        else {
        //            $.growl.error({ title: "", message: "No staff Data available for this Activity.", location: "tc", size: "large", fixed: "true" });
        //        }
        //    });
        //}, function (err) {
        //    $.growl.error({ title: "", message: "An error occured while loading staff Data. " + err.message, location: "tc", size: "large", fixed: "true" });
        //});
    }
    //$("#SiteIdAH").find('option').remove().end().append($('<option value="0">- select -</option>'));
    //$.each(siteData, function (key, val) {
    //    var option = $('<option />');
    //    option.attr('value', val.id).text(val.name);
    //    $("#SiteIdAH").append(option);
    //});
    //$("#SiteIdAH").append($('<option value="99999">New Site</option>'));
}
$(document).on('change', 'select[id="commonName"]', function () {
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#mb6 .progText').text("Loading ...");
            $('#mb6 .progress').addClass('hide');
            $('#mb6 .fa-clock-o').addClass('hide');
            $('#modalProgress').modal();
            t0 = performance.now();
        }
    }).complete(function (e) {
        var str = $("#commonName option:selected").val();
        if (str !== 'NONE') {
            //Filter data from speciesTaxonSyndromSamples
            var arr = jQuery.grep(speciesTaxonSyndromSamples.species, function (n, i) {
                return (n.speciesCode === str);
            });
            //Load Taxa for selected species
            if (arr[0].taxa.length > 1) {
                $("#form1").find('#taxon').find('option').remove().end().append('<option value="NONE">- select -</option>');
            }
            else {
                $("#form1").find('#taxon').find('option').remove().end();
            }
            $.each(arr[0].taxa, function (key, val) {
                var option = $('<option />');
                option.attr('value', val.id).text(val.name);
                $("#form1").find('#taxon').append(option);
            });
            //Load default syndromes for selected species
            $('.defSyndromeX').remove();
            for (var x = 0; x < arr[0].requiredSyndromes.length; x++) {
                var idx = Number(arr[0].requiredSyndromes[x]);
                var cidx = arr[0].requiredSyndromes[x];
                syndromes = syndromes + 1;
                var that = $(defSyndrome);
                that.find('input[name^="SyndromeText_M_S"]').val(syndromesData[idx - 1].desc);
                that.find('input[name^="SyndromeCode_M_S"]').val(syndromesData[idx - 1].code);
                that.find('input[name^="SyndromeText_M_S"]').attr("name", "SyndromeText_M_S_" + syndromes + "_2");
                that.find("input[name^='SyndromeCode_M_S']").attr("name", "SyndromeCode_M_S_" + syndromes + "_2");
                that.find("input[name^='SyndromeFlag_M_S']").attr("name", "SyndromeFlag_M_S_" + syndromes + "_2");
                that.find("input[name^='SyndromeComments_O_S']").attr("name", "SyndromeComments_O_S_" + syndromes + "_2");
                that.find("input[name^='EndofSyndrome_O_S']").attr("name", "EndofSyndrome_O_S_" + syndromes + "_2");
                $('#defSyndromes').append(that);
                that.find("input[type='checkbox']").iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
                that.find("input[type='radio']").iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
                $('#lstSyndromes option[value="' + cidx + '"]').remove();
            }
            //Prepare sample types for selected species for later load 
            possibleSamples = arr[0].possibleSamples;
            sampleTypes = '<option value="NONE">- select -</option>';
            $.each(arr[0].possibleSamples, function (key, val) {
                if (val.sampleTypeCode === 'M') return true;
                var option = '<option';
                option = option + ' value="' + val.sampleTypeCode + '">';
                option = option + val.sampleTypeName + "</option>";
                sampleTypes = sampleTypes + option;
            });
            //fetch defaults
            var def = jQuery.grep(defaultSpecies, function (n, i) {
                return (n.speciesCode === str);
            });
            //Load default samples to the dropdownlist
            $('.sample').remove(); //Clear all Samples
            if (def && def.length > 0) {
                $.each(def[0].collectSamples, function (key, val) { //For each default Sample
                    samples = samples + 1;
                    var that2 = $(preAnimalSample);
                    that2.find('select[name="PSampleType_M_S"]').find('option').remove().end().append($(sampleTypes));
                    that2.find("select[name='PSampleType_M_S']").val(val.sampleTypeCode);
                    that2.find("select[name='PSampleType_M_S'] :not(option[value='" + val.sampleTypeCode + "'])").remove();
                    that2.find('.badge').text(samples);
                    that2.find("input[name='PSampleFieldLabelText_M_S']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
                    that2.find('input').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                    });
                    that2.find('img').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                    });
                    that2.find('select').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                    });
                    that2.find('textarea').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                    });
                    //Load default pathogens in the sample dropdownlist
                    var divTestTypes = that2.find(".testTypes");
                    var count = 0;
                    var arr1 = jQuery.grep(possibleSamples, function (n, i) {
                        return (n.sampleTypeCode === val.sampleTypeCode);
                    });
                    $.each(arr1[0].testFors, function (key2, val2) {
                        count++;
                        var option = '<div class="form-group col-md-6 col-sm-6 col-xs-6"><input type="checkbox" class="minimal" data-name="Preselected Sample - Test Type" name="PTestFor_M_S_' + samples + '_' + val2.testForCode + '" value="' + val2.testForCode + '">&nbsp;<label>' + val2.testForName + '</label></div>';
                        divTestTypes.append($(option));
                    });
                    //Check the default pathogens
                    $.each(val.testFors, function (key3, val3) {
                        divTestTypes.find('input[type="checkbox"][name="PTestFor_M_S_' + samples + '_' + val3 + '"].minimal').iCheck('check');
                        divTestTypes.find('input[type="checkbox"][name="PTestFor_M_S_' + samples + '_' + val3 + '"].minimal').val("Y");
                    });
                    divTestTypes.find("input[type='checkbox'].minimal:not([value='Y'])").val("N");
                    that2.addClass('preSelectedSample');
                    //that2.addClass('hide');
                    that2.find("input[type='checkbox']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    that2.find("input[type='radio']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    //$('#addPreSelectedSample').removeClass('hide');
                    $('#samples').append(that2);
                });
            //$('.fieldtest').remove(); //Clear all Field Tests
            //Load default fieldtests
            //$.each(def[0].fieldTests, function (key, val) { //For each default Field Test
            //    fieldTests = fieldTests + 1;
            //    var that3 = $(preFieldtest);
            //    that3.find('select[name="PFieldTests_M_S"]').find('option').remove().end().append($(defFieldTests)).val(val.fieldTestCde);
            //    //that3.find('select[name="FieldTests_M_S"]:not([value^="' + val.fieldTestCde + '"])').remove();
            //    that3.find("input[name='PInvalidFlag_M_S']").val("N");
            //    that.find('.badge').text(fieldTests);
            //    that3.find('input').each(function () {
            //        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
            //    });
            //    that3.find('img').each(function () {
            //        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
            //    });
            //    that3.find('select').each(function () {
            //        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
            //    });
            //    that3.find('textarea').each(function () {
            //        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
            //    });
            //    var selectFT = that3.find('.diseases');
            //    var diseases = 0;
            //    selectFT.empty();
            //    $.each(val.diseases, function (key2, val2) {
            //        diseases = diseases + 1;
            //        var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val2[0].diseaseName + '</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="PFieldTestResult_' + fieldTests + '_FT_' + val2[0].diseaseCde + '" data-code="Positive" data-validate="Y" value="Positive">&nbsp;<label>Positive</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="PFieldTestResult_' + fieldTests + '_FT_' + val2[0].diseaseCde + '" data-code="Negative" data-validate="Y" value="Negative">&nbsp;<label>Negative</label></div>';
            //        selectFT.append($(disease));
            //    });
            //    that3.find("input[type='checkbox']").iCheck({
            //        checkboxClass: 'icheckbox_square-blue',
            //        radioClass: 'iradio_square-blue'
            //    });
            //    that3.find("input[type='radio']").iCheck({
            //        checkboxClass: 'icheckbox_square-blue',
            //        radioClass: 'iradio_square-blue'
            //    });
            //    that3.addClass('preSelectedFieldTest');
            //    that3.addClass('hide');
            //    $('#addPreSelectedFieldTest').removeClass('hide');
            //    $('#fieldtests').append(that3);               
            //});
            }
        }
    }).done(function () {
        $('#modalProgress').modal('hide');
        $('#mb6 .progText').text("");
        t1 = performance.now();
        $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
    });
});
$(document).on('change', 'select.sampleType', function () {
    var that = this;
    var str = $(that).val();
    var nxtTF = $(this).closest('.sample').find('.testTypes');
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            t0 = performance.now();
            $('.overlay').removeClass('hide');
            $('.modal-body').addClass('hide');
            $('.modal-footer').addClass('hide');
        }
    }).complete(function (e) {
        if (str !== 'NONE') {
            var arr = jQuery.grep(possibleSamples, function (n, i) {
                return (n.sampleTypeCode === str);
            });
            nxtTF.empty();
            var count = 0;
            $.each(arr[0].testFors, function (key, val) {
                count++;
                //Raj! Change the fieldnames as per sample# here
                var option = '<div class="form-group col-md-6 col-sm-6 col-xs-6"><input type="checkbox" class="minimal" data-name="Sample - Test Type" name="TestFor_M_S_' + samples + '_' + val.testForCode + '" value="' + val.testForCode + '">&nbsp;<label>' + val.testForName + '</label></div>';
                nxtTF.append($(option));
            });
            nxtTF.find("input[type='checkbox']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            nxtTF.find("input[type='radio']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
        }
    }).done(function () {
        $('.overlay').addClass('hide');
        $('.modal-body').removeClass('hide');
        $('.modal-footer').removeClass('hide');
        t1 = performance.now();
        $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
    });
});
function loadPathogens(e, f) {
    var nxtTF = $('.sample').eq(f - 1).find('.testTypes');
    if (e !== 'NONE') {
        var arr = jQuery.grep(possibleSamples, function (n, i) {
            return (n.sampleTypeCode === e);
        });
        nxtTF.empty();
        var count = 0;
        $.each(arr[0].testFors, function (key, val) {
            count++;
            //Raj! Change the fieldnames as per sample# here
            var option = '<div class="form-group col-md-6 col-sm-6 col-xs-6"><input type="checkbox" class="minimal" data-name="Sample - Test Type" name="TestFor_M_S_' + samples + '_' + val.testForCode + '" value="' + val.testForCode + '">&nbsp;<label>' + val.testForName + '</label></div>';
            nxtTF.append($(option));
        });
        nxtTF.find("input[type='checkbox']").iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
        nxtTF.find("input[type='radio']").iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
    }
}
$(document).on('change', 'select.fieldTest', function () {
    var that = this;
    var nxtD = $(this).closest('.fieldtest').find('.diseases');
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            t0 = performance.now();
            $('.overlay').removeClass('hide');
            $('.modal-body').addClass('hide');
            $('.modal-footer').addClass('hide');
        }
    }).complete(function (e) {
        var str = $(that).val();
        var diseases = 0;
        if (str !== 'NONE') {
            nxtD.empty();
            var arr = jQuery.grep(fieldTestsData, function (n, i) {
                return (n.fieldTestCde === str);
            });
            $.each(arr[0].diseases.disease, function (key, val) {
                diseases = diseases + 1;
                var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val.diseaseName + '</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" data-name="Field Test - Result" name="FieldTestResult_' + fieldTests + '_FT_' + val.diseaseCde + '" data-code="Positive" data-validate="Y" value="Positive">&nbsp;<label>Positive</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" data-name="Field Test - Result" name="FieldTestResult_' + fieldTests + '_FT_' + val.diseaseCde + '" data-code="Negative" data-validate="Y" value="Negative">&nbsp;<label>Negative</label></div>';
                nxtD.append($(disease));
                $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
            });
        }
    }).done(function () {
        $('.overlay').addClass('hide');
        $('.modal-body').removeClass('hide');
        $('.modal-footer').removeClass('hide');
        t1 = performance.now();
        $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
    });
});
function loadDiseases(e, f) {
    var nxtD = $('.fieldtest').eq(f - 1).find('.diseases');
    var diseases = 0;
    if (e !== 'NONE') {
        nxtD.empty();
        var arr = jQuery.grep(fieldTestsData, function (n, i) {
            return (n.fieldTestCde === e);
        });
        $.each(arr[0].diseases.disease, function (key, val) {
            diseases = diseases + 1;
            var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val.diseaseName + '</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" data-name="Field Test - Result" name="FieldTestResult_' + fieldTests + '_FT_' + val.diseaseCde + '" data-code="Positive" data-validate="Y" value="Positive">&nbsp;<label>Positive</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" data-name="Field Test - Result" name="FieldTestResult_' + fieldTests + '_FT_' + val.diseaseCde + '" data-code="Negative" data-validate="Y" value="Negative">&nbsp;<label>Negative</label></div>';
            nxtD.append($(disease));
            nxtD.find("input[type='checkbox']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            nxtD.find("input[type='radio']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
        });
    }
}
function loadCommonNameData(d, e) {
    syndromes = 0;
    samples = 0;
    fieldTests = 0;
    var str = d;
    if (str !== 'NONE') {
        $('#form1').find("#commonName").val(str);
        //Filter data from speciesTaxonSyndromSamples
        var arr = jQuery.grep(speciesTaxonSyndromSamples.species, function (n, i) {
            return (n.speciesCode === str);
        });

        //Load Taxa for selected species
        if (arr[0].taxa.length > 1) {
            $("#form1").find('#taxon').find('option').remove().end().append('<option value="NONE">- select -</option>');
        }
        else {
            $("#form1").find('#taxon').find('option').remove().end();
        }
        //console.time('Taxa');
        $.each(arr[0].taxa, function (key, val) {
            var option;
            if (val.id === e) {
                option = $('<option />');
            } else { option = $('<option selected />'); }
            option.attr('value', val.id).text(val.name);
            $("#form1").find('#taxon').append(option);
        });
        //console.timeEnd('Taxa');
        //Load default syndromes for selected species
        //console.time('Syndromes 1');
        $('.defSyndromeX').remove();
        //console.timeEnd('Syndromes 1');
        //console.time('Syndromes 2');
        for (var x = 0; x < arr[0].requiredSyndromes.length; x++) {
            var idx = Number(arr[0].requiredSyndromes[x]);
            var cidx = arr[0].requiredSyndromes[x];
            syndromes = syndromes + 1;
            var that = $(defSyndrome);
            that.find('input[name^="SyndromeText_M_S"]').val(syndromesData[idx - 1].desc);
            that.find('input[name^="SyndromeCode_M_S"]').val(syndromesData[idx - 1].code);
            that.find('input[name^="SyndromeText_M_S"]').attr("name", "SyndromeText_M_S_" + syndromes + "_2");
            that.find("input[name^='SyndromeCode_M_S']").attr("name", "SyndromeCode_M_S_" + syndromes + "_2");
            that.find("input[name^='SyndromeFlag_M_S']").attr("name", "SyndromeFlag_M_S_" + syndromes + "_2");
            that.find("input[name^='SyndromeComments_O_S']").attr("name", "SyndromeComments_O_S_" + syndromes + "_2");
            that.find("input[name^='EndofSyndrome_O_S']").attr("name", "EndofSyndrome_O_S_" + syndromes + "_2");
            $('#defSyndromes').append(that);
            that.find("input[type='checkbox']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            that.find("input[type='radio']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            $('#lstSyndromes option[value="' + cidx + '"]').remove();
        };
        //console.timeEnd('Syndromes 2');
        //Prepare sample types for selected species for later load 
        //console.time('Species');
        possibleSamples = arr[0].possibleSamples;
        sampleTypes = '<option value="NONE">- select -</option>';
        $.each(arr[0].possibleSamples, function (key, val) {
            if (val.sampleTypeCode === 'M') return true;
            var option = '<option';
            option = option + ' value="' + val.sampleTypeCode + '">';
            option = option + val.sampleTypeName + "</option>";
            sampleTypes = sampleTypes + option;
        });
        //console.timeEnd('Species');
        //fetch defaults
        var def = jQuery.grep(defaultSpecies, function (n, i) {
            return (n.speciesCode === str);
        });
        //Load default samples to the dropdownlist
        //console.time('Samples');
        $('.sample').remove(); //Clear all Samples
        if (def && def.length > 0) {
            $.each(def[0].collectSamples, function (key, val) { //For each default Sample
                samples = samples + 1;
                var that2 = $(preAnimalSample);
                that2.find('select[name="PSampleType_M_S"]').find('option').remove().end().append($(sampleTypes));
                that2.find("select[name='PSampleType_M_S']").val(val.sampleTypeCode);
                that2.find("select[name='PSampleType_M_S'] :not(option[value='" + val.sampleTypeCode + "'])").remove();
                that2.find('.badge').text(samples);
                that2.find("input[name='PSampleFieldLabelText_M_S']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
                that2.find('input').each(function () {
                    $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                });
                that2.find('img').each(function () {
                    $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                });
                that2.find('select').each(function () {
                    $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                });
                that2.find('textarea').each(function () {
                    $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                });
                //Load default pathogens in the sample dropdownlist
                var divTestTypes = that2.find(".testTypes");
                var count = 0;
                var arr1 = jQuery.grep(possibleSamples, function (n, i) {
                    return (n.sampleTypeCode === val.sampleTypeCode);
                });
                $.each(arr1[0].testFors, function (key2, val2) {
                    count++;
                    var option = '<div class="form-group col-md-6 col-sm-6 col-xs-6"><input type="checkbox" class="minimal" data-name="Sample - Test Type" name="PTestFor_M_S_' + samples + '_' + val2.testForCode + '">&nbsp;<label>' + val2.testForName + '</label></div>';
                    divTestTypes.append($(option));
                });
                //Check the default pathogens
                $.each(val.testFors, function (key3, val3) {
                    divTestTypes.find('input[type="checkbox"][name="PTestFor_M_S_' + samples + '_' + val3 + '"].minimal').iCheck('check');
                    divTestTypes.find('input[type="checkbox"][name="PTestFor_M_S_' + samples + '_' + val3 + '"].minimal').val("Y");
                });
                divTestTypes.find("input[type='checkbox'].minimal:not([value='Y'])").val("N");
                that2.addClass('preSelectedSample');
                //that2.addClass('hide');
                that2.find("input[type='checkbox']").iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
                that2.find("input[type='radio']").iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
                //$('#addPreSelectedSample').removeClass('hide');
                $('#samples').append(that2);
            });
        //$('.fieldtest').remove(); //Clear all Field Tests
        //Load default fieldtests
        //$.each(def[0].fieldTests, function (key, val) { //For each default Field Test
        //    fieldTests = fieldTests + 1;
        //    var that3 = $(preFieldtest);
        //    that3.find('select[name="PFieldTests_M_S"]').find('option').remove().end().append($(defFieldTests)).val(val.fieldTestCde);
        //    //that3.find('select[name="PFieldTests_M_S"]:not([value^="' + val.fieldTestCde + '"])').remove();
        //    that3.find("input[name='PInvalidFlag_M_S']").val("N");
        //    that.find('.badge').text(fieldTests);
        //    that3.find('input').each(function () {
        //        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
        //    });
        //    that3.find('img').each(function () {
        //        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
        //    });
        //    that3.find('select').each(function () {
        //        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
        //    });
        //    that3.find('textarea').each(function () {
        //        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
        //    });
        //    var selectFT = that3.find('.diseases');
        //    var diseases = 0;
        //    selectFT.empty();
        //    $.each(val.diseases, function (key2, val2) {
        //        diseases = diseases + 1;
        //        var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val2[0].diseaseName + '</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="PFieldTestResult_' + fieldTests + '_FT_' + val2[0].diseaseCde + '" data-code="Positive" data-validate="Y" value="Positive">&nbsp;<label>Positive</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="PFieldTestResult_' + fieldTests + '_FT_' + val2[0].diseaseCde + '" data-code="Negative" data-validate="Y" value="Negative">&nbsp;<label>Negative</label></div>';
        //        selectFT.append($(disease));
        //    });
        //    that3.find("input[type='checkbox']").iCheck({
        //        checkboxClass: 'icheckbox_square-blue',
        //        radioClass: 'iradio_square-blue'
        //    });
        //    that3.find("input[type='radio']").iCheck({
        //        checkboxClass: 'icheckbox_square-blue',
        //        radioClass: 'iradio_square-blue'
        //    });
        //    that3.addClass('preSelectedFieldTest');
        //    that3.addClass('hide');
        //    $('#addPreSelectedFieldTest').removeClass('hide');
        //    $('#fieldtests').append(that3);
        //});    
        }   
    }
}
$(document).on('ifChecked', '.defSyndromeX input[type="radio"].minimal', function (event) {
    if ($(this).val() === 'Y') {
        $(this).parent().parent().parent().find('div.defSyndComments').removeClass('hide');
    }
    if ($(this).val() === 'N') {
        $(this).parent().parent().parent().find('div.defSyndComments').find('input[type=text]').val('');
        $(this).parent().parent().parent().find('div.defSyndComments').addClass('hide');
    }
});
function getNextAnimalID(e) {
    //Read from DB
    var nextID = resSettings.settings.device.currentAnimalNumber * 1 + 1;
    resSettings.settings.device.currentAnimalNumber = nextID;
    db.transaction(function (tx) {
        tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
            //$("#form1").find('input[type="text"].nextid').last().val(e + pad(nextID.toString(), 6));
            $("#form1").find('input[type="text"].nextid').last().val(nextID.toString());
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while incrementing ID. " + err.message, location: "tc", size: "large" });
    });
}
$(document).on('click', '#addSyndrome', function (e) {
    syndromes = syndromes + 1;
    var that = $(syndrome);
    that.find('input[name^="XSyndromeText_M_S"]').val($('#lstSyndromes option:selected').text());
    that.find('input[name^="XSyndromeCode_M_S"]').val($('#lstSyndromes option:selected').val());
    that.find('input[name^="XSyndromeText_M_S"]').attr("name", "XSyndromeText_M_S_" + syndromes + "_2");
    that.find("input[name^='XSyndromeCode_M_S']").attr("name", "XSyndromeCode_M_S_" + syndromes + "_2");
    that.find("input[name^='XSyndromeComments_O_S']").attr("name", "XSyndromeComments_O_S_" + syndromes + "_2");
    that.find("input[name^='XEndofSyndrome_O_S']").attr("name", "XEndofSyndrome_O_S_" + syndromes + "_2");
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    $('#addedSyndromes').append(that);
    $('#lstSyndromes option:selected').remove();
});
$(document).on('click', '#addGSyndrome', function (e) {
    syndromes = syndromes + 1;
    var that = $(gSyndrome);
    that.find('input[name^="YSyndromeText_M_S"]').val($('#lstSyndromes option:selected').text());
    that.find('input[name^="YSyndromeCode_M_S"]').val($('#lstSyndromes option:selected').val());
    that.find('input[name^="YSyndromeText_M_S"]').attr("name", "YSyndromeText_M_S_" + syndromes + "_2");
    that.find("input[name^='YSyndromeCode_M_S']").attr("name", "YSyndromeCode_M_S_" + syndromes + "_2");
    that.find("input[name^='YSyndromesCount_M_N']").attr("name", "YSyndromesCount_M_N_" + syndromes + "_2");
    that.find("input[name^='YSyndromesPercent_O_N']").attr("name", "YSyndromesPercent_O_N_" + syndromes + "_2");
    that.find("input[name^='YSyndromeComments_O_S']").attr("name", "YSyndromeComments_O_S_" + syndromes + "_2");
    that.find("input[name^='YEndofSyndrome_O_S']").attr("name", "YEndofSyndrome_O_S_" + syndromes + "_2");
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    $('#addedSyndromes').append(that);
    $('#lstSyndromes option:selected').remove();
});
$(document).on('click', '.removeSyndrome', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Syndrome?',
        content: 'Do you want to remove this Syndrome?',
        buttons: {
            Ok: function () {
                syndromes = syndromes - 1;
                var option = $('<option />');
                option.attr('value', x.closest('.syndromeX').find('input[name^="XSyndromeCode_M_S"]').val()).text(x.closest('.syndromeX').find('input[name^="XSyndromeText_M_S"]').val());
                $('#lstSyndromes').append(option);
                x.closest('.syndromeX').remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '.removeGSyndrome', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Syndrome?',
        content: 'Do you want to remove this Syndrome?',
        buttons: {
            Ok: function () {
                syndromes = syndromes - 1;
                var option = $('<option />');
                option.attr('value', x.closest('.syndromeY').find('input[name^="YSyndromeCode_M_S"]').val()).text(x.closest('.syndromeY').find('input[name^="YSyndromeText_M_S"]').val());
                $('#lstSyndromes').append(option);
                x.closest('.syndromeY').remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#noSyndromes', function (e) {
    $('.defSyndromeX').find('input[type=radio][name^="SyndromeFlag_M_S"][value="N"]').iCheck('check');
    //$('.defSyndromeX').find(':radio').val("N");
});
$(document).on('click', "#addAnimal", function (e) {
    e.preventDefault();
    $('.nav-tabs > .active').prev('li').prev('li').prev('li').prev('li').find('a').trigger('click');
    $('#tab_0').find("input[type='text'][name='animalNumber']").val($('#tab_0').find("input[type='text'][name='animalNumber']").val() * 1 + 1);
});
$(document).on('click', '#addSpecies', function (e) {
    var that = $(species);
    that.find('.speciesText').val($('#lstSpecies option:selected').text());
    $('.speciesFound').append(that);
    $('#lstSpecies option:selected').remove();
    //BindAutoComplete();
});
$(document).on('click', '.removeSpecies', function (e) {
    $('#lstSpecies').append('<option>' + $(this).parent().parent().find('.speciesText').text() + '</option>');
    $(this).closest('.row').remove();
});
$(document).on('click', '#addFieldTest', function (e) {
    fieldTests = fieldTests + 1;
    var that = $(fieldtest);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[name='FieldTestID_M_N']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
    that.find('select[name="FieldTests_M_S"]').find('option').remove().end().append($(defFieldTests));
    that.find("input[name='InvalidFlag_M_S']").val("N");
    that.find('.badge').text(fieldTests);
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
    });
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
    });
    $('#fieldtests').append(that);
});
$(document).on('click', '#addPreSelectedFieldTest', function (e) {
    fieldTests = fieldTests + 1;
    $('#addPreSelectedFieldTest').addClass('hide');
    $('.preSelectedFieldTest').removeClass('hide');
    $('.preSelectedFieldTest').find("input[name^='PFieldTestID_M_N']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
});
$(document).on('click', '.removeFieldTest', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Fieldtest?',
        content: 'Do you want to remove this Fieldtest?',
        buttons: {
            Ok: function () {
                fieldTests = fieldTests - 1;
                x.closest('.fieldtest').remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '.removePreFieldTest', function (e) {
    $.confirm({
        title: 'Remove Fieldtest?',
        content: 'Do you want to remove this Fieldtest?',
        buttons: {
            Ok: function () {
                fieldTests = fieldTests - 1;
                $('.preSelectedFieldTest').addClass('hide');
                $('#addPreSelectedFieldTest').removeClass('hide');
                $('.preSelectedFieldTest').find("input[name='FieldTestID_M_N']").val("");
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#addAnimalSample', function (e) {
    samples = samples + 1;
    //var nextID = getNextID('SAMPLE');
    var that = $(animalSample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
    });
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
    });
    that.find('.badge').text(samples);
    that.find('select[name^="SampleType_M_S"]').find('option').remove().end().append($(sampleTypes));
    that.find("input[name^='SampleFieldLabelText']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
    $('#samples').append(that);
    $('#numSamples').text(samples);
});
$(document).on('click', '#addPreSelectedSample', function (e) {
    samples = samples + 1;
    $('#addPreSelectedSample').addClass('hide');
    $('.preSelectedSample').removeClass('hide');
    $('.preSelectedSample').find("input[name^='PSampleFieldLabelText']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
    $('#numSamples').text(samples);
});
$(document).on('click', '.removeAnimalSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                samples = samples - 1;
                x.closest('.sample').remove();
                $('#numSamples').text(samples);
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '.removePreSample', function (e) {
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                samples = samples - 1;
                $('.preSelectedSample').find("input[name^='SampleFieldLabelText']").val("");
                $('.preSelectedSample').addClass('hide');
                $('#addPreSelectedSample').removeClass('hide');
                $('#numSamples').text(samples);
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#addMaggotSample', function (e) {
    samples = samples + 1;
    var that = $(maggotSample);
    that.find("input[name='MSampleFieldLabelText_M_S_0_S']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    $('#maggotSamples').append(that);
    $(this).addClass('hide');
    $('#numSamples').text(samples);
});
$(document).on('click', '.removeMaggotSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                samples = samples - 1;
                $('.addMaggotSamples').next('.row').removeClass('hide');
                x.parent().parent().remove();
                $('.maggotSamplePlus').removeClass('hide');
                $('#numSamples').text(samples);
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#btnNAD', function (e) {
    $(':radio[name^=INFlag_M_S]').eq(1).iCheck('check');
    $(':radio[name^=HNFlag_M_S]').eq(1).iCheck('check');
    $(':radio[name^=THFlag_M_S]').eq(1).iCheck('check');
    $(':radio[name^=ABFlag_M_S]').eq(1).iCheck('check');
    $(':radio[name^=MUFlag_M_S]').eq(1).iCheck('check');
});
$(document).on('blur', 'input[type=text][name="age"]', function (e) {
    var age = $(this).val();
    var yr = age.split(":")[0] * 1;
    var mn = age.split(":")[1] * 1;//enter months
    if (isNaN(mn) || isNaN(yr)) { $.growl({ title: "", message: "Invalid Month!" + err.message, location: "bc", size: "large" }); return; }
    if (mn < 1 || mn > 11) { $.growl({ title: "", message: "Invalid Month!" + err.message, location: "bc", size: "large" }); return; }
    var dy = 0;
    var today = new Date();
    var dobD = today.getDate();
    var dobM = 12 - mn + 1;
    var dobY = today.getFullYear() - yr - 1;
    if (dobD < 10) { dobD = '0' + dobD; }
    if (dobM < 10) { dobM = '0' + dobM; }
    $('input[type=text][name="dob"]').val(dobD.toString() + "/" + dobM.toString() + "/" + dobY.toString());
});
$(document).on('click', '#bsInfo', function () {
    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/assets/visguide.pdf', function (fileEntry) {
        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                    {
                        error: function (e) {
                            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                        },
                        success: function () {
                            console.log('file opened successfully');
                        }
                    }
                );
            });
        });
    });
});
function loadModalAH(pagename) {
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#modalProgress').modal();
            $('#mb6 .progText').text("Loading ...");
            $('#mb6 .progress').addClass('hide');
            $('#mb6 .fa-clock-o').addClass('hide');
            $('#mb').empty();
            $('#mt').empty();
            $(document).find('script[id="pageScript"]').remove();
            $('#mb').load(pagename + '.html');
            t0 = performance.now();
            samples = 0;
            fieldTests = 0;
            numAttachments = 0;
            syndromes = 0;
        }
    }).complete(function (e) {
        $('#form1').find("input[type=text],input[type=date],input[type=number], textarea").val("");
        $('#form1').find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
        $('#form1').find("input[type='radio'].minimal").iCheck('uncheck');
        setTimeout(function (e) {
            if (pagename === 'mo_sngObservation') {
                loadAHRefCodes();
                loadActivityDataAH();
                if (curIdx > -1) {
                    var curActivity = results.observations[curPos].activityId_M_N;
                    refreshActivityDataAH(curActivity);
                }
                loadstaffData();
            }
            if (pagename === 'mo_grpObservation') {
                loadAHRefCodes();
                loadActivityDataAH();
                if (curIdx > -1) {
                    var curActivity = results.observations[curPos].activityId_M_N;
                    refreshActivityDataAH(curActivity);
                }
                loadstaffData();
            }
        }, 200);
        setTimeout(function (e) {
            if (curIdx > -1) {
                var data = results.observations[curPos];
                if (data.commonName !== '0') {
                    loadCommonNameData(data.commonName_M_S, data.taxon_M_S);
                }
                //console.log(JSON.stringify(data));
                $.each(data, function (key, value) {
                    if (key.startsWith('ObservationWhereWktClob') && value !== "") {
                        var wkt = new Wkt.Wkt();
                        wkt.read(value);
                        wkt.toObject();
                        $('#form1').find("input[name^='Longitude']").val(wkt.toJson().coordinates[0]);
                        $('#form1').find("input[name^='Latitude']").val(wkt.toJson().coordinates[1]);
                    }
                    if (key.startsWith("AnimalAttachmentD_M_S") && value !== "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $("#addAnimalAttachment").trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("AnimalAttachment_M_S") && value !== "") {
                        $('#form1').find("img[name^='i" + key + "']").attr("src", "data:image/jpeg;base64," + value);
                        $('#form1').find("textarea[name^='" + key + "']").val(value);
                    }
                    if (key.startsWith("XSyndromeCode_M_S") && value !== "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#lstSyndromes').val(value);
                                $('#addSyndrome').trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("YSyndromeCode_M_S") && value !== "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#lstSyndromes').val(value);
                                $('#addGSyndrome').trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("SampleFieldLabelText_M_S") && value > 0) {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#addAnimalSample').trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("SampleType_M_S") && value !== "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#form1').find("select[name='" + key + "']").val(value);
                                loadPathogens(value, samples);
                            }
                        }).complete(function (e) {
                            $('#form1').find("select[name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("FieldTestID") && value > 0) {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#addFieldTest').trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("FieldTests") && value !== "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#form1').find("select[name='" + key + "']").val(value);
                                loadDiseases(value, fieldTests);
                            }
                        }).complete(function (e) {
                            $('#form1').find("select[name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("externalObserverFlag_O_S") && value === "Y") {
                        $('#form1').find("input[name='externalObserver_O_S']").removeClass('hide');
                        $('#form1').find("input[type='checkbox'][name^='externalObserverFlag_O_S']").iCheck('check');
                    }
                    if (key.startsWith("externalObserverFlag_O_S") && value === "N") {
                        $('#form1').find("input[name='externalObserver_O_S']").addClass('hide');
                        $('#form1').find("input[type='checkbox'][name^='externalObserverFlag_O_S']").iCheck('uncheck');
                    }
                    if (key === "gender_M_S" && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key === "ageClass_M_S" && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("obsProximity_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("optSyndromes_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        if (value === 'Y') {
                            $('.syndromes').removeClass('hide');
                        }
                        if (value === 'N') {
                            $('.syndromes').addClass('hide');
                        }
                    }
                    if (key.startsWith("bodyConditionScore_M_N") && value > 0) {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value=" + value + "]").iCheck('check');
                    }
                    if (key.startsWith("woundsPresentG_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        if (value === 'Y') {
                            $('.woundedAnimals').removeClass('hide');
                        }
                        if (value === 'N') {
                            $('.woundedAnimals').addClass('hide');
                        }
                    }
                    if (key.startsWith("woundsPresent_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        if (value === 'Y') {
                            $('.addMaggotSamples').removeClass('hide');
                        }
                        if (value === 'N') {
                            $('.addMaggotSamples').addClass('hide');
                        }
                    }
                    if (key.startsWith("maggotsPresent_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        if (value === 'Y') {
                            $('#addMaggotSample').removeClass('hide');
                            $('#maggotSamples').removeClass('hide');
                        }
                        if (value === 'N') {
                            $('#addMaggotSample').addClass('hide');
                            $('#maggotSamples').addClass('hide');
                        }
                    }
                    if (key.startsWith("SyndromeFlag_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("postMortemConducted_M_S") && value !== "") {
                        if (value === "Y") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='Y']").iCheck('check');
                            $('#tabPM').removeClass('hide');
                            reAdjust();
                        }
                        if (value === "N") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='N']").iCheck('check');
                            $('#tabPM').addClass('hide');
                            reAdjust();
                        }
                    }
                    if (key.startsWith("INFlag_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("HNFlag_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("THFlag_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("ABFlag_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("MUFlag_M_S") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("PFieldTestResult") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith("FieldTestResult") && value !== "") {
                        $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    }
                    if (key.startsWith('PSampleFieldLabelText') && value > 0) {
                        $('#addPreSelectedSample').addClass('hide');
                        $('.preSelectedSample').removeClass('hide');
                    }
                    if (key.startsWith('MSampleFieldLabelText') && value > 0) {
                        $('#addMaggotSample').trigger("click");
                    }
                    if (key.startsWith('PFieldTestID') && value > 0) {
                        $('#addPreSelectedFieldTest').addClass('hide');
                        $('.preSelectedFieldTest').removeClass('hide');
                    }
                    $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='number'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='datetime-local'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name='" + key + "'][value='Y']").iCheck('check');
                    $('#form1').find("input[type='checkbox'][name='" + key + "'][value='N']").iCheck('uncheck');
                    //$('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    $('#form1').find("select[name='" + key + "']").val(value);
                    $('#form1').find("textarea[name='" + key + "']").val(value);
                });
                $('#form1').find("input[type='number'][name^='id']").val(curIdx);
                $('#form1').find("input[type='number'][name='status_M_N']").val(curIdx);
                $('.nextid').text('');
            }
            else {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();
                var hh = today.getHours();
                var mi = today.getMinutes();
                var ss = today.getSeconds();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }
                if (hh < 10) {
                    hh = '0' + hh;
                }
                if (mi < 10) {
                    mi = '0' + mi;
                }
                if (ss < 10) {
                    ss = '0' + ss;
                }
                today = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString() + 'T' + hh.toString() + ':' + mi.toString() + ':' + ss.toString();
                $('#form1').find('select[id="ObservationStaffId"]').find('option').remove().end().append($(staffData));
                if (curIdx === -1) {
                    $('#form1').find("input[name^='Latitude']").val(curLat.toFixed(5));
                    $('#form1').find("input[name^='Longitude']").val(curLng.toFixed(5));
                    $('#form1').find("input[type='text'][name^='ObservationWhereWktClob']").val(curWkt);
                    //getAltitude();
                }
                $('#form1').find("input[name^='dateTime_M_D']").val(today);
                if (results.observations.length === 0) {
                    $('#form1').find("input[type='number'][name^='id']").val(1);
                } else { $('#form1').find("input[type='number'][name^='id']").val(results.observations[results.observations.length - 1].id_M_N + 1); }
                $('#form1').find("input[type='number'][name^='submittedBy_M_N']").val(resSettings.settings.device.ownerId);
                $('#form1').find("select[name^='ObservationStaffId']").val(resSettings.settings.device.ownerId);
                $('#form1').find("input[type='number'][name='status_M_N']").val("0");
                $('#form1').find("input[type='text'][name='animalNumber_M_S']").val(getNextAnimalID(resSettings.settings.device.animalPrefix));
                $('#form1').find("input[type='text'][name='AnimalDisciplineCode_M_S']").val(curDiscipline);
                $('.nextid').text('');
            }
        }, 300);
    }).done(function () {
        reAdjust();
        $('#modalProgress').modal('hide');
        t1 = performance.now();
        $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>&nbsp;" + Math.round((t1 - t0)) + " ms");
    });
}
$(document).on('ifChecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name').startsWith('externalObserverFlag_O_S')) {
        $('input[name^="externalObserver_O_S"').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('InvalidFlag_M_S')) {
        $(this).closest('.row').find('.diseases').empty();
        $(this).closest('.row').find('select').val("NONE");
    }
    $(this).val('Y');
});
$(document).on('ifUnchecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name').startsWith('externalObserverFlag_O_S')) {
        $('input[name^="externalObserver_O_S"').addClass('hide');
    }
    $(this).val('N');
});
$(document).on('ifChecked', 'input[type="radio"].minimal', function (event) {
    //Group Observation Stuff
    if ($(this).attr('name').startsWith('optSyndromes_M_S') && $(this).val() === 'Y') {
        $('.syndromes').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('optSyndromes_M_S') && $(this).val() === 'N') {
        $('.syndromes').addClass('hide');
    }
    if ($(this).attr('name').startsWith('woundsPresentG_M_S') && $(this).val() === 'Y') {
        $('.woundedAnimals').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('woundsPresentG_M_S') && $(this).val() === 'N') {
        $('.woundedAnimals').addClass('hide');
    }
    //Group Observation Stuff
    if ($(this).attr('name').startsWith('woundsPresent_M_S') && $(this).val() === 'Y') {
        $('.addMaggotSamples').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('woundsPresent_M_S') && $(this).val() === 'N') {
        $('.addMaggotSamples').addClass('hide');
    }
    if ($(this).attr('name').startsWith('postMortemConducted_M_S') && $(this).val() === 'Y') {
        $('#tabPM').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('postMortemConducted_M_S') && $(this).val() === 'N') {
        $('#tabPM').addClass('hide');
    }
    //if ($(this).attr('name') == 'optINT' && $(this).val() == 'Yes') {
    //    $('#divINT').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optINT' && $(this).val() == 'No') {
    //    $('#divINT').addClass('hide');
    //};
    //if ($(this).attr('name') == 'optNEC' && $(this).val() == 'Yes') {
    //    $('#divNEC').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optNEC' && $(this).val() == 'No') {
    //    $('#divNEC').addClass('hide');
    //};
    //if ($(this).attr('name') == 'optTHO' && $(this).val() == 'Yes') {
    //    $('#divTHO').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optTHO' && $(this).val() == 'No') {
    //    $('#divTHO').addClass('hide');
    //};
    //if ($(this).attr('name') == 'optABD' && $(this).val() == 'Yes') {
    //    $('#divABD').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optABD' && $(this).val() == 'No') {
    //    $('#divABD').addClass('hide');
    //};
    //if ($(this).attr('name') == 'optMUS' && $(this).val() == 'Yes') {
    //    $('#divMUS').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optMUS' && $(this).val() == 'No') {
    //    $('#divMUS').addClass('hide');
    //};
    if ($(this).attr('name').startsWith('maggotsPresent_M_S') && $(this).val() === 'Y') {
        $('#addMaggotSample').removeClass('hide');
        $('#maggotSamples').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('maggotsPresent_M_S') && $(this).val() === 'N') {
        $('#addMaggotSample').addClass('hide');
        $('#maggotSamples').addClass('hide');
    }
});
$(document).on('focus', "#SurvActivityIdAH", function (e) {
    lastSurvActValue = $(this).val();
})
    .on('change', '#SurvActivityIdAH', function (e) {
        var that = $(this);
        var str = that.val();
        if (that.val() === "NONE") return;
        refreshActivityDataAH(str);
    });
$(document).on('click', '.getAHCoords', function (e) {
    var xlat = $('#form1').find('input.obslat');
    var xlng = $('#form1').find('input.obslng');
    var xdat = $('#form1').find('select.obsdat');
    var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude.toFixed(5));
            xlng.val(position.coords.longitude.toFixed(5));
            xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
            xdat.val("WGS84");
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "tc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "tc", size: "large" });
    }
    e.preventDefault();
});
$(document).on('click', "#addAnimalAttachment", function () {
    var Idx = numAttachments;
    var that1 = $(animalAttachment);
    //that1.find('input[type=hidden]').each(function () {
    //    $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    //});
    that1.find('input[type=text]').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx + '_A');
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_A');
    });
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_A');
    });
    that1.find('img').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx + '_A');
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_A');
    });
    $('#attachments').append(that1);
    numAttachments++;
    $('#numAttachments').text(numAttachments);
});
$(document).on('click', ".removeAnimalAttachment", function () {
    var x = $(this);
    if (numAttachments > 0) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this attachment?',
            buttons: {
                Ok: function () {
                    x.closest('.AnimalAttachment').remove();
                    numAttachments--;
                    $('#numAttachments').text(numAttachments);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});
function objectifyAHFormforSave(formArray) {
    var observation = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            var fname = formArray[i]['name'].split("_")[0];
            var fMOC = formArray[i]['name'].split("_")[1];
            var fNSD = formArray[i]['name'].split("_")[2];
            var fnum = formArray[i]['name'].split("_")[3];
            var ftype = formArray[i]['name'].split("_")[4];
            if ($("[name='" + formArray[i]['name'] + "']").is(':radio')) {
                if (fNSD === 'N') {
                    observation[formArray[i]['name']] = Number($("[name='" + formArray[i]['name'] + "']:checked").val());
                }
                else {
                    observation[formArray[i]['name']] = $("[name='" + formArray[i]['name'] + "']:checked").val();
                }
            }
            else {
                if (fNSD === 'N') {
                    observation[formArray[i]['name']] = Number(formArray[i]['value']);
                }
                else {
                    observation[formArray[i]['name']] = formArray[i]['value'];
                }
            }
        }
    }
    return observation;
}
function packageAHFormforSubmit(data) {
    var modData = JSON.parse(JSON.stringify(data));
    var feralAnimalObservations = { "activityId": "", "submittedBy": "", "feralAnimalObservation": [] };
    var animalGroupObservations = { "animalGroupObservation": [] };
    var observation = { "samples": { "sample": [] }, "attachments": { "attachment": [] } };
    var locationDatum = { "srsName": "", "wkt": "" };
    var animalCondition = {
        "bodyConditionScore": 0,
        "wound": {
            "woundsPresent": "",
            "maggotsPresent": ""
        },
        "syndrome": [],
        "additionalObservations": ""
    };
    var ageClassCountChoice = [];
    var genderCountChoice = [];
    var woundCountChoice = {
        "woundsPresent": "",
        "estimatedCount": 0
    };
    var syndromeCountChoice = [];
    var postMortem = {
        "postMortemConducted": "",
        "postMortemBodySystems": []
    };
    var sample = { "id": 0, "fieldId": "", "typeCde": "", "comment": "", "sampleTests": { "sampleTest": [] }, "attachments": { "attachment": [] } };
    var attachment = { "id": 0, "sequenceNum": 0, "type": "", "name": "", "description": "", "content": "" };
    var syndrome = { "id": "", "present": "", "comment": "" };
    var scc = { "syndrome": {}, "syndromeCount": 0 };
    var PMBS = { "postMortemBodySystem": [{ "bodySystemCde": "", "abnormalDetection": "", "grossFindings": "" }] };
    var extObsrvrFlag = 0;
    var pSampleFlag = 0;
    var sampleCount = 0;
    var attachmentCnt = 0;
    var syndromeCnt = 0;
    var discipline = "";
    $.each(modData, function (index, value) {
        if (isNaN(index)) {
            var fname = index.split("_")[0];
            var fMOC = index.split("_")[1];
            var fNSD = index.split("_")[2];
            var fnum = index.split("_")[3];
            var ftype = index.split("_")[4];

            if (fname === 'AnimalDisciplineCode') { discipline = value; return true; }
            if (fname === 'activityId' && discipline === "SF") { feralAnimalObservations.activityId = value; return true; }
            if (fname === 'activityId' && discipline === "G") { observation['activityId'] = value; return true; }
            if (fname === 'submittedBy' && discipline === "SF") { feralAnimalObservations.submittedBy = { "id": value.toString() }; return true; }
            if (fname === 'submittedBy' && discipline === "G") { observation['submittedBy'] = { "id": value.toString() }; return true; }

            if (fname === 'Latitude') { return true; }
            if (fname === 'Longitude') { return true; }

            if (fname === 'animalNumber') { observation['animalNumber'] = value; return true; }
            if (fname === 'commonName') { observation['commonName'] = value; return true; }
            if (fname === 'taxon') { observation['taxon'] = value; return true; }
            if (fname === 'gender') { observation['gender'] = value; return true; }
            if (fname === 'ageClass') { observation['ageClass'] = value; return true; }
            if (fname === 'dateTime') { observation['dateTime'] = value; return true; }
            if (fname === 'ObservationStaffId') { observation['observer'] = { "id": value.toString() }; return true; }

            /* group animal stuff */
            if (fname === 'managementType') { observation['managementType'] = value; return true; }
            if (fname === 'totalNumber') { observation['totalNumber'] = value; return true; }
            if (fname === 'obsProximity') { observation['obsProximity'] = value; return true; }
            if (fname === 'optSyndromes') { return true; }

            if (fname === 'adultNumber') {
                var accc = { "ageClass": "", "estimatedCount": 0 };
                accc.ageClass = "A";
                accc.estimatedCount = value;
                ageClassCountChoice.push(accc);
                return true;
            }
            if (fname === 'adultPercent') { return true; }

            if (fname === 'juvNumber') {
                var accc = { "ageClass": "", "estimatedCount": 0 };
                accc.ageClass = "J";
                accc.estimatedCount = value;
                ageClassCountChoice.push(accc);
                return true;
            }
            if (fname === 'juvPercent') { return true; }

            if (fname === 'aunkNumber') {
                var accc = { "ageClass": "", "estimatedCount": 0 };
                accc.ageClass = "U";
                accc.estimatedCount = value;
                ageClassCountChoice.push(accc);
                observation['ageClassCountChoice'] = ageClassCountChoice;
                return true;
            }
            if (fname === 'aunkPercent') { return true; }

            if (fname === 'maleNumber') {
                var gcc = { "gender": "", "estimatedCount": 0 };
                gcc.ageClass = "M";
                gcc.estimatedCount = value;
                genderCountChoice.push(gcc);
                return true;
            }
            if (fname === 'malePercent') { return true; }

            if (fname === 'femaleNumber') {
                var gcc = { "gender": "", "estimatedCount": 0 };
                gcc.ageClass = "F";
                gcc.estimatedCount = value;
                genderCountChoice.push(gcc);
                return true;
            }
            if (fname === 'femalePercent') { return true; }

            if (fname === 'gunkNumber') {
                var gcc = { "gender": "", "estimatedCount": 0 };
                gcc.ageClass = "U";
                gcc.estimatedCount = value;
                genderCountChoice.push(gcc);
                observation['genderCountChoice'] = genderCountChoice;
                return true;
            }
            if (fname === 'gunkpercent') { return true; }

            if (fname === 'woundsPresentG') { woundCountChoice.woundsPresent = value; return true; }
            if (fname === 'woundsCount') {
                woundCountChoice.estimatedCount = value;
                observation['woundCountChoice'] = woundCountChoice;
                return true;
            }
            if (fname === 'woundspercent') { return true; }
            /* group animal stuff */

            if (fname === 'externalObserverFlag' && value === 'Y') {
                extObsrvrFlag = 1;
                return true;
            }
            if (fname === 'externalObserver' && value !== '' && extObsrvrFlag === 1) {
                observation['externalObserver'] = value;
                return true;
            }
            if (fname === 'ObservWhereGpsDatumId') { locationDatum.srsName = value; return true; }
            if (fname === 'ObservationWhereWktClob') {
                locationDatum.wkt = value;
                observation['locationDatum'] = locationDatum;
                return true;
            }
            if (fname === 'bodyConditionScore') {
                animalCondition.bodyConditionScore = value;
                return true;
            }
            if (fname === 'woundsPresent') {
                animalCondition.wound.woundsPresent = value;
                return true;
            }
            if (fname === 'maggotsPresent') {
                animalCondition.wound.maggotsPresent = value;
                return true;
            }
            if (fname === 'Syndromes') { return true; }
            if (fname === 'SyndromeCode' || fname === 'XSyndromeCode' || fname === 'YSyndromeCode') {
                syndrome = { "id": "", "present": "", "comment": "" };
                syndromeCnt++;
                syndrome['id'] = value;
                //syndrome['name'] = value;
                if (fname === 'XSyndromeCode') { syndrome['present'] = "Y"; }
                if (fname === 'YSyndromeCode') { syndrome['present'] = "Y"; }
                return true;
            }
            if (fname === 'SyndromeText' || fname === 'XSyndromeText' || fname === 'YSyndromeText') {
                //syndrome['name'] = value;
                return true;
            }
            if (fname === 'SyndromeFlag') {
                syndrome['present'] = value;
                return true;
            }
            if (fname === 'YSyndromesCount') {
                scc = { "syndrome": {}, "syndromeCount": Number(value) };
                return true;
            }
            if (fname === 'SyndromeComments' || fname === 'XSyndromeComments' || fname === 'YSyndromeComments') {
                syndrome['comment'] = value;
                if (discipline === 'SF') { animalCondition.syndrome.push(syndrome); }
                if (discipline === 'G') {
                    scc['syndrome'] = syndrome;
                    syndromeCountChoice.push(scc);
                }
                return true;
            }
            if (fname === 'additionalObservations') {
                if (discipline === 'SF') {
                    animalCondition.additionalObservations = value;
                    observation['animalCondition'] = animalCondition;
                }
                if (discipline === 'G') {
                    observation['additionalObservations'] = value;
                    syndromeCountChoice.syndromeCount = syndromeCnt;
                    observation['syndromeCountChoice'] = syndromeCountChoice;
                }
                return true;
            }
            if (fname === 'postMortemConducted') {
                postMortem.postMortemConducted = value;
                return true;
            }
            if (fname.startsWith('BodySystemCode')) {
                PMBS = { "postMortemBodySystem": [{ "bodySystemCde": "", "abnormalDetection": "", "grossFindings": "" }] };
                PMBS.postMortemBodySystem[0]['bodySystemCde'] = value;
                return true;
            }
            if (fname === 'INFlag') {
                PMBS.postMortemBodySystem[0]['abnormalDetection'] = value;
                return true;
            }
            if (fname === 'INGrossFindings') {
                PMBS.postMortemBodySystem[0]['grossFindings'] = value;
                postMortem.postMortemBodySystems.push(PMBS);
                return true;
            }
            if (fname === 'HNFlag') {
                PMBS.postMortemBodySystem[0]['abnormalDetection'] = value;
                return true;
            }
            if (fname === 'HNFindings') {
                PMBS.postMortemBodySystem[0]['grossFindings'] = value;
                postMortem.postMortemBodySystems.push(PMBS);
                return true;
            }
            if (fname === 'THFlag') {
                PMBS.postMortemBodySystem[0]['abnormalDetection'] = value;
                return true;
            }
            if (fname === 'THGrossFindings') {
                PMBS.postMortemBodySystem[0]['grossFindings'] = value;
                postMortem.postMortemBodySystems.push(PMBS);
                return true;
            }
            if (fname === 'ABFlag') {
                PMBS.postMortemBodySystem[0]['abnormalDetection'] = value;
                return true;
            }
            if (fname === 'ABGrossFindings') {
                PMBS.postMortemBodySystem[0]['grossFindings'] = value;
                postMortem.postMortemBodySystems.push(PMBS);
                return true;
            }
            if (fname === 'MUFlag') {
                PMBS.postMortemBodySystem[0]['abnormalDetection'] = value;
                return true;
            }
            if (fname === 'MUGrossFindings') {
                PMBS.postMortemBodySystem[0]['grossFindings'] = value;
                postMortem.postMortemBodySystems.push(PMBS);
                observation['postMortem'] = postMortem;
                return true;
            }
            /* attachments */
            if (fname === 'AnimalAttachmentD' && value !== "") {
                attachment = { "id": 0, "sequenceNum": 0, "type": "", "name": "", "description": "", "content": "" };
                attachmentCnt++;
                attachment.id = attachmentCnt;
                attachment.sequenceNum = attachmentCnt;
                attachment.type = "image/jpeg";
                attachment.name = value.replace(' ', '_') + '.jpg';
                attachment.description = value;
                return true;
            }
            if (fname === 'AnimalAttachment' && value !== "") {
                attachment.content = value;
                observation.attachments.attachment.push(attachment);
                return true;
            }
            /* attachments */

            /* Maggot sample */
            if (fname === 'MSampleFieldLabelText' && value > 0) { pSampleFlag = 1; }
            if (fname === 'MSampleType' && pSampleFlag === 0) { return true; }
            if (fname === 'MTestFor' && pSampleFlag === 0) { return true; }
            if (fname === 'MAdditionalComments' && pSampleFlag === 0) { return true; }
            if (fname === 'MSampleFieldLabelText' && value > 0) {
                sample = { "id": 0, "fieldId": "", "typeCde": "", "comment": "", "sampleTests": { "sampleTest": [] }, "attachments": { "attachment": [] } };
                sampleCount++;
                sample.id = sampleCount;
                sample.fieldId = value;
                return true;
            }
            if (fname === 'MSampleType' && pSampleFlag === 1) {
                sample.typeCde = value;
                return true;
            }
            if (fname === 'MTestFor' && pSampleFlag === 1) {
                if (value === 'Y') {
                    var testTypeCde = { "testTypeCde": ftype };
                    sample.sampleTests.sampleTest.push(testTypeCde);
                }
                return true;
            }
            if (fname === 'MAdditionalComments' && pSampleFlag === 1) {
                sample.comment = value;
                observation.samples.sample.push(sample);
                pSampleFlag = 0;
                return true;
            }
            /* Maggot sample */

            /* preselected sample */
            if (fname === 'PSampleFieldLabelText' && value > 0) { pSampleFlag = 1; }
            if (fname === 'PSampleType' && pSampleFlag === 0) { return true; }
            if (fname === 'PTestFor' && pSampleFlag === 0) { return true; }
            if (fname === 'PAdditionalComments' && pSampleFlag === 0) { return true; }

            if (fname === 'PSampleFieldLabelText' && value > 0) {
                sample = { "id": 0, "fieldId": "", "typeCde": "", "comment": "", "sampleTests": { "sampleTest": [] }, "attachments": { "attachment": [] } };
                sampleCount++;
                sample.id = sampleCount;
                sample.fieldId = value;
                return true;
            }
            if (fname === 'PSampleType' && pSampleFlag === 1) {
                sample.typeCde = value;
                return true;
            }
            if (fname === 'PTestFor' && pSampleFlag === 1) {
                if (value === 'Y') {
                    var testTypeCde = { "testTypeCde": ftype };
                    sample.sampleTests.sampleTest.push(testTypeCde);
                }
                return true;
            }
            if (fname === 'PAdditionalComments' && pSampleFlag === 1) {
                sample.comment = value;
                observation.samples.sample.push(sample);
                pSampleFlag = 0;
                return true;
            }
            /* preselected sample */

            /* sample */
            if (fname === 'SampleFieldLabelText' && value > 0) { pSampleFlag = 1; }
            if (fname === 'SampleType' && pSampleFlag === 0) { return true; }
            if (fname === 'TestFor' && pSampleFlag === 0) { return true; }
            if (fname === 'AdditionalComments' && pSampleFlag === 0) { return true; }

            if (fname === 'SampleFieldLabelText' && value > 0) {
                sample = { "id": 0, "fieldId": "", "typeCde": "", "comment": "", "sampleTests": { "sampleTest": [] }, "attachments": { "attachment": [] } };
                sampleCount++;
                sample.id = sampleCount;
                sample.fieldId = value;
                return true;
            }
            if (fname === 'SampleType' && pSampleFlag === 1) {
                sample.typeCde = value;
                return true;
            }
            if (fname === 'TestFor' && pSampleFlag === 1) {
                if (value === 'Y') {
                    var testTypeCde = { "testTypeCde": ftype };
                    sample.sampleTests.sampleTest.push(testTypeCde);
                }
                return true;
            }
            if (fname === 'AdditionalComments' && pSampleFlag === 1) {
                sample.comment = value;
                observation.samples.sample.push(sample);
                pSampleFlag = 0;
                return true;
            }
            /* sample */
            //observation[index] = value;
        }
    });
    if (discipline === "SF") {
        feralAnimalObservations.feralAnimalObservation.push(observation);
        return feralAnimalObservations;
    }
    if (discipline === "G") {
        delete observation.samples;
        if (observation.attachments && observation.attachments.attachment.length === 0) { delete observation.attachments; }
        animalGroupObservations.animalGroupObservation.push(observation);
        return observation;
    }
    //return feralAnimalObservations;
}
function objectifyAHFormforSubmit(data) {//serialize data function
    var modData = JSON.parse(JSON.stringify(data));
    var jsonStr = JSON.stringify(modData);
    jsonStr = jsonStr.replace(/_O_N_\d_T/g, '').replace(/_M_S_\d_T/g, '').replace(/_O_S_\d_T/g, '').replace(/_M_N_\d_H/g, '').replace(/_M_S_\d_H/g, '').replace(/_O_S_\d_H/g, '').replace(/_O_N_\d_H/g, '');
    jsonStr = jsonStr.replace(/_M_S_\d_S/g, '').replace(/_O_N_\d_S/g, '').replace(/_M_S_\d_S/g, '').replace(/_M_D_\d_S/g, '').replace(/_O_S_\d_S/g, '');
    jsonStr = jsonStr.replace(/_M_N/g, '').replace(/_O_N/g, '').replace(/_M_D/g, '').replace(/_M_S/g, '').replace(/_O_S/g, '');
    var jsonData = JSON.parse(jsonStr);
    $.each(jsonData.feralAnimalObservation, function (i, item) {
        if (item.samples.sample.length === 0) { delete item.samples; }
        if (item.attachments.attachment.length === 0) { delete item.attachments; }
        if (item.samples) {
            $.each(item.samples.sample, function (j, itemx) {
                if (itemx.attachments.attachment.length === 0) { delete itemx.attachments; }
            });
        }
    });
    CleanUp(jsonData);
    delete jsonData.status;
    delete jsonData.id;
    return jsonData;
}
function preValidateAH() {
    var numManFields = $("#form1").find('input[type="number"][name*="_M_N"]');
    $.each(numManFields, function (index, v) {
        var fname = v.name.split("_")[0];
        var fMOC = v.name.split("_")[1];
        var fNSD = v.name.split("_")[2];
        var fnum = v.name.split("_")[3];
        var ftype = v.name.split("_")[4];
        if (v.value === "" || v.value === 0) {
            if (fname === 'status') return true;
            if (fname === 'aunkNumber') return true;
            if (fname === 'gunkNumber') return true;
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field cannot be empty.");
            vFailed = true;
            return false;
        }
        if ($.isNumeric(v.value) === false || v.value === "" || v.value === 0) {
            if (fname === 'status') return true;
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field should be numeric.");
            vFailed = true;
            return false;
        }
    });
    var numOptFields = $("#form1").find('input[type="number"][name*="_O_N"]');
    $.each(numOptFields, function (index, v) {
        var fname = v.name.split("_")[0];
        var fMOC = v.name.split("_")[1];
        var fNSD = v.name.split("_")[2];
        var fnum = v.name.split("_")[3];
        var ftype = v.name.split("_")[4];
        if (v.value === 0 || v.value === "") return true;
        if ($.isNumeric(v.value) === false) {
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field should be numeric.");
            vFailed = true;
            return false;
        }
    });
    var strManFields = $("#form1").find('input[name*="_M_S"]');
    $.each(strManFields, function (index, v) {
        var fname = v.name.split("_")[0];
        var fMOC = v.name.split("_")[1];
        var fNSD = v.name.split("_")[2];
        var fnum = v.name.split("_")[3];
        var ftype = v.name.split("_")[4];
        if (v.value === "") {
            if (fname === 'status') return true;
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field cannot be empty.");
            vFailed = true;
            return false;
        }
        if ($("[name='" + v.name + "']").is(':radio') && $("[name='" + v.name + "']:checked").length === 0) {
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field cannot be empty.");
            vFailed = true;
            return false;
        }
    });
    if (vFailed === true) {
        return { "vError": vError, "vErrDescription": vErrDescription.join('<br/>') };
    } else { return { "vError": 0, "vErrDescription": "" }; }
}
function IterateAH(data) {
    var externalObsFlag = 0;
    var bodysystem = "";
    var bodysystemX = "";
    var bodysystemFlag = 0;
    var woundsFlag = 0;
    var modData = JSON.parse(JSON.stringify(data));
    //if (modData && modData.status_M_N) { delete modData.status_M_N; }
    $.each(modData, function (index, value) {
        if (isNaN(index)) {
            var fname = index.split("_")[0];
            var fMOC = index.split("_")[1];
            var fNSD = index.split("_")[2];
            var fnum = index.split("_")[3];
            var ftype = index.split("_")[4];

            if (fname === 'AnimalAttachmentD' && value === "") {
                vError = 1;
                vErrDescription.push("Please fill Attachment Name.");
                vFailed = true;
                return false;
            }
            if (fname === 'SubmittedByStaffId' && value < 2) {
                vError = 1;
                vErrDescription.push("Please set device Owner in Application Settings > Application menu before submission.");
                vFailed = true;
                return false;
            }
            if (fname === 'externalObserverFlag' && value === 'Y') {
                externalObsFlag = 1; return true;
            }
            if (fname === 'woundsPresentG' && value === 'Y') {
                woundsFlag = 1; return true;
            }
            if (fname.startsWith('BodySystemCode')) {
                bodysystem = value;
                bodysystemX = value + 'Flag';
                return true;
            }
            if (fname === 'externalObserver' && value === '' && externalObsFlag === 1) {
                vError = 1;
                vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                vFailed = true;
                return false;
            }
            if (fname === bodysystemX && value === 'Y') {
                bodysystemFlag = 1; return true;
            }
            if (fname === bodysystemX && value === 'N') {
                bodysystemFlag = 0; return true;
            }
            if (fname === bodysystem + 'GrossFindings' && value === '' && bodysystemFlag === 1) {
                vError = 1;
                vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                vFailed = true;
                bodysystemFlag = 0;
                return false;
            }
            if (fMOC === 'M' && fNSD === 'S' && (value === '' || value === 'NONE')) {
                vError = 1;
                vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnErrorAH' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                vFailed = true;
                return false;
            }
            if (fMOC === 'M' && fNSD === 'D' && value === '') {
                vError = 1;
                vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                vFailed = true;
                return false;
            }
            if (fMOC === 'M' && fNSD === 'N' && value === 0) {
                if (fname === 'status') return true;
                if (fname === 'aunkNumber') return true;
                if (fname === 'gunkNumber') return true;
                if (fname === 'woundsCount' && woundsFlag === 0) return true; 
                vError = 1;
                vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                vFailed = true;
                return false;
            }
            if (fMOC === 'O' && fNSD === 'N' && value === 0) {
                vError = 1;
                vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnErrorAH' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                vFailed = true;
                return false;
            }
        }
    });
    if (vFailed === true) {
        return { "vError": vError, "vErrDescription": vErrDescription.join('<br/>') };
    } else { return { "vError": 0, "vErrDescription": "" }; }
}
function Iterate2AH(data) {
    var externalObsFlag = 0;
    var bodysystem = "";
    var bodysystemX = "";
    var bodysystemFlag = 0;
    var woundsFlag = 0;
    var modData = JSON.parse(JSON.stringify(data));
    //if (modData && modData.status_M_N) { delete modData.status_M_N; }
    $.each(modData, function (index, value) {
        if (isNaN(index)) {
            var fname = index.split("_")[0];
            var fMOC = index.split("_")[1];
            var fNSD = index.split("_")[2];
            var fnum = index.split("_")[3];
            var ftype = index.split("_")[4];

            if (fname === 'AnimalAttachmentD' && value === "") {
                vError = 1;
                vErrDescription.push("Please fill Attachment Name.");
                vFailed = true;
                return false;
            }
            if (fname === 'SubmittedByStaffId' && value < 2) {
                vError = 1;
                vErrDescription.push("Please set device Owner in Application Settings > Application menu before submission.");
                vFailed = true;
                return false;
            }
            if (fname === 'externalObserverFlag' && value === 'Y') {
                externalObsFlag = 1; return true;
            }
            if (fname === 'woundsPresentG' && value === 'Y') {
                woundsFlag = 1; return true;
            }
            if (fname.startsWith('BodySystemCode')) {
                bodysystem = value;
                bodysystemX = value + 'Flag';
                return true;
            }
            if (fname === 'externalObserver' && value === '' && externalObsFlag === 1) {
                vError = 1;
                vErrDescription.push($('[name="' + index + '"]').data("name") + " field cannot be empty.");
                vFailed = true;
                return false;
            }
            if (fname === bodysystemX && value === 'Y') {
                bodysystemFlag = 1; return true;
            }
            if (fname === bodysystemX && value === 'N') {
                bodysystemFlag = 0; return true;
            }
            if (fname === bodysystem + 'GrossFindings' && value === '' && bodysystemFlag === 1) {
                vError = 1;
                vErrDescription.push($('[name="' + index + '"]').data("name") + " field cannot be empty.");
                vFailed = true;
                bodysystemFlag = 0;
                return false;
            }
            if (fMOC === 'M' && fNSD === 'S' && (value === '' || value === 'NONE')) {
                vError = 1;
                vErrDescription.push($('[name="' + index + '"]') + " field cannot be empty.");
                vFailed = true;
                return false;
            }
            if (fMOC === 'M' && fNSD === 'D' && value === '') {
                vError = 1;
                vErrDescription.push($('[name="' + index + '"]') + " field cannot be empty.");
                vFailed = true;
                return false;
            }
            if (fMOC === 'M' && fNSD === 'N' && value === 0) {
                if (fname === 'status') return true;
                if (fname === 'aunkNumber') return true;
                if (fname === 'gunkNumber') return true;
                if (fname === 'woundsCount' && woundsFlag === 0) return true; 
                vError = 1;
                vErrDescription.push($('[name="' + index + '"]') + " field cannot be empty.");
                vFailed = true;
                return false;
            }
            if (fMOC === 'O' && fNSD === 'N' && value === 0) {
                vError = 1;
                vErrDescription.push($('[name="' + index + '"]') + " field cannot be empty.");
                vFailed = true;
                return false;
            }
        }
    });
    if (vFailed === true) {
        return { "vError": vError, "vErrDescription": vErrDescription.join('<br/>') };
    } else { return { "vError": 0, "vErrDescription": "" }; }
}
function SubmitRecordAH(formArray, discipline) {//serialize data function
    var fAOWrapper = { "feralAnimalObservations": {} };
    var gAOWrapper = { "animalGroupObservations": {} };
    var guid1 = guid().toUpperCase();
    var obsWrapper = {
        "header": {
            "ebmCID": guid1,
            "ebmMID": guid1,
            //"ebmRTID": guid1,
            //"ebmPID": guid1,
            "ebmSID": "ESFA",
            "ebmTimestamp": new Date().toISOString()
            //"propertySet": [{
            //    "name": "",
            //    "value": ""
            //}]
        },
        "body": {}
    };
    if (discipline === "SF") {
        fAOWrapper.feralAnimalObservations = formArray;
        obsWrapper.body = fAOWrapper;
    }
    if (discipline === "G") {
        gAOWrapper.animalGroupObservations = formArray;
        obsWrapper.body = gAOWrapper;
    }
    return obsWrapper;
}
function DisableFormAH() {
    $('#DownloadAH').removeClass('btn-default');
    $('#DownloadAH').attr('disabled', true);
    $('#DownloadAH').addClass('disabled');
    $('#SyncAH').removeClass('btn-info');
    $('#SyncAH').attr('disabled', true);
    $('#SyncAH').addClass('disabled');
    $('#newObservationAH').removeClass('btn-default');
    $('#newObservationAH').attr('disabled', true);
    $('#newObservationAH').addClass('disabled');

    $('#mb6 .progText').text("Sync in progress ...");
    $('#mb6 .progress').addClass('hide');
    $('#mb6 .fa-clock-o').addClass('hide');
    $('#modalProgress').modal();
    setTimeout(StartSyncAH, 1000);
}
function StartSyncAH() {
    var success = true;
    var rowsFailed = [];
    var rowsFailedErr = [];
    var rowsSuccess = [];
    var logstr = "";
    var arr = results.observations.filter(function (el) {
        return (el.status_M_N === 1 && (el.AnimalDisciplineCode_M_S === 'SF' || el.AnimalDisciplineCode_M_S === 'G'));
    });
    if (arr && arr.length === 0) {
        $.growl.notice({ title: "", message: "No records to Sync.", location: "bc", size: "small" });
        setTimeout(EnableFormPH(), 300);
        return false;
    }
    else {
        $.each(results.observations, function (index, value) {
            if (value.status_M_N === 0 || value.PlantDisciplineCode_M_S === 'P' || value.PlantDisciplineCode_M_S === 'E' || value.PlantDisciplineCode_M_S === 'B') { return true; }
            vError = 0;
            vErrDescription = [];
            vFailed = false;
            var rowid = value.id_M_N;
            var result = Iterate2AH(value);
            var payload;
            if (result.vError === 0) {
                if (value.AnimalDisciplineCode_M_S === "SF") {
                    vpayload = JSON.stringify(SubmitRecordAH(objectifyAHFormforSubmit(packageAHFormforSubmit(value)), "SF"));
                    submitAHObsAddress = submitAHFAObsAddress;
                }
                if (value.AnimalDisciplineCode_M_S === "G") {
                    vpayload = JSON.stringify(SubmitRecordAH(objectifyAHFormforSubmit(packageAHFormforSubmit(value)), "G"));
                    submitAHObsAddress = submitAHGObsAddress;
                }
                //console.log(vpayload);
                if (debugMode === 1) {
                    $.confirm({
                        title: 'Payload Attempted!',
                        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + vpayload.escapeSpecialChars() + '</textarea></div>',
                        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                        buttons: {
                            ok: function () { },
                            copy: {
                                text: 'Copy', // With spaces and symbols
                                action: function () {
                                    var copytext = this.$content.find("#Payload");
                                    copytext.select();
                                    document.execCommand("copy");
                                    return false;
                                }
                            }
                        }
                    });
                }
                //var payload = {
                //    "value": vpayload.escapeSpecialChars()
                //};
                $.ajax({
                    method: "POST",
                    async: false,
                    url: submitAHObsAddress,
                    //data: JSON.stringify(payload),
                    data: vpayload.escapeSpecialChars(),
                    contentType: "application/json",
                    headers: {
                        "authorization": authCode,
                        "cache-control": "no-cache"
                    },
                    success: function (data, textStatus, XmlHttpRequest) {
                        //$.growl({ title: "", message: "Success! Observations synced to cloud.", location: "tc", size: "large" });  
                        if (XmlHttpRequest.status === 200) {
                            //$.growl({ title: "", message: "Observation Sync'd!", location: "bc" });
                            logstr = logstr + vpayload.escapeSpecialChars() + "\r\n";
                        }
                        rowsSuccess.push(index);
                    },
                    complete: function (xhr, textStatus) {
                        //$.growl({ title: "", message: "Success! Observations synced to cloud.", location: "tc", size: "large" });
                        //results.observations(value.id_M_N - 1).status_M_N = 2;
                        //results.observations.splice(index, 1);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        //$.growl.error({ title: "", message: xhr.status + ': ' + textStatus + ', ' + errorThrown + ', ' + xhr.responseText , location: "bc" });   
                        $.dialog({
                            title: 'Sync Failed!',
                            content: xhr.status + ': ' + textStatus + ', ' + errorThrown + ', ' + xhr.responseText,
                            columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1'
                        });
                    }
                });
            }
            else {
                rowsFailed.push(rowid);
                rowsFailedErr.push("#" + rowid + ": " + result.vErrDescription);
                success = false;
                return false;
            }
        });
        if (success === true) {
            rowsSuccess.sort();
            rowsSuccess.reverse();
            $.each(rowsSuccess, function (index, value) {
                results.observations.splice(value, 1);
            });
            db.transaction(function (tx) {
                tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                    logRecord(logstr);
                    //alert("Dataset updated.");
                    //$.growl({ title: "", message: "Observations synced to cloud.", location: "tc", size: "large" });
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while updating records to database. " + err.message, location: "tc", size: "large" });
            });
        }
        //else if (success === false) { $.growl.error({ title: "", message: rowsFailed.join(',') + "<br/>" + rowsFailedErr.join('<br/>'), location: "tc", size: "large", fixed: "true" }); }
        else if (success === false) { $.growl.error({ title: "", message: rowsFailedErr.join('<br/>'), location: "tc", size: "large", fixed: "true" }); }
        syncActivityDataAH();
        loadActivityDataAH();
        //loadAHDefaults();
        table.destroy();
        loadData();
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
        setTimeout(EnableFormAH(), 1000);
    }
}
function EnableFormAH() {
    $('#DownloadAH').addClass('btn-default');
    $('#SyncAH').addClass('btn-info');
    $('#newObservationAH').addClass('btn-default');
    $('#DownloadAH').attr('disabled', false);
    $('#DownloadAH').removeClass('disabled');
    $('#SyncAH').attr('disabled', false);
    $('#SyncAH').removeClass('disabled');
    $('#newObservationAH').attr('disabled', false);
    $('#newObservationAH').removeClass('disabled');
    $('#mb6 .progText').text("");
    $('#modalProgress').modal('hide');
}
$(document).on('click', 'a.btnErrorAH', function (e) {
    e.preventDefault();
    var x = $(this).data("j");
    var y = $(this).data("k");
    var z = $(this).data("l");
    switch (y) {
        case 1:
            $('#tab1').trigger('click');
            break;
        case 2:
            $('#tab2').trigger('click');
            break;
        case 3:
            $('#tab3').trigger('click');
            break;
        case 5:
            $('#tab5').trigger('click');
            break;
        case 'A':
            if (curDiscipline === 'G') {
                $('#tab3').trigger('click');
            }
            if (curDiscipline === 'SF') {
                $('#tab6').trigger('click');
            }
            break;
        case 'S':
            $('#tab3').trigger('click');
            $('.sample').find("[data-action=collapse]").trigger("click");
            $('.sample').eq(z * 1 - 1).find("[data-action=expand]").trigger("click");
            break;
        default:
            $('#tab0').trigger('click');
            break;
    }
    var u = $("#form1").find("[name='" + x + "']");
    if (u) { u.focus(); }
    $('div.growl-close').triggerHandler('click');
});

$(document).on('blur', 'input.percentCal', function (e) {
    var that = $(this);
    var totalNum = $("#form1").find("input[name='totalNumber_M_N']").val();
    var pc = Math.round(Number(that.val()) / Number(totalNum) * 100);
    that.parent().next('div').find('.targetPcnt').val(pc);
});

/* tab scroller */
var widthOfList = function () {
    var itemsWidth = 0;
    $('#tabList li').each(function () {
        var itemWidth = $(this).outerWidth();
        itemsWidth += itemWidth;
    });
    return itemsWidth;
};
var widthOfHidden = function () {
    return (($('.tabs-wrapper').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
};
var getLeftPosi = function () {
    if ($('#tabList').position()) {
        return $('#tabList').position().left;
    }
    else return 0;
};
var reAdjust = function () {
    if (($('.tabs-wrapper').outerWidth()) < widthOfList()) {
        $('.scroller-right').show();
    }
    else {
        $('.scroller-right').hide();
    }
    if (getLeftPosi() < 0) {
        $('.scroller-left').show();
    }
    else {
        $('.item').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow');
        $('.scroller-left').hide();
    }
};
$(document).on('click', '.scroller-right', function () {
    $('.scroller-left').fadeIn('slow');
    $('.scroller-right').fadeOut('slow');
    $('#tabList').animate({ left: "+=" + widthOfHidden() + "px" }, 'slow', function () {
    });
});
$(document).on('click', '.scroller-left', function () {
    $('.scroller-right').fadeIn('slow');
    $('.scroller-left').fadeOut('slow');
    $('#tabList').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow', function () {
    });
});
/* tab scroller */


//$(document).on('focus', "#SiteIdAH", function (e) {
//    lastSiteValue = $(this).val();
//})
//    .on('change', "#SiteIdAH", function (e) {
//        var that = $(this);
//        var str = that.val();
//        //if (that.val() === "0" || lastSiteValue === "0") return;
//        if (that.val() === "0") return;
//        if (curDiscipline === "SF") {
//            //loadSiteData(str);
//            return;
//        }
//    });