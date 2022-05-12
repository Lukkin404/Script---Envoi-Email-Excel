/**
 * NAME: getData
 * IN : sheetName (nom de la feuille de tableur)
 * OUT : Un tableau à deux dimension des valeurs de la feuille
 * VA : Retourne une grille des valeurs d'une feuille donnée en paramètre
 */
function getData(sheetName) {
  var data = SpreadsheetApp.getActive().getSheetByName(sheetName).getDataRange().getValues();
  return data;
}


/**
 * NAME: sendEmails
 * IN : X
 * OUT : X
 * VA : Récupère les infos des feuilles et envoie le contenu de Templates à la liste présente dans Emails
 */
function sendEmails() {
  var templateData = getData("Templates");
  var emailSubject = templateData[1][0]; // Cellule A2 (objet du mail)
  var emailBody = templateData[4][0]; // Cellule A5 (corps du mail)
  var emailData = getData("Emails");
  emailData.forEach(function (row) {
    var email = row[0];
    if (email != "") MailApp.sendEmail(email, emailSubject, emailBody); // si une case vide dans la liste d'emails, simplement l'ignorer
  });
}