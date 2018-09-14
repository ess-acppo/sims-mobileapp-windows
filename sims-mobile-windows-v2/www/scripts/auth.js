/* global*/
var text;
var icon;
var s;
var authCode;

function initAuth() {
    document.querySelector('.auth-send')
        .addEventListener('click', function () {
            var unameValue = document.querySelector('.auth-username').value;
            var pwdValue = document.querySelector('.auth-password').value;

            s = document.querySelector('.auth-send .fa-spin');
            s.classList.remove('hide');
            text = document.querySelector('.auth-result .text');
            icon = document.querySelector('.auth-result .fa');

            if (statusElem.innerHTML === 'online') {
                authenticate2(unameValue, pwdValue);
            }
            if (statusElem.innerHTML === 'offline') {
                authenticate3(unameValue, pwdValue);
            }
        });
};
function authenticate(x, y) {

    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://dev-sims.oztaxa.com/oAuth20/oAuth2API/token",
        "beforeSend": function () {
            s.classList.remove('hide');
        },
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        "data": {
            "grant_type": "password",
            "username": x,
            "password": y
        }
    };

    $.ajax(settings).done(function (response) {
        //alert(JSON.stringify(response));
        s.classList.add('hide');
        icon.classList.add('fa-check');
        icon.classList.remove('fa-times');
        text.innerHTML = 'Login success!';
        $('#modalAuth').modal('hide');
    }).fail(function (response) {
        s.classList.add('hide');
        icon.classList.add('fa-times');
        icon.classList.remove('fa-check');
        text.innerHTML = 'Login Failed!';
    });

}
function authenticate2(x, y) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://online-dev.agriculture.gov.au/ords-int/rest/sims/plant_health/taxa",
        "method": "GET",
        "beforeSend": function () {
            $('#mb6 .progText').text("Authenticating ...");
            $('#modalProgress').modal();
        },
        "headers": {
            "authorization": "Basic " + btoa(x + ":" + y),
            "cache-control": "no-cache"
        }
    };
    $.ajax(settings).done(function (response) {
        //alert(JSON.stringify(response));
        s.classList.add('hide');
        icon.classList.add('fa-check');
        icon.classList.remove('fa-times');
        text.innerHTML = 'Login success!';
        derive_key(x, y);
        authCode = "Basic " + btoa(x + ":" + y);
        initSettings();
        //$('#modalProgress').modal('hide');
        $('#modalAuth').modal('hide');
    }).fail(function (response) {
        $('#mb6 .progText').text("");
        $('#modalProgress').modal('hide');
        s.classList.add('hide');
        icon.classList.add('fa-times');
        icon.classList.remove('fa-check');
        text.innerHTML = 'Login Failed!';
        $.growl.error({ title: "", message: "Username or Password is incorrect.", location: "bc", size: "large" });
    });
}
function authenticate3(x, y) {
    var password = y;
    var salt = "SAGITTARIUS";
    var iterations = 1000;
    var bytes = 16;
    var mypbkdf2 = new PBKDF2(password, salt, iterations, bytes);
    var status_callback = function (percent_done) {
        //display_message("Computed " + Math.floor(percent_done) + "%")
        //console.log("Computed " + Math.floor(percent_done) + "%");
    };
    var result_callback = function (key) {
        //console.log("The derived " + (bytes * 8) + "-bit key is: " + key);
        if (!resSettings) {
            $.growl.error({ title: "", message: "You must be authenticated atleast once in online mode.", location: "bc", size: "large" });
            $('#mb6 .progText').text("");
            $('#modalProgress').modal('hide');
            s.classList.add('hide');
            icon.classList.add('fa-times');
            icon.classList.remove('fa-check');
            text.innerHTML = 'Login Error!';
            return;
        }
        if (!resSettings.settings.auth.hashedPassword) {
            $.growl.error({ title: "", message: "You must be authenticated atleast once in online mode.", location: "bc", size: "large" });
            $('#mb6 .progText').text("");
            $('#modalProgress').modal('hide');
            s.classList.add('hide');
            icon.classList.add('fa-times');
            icon.classList.remove('fa-check');
            text.innerHTML = 'Login Error!';
            return;
        }
        if (x !== resSettings.settings.auth.lastLoggedInUser || key !== resSettings.settings.auth.hashedPassword) {
            $.growl.error({ title: "", message: "Username or Password is incorrect.", location: "bc", size: "large" });
            $('#mb6 .progText').text("");
            $('#modalProgress').modal('hide');
            s.classList.add('hide');
            icon.classList.add('fa-times');
            icon.classList.remove('fa-check');
            text.innerHTML = 'Login Failed!';
            return;
        }
        if (x === resSettings.settings.auth.lastLoggedInUser && key === resSettings.settings.auth.hashedPassword) {
            resSettings.settings.auth.lastLoggedInDateTime = new Date().toUTCString;
            db.transaction(function (tx) {
                tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
                    //alert("Row inserted.");
                    //return e + pad(nextID.toString(), 4);
                });
            }, function (err) {
                $.growl.error({ title: "", message: "An error occured while updating Auth Settings. " + err.message, location: "bc", size: "large" });
            });
            s.classList.add('hide');
            icon.classList.add('fa-check');
            icon.classList.remove('fa-times');
            text.innerHTML = 'Login success!';
            initSettings();
            //$('#modalProgress').modal('hide');
            $('#modalAuth').modal('hide');
            return;
        }
    };
    mypbkdf2.deriveKey(status_callback, result_callback);
}
function derive_key(u, p) {
    var password = p;
    var salt = "SAGITTARIUS";
    var iterations = 1000;
    var bytes = 16;

    //var password = document.pbkdf2form.password.value;
    //var salt = document.pbkdf2form.salt.value;
    //var iterations = document.pbkdf2form.iterations.value;
    //var bytes = document.pbkdf2form.bytes.value;

    // Sanity checks
    //if (!password || !salt || !iterations || !bytes)
    //    return display_message("Please fill in all values");

    //if (iterations < 0 || iterations > 10000)
    //    return display_message("Invalid number of iterations. The maximum is limited to 10000 for this demo.");

    //if (bytes < 0 || bytes > 100)
    //    return display_message("Invalid number of bytes. The maximum is limit to 100 for this demo.");

    var mypbkdf2 = new PBKDF2(password, salt, iterations, bytes);
    var status_callback = function (percent_done) {
        //display_message("Computed " + Math.floor(percent_done) + "%")
        //console.log("Computed " + Math.floor(percent_done) + "%");
    };
    var result_callback = function (key) {
        //console.log("The derived " + (bytes * 8) + "-bit key is: " + key);
        resSettings.settings.auth.authenticated = 1;
        resSettings.settings.auth.hashedPassword = key;
        resSettings.settings.auth.lastLoggedInUser = u;
        resSettings.settings.auth.lastLoggedInDateTime = new Date().toString();
        db.transaction(function (tx) {
            tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
                //alert("Row inserted.");
                //return e + pad(nextID.toString(), 4);
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating Auth Settings. " + err.message, location: "bc", size: "large" });
        });
    };
    mypbkdf2.deriveKey(status_callback, result_callback);
}
$('#modalAuth').keypress(function (e) {
    if (e.which == 13) {
        var unameValue = document.querySelector('.auth-username').value;
        var pwdValue = document.querySelector('.auth-password').value;

        s = document.querySelector('.auth-send .fa-spin');
        s.classList.remove('hide');
        text = document.querySelector('.auth-result .text');
        icon = document.querySelector('.auth-result .fa');

        if (statusElem.innerHTML === 'online') {
            authenticate2(unameValue, pwdValue);
        }
        if (statusElem.innerHTML === 'offline') {
            authenticate3(unameValue, pwdValue);
        }
    }
});