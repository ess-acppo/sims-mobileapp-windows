/*
INSERT ROW CODE
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
    today = dd.toString() + mm.toString() + yyyy.toString();
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO observations (id, filedt, data) VALUES (?,?,?)", [1, today, data], function (tx, res) {
            alert("Data Added");
        });
    }, function (err) {
        alert("An error occured while saving the note");
    });
*/

