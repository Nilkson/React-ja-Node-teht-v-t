function update (studypoints, studentcode) {
    // sisältä mysql asennuksen
var mysql = require('mysql');
 
// luodaan yhteys
var con = mysql.createConnection({
  host: "localhost",    // ip osoite mysql-apalvelimelle tai localhost
  user: "root",    // käyttäjätunnus mysql-tietokantaan, root XAMPPissa oletus
  password: "", // tietokannan salasana. Tyhjä salasana XAMPPissa oletus
  database: "Opiskelijakanta" // XAMPPissa luomasi tietokannan nimi
});
// Otetaan yhteys tietokantaan

// Otetaan yhteys tietokantaan
con.connect(function(err) {
    if (err) throw err;
    // jos yhteys on onnistunut, haetaan tiedot
    con.query("UPDATE students SET studypoints = ? WHERE studentcode = ?", [studypoints, studentcode], function (err, result) {
      // Jos virhe, kerrotaan se
      if (err) throw err;
      // jos ei tullut virheitä, näytetään tulos
      console.log(`updated student with studentcode ${studentcode} with studypoints to ${studypoints}`, result);
    });
  });
}
module.exports = {update}