// sisältä mysql asennuksen
var mysql = require('mysql');
 
// luodaan yhteys
var con = mysql.createConnection({
  host: "localhost",    // ip osoite mysql-apalvelimelle tai localhost
  user: "root",    // käyttäjätunnus mysql-tietokantaan, root XAMPPissa oletus
  password: "", // tietokannan salasana. Tyhjä salasana XAMPPissa oletus
  database: "Opiskelijakanta" // XAMPPissa luomasi tietokannan nimi
});

const add = require("./add")
const remove = require("./delete")
const find = require("./find")
const update = require("./update")
const addgrade = require("./addgrade")
const updategrade = require("./updategrade")

const student = {studentcode: "000002",name: "hurrdurr", email: "derp69@riveria.fi", studypoints: 120}
const student2 = {studentcode: "000003",name: "herpderp", email: "derp69@riveria.fi", studypoints: 120}
const grade = {studentcode: "000002", coursecode: "000002", grade: 2}
// add.add(student)
// add.add(student2)

// remove.remove(000003)

find.find(100)
// update.update(140, 000002)
// addgrade.addgrade(grade)
updategrade.update(4, 000002)



// Otetaan yhteys tietokantaan
con.connect(function(err) {
  if (err) throw err;
  // jos yhteys on onnistunut, haetaan tiedot
  con.query("SELECT * FROM students", function (err, result, fields) {
    // Jos virhe, kerrotaan se
    if (err) throw err;
    // jos ei tullut virheitä, näytetään tulos
    console.log(result);
  });
  con.query("SELECT * FROM grades", function (err, result, fields) {
    // Jos virhe, kerrotaan se
    if (err) throw err;
    // jos ei tullut virheitä, näytetään tulos
    console.log(result);
  });
});

