function createDB() {
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(createTable, errorCB, successCB);
}

function createTable(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS ContactUs (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, message TEXT)');
}

function errorCB(err) {
    alert("Error processing SQL: " + err.code);
}

function successCB() {
    console.log("success!");
}

// Path: DeleviryGoo\JS\database.js
//insert data into contact us table
function insertData() {
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(insertRecord, errorCB, successCB);
}

function insertRecord(tx) {   
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    tx.executeSql('INSERT INTO ContactUs (name, email, phone, message) VALUES ("' + name + '","' + email + '","' + phone + '","' + message + '")');
}

// Path: DeleviryGoo\JS\database.js
//select data from contact us table
function selectData() {
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(selectRecord, errorCB, successCB);
}

function selectRecord(tx) {
    tx.executeSql('SELECT * FROM ContactUs', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    var len = results.rows.length;
    for (var i = 0; i < len; i++) {
        console.log("name: " + results.rows.item(i).name + " email: " + results.rows.item(i).email + " phone: " + results.rows.item(i).phone + " message: " + results.rows.item(i).message);
    }
}

// Path: DeleviryGoo\JS\database.js
//delete data from contact us table
function deleteData() {
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(deleteRecord, errorCB, successCB);
}

function deleteRecord(tx) {
    tx.executeSql('DELETE FROM ContactUs');
}

// Path: DeleviryGoo\JS\database.js
//drop table from contact us table
function dropTable() {  
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(dropRecord, errorCB, successCB);
}

function dropRecord(tx) {
    tx.executeSql('DROP TABLE IF EXISTS ContactUs');
}

// Path: DeleviryGoo\JS\database.js
//drop database from contact us table
function dropDB() {
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(dropDBRecord, errorCB, successCB);
}

function dropDBRecord(tx) {
    tx.executeSql('DROP DATABASE ContactUs');
}

// Path: DeleviryGoo\JS\database.js
//get data from contact us table
function getData() {
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(getRecord, errorCB, successCB);
}

function getRecord(tx) {
    tx.executeSql('SELECT * FROM ContactUs', [], getSuccess, errorCB);
}


function getSuccess(tx, results) {
    var len = results.rows.length;
    for (var i = 0; i < len; i++) {
        console.log("name: " + results.rows.item(i).name + " email: " + results.rows.item(i).email + " phone: " + results.rows.item(i).phone + " message: " + results.rows.item(i).message);
    }
}

// Path: DeleviryGoo\JS\database.js
//update data from contact us table
function updateData() {
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(updateRecord, errorCB, successCB);
}

function updateRecord(tx) {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    tx.executeSql('UPDATE ContactUs SET name = "' + name + '", email = "' + email + '", phone = "' + phone + '", message = "' + message + '"');
}

// Path: DeleviryGoo\JS\database.js
//get data from contact us table
function getData() {
    var db = window.openDatabase("ContactUs", "1.0", "ContactUs", 200000);
    db.transaction(getRecord, errorCB, successCB);
}

function getRecord(tx) {
    tx.executeSql('SELECT * FROM ContactUs', [], getSuccess, errorCB);
}

function getSuccess(tx, results) {
    var len = results.rows.length;
    for (var i = 0; i < len; i++) {
        console.log("name: " + results.rows.item(i).name + " email: " + results.rows.item(i).email + " phone: " + results.rows.item(i).phone + " message: " + results.rows.item(i).message);
    }
}
