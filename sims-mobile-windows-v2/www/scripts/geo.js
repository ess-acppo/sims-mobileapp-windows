/*
READ FROM JSON
    $.ajax({
        method: "GET",
        url: "grpObservations.json",
        contentType: "json",
        success: function (data) {
            results = JSON.parse(data);
            for (var i = 0; i < results.observations.length; i++) {
                var latLng = new google.maps.LatLng(results.observations[i].latitude, results.observations[i].longitude);
                var id = results.observations[i].id;
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: id
                });
                google.maps.event.addListener(marker, 'click', function () {
                    if (window.sessionStorage) {
                        sessionStorage.setItem("currIdx", this.title);
                    }
                    if (infoWindow) {
                        infoWindow.close();
                    }
                    infoWindow = new google.maps.InfoWindow({
                        content: '<div id="content"><h4>Observation ' + this.title + '</h4><div id="bodyContent">' +
                        '<button type="button" class"edit" onclick="launchModal()">Edit</button></div></div>'
                    });
                    infoWindow.setPosition(this.position);
                    infoWindow.open(map);
                    map.setCenter(this.position);
                });
            }
        },
        failure: function () {
            alert('error');
        }
    });
*/

function initialize() {
    var mapTypeIds = [];
    mapTypeIds.push("GoogleRoadMaps");
    map = new google.maps.Map(element, {
        center: new google.maps.LatLng(-35.308, 149.124),
        zoom: 7,
        mapTypeId: "GoogleRoadMaps",
        mapTypeControlOptions: {
            mapTypeIds: mapTypeIds
        }
    });
    map.mapTypes.set("GoogleRoadMaps", new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            zoomlevel.innerHTML = "zoom: " + zoom;
            return "http://localhost:12345/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "SIMS",
        maxZoom: 12
    }));
    loadMapMarkers();
    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(event.latLng);
    });
};

function loadMapMarkers() {
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM observations WHERE id = ?", [1], function (tx, res) {
            results = JSON.parse(res.rows.item(0).data);
            for (var i = 0; i < results.observations.length; i++) {
                var latLng = new google.maps.LatLng(results.observations[i].latitude, results.observations[i].longitude);
                var id = results.observations[i].id;
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: id
                });
                google.maps.event.addListener(marker, 'click', function () {
                    if (window.sessionStorage) {
                        sessionStorage.setItem("currIdx", this.title);
                    }
                    if (infoWindow) {
                        infoWindow.close();
                    }
                    infoWindow = new google.maps.InfoWindow({
                        content: '<div id="content"><h4>Observation ' + this.title + '</h4><div id="bodyContent">' +
                        '<button type="button" class"edit" onclick="launchModal()">Edit</button></div></div>'
                    });
                    infoWindow.setPosition(this.position);
                    infoWindow.open(map);
                    map.setCenter(this.position);
                });
            }
        });
    }, function (err) {
        alert("An error occured while retrieving observations.");
    });
}

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $('#form1').find("input[type='text'][name='latitude']").val(position.coords.latitude);
            $('#form1').find("input[type='text'][name='longitude']").val(position.coords.longitude);
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Your location found.<br/>' + position.coords.latitude + ',' + position.coords.longitude);
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

function getJSONP(url, success) {
    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0]
            || document.documentElement;
    window[ud] = function (data) {
        head.removeChild(script);
        success && success(data);
    };
    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);
};

function LoadTASBoundaries() {
    map.data.loadGeoJson("tas.json");
};

function LoadACTBoundaries() {
    map.data.loadGeoJson("act.json");
};

function placeMarker(location) {
    newMarker = new google.maps.Marker({
        position: location,
        map: map
    });
    google.maps.event.addListener(newMarker, 'click', function () {
        if (window.sessionStorage) {
            sessionStorage.setItem("currIdx", 0);
            sessionStorage.setItem("currLat", this.getPosition().lat());
            sessionStorage.setItem("currLng", this.getPosition().lng());
        }
        $('.modal-title').text('Animal Group Summary');
        $('.modal-body').load('mo_animalGrpObserv.html');
        $('#myModal').modal({
            backdrop: 'static',
            keyboard: true,
            focus: true,
            show: true
        });
    });
    if (window.sessionStorage) {
        sessionStorage.setItem("currIdx", 0);
        sessionStorage.setItem("currLat", newMarker.getPosition().lat());
        sessionStorage.setItem("currLng", newMarker.getPosition().lng());
    }
    $('.modal-title').text('Animal Group Summary');
    $('.modal-body').load('mo_animalGrpObserv.html');
    $('#myModal').modal({
        backdrop: 'static',
        keyboard: true,
        focus: true,
        show: true
    });
};