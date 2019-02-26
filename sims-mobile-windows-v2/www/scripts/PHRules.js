/* PH Initialized variables */
var siteData;
var curSiteData;
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
var vError = 0;
var vErrDescription = [];
var vFailed = false;
var attachmentFlag = 0;
var plantDisciplineCode;
var CountListFlag;
var HostStatCountFlag = 0;
var HostStatAreaFlag = 0;
var PlantTargetObservedCodeFlag = 0;
var PlantPreservationOtherFlag = 0;
var PHRefCodes;
var ActivityData;
var programId;
var taxaData;
var taxaBotEnt;
var taxaBotPath;
var lastSiteValue;
var lastSurvActValue;
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
var FSFlag = 0;
var FSFlagNum = 0;
var hostweed = '<div class="row col-md-12 col-sm-12 col-xs-12 hostweed collapsed"><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-6"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Plant Name</label></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removePlant"><i class="fa fa-remove"></i></a></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Taxon ID</label><input type="number" class="form-control taxonIDB" placeholder="Taxon ID" name="PlantTaxonId_O_N" min="0" max="99999999" maxlength="8" data-name="Plant-Taxon ID"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control taxonTextB" placeholder="Host Name" name="PlantTaxonText_M_S" data-name="Plant-Taxon Text" data-section="PlantObsTab"><input type="text" class="form-control taxonHTextB hide" name="PlantTaxonTextH_M_S" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="radio" class="minimal" name="CountList_M_S" value="Count" data-code="Count" data-validate="Y" maxlength="1" data-name="Count List Option" data-section="PlantObsTab">&nbsp;<label><span class="bold-red">*&nbsp;</span>Count</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="radio" class="minimal" name="CountList_M_S" value="List" data-code="List" data-validate="Y" maxlength="1" data-name="Count List Option" data-section="PlantObsTab">&nbsp;<label>List</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12 countArea hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType_M_S" data-name="Plant-Statistic Type" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Count/Area</label><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty count" name="HostStatCount_M_N" value="0" min="0" max="99999999" maxlength="8" data-name="Plant-HostStat Count" data-section="PlantObsTab"><input type="number" class="qty area" name="HostStatAreaNo_M_N" value="0" min="0" max="99999999" maxlength="8" data-name="Plant-HostStat AreaNo" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="CheckFutureSurveyFlag_O_S" class="minimal" maxlength="1" data-name="Plant-Check Future Survey Flag" data-section="PlantObsTab">&nbsp;<label>Flag</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" class="minimal" maxlength="1" data-name="Plant-External Photo Flag" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Plant-Comments Text" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Latitude</label><input type="number" class="form-control hostweedlat" name="Latitude_O_N" placeholder="Latitude" data-name="Plant-Latitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Longitude</label><input type="number" class="form-control hostweedlng" name="Longitude_O_N" placeholder="Longitude" data-name="Plant-Longitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-6"><label>Datum</label><select class="form-control hostweeddat" name="GpsDatumId_O_S" data-name="Plant-Datum" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-6"><button class="btn btn-md btn-default getPlantCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" name="LocationPointWktClob_O_S" data-name="Plant-LatLon" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-default" id="addPlantObsAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantObsAttachments"></div></div></div>';
var botSample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample FieldID </label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeBotSample"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control nextid" placeholder="Sample Field ID" name="SampleFieldLabelText_M_S" data-name="Sample-Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Number of Units </label><input type="number" class="form-control" placeholder="Number of Units" name="CollectedSampleCount_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Number of Units" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText_O_S" maxlength="50" data-name="Sample-Linked Sample Field Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Preliminary Taxon ID </label><input type="number" class="form-control taxonIDBS" placeholder="Preliminary ID" name="PrelimTaxonId_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Preliminary Taxon ID" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Preliminary Taxon Text </label><input type="text" class="form-control taxonTextBS" placeholder="Preliminary Taxon Text" name="PrelimTaxonText_M_S" maxlength="50" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextBS hide" name="PrelimTaxonTextH_M_S" data-name="Host-Taxon ID" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Latitude </label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude_M_N" data-name="Sample-Latitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Longitude </label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude_M_N" data-name="Sample-Longitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-6"><label><span class="bold-red">*&nbsp;</span>Datum</label><select class="form-control sampledat" name="GpsDatumId_M_S" data-name="Sample-Datum" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-6"><button class="btn btn-md btn-default getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-6 col-sm-6 col-xs-11 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" name="SamplePointWktClob_M_S" data-name="Sample-LatLon" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Collected DateTime</label><input type="datetime-local" class="form-control" placeholder="Time" name="CollectedDatetime_M_D" step="1" data-name="Sample-Collected DateTime" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Altitude (Meters)</label><input type="text" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo_O_N" maxlength="4" data-name="Sample-Collected Altitude Number" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Sample-Comments Text" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input class="mxr-5 minimal" type="checkbox" name="AdditionalCollectors_O_S" data-name="Sample-Additional Collectors" data-section="PlantSampleTab">&nbsp;<label>Additional Collectors</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName1_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName2_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName3_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName4_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName5_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName6_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Habit </label><input type="text" class="form-control" placeholder="Habit" name="HabitText_O_S" maxlength="200" data-name="Sample-Habit Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Description </label><input type="text" class="form-control" placeholder="Description" name="DetailedDescriptionText_O_S" maxlength="400" data-name="Sample-Detailed Description" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Habitat </label><input type="text" class="form-control" placeholder="Habitat" name="HabitatText_O_S" maxlength="400" data-name="Sample-Habitat Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Landform </label><input type="text" class="form-control" placeholder="LandForm" name="LandformText_O_S" maxlength="200" data-name="Sample-Landform" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Soil/Geology </label><input type="text" class="form-control" placeholder="Soil/Geology" name="SoilGeologyText_O_S" maxlength="200" data-name="Sample-Soil Geology" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Abundance</label><input type="text" class="form-control" placeholder="Abundance" name="AbundanceText_O_S" maxlength="200" data-name="Sample-Abundance" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" class="minimal" maxlength="1" data-name="Sample-External Photo Exists Flag" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Preservation Type</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-SP_O_S" class="minimal" data-attr="PlantPreservationTab" data-code="SP" data-desc="Spirit Sample" data-seq="1" maxlength="2" data-name="Sample-Plant Preservation-Spirit Sample" data-section="PlantSampleTab">&nbsp;<label>Spirit Sample</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-DN_O_S" class="minimal" data-attr="PlantPreservationTab" data-code="DN" data-desc="DNA Sample" data-seq="2" maxlength="2" data-name="Sample-Plant Preservation-DNA Sample" data-section="PlantSampleTab">&nbsp;<label>DNA Sample</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-O_O_S" class="minimal" data-attr="PlantPreservationTab" data-code="O" data-desc="Other" data-seq="3" maxlength="2" data-name="Sample-Plant Preservation-Other" data-section="PlantSampleTab">&nbsp;<label>Other</label>&nbsp;</div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Plant Preservation-Other Comments</label><input type="text" class="form-control" placeholder="Other Text" name="PlantPreservOtherText_O_S" maxlength="50" data-name="Sample-Plant Preservation-Other Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-default" id="addPlantSampleAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantSampleAttachments"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="hidden" name="EndOfSample_O_S" class="minimal" maxlength="1" data-name="Sample-EoS" data-section="PlantSampleTab">&nbsp;&nbsp;</div></div></div>';
var entobox = '<div class="row col-md-12 col-sm-12 col-xs-12 entobox collapsed"><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-6"><span data-toggle="tooltip" title="" class="badge bg-gray-blue badge-host mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Host Name</label></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeEntoHost"><i class="fa fa-remove"></i></a></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Taxon ID</label><input type="number" class="form-control taxonIDE" placeholder="Taxon ID" name="PlantTaxonId_O_N" min="1" max="99999999" maxlength="8" data-name="Host-Taxon ID"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control taxonTextE" placeholder="Host Name" name="PlantTaxonText_M_S" data-section="PlantObsTab" data-name="Host-Taxon Text"><input type="text" class="form-control taxonHTextE hide" name="PlantTaxonTextH_M_S" data-section="PlantObsTab" data-name="Plant-Taxon Text"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType_M_S" data-name="Host-Statistic Type" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Count/Area</label><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty count" name="HostStatCount_M_N" min="0" max="99999999" maxlength="8" value="0" data-name="Host-Stat Count" data-section="PlantObsTab"><input type="number" class="qty area hide" name="HostStatAreaNo_M_N" min="0" max="99999999" maxlength="8" value="0" data-name="Host-Stat AreaNo" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="CheckFutureSurveyFlag_O_S" maxlength="1" class="minimal" data-name="Host-Check Future Survey Flag" data-section="PlantObsTab">&nbsp;<label>Flag</label></div></div><div class="row col-md-6 col-sm-6 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" maxlength="1" class="minimal" data-name="Host-External Photo Exist Flag" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Method of Observation</label><select class="form-control" name="PlantObsMethodCode_M_S" data-name="Host-Observation Method Code" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText_O_S" maxlength="400" style="height:60px;" data-name="Host-Comments Text" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Life Stage</label><select class="form-control select2" name="EntoLifeStgCode_O_S" style="width: 100%;" data-name="Host-Life Stage Code" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Host Plant Status</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantStatusFruitingFlag_O_S" class="minimal" value="FR" maxlength="2" data-name="Host-Status Fruiting Flag" data-section="PlantObsTab">&nbsp;<label>Fruiting</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantStatusFloweringFlag_O_S" class="minimal" value="FL" maxlength="2" data-name="Host-Status Flowering Flag" data-section="PlantObsTab">&nbsp;<label>Flowering</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantStatusFlushingFlag_O_S" class="minimal" value="FU" maxlength="2" data-name="Host-Status Flushing Flag" data-section="PlantObsTab">&nbsp;<label>Flushing</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantStatusDeadWoodFlag_O_S" class="minimal" value="DE" maxlength="2" data-name="Host-Status Deadwood Flag" data-section="PlantObsTab">&nbsp;<label>Deadwood</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Latitude</label><input type="number" class="form-control entolat" name="Latitude_O_N" placeholder="Latitude" data-name="Host-Latitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Longitude</label><input type="number" class="form-control entolng" name="Longitude_O_N" placeholder="Longitude" data-name="Host-Longitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-6"><label>Datum</label><select class="form-control entodat" name="GpsDatumId_O_S" data-name="Host-Datum" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-6"><button class="btn btn-md btn-info getEntoHostCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-6 col-sm-6 col-xs-12 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" name="LocationPointWktClob_O_S" data-name="Host-LatLon" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 bg-target entotarget"><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Target Taxon Id</label><input type="number" name="TargetTaxonId_O_N" class="input-sm form-control taxonIDET" placeholder="Target Taxon ID" min="1" max="99999999" maxlength="8" data-name="Target-Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5 badge-target" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Target Taxon Name</label><input type="text" name="TargetTaxonText_M_S" class="input-sm form-control taxonTextET" placeholder="Target Taxon Text" maxlength="50" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"><input type="text" class="form-control taxonHTextET hide" name="TargetTaxonTextH_M_S" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Target Count</label><input type="number" name="TargetCount_O_N" class="input-sm form-control" placeholder="Target Count" min="1" max="99999999" maxlength="8" data-name="Target-Count" data-section="PlantObsTargetTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optA" value="A" data-code="A" data-validate="Y" maxlength="1" data-name="Target-Not Observed" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optP" value="P" data-code="P" data-validate="Y" maxlength="1" data-name="Target-Present" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optS" value="S" data-code="S" data-validate="Y" maxlength="1" data-name="Target-Suspected" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optND" value="N" data-code="N" data-validate="Y" maxlength="1" data-name="Target-Not Done" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Comments</label><input type="text" name="CommentText_O_S" class="input-sm form-control" placeholder="Comments" maxlength="400" data-name="Target-Comments Text" data-section="PlantObsTargetTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-md btn-default pull-right" data-action="addEntoTarget"><i class="fa fa-plus text-info"></i>&nbsp;Add Target</button><a href="#" class="btn btn-xs btn-danger" data-action="removeEntoTarget">Delete</a></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-info" id="addPlantObsAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantObsAttachments"></div></div></div>';
var entotarget = '<div class="row col-md-12 col-sm-12 col-xs-12 bg-target entotarget"><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Target Taxon Id</label><input type="number" name="TargetTaxonId_O_N" class="input-sm form-control taxonIDET" placeholder="Target Taxon ID" min="1" max="99999999" maxlength="8" data-name="Target-Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5 badge-target" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Target Taxon Name</label><input type="text" name="TargetTaxonText_M_S" class="input-sm form-control taxonTextET" placeholder="Target Taxon Text" maxlength="50" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"><input type="text" class="form-control taxonHTextET hide" name="TargetTaxonTextH_M_S" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Target Count</label><input type="text" name="TargetCount_O_N" class="input-sm form-control" placeholder="Target Count" min="1" max="99999999" maxlength="8" data-name="Target-Count" data-section="PlantObsTargetTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optA" value="A" data-code="A" data-validate="Y" maxlength="1" data-name="Target-Not Observed" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optP" value="P" data-code="P" data-validate="Y" maxlength="1" data-name="Target-Present" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optS" value="S" data-code="S" data-validate="Y" maxlength="1" data-name="Target-Suspected" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optND" value="N" data-code="N" data-validate="Y" maxlength="1" data-name="Target-Not Done" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Comments</label><input type="text" name="CommentText_O_S" class="input-sm form-control" placeholder="Comments" maxlength="400" data-name="Target-Comments Text" data-section="PlantObsTargetTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-md btn-default pull-right" data-action="addEntoTarget"><i class="fa fa-plus text-info"></i>&nbsp;Add Target</button><a href="#" class="btn btn-xs btn-danger" data-action="removeEntoTarget">Delete</a></div></div></div>';
var entosample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample FieldID </label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><div class="form-group col-md-12 col-sm-12 col-xs-12"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeEntoSample"><i class="fa fa-remove"></i></a></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control nextid" placeholder="Sample Field ID" name="SampleFieldLabelText_M_S" data-name="Sample-Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Number of Units </label><input type="number" class="form-control" placeholder="Number of Units" name="CollectedSampleCount_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Number of Units" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText_O_S" maxlength="50" data-name="Sample-Linked Sample Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Preliminary Taxon ID </label><input type="number" class="form-control taxonIDES" placeholder="Preliminary ID" name="PrelimTaxonId_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Preliminary Taxon ID" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Preliminary Taxon Text </label><input type="text" class="form-control taxonTextES" placeholder="Preliminary Taxon Text" name="PrelimTaxonText_M_S" maxlength="50" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextES hide" name="PrelimTaxonTextH_M_S" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Latitude </label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude_M_N" data-name="Sample-Latitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Longitude </label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude_M_N" data-name="Sample-Longitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-6"><label><span class="bold-red">*&nbsp;</span>Datum</label><select class="form-control sampledat" name="GpsDatumId_M_S" data-name="Sample-Datum" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-6"><button class="btn btn-md btn-default getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-11 col-sm-11 col-xs-11 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" name="SamplePointWktClob_M_S" data-name="Sample-LatLon" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Collected DateTime</label><input type="datetime-local" class="form-control" placeholder="Time" name="CollectedDatetime_M_D" step="1" data-name="Sample-Collected DateTime" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Altitude (Meters)</label><input type="text" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo_O_N" maxlength="4" data-name="Sample-Collected Altitude Number" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Sample-Comments Text" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input class="mxr-5 minimal" type="checkbox" name="AdditionalCollectors_O_S" data-name="Sample-Additional Collectors" data-section="PlantSampleTab">&nbsp;<label>Additional Collectors</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName1_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName2_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName3_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName4_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName5_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName6_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" class="minimal" maxlength="1" data-name="Sample-External Photos Exist Flag" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Preservation Type</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-W7_O_S" class="minimal" value="W7" maxlength="2" data-name="Sample-Plant Preservation-Wet Ethanol" data-section="PlantSampleTab">&nbsp;<label>Wet (Ethanol 70-80%)</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-W8_O_S" class="minimal" value="W8" maxlength="2" data-name="Sample-Plant Preservation-Wet Ethanol" data-section="PlantSampleTab">&nbsp;<label>Wet (Ethanol>80%)</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-RE_O_S" class="minimal" value="RE" maxlength="2" data-name="Sample-Plant Preservation-Rearing" data-section="PlantSampleTab">&nbsp;<label>Rearing</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-DR_O_S" class="minimal" value="DR" maxlength="2" data-name="Sample-Plant Preservation-Dry" data-section="PlantSampleTab">&nbsp;<label>Dry</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-FT_O_S" class="minimal" value="FT" maxlength="2" data-name="Sample-Plant Preservation-FTA Card" data-section="PlantSampleTab">&nbsp;<label>FTA Card</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-O_O_S" class="minimal" value="O" maxlength="2" data-name="Sample-Plant Preservation-Other" data-section="PlantSampleTab">&nbsp;<label>Other</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Plant Preservation-Other Comments</label><input type="text" class="form-control" placeholder="Other Preservation Type" name="PlantPreservOtherText_O_S" maxlength="50" data-name="Sample-Plant Preservation Other Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6"><label><span class="bold-red">*&nbsp;</span>Host/Other </label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" name="HostFlag_M_S" class="minimal" value="Y" data-code="Y" maxlength="1" data-name="Sample-HostOther Flag" data-section="PlantSampleTab">&nbsp;<label>Host</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" name="HostFlag_M_S" class="minimal" value="N" data-code="N" maxlength="1" data-name="Sample-HostOther Flag" data-section="PlantSampleTab">&nbsp;<label>Other</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12 hide"><label>Host/Other Taxon Id</label><input type="number" class="form-control taxonIDHES" placeholder="Other Name" name="HostTaxonId_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Field Label" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Host/Other Taxon Text</label><input type="text" class="form-control taxonTextHES" placeholder="Other Name" name="HostTaxonText_M_S" maxlength="50" data-name="Sample-Host Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextHES hide" name="HostTaxonTextH_M_S" data-name="Sample-Host Taxon Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Identified By</label><select class="form-control" name="HostIdentifiedUserId_O_N" data-name="Sample-Host Identified User ID" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Collection Method</label><select class="form-control" name="EntoCollMethodCode_M_S" data-name="Sample-Collection Method" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Plant Part</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-LE_O_S" class="minimal" value="LE" maxlength="2" data-name="Sample-Plant Part-Leaves" data-section="PlantSampleTab">&nbsp;<label>Leaves</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-FL_O_S" class="minimal" value="FL" maxlength="2" data-name="Sample-Plant Part-Flower" data-section="PlantSampleTab">&nbsp;<label>Flower</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-FR_O_S" class="minimal" value="FR" maxlength="2" data-name="Sample-Plant Part-Fruit" data-section="PlantSampleTab">&nbsp;<label>Fruit</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SE_O_S" class="minimal" value="SE" maxlength="2" data-name="Sample-Plant Part-Seeds" data-section="PlantSampleTab">&nbsp;<label>Seeds</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-ST_O_S" class="minimal" value="ST" maxlength="2" data-name="Sample-Plant Part-Stem" data-section="PlantSampleTab">&nbsp;<label>Stem</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SH_O_S" class="minimal" value="SH" maxlength="2" data-name="Sample-Plant Part-Shoot" data-section="PlantSampleTab">&nbsp;<label>Shoot</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-RO_O_S" class="minimal" value="RO" maxlength="2" data-name="Sample-Plant Part-Root" data-section="PlantSampleTab">&nbsp;<label>Root</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-BR_O_S" class="minimal" value="BR" maxlength="2" data-name="Sample-Plant Part-Branch" data-section="PlantSampleTab">&nbsp;<label>Branch</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-TR_O_S" class="minimal" value="TR" maxlength="2" data-name="Sample-Plant Part-Trunk" data-section="PlantSampleTab">&nbsp;<label>Trunk</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>%Infested </label><select class="form-control" name="EntoInfestedPctCode_O_S" data-name="Sample-Percentage Infested" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Damage Level </label><select class="form-control" name="EntoDamageLevelCode_O_S" data-name="Sample-Damage Level" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Pest Level </label><select class="form-control" name="EntoPestLevelCode_O_S" data-name="Sample-Pest Level" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Life Stage</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="EntoLifeStgTab-A_O_S" class="minimal" value="A" maxlength="1" data-name="Sample-Life Stage-Adult" data-section="PlantSampleTab">&nbsp;<label>Adult</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="EntoLifeStgTab-E_O_S" class="minimal" value="E" maxlength="1" data-name="Sample-Life Stage-Egg" data-section="PlantSampleTab">&nbsp;<label>Egg</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="EntoLifeStgTab-I_O_S" class="minimal" value="I" maxlength="1" data-name="Sample-Life Stage-Immature" data-section="PlantSampleTab">&nbsp;<label>Immature</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="EntoLifeStgTab-P_O_S" class="minimal" value="P" maxlength="1" data-name="Sample-Life Stage-Pupae" data-section="PlantSampleTab">&nbsp;<label>Pupae</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-default" id="addPlantSampleAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantSampleAttachments"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="hidden" name="EndOfSample_O_S" class="minimal" maxlength="1" data-name="Sample-EoS" data-section="PlantSampleTab">&nbsp;&nbsp;</div></div></div>';
var pathbox = '<div class="row col-md-12 col-sm-12 col-xs-12 pathbox collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-6"><span data-toggle="tooltip" title="" class="badge bg-gray-blue badge-host mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Host Name</label></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removePathHost"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Taxon ID</label><input type="number" class="form-control taxonIDP" placeholder="Taxon ID" name="PlantTaxonId_O_N" min="1" max="99999999" maxlength="8" data-name="Host-Taxon ID"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control taxonTextP" placeholder="Host Name" name="PlantTaxonText_M_S" data-name="Host-Taxon Text" data-section="PlantObsTab"><input type="text" class="form-control taxonHTextP hide" name="PlantTaxonTextH_M_S" data-name="Host-Taxon Text" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType_M_S" data-name="Host-Statistic Type" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Count/Area</label><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty count" name="HostStatCount_M_N" min="0" max="99999999" maxlength="8" value="0" data-name="Host-Stat Count" data-section="PlantObsTab"><input type="number" class="qty area hide" name="HostStatAreaNo_M_N" min="0" max="99999999" maxlength="8" value="0" data-name="Host-Stat AreaNo" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="CheckFutureSurveyFlag_O_S" maxlength="1" class="minimal" data-name="Host-Check Future Survey Flag" data-section="PlantObsTab">&nbsp;<label>Flag</label></div></div><div class="row col-md-6 col-sm-6 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" maxlength="1" class="minimal" data-name="Host-External Photo Exist Flag" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Method of Observation</label><select class="form-control" name="PlantObsMethodCode_O_S" data-name="Host-Observation Method Code" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Host-Comments Text" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Life Stage</label><select class="form-control select2" name="PlantLifeStgCode_O_S" style="width: 100%;" data-name="Host-Life Stage Code" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Latitude</label><input type="number" class="form-control pathlat" name="Latitude_O_N" placeholder="Latitude" data-name="Host-Latitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Longitude</label><input type="number" class="form-control pathlng" name="Longitude_O_N" placeholder="Longitude" data-name="Host-Longitude" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-6"><label>Datum</label><select class="form-control pathdat" name="GpsDatumId_O_S" data-name="Host-Datum" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-6"><button class="btn btn-md btn-default getPathHostCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-6 col-sm-6 col-xs-12 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" name="LocationPointWktClob_O_S" data-name="Host-LatLon" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 bg-target pathtarget"><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Target Taxon ID</label><input type="number" name="TargetTaxonId_O_N" class="input-sm form-control taxonIDPT" placeholder="Target Taxon ID" min="1" max="99999999" maxlength="8" data-name="Target-Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5 badge-target" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Target Taxon Name</label><input type="text" name="TargetTaxonText_M_S" class="input-sm form-control taxonTextPT" placeholder="Target Taxon Text" maxlength="50" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"><input type="text" class="form-control taxonHTextPT hide" name="TargetTaxonTextH_M_S" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optA" value="A" data-code="A" data-validate="Y" maxlength="1" data-name="Target-Not Observed" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optP" value="P" data-code="P" data-validate="Y" maxlength="1" data-name="Target-Present" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optS" value="S" data-code="S" data-validate="Y" maxlength="1" data-name="Target-Suspected" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optND" value="N" data-code="N" data-validate="Y" maxlength="1" data-name="Target-Not Done" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Comments</label><input type="text" name="CommentText_O_S" class="input-sm form-control" placeholder="Comments" maxlength="400" data-name="Target-Comments Text" data-section="PlantObsTargetTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-md btn-default pull-right" data-action="addPathTarget"><i class="fa fa-plus text-info"></i>&nbsp;Add Target</button><a href="#" class="btn btn-xs btn-danger" data-action="removePathTarget">Delete</a></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-default" id="addPlantObsAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantObsAttachments"></div></div></div>';
var pathtarget = '<div class="row col-md-12 col-sm-12 col-xs-12 bg-target pathtarget"><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12 hide"><label>Target Taxon ID</label><input type="number" name="TargetTaxonId_O_N" class="input-sm form-control taxonIDPT" placeholder="Target Taxon ID" min="1" max="99999999" maxlength="8" data-name="Target-Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5 badge-target" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Target Taxon Name</label><input type="text" name="TargetTaxonText_M_S" class="input-sm form-control taxonTextPT" placeholder="Target Taxon Text" maxlength="50" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"><input type="text" class="form-control taxonHTextPT hide" name="TargetTaxonTextH_M_S" data-name="Target-Taxon Text" data-section="PlantObsTargetTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optA" value="A" data-code="A" data-validate="Y" maxlength="1" data-name="Target-Not Observed" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optP" value="P" data-code="P" data-validate="Y" maxlength="1" data-name="Target-Present" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optS" value="S" data-code="S" data-validate="Y" maxlength="1" data-name="Target-Suspected" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" class="minimal" name="TargetObservedCode_M_S" id="optND" value="N" data-code="N" data-validate="Y" maxlength="1" data-name="Target-Not Done" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Comments</label><input type="text" name="CommentText_O_S" class="input-sm form-control" placeholder="Comments" maxlength="400" data-name="Target-Comments Text" data-section="PlantObsTargetTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-md btn-default pull-right" data-action="addPathTarget"><i class="fa fa-plus text-info"></i>&nbsp;Add Target</button><a href="#" class="btn btn-xs btn-danger" data-action="removePathTarget">Delete</a></div></div></div>';
var pathsample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample FieldID </label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><div class="form-group col-md-12 col-sm-12 col-xs-12"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removePathSample"><i class="fa fa-remove"></i></a></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control nextid" placeholder="Sample Field ID" name="SampleFieldLabelText_M_S" data-name="Sample-Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Number of Units </label><input type="number" class="form-control" placeholder="Number of Units" name="CollectedSampleCount_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Number of Units" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText_O_S" maxlength="50" data-name="Sample-Linked Sample Field Label" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12 hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Preliminary Taxon ID </label><input type="number" class="form-control taxonIDPS" placeholder="Preliminary ID" name="PrelimTaxonId_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Preliminary Taxon ID" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Preliminary Taxon Text </label><input type="text" class="form-control taxonTextPS" placeholder="Preliminary Taxon Text" name="PrelimTaxonText_M_S" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextPS hide" name="PrelimTaxonTextH_M_S" data-name="Sample-Preliminary Taxon Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Latitude </label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude_M_N" data-name="Sample-Latitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Longitude </label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude_M_N" data-name="Sample-Longitude" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-6"><label><span class="bold-red">*&nbsp;</span>Datum</label><select class="form-control sampledat" name="GpsDatumId_M_S" data-name="Sample-Datum" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-xs-6"><button class="btn btn-md btn-default getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div><div class="form-group col-md-11 col-sm-11 col-xs-11 hide"><label><span class="bold-red">*&nbsp;</span>Point WKT</label><input type="text" class="form-control" name="SamplePointWktClob_M_S" data-name="Sample-LatLon" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Collected DateTime</label><input type="datetime-local" class="form-control" placeholder="Time" name="CollectedDatetime_M_D" step="1" data-name="Sample-Collected DateTime" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Altitude (Meters)</label><input type="text" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo_O_N" maxlength="4" data-name="Sample-Collected Altitude Number" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText_O_S" style="height:60px;" maxlength="400" data-name="Sample-Comments Text" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input class="mxr-5 minimal" type="checkbox" name="AdditionalCollectors_O_S" data-name="Sample-Additional Collectors" data-section="PlantSampleTab">&nbsp;<label>Additional Collectors</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName1_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName2_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName3_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12 addlCollectors hide"><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName4_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName5_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><select class="form-control" name="AdditionalCollectorName6_O_S" data-name="Sample-Additional Collector" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="checkbox" name="ExternalPhotoExistFlag_O_S" class="minimal" maxlength="1" data-name="Sample-External Photos Exist Flag" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Preservation Type </label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-FR_M_S" class="minimal" value="FR" maxlength="2" data-name="Sample-Plant Preservation-Fresh" data-section="PlantSampleTab">&nbsp;<label>Fresh</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-PR_M_S" class="minimal" value="PR" maxlength="2" data-name="Sample-Plant Preservation-Pressed Specimen" data-section="PlantSampleTab">&nbsp;<label>Pressed Specimen</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-DE_M_S" class="minimal" value="DE" maxlength="2" data-name="Sample-Plant Preservation-Dessicate" data-section="PlantSampleTab">&nbsp;<label>Dessicate</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-EX_M_S" class="minimal" value="EX" maxlength="2" data-name="Sample-Plant Preservation-Extract" data-section="PlantSampleTab">&nbsp;<label>Extract</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-IS_M_S" class="minimal" value="IS" maxlength="2" data-name="Sample-Plant Preservation-Isolation" data-section="PlantSampleTab">&nbsp;<label>Isolation</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPreservationTab-O_M_S" class="minimal" value="O" maxlength="2" data-name="Sample-Plant Preservation-Other" data-section="PlantSampleTab">&nbsp;<label>Other</label></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Plant Preservation-Other Comments</label><input type="text" class="form-control" placeholder="Other Text" name="PlantPreservOtherText_O_S" maxlength="50" data-name="Sample-Plant Preservation-Other Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Host/Other </label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" name="HostFlag_M_S" class="minimal" value="Y" data-code="Y" maxlength="1" data-name="Sample-Host Flag" data-section="PlantSampleTab">&nbsp;<label>Host</label></div><div class="form-group col-md-3 col-sm-3 col-xs-12"><input type="radio" name="HostFlag_M_S" class="minimal" value="N" data-code="N" maxlength="1" data-name="Sample-Other Flag" data-section="PlantSampleTab">&nbsp;<label>Other</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12 hide"><label>Host/Other Taxon Id</label><input type="number" class="form-control taxonIDHPS" placeholder="Other Name" name="HostTaxonId_O_N" min="1" max="99999999" maxlength="8" data-name="Sample-Host Other Taxon ID" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Host/Other Taxon Text</label><input type="text" class="form-control taxonTextHPS" placeholder="Other Name" name="HostTaxonText_M_S" maxlength="50" data-name="Sample-Host Other Taxon Text" data-section="PlantSampleTab"><input type="text" class="form-control taxonHTextHPS hide" name="HostTaxonTextH_M_S" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Identified By</label><select class="form-control" name="HostIdentifiedUserId_O_N" data-name="Sample-Host Identified User ID" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Plant Part</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-LE_O_S" class="minimal" value="LE" maxlength="2" data-name="Sample-Plant Part-Leaves" data-section="PlantSampleTab">&nbsp;<label>Leaves</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-FL_O_S" class="minimal" value="FL" maxlength="2" data-name="Sample-Plant Part-Flower" data-section="PlantSampleTab">&nbsp;<label>Flower</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-FR_O_S" class="minimal" value="FR" maxlength="2" data-name="Sample-Plant Part-Fruit" data-section="PlantSampleTab">&nbsp;<label>Fruit</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SE_O_S" class="minimal" value="SE" maxlength="2" data-name="Sample-Plant Part-Seeds" data-section="PlantSampleTab">&nbsp;<label>Seeds</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-ST_O_S" class="minimal" value="ST" maxlength="2" data-name="Sample-Plant Part-Stem" data-section="PlantSampleTab">&nbsp;<label>Stem</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SH_O_S" class="minimal" value="SH" maxlength="2" data-name="Sample-Plant Part-Shoot" data-section="PlantSampleTab">&nbsp;<label>Shoot</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-RO_O_S" class="minimal" value="RO" maxlength="2" data-name="Sample-Plant Part-Root" data-section="PlantSampleTab">&nbsp;<label>Root</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-BR_O_S" class="minimal" value="BR" maxlength="2" data-name="Sample-Plant Part-Branch" data-section="PlantSampleTab">&nbsp;<label>Branch</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-TR_O_S" class="minimal" value="TR" maxlength="2" data-name="Sample-Plant Part-Trunk" data-section="PlantSampleTab">&nbsp;<label>Trunk</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-WP_O_S" class="minimal" value="WP" maxlength="2" data-name="Sample-Plant Part-Whole Plant" data-section="PlantSampleTab">&nbsp;<label>Whole Plant</label></div><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PlantPartTab-SO_O_S" class="minimal" value="SO" maxlength="2" data-name="Sample-Plant Part-Soil" data-section="PlantSampleTab">&nbsp;<label>Soil</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Symptoms</label><input type="text" class="form-control" placeholder="Symptoms" name="PathSymptomsText_O_S" maxlength="50" data-name="Sample-Symptoms Text" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Incidence </label><select class="form-control" name="PathIncidCode_O_S" data-name="Sample-Incidence" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Severity </label><select class="form-control" name="PathSevCode_O_S" data-name="Sample-Severity" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><hr /></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0"><div class="form-group col-md-12 col-sm-12 col-xs-12 text-center"><button type="button" class="btn btn-md btn-default" id="addPlantSampleAttachment"><i class="fa fa-plus"></i>&nbsp;Add Attachment</button></div></div><div class="row col-md-12 col-sm-12 col-xs-12 pr-0" id="PlantSampleAttachments"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-12 col-sm-12 col-xs-12"><input type="hidden" name="EndOfSample_O_S" class="minimal" maxlength="1" data-name="Sample-EoS" data-section="PlantSampleTab">&nbsp;&nbsp;</div></div></div>';
var plantObsAttachment = '<div class="row col-md-12 col-sm-12 col-xs-12 PlantObsAttachment pl-0 pr-0 collapsed"><div class="form-group col-md-2 col-sm-2 col-xs-2"><img class="pp pull-right" src="images/plant.png" name="iPlantObsAttachment_M_S"></div><div class="form-group col-md-7 col-sm-8 col-xs-8"><input type="text" class="form-control" name="PlantObsAttachmentD_M_S" value=""><textarea class="form-control hide" name="PlantObsAttachment_M_S" rows="5" cols="5"></textarea></div><div class="form-group col-md-2 col-sm-1 col-xs-1"><i class="fa fa-remove text-info fa-2x removePlantObsAttachment" style="cursor:pointer;"></i></div></div>';
var plantSampleAttachment = '<div class="row col-md-12 col-sm-12 col-xs-12 PlantSampleAttachment pl-0 pr-0 collapsed"><div class="form-group col-md-2 col-sm-2 col-xs-2"><img class="pp pull-right" src="images/plant.png" name="iPlantSampleAttachment_M_S"></div><div class="form-group col-md-7 col-sm-8 col-xs-8"><input type="text" class="form-control" name="PlantSampleAttachmentD_M_S" value=""><textarea class="form-control hide" name="PlantSampleAttachment_M_S" rows="5" cols="5"></textarea></div><div class="form-group col-md-2 col-sm-1 col-xs-1"><i class="fa fa-remove text-info fa-2x removePlantSampleAttachment" style="cursor:pointer;"></i></div></div>';
var plantAttachment = '<div class="row col-md-12 col-sm-12 col-xs-12 PlantAttachment pl-0 pr-0 collapsed"><div class="form-group col-md-2 col-sm-2 col-xs-2"><img class="pp pull-right" src="images/plant.png" name="iPlantAttachment_M_S"></div><div class="form-group col-md-7 col-sm-8 col-xs-8"><input type="text" class="form-control" name="PlantAttachmentD_M_S" value=""><textarea class="form-control hide" name="PlantAttachment_M_S" rows="5" cols="5"></textarea></div><div class="form-group col-md-2 col-sm-1 col-xs-1"><i class="fa fa-remove text-info fa-2x removePlantAttachment" style="cursor:pointer;"></i></div></div>';
/* PH Initialized variables */

function syncPHRefCodes() {
    // Loading Activity Defaults //
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": refCodesAddress,
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
        PHRefCodes = data;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM phrefcodes", [], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting PHRefCodes from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO phrefcodes (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'refcodes', JSON.stringify(PHRefCodes)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating PHRefCodes to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE phrefcodes SET settingsval = ? WHERE id = ?", [JSON.stringify(PHRefCodes), 1], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating PHRefCodes to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching PH Reference Codes. " + response.responseText, location: "tc", size: "large", fixed: "true" });
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
function syncTaxaData() {
    var Taxasettings = {
        "async": false,
        "crossDomain": true,
        "url": taxaAddress,
        "method": "GET",
        "beforeSend": function () {
            //$.growl.notice({ title: "", message: "Syncing Taxa Data ...", location: "bc", size: "small" });
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
            $.growl.error({ title: "", message: "An error occured while deleting Taxa Data from database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO taxadata (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'taxa', JSON.stringify(taxaData)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating Taxa Data to database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE taxadata SET settingsval = ? WHERE id = ?", [JSON.stringify(taxaData), 1], function (tx, res) {
                //alert("Dataset updated.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating Taxa Data to database. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    }).fail(function (response) {
        $.growl.error({ title: "", message: "An error occurred while fetching Taxa Data. " + response.responseText, location: "tc", size: "large", fixed: "true" });
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
    });
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    });
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
    });
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    });
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    $('#samples').append(that);
    $('#numSamples').text(esamples);
    BindAutoCompleteES(that.find('.taxonTextES'));
    BindAutoCompleteHES(that.find('.taxonTextHES'));
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
    });
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    });
    //that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    $('#samples').append(that);
    $('#numSamples').text(psamples);
    BindAutoCompletePS(that.find('.taxonTextPS'));
    BindAutoCompleteHPS(that.find('.taxonTextHPS'));
}
function getNextID(e) {
    //Read from DB
    var nextID = resSettings.settings.device.currentSampleNumber * 1 + 1;
    resSettings.settings.device.currentSampleNumber = nextID;
    db.transaction(function (tx) {
        tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
            //alert("Row inserted.");
            //$("#form1").find('input[type="text"].nextid').last().val(e + pad(nextID.toString(), 6));
            $("#form1").find('input[type="text"].nextid').last().val(e + nextID.toString());
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while incrementing ID. " + err.message, location: "tc", size: "large" });
    });
}
function loadModal(pagename) {
    var x = 0;
    var y = 0;
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
            bsamples = 0;
            esamples = 0;
            psamples = 0;
            numPlants = 0;
            numEntoHosts = 0;
            numEntoTargets = 0;
            numPathHosts = 0;
            numPathTargets = 0;
            numAttachments = 0;
            numObsAttachments = 0;
            numSampleAttachments = 0;
        }
    }).complete(function (e) {
        $('#form1').find("input[type=text],input[type=date],input[type=number], textarea").val("");
        $('#form1').find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
        $('#form1').find("input[type='radio'].minimal").iCheck('uncheck');
        setTimeout(function (e) {
            loadPHRefCodes();
            loadActivityData();
            if (curIdx > -1) {
                var curActivity = results.observations[curPos].SurvActivityId_M_N;
                refreshActivityData(curActivity);
            }
            loadstaffData();
        }, 300);
        setTimeout(function (e) {
            if (curIdx > -1) {
                var data = results.observations[curPos];
                //console.log(JSON.stringify(data));
                //console.time('load Modal');
                $.each(data, function (key, value) {
                    //console.time('load Modal 1');
                    if (key.startsWith('ObservationWhereWktClob') && value !== "") {
                        var wkt = new Wkt.Wkt();
                        wkt.read(value);
                        wkt.toObject();
                        $('#form1').find("input[name^='Longitude']").val(wkt.toJson().coordinates[0]);
                        $('#form1').find("input[name^='Latitude']").val(wkt.toJson().coordinates[1]);
                    }
                    if (key === "AdditionalObserverTab" && value.length > 0) {
                        //$('#form1').find("input[type='checkbox'][name^='AdditionalObservers']").iCheck('check');
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
                    if (key === "PlantObsTab" && curDiscipline === "B" && value.length > 0) {
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
                                    $('div.hostweed').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='N']").iCheck('uncheck');
                                    $('div.hostweed').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.hostweed').eq(key1).find("input:not([name^='CountList'])[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 === "attachments") {
                                        $.each(value2.attachment, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    $('div.hostweed').eq(key1).find("#addPlantObsAttachment").trigger("click");
                                                }
                                            }).complete(function (e) {
                                                if (value3.content !== "") {
                                                    $('div.hostweed').eq(key1).find("input[name^='PlantObsAttachmentD_M_S_" + x + "_H']").val(value3.description);
                                                    $('div.hostweed').eq(key1).find("img[name^='iPlantObsAttachment_M_S_" + x + "_H']").attr("src", "data:image/jpeg;base64," + value3.content);
                                                    $('div.hostweed').eq(key1).find("textarea[name^='PlantObsAttachment_M_S_" + x + "_H']").val(value3.content);
                                                }
                                                if (value3.content === "") {
                                                    $('div.hostweed').eq(key1).find("input[name^='PlantObsAttachmentD_M_S_" + x + "_H']").val(value3.description);
                                                    $('div.hostweed').eq(key1).find("img[name^='iPlantObsAttachment_M_S_" + x + "_H']").attr("src", "images/plant.png");
                                                    $('div.hostweed').eq(key1).find("textarea[name^='PlantObsAttachment_M_S_" + x + "_H']").val("");
                                                }
                                                x++;
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key === "PlantObsTab" && curDiscipline === "E" && value.length > 0) {
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
                                    $('div.entobox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='N']").iCheck('uncheck');
                                    $('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    //$('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 === "PlantObsTargetTab") {
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
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='Y']").iCheck('check');
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='N']").iCheck('uncheck');
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    //$('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("select[name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("textarea[name^='" + key4 + "']").val(value4);
                                                });
                                            });
                                        });
                                    }
                                    if (key2 === "attachments") {
                                        $.each(value2.attachment, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    $('div.entobox').eq(key1).find("#addPlantObsAttachment").trigger("click");
                                                }
                                            }).complete(function (e) {
                                                if (value3.content !== "") {
                                                    $('div.entobox').eq(key1).find("input[name^='PlantObsAttachmentD_M_S_" + x + "_H']").val(value3.description);
                                                    $('div.entobox').eq(key1).find("img[name^='iPlantObsAttachment_M_S_" + x + "_H']").attr("src", "data:image/jpeg;base64," + value3.content);
                                                    $('div.entobox').eq(key1).find("textarea[name^='PlantObsAttachment_M_S_" + x + "_H']").val(value3.content);
                                                }
                                                if (value3.content === "") {
                                                    $('div.entobox').eq(key1).find("input[name^='PlantObsAttachmentD_M_S_" + x + "_H']").val(value3.description);
                                                    $('div.entobox').eq(key1).find("img[name^='iPlantObsAttachment_M_S_" + x + "_H']").attr("src", "images/plant.png");
                                                    $('div.entobox').eq(key1).find("textarea[name^='PlantObsAttachment_M_S_" + x + "_H']").val("");
                                                }
                                                x++;
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key === "PlantObsTab" && curDiscipline === "P" && value.length > 0) {
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
                                    $('div.pathbox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='N']").iCheck('uncheck');
                                    $('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    //$('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 === "PlantObsTargetTab") {
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
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='Y']").iCheck('check');
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='N']").iCheck('uncheck');
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    //$('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("select[name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("textarea[name^='" + key4 + "']").val(value4);
                                                });
                                            });
                                        });
                                    }
                                    if (key2 === "attachments") {
                                        $.each(value2.attachment, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    $('div.pathbox').eq(key1).find("#addPlantObsAttachment").trigger("click");
                                                }
                                            }).complete(function (e) {
                                                if (value3.content !== "") {
                                                    $('div.pathbox').eq(key1).find("input[name^='PlantObsAttachmentD_M_S_" + x + "_H']").val(value3.description);
                                                    $('div.pathbox').eq(key1).find("img[name^='iPlantObsAttachment_M_S_" + x + "_H']").attr("src", "data:image/jpeg;base64," + value3.content);
                                                    $('div.pathbox').eq(key1).find("textarea[name^='PlantObsAttachment_M_S_" + x + "_H']").val(value3.content);
                                                }
                                                if (value3.content === "") {
                                                    $('div.pathbox').eq(key1).find("input[name^='PlantObsAttachmentD_M_S_" + x + "_H']").val(value3.description);
                                                    $('div.pathbox').eq(key1).find("img[name^='iPlantObsAttachment_M_S_" + x + "_H']").attr("src", "images/plant.png");
                                                    $('div.pathbox').eq(key1).find("textarea[name^='PlantObsAttachment_M_S_" + x + "_H']").val("");
                                                }
                                                x++;
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key === "PlantSampleTab" && curDiscipline === "B" && value.length > 0) {
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
                                    if (key2 === "AdditionalCollectorTab") {
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        if (value2.length > 0) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectors']").iCheck('check');
                                            $.each(value2, function (key3, value3) {
                                                $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                            });
                                        } else { $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectors']").iCheck('uncheck').val("N"); }
                                    }
                                    if (key2 === "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 === "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='N']").iCheck('uncheck');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    //$('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 === "attachments") {
                                        $.each(value2.attachment, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    $('div.sample').eq(key1).find("#addPlantSampleAttachment").trigger("click");
                                                }
                                            }).complete(function (e) {
                                                pkey = key3 + 1;
                                                if (value3.content !== "") {
                                                    $('div.sample').eq(key1).find("input[name^='PlantSampleAttachmentD_M_S_" + y + "_S']").val(value3.description);
                                                    $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment_M_S_" + y + "_S']").attr("src", "data:image/jpeg;base64," + value3.content);
                                                    $('div.sample').eq(key1).find("textarea[name^='PlantSampleAttachment_M_S_" + y + "_S']").val(value3.content);
                                                }
                                                if (value3.content === "") {
                                                    $('div.sample').eq(key1).find("input[name^='PlantSampleAttachmentD_M_S_" + y + "_S']").val(value3.description);
                                                    $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment_M_S_" + y + "_S']").attr("src", "images/plant.png");
                                                    $('div.sample').eq(key1).find("textarea[name^='PlantSampleAttachment_M_S_" + y + "_S']").val("");
                                                }
                                                y++;
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key === "PlantSampleTab" && curDiscipline === "E" && value.length > 0) {
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
                                    if (key2 === "AdditionalCollectorTab") {
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        if (value2.length > 0) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectors']").iCheck('check');
                                            $.each(value2, function (key3, value3) {
                                                $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                            });
                                        } else { $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectors']").iCheck('uncheck').val("N"); }
                                    }
                                    if (key2 === "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 === "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 === "EntoLifeStgTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='N']").iCheck('uncheck');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    //$('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2 === "attachments") {
                                        $.each(value2.attachment, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    $('div.sample').eq(key1).find("#addPlantSampleAttachment").trigger("click");
                                                }
                                            }).complete(function (e) {
                                                pkey = key3 + 1;
                                                if (value3.content !== "") {
                                                    $('div.sample').eq(key1).find("input[name^='PlantSampleAttachmentD_M_S_" + y + "_S']").val(value3.description);
                                                    $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment_M_S_" + y + "_S']").attr("src", "data:image/jpeg;base64," + value3.content);
                                                    $('div.sample').eq(key1).find("textarea[name^='PlantSampleAttachment_M_S_" + y + "_S']").val(value3.content);
                                                }
                                                if (value3.content === "") {
                                                    $('div.sample').eq(key1).find("input[name^='PlantSampleAttachmentD_M_S_" + y + "_S']").val(value3.description);
                                                    $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment_M_S_" + y + "_S']").attr("src", "images/plant.png");
                                                    $('div.sample').eq(key1).find("textarea[name^='PlantSampleAttachment_M_S_" + y + "_S']").val("");
                                                }
                                                y++;
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key === "PlantSampleTab" && curDiscipline === "P" && value.length > 0) {
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
                                    if (key2 === "AdditionalCollectorTab") {
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        if (value2.length > 0) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectors']").iCheck('check');
                                            $.each(value2, function (key3, value3) {
                                                $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                            });
                                        } else { $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectors']").iCheck('uncheck').val("N"); }
                                    }
                                    if (key2 === "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 === "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='N']").iCheck('uncheck');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    //$('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                                    if (key2.startsWith('CollectedAltitudeNo') && value > 0) { $('div.sample').eq(key1).find("input[name='CollectedAltitudeNo_O_N']").val(value); }
                                    if (key2.startsWith('CollectedAltitudeNo') && value === 0) { $('div.sample').eq(key1).find("input[name='CollectedAltitudeNo_O_N']").val(""); }
                                    if (key2 === "attachments") {
                                        $.each(value2.attachment, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    $('div.sample').eq(key1).find("#addPlantSampleAttachment").trigger("click");
                                                }
                                            }).complete(function (e) {
                                                pkey = key3 + 1;
                                                if (value3.content !== "") {
                                                    $('div.sample').eq(key1).find("input[name^='PlantSampleAttachmentD_M_S_" + y + "_S']").val(value3.description);
                                                    $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment_M_S_" + y + "_S']").attr("src", "data:image/jpeg;base64," + value3.content);
                                                    $('div.sample').eq(key1).find("textarea[name^='PlantSampleAttachment_M_S_" + y + "_S']").val(value3.content);
                                                }
                                                if (value3.content === "") {
                                                    $('div.sample').eq(key1).find("input[name^='PlantSampleAttachmentD_M_S_" + y + "_S']").val(value3.description);
                                                    $('div.sample').eq(key1).find("img[name^='iPlantSampleAttachment_M_S_" + y + "_S']").attr("src", "images/plant.png");
                                                    $('div.sample').eq(key1).find("textarea[name^='PlantSampleAttachment_M_S_" + y + "_S']").val("");
                                                }
                                                y++;
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key === "attachments") {
                        $.each(value.attachment, function (key3, value3) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $('#form1').find("#addPlantAttachment").trigger("click");
                                }
                            }).complete(function (e) {
                                if (value3.content !== "") {
                                    $('#form1').find("input[name^='PlantAttachmentD_M_S_" + key3 + "']").val(value3.description);
                                    $('#form1').find("img[name^='iPlantAttachment_M_S_" + key3 + "']").attr("src", "data:image/jpeg;base64," + value3.content);
                                    $('#form1').find("textarea[name^='PlantAttachment_M_S_" + key3 + "']").val(value3.content);
                                }
                                if (value3.content === "") {
                                    $('#form1').find("input[name^='PlantAttachmentD_M_S_" + key3 + "']").val(value3.description);
                                    $('#form1').find("img[name^='iPlantAttachment_M_S_" + key3 + "']").attr("src", "images/plant.png");
                                    $('#form1').find("textarea[name^='PlantAttachment_M_S_" + key3 + "']").val("");
                                }
                            });
                        });
                    }
                    $('#form1').find("input[type='text'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='date'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='datetime-local'][name^='" + key + "']").val(value);
                    $('#form1').find("input:not([name^='WaypointNumber'])[type='number'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name^='" + key + "'][value='Y']").iCheck('check');
                    $('#form1').find("input[type='checkbox'][name^='" + key + "'][value='N']").iCheck('uncheck');
                    $('#form1').find("input[type='radio'][name^='" + key + "'][value='" + value + "']").iCheck('check');
                    //$('#form1').find("input[type='radio'][name^='" + key + "']").val(value);
                    $('#form1').find("select[name^='" + key + "']").val(value);
                    $('#form1').find("textarea[name^='" + key + "']").val(value);
                    if (key.startsWith('WaypointNumber') && value > 0) { $('#form1').find("input[name='WaypointNumber_O_N']").val(value); }
                    if (key.startsWith('WaypointNumber') && value === 0) { $('#form1').find("input[name='WaypointNumber_O_N']").val(""); }
                    if (key.startsWith('AltitudeNo') && value > 0) { $('#form1').find("input[name='AltitudeNo_O_N']").val(value); }
                    if (key.startsWith('AltitudeNo') && value === 0) { $('#form1').find("input[name='AltitudeNo_O_N']").val(""); }
                    //console.timeEnd('load Modal 6');
                });
                $('#form1').find("input[type='text'][name^='id']").val(curIdx);
                $('#form1').find("input[type='text'][name='TimeHourCount_M_S']").inputmask("99:99");
                $('#form1').find("input[type='number'][name^='SubmittedByStaffId']").val(curUserId);
                $('.nextid').text('');
                //console.timeEnd('load Modal');
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
                $('#form1').find("input[name^='ObservationDatetime']").val(today);
                if (results.observations.length === 0) {
                    $('#form1').find("input[type='number'][name^='id']").val(1);
                } else { $('#form1').find("input[type='number'][name^='id']").val(results.observations[results.observations.length - 1].id_M_N + 1); }
                $('#form1').find("input[type='number'][name^='status']").val("0");
                $('#form1').find("input[type='text'][name^='PlantDisciplineCode']").val(curDiscipline);
                $('#form1').find("input[type='number'][name^='SubmittedByStaffId']").val(curUserId);
                $('#form1').find("select[name^='ObservationStaffId']").val(curUserId);
                $('#form1').find("input[type='text'][name='TimeHourCount_M_S']").inputmask("99:99").val("00:10");
                $('.nextid').text('');
                //loadSiteData($('#form1').find("select[name='SiteId_O_N']").val());
            }
        }, 300);
    }).done(function () {
        $('#modalProgress').modal('hide');
    });
}
function objectifyPHFormforSave(formArray) {
    var plantDisciplineCode;
    var addlObserver = 1;
    var vattachment = 1;
    var obsAttachment = 1;
    var sampleAttachment = 1;
    var observation = {};
    var timehourcountS = $('#form1').find('input[name="TimeHourCount_M_S"]').val();
    if (timehourcountS !== '') { $('#form1').find('input[name="TimeHourCount_M_N"]').val(getTimefromString(timehourcountS)); }
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            //if (formArray[i]['name'].startsWith('AdditionalObservers')) { continue; }
            //if (formArray[i]['name'].startsWith('AdditionalCollectors')) { continue; }
            //if (formArray[i]['name'].startsWith('PlantStatisticType')) { continue; }
            if (formArray[i]['name'].startsWith('Latitude')) { continue; }
            if (formArray[i]['name'].startsWith('Longitude')) { continue; }
            if (formArray[i]['name'].startsWith('AdditionalObserverName') && formArray[i]['value'] === "") {
                continue;
            }
            if (formArray[i]['name'].startsWith('PlantAttachment') && formArray[i]['value'] === "") {
                continue;
            }
            if (formArray[i]['name'].startsWith('PlantObsAttachment') && formArray[i]['value'] === "") {
                continue;
            }
            if (formArray[i]['name'].startsWith('PlantSampleAttachment') && formArray[i]['value'] === "") {
                continue;
            }
            if (formArray[i]['name'].startsWith('TargetObservedCode')) {
                //if ($("input[name='" + formArray[i]['name'] + "']:checked").length === 0) {
                //    formArray[i]['value'] = "";
                //}
                if ($("input[name='" + formArray[i]['name'] + "']:checked").length === 1) {
                    formArray[i]['value'] = $("input[name='" + formArray[i]['name'] + "']:checked").val();
                }
            }
            if (formArray[i]['name'].startsWith('CountList')) {
                //if ($("input[name='" + formArray[i]['name'] + "']:checked").length === 0) {
                //    formArray[i]['value'] = "";
                //}
                if ($("input[name='" + formArray[i]['name'] + "']:checked").length === 1) {
                    formArray[i]['value'] = $("input[name='" + formArray[i]['name'] + "']:checked").val();
                }
            }
            if (formArray[i]['name'].startsWith('HostFlag')) {
                //if ($("input[name='" + formArray[i]['name'] + "']:checked").length === 0) {
                //    formArray[i]['value'] = "";
                //}
                if ($("input[name='" + formArray[i]['name'] + "']:checked").length === 1) {
                    formArray[i]['value'] = $("input[name='" + formArray[i]['name'] + "']:checked").val();
                }
            }
            var fname = formArray[i]['name'].split("_")[0];
            var fMOC = formArray[i]['name'].split("_")[1];
            var fNSD = formArray[i]['name'].split("_")[2];
            var fnum = formArray[i]['name'].split("_")[3];
            var ftype = formArray[i]['name'].split("_")[4];

            if (fname === 'PlantDisciplineCode') { plantDisciplineCode = formArray[i]['value']; }

            if (formArray[i]['name'].startsWith('AdditionalObserverName') && formArray[i]['value'] !== "") {
                //var x = formArray[i]['name'].substr(formArray[i]['name'].length - 1);
                var observer = { "ObserverNo": "", "AdditionalObserverName": "" };
                observer.ObserverNo = addlObserver;
                observer.AdditionalObserverName = formArray[i]['value'];
                observation.AdditionalObserverTab.push(observer);
                addlObserver++;
                continue;
            }
            if (fname.startsWith('PlantAttachment')) {
                if (fname.startsWith('PlantAttachmentD')) { continue; }
                if (formArray[i]['value'] === "") { continue; }
                //var x = fname.substr(fname.length - 1);
                var attachment = { "id": "", "sequenceNum": "", "type": "", "name": "", "description": "", "content": "" };
                attachment.id = vattachment;
                attachment.sequenceNum = vattachment;
                attachment.sequenceNum = vattachment;
                attachment.type = "image/jpeg";
                attachment.name = $('#PlantAttachmentD_M_S_' + fnum).val().replace(' ', '_') + '.jpg';
                attachment.description = $('#PlantAttachmentD_M_S_' + fnum).val();
                attachment.content = formArray[i]['value'];
                observation.attachments.attachment.push(attachment);
                vattachment++;
                continue;
            }

            if (ftype === 'H' && fname !== 'GpsDatumId') {
                if (fname === 'PlantTaxonId') {
                    var vPlantObsTab = {};
                }
                if (fname.startsWith('PlantObsAttachment')) {
                    if (fname.startsWith('PlantObsAttachmentD')) { continue; }
                    if (formArray[i]['value'] === "") { continue; }
                    //var x = fname.substr(fname.length - 1);
                    var attachment = { "id": "", "sequenceNum": "", "type": "", "name": "", "description": "", "content": "" };
                    attachment.id = obsAttachment;
                    attachment.sequenceNum = obsAttachment;
                    attachment.sequenceNum = obsAttachment;
                    attachment.type = "image/jpeg";
                    attachment.name = $('#PlantObsAttachmentD_M_S_' + fnum + '_' + ftype).val().replace(' ', '_') + '.jpg';
                    attachment.description = $('#PlantObsAttachmentD_M_S_' + fnum + '_' + ftype).val();
                    attachment.content = formArray[i]['value'];
                    vPlantObsTab.attachments.attachment.push(attachment);
                    obsAttachment++;
                    continue;
                }
                if (fNSD === 'N') {
                    vPlantObsTab[formArray[i]['name']] = Number(formArray[i]['value']);
                }
                else { vPlantObsTab[formArray[i]['name']] = formArray[i]['value']; }
                if (fname === 'LocationPointWktClob') {
                    vPlantObsTab["attachments"] = { "attachment": [] };
                    vPlantObsTab["PlantObsTargetTab"] = [];
                }
                continue;
            }
            if (ftype === 'T' && fname !== 'CommentText') {
                if (fname === 'TargetTaxonId') {
                    var vPlantObsTargetTab = {};
                }
                vPlantObsTargetTab[formArray[i]['name']] = formArray[i]['value'];
                continue;
            }
            if (ftype === 'T' && fname === 'CommentText') {
                vPlantObsTargetTab[formArray[i]['name']] = formArray[i]['value'];
                vPlantObsTab.PlantObsTargetTab.push(vPlantObsTargetTab);
                continue;
            }
            if (ftype === 'H' && fname === 'GpsDatumId') {
                vPlantObsTab[formArray[i]['name']] = formArray[i]['value'];
                observation.PlantObsTab.push(vPlantObsTab);
                obsAttachment = 1;
                continue;
            }
            if (ftype === 'S' && fname !== 'EndOfSample') {
                if (fname === 'SampleFieldLabelText') {
                    var vPlantSampleTab = {};
                }
                if (fname.startsWith('AdditionalCollectorName') && (formArray[i]['value'] === 'NONE' || formArray[i]['value'] === '')) {
                    continue;
                }
                if (fname.startsWith('AdditionalCollectorName') && (formArray[i]['value'] !== 'NONE' || formArray[i]['value'] !== '')) {
                    vPlantSampleTab.AdditionalCollectorTab.push(Number(formArray[i]['value']));
                    continue;
                }
                if (fname.startsWith('PlantPartTab') && formArray[i]['value'] !== 'Y') {
                    continue;
                }
                if (fname.startsWith('PlantPartTab') && formArray[i]['value'] === 'Y') {
                    //var vPlantpart = fname.split("_")[0];
                    var vPlantpart = fname.split("-")[1];
                    vPlantSampleTab.PlantPartTab.push(vPlantpart);
                    continue;
                }
                if (fname.startsWith('PlantPreservationTab') && formArray[i]['value'] !== 'Y') {
                    continue;
                }
                if (fname.startsWith('PlantPreservationTab') && formArray[i]['value'] === 'Y') {
                    //var vPlantPreservation = fname.split("_")[0];
                    var vPlantPreservation = fname.split("-")[1];
                    vPlantSampleTab.PlantPreservationTab.push(vPlantPreservation);
                    continue;
                }
                if (fname.startsWith('EntoLifeStgTab') && formArray[i]['value'] !== 'Y') {
                    continue;
                }
                if (fname.startsWith('EntoLifeStgTab') && formArray[i]['value'] === 'Y') {
                    //var vEntoLifeStgTab = fname.split("_")[0];
                    var vEntoLifeStgTab = fname.split("-")[1];
                    vPlantSampleTab.EntoLifeStgTab.push(vEntoLifeStgTab);
                    continue;
                }
                if (fname.startsWith('PlantSampleAttachment')) {
                    if (fname.startsWith('PlantSampleAttachmentD')) { continue; }
                    if (formArray[i]['value'] === "") { continue; }
                    //var x = fname.substr(fname.length - 1);
                    var attachment = { "id": "", "sequenceNum": "", "type": "", "name": "", "description": "", "content": "" };
                    attachment.id = sampleAttachment;
                    attachment.sequenceNum = sampleAttachment;
                    attachment.sequenceNum = sampleAttachment;
                    attachment.type = "image/jpeg";
                    attachment.name = $('#PlantSampleAttachmentD_M_S_' + fnum + '_' + ftype).val().replace(' ', '_') + '.jpg';
                    attachment.description = $('#PlantSampleAttachmentD_M_S_' + fnum + '_' + ftype).val();
                    attachment.content = formArray[i]['value'];
                    vPlantSampleTab.attachments.attachment.push(attachment);
                    sampleAttachment++;
                    continue;
                }
                if (fNSD === 'N') {
                    vPlantSampleTab[formArray[i]['name']] = Number(formArray[i]['value']);
                }
                else { vPlantSampleTab[formArray[i]['name']] = formArray[i]['value']; }
                if (fname === 'ExternalPhotoExistFlag') {
                    vPlantSampleTab["PlantPreservationTab"] = [];
                }
                if (fname === 'CommentText') {
                    vPlantSampleTab["AdditionalCollectorTab"] = [];
                }
                if (fname === 'EntoCollMethodCode') {
                    vPlantSampleTab["PlantPartTab"] = [];
                }
                if (fname === 'HostIdentifiedUserId' && plantDisciplineCode === 'P') {
                    vPlantSampleTab["PlantPartTab"] = [];
                }
                if (fname === 'EntoPestLevelCode') {
                    vPlantSampleTab["EntoLifeStgTab"] = [];
                    vPlantSampleTab["attachments"] = { "attachment": [] };
                }
                if (fname === 'PathSevCode') {
                    vPlantSampleTab["attachments"] = { "attachment": [] };
                }
                if (fname === 'PlantPreservOtherText') {
                    vPlantSampleTab["attachments"] = { "attachment": [] };
                }
                continue;
            }
            if (ftype === 'S' && fname === 'EndOfSample') {
                //vPlantSampleTab[formArray[i]['name']] = formArray[i]['value'];
                observation.PlantSampleTab.push(vPlantSampleTab);
                sampleAttachment = 1;
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
                observation["attachments"] = { "attachment": [] };
            }
        }
    }
    return observation;
}
function objectifyPHFormforSubmit(data) {//serialize data function
    var modData = JSON.parse(JSON.stringify(data));
    delete modData.TimeHourCount_M_S;
    var jsonStr = JSON.stringify(modData);
    jsonStr = jsonStr.replace(/_O_N_\d_T/g, '').replace(/_M_S_\d_T/g, '').replace(/_O_S_\d_T/g, '').replace(/_M_N_\d_H/g, '').replace(/_M_S_\d_H/g, '').replace(/_O_S_\d_H/g, '').replace(/_O_N_\d_H/g, '');
    jsonStr = jsonStr.replace(/_M_S_\d_S/g, '').replace(/_O_N_\d_S/g, '').replace(/_M_S_\d_S/g, '').replace(/_M_D_\d_S/g, '').replace(/_O_S_\d_S/g, '');
    jsonStr = jsonStr.replace(/_M_N/g, '').replace(/_O_N/g, '').replace(/_M_D/g, '').replace(/_M_S/g, '').replace(/_O_S/g, '');
    var jsonData = JSON.parse(jsonStr);
    if (jsonData.SiteId === 0) { delete jsonData.SiteId; }
    if (jsonData.SiteId === 99999) { delete jsonData.SiteId; }
    if (jsonData.WaypointNumber === 0) { delete jsonData.WaypointNumber; }
    if (jsonData.AltitudeNo === 0) { delete jsonData.AltitudeNo; }
    if (jsonData.AdditionalObserverTab && jsonData.AdditionalObserverTab.length === 0) { delete jsonData.AdditionalObserverTab; }
    if (jsonData.AdditionalObserverTab && jsonData.AdditionalObserverTab.length > 0 && jsonData.AdditionalObservers === "N") {
        delete jsonData.AdditionalObserverTab;
    }
    delete jsonData.AdditionalObservers;
    if (jsonData.attachments.attachment.length === 0) { delete jsonData.attachments; }
    if (jsonData.PlantSampleTab.length === 0) { delete jsonData.PlantSampleTab; }
    else {
        $.each(jsonData.PlantSampleTab, function (i, item) {
            delete item.PrelimTaxonTextH;
            delete item.HostTaxonTextH;
            if (item.AdditionalCollectorTab && item.AdditionalCollectorTab.length === 0) {
                delete item.AdditionalCollectorTab;
                delete item.AdditionalCollectors;
            }
            if (item.AdditionalCollectorTab && item.AdditionalCollectorTab.length > 0 && item.AdditionalCollectors === "N") {
                delete item.AdditionalCollectorTab;
                delete item.AdditionalCollectors;
            }
            if (item.AdditionalCollectorTab && item.AdditionalCollectorTab.length > 0 && item.AdditionalCollectors === "Y") {
                var arr = item.AdditionalCollectorTab;
                var unq = arr.filter(function (itm, i, arr) {
                    return i === arr.indexOf(itm);
                });
                item.AdditionalCollectorTab = unq;
                delete item.AdditionalCollectors;
            }
            if (item.EntoLifeStgTab && item.EntoLifeStgTab.length === 0) { delete item.EntoLifeStgTab; }
            if (item.PlantPartTab && item.PlantPartTab.length === 0) { delete item.PlantPartTab; }
            if (item.PlantPreservationTab && item.PlantPreservationTab.length === 0) { delete item.PlantPreservationTab; }
            if (item.attachments && item.attachments.attachment.length === 0) { delete item.attachments; }
            if (item.PrelimTaxonId > 0) {
                delete item.PrelimTaxonText;
            }
            if (item.PrelimTaxonId === "" || item.PrelimTaxonId === 0 && $.trim(item.PrelimTaxonText) !== "") {
                delete item.PrelimTaxonId;
            }
            if (item.PlantPreservOtherText === "") {
                delete item.PlantPreservOtherText;
            }
            if (item.HostIdentifiedUserId === 0) {
                delete item.HostIdentifiedUserId;
            }
            if (item.HostTaxonId > 0) {
                delete item.HostTaxonText;
            }
            if (item.HostTaxonId === "" || item.HostTaxonId === 0 && $.trim(item.HostTaxonText) !== "") {
                delete item.HostTaxonId;
            }
            if (item.SamplePointWktClob === "") {
                delete item.SamplePointWktClob;
                delete item.GpsDatumId;
            }
            if (item.PathIncidCode === "NONE") {
                delete item.PathIncidCode;
            }
            if (item.PathSevCode === "NONE") {
                delete item.PathSevCode;
            }
            if (item.EntoInfestedPctCode === "NONE") {
                delete item.EntoInfestedPctCode;
            }
            if (item.EntoDamageLevelCode === "NONE") {
                delete item.EntoDamageLevelCode;
            }
            if (item.EntoPestLevelCode === "NONE") {
                delete item.EntoPestLevelCode;
            }
            if (item.CollectedAltitudeNo === 0) { delete item.CollectedAltitudeNo; }
        });
    }
    $.each(jsonData.PlantObsTab, function (i, item) {
        delete item.CountList;
        delete item.PlantTaxonTextH;
        if (item.HostStatAreaNo === 0) { delete item.HostStatAreaNo; };
        if (item.HostStatCount === 0) { delete item.HostStatCount };
        if (item.PlantStatisticType === "C" && item.HostStatAreaNo > 0) { delete item.HostStatAreaNo; }
        if (item.PlantStatisticType === "A" && item.HostStatCount > 0) { delete item.HostStatCount; }
        delete item.PlantStatisticType;
        if (item.PlantObsTargetTab && item.PlantObsTargetTab.length === 0) { delete item.PlantObsTargetTab };
        if (item.attachments && item.attachments.attachment.length === 0) { delete item.attachments };
        if (item.PlantTaxonId > 0) {
            delete item.PlantTaxonText;
        }
        if (item.PlantTaxonId === "" || item.PlantTaxonId === 0 && $.trim(item.PlantTaxonText) !== "") {
            delete item.PlantTaxonId;
        }
        if (item.CommentText === "") {
            delete item.CommentText;
        }
        if (item.LocationPointWktClob === "") {
            delete item.LocationPointWktClob;
            delete item.GpsDatumId;
        }
        if (item.EntoLifeStgCode === "NONE") {
            delete item.EntoLifeStgCode;
        }
        if (item.PlantLifeStgCode === "NONE") {
            delete item.PlantLifeStgCode;
        }
        $.each(item.PlantObsTargetTab, function (i, item1) {
            delete item1.TargetTaxonTextH;
            if (item1.TargetTaxonId > 0) {
                delete item1.TargetTaxonText;
            }
            if (item1.TargetTaxonId === "" || item1.TargetTaxonId === 0 && $.trim(item1.TargetTaxonText) !== "") {
                delete item1.TargetTaxonId;
            }
        });
    });
    CleanUp(jsonData);
    delete jsonData.status;
    delete jsonData.id;
    return jsonData;
}
function CleanUp(data) {
    $.each(data, function (index, value) {
        if (typeof value === 'object') {
            CleanUp(value);
        }
        else {
            if (isNaN(index) && value === "") { delete data[index]; }
        }
    });
}
function preValidate() {
    var numManFields = $("#form1").find('input[type="number"][name*="_M_N"]');
    $.each(numManFields, function (index, v) {
        var fname = v.name.split("_")[0];
        var fMOC = v.name.split("_")[1];
        var fNSD = v.name.split("_")[2];
        var fnum = v.name.split("_")[3];
        var ftype = v.name.split("_")[4];
        if (v.value === "" || v.value === 0) {
            if (fname === 'status') return true;
            if (fname === 'HostStatCount') return true;
            if (fname === 'HostStatAreaNo') return true;
            //console.log(index + ' field cannot be NULL');
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field cannot be empty.");
            vFailed = true;
            return false;
        }
        if ($.isNumeric(v.value) === false || v.value === "" || v.value === 0) {
            if (fname === 'status') return true;
            if (fname === 'HostStatCount') return true;
            if (fname === 'HostStatAreaNo') return true;
            //console.log(index + ' field cannot be NULL');
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field should be numeric.");
            vFailed = true;
            return false;
        }
    });
    var numOptFields = $("#form1").find('input[name*="_O_N"]');
    $.each(numOptFields, function (index, v) {
        var fname = v.name.split("_")[0];
        var fMOC = v.name.split("_")[1];
        var fNSD = v.name.split("_")[2];
        var fnum = v.name.split("_")[3];
        var ftype = v.name.split("_")[4];
        if (v.value === 0 || v.value === "") return true;
        if (fname === 'TargetCount' && v.value.toString().indexOf('.') > -1) {
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field is invalid.");
            vFailed = true;
            return false;
        }
        if (fname === 'AltitudeNo' && v.value.toString().indexOf('.') > -1) {
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field is invalid.");
            vFailed = true;
            return false;
        }
        if (fname === 'CollectedAltitudeNo' && v.value.toString().indexOf('.') > -1) {
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field is invalid.");
            vFailed = true;
            return false;
        }
        if ($.isNumeric(v.value) === false) {
            if (fname === 'SiteId') return true;
            if (fname === 'PlantTaxonId') return true;
            if (fname === 'TargetTaxonId') return true;
            if (fname === 'PrelimTaxonId') return true;
            if (fname === 'HostTaxonId') return true;
            if (fname === 'HostIdentifiedUserId') return true;
            //console.log(index + ' field cannot be NULL');
            vError = 1;
            vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + v.name + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + v.name + '"]').data("name") + " field should be numeric.");
            vFailed = true;
            return false;
        }
    });
    if (vFailed === true) {
        return { "vError": vError, "vErrDescription": vErrDescription.join('<br/>') };
    } else { return { "vError": 0, "vErrDescription": "" }; }
}
function Iterate(data) {
    var modData = JSON.parse(JSON.stringify(data));
    //if (modData && modData.status_M_N) { delete modData.status_M_N; }
    $.each(modData, function (index, value) {
        if (typeof value === 'object') {
            if (index === 'PlantObsTab' && value.length === 0) {
                vError = 1;
                vErrDescription.push('Minimum one Host expected.You can Save & Exit instead.');
                vFailed = true;
                return false;
            }
            if (index === 'PlantPreservationTab') {
                if ($.inArray("O", value) !== -1) {
                    PlantPreservationOtherFlag = 1;
                }
                //var vPlantPreservation = fname.split("-")[1];
                //if (vPlantPreservation === 'O') { PlantPreservationOtherFlag = 1; }
            }
            if (index === 'attachment') {
                attachmentFlag = 1;
            }
            //if (index === 'PlantSampleTab' && value.length === 0) {
            //    vError = 1;
            //    vErrDescription.push('Minimum one Sample expected.You can Save & Exit instead.');
            //    vFailed = true;
            //    return false;
            //}
            Iterate(value);
        }
        else {
            //console.log(index + ":" + value);
            if (isNaN(index)) {
                if (index === 'name' && attachmentFlag === 1 && $.trim(value) === ".jpg") {
                    vError = 1;
                    vErrDescription.push("Please fill Attachment Name.");
                    vFailed = true;
                    return false;
                }

                var fname = index.split("_")[0];
                var fMOC = index.split("_")[1];
                var fNSD = index.split("_")[2];
                var fnum = index.split("_")[3];
                var ftype = index.split("_")[4];

                if (fname === 'PlantDisciplineCode') { plantDisciplineCode = value; }

                if (fname === 'SubmittedByStaffId' && value < 2) {
                    vError = 1;
                    vErrDescription.push("Please set device Owner in Application Settings > Application menu before submission.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'CountList') { CountListFlag = value; }
                if (fname === 'HostStatCount' && CountListFlag === 'Count' && value === 0) { HostStatCountFlag = 1; }
                if (fname === 'HostStatAreaNo' && value === 0 && HostStatCountFlag === 1 && CountListFlag === 'List' && plantDisciplineCode === 'B') {
                    return true;
                }
                if (fname === 'HostStatAreaNo' && value === 0 && HostStatCountFlag === 1 && CountListFlag === 'Count' && plantDisciplineCode === 'B') {
                    //console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>HostStatCount and Area fields - both cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'HostStatAreaNo' && value === 0 && HostStatCountFlag === 1 && plantDisciplineCode === 'E') {
                    //console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>HostStatCount and Area fields - both cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'HostStatAreaNo' && value === 0 && HostStatCountFlag === 1 && plantDisciplineCode === 'P') {
                    //console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>HostStatCount and Area fields - both cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'CheckFutureSurveyFlag' && $('input[name="' + index + '"]:checked').val() === 'Y') {
                    FSFlag = 1;
                    FSFlagNum = fnum;
                }
                if (fname === 'CheckFutureSurveyFlag' && $('input[name="' + index + '"]:checked').val() === 'N') {
                    FSFlag = 0;
                }
                if (fname === 'TimeHourCount' && fNSD === 'S' && value.indexOf('_') > -1) {
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>Invalid Duration Value.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'ObservationWhereWktClob' && value !== '') {
                    var wkt = new Wkt.Wkt();
                    wkt.read(value);
                    wkt.toObject();
                    if (wkt.toJson().coordinates[1] < -180 || wkt.toJson().coordinates[1] > 180 || wkt.toJson().coordinates[0] < -180 || wkt.toJson().coordinates[0] > 180) {
                        vError = 1;
                        vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='Latitude_M_N' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>Invalid Latitude/Longitude Value in the Observation.");
                        vFailed = true;
                        return false;
                    }
                }
                if (fname === 'LocationPointWktClob' && value === '' && FSFlag === 1 && fnum === FSFlagNum) {
                    vError = 1;
                    vErrDescription.push("Lat/Lon is mandatory if observation is flagged.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'LocationPointWktClob' && value !== '') {
                    var wkt = new Wkt.Wkt();
                    wkt.read(value);
                    wkt.toObject();
                    if (wkt.toJson().coordinates[1] < -180 || wkt.toJson().coordinates[1] > 180 || wkt.toJson().coordinates[0] < -180 || wkt.toJson().coordinates[0] > 180) {
                        vError = 1;
                        vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='Latitude_O_N_" + fnum + "_" + ftype + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>Invalid Latitude/Longitude Value in the Observation.");
                        vFailed = true;
                        return false;
                    }
                }
                if (fname === 'TargetObservedCode' && ftype === "T" && $('input[name="' + index + '"]:checked').val() === "N") {
                    PlantTargetObservedCodeFlag = 1;
                }
                if (fname === 'TargetObservedCode' && ftype === "T" && $('input[name="' + index + '"]:checked').val() === "N" && value === "N") {
                    PlantTargetObservedCodeFlag = 1;
                }
                if (fname === 'TargetObservedCode' && ftype === "T" && $('input[name="' + index + '"]:checked').length === 0 && value === "N") {
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                    vFailed = true;
                    return false;
                }

                if (fname === 'CommentText' && ftype === "T" && value === "" && PlantTargetObservedCodeFlag === 1) {
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>Comments Text for TargetObserved field cannot be empty.");
                    PlantTargetObservedCodeFlag = 0;
                    vFailed = true;
                    return false;
                }
                if (fname === 'SamplePointWktClob' && value !== '') {
                    var wkt = new Wkt.Wkt();
                    wkt.read(value);
                    wkt.toObject();
                    if (wkt.toJson().coordinates[1] < -180 || wkt.toJson().coordinates[1] > 180 || wkt.toJson().coordinates[0] < -180 || wkt.toJson().coordinates[0] > 180) {
                        vError = 1;
                        vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>Invalid Latitude/Longitude Value in the Observation.");
                        vFailed = true;
                        return false;
                    }
                }
                if (fname === 'PlantPreservOtherText' && fNSD === 'S' && value === '' && PlantPreservationOtherFlag === 1) {
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>Plant Preserve - OtherText cannot be empty.");
                    PlantPreservationOtherFlag = 0;
                    vFailed = true;
                    return false;
                }
                if (fname === 'PlantPreservOtherText' && fNSD === 'S' && value !== '' && PlantPreservationOtherFlag === 0) {
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>Invalid Plant Preserve - OtherText.");
                    vFailed = true;
                    return false;
                }
                if (fMOC === 'M' && fNSD === 'S' && (value === '' || value === 'NONE')) {
                    if (fname === 'PlantTaxonTextH') return true;
                    if (fname === 'TargetTaxonTextH') return true;
                    if (fname === 'PrelimTaxonTextH') return true;
                    if (fname === 'HostTaxonTextH') return true;
                    //console.log(index + ' field cannot be NULL');
                    if (fname === 'PlantStatisticType' && CountListFlag === 'List' && plantDisciplineCode === 'B') {
                        return true;
                    }
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default ripple btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fMOC === 'M' && fNSD === 'D' && value === '') {
                    //console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'TimeHourCount' && fMOC === 'M' && fNSD === 'N' && value > 24) {
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='TimeHourCount_M_S' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="TimeHourCount_M_S"]').data("name") + " field cannot be > 24.");
                    vFailed = true;
                    return false;
                }
                if (fMOC === 'M' && fNSD === 'N' && value === 0) {
                    if (fname === 'status') return true;
                    if (fname === 'HostStatCount') return true;
                    if (fname === 'HostStatAreaNo') return true;
                    //console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fMOC === 'O' && fNSD === 'N' && value === 0) {
                    //console.log(index + ' field cannot be NULL');
                    if (fname === 'SiteId') return true;
                    if (fname === 'AltitudeNo') return true;
                    if (fname === 'PlantTaxonId') return true;
                    if (fname === 'TargetTaxonId') return true;
                    if (fname === 'PrelimTaxonId') return true;
                    if (fname === 'HostTaxonId') return true;
                    if (fname === 'CollectedAltitudeNo') return true;
                    if (fname === 'HostIdentifiedUserId') return true;
                    if (fname === 'WaypointNumber' && $('input[name="' + index + '"]').val() === "") return true;
                    if (fname === 'WaypointNumber' && ($('input[name="' + index + '"]').val() !== "") && (value < 1 || value > 99999)) {
                        vError = 1;
                        vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>Invalid Waypoint Number.");
                        vFailed = true;
                        return false;
                    }
                    vError = 1;
                    vErrDescription.push("<a href='#' class='btn btn-sm btn-default btnError' data-j='" + index + "' data-k='" + ftype + "' data-l='" + fnum + "'>Go</a>" + $('[name="' + index + '"]').data("name") + " field cannot be empty.");
                    vFailed = true;
                    return false;
                }
            }
        }
    });
    if (vFailed === true) {
        return { "vError": vError, "vErrDescription": vErrDescription.join('<br/>') };
    } else { return { "vError": 0, "vErrDescription": "" }; }
}
function Iterate2(data) {
    var modData = JSON.parse(JSON.stringify(data));
    //if (modData && modData.status_M_N) { delete modData.status_M_N; }
    $.each(modData, function (index, value) {
        if (typeof value === 'object') {
            if (index === 'PlantObsTab' && value.length === 0) {
                vError = 1;
                vErrDescription.push('Minimum one Host expected.You can Save & Exit instead.');
                vFailed = true;
                return false;
            }
            if (index === 'PlantPreservationTab') {
                if ($.inArray("O", value) !== -1) {
                    PlantPreservationOtherFlag = 1;
                }
                //var vPlantPreservation = fname.split("-")[1];
                //if (vPlantPreservation === 'O') { PlantPreservationOtherFlag = 1; }
            }
            if (index === 'attachment') {
                attachmentFlag = 1;
            }
            //if (index === 'PlantSampleTab' && value.length === 0) {
            //    vError = 1;
            //    vErrDescription.push('Minimum one Sample expected.You can Save & Exit instead.');
            //    vFailed = true;
            //    return false;
            //}
            Iterate2(value);
        }
        else {
            //console.log(index + ":" + value);
            if (isNaN(index)) {

                if (index === 'name' && attachmentFlag === 1 && $.trim(value) === ".jpg") {
                    vError = 1;
                    vErrDescription.push("Please fill Attachment Name.");
                    vFailed = true;
                    return false;
                }

                var fname = index.split("_")[0];
                var fMOC = index.split("_")[1];
                var fNSD = index.split("_")[2];
                var fnum = index.split("_")[3];
                var ftype = index.split("_")[4];

                if (fname === 'PlantDisciplineCode') { plantDisciplineCode = value; }

                if (fname === 'SubmittedByStaffId' && value < 2) {
                    vError = 1;
                    vErrDescription.push("Please set device Owner in Application Settings > Application menu before submission.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'CountList') { CountListFlag = value; }
                if (fname === 'HostStatCount' && CountListFlag === 'Count' && value === 0) { HostStatCountFlag = 1; }
                if (fname === 'HostStatAreaNo' && value === 0 && HostStatCountFlag === 1 && CountListFlag === 'List' && plantDisciplineCode === 'B') {
                    return true;
                }
                if (fname === 'HostStatAreaNo' && value === 0 && HostStatCountFlag === 1 && CountListFlag === 'Count' && plantDisciplineCode === 'B') {
                    //console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push("HostStatCount and Area fields - both cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'HostStatAreaNo' && value === 0 && HostStatCountFlag === 1 && plantDisciplineCode === 'E') {
                    //console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push("HostStatCount and Area fields - both cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'HostStatAreaNo' && value === 0 && HostStatCountFlag === 1 && plantDisciplineCode === 'P') {
                    //console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push("HostStatCount and Area fields - both cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'CheckFutureSurveyFlag' && value === 'Y') {
                    FSFlag = 1;
                    FSFlagNum = fnum;
                }
                if (fname === 'CheckFutureSurveyFlag' && value === 'N') {
                    FSFlag = 0;
                }
                if (fname === 'LocationPointWktClob' && value === '' && FSFlag === 1 && fnum === FSFlagNum) {
                    vError = 1;
                    vErrDescription.push("Lat/Lon is mandatory if observation is flagged.");
                    vFailed = true;
                    return false;
                }
                if (fname.startsWith('PlantPreservationTab') && ($.inArray("O", value) !== -1)) {
                    //var vPlantPreservation = fname.split("-")[1];
                    //if (vPlantPreservation === 'O') { PlantPreservationOtherFlag = 1; }
                    PlantPreservationOtherFlag = 1;
                }
                if (fname === 'TimeHourCount' && fNSD === 'S' && value.indexOf('_') > -1) {
                    vError = 1;
                    vErrDescription.push("Invalid Duration Value.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'ObservationWhereWktClob' && value !== '') {
                    var wkt = new Wkt.Wkt();
                    wkt.read(value);
                    wkt.toObject();
                    if (wkt.toJson().coordinates[1] < -180 || wkt.toJson().coordinates[1] > 180 || wkt.toJson().coordinates[0] < -180 || wkt.toJson().coordinates[0] > 180) {
                        vError = 1;
                        vErrDescription.push("Invalid Latitude/Longitude Value in the Observation.");
                        vFailed = true;
                        return false;
                    }
                }
                if (fname === 'LocationPointWktClob' && value !== '') {
                    var wkt = new Wkt.Wkt();
                    wkt.read(value);
                    wkt.toObject();
                    if (wkt.toJson().coordinates[1] < -180 || wkt.toJson().coordinates[1] > 180 || wkt.toJson().coordinates[0] < -180 || wkt.toJson().coordinates[0] > 180) {
                        vError = 1;
                        vErrDescription.push("Invalid Latitude/Longitude Value in the Observation.");
                        vFailed = true;
                        return false;
                    }
                }
                if (fname === 'TargetObservedCode' && ftype === "T" && value === "N") {
                    PlantTargetObservedCodeFlag = 1;
                }

                if (fname === 'CommentText' && ftype === "T" && value === "" && PlantTargetObservedCodeFlag === 1) {
                    vError = 1;
                    vErrDescription.push("Comments Text for TargetObserved field cannot be empty.");
                    PlantTargetObservedCodeFlag = 0;
                    vFailed = true;
                    return false;
                }
                if (fname === 'SamplePointWktClob' && value !== '') {
                    var wkt = new Wkt.Wkt();
                    wkt.read(value);
                    wkt.toObject();
                    if (wkt.toJson().coordinates[1] < -180 || wkt.toJson().coordinates[1] > 180 || wkt.toJson().coordinates[0] < -180 || wkt.toJson().coordinates[0] > 180) {
                        vError = 1;
                        vErrDescription.push("Invalid Latitude/Longitude Value in the Observation.");
                        vFailed = true;
                        return false;
                    }
                }
                if (fname === 'PlantPreservOtherText' && fNSD === 'S' && value === '' && PlantPreservationOtherFlag === 1) {
                    vError = 1;
                    vErrDescription.push("PlantPreservOtherText cannot be empty.");
                    PlantPreservationOtherFlag = 0;
                    vFailed = true;
                    return false;
                }
                if (fname === 'PlantPreservOtherText' && fNSD === 'S' && value !== '' && PlantPreservationOtherFlag === 0) {
                    vError = 1;
                    vErrDescription.push("Invalid Plant Preserve - OtherText.");
                    vFailed = true;
                    return false;
                }
                if (fMOC === 'M' && fNSD === 'S' && (value === '' || value === 'NONE')) {
                    if (fname === 'PlantTaxonTextH') return true;
                    if (fname === 'TargetTaxonTextH') return true;
                    if (fname === 'PrelimTaxonTextH') return true;
                    if (fname === 'HostTaxonTextH') return true;
                    if (fname === 'PlantStatisticType' && CountListFlag === 'List' && plantDisciplineCode === 'B') {
                        return true;
                    }
                    //console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push($('[name="' + index + '"]').data("name") + " field cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fMOC === 'M' && fNSD === 'D' && value === '') {
                    //console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push($('[name="' + index + '"]').data("name") + " field cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fname === 'TimeHourCount' && fMOC === 'M' && fNSD === 'N' && value > 24) {
                    vError = 1;
                    vErrDescription.push($('[name="TimeHourCount_M_S"]').data("name") + " field cannot be > 24.");
                    vFailed = true;
                    return false;
                }
                if (fMOC === 'M' && fNSD === 'N' && value === 0) {
                    if (fname === 'status') return true;
                    if (fname === 'HostStatCount') return true;
                    if (fname === 'HostStatAreaNo') return true;
                    //console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push($('[name="' + index + '"]').data("name") + " field cannot be empty.");
                    vFailed = true;
                    return false;
                }
                if (fMOC === 'O' && fNSD === 'N' && value === 0) {
                    //console.log(index + ' field cannot be NULL');
                    if (fname === 'SiteId') return true;
                    if (fname === 'AltitudeNo') return true;
                    if (fname === 'PlantTaxonId') return true;
                    if (fname === 'TargetTaxonId') return true;
                    if (fname === 'PrelimTaxonId') return true;
                    if (fname === 'HostTaxonId') return true;
                    if (fname === 'CollectedAltitudeNo') return true;
                    if (fname === 'WaypointNumber') return true;
                    if (fname === 'HostIdentifiedUserId') return true;
                    vError = 1;
                    vErrDescription.push($('[name="' + index + '"]').data("name") + " field cannot be zero.");
                    vFailed = true;
                    return false;
                }
            }
        }
    });
    if (vFailed === true) {
        return { "vError": vError, "vErrDescription": vErrDescription.join('<br/>') };
    } else { return { "vError": 0, "vErrDescription": "" }; }
}
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
    formArray["SubmittedByStaffId"] = curUserId;
    obsWrapper.body.plantHealthObservation = formArray;
    return obsWrapper;
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
                e.closest('.hostweed').find("input.taxonHTextB").val(e.getSelectedItemData().name);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteE(e) {
    var options = {
        data: taxaData.taxaBotany,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.entobox').find("input.taxonIDE").val(selectedItemValue);
                e.closest('.entobox').find("input.taxonHTextE").val(e.getSelectedItemData().name);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteP(e) {
    var options = {
        data: taxaData.taxaBotany,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.pathbox').find("input.taxonIDP").val(selectedItemValue);
                e.closest('.pathbox').find("input.taxonHTextP").val(e.getSelectedItemData().name);
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
                e.closest('.entotarget').find("input.taxonHTextET").val(e.getSelectedItemData().name);
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
                e.closest('.pathtarget').find("input.taxonHTextPT").val(e.getSelectedItemData().name);
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
                e.closest('.sample').find("input.taxonHTextBS").val(e.getSelectedItemData().name);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteES(e) {
    var options = {
        data: taxaBotEnt.taxaBotEnt,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.sample').find("input.taxonIDES").val(selectedItemValue);
                e.closest('.sample').find("input.taxonHTextES").val(e.getSelectedItemData().name);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteHES(e) {
    var options = {
        data: taxaBotEnt.taxaBotEnt,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.sample').find("input.taxonIDHES").val(selectedItemValue);
                e.closest('.sample').find("input.taxonHTextHES").val(e.getSelectedItemData().name);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompletePS(e) {
    var options = {
        data: taxaBotPath.taxaBotPath,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.sample').find("input.taxonIDPS").val(selectedItemValue);
                e.closest('.sample').find("input.taxonHTextPS").val(e.getSelectedItemData().name);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function BindAutoCompleteHPS(e) {
    var options = {
        data: taxaBotPath.taxaBotPath,
        getValue: "name",
        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function () {
                var selectedItemValue = e.getSelectedItemData().id;
                e.closest('.sample').find("input.taxonIDHPS").val(selectedItemValue);
                e.closest('.sample').find("input.taxonHTextHPS").val(e.getSelectedItemData().name);
            }
        },
        adjustWidth: false
    };
    e.easyAutocomplete(options);
}
function getTimefromString(strTime) {
    var hh = strTime.substr(0, 2);
    var mm = Number(strTime.substr(3, 2));
    var res = (hh * 1) + (mm / 60);
    return res.toFixed(2);
}
function loadSiteData(str) {
    if (Number(str) === 99999) {
        var arr = ActivityData.activities[0].ActivityNewSitePlant.filter(function (el) {
            return (el.PlantDisciplineCode === curDiscipline);
        });
    }
    else {
        var arr2 = siteData.filter(function (el) {
            return (el.id === Number(str));
        });
        if (arr2) {
            var arr = arr2[0].ActivitySitePlant.filter(function (el) {
                return (el.PlantDisciplineCode === curDiscipline);
            });
            if (arr2[0].FlaggedObservations) {
                var arr1 = arr2[0].FlaggedObservations.filter(function (el) {
                    return (el.PlantDisciplineCode === curDiscipline);
                });
            }
        }
    }
    if (arr) {
        curSiteData = arr;
        if (curDiscipline === "B") {
            $.each(curSiteData, function (key1, value1) {
                $.ajax({
                    url: "",
                    beforeSend: function (xhr) {
                        $("#addPlant").trigger("click");
                    }
                }).complete(function (e) {
                    $.each(value1, function (key2, value2) {
                        $('div.hostweed').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                        $('div.hostweed').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                        $('div.hostweed').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                        if (key2.startsWith("PlantStatisticTypeCode") && value2 === "A") {
                            $('div.hostweed').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                            $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                            $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                            $('div.hostweed').eq(key1).find("div.countArea").removeClass('hide');
                            $('div.hostweed').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("PlantStatisticTypeCode") && value2 === "C") {
                            $('div.hostweed').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                            $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                            $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                            $('div.hostweed').eq(key1).find("div.countArea").removeClass('hide');
                            $('div.hostweed').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        $('div.hostweed').eq(key1).find("input[name^='" + key2 + "']").val(value2);
                        if (key2 === "PlantTaxonId") {
                            $('div.hostweed').eq(key1).find("input[type='text'][name^='PlantTaxonText']").val(getTaxonText(value2));
                        }
                    });
                });
            });
        }
        if (curDiscipline === "E") {
            $.each(curSiteData, function (key1, value1) {
                $.ajax({
                    url: "",
                    beforeSend: function (xhr) {
                        $("#addEntoHost").trigger("click");
                    }
                }).complete(function (e) {
                    $.each(value1, function (key2, value2) {
                        $('div.entobox').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                        $('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                        //$('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                        if (key2.startsWith("PlantStatisticTypeCode") && value2 === "A") {
                            $('div.entobox').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                            $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                            $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                            $('div.entobox').eq(key1).find("div.countArea").removeClass('hide');
                            //$('div.entobox').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("PlantStatisticTypeCode") && value2 === "C") {
                            $('div.entobox').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                            $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                            $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                            $('div.entobox').eq(key1).find("div.countArea").removeClass('hide');
                            //$('div.entobox').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("PlantObservationMethodCode") && value2 !== "") {
                            $('div.entobox').eq(key1).find("select[name^='PlantObsMethodCode']").val(value2);
                        }
                        if (key2 === "PlantTaxonId") {
                            $('div.entobox').eq(key1).find("input[type='text'][name^='PlantTaxonText']").val(getTaxonText(value2));
                        }
                        if (key2 === "ActivitySitePlantTarget") {
                            $.each(value2, function (key3, value3) {
                                $.ajax({
                                    url: "",
                                    beforeSend: function (xhr) {
                                        if (key3 > 0) {
                                            $('div.entobox').eq(key1).find('div.entotarget').eq(key3 * 1 - 1).find("[data-action=addEntoTarget]").trigger("click");
                                        }
                                    }
                                }).complete(function (e) {
                                    $.each(value3, function (key4, value4) {
                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='text'][name^='" + key4 + "']").val(value4);
                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='date'][name^='" + key4 + "']").val(value4);
                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='number'][name^='" + key4 + "']").val(value4);
                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "']").val(value4);
                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='Y']").iCheck('check');
                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                        //$('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("select[name^='" + key4 + "']").val(value4);
                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("textarea[name^='" + key4 + "']").val(value4);
                                        if (key4 === "TargetTaxonId") {
                                            $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='text'][name^='TargetTaxonText']").val(getTaxonTargetText(value4));
                                        }
                                    });
                                });
                            });
                        }
                    });
                });
            });
        }
        if (curDiscipline === "P") {
            $.each(curSiteData, function (key1, value1) {
                $.ajax({
                    url: "",
                    beforeSend: function (xhr) {
                        $("#addPathHost").trigger("click");
                    }
                }).complete(function (e) {
                    $.each(value1, function (key2, value2) {
                        $('div.pathbox').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(key1).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                        $('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                        //$('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
                        if (key2.startsWith("PlantStatisticTypeCode") && value2 === "A") {
                            $('div.pathbox').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                            $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                            $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                            $('div.pathbox').eq(key1).find("div.countArea").removeClass('hide');
                            //$('div.pathbox').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("PlantStatisticTypeCode") && value2 === "C") {
                            $('div.pathbox').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                            $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                            $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                            $('div.pathbox').eq(key1).find("div.countArea").removeClass('hide');
                            //$('div.pathbox').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2 === "PlantObservationMethodCode" && value2 !== "") {
                            $('div.pathbox').eq(key1).find("select[name^='PlantObsMethodCode']").val(value2);
                        }
                        if (key2 === "PlantTaxonId") {
                            $('div.pathbox').eq(key1).find("input[name^='" + key2 + "']").val(value2);
                            $('div.pathbox').eq(key1).find("input[type='text'][name^='PlantTaxonText']").val(getTaxonText(value2));
                        }
                        if (key2 === "ActivitySitePlantTarget") {
                            $.each(value2, function (key3, value3) {
                                $.ajax({
                                    url: "",
                                    beforeSend: function (xhr) {
                                        if (key3 > 0) {
                                            $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3 * 1 - 1).find("[data-action=addPathTarget]").trigger("click");
                                        }
                                    }
                                }).complete(function (e) {
                                    $.each(value3, function (key4, value4) {
                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='text'][name^='" + key4 + "']").val(value4);
                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='date'][name^='" + key4 + "']").val(value4);
                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='number'][name^='" + key4 + "']").val(value4);
                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "']").val(value4);
                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='Y']").iCheck('check');
                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                        //$('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("select[name^='" + key4 + "']").val(value4);
                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("textarea[name^='" + key4 + "']").val(value4);
                                        if (key4 === "TargetTaxonId") {
                                            $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='text'][name^='TargetTaxonText']").val(getTaxonTargetText(value4));
                                        }
                                    });
                                });
                            });
                        }
                    });
                });
            });
        }
    }
    if (arr1) {
        curSiteData = arr1;
        if (curDiscipline === "B") {
            $.each(curSiteData, function (key1, value1) {
                $.ajax({
                    url: "",
                    beforeSend: function (xhr) {
                        $("#addPlant").trigger("click");
                    }
                }).complete(function (e) {
                    var pkey = arr.length + key1;
                    $.each(value1, function (key2, value2) {
                        $('div.hostweed').eq(pkey).find("input[type='text'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(pkey).find("input[type='date'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(pkey).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(pkey).find("input[type='number'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(pkey).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(pkey).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                        $('div.hostweed').eq(pkey).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                        $('div.hostweed').eq(pkey).find("select[name^='" + key2 + "']").val(value2);
                        $('div.hostweed').eq(pkey).find("textarea[name^='" + key2 + "']").val(value2);
                        if (key2.startsWith("PlantTaxonText") && value2.length > 0) {
                            $('div.hostweed').eq(pkey).addClass(value2.substring(0, 1).toLowerCase());
                            $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                        }
                        if (key2.startsWith("HostStatCount") && value2 > 0) {
                            $('div.hostweed').eq(pkey).find("select[name^='PlantStatisticType']").val('C');
                            $('div.hostweed').eq(pkey).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                            $('div.hostweed').eq(pkey).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                            $('div.hostweed').eq(pkey).find("div.countArea").removeClass('hide');
                            $('div.hostweed').eq(pkey).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                            $('div.hostweed').eq(pkey).find("select[name^='PlantStatisticType']").val('A');
                            $('div.hostweed').eq(pkey).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                            $('div.hostweed').eq(pkey).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                            $('div.hostweed').eq(pkey).find("div.countArea").removeClass('hide');
                            $('div.hostweed').eq(pkey).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("LocationPointWktClob") && value2.length > 0) {
                            var wkt = new Wkt.Wkt();
                            wkt.read(value2);
                            wkt.toObject();
                            $('div.hostweed').eq(pkey).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                            $('div.hostweed').eq(pkey).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                        }
                        $('div.hostweed').eq(pkey).find("input[name^='" + key2 + "']").val(value2);
                        if (key2 === "PlantTaxonId") {
                            $('div.hostweed').eq(pkey).find("input[type='text'][name^='PlantTaxonText']").val(getTaxonText(value2));
                        }
                    });
                });
            });
        }
        if (curDiscipline === "E") {
            $.each(curSiteData, function (key1, value1) {
                $.ajax({
                    url: "",
                    beforeSend: function (xhr) {
                        $("#addEntoHost").trigger("click");
                    }
                }).complete(function (e) {
                    var pkey = arr.length + key1;
                    $.each(value1, function (key2, value2) {
                        $('div.entobox').eq(pkey).find("input[type='text'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(pkey).find("input[type='date'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(pkey).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(pkey).find("input[type='number'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(pkey).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(pkey).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                        $('div.entobox').eq(pkey).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                        $('div.entobox').eq(pkey).find("select[name^='" + key2 + "']").val(value2);
                        $('div.entobox').eq(pkey).find("textarea[name^='" + key2 + "']").val(value2);
                        if (key2.startsWith("PlantTaxonText") && value2.length > 0) {
                            $('div.entobox').eq(pkey).addClass(value2.substring(0, 1).toLowerCase());
                            $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                        }
                        if (key2.startsWith("HostStatCount") && value2 > 0) {
                            $('div.entobox').eq(pkey).find("select[name^='PlantStatisticType']").val('C');
                            $('div.entobox').eq(pkey).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                            $('div.entobox').eq(pkey).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                            $('div.entobox').eq(pkey).find("div.countArea").removeClass('hide');
                            $('div.entobox').eq(pkey).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                            $('div.entobox').eq(pkey).find("select[name^='PlantStatisticType']").val('A');
                            $('div.entobox').eq(pkey).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                            $('div.entobox').eq(pkey).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                            $('div.entobox').eq(pkey).find("div.countArea").removeClass('hide');
                            $('div.entobox').eq(pkey).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("LocationPointWktClob") && value2.length > 0) {
                            var wkt = new Wkt.Wkt();
                            wkt.read(value2);
                            wkt.toObject();
                            $('div.entobox').eq(pkey).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                            $('div.entobox').eq(pkey).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                        }
                        if (key2 === "PlantTaxonId") {
                            $('div.entobox').eq(pkey).find("input[type='text'][name^='PlantTaxonText']").val(getTaxonText(value2));
                        }
                    });
                });
            });
        }
        if (curDiscipline === "P") {
            $.each(curSiteData, function (key1, value1) {
                $.ajax({
                    url: "",
                    beforeSend: function (xhr) {
                        $("#addPathHost").trigger("click");
                    }
                }).complete(function (e) {
                    var pkey = arr.length + key1;
                    $.each(value1, function (key2, value2) {
                        $('div.pathbox').eq(pkey).find("input[type='text'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(pkey).find("input[type='date'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(pkey).find("input[type='datetime-local'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(pkey).find("input[type='number'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(pkey).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(pkey).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                        $('div.pathbox').eq(pkey).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                        $('div.pathbox').eq(pkey).find("select[name^='" + key2 + "']").val(value2);
                        $('div.pathbox').eq(pkey).find("textarea[name^='" + key2 + "']").val(value2);
                        if (key2.startsWith("PlantTaxonText") && value2.length > 0) {
                            $('div.pathbox').eq(pkey).addClass(value2.substring(0, 1).toLowerCase());
                            $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                        }
                        if (key2.startsWith("HostStatCount") && value2 > 0) {
                            $('div.pathbox').eq(pkey).find("select[name^='PlantStatisticType']").val('C');
                            $('div.pathbox').eq(pkey).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                            $('div.pathbox').eq(pkey).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                            $('div.pathbox').eq(pkey).find("div.countArea").removeClass('hide');
                            $('div.pathbox').eq(pkey).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                            $('div.pathbox').eq(pkey).find("select[name^='PlantStatisticType']").val('A');
                            $('div.pathbox').eq(pkey).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                            $('div.pathbox').eq(pkey).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                            $('div.pathbox').eq(pkey).find("div.countArea").removeClass('hide');
                            $('div.pathbox').eq(pkey).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                        }
                        if (key2.startsWith("LocationPointWktClob") && value2.length > 0) {
                            var wkt = new Wkt.Wkt();
                            wkt.read(value2);
                            wkt.toObject();
                            $('div.pathbox').eq(pkey).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                            $('div.pathbox').eq(pkey).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                        }
                        if (key2 === "PlantTaxonId") {
                            $('div.pathbox').eq(pkey).find("input[name^='" + key2 + "']").val(value2);
                            $('div.pathbox').eq(pkey).find("input[type='text'][name^='PlantTaxonText']").val(getTaxonText(value2));
                        }

                    });
                });
            });
        }
    }
}
function getTaxonText(id) {
    var arr;
    switch (curDiscipline) {
        case 'B':
            arr = taxaData.taxaBotany.filter(function (el) {
                return (el.id === id);
            });
            if (arr.length > 0) { return arr[0].name; }
            break;
        case 'E':
            arr = taxaData.taxaBotany.filter(function (el) {
                return (el.id === id);
            });
            if (arr.length > 0) { return arr[0].name; }
            break;
        case 'P':
            arr = taxaData.taxaBotany.filter(function (el) {
                return (el.id === id);
            });
            if (arr.length > 0) { return arr[0].name; }
            break;
    }
}
function getTaxonTargetText(id) {
    var arr;
    switch (curDiscipline) {
        case 'B':
            arr = taxaData.taxaBotany.filter(function (el) {
                return (el.id === id);
            });
            if (arr.length > 0) { return arr[0].name; }
            break;
        case 'E':
            arr = taxaData.taxaEntomology.filter(function (el) {
                return (el.id === id);
            });
            if (arr.length > 0) { return arr[0].name; }
            break;
        case 'P':
            arr = taxaData.taxaPathology.filter(function (el) {
                return (el.id === id);
            });
            if (arr.length > 0) { return arr[0].name; }
            break;
    }
}
function getStaffData(str) {
    switch (str) {
        case "NPH":
            staffDataFull = "";
            $.each(staffDataNPH.staffs.staff, function (key, val) {
                var option1 = '<option';
                option1 = option1 + ' value="' + val.id + '">';
                option1 = option1 + val.displayName + "</option>";
                staffDataFull = staffDataFull + option1;
            });
            break;
        case "BPH":
            staffDataFull = "";
            $.each(staffDataBPH.staffs.staff, function (key, val) {
                var option1 = '<option';
                option1 = option1 + ' value="' + val.id + '">';
                option1 = option1 + val.displayName + "</option>";
                staffDataFull = staffDataFull + option1;
            });
            break;
        case "IPH":
            staffDataFull = "";
            $.each(staffDataIPH.staffs.staff, function (key, val) {
                var option1 = '<option';
                option1 = option1 + ' value="' + val.id + '">';
                option1 = option1 + val.displayName + "</option>";
                staffDataFull = staffDataFull + option1;
            });
            break;
        case "NAF":
            staffDataFull = "";
            $.each(staffDataNAF.staffs.staff, function (key, val) {
                var option1 = '<option';
                option1 = option1 + ' value="' + val.id + '">';
                option1 = option1 + val.displayName + "</option>";
                staffDataFull = staffDataFull + option1;
            });
            break;
    }
    return staffDataFull;
}
//function BindAutoComplete() {
//    function log(message) {
//        //$("<div>").text(message).prependTo("#log");
//        //$("#log").scrollTop(0);
//    }
//    $(".taxonText").autocomplete({
//        source: function (request, response) {
//            var names = [];
//            $.ajax({
//                url: "http://ag-bie.ala.org.au/ws/auto",
//                dataType: "json",
//                data: {
//                    q: request.term,
//                    limit: 100
//                },
//                success: function (data) {
//                    $.each(data.autoCompleteList, function () {
//                        if (this.name) {
//                            names.push(this.matchedNames[0]);
//                        }
//                        else {
//                            names.push('Not Defined');
//                        }
//                    });
//                    response(names);
//                }
//            });
//        },
//        minLength: 3,
//        select: function (event, ui) {
//            log(ui.item ?
//                "Selected: " + ui.item.label :
//                "Nothing selected, input was " + this.value);
//        },
//        open: function () {
//            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
//        },
//        close: function () {
//            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
//        }
//    });
//}

$(document).on('click', '.qtyplus', function (e) {
    e.preventDefault();
    pStatisticType = $(this).parent().parent().find('select[name^=PlantStatisticType]').val();
    if (pStatisticType === 'C') {
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
});
$(document).on('click', ".qtyminus", function (e) {
    e.preventDefault();
    pStatisticType = $(this).parent().parent().find('select[name^=PlantStatisticType]').val();
    if (pStatisticType === 'C') {
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
});
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
});
$(document).on('click', "#addEntoHost", function () {
    var Idx = numEntoHosts;
    var that1 = $(entobox);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('select[name^="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name^="EntoLifeStgCode"]').find('option').remove().end().append($(elifeStage));
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
    BindAutoCompleteE(that1.find('.taxonTextE'));
    BindAutoCompleteET(that1.find('.taxonTextET'));
    numEntoHosts++;
    numEntoTargets++;
    $('#numEntoHosts').text(numEntoHosts);
});
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
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-target').text(Idx * 1 + 1);
    that1.insertAfter(that);
    BindAutoCompleteET(that1.find('.taxonTextET'));
    numEntoTargets++;
});
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
});
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
    that1.find('.badge-target').text(Idx * 1 + 1);
    that1.insertAfter(that);
    BindAutoCompletePT(that1.find('.taxonTextPT'));
    numPathTargets++;
});
$(document).on('click', ".removePlant", function () {
    var x = $(this);
    if (numPlants > 0) {
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
});
$(document).on('click', ".removeEntoHost", function () {
    var x = $(this);
    if (numEntoHosts > 0) {
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
});
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
});
$(document).on('click', ".removePathHost", function () {
    var x = $(this);
    if (numPathHosts > 0) {
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
});
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
});
$(document).on('click', "[data-action=expand]", function () {
    var x = $(this).closest('.collapsed');
    x.removeClass('collapsed');
    x.addClass('expanded');
    x.find('.collapse').removeClass('hide');
    x.find('.collapse').css("display", "block");
    x.find('.expand').addClass('hide');
    x.css("background-color", "#fffcec");
});
$(document).on('click', "[data-action=collapse]", function () {
    var x = $(this).closest('.expanded');
    x.addClass('collapsed');
    x.removeClass('expanded');
    x.find('.collapse').addClass('hide');
    x.find('.expand').removeClass('hide');
    x.find('.expand').css("display", "block");
    x.css("background-color", "#f5f5f5");
});
$(document).on('click', '#addBotanySample', function (e) {
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

    if (bsamples > 0) {
        var sampleLat = $('div.sample').last().find('input[name^="Latitude"]').val();
        var sampleLng = $('div.sample').last().find('input[name^="Longitude"]').val();
        var sampleTime = $('div.sample').last().find('input[name^="CollectedDatetime"]').val();
        var samplePrelimID = $('div.sample').last().find('input[name^="PrelimTaxonText"]').val();
        var errString = "The following attributes cannot be NULL in the current Sample:<br/> Sample Latitude, Longitude, CollectedTime and PrelimTaxonText.";
        if (sampleLat === null || sampleLat === 0 || sampleLng === null || sampleLng === 0 || sampleTime === null || sampleTime === '' || samplePrelimID === null || samplePrelimID === '') {
            $.growl.warning({ title: "Error", message: errString, location: "tc", size: "large" });
            return;
        }
    }
    addlObservers = '<option value="NONE">- select -</option>';
    for (i = 1; i < 6; i++) {
        var x = $('#form1').find("input[type='text'][name^='AdditionalObserverName" + i + "']").val();
        if (x !== "") {
            var option1 = '<option';
            option1 = option1 + ' value="' + i + '">';
            option1 = option1 + x + "</option>";
            addlObservers = addlObservers + option1;
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
    });
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    });
    that.find("input[name^='CollectedSampleCount']").val('1');
    that.find("input[name^='CollectedDatetime']").val(today);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID(resSettings.settings.device.samplePrefix));
    that.find('.badge').text(bsamples);
    $('#samples').append(that);
    $('#numSamples').text(bsamples);
    BindAutoCompleteBS(that.find('.taxonTextBS'));
});
$(document).on('click', '.removeBotSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                bsamples = bsamples - 1;
                x.closest('.sample').remove();
                $('#numSamples').text(bsamples);
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#addEntoSample', function (e) {
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

    if (esamples > 0) {
        var sampleLat = $('div.sample').last().find('input[name^="Latitude"]').val();
        var sampleLng = $('div.sample').last().find('input[name^="Longitude"]').val();
        var sampleTime = $('div.sample').last().find('input[name^="CollectedDatetime"]').val();
        var samplePrelimID = $('div.sample').last().find('input[name^="PrelimTaxonText"]').val();
        var errString = "The following attributes cannot be NULL in the current Sample:<br/> Sample Latitude, Longitude, CollectedTime and PrelimTaxonText.";
        if (sampleLat === null || sampleLat === 0 || sampleLng === null || sampleLng === 0 || sampleTime === null || sampleTime === '' || samplePrelimID === null || samplePrelimID === '') {
            $.growl.warning({ title: "Error", message: errString, location: "tc", size: "large" });
            return;
        }
    }
    addlObservers = '<option value="NONE">- select -</option>';
    for (i = 1; i < 6; i++) {
        var x = $('#form1').find("input[type='text'][name^='AdditionalObserverName" + i + "']").val();
        if (x !== "") {
            var option1 = '<option';
            option1 = option1 + ' value="' + i + '">';
            option1 = option1 + x + "</option>";
            addlObservers = addlObservers + option1;
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
    });
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    });
    that.find("input[name^='CollectedSampleCount']").val('1');
    that.find("input[name^='CollectedDatetime']").val(today);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID(resSettings.settings.device.samplePrefix));
    that.find('.badge').text(esamples);
    $('#samples').append(that);
    $('#numSamples').text(esamples);
    BindAutoCompleteES(that.find('.taxonTextES'));
    BindAutoCompleteHES(that.find('.taxonTextHES'));
});
$(document).on('click', '.removeEntoSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                esamples = esamples - 1;
                x.closest('.sample').remove();
                $('#numSamples').text(esamples);
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#addPathSample', function (e) {
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

    if (psamples > 0) {
        var sampleLat = $('div.sample').last().find('input[name^="Latitude"]').val();
        var sampleLng = $('div.sample').last().find('input[name^="Longitude"]').val();
        var sampleTime = $('div.sample').last().find('input[name^="CollectedDatetime"]').val();
        var samplePrelimID = $('div.sample').last().find('input[name^="PrelimTaxonText"]').val();
        var errString = "The following attributes cannot be NULL in the current Sample:<br/> Sample Latitude, Longitude, CollectedTime and PrelimTaxonText.";
        if (sampleLat === null || sampleLat === 0 || sampleLng === null || sampleLng === 0 || sampleTime === null || sampleTime === '' || samplePrelimID === null || samplePrelimID === '') {
            $.growl.warning({ title: "Error", message: errString, location: "tc", size: "large" });
            return;
        }
    }
    addlObservers = '<option value="NONE">- select -</option>';
    for (i = 1; i < 6; i++) {
        var x = $('#form1').find("input[type='text'][name^='AdditionalObserverName" + i + "']").val();
        if (x !== "") {
            var option1 = '<option';
            option1 = option1 + ' value="' + i + '">';
            option1 = option1 + x + "</option>";
            addlObservers = addlObservers + option1;
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
    });
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    });
    that.find("input[name^='CollectedSampleCount']").val('1');
    that.find("input[name^='CollectedDatetime']").val(today);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID(resSettings.settings.device.samplePrefix));
    that.find('.badge').text(psamples);
    $('#samples').append(that);
    $('#numSamples').text(psamples);
    BindAutoCompletePS(that.find('.taxonTextPS'));
    BindAutoCompleteHPS(that.find('.taxonTextHPS'));
});
$(document).on('click', '.removePathSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                psamples = psamples - 1;
                x.closest('.sample').remove();
                $('#numSamples').text(psamples);
            },
            cancel: function () {
                //close
            }
        }
    });
});
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
});
$(document).on('ifChecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name').startsWith('AdditionalObservers')) {
        $('.addlObserver').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('AdditionalCollectors')) {
        $('.addlCollectors').removeClass('hide');
    }
    $(this).val('Y');
});
$(document).on('ifUnchecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name').startsWith('AdditionalObservers')) {
        $('.addlObserver').addClass('hide');
    };
    if ($(this).attr('name').startsWith('AdditionalCollectors')) {
        $('.addlCollectors').addClass('hide');
    };
    $(this).val('N');
});
$(document).on('click', '.getPlantCoords', function (e) {
    var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
    var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
    var xdat = $(this).closest('.hostweed').find('select.hostweeddat');
    var xwkt = $(this).closest('.hostweed').find('input[name^="LocationPointWktClob"]');
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
    };
    e.preventDefault();
});
$(document).on('click', '.getEntoHostCoords', function (e) {
    var xlat = $(this).closest('.entobox').find('input.entolat');
    var xlng = $(this).closest('.entobox').find('input.entolng');
    var xdat = $(this).closest('.entobox').find('select.entodat');
    var xwkt = $(this).closest('.entobox').find('input[name^="LocationPointWktClob"]');
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
    };
    e.preventDefault();
});
$(document).on('click', '.getPathHostCoords', function (e) {
    var xlat = $(this).closest('.pathbox').find('input.pathlat');
    var xlng = $(this).closest('.pathbox').find('input.pathlng');
    var xdat = $(this).closest('.sample').find('select.pathdat');
    var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
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
    };
    e.preventDefault();
});
$(document).on('click', '.getSampleCoords', function (e) {
    var xlat = $(this).closest('.sample').find('input.samplelat');
    var xlng = $(this).closest('.sample').find('input.samplelng');
    var xalt = $(this).closest('.sample').find('input.samplealt');
    var xdat = $(this).closest('.sample').find('select.sampledat');
    var xwkt = $(this).closest('.sample').find('input[name^="SamplePointWktClob"]');
    var siteID = Number($('#form1').find('select[name="SiteId_O_N"] option:selected').val());
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (siteID > 0 && siteID < 99999 && checkMapBoundsBySite(position, siteID)) {
                xlat.val(position.coords.latitude.toFixed(5));
                xlng.val(position.coords.longitude.toFixed(5));
                if (position.coords.altitude) { xalt.val(Math.round(position.coords.altitude)); }
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
            if ((siteID === 0 || siteID === 99999) && checkMapBoundsByPos(position)) {
                xlat.val(position.coords.latitude.toFixed(5));
                xlng.val(position.coords.longitude.toFixed(5));
                if (position.coords.altitude) { xalt.val(Math.round(position.coords.altitude)); }
                xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
                xdat.val("WGS84");
            }
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "tc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "tc", size: "large" });
    };
    e.preventDefault();
});
$(document).on('click', 'img.pp', function () {
    $.growl.notice({ title: "", message: "Loading Camera ...", location: "bc", size: "small" });
    var that = $(this);
    var ppname = that.attr("name");
    var inpname = that.attr("name").substr(1, that.attr("name").length - 1);
    if (!navigator.camera) {
        $.growl.warning({ title: "Error", message: "Camera API not supported!", location: "tc", size: "large" });
        return;
    }
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
        encodingType: 0,     // 0=JPG 1=PNG
        targetWidth: 640,
        targetHeight: 480,
        saveToPhotoAlbum: false
    };

    navigator.camera.getPicture(
        function onSuccess(imageData) {
            that.attr("src", "data:image/jpeg;base64," + imageData);
            //$("#form1").find('input:hidden[name=' + inpname + ']').val(imgURI);
            $("#form1").find('textarea[name=' + inpname + ']').val(imageData);
        },
        function onFail(error) {
            $.growl.warning({ title: "Error", message: error, location: "tc", size: "large" });
        },
        options);

    return false;
});
$(document).on('ifChecked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'addlCollectors') {
        $('#Roles').modal();
    }
    if ($(this).attr('name') === 'otherSample') {
        $(this).parent('div').parent('div').find('input[type="text"]').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('CountList') && $(this).val() === 'Count') {
        var that = $(this).parentsUntil('.hostweed').parent().find('div.countArea');
        that.find("select[name^='PlantStatisticType']").val('C');
        that.find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        that.find("input[type='number'][name^='HostStatCount']").removeClass('hide');
        //if (HostStatAreaNo > 0) {
        //    that.find("input[type='number'][name^='HostStatAreaNo']").val(HostStatAreaNo);
        //    that.find("input[type='number'][name^='HostStatCount']").addClass('hide');
        //    that.find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
        //} 
        //else {
        //    that.find("input[type='number'][name^='HostStatAreaNo']").val(0);
        //    that.find("input[type='number'][name^='HostStatAreaNo']").text(0);
        //    that.find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        //    that.find("input[type='number'][name^='HostStatCount']").removeClass('hide');
        //}
        //if (HostStatCount > 0) {
        //    that.find("input[type='number'][name^='HostStatCount']").val(HostStatCount);
        //    that.find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        //    that.find("input[type='number'][name^='HostStatCount']").removeClass('hide');
        //}
        //else {
        //    that.find("input[type='number'][name^='HostStatCount']").val(0);
        //    that.find("input[type='number'][name^='HostStatCount']").text(0);
        //    that.find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        //    that.find("input[type='number'][name^='HostStatCount']").removeClass('hide');
        //}
        that.removeClass('hide');
    }
    if ($(this).attr('name').startsWith('CountList') && $(this).val() === 'List') {
        var that = $(this).parentsUntil('.hostweed').parent().find('div.countArea');
        //HostStatAreaNo = that.find("input[type='number'][name^='HostStatAreaNo']").val();
        //HostStatCount = that.find("input[type='number'][name^='HostStatCount']").val();
        that.find("input[type='number'][name^='HostStatAreaNo']").val("0");
        that.find("input[type='number'][name^='HostStatCount']").val("0");
        that.addClass('hide');
    }
});
$(document).on('change', 'select[name^="PlantStatisticType"]', function () {
    var str = $(this).val();
    if (str === 'C') {
        $(this).parent().parent().find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        $(this).parent().parent().find("input[type='number'][name^='HostStatCount']").removeClass('hide');
    }
    if (str === 'A') {
        $(this).parent().parent().find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
        $(this).parent().parent().find("input[type='number'][name^='HostStatCount']").addClass('hide');
    }
});
$(document).on('focus', '#SiteIdPH', function (e) {
    lastSiteValue = $(this).val();
})
    .on('change', '#SiteIdPH', function (e) {
        var that = $(this);
        var str = that.val();
        //if (that.val() === "0" || lastSiteValue === "0") return;
        if (that.val() === "0") return;
        if (curDiscipline === "B" && numPlants === 0 && bsamples === 0) {
            loadSiteData(str);
            return;
        }
        if (curDiscipline === "E" && numEntoHosts === 0 && esamples === 0) {
            loadSiteData(str);
            return;
        }
        if (curDiscipline === "P" && numPathHosts === 0 && psamples === 0) {
            loadSiteData(str);
            return;
        }
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Your observations for the currently selected Site will be erased. Do you want to continue?',
            buttons: {
                Ok: function () {
                    //if (str === 99999) {
                    //    //alert('NewSite selected');
                    //    var xlat = $('#form1').find('input.obslat');
                    //    var xlng = $('#form1').find('input.obslng');
                    //    var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
                    //    if (xlat.val() !== "") { cLatitude = xlat.val(); }
                    //    if (xlng.val() !== "") { cLongitude = xlng.val(); }
                    //    if (xwkt.val() !== "") { cWkt = xwkt.val(); }
                    //    xlat.val("");
                    //    xlng.val("");
                    //    xwkt.val("");
                    //}
                    //else {
                    //    //alert('Existing site selected');
                    //    var xlat = $('#form1').find('input.obslat');
                    //    var xlng = $('#form1').find('input.obslng');
                    //    var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
                    //    if (cLatitude !== "") { xlat.val(cLatitude); }
                    //    if (cLongitude !== "") { xlng.val(cLongitude); }
                    //    if (cWkt !== "") { xwkt.val(cWkt); }
                    //}
                    bsamples = 0;
                    esamples = 0;
                    psamples = 0;
                    numPlants = 0;
                    numEntoHosts = 0;
                    numEntoTargets = 0;
                    numPathHosts = 0;
                    numPathTargets = 0;
                    numAttachments = 0;
                    numObsAttachments = 0;
                    numSampleAttachments = 0;
                    $('#hostweeds').empty();
                    $('#samples').empty();
                    $('#numEntoHosts').text("");
                    $('#numPathHosts').text("");
                    $('#numPlants').text("");
                    $('#numSamples').text("");
                    $('#numAttachments').text("");
                    loadSiteData(str);
                },
                cancel: function () {
                    that.val(lastSiteValue);
                }
            }
        });
    });
$(document).on('focus', '#SurvActivityIdPH', function (e) {
    lastSurvActValue = $(this).val();
})
    .on('change', '#SurvActivityIdPH', function (e) {
        var that = $(this);
        var str = that.val();
        if (that.val() === "0") return;
        if (curDiscipline === "B" && numPlants === 0 && bsamples === 0) {
            refreshActivityData(str);
            loadstaffData();
            $('#form1').find("select[name^='ObservationStaffId']").val(curUserId);
            return;
        }
        if (curDiscipline === "E" && numEntoHosts === 0 && esamples === 0) {
            refreshActivityData(str);
            loadstaffData();
            $('#form1').find("select[name^='ObservationStaffId']").val(curUserId);
            return;
        }
        if (curDiscipline === "P" && numPathHosts === 0 && psamples === 0) {
            refreshActivityData(str);
            loadstaffData();
            $('#form1').find("select[name^='ObservationStaffId']").val(curUserId);
            return;
        }
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Your observations for the currently selected Activity will be erased. Do you want to continue?',
            buttons: {
                Ok: function () {
                    bsamples = 0;
                    esamples = 0;
                    psamples = 0;
                    numPlants = 0;
                    numEntoHosts = 0;
                    numEntoTargets = 0;
                    numPathHosts = 0;
                    numPathTargets = 0;
                    $('#hostweeds').empty();
                    $('#samples').empty();
                    $('#numEntoHosts').text("");
                    $('#numPathHosts').text("");
                    $('#numPlants').text("");
                    $('#numSamples').text("");
                    $('#numAttachments').text("");
                    refreshActivityData(str);
                    loadstaffData();
                    $('#form1').find("select[name^='ObservationStaffId']").val(curUserId);
                },
                cancel: function () {
                    that.val(lastSurvActValue);
                }
            }
        });
    });
$(document).on('blur', 'input.obslat', function (e) {
    var xlat = $('#form1').find('input.obslat');
    var xlng = $('#form1').find('input.obslng');
    var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
    //var xdat = $('#form1').find('select.obsdat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.obslng', function (e) {
    var xlat = $('#form1').find('input.obslat');
    var xlng = $('#form1').find('input.obslng');
    var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
    //var xdat = $('#form1').find('select.obsdat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.samplelat', function (e) {
    var xlat = $(this).closest('.sample').find('input.samplelat');
    var xlng = $(this).closest('.sample').find('input.samplelng');
    var xwkt = $(this).closest('.sample').find('input[name^="SamplePointWktClob"]');
    //var xdat = $(this).closest('.sample').find('input.sampledat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.samplelng', function (e) {
    var xlat = $(this).closest('.sample').find('input.samplelat');
    var xlng = $(this).closest('.sample').find('input.samplelng');
    var xwkt = $(this).closest('.sample').find('input[name^="SamplePointWktClob"]');
    //var xdat = $(this).closest('.sample').find('input.sampledat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.entolat', function (e) {
    var xlat = $(this).closest('.entobox').find('input.entolat');
    var xlng = $(this).closest('.entobox').find('input.entolng');
    var xwkt = $(this).closest('.entobox').find('input[name^="LocationPointWktClob"]');
    //var xdat = $(this).closest('.entobox').find('select.entodat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.entolng', function (e) {
    var xlat = $(this).closest('.entobox').find('input.entolat');
    var xlng = $(this).closest('.entobox').find('input.entolng');
    var xwkt = $(this).closest('.entobox').find('input[name^="LocationPointWktClob"]');
    //var xdat = $(this).closest('.entobox').find('select.entodat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.pathlat', function (e) {
    var xlat = $(this).closest('.pathbox').find('input.pathlat');
    var xlng = $(this).closest('.pathbox').find('input.pathlng');
    var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
    //var xdat = $(this).closest('.pathbox').find('select.pathdat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.pathlng', function (e) {
    var xlat = $(this).closest('.pathbox').find('input.pathlat');
    var xlng = $(this).closest('.pathbox').find('input.pathlng');
    var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
    //var xdat = $(this).closest('.pathbox').find('select.pathdat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.hostweedlat', function (e) {
    var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
    var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
    var xwkt = $(this).closest('.hostweed').find('input[name^="LocationPointWktClob"]');
    //var xdat = $(this).closest('.hostweed').find('select.hostweeddat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('blur', 'input.hostweedlng', function (e) {
    var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
    var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
    var xwkt = $(this).closest('.hostweed').find('input[name^="LocationPointWktClob"]');
    //var xdat = $(this).closest('.hostweed').find('select.hostweeddat');
    xwkt.val("POINT (" + Number(xlng.val()).toFixed(5) + " " + Number(xlat.val()).toFixed(5) + ")");
    //xdat.val("WGS84");
});
$(document).on('click', "#addPlantObsAttachment", function () {
    var Idx = numObsAttachments;
    var that1 = $(plantObsAttachment);
    //that1.find('input[type=hidden]').each(function () {
    //    $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    //});
    that1.find('input[type=text]').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx + '_H');
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    });
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    });
    that1.find('img').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx + '_H');
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    });
    switch (curDiscipline) {
        case 'B':
            $(this).closest('.hostweed').find('#PlantObsAttachments').append(that1);
            break;
        case 'E':
            $(this).closest('.entobox').find('#PlantObsAttachments').append(that1);
            break;
        case 'P':
            $(this).closest('.pathbox').find('#PlantObsAttachments').append(that1);
            break;
    }
    numObsAttachments++;
    //$('#numAttachments').text(numAttachments);
});
$(document).on('click', ".removePlantObsAttachment", function () {
    var x = $(this);
    if (numObsAttachments > 0) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this attachment?',
            buttons: {
                Ok: function () {
                    x.closest('.PlantObsAttachment').remove();
                    numObsAttachments--;
                    //$('#numAttachments').text(numAttachments);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});
$(document).on('click', "#addPlantSampleAttachment", function () {
    var Idx = numSampleAttachments;
    var that1 = $(plantSampleAttachment);
    //that1.find('input[type=hidden]').each(function () {
    //    $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    //});
    that1.find('input[type=text]').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx + '_S');
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_S');
    });
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_S');
    });
    that1.find('img').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx + '_S');
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_S');
    });
    $(this).closest('.sample').find('#PlantSampleAttachments').append(that1);
    numSampleAttachments++;
    //$('#numAttachments').text(numAttachments);
});
$(document).on('click', ".removePlantSampleAttachment", function () {
    var x = $(this);
    if (numSampleAttachments > 0) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this attachment?',
            buttons: {
                Ok: function () {
                    x.closest('.PlantSampleAttachment').remove();
                    numSampleAttachments--;
                    //$('#numAttachments').text(numAttachments);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});
$(document).on('click', "#addPlantAttachment", function () {
    var Idx = numAttachments;
    var that1 = $(plantAttachment);
    //that1.find('input[type=hidden]').each(function () {
    //    $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    //});
    that1.find('input[type=text]').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx);
        $(this).attr('name', $(this).attr('name') + '_' + Idx);
    });
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx);
    });
    that1.find('img').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx);
        $(this).attr('name', $(this).attr('name') + '_' + Idx);
    });
    $('#attachments').append(that1);
    numAttachments++;
    $('#numAttachments').text(numAttachments);
});
$(document).on('click', ".removePlantAttachment", function () {
    var x = $(this);
    if (numAttachments > 0) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this attachment?',
            buttons: {
                Ok: function () {
                    x.closest('.PlantAttachment').remove();
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
$(document).on('blur', '.taxonTextP', function () {
    var x = $(this).closest('.pathbox');
    if ($(this).val() !== x.find('.taxonHTextP').val()) {
        x.find('.taxonIDP').val('');
    }
});
$(document).on('blur', '.taxonTextPT', function () {
    var x = $(this).closest('.pathbox');
    if ($(this).val() !== x.find('.taxonHTextPT').val()) {
        x.find('.taxonIDPT').val('');
    }
});
$(document).on('blur', '.taxonTextE', function () {
    var x = $(this).closest('.entobox');
    if ($(this).val() !== x.find('.taxonHTextE').val()) {
        x.find('.taxonIDE').val('');
    }
});
$(document).on('blur', '.taxonTextET', function () {
    var x = $(this).closest('.entobox');
    if ($(this).val() !== x.find('.taxonHTextET').val()) {
        x.find('.taxonIDET').val('');
    }
});
$(document).on('blur', '.taxonTextB', function () {
    var x = $(this).closest('.hostweed');
    if ($(this).val() !== x.find('.taxonHTextB').val()) {
        x.find('.taxonIDB').val('');
    }
});
$(document).on('blur', '.taxonTextBS', function () {
    var x = $(this).closest('.sample');
    if ($(this).val() !== x.find('.taxonHTextBS').val()) {
        x.find('.taxonIDBS').val('');
    }
});
$(document).on('blur', '.taxonTextES', function () {
    var x = $(this).closest('.sample');
    if ($(this).val() !== x.find('.taxonHTextES').val()) {
        x.find('.taxonIDES').val('');
    }
});
$(document).on('blur', '.taxonTextPS', function () {
    var x = $(this).closest('.sample');
    if ($(this).val() !== x.find('.taxonHTextPS').val()) {
        x.find('.taxonIDPS').val('');
    }
});
$(document).on('blur', '.taxonTextHES', function () {
    var x = $(this).closest('.sample');
    if ($(this).val() !== x.find('.taxonHTextHES').val()) {
        x.find('.taxonIDHES').val('');
    }
});
$(document).on('blur', '.taxonTextHPS', function () {
    var x = $(this).closest('.sample');
    if ($(this).val() !== x.find('.taxonHTextHPS').val()) {
        x.find('.taxonIDHPS').val('');
    }
});
$(document).on('dblclick', 'div.hostweed', function () {
    $(this).find("[data-action=expand]").trigger('click');
});
$(document).on('dblclick', 'div.pathbox', function () {
    $(this).find("[data-action=expand]").trigger('click');
});
$(document).on('dblclick', 'div.entobox', function () {
    $(this).find("[data-action=expand]").trigger('click');
});
$(document).on('dblclick', 'div.sample', function () {
    $(this).find("[data-action=expand]").trigger('click');
});
$(document).on('contextmenu', 'div.hostweed', function () {
    $(this).find("[data-action=collapse]").trigger('click');
});
$(document).on('contextmenu', 'div.pathbox', function () {
    $(this).find("[data-action=collapse]").trigger('click');
});
$(document).on('contextmenu', 'div.entobox', function () {
    $(this).find("[data-action=collapse]").trigger('click');
});
$(document).on('contextmenu', 'div.sample', function () {
    $(this).find("[data-action=collapse]").trigger('click');
});
//$(document).on('change', 'select[id="doTeam"]', function () {
//    var str = $(this).val();
//    $('#deviceOwner').find('option').remove().end().append($(getStaffData(str)));
//});
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
function DisableFormPH() {
    $('#DownloadPH').removeClass('btn-default');
    $('#DownloadPH').attr('disabled', true);
    $('#DownloadPH').addClass('disabled');
    $('#SyncPH').removeClass('btn-info');
    $('#SyncPH').attr('disabled', true);
    $('#SyncPH').addClass('disabled');
    $('#newObservationPH').removeClass('btn-default');
    $('#newObservationPH').attr('disabled', true);
    $('#newObservationPH').addClass('disabled');

    $('#mb6 .progText').text("Sync in progress ...");
    $('#modalProgress').modal();
    setTimeout(StartSyncPH, 1000);
}
function StartSyncPH() {
    var success = true;
    var rowsFailed = [];
    var rowsFailedErr = [];
    var rowsSuccess = [];
    var logstr = "";
    var arr = results.observations.filter(function (el) {
        return (el.status_M_N === 1 && (el.PlantDisciplineCode_M_S === 'P' || el.PlantDisciplineCode_M_S === 'E' || el.PlantDisciplineCode_M_S === 'B'));
    });
    if (arr && arr.length === 0) {
        $.growl.notice({ title: "", message: "No records to Sync.", location: "bc", size: "small" });
        setTimeout(EnableFormPH(), 300);
        return false;
    }
    else {
        $.each(results.observations, function (index, value) {
            if (value.status_M_N === 0 || value.AnimalDisciplineCode_M_S === 'SF' || value.AnimalDisciplineCode_M_S === 'G') { return true; }
            vError = 0;
            vErrDescription = [];
            vFailed = false;
            CountListFlag = '';
            HostStatCountFlag = 0;
            HostStatAreaFlag = 0;
            PlantPreservationOtherFlag = 0;
            PlantTargetObservedCodeFlag = 0;
            plantDisciplineCode = "";
            FSFlag = 0;
            FSFlagNum = 0;
            var rowid = value.id_M_N;
            var result = Iterate2(value);
            if (result.vError === 0) {
                var vpayload = JSON.stringify(SubmitRecord(objectifyPHFormforSubmit(value)));
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
        syncPHRefCodes();
        syncActivityData();
        syncBPHstaffData();
        syncIPHstaffData();
        syncNPHstaffData();
        syncTaxaData();
        table.destroy();
        loadData();
        clearMarkers();
        if (AppMode === "PH") {
            loadMapMarkers();
        }
        if (AppMode === "AH") {
            loadMapMarkersAH();
        }
        if (infoWindow) {
            infoWindow.close();
        }
        setTimeout(EnableFormPH(), 1000);
    }
}
function EnableFormPH() {
    $('#DownloadPH').addClass('btn-default');
    $('#SyncPH').addClass('btn-info');
    $('#newObservationPH').addClass('btn-default');
    $('#DownloadPH').attr('disabled', false);
    $('#DownloadPH').removeClass('disabled');
    $('#SyncPH').attr('disabled', false);
    $('#SyncPH').removeClass('disabled');
    $('#newObservationPH').attr('disabled', false);
    $('#newObservationPH').removeClass('disabled');
    $('#mb6 .progText').text("");
    $('#modalProgress').modal('hide');
}