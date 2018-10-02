var mapPath;
var emptyTilePath;
var AppMode;
var ServerMode;
var ServerAddress;
var devServerAddress;
var sitServerAddress;
var uatServerAddress;
var prodServerAddress;
var authAddress;
var ActivityAddress;
var refCodesAddress;
var BPHStaffAddress;
var IPHStaffAddress;
var NPHStaffAddress;
var taxaAddress;
var submitPHObsAddress;
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
var numPlants = 0;
var plantName; var Idx;
var numEntoHosts = 0;
var numEntoTargets = 0;
var hostName;
var numPathHosts = 0;
var numPathTargets = 0;
var esamples = 0;
var psamples = 0;
var addlObservers;
var resizeId;
var firstLoad = 0;
var ActiveMapSet;
var numAttachments = 0;
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
/* PH Initialized variables */
var hostweed = '<div class="row col-md-12 col-sm-12 col-xs-12 hostweed collapsed"><a href="#" class="btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="btn btn-md btn-danger text-arrows-2 removePlant"><i class="fa fa-remove"></i></a><div class="row col-md-11 col-sm-10 col-xs-10 pl-0"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Taxon ID</label><input type="number" class="form-control taxonIDB" placeholder="Taxon ID" name="PlantTaxonId_O_N" readonly min="0" max="99999999" maxlength="8" data-name="Plant-Taxon ID"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Host Name</label><input type="text" class="form-control taxonTextB" placeholder="Host Name" name="PlantTaxonText_M_S" data-name="Plant-Taxon Text" data-section="PlantObsTab"><input type="text" class="form-control taxonHTextB hide" name="PlantTaxonTextH_M_S" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="radio" class="minimal" name="CountList_M_S" value="Count" data-code="Count" data-validate="N" maxlength="1" data-name="Count List Option" data-section="PlantObsTab">&nbsp;<label><span class="bold-red">*&nbsp;</span>Count</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="radio" class="minimal" name="CountList_M_S" value="List" data-code="List" data-validate="N" maxlength="1" data-name="Count List Option" data-section="PlantObsTab">&nbsp;<label>List</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12 countArea hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType_M_S" data-name="Plant-Statistic Type" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Count/Area</label><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty count" name="HostStatCount_M_N" value="0" min="0" max="99999999" maxlength="8" data-name="Plant-HostStat Count" data-section="PlantObsTab"><input type="number" class="qty area" name="HostStatAreaNo_M_N" value="0" min="0" max="99999999" maxlength="8" data-name="Plant-HostStat AreaNo" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="CheckFutureSurveyFlag_O_S" class="minimal" maxlength="1" data-name="Plant-Check Future Survey Flag" data-section="PlantObsTab">&nbsp;<label>Flag</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" class="minimal" maxlength="1" data-name="Plant-External Photo Flag" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Plant-Comments Text" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Latitude</label><input type="number" class="form-control hostweedlat" name="Latitude" placeholder="Latitude" data-name="Plant-Latitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Longitude</label><input type="number" class="form-control hostweedlng" name="Longitude" placeholder="Longitude" data-name="Plant-Longitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-6"><label>Datum</label><select class="form-control hostweeddat" name="GpsDatumId_O_S" data-name="Plant-Datum" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-6"><button class="btn btn-md btn-info getPlantCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" readonly name="LocationPointWktClob_O_S" data-name="Plant-LatLon" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-info" id="addPlantObsAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantObsAttachments"></div></div></div>';
var botSample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><a href="#" class="btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="btn btn-md btn-danger text-arrows-2 removeBotSample"><i class="fa fa-remove"></i></a><div class="row col-md-11 col-sm-10 col-xs-10 pl-0"><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample Field ID </label><input type="text" class="form-control nextid" placeholder="Sample Field ID" readonly name="SampleFieldLabelText_M_S" data-name="Sample-Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Number Collected </label><input type="number" class="form-control" placeholder="Number Collected" name="CollectedSampleCount_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Count" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText_O_S" maxlength="50" data-name="Sample-Linked Sample Field Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Preliminary Taxon ID </label><input type="number" class="form-control taxonIDBS" placeholder="Preliminary ID" name="PrelimTaxonId_O_N" readonly min="1" max="99999999" maxlength="8" data-name="Sample-Preliminary Taxon ID" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Preliminary Taxon Text </label><input type="text" class="form-control taxonTextBS" placeholder="Preliminary Taxon Text" name="PrelimTaxonText_M_S" maxlength="50" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextBS hide" name="PrelimTaxonTextH_M_S" data-name="Host-Taxon ID" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Latitude </label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude" data-name="Sample-Latitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Longitude </label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude" data-name="Sample-Longitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Datum</label><select class="form-control sampledat" name="GpsDatumId_M_S" data-name="Sample-Datum" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><button class="btn btn-md btn-info getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-6 col-sm-6 col-xs-11 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" readonly name="SamplePointWktClob_M_S" data-name="Sample-LatLon" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Collected DateTime</label><input type="datetime-local" class="form-control" placeholder="Time" name="CollectedDatetime_M_D" step="1" data-name="Sample-Collected DateTime" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Altitude (Meters)</label><input type="number" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo_O_N" min="1" max="9999" maxlength="4" data-name="Sample-Collected Altitude Number" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Sample-Comments Text" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-6"><input class="mxr-5 minimal" type="checkbox" name="AdditionalCollectorTab" data-name="Sample-Additional Collectors" data-section="PlantSampleTab">&nbsp;<label>Additional Collectors</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName1_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div>' +
    '<div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName2_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName3_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName4_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName5_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName6_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Habit </label><input type="text" class="form-control" placeholder="Habit" name="HabitText_O_S" maxlength="200" data-name="Sample-Habit Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Description </label><input type="text" class="form-control" placeholder="Description" name="DetailedDescriptionText_O_S" maxlength="400" data-name="Sample-Detailed Description" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Habitat </label><input type="text" class="form-control" placeholder="Habitat" name="HabitatText_O_S" maxlength="400" data-name="Sample-Habitat Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Landform </label><input type="text" class="form-control" placeholder="LandForm" name="LandformText_O_S" maxlength="200" data-name="Sample-Landform" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Soil/Geology </label><input type="text" class="form-control" placeholder="Soil/Geology" name="SoilGeologyText_O_S" maxlength="200" data-name="Sample-Soil Geology" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Abundance</label><input type="text" class="form-control" placeholder="Abundance" name="AbundanceText_O_S" maxlength="200" data-name="Sample-Abundance" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" class="minimal" maxlength="1" data-name="Sample-External Photo Exists Flag" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Preservation Type</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-SP_O_S" class="minimal" data-attr="PlantPreservationTab" data-code="SP" data-desc="Spirit Sample" data-seq="1" maxlength="2" data-name="Sample-Plant Preservation-Spirit Sample" data-section="PlantSampleTab">&nbsp;<label>Spirit Sample</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-DN_O_S" class="minimal" data-attr="PlantPreservationTab" data-code="DN" data-desc="DNA Sample" data-seq="2" maxlength="2" data-name="Sample-Plant Preservation-DNA Sample" data-section="PlantSampleTab">&nbsp;<label>DNA Sample</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-O_O_S" class="minimal" data-attr="PlantPreservationTab" data-code="O" data-desc="Other" data-seq="3" maxlength="2" data-name="Sample-Plant Preservation-Other" data-section="PlantSampleTab">&nbsp;<label>Other</label>&nbsp;</div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control" placeholder="Other Text" name="PlantPreservOtherText_O_S" maxlength="50" data-name="Sample-Plant Preservation-Other Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-info" id="addPlantSampleAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantSampleAttachments"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="hidden" name="EndOfSample_O_S" class="minimal" maxlength="1" data-name="Sample-EoS" data-section="PlantSampleTab">&nbsp;&nbsp;</div></div></div>';
var entobox = '<div class="row col-md-12 col-sm-12 col-xs-12 entobox collapsed"><a href="#" class="btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="btn btn-md btn-danger text-arrows-2 removeEntoHost"><i class="fa fa-remove"></i></a><div class="row col-md-11 col-sm-10 col-xs-10 pl-0"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Taxon ID</label><input type="number" class="form-control taxonIDE" placeholder="Taxon ID" name="PlantTaxonId_O_N" readonly min="1" max="99999999" maxlength="8" data-name="Host-Taxon ID"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue badge-host mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Host Name</label><input type="text" class="form-control taxonTextE" placeholder="Host Name" name="PlantTaxonText_M_S" data-section="PlantObsTab" data-name="Host-Taxon Text"><input type="text" class="form-control taxonHTextE hide" name="PlantTaxonTextH_M_S" data-section="PlantObsTab" data-name="Plant-Taxon Text"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType_M_S" data-name="Host-Statistic Type" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Count/Area</label><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty count" name="HostStatCount_M_N" min="0" max="99999999" maxlength="8" value="0" data-name="Host-Stat Count" data-section="PlantObsTab"><input type="number" class="qty area hide" name="HostStatAreaNo_M_N" min="0" max="99999999" maxlength="8" value="0" data-name="Host-Stat AreaNo" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="CheckFutureSurveyFlag_O_S" maxlength="1" class="minimal" data-name="Host-Check Future Survey Flag" data-section="PlantObsTab">&nbsp;<label>Flag</label></div></div><div class="row col-md-6 col-sm-6 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" maxlength="1" class="minimal" data-name="Host-External Photo Exist Flag" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Method of Observation</label><select class="form-control" name="PlantObsMethodCode_M_S" data-name="Host-Observation Method Code" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText_O_S" maxlength="400" style="height:60px;" data-name="Host-Comments Text" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Life Stage</label><select class="form-control select2" name="EntoLifeStgCode_O_S" style="width: 100%;" data-name="Host-Life Stage Code" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Host Plant Status</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantStatusFruitingFlag_O_S" class="minimal" value="FR" maxlength="2" data-name="Host-Status Fruiting Flag" data-section="PlantObsTab">&nbsp;<label>Fruiting</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantStatusFloweringFlag_O_S" class="minimal" value="FL" maxlength="2" data-name="Host-Status Flowering Flag" data-section="PlantObsTab">&nbsp;<label>Flowering</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantStatusFlushingFlag_O_S" class="minimal" value="FU" maxlength="2" data-name="Host-Status Flushing Flag" data-section="PlantObsTab">&nbsp;<label>Flushing</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantStatusDeadWoodFlag_O_S" class="minimal" value="DE" maxlength="2" data-name="Host-Status Deadwood Flag" data-section="PlantObsTab">&nbsp;<label>Deadwood</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Latitude</label><input type="number" class="form-control entolat" name="Latitude" placeholder="Latitude" data-name="Host-Latitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Longitude</label><input type="number" class="form-control entolng" name="Longitude" placeholder="Longitude" data-name="Host-Longitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><label>Datum</label><select class="form-control entodat" name="GpsDatumId_O_S" data-name="Host-Datum" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><button class="btn btn-md btn-info getEntoHostCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-6 col-sm-6 col-xs-12 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" readonly name="LocationPointWktClob_O_S" data-name="Host-LatLon" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 bg-target entotarget"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Target Taxon Id</label><input type="number" name="TargetTaxonId_O_N" class="input-sm form-control taxonIDET" placeholder="Target Taxon ID" readonly min="1" max="99999999" maxlength="8" data-name="Target-Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5 badge-target" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Target Taxon Name</label><input type="text" name="TargetTaxonText_M_S" class="input-sm form-control taxonTextET" placeholder="Target Taxon Text" maxlength="50" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"><input type="text" class="form-control taxonHTextET hide" name="TargetTaxonTextH_M_S" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><label>Target Count</label><input type="text" name="TargetCount_O_N" class="input-sm form-control" placeholder="Target Count" min="1" max="99999999" maxlength="8" data-name="Target-Count" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optA" value="A" data-code="A" data-validate="Y" maxlength="1" data-name="Target-Not Observed" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optP" value="P" data-code="P" data-validate="Y" maxlength="1" data-name="Target-Present" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optS" value="S" data-code="S" data-validate="Y" maxlength="1" data-name="Target-Suspected" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optND" value="N" data-code="N" data-validate="Y" maxlength="1" data-name="Target-Not Done" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Comments</label><input type="text" name="CommentText_O_S" class="input-sm form-control" placeholder="Comments" maxlength="400" data-name="Target-Comments Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-md btn-default pull-right" data-action="addEntoTarget"><i class="fa fa-plus text-info"></i>&nbsp;Add Target</button><a href="#" class="btn btn-sm btn-danger" data-action="removeEntoTarget">Delete</a></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-info" id="addPlantObsAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantObsAttachments"></div></div></div>';
var entotarget = '<div class="row col-md-12 col-sm-12 col-xs-12 bg-target entotarget"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Target Taxon Id</label><input type="number" name="TargetTaxonId_O_N" class="input-sm form-control taxonIDET" placeholder="Target Taxon ID" readonly min="1" max="99999999" maxlength="8" data-name="Target-Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5 badge-target" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Target Taxon Name</label><input type="text" name="TargetTaxonText_M_S" class="input-sm form-control taxonTextET" placeholder="Target Taxon Text" maxlength="50" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"><input type="text" class="form-control taxonHTextET hide" name="TargetTaxonTextH_M_S" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><label>Target Count</label><input type="text" name="TargetCount_O_N" class="input-sm form-control" placeholder="Target Count" min="1" max="99999999" maxlength="8" data-name="Target-Count" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optA" value="A" data-code="A" data-validate="Y" maxlength="1" data-name="Target-Not Observed" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optP" value="P" data-code="P" data-validate="Y" maxlength="1" data-name="Target-Present" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optS" value="S" data-code="S" data-validate="Y" maxlength="1" data-name="Target-Suspected" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optND" value="N" data-code="N" data-validate="Y" maxlength="1" data-name="Target-Not Done" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Comments</label><input type="text" name="CommentText_O_S" class="input-sm form-control" placeholder="Comments" maxlength="400" data-name="Target-Comments Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-md btn-default pull-right" data-action="addEntoTarget"><i class="fa fa-plus text-info"></i>&nbsp;Add Target</button><a href="#" class="btn btn-sm btn-danger" data-action="removeEntoTarget">Delete</a></div></div>';
var entosample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><a href="#" class="btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="btn btn-md btn-danger text-arrows-2 removeEntoSample"><i class="fa fa-remove"></i></a><div class="row col-md-11 col-sm-10 col-xs-10 pl-0"><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample Field ID </label><input type="text" class="form-control nextid" placeholder="Sample Field ID" readonly name="SampleFieldLabelText_M_S" data-name="Sample-Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Number Collected </label><input type="text" class="form-control" placeholder="Number Collected" name="CollectedSampleCount_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Collected Sample Count" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText_O_S" maxlength="50" data-name="Sample-Linked Sample Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Preliminary Taxon ID </label><input type="number" class="form-control taxonIDES" placeholder="Preliminary ID" name="PrelimTaxonId_O_N" readonly min="1" max="99999999" maxlength="8" data-name="Sample-Preliminary Taxon ID" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Preliminary Taxon Text </label><input type="text" class="form-control taxonTextES" placeholder="Preliminary Taxon Text" name="PrelimTaxonText_M_S" maxlength="50" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextES hide" name="PrelimTaxonTextH_M_S" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Latitude </label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude" data-name="Sample-Latitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Longitude </label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude" data-name="Sample-Longitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Datum</label><select class="form-control sampledat" name="GpsDatumId_M_S" data-name="Sample-Datum" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><button class="btn btn-md btn-info getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-11 col-sm-11 col-xs-11 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" readonly name="SamplePointWktClob_M_S" data-name="Sample-LatLon" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Collected DateTime</label><input type="datetime-local" class="form-control" placeholder="Time" name="CollectedDatetime_M_D" step="1" data-name="Sample-Collected DateTime" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Altitude (Meters)</label><input type="text" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo_O_N" min="1" max="9999" maxlength="4" data-name="Sample-Collected Altitude Number" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Sample-Comments Text" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-6"><input class="mxr-5 minimal" type="checkbox" name="AdditionalCollectorTab" data-name="Sample-Additional Collectors" data-section="PlantSampleTab">&nbsp;<label>Additional Collectors</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName1_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName2_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName3_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName4_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName5_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName6_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" class="minimal" maxlength="1" data-name="Sample-External Photos Exist Flag" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Preservation Type</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-W7_O_S" class="minimal" value="W7" maxlength="2" data-name="Sample-Plant Preservation-Wet Ethanol" data-section="PlantSampleTab">&nbsp;<label>Wet (Ethanol 70-80%)</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-W8_O_S" class="minimal" value="W8" maxlength="2" data-name="Sample-Plant Preservation-Wet Ethanol" data-section="PlantSampleTab">&nbsp;<label>Wet (Ethanol>80%)</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-RE_O_S" class="minimal" value="RE" maxlength="2" data-name="Sample-Plant Preservation-Rearing" data-section="PlantSampleTab">&nbsp;<label>Rearing</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-DR_O_S" class="minimal" value="DR" maxlength="2" data-name="Sample-Plant Preservation-Dry" data-section="PlantSampleTab">&nbsp;<label>Dry</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-FT_O_S" class="minimal" value="FT" maxlength="2" data-name="Sample-Plant Preservation-FTA Card" data-section="PlantSampleTab">&nbsp;<label>FTA Card</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-O_O_S" class="minimal" value="O" maxlength="2" data-name="Sample-Plant Preservation-Other" data-section="PlantSampleTab">&nbsp;<label>Other</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control" placeholder="Other Preservation Type" name="PlantPreservOtherText_O_S" maxlength="50" data-name="Sample-Plant Preservation Other Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6"><label><span class="bold-red">*&nbsp;</span>Host/Other </label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" name="HostFlag_M_S" class="minimal" value="Y" data-code="Y" maxlength="1" data-name="Sample-HostOther Flag" data-section="PlantSampleTab">&nbsp;<label>Host</label></div>' +
    '<div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" name="HostFlag_M_S" class="minimal" value="N" data-code="N" maxlength="1" data-name="Sample-HostOther Flag" data-section="PlantSampleTab">&nbsp;<label>Other</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12 hide"><label>Host/Other Taxon Id</label><input type="number" class="form-control taxonIDHES" placeholder="Other Name" name="HostTaxonId_O_N" readonly min="1" max="99999999" maxlength="8" data-name="Sample-Field Label" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Host/Other Taxon Text</label><input type="text" class="form-control taxonTextHES" placeholder="Other Name" name="HostTaxonText_M_S" maxlength="50" data-name="Sample-Host Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextHES hide" name="HostTaxonTextH_M_S" data-name="Sample-Host Taxon Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Identified By</label><select class="form-control" name="HostIdentifiedUserId_O_N" data-name="Sample-Host Identified User ID" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Collection Method</label><select class="form-control" name="EntoCollMethodCode_M_S" data-name="Sample-Collection Method" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Plant Part</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-LE_O_S" class="minimal" value="LE" maxlength="2" data-name="Sample-Plant Part-Leaves" data-section="PlantSampleTab">&nbsp;<label>Leaves</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-FL_O_S" class="minimal" value="FL" maxlength="2" data-name="Sample-Plant Part-Flower" data-section="PlantSampleTab">&nbsp;<label>Flower</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-FR_O_S" class="minimal" value="FR" maxlength="2" data-name="Sample-Plant Part-Fruit" data-section="PlantSampleTab">&nbsp;<label>Fruit</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SE_O_S" class="minimal" value="SE" maxlength="2" data-name="Sample-Plant Part-Seeds" data-section="PlantSampleTab">&nbsp;<label>Seeds</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-ST_O_S" class="minimal" value="ST" maxlength="2" data-name="Sample-Plant Part-Stem" data-section="PlantSampleTab">&nbsp;<label>Stem</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SH_O_S" class="minimal" value="SH" maxlength="2" data-name="Sample-Plant Part-Shoot" data-section="PlantSampleTab">&nbsp;<label>Shoot</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-RO_O_S" class="minimal" value="RO" maxlength="2" data-name="Sample-Plant Part-Root" data-section="PlantSampleTab">&nbsp;<label>Root</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-BR_O_S" class="minimal" value="BR" maxlength="2" data-name="Sample-Plant Part-Branch" data-section="PlantSampleTab">&nbsp;<label>Branch</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-TR_O_S" class="minimal" value="TR" maxlength="2" data-name="Sample-Plant Part-Trunk" data-section="PlantSampleTab">&nbsp;<label>Trunk</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>%Infested </label><select class="form-control" name="EntoInfestedPctCode_O_S" data-name="Sample-Percentage Infested" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Damage Level </label><select class="form-control" name="EntoDamageLevelCode_O_S" data-name="Sample-Damage Level" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Pest Level </label><select class="form-control" name="EntoPestLevelCode_O_S" data-name="Sample-Pest Level" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Life Stage</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="EntoLifeStgTab-A_O_S" class="minimal" value="A" maxlength="1" data-name="Sample-Life Stage-Adult" data-section="PlantSampleTab">&nbsp;<label>Adult</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="EntoLifeStgTab-E_O_S" class="minimal" value="E" maxlength="1" data-name="Sample-Life Stage-Egg" data-section="PlantSampleTab">&nbsp;<label>Egg</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="EntoLifeStgTab-I_O_S" class="minimal" value="I" maxlength="1" data-name="Sample-Life Stage-Immature" data-section="PlantSampleTab">&nbsp;<label>Immature</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="EntoLifeStgTab-P_O_S" class="minimal" value="P" maxlength="1" data-name="Sample-Life Stage-Pupae" data-section="PlantSampleTab">&nbsp;<label>Pupae</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-info" id="addPlantSampleAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantSampleAttachments"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="hidden" name="EndOfSample_O_S" class="minimal" maxlength="1" data-name="Sample-EoS" data-section="PlantSampleTab">&nbsp;&nbsp;</div></div></div>';
var pathbox = '<div class="row col-md-12 col-sm-12 col-xs-12 pathbox collapsed"><a href="#" class="btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="btn btn-md btn-danger text-arrows-2 removePathHost"><i class="fa fa-remove"></i></a><div class="row col-md-11 col-sm-10 col-xs-10 pl-0"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Taxon ID</label><input type="number" class="form-control taxonIDP" placeholder="Taxon ID" readonly name="PlantTaxonId_O_N" min="1" max="99999999" maxlength="8" data-name="Host-Taxon ID"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue badge-host mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Host Name</label><input type="text" class="form-control taxonTextP" placeholder="Host Name" name="PlantTaxonText_M_S" data-name="Host-Taxon Text" data-section="PlantObsTab"><input type="text" class="form-control taxonHTextP hide" name="PlantTaxonTextH_M_S" data-name="Host-Taxon Text" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType_M_S" data-name="Host-Statistic Type" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Count/Area</label><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty count" name="HostStatCount_M_N" min="0" max="99999999" maxlength="8" value="0" data-name="Host-Stat Count" data-section="PlantObsTab"><input type="number" class="qty area hide" name="HostStatAreaNo_M_N" min="0" max="99999999" maxlength="8" value="0" data-name="Host-Stat AreaNo" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="CheckFutureSurveyFlag_O_S" maxlength="1" class="minimal" data-name="Host-Check Future Survey Flag" data-section="PlantObsTab">&nbsp;<label>Flag</label></div></div><div class="row col-md-6 col-sm-6 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" maxlength="1" class="minimal" data-name="Host-External Photo Exist Flag" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Method of Observation</label><select class="form-control" name="PlantObsMethodCode_M_S" data-name="Host-Observation Method Code" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Host-Comments Text" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Life Stage</label><select class="form-control select2" name="PlantLifeStgCode_O_S" style="width: 100%;" data-name="Host-Life Stage Code" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Latitude</label><input type="number" class="form-control pathlat" name="Latitude" placeholder="Latitude" data-name="Host-Latitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Longitude</label><input type="number" class="form-control pathlng" name="Longitude" placeholder="Longitude" data-name="Host-Longitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><label>Datum</label><select class="form-control pathdat" name="GpsDatumId_O_S" data-name="Host-Datum" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><button class="btn btn-md btn-info getPathHostCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-6 col-sm-6 col-xs-12 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" readonly name="LocationPointWktClob_O_S" data-name="Host-LatLon" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 bg-target pathtarget"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Target Taxon ID</label><input type="number" name="TargetTaxonId_O_N" class="input-sm form-control taxonIDPT" placeholder="Target Taxon ID" readonly min="1" max="99999999" maxlength="8" data-name="Target-Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-9 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5 badge-target" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Target Taxon Name</label><input type="text" name="TargetTaxonText_M_S" class="input-sm form-control taxonTextPT" placeholder="Target Taxon Text" maxlength="50" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"><input type="text" class="form-control taxonHTextPT hide" name="TargetTaxonTextH_M_S" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optA" value="A" data-code="A" data-validate="Y" maxlength="1" data-name="Target-Not Observed" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optP" value="P" data-code="P" data-validate="Y" maxlength="1" data-name="Target-Present" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optS" value="S" data-code="S" data-validate="Y" maxlength="1" data-name="Target-Suspected" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optND" value="N" data-code="N" data-validate="Y" maxlength="1" data-name="Target-Not Done" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Comments</label><input type="text" name="CommentText_O_S" class="input-sm form-control" placeholder="Comments" maxlength="400" data-name="Target-Comments Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-md btn-default pull-right" data-action="addPathTarget"><i class="fa fa-plus text-info"></i>&nbsp;Add Target</button><a href="#" class="btn btn-sm btn-danger" data-action="removePathTarget">Delete</a></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-info" id="addPlantObsAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantObsAttachments"></div></div></div>';
var pathtarget = '<div class="row col-md-12 col-sm-12 col-xs-12 bg-target pathtarget"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Target Taxon ID</label><input type="number" name="TargetTaxonId_O_N" class="input-sm form-control taxonIDPT" placeholder="Target Taxon ID" readonly min="1" max="99999999" maxlength="8" data-name="Target-Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-9 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5 badge-target" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Target Taxon Name</label><input type="text" name="TargetTaxonText_M_S" class="input-sm form-control taxonTextPT" placeholder="Target Taxon Text" maxlength="50" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"><input type="text" class="form-control taxonHTextPT hide" name="TargetTaxonTextH_M_S" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optA" value="A" data-code="A" data-validate="Y" maxlength="1" data-name="Target-Not Observed" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optP" value="P" data-code="P" data-validate="Y" maxlength="1" data-name="Target-Present" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optS" value="S" data-code="S" data-validate="Y" maxlength="1" data-name="Target-Suspected" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optND" value="N" data-code="N" data-validate="Y" maxlength="1" data-name="Target-Not Done" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Comments</label><input type="text" name="CommentText_O_S" class="input-sm form-control" placeholder="Comments" maxlength="400" data-name="Target-Comments Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-md btn-default pull-right" data-action="addPathTarget"><i class="fa fa-plus text-info"></i>&nbsp;Add Target</button><a href="#" class="btn btn-sm btn-danger" data-action="removePathTarget">Delete</a></div></div>';
var pathsample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><a href="#" class="btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="btn btn-md btn-danger text-arrows-2 removePathSample"><i class="fa fa-remove"></i></a><div class="row col-md-11 col-sm-10 col-xs-10 pl-0"><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample Field ID </label><input type="text" class="form-control nextid" placeholder="Sample Field ID" name="SampleFieldLabelText_M_S" readonly data-name="Sample-Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Number Collected </label><input type="number" class="form-control" placeholder="Number Collected" name="CollectedSampleCount_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Number Collected" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText_O_S" maxlength="50" data-name="Sample-Linked Sample Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Preliminary Taxon ID </label><input type="number" class="form-control taxonIDPS" placeholder="Preliminary ID" name="PrelimTaxonId_O_N" readonly min="1" max="99999999" maxlength="8" data-name="Sample-Preliminary Taxon ID" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Preliminary Taxon Text </label><input type="text" class="form-control taxonTextPS" placeholder="Preliminary Taxon Text" name="PrelimTaxonText_M_S" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextPS hide" name="PrelimTaxonTextH_M_S" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Latitude </label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude" data-name="Sample-Latitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Longitude </label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude" data-name="Sample-Longitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Datum</label><select class="form-control sampledat" name="GpsDatumId_M_S" data-name="Sample-Datum" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><button class="btn btn-md btn-default getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-11 col-sm-11 col-xs-11 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" readonly name="SamplePointWktClob_M_S" data-name="Sample-LatLon" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Collected DateTime</label><input type="datetime-local" class="form-control" placeholder="Time" name="CollectedDatetime_M_D" step="1" data-name="Sample-Collected DateTime" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Altitude (Meters)</label><input type="number" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo_O_N" min="1" max="9999" maxlength="4" data-name="Sample-Collected Altitude Number" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="50" data-name="Sample-Comments Text" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-6"><input class="mxr-5 minimal" type="checkbox" name="AdditionalCollectorTab" data-name="Sample-Additional Collectors" data-section="PlantSampleTab">&nbsp;<label>Additional Collectors</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName1_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName2_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName3_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName4_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName5_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName6_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" class="minimal" maxlength="1" data-name="Sample-External Photos Exist Flag" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Preservation Type </label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-FR_M_S" class="minimal" value="FR" maxlength="2" data-name="Sample-Plant Preservation-Fresh" data-section="PlantSampleTab">&nbsp;<label>Fresh</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-PR_M_S" class="minimal" value="PR" maxlength="2" data-name="Sample-Plant Preservation-Pressed Specimen" data-section="PlantSampleTab">&nbsp;<label>Pressed Specimen</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-DE_M_S" class="minimal" value="DE" maxlength="2" data-name="Sample-Plant Preservation-Dessicate" data-section="PlantSampleTab">&nbsp;<label>Dessicate</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-EX_M_S" class="minimal" value="EX" maxlength="2" data-name="Sample-Plant Preservation-Extract" data-section="PlantSampleTab">&nbsp;<label>Extract</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-IS_M_S" class="minimal" value="IS" maxlength="2" data-name="Sample-Plant Preservation-Isolation" data-section="PlantSampleTab">&nbsp;<label>Isolation</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-O_M_S" class="minimal" value="O" maxlength="2" data-name="Sample-Plant Preservation-Other" data-section="PlantSampleTab">&nbsp;<label>Other</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control" placeholder="Other Preservation Type" name="PlantPreservOtherText_O_S" maxlength="50" data-name="Sample-Other Preservation Type Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Host/Other </label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" name="HostFlag_M_S" class="minimal" value="Y" data-code="Y" maxlength="1" data-name="Sample-Host Flag" data-section="PlantSampleTab">&nbsp;<label>Host</label></div>' +
    '<div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" name="HostFlag_M_S" class="minimal" value="N" data-code="N" maxlength="1" data-name="Sample-Other Flag" data-section="PlantSampleTab">&nbsp;<label>Other</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12 hide"><label>Host/Other Taxon Id</label><input type="number" class="form-control taxonIDHPS" placeholder="Other Name" name="HostTaxonId_O_N" readonly min="1" max="99999999" maxlength="8" data-name="Sample-Host Other Taxon ID" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Host/Other Taxon Text</label><input type="text" class="form-control taxonTextHPS" placeholder="Other Name" name="HostTaxonText_M_S" maxlength="50" data-name="Sample-Host Other Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextHPS hide" name="HostTaxonTextH_M_S" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Identified By</label><select class="form-control" name="HostIdentifiedUserId_O_N" data-name="Sample-Host Identified User ID" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Plant Part</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-LE_O_S" class="minimal" value="LE" maxlength="2" data-name="Sample-Plant Part-Leaves" data-section="PlantSampleTab">&nbsp;<label>Leaves</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-FL_O_S" class="minimal" value="FL" maxlength="2" data-name="Sample-Plant Part-Flower" data-section="PlantSampleTab">&nbsp;<label>Flower</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-FR_O_S" class="minimal" value="FR" maxlength="2" data-name="Sample-Plant Part-Fruit" data-section="PlantSampleTab">&nbsp;<label>Fruit</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SE_O_S" class="minimal" value="SE" maxlength="2" data-name="Sample-Plant Part-Seeds" data-section="PlantSampleTab">&nbsp;<label>Seeds</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-ST_O_S" class="minimal" value="ST" maxlength="2" data-name="Sample-Plant Part-Stem" data-section="PlantSampleTab">&nbsp;<label>Stem</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SH_O_S" class="minimal" value="SH" maxlength="2" data-name="Sample-Plant Part-Shoot" data-section="PlantSampleTab">&nbsp;<label>Shoot</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-RO_O_S" class="minimal" value="RO" maxlength="2" data-name="Sample-Plant Part-Root" data-section="PlantSampleTab">&nbsp;<label>Root</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-BR_O_S" class="minimal" value="BR" maxlength="2" data-name="Sample-Plant Part-Branch" data-section="PlantSampleTab">&nbsp;<label>Branch</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-TR_O_S" class="minimal" value="TR" maxlength="2" data-name="Sample-Plant Part-Trunk" data-section="PlantSampleTab">&nbsp;<label>Trunk</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-WP_O_S" class="minimal" value="WP" maxlength="2" data-name="Sample-Plant Part-Whole Plant" data-section="PlantSampleTab">&nbsp;<label>Whole Plant</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SO_O_S" class="minimal" value="SO" maxlength="2" data-name="Sample-Plant Part-Soil" data-section="PlantSampleTab">&nbsp;<label>Soil</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Symptoms</label><input type="text" class="form-control" placeholder="Symptoms" name="PathSymptomsText_O_S" maxlength="50" data-name="Sample-Symptoms Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Incidence </label><select class="form-control" name="PathIncidCode_O_S" data-name="Sample-Incidence" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Severity </label><select class="form-control" name="PathSevCode_O_S" data-name="Sample-Severity" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-info" id="addPlantSampleAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantSampleAttachments"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="hidden" name="EndOfSample_O_S" class="minimal" maxlength="1" data-name="Sample-EoS" data-section="PlantSampleTab">&nbsp;&nbsp;</div></div></div>';
var plantObsAttachment = '<div class="row col-md-12 col-sm-12 col-xs-12 PlantObsAttachment pl-0 pr-0 collapsed"><div class="form-group col-md-2 col-sm-2 col-xs-2"><img class="pp pull-right" src="images/plant.png" name="iPlantObsAttachment_M_S"></div><div class="form-group col-md-7 col-sm-8 col-xs-8"><input type="text" class="form-control" name="PlantObsAttachmentD_M_S" value=""><textarea class="form-control hide" name="PlantObsAttachment_M_S" rows="5" cols="5"></textarea></div><div class="form-group col-md-2 col-sm-1 col-xs-1"><i class="fa fa-remove text-info fa-2x removePlantObsAttachment" style="cursor:pointer;"></i></div></div>';
var plantSampleAttachment = '<div class="row col-md-12 col-sm-12 col-xs-12 PlantSampleAttachment pl-0 pr-0 collapsed"><div class="form-group col-md-2 col-sm-2 col-xs-2"><img class="pp pull-right" src="images/plant.png" name="iPlantSampleAttachment_M_S"></div><div class="form-group col-md-7 col-sm-8 col-xs-8"><input type="text" class="form-control" name="PlantSampleAttachmentD_M_S" value=""><textarea class="form-control hide" name="PlantSampleAttachment_M_S" rows="5" cols="5"></textarea></div><div class="form-group col-md-2 col-sm-1 col-xs-1"><i class="fa fa-remove text-info fa-2x removePlantSampleAttachment" style="cursor:pointer;"></i></div></div>';
var plantAttachment = '<div class="row col-md-12 col-sm-12 col-xs-12 PlantAttachment pl-0 pr-0 collapsed"><div class="form-group col-md-2 col-sm-2 col-xs-2"><img class="pp pull-right" src="images/plant.png" name="iPlantAttachment_M_S"></div><div class="form-group col-md-7 col-sm-8 col-xs-8"><input type="text" class="form-control" name="PlantAttachmentD_M_S" value=""><textarea class="form-control hide" name="PlantAttachment_M_S" rows="5" cols="5"></textarea></div><div class="form-group col-md-2 col-sm-1 col-xs-1"><i class="fa fa-remove text-info fa-2x removePlantAttachment" style="cursor:pointer;"></i></div></div>';
/* PH Initialized variables */
var track_id = '';      // Name/ID of the exercise
var watch_id = null;    // ID of the geolocation
var tracking_data = []; // Array containing GPS position objects
var elementc;
var mapc;
var trackCoords;
var myLatLng;
var paths = [];
var trackPath;

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
    //$('#mb6 .progText').text("Loading App Defaults ...");
    $.growl.notice({ title: "", message: "Loading ...", location: "bc", size: "small" });
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
        $.growl.error({ title: "", message: "An error occured while loading PH RefenceCodes. ", location: "tc", size: "large", fixed: "true" });
    });
    //Loading taxa data
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
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while loading Taxa Data. ", location: "tc", size: "large", fixed: "true" });
    });
    //Loading Activity Data
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
        $.growl.error({ title: "", message: "An error occured while loading Activity Data. " + err.message, location: "tc", size: "large", fixed: "true" });
    });
    //Loading Staff Data
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
    //Loading maps and Markers
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM observations WHERE id = ?", [1], function (tx, res) {
            //This is not the first load
            var arr = resSettings.settings.mapSets.filter(function (el) {
                return (el.activeFlag === 1);
            });
            ActiveMapSet = arr[0].mapsetID - 1;
            mapPath = arr[0].mapPath;
            emptyTilePath = arr[0].emptyTilePath;
            myCenter = new google.maps.LatLng(Number(arr[0].mapCenter.lat), Number(arr[0].mapCenter.lng));
            var mymap = new MyMapType();
            function MyMapType() { }
            MyMapType.prototype.tileSize = new google.maps.Size(256, 256);
            MyMapType.prototype.maxZoom = arr[0].endZoom;
            MyMapType.prototype.minZoom = arr[0].startZoom;
            MyMapType.prototype.name = "Offline Map";
            MyMapType.prototype.getTile = function (coord, zoom, ownerDocument) {
                zoomlevel.innerHTML = 'zoom: ' + zoom;
                curZoom = zoom;
                var div = ownerDocument.createElement('div');
                var image = $('<img name="" src="' + mapPath + zoom + "/" + coord.x + "/" + coord.y + '.jpg"/>');
                image.error(function () {
                    div.innerHTML = '<img name="" src="' + emptyTilePath + '"/>';
                });
                div.innerHTML = '<img name="" src="' + mapPath + zoom + "/" + coord.x + "/" + coord.y + '.jpg"/>';
                div.style.width = this.tileSize.width + 'px'; div.style.height = this.tileSize.height + 'px';
                return div;
            };
            var mapOptions = { zoom: arr[0].startZoom, center: myCenter, streetViewControl: false, panControl: false, zoomControl: false, mapTypeControl: false, scaleControl: false, overviewMapControl: false, mapTypeControlOptions: { mapTypeIds: ["xx"] } };
            map = new google.maps.Map(document.getElementById("map"), mapOptions); map.mapTypes.set('xx', mymap); map.setMapTypeId('xx');
            if (res.rows && res.rows.length > 0) {
                clearMarkers();
                loadMapMarkers();
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
                                //$.growl({ title: "", message: "Your changes have been saved!", location: "tc", size: "large", fixed: "true" });
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while loading observations to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
                            });
                        clearMarkers();
                        loadMapMarkers();
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
            loadSitePolygons();
            if ($("#modalProgress").data('bs.modal') && $("#modalProgress").data('bs.modal').isShown) { $('#modalProgress').modal('hide'); }
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while loading app settings. " + err.message, location: "tc", size: "large", fixed: "true" });
    });
}
function initLoad() {
        db = window.sqlitePlugin.openDatabase({ name: "sims.db", location: 'default' });
        db.transaction(function (tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS observations (id integer primary key, filedt text, data blob)");
            tx.executeSql("CREATE TABLE IF NOT EXISTS settings (id integer primary key, settingstext text, settingsval text default '{}')");
            tx.executeSql("CREATE TABLE IF NOT EXISTS phrefcodes (id integer primary key, settingstext text, settingsval text default '{}')");
            tx.executeSql("CREATE TABLE IF NOT EXISTS activitydata (id integer primary key, settingstext text, settingsval text default '{}')");
            tx.executeSql("CREATE TABLE IF NOT EXISTS staffdata (id integer primary key, settingstext text, settingsval text default '{}')");
            tx.executeSql("CREATE TABLE IF NOT EXISTS taxadata (id integer primary key, settingstext text, settingsval text default '{}')");
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
function loadMapMarkers() {
    db.readTransaction(function (tx) {
        tx.executeSql("SELECT * FROM observations WHERE id = ?", [1], function (tx, res) {
            if (res.rows && res.rows.length > 0) {
                results = JSON.parse(res.rows.item(0).data);
                for (var i = 0; i < results.observations.length; i++) {
                    if (results.observations[i].ObservationWhereWktClob_M_S && results.observations[i].ObservationWhereWktClob_M_S !== '') {
                        var wkt = new Wkt.Wkt();
                        wkt.read(results.observations[i].ObservationWhereWktClob_M_S);
                        wkt.toObject();
                        var latLng = new google.maps.LatLng(wkt.toJson().coordinates[1], wkt.toJson().coordinates[0]);
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
                var mcOptions = { gridSize: 50, maxZoom: 9, imagePath: 'mapfiles/markers2/m' };
                markerCluster = new MarkerClusterer(map, markers, mcOptions);
                google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
                    map.setCenter(cluster.getCenter());
                });
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
function checkMapBoundsByLoc(location) {
    var nM = new google.maps.Marker({
        position: location,
        map: map
    });
    var cLat = nM.getPosition().lat();
    var cLng = nM.getPosition().lng();
    var arr = resSettings.settings.mapSets.filter(function (el) {
        return (el.activeFlag === 1);
    });
    if (cLat < arr[0].mapBounds.bottomLat || cLat > arr[0].mapBounds.topLat || cLng < arr[0].mapBounds.leftLng || cLng > arr[0].mapBounds.rightLng) {
        $.growl.warning({ title: "", message: "Location is outside map bounds!", location: "tc", size: "large" });
        nM.setMap(null);
        //return false;
    }
    nM.setMap(null);
    return true;
}
function checkMapBoundsByPos(position) {
    var cLat = position.coords.latitude;
    var cLng = position.coords.longitude;
    var arr = resSettings.settings.mapSets.filter(function (el) {
        return (el.activeFlag === 1);
    });
    if (cLat < arr[0].mapBounds.bottomLat || cLat > arr[0].mapBounds.topLat || cLng < arr[0].mapBounds.leftLng || cLng > arr[0].mapBounds.rightLng) {
        $.growl.warning({ title: "", message: "Location is outside map bounds!", location: "tc", size: "large" });
        //return false;
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
            $.growl.warning({ title: "", message: "Location is outside site bounds!", location: "tc", size: "large" });
            return true;
            //return false;
        }
    }
    else {
        $.growl.warning({ title: "", message: "Location is outside site bounds!", location: "tc", size: "large" });
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
    if (!checkMapBoundsByLoc(location)) {
        newMarker.setMap(null);
    }
    else {
        curIdx = -1;
        switch (AppMode) {
            case 'IAH':
                $('#modalMenu').modal();
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
            if (checkMapBoundsByPos(position)) {
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                map.setZoom(11);
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
                $('#form1').find("input[type='number'][name^='AltitudeNo']").val(Math.round(position.coords.altitude.toFixed(5)));
            }
        }, function () {
            $.growl.error({ title: "", message: "GetAltitude Failed on this platform.", location: "tc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "GeoLocation Failed.", location: "tc", size: "large" });
    };
}
function downloadCSV() {
    $('#mt1').text('All Observations');
    switch (AppMode) {
        case "IAH":
            $('#modalGrid').modal();
            break;
        case "AH":
            $('#modalGrid').modal();
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
        case 0:
            loadModal('mo_sngObservation');
            break;
        case 1:
            loadModal('mo_grpObservation');
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
        //case "IAH":
        //    data = jQuery.grep(results.observations, function (n, i) {
        //        return (n.PlantDisciplineCode === 'S');
        //    });
        //    table = $('#srchTable').DataTable({
        //        "data": data,
        //        "columns": [
        //            { "data": "surveillanceActivity" },
        //            { "data": "commonName" },
        //            {
        //                "data": "sDate",
        //                "render": function (data, type, row, meta) {
        //                    return moment(data).format("DD/MM/YYYY");
        //                }
        //            },
        //            { "data": "latitude" },
        //            { "data": "longitude" },
        //            { "data": "datum" },
        //            { "data": "id" },
        //            {
        //                "data": "status",
        //                "render": function (data, type, row, meta) {
        //                    if (data === 0) return "Saved";
        //                    if (data === 1) return "Submitted";
        //                }
        //            },
        //            {
        //                "data": "discipline",
        //                "render": function (data, type, row, meta) {
        //                    if (data === 'S') return "Single";
        //                    if (data === 'G') return "Group";
        //                    if (data === 'B') return "Botany";
        //                    if (data === 'E') return "Entomology";
        //                    if (data === 'P') return "Pathology";
        //                }
        //            }
        //        ],
        //        "paging": true,
        //        "lengthChange": false,
        //        "searching": true,
        //        "ordering": true,
        //        "info": false
        //    });
        //    break;
        //case "AH":
        //    data = jQuery.grep(results.observations, function (n, i) {
        //        return (n.PlantDisciplineCode === 'S' || n.PlantDisciplineCode === 'G');
        //    });
        //    table = $('#srchTable').DataTable({
        //        "data": data,
        //        "columns": [
        //            { "data": "surveillanceActivity" },
        //            { "data": "commonName" },
        //            {
        //                "data": "sDate",
        //                "render": function (data, type, row, meta) {
        //                    return moment(data).format("DD/MM/YYYY");
        //                }
        //            },
        //            { "data": "latitude" },
        //            { "data": "longitude" },
        //            { "data": "datum" },
        //            { "data": "id" },
        //            {
        //                "data": "status",
        //                "render": function (data, type, row, meta) {
        //                    if (data === 0) return "Saved";
        //                    if (data === 1) return "Submitted";
        //                }
        //            },
        //            {
        //                "data": "discipline",
        //                "render": function (data, type, row, meta) {
        //                    if (data === 'S') return "Single";
        //                    if (data === 'G') return "Group";
        //                    if (data === 'B') return "Botany";
        //                    if (data === 'E') return "Entomology";
        //                    if (data === 'P') return "Pathology";
        //                }
        //            }
        //        ],
        //        "paging": true,
        //        "lengthChange": false,
        //        "searching": true,
        //        "ordering": true,
        //        "info": false
        //    });
        //    break;
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
$(document).on('click', '.export', function (event) {s
    //var args = [$('#srchPHTable_wrapper'), 'export.csv'];
    //exportTableToCSV.apply(this, args);
    exportObservationsToCSV();
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
                console.log("fileEntry is file?" + fileEntry.isFile.toString());
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        console.log("Successful file read...");
                        //readFile(fileEntry);
                    };
                    fileWriter.onerror = function (e) {
                        $.growl.error({ title: "", message: "Failed file read: " + e.toString(), location: "tc", size: "large" });
                    };
                    fileWriter.seek(0);
                    var blob = new Blob([csv], { type: 'text/plain' });
                    fileWriter.write(blob);
                    $.growl.notice({ title: "", message: 'File saved to Local folder.', location: "tc", size: "large" });
                });
            });
        });
    });
}
function objectifyForm(formArray) {//serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
    }
    return returnArray;
}
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}
function BindAutoComplete() {
    function log(message) {
        //$("<div>").text(message).prependTo("#log");
        //$("#log").scrollTop(0);
    }
    $(".taxonText").autocomplete({
        source: function (request, response) {
            var names = [];
            $.ajax({
                url: "http://ag-bie.ala.org.au/ws/auto",
                dataType: "json",
                data: {
                    q: request.term,
                    limit: 100
                },
                success: function (data) {
                    $.each(data.autoCompleteList, function () {
                        if (this.name) {
                            names.push(this.matchedNames[0]);
                        }
                        else {
                            names.push('Not Defined');
                        }
                    });
                    response(names);
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            log(ui.item ?
                "Selected: " + ui.item.label :
                "Nothing selected, input was " + this.value);
        },
        open: function () {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
}
function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}
function backupDatabase() {
    var fileName = cordova.file.applicationStorageDirectory + 'databases/sims.db';
    var directoryName = cordova.file.externalRootDirectory;

    window.resolveLocalFileSystemURL(fileName, function (fileEntry) {
        //console.log('[!] Database exists: ' + fileName);
        //console.log('[!] Storage: ' + directoryName);
        window.resolveLocalFileSystemURL(directoryName, function (directoryEntry) {
            //console.log('[!] Directory: ' + directoryEntry.toURL());
            directoryEntry.getDirectory("Backup", { create: true, exclusive: false }, function (bkupdirectoryEntry) {
                //console.log('[!] Directory: ' + bkupdirectoryEntry.toURL());
                fileEntry.copyTo(bkupdirectoryEntry, name, function (cpfileEntry) {
                    //console.log('[!] Copy success');
                    $.growl.notice({ title: "", message: "Observations backedup to local Backup folder.", location: "tc", size: "large" });
                }, function (error) {
                    //console.log('[!] Copy failed: ' + error.code);
                });
            }, function (error) {
                //console.log('[!] Backup Directory not found: ' + directoryName + 'Backup' + ' errorcode: ' + + error.code);
            })
        }, function (error) {
            //console.log('[!] Directory not found: ' + directoryName + ' errorcode: ' + + error.code);
        });
    }, function (error) {
        //console.log('[!] Database not found: ' + fileName + ' errorcode: ' + + error.code);
    });
}
function restoreDatabase() {
    $.confirm({
        title: 'Confirm Data Restore!',
        content: 'Do you want to restore from backup? You may lose few observations that were recorded after the last backup!',
        buttons: {
            Ok: function () {
                var fileName = cordova.file.externalRootDirectory + 'Backup/sims.db';
                var directoryName = cordova.file.applicationStorageDirectory + 'databases';

                window.resolveLocalFileSystemURL(fileName, function (fileEntry) {
                    //console.log('[!] Database exists: ' + fileName);
                    //console.log('[!] Storage: ' + directoryName);
                    window.resolveLocalFileSystemURL(directoryName, function (directoryEntry) {
                        //console.log('[!] Directory: ' + directoryEntry.toURL());
                        directoryEntry.getDirectory("Backup", { create: true, exclusive: false }, function (bkupdirectoryEntry) {
                            //console.log('[!] Directory: ' + bkupdirectoryEntry.toURL());
                            fileEntry.copyTo(bkupdirectoryEntry, name, function (cpfileEntry) {
                                //console.log('[!] Copy success');
                                $.growl({ title: "", message: "Observations restored to the application.", location: "tc", size: "large" });
                            }, function (error) {
                                //console.log('[!] Copy failed: ' + error.code);
                            });
                        }, function (error) {
                            //console.log('[!] Restore Directory not found: ' + directoryName + 'Backup' + ' errorcode: ' + + error.code);
                        })
                    }, function (error) {
                        //console.log('[!] Directory not found: ' + directoryName + ' errorcode: ' + + error.code);
                    });
                }, function (error) {
                    //console.log('[!] Database not found: ' + fileName + ' errorcode: ' + + error.code);
                });
            },
            cancel: function () {
                //close
            }
        }
    });
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
}
$(document).ready(function () {
    $('.modal-body').height($(window).height() / 1.4);
    $('.datetimepicker').datetimepicker({
        format: 'd-MMM-YYYY hh:mm Z',
        defaultDate: Date.now()
    });
    $('.datepicker').datepicker({
        format: 'd-MMM-YYYY hh:mm Z',
        todayHighlight: true,
        autoclose: true
    });
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
$(document).on('click', '#Save', function (e) {
    //var obj1 = JSON.stringify(objectifyForm(form1));
    var obj = objectifyPHFormforSave(form1);
    obj.status_M_N = 0;
    $.confirm({
        title: 'Payload Saved!',
        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
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
            $.growl({ title: "", message: "Your changes have been saved!", location: "tc", size: "large" });
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
});
$(document).on('click', '#SaveExit', function (e) {
    //var obj1 = JSON.stringify(objectifyForm(form1));
    var obj = objectifyPHFormforSave(form1);
    obj.status_M_N = 0;
    $.confirm({
        title: 'Payload Saved!',
        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
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
            $.growl({ title: "", message: "Your changes have been saved!", location: "tc", size: "large" });
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while updating row to DB. " + err.message, location: "tc", size: "large" });
    });
    $('#modalForm').modal('hide');
});
$(document).on('click', '#Submit2', function (e) {
    var rowsFailedErr = [];
    vError = 0;
    vErrDescription = [];
    vFailed = false;
    attachmentFlag = 0;
    CountListFlag = 0;
    HostStatCountFlag = 0;
    HostStatAreaFlag = 0;
    PlantPreservationOtherFlag = 0;
    PlantTargetObservedCodeFlag = 0;
    var obj = objectifyPHFormforSave(form1);
    //console.log(JSON.stringify(obj));
    var result = Iterate(obj);
    if (result.vError === 0) {
        //console.log(JSON.stringify(SubmitRecord(objectifyPHFormforSubmit(obj))));
        obj.status_M_N = 1;
        $.confirm({
            title: 'Payload marked for Submit!',
            content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="Payload">' + JSON.stringify(obj) + '</textarea></div>',
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
                $.growl({ title: "", message: "Observation marked for Sync.", location: "tc", size: "large" });
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
        $.growl.error({ title: "", message: "Submit Failed!<br/>" + rowsFailedErr.join('<br/>'), location: "tc", size: "large", fixed: "true" });
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
    })
        .complete(function (e) {
            $('#mb5').find('#appMode').val(AppMode);
            var arr = resSettings.settings.mapSets.filter(function (el) {
                return (el.activeFlag === 1);
            });
            $('#form3').find('input[name="optMaps"][data-id="' + (arr[0].mapsetID - 1) + '"]').iCheck('check');
            $('#form3').find('label.mapNotes').eq(arr[0].mapsetID - 1).text("Last downloaded on:" + arr[0].lastDownloadDate);
            $('#form3').find('select[id="deviceOwner"]').find('option').remove().end().append($(staffDataFull));
            if (resSettings.settings.device.ownerId) { $('#form3').find('select[id="deviceOwner"]').val(resSettings.settings.device.ownerId); }
            $('#form3').find('input[name="samplePrefix"]').val(resSettings.settings.device.samplePrefix);
            $('#form3').find('input[name="sampleCurrNum"]').val(resSettings.settings.device.currentSampleNumber);
            $('#form3').find('select[id="serverMode"]').val(resSettings.settings.app.serverMode);
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
                loadMapMarkers();
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
$(document).on('click', '.sync', function (event) {
    $.when(setTimeout(DisableForm(), 1000));
});
$(document).on('shown.bs.modal', '#modalPHGrid', function () {
    loadPHRefCodes();
    loadActivityData();
    loadstaffData();
    loadData();
    if (statusElem.innerHTML === 'online') {
        $('.sync').removeClass('hide'); 
    }
    if (statusElem.innerHTML === 'offline') {
        $('.sync').addClass('hide');
    }
});
$(document).on('hidden.bs.modal', '#modalPHGrid', function () {
    table.destroy();
});
$(document).on('shown.bs.modal', '#modalGrid', function () {
    loadAHDefaults();
    loadData();
});
$(document).on('hidden.bs.modal', '#modalGrid', function () {
    table.destroy();
});
$(document).on('hidden.bs.modal', '#modalForm', function () {
    //table.destroy();
    //loadAHDefaults();
    //loadData();
    clearMarkers();
    loadMapMarkers();
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
                            dd = '0' + dd
                        }
                        if (mm < 10) {
                            mm = '0' + mm
                        }
                        today = dd.toString() + '/' + mm.toString() + '/' + yyyy.toString();
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
                        clearMarkers();
                        results = JSON.parse(data);
                        for (var i = 0; i < results.observations.length; i++) {
                            if (results.observations[i].ObservationWhereWktClob_M_S && results.observations[i].ObservationWhereWktClob_M_S !== '') {
                                var wkt = new Wkt.Wkt();
                                wkt.read(results.observations[i].ObservationWhereWktClob_M_S);
                                wkt.toObject();
                                var latLng = new google.maps.LatLng(wkt.toJson().coordinates[1], wkt.toJson().coordinates[0]);
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
                        var mcOptions = { gridSize: 50, maxZoom: 9, imagePath: 'mapfiles/markers2/m' };
                        markerCluster = new MarkerClusterer(map, markers, mcOptions);
                        google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
                            map.setCenter(cluster.getCenter());
                        });
                        db.transaction(function (tx) {
                            tx.executeSql("UPDATE observations SET data = ?,filedt = ? WHERE id = ?", [JSON.stringify(results), today, 1], function (tx, res) {
                                //alert("Dataset updated.");
                                //$.growl({ title: "", message: "Your changes have been saved!", location: "tc", size: "large" });
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while updating data to DB. " + err.message, location: "tc", size: "large" });
                        });
                        $.growl.notice({ title: "", message: "Data reset complete!", location: "tc", size: "large" });
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
        content: 'Do you want to sync application data with the Server?<br/>Note that Observations will not be Synced!',
        buttons: {
            Ok: function () {
                syncPHRefCodes();
                syncActivityData();
                syncBPHstaffData();
                syncIPHstaffData();
                syncNPHstaffData();
                syncTaxaData();
                $.growl.notice({ title: "", message: "Sync Complete!.", location: "bc", size: "small" });
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '.showPayloads', function (e) {
    $.confirm({
        title: 'Activity Data',
        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadAD">' + JSON.stringify(ActivityData) + '</textarea></div>',
        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
        buttons: {
            Ok: function () {
                $.confirm({
                    title: 'PHRefCodes Data',
                    content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadPHRC">' + JSON.stringify(PHRefCodes) + '</textarea></div>',
                    columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                    buttons: {
                        Ok: function () {
                            $.confirm({
                                title: 'Staff Data',
                                content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadSD">' + JSON.stringify(staffDataBPH) + JSON.stringify(staffDataIPH) + JSON.stringify(staffDataNPH) + '</textarea></div>',
                                columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                                buttons: {
                                    Ok: function () {
                                        $.confirm({
                                            title: 'Taxa Data',
                                            content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadTD">' + JSON.stringify(taxaData) + '</textarea></div>',
                                            columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                                            buttons: {
                                                Ok: function () {
                                                    $.confirm({
                                                        title: 'Settings',
                                                        content: '<div class="form-group">' + '<textarea class="form-control" rows="10" cols="50" id="PayloadRS">' + JSON.stringify(resSettings) + '</textarea></div>',
                                                        columnClass: 'col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1',
                                                        buttons: {
                                                            Ok: function () { },
                                                            copy: {
                                                                text: 'Copy', // With spaces and symbols
                                                                action: function () {
                                                                    var copytext = this.$content.find("#PayloadRS");
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
$(document).on('click', '#btnData', function () {
    $('#postedData').toggleClass('hide');
});
$(document).on('change', 'input:checkbox', function (e) {
    e.preventDefault();
    if ($(this).is(":checked")) {
        $(this).val('Y');
    } else {
        $(this).val('N');
    }
});
$(document).on('click', '#newObservation', function () {
    curIdx = -2;
    switch (AppMode) {
        case 'IAH':
            $('#modalMenu').modal();
            break;
        case 'AH':
            $('#modalAHMenu').modal();
            break;
        case 'PH':
            //var zi = $('#modalPHGrid').css('z-index');
            //$('#modalPHMenu').css('z-index', zi + 100);
            $('#modalPHGrid').modal('hide');
            $('#modalPHMenu').modal();
            break;
    }
});
$(document).on('click', 'a.btnBackupData', function (e) {
    backupDatabase();
});
$(document).on('click', 'a.btnRestoreData', function (e) {
    restoreDatabase();
});
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
$(document).on('click', 'a.btnError', function (e) {
    e.preventDefault();
    var x = $(this).data("j");
    var y = $(this).data("k");
    var z = $(this).data("l");
    switch (y) {
        case 'H':
            $('#tab1').trigger('click');
            switch (curDiscipline) {
                case 'B':
                    $('.hostweed').find("[data-action=collapse]").trigger("click");
                    $('.hostweed').eq(z).find("[data-action=expand]").trigger("click");
                    break;
                case 'E':
                    $('.entobox').find("[data-action=collapse]").trigger("click");
                    $('.entobox').eq(z).find("[data-action=expand]").trigger("click");
                    break;
                case 'P':
                    $('.pathbox').find("[data-action=collapse]").trigger("click");
                    $('.pathbox').eq(z).find("[data-action=expand]").trigger("click");
                    break;
            }
            break;
        case 'T':
            $('#tab1').trigger('click');
            switch (curDiscipline) {
                case 'B':
                    $('.hostweed').find("[data-action=collapse]").trigger("click");
                    $('.hostweed').eq(z).find("[data-action=expand]").trigger("click");
                    break;
                case 'E':
                    $('.entobox').find("[data-action=collapse]").trigger("click");
                    $('.entobox').eq(z).find("[data-action=expand]").trigger("click");
                    break;
                case 'P':
                    $('.pathbox').find("[data-action=collapse]").trigger("click");
                    $('.pathbox').eq(z).find("[data-action=expand]").trigger("click");
                    break;
            }
            break;
        case 'S':
            $('#tab2').trigger('click');
            $('.sample').find("[data-action=collapse]").trigger("click");
            $('.sample').eq(z*1-1).find("[data-action=expand]").trigger("click");
            break;
        default:
            $('#tab0').trigger('click');
            break;
    }
    var u = $("#form1").find("[name='" + x + "']");
    if (u) { u.focus(); }
    $('div.growl-close').triggerHandler('click');
});
function exportObservationsToCSV() {
    var flatJSON = results.observations.map(record => flatten(record, {}, ''));
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
                        $.growl.notice({ title: "", message: 'File saved to Downloads folder.', location: "tc", size: "large" });
                    } else {
                        $.growl.notice({ title: "", message: 'File save failed!', location: "tc", size: "large" });
                    }
                });
            });
        } else {
            $.growl.notice({ title: "", message: 'Operation Cancelled!', location: "tc", size: "large" });
        }
    });
}
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
function getSurvActivity(id) {
    var arr = ActivityData.activities.filter(function (el) {
        return (el.activityId === id);
    });
    if (arr && arr.length > 0) { return arr[0].activityName; } else { return ""; }
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
function DisableForm() {
    $('#Download').removeClass('btn-default');
    $('#Download').attr('disabled', true);
    $('#Download').addClass('disabled');
    $('#Sync').removeClass('btn-info');
    $('#Sync').attr('disabled', true);
    $('#Sync').addClass('disabled');
    $('#newObservation').removeClass('btn-default');
    $('#newObservation').attr('disabled', true);
    $('#newObservation').addClass('disabled');

    $('#mb6 .progText').text("Sync in progress ...");
    $('#mb6 .progress').addClass('hide');
    $('#mb6 .fa-clock-o').addClass('hide');
    $('#modalProgress').modal();
    setTimeout(StartSync, 1000);
}
function StartSync() {
    var success = true;
    var noRowstoPush = true;
    var rowsFailed = [];
    var rowsFailedErr = [];
    var rowsSuccess = [];
    $.each(results.observations, function (index, value) {
        if (value.status_M_N === 0) { return true };
        noRowstoPush = false;
        vError = 0;
        vErrDescription = [];
        vFailed = false;
        CountListFlag = 0;
        HostStatCountFlag = 0;
        HostStatAreaFlag = 0;
        PlantPreservationOtherFlag = 0;
        PlantTargetObservedCodeFlag = 0;
        var rowid = value.id_M_N;
        var result = Iterate2(value);
        if (result.vError === 0) {
            var vpayload = JSON.stringify(SubmitRecord(objectifyPHFormforSubmit(value)));
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
            //var payload = {
            //    "value": vpayload.escapeSpecialChars() 
            //};
            $.ajax({
                method: "POST",
                async: false,
                url: submitPHObsAddress,
                //data: JSON.stringify(payload),
                data: vpayload.escapeSpecialChars(),
                contentType: "application/json",
                dataType: "json",
                headers: {
                    "authorization": authCode,
                    "cache-control": "no-cache"
                },
                success: function (data, textStatus, XmlHttpRequest) {
                    //$.growl({ title: "", message: "Success! Observations synced to cloud.", location: "tc", size: "large" });  
                    if (XmlHttpRequest.status === 200) {
                        //$.growl({ title: "", message: "Observation Sync'd!", location: "bc" });
                        logRecord(vpayload.escapeSpecialChars() + "\r\n");
                    }
                    rowsSuccess.push(index);
                },
                complete: function () {
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
            rowsFailedErr.push(result.vErrDescription);
            success = false;
            return false;
        }
    });
    if (success === true && noRowstoPush === false) {
        rowsSuccess.sort();
        rowsSuccess.reverse();
        $.each(rowsSuccess, function (index, value) {
            results.observations.splice(value, 1);
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                //alert("Dataset updated.");
                //$.growl({ title: "", message: "Success! Observations " + rowsSuccess.join(',') + " synced to cloud.", location: "tc", size: "large" });
                //$.growl({ title: "", message: "Observations synced to cloud.", location: "tc", size: "large" });
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating records to database. " + err.message, location: "tc", size: "large" });
        });
    }
    else if (success === false && noRowstoPush === false) { $.growl.error({ title: "", message: "Submit Failed for rows:" + rowsFailed.join(',') + "<br/>" + rowsFailedErr.join('<br/>'), location: "tc", size: "large", fixed: "true" }); }
    else if (success === true && noRowstoPush === true) { $.growl.notice({ title: "", message: "No records to Sync.", location: "tc", size: "large" }); }
    syncPHRefCodes();
    syncActivityData();
    syncBPHstaffData();
    syncIPHstaffData();
    syncNPHstaffData();
    syncTaxaData();
    table.destroy();
    loadData();
    clearMarkers();
    loadMapMarkers();
    if (infoWindow) {
        infoWindow.close();
    }
    setTimeout(EnableForm(), 1000);
}
function EnableForm() {
    $('#Download').addClass('btn-default');
    $('#Sync').addClass('btn-info');
    $('#newObservation').addClass('btn-default');
    $('#Download').attr('disabled', false);
    $('#Download').removeClass('disabled');
    $('#Sync').attr('disabled', false);
    $('#Sync').removeClass('disabled');
    $('#newObservation').attr('disabled', false);
    $('#newObservation').removeClass('disabled');
    $('#mb6 .progText').text("");
    $('#modalProgress').modal('hide');
}
function logRecord(record) {
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
        fs.getDirectory("Logs", { create: true, exclusive: false }, function (dirEntry) {
            dirEntry.getFile("log" + today + ".txt", { create: true, exclusive: false }, function (fileEntry) {
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
function fetchSettings() {
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM settings WHERE id = ?", [1], function (tx, res) {
            //This is not the first load
            if (res.rows && res.rows.length > 0) {
                resSettings = JSON.parse(res.rows.item(0).settingsval);
                //console.log('0-' + JSON.stringify(resSettings));
                fetchServerDetails();
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
                                //$.growl({ title: "", message: "Your changes have been saved!", location: "tc", size: "large", fixed: "true" });
                            });
                        }, function (err) {
                            $.growl.error({ title: "", message: "An error occured while updating settings to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
                            });
                        fetchServerDetails();
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
function fetchServerDetails() {
    AppMode = resSettings.settings.app.appMode;
    settings.innerHTML = AppMode;
    ServerMode = resSettings.settings.app.serverMode;
    appEnv.innerHTML = ServerMode;
    devServerAddress = resSettings.settings.app.devServerAddress;
    sitServerAddress = resSettings.settings.app.sitServerAddress;
    uatServerAddress = resSettings.settings.app.uatServerAddress;
    prodServerAddress = resSettings.settings.app.prodServerAddress;
    switch (ServerMode) {
        case "DEV":
            ServerAddress = devServerAddress;
            break;
        case "SIT":
            ServerAddress = sitServerAddress;
            break;
        case "UAT":
            ServerAddress = uatServerAddress;
            break;
        case "PROD":
            ServerAddress = prodServerAddress;
            break;
    }
    authAddress = ServerAddress + resSettings.settings.app.authAddress;
    ActivityAddress = ServerAddress + resSettings.settings.app.activityAddress;
    refCodesAddress = ServerAddress + resSettings.settings.app.refCodesAddress;
    BPHStaffAddress = ServerAddress + resSettings.settings.app.BPHStaffAddress;
    IPHStaffAddress = ServerAddress + resSettings.settings.app.IPHStaffAddress;
    NPHStaffAddress = ServerAddress + resSettings.settings.app.NPHStaffAddress;
    taxaAddress = ServerAddress + resSettings.settings.app.taxaAddress;
    submitPHObsAddress = ServerAddress + resSettings.settings.app.submitPHObsAddress;
}
function clearCache() {
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
}