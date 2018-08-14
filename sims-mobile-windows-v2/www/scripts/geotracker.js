$(document).on('click','#startTracking_start', function(){
    tracking_data = [];
    var lastUpdateTime,
        minFrequency = 10 * 1000,
        watchOptions = {
            timeout: 60 * 60 * 1000,
            maxAge: 0,
            enableHighAccuracy: true
        };
    // Start tracking the User
    watch_id = navigator.geolocation.watchPosition(
        // Success
        function (position) {
            var now = new Date();
            if (lastUpdateTime && now.getTime() - lastUpdateTime.getTime() < minFrequency) {
                console.log("Ignoring position update");
                return;
            }
            tracking_data.push(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            lastUpdateTime = now;
        },
        // Error
        function (error) {
            console.log(error);
        },
        // Settings
        watchOptions);
    // Tidy up the UI
    track_id = $("#track_id").val();  
    //$("#track_id").hide();    
    $("#startTracking_status").html("Tracking: <strong>" + track_id + "</strong>");
});

$(document).on('click','#startTracking_stop', function(){
    // Stop tracking the user
    navigator.geolocation.clearWatch(watch_id);
    // Save the tracking data
    $('#trackfile').val(JSON.stringify(tracking_data));
    // Reset watch_id and tracking_data 
    watch_id = null;
    tracking_data = [];

    // Tidy up the UI
    //$("#track_id").val("").show();
    $("#startTracking_status").html("Stopped tracking : <strong>" + track_id + "</strong>");
});

// When the user views the Track Info page
$(document).on('click','#track_info', function(){
	
	// Get all the GPS data for the specific workout
    var data = results.observations[curIdx - 1].trackfile;
	
	// Turn the stringified GPS data back into a JS object
    data = JSON.parse(data);

    // Set the initial Lat and Long of the Google Map
    var x = data.length - 1;
    var myLatLng = new google.maps.LatLng(data[x].Ua, data[x].Va);

    trackCoords = [];
    for (var i = 0; i < markersc.length; i++) {
        markersc[i].setMap(null);
    };
    for (var j = 0; j < paths.length; j++) {
        paths[j].setMap(null);
    };

    // Add each GPS entry to an array
    for(var k=0; k<data.length; k++){
        var latlngc = new google.maps.LatLng(data[k].Ua, data[k].Va);
        trackCoords.push(latlngc);
        var markerc = new google.maps.Marker({
            map: mapc,
            position: latlngc,
            title: "Point " + (k + 1)
        });
        markersc.push(markerc);
    }
    // Plot the GPS entries as a line on the Google Map
    var trackPath = new google.maps.Polyline({
      map: mapc,
      path: trackCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    paths.push(trackPath);
    //mapc.fitBounds(trackCoords);
    trackPath.setMap(mapc);
    mapc.setZoom(21);
    mapc.setCenter(myLatLng);
    // Apply the line to the map
    var zi = $('#modalForm').css('z-index');
    $('#modalMap').css('z-index', zi + 100);
    $('#modalMap').modal();
});
$(document).on("shown.bs.modal", "#modalMap", function () {
    google.maps.event.trigger(mapc, "resize");
});