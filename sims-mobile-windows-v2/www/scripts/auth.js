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
}
//function authenticate(x, y) {
//    var settings = {
//        "async": false,
//        "crossDomain": true,
//        "url": "http://dev-sims.oztaxa.com/oAuth20/oAuth2API/token",
//        "beforeSend": function () {
//            s.classList.remove('hide');
//        },
//        "method": "POST",
//        "headers": {
//            "content-type": "application/x-www-form-urlencoded",
//            "cache-control": "no-cache"
//        },
//        "data": {
//            "grant_type": "password",
//            "username": x,
//            "password": y
//        }
//    };
//    $.ajax(settings).done(function (response) {
//        //alert(JSON.stringify(response));
//        s.classList.add('hide');
//        icon.classList.add('fa-check');
//        icon.classList.remove('fa-times');
//        text.innerHTML = 'Login success!';
//        $('#modalAuth').modal('hide');
//    }).fail(function (response) {
//        s.classList.add('hide');
//        icon.classList.add('fa-times');
//        icon.classList.remove('fa-check');
//        text.innerHTML = 'Login Failed!';
//    });

//}
function authenticate2(x, y) {
    Zeep.submitURL({
        from: authAddress,
        to: btoa(x + ":" + y)
    }, function (e) {
        //console.log('auth success:');
        //alert(JSON.stringify(response));
        s.classList.add('hide');
        icon.classList.add('fa-check');
        icon.classList.remove('fa-times');
        text.innerHTML = 'Login success!';
        derive_key(x, y);
        authCode = "Basic " + btoa(x + ":" + y);
        initSettings();
        //$('#modalProgress').modal('hide');
        $('.auth-username').attr('disabled', false);
        $('.auth-username').removeClass('disabled');
        $('.auth-password').attr('disabled', false);
        $('.auth-password').removeClass('disabled');
        $('.auth-send').attr('disabled', false);
        $('.auth-send').removeClass('disabled');
        $('#modalAuth').modal('hide');
        }, function (e) {
            //console.log('auth fail: ', e);

            $('.auth-username').attr('disabled', false);
            $('.auth-username').removeClass('disabled');
            $('.auth-password').attr('disabled', false);
            $('.auth-password').removeClass('disabled');
            $('.auth-send').attr('disabled', false);
            $('.auth-send').removeClass('disabled');

            s.classList.add('hide');
            icon.classList.add('fa-times');
            icon.classList.remove('fa-check');
            text.innerHTML = 'Login Failed!';
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
        //console.log('3-' +JSON.stringify(resSettings));
        var arr = resSettings.settings.auth.lastLoggedIn.filter(function (el, index) {
            if (el.user === x) { curUser = index; }
            return (el.user === x);
        });
        if (arr.length === 0) {
            $.growl.error({ title: "", message: "You must be authenticated atleast once in online mode.", location: "bc", size: "large" });
            s.classList.add('hide');
            icon.classList.add('fa-times');
            icon.classList.remove('fa-check');
            text.innerHTML = 'Login Error!';
            return;
        }
        if (arr.length > 0 && key !== arr[0].hashedPassword) {
            $.growl.error({ title: "", message: "Username or Password is incorrect.", location: "bc", size: "large" });
            s.classList.add('hide');
            icon.classList.add('fa-times');
            icon.classList.remove('fa-check');
            text.innerHTML = 'Login Failed!';
            return;
        }
        if (arr.length > 0 && key === arr[0].hashedPassword) {
            resSettings.settings.auth.lastLoggedIn[curUser].inDateTime = new Date().toString();
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

    //Sanity checks
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
        var arr = resSettings.settings.auth.lastLoggedIn.filter(function (el, index) {
            if (el.user === u && el.hashedPassword === key) { curUser = index; }
            return (el.user === u && el.hashedPassword === key);
        });
        if (arr.length === 0) {
            var loggeduser = { "user": "", "inDateTime": "", "hashedPassword": "" };
            loggeduser.user = u;
            loggeduser.inDateTime = new Date().toString();
            loggeduser.hashedPassword = key;
            resSettings.settings.auth.lastLoggedIn.push(loggeduser);
        }
        else if (arr.length > 0 && u === arr[0].user) {
            resSettings.settings.auth.lastLoggedIn[curUser].hashedPassword = key;
            resSettings.settings.auth.lastLoggedIn[curUser].inDateTime = new Date().toString();
        }
        //resSettings.settings.auth.authenticated = 1;
        //resSettings.settings.auth.hashedPassword = key;
        //resSettings.settings.auth.lastLoggedInUser = u;
        //resSettings.settings.auth.lastLoggedInDateTime = new Date().toString();
        db.transaction(function (tx) {
            tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
                //alert("Row inserted.");
                //return e + pad(nextID.toString(), 4);
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating Auth Settings. " + err.message, location: "bc", size: "large" });
        });
        //console.log('2-' +JSON.stringify(resSettings));
    };
    mypbkdf2.deriveKey(status_callback, result_callback);
}
$('#modalAuth').keypress(function (e) {
    if (e.which === 13) {
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
