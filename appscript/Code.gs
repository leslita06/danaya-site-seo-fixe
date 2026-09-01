/**
 * Danaya, réception des demandes de démo du site web.
 *
 * Ce script reçoit ce que le formulaire de la page /contact/ envoie, ajoute une
 * ligne dans l'onglet « Demandes » du classeur, puis prévient l'équipe par
 * e-mail. Le classeur garde la trace, l'e-mail réveille quelqu'un : une demande
 * qui n'atterrit que dans un classeur que personne n'ouvre est perdue de la
 * même façon qu'une demande jamais envoyée.
 *
 * Il écrit en se calant sur la LIGNE D'EN-TÊTE : les noms de colonnes du
 * classeur doivent correspondre aux noms de champs envoyés par le formulaire.
 * Ajouter, retirer ou déplacer une colonne ne demande donc jamais de retoucher
 * ce script.
 */
var CLASSEUR = '1hYeKyfGlFlZoAAmkxmRl6CVX3vk8xNYufNZxYVyzOvQ';
var ONGLET = 'Demandes';
var DESTINATAIRES = 'contact@danaya.africa';
var LIEN_CLASSEUR = 'https://docs.google.com/spreadsheets/d/' + CLASSEUR + '/edit';

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var sh = SpreadsheetApp.openById(CLASSEUR).getSheetByName(ONGLET);
    var enTetes = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
    var horodatage = Utilities.formatDate(new Date(), 'Africa/Abidjan', 'yyyy-MM-dd HH:mm');
    var ligne = enTetes.map(function (h) {
      if (h === 'Horodatage') { return horodatage; }
      return d[h] === undefined ? '' : d[h];
    });
    sh.appendRow(ligne);

    // La notification ne doit JAMAIS faire échouer l'enregistrement : la demande
    // est déjà écrite, un envoi qui casse ne doit pas faire croire au visiteur
    // que sa demande est perdue. On l'isole donc dans son propre try.
    try {
      previens(enTetes, ligne, horodatage);
    } catch (errMail) {
      console.error('notification non envoyee : ' + errMail);
    }

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    // On journalise l'échec ET on le renvoie : un formulaire qui ne peut pas
    // savoir s'il a réussi finit par afficher une confirmation mensongère.
    console.error(err);
    return ContentService.createTextOutput(JSON.stringify({ ok: false, erreur: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function previens(enTetes, ligne, horodatage) {
  var champ = function (nom) {
    var i = enTetes.indexOf(nom);
    return i === -1 ? '' : ligne[i];
  };
  // Les clés sont EXACTEMENT les en-têtes du classeur, en minuscules et sans
  // accent : « Nom » ou « Société » rendraient une chaîne vide sans erreur.
  var nom = champ('nom') || champ('societe') || 'Nouvelle demande';
  var lignes = [];
  for (var i = 0; i < enTetes.length; i++) {
    if (ligne[i] !== '') { lignes.push(enTetes[i] + ' : ' + ligne[i]); }
  }
  var texte = lignes.join('\n') + '\n\nToutes les demandes : ' + LIEN_CLASSEUR;
  var html = '<p>' + lignes.join('<br>') + '</p><p><a href="' + LIEN_CLASSEUR +
             '">Ouvrir le classeur des demandes</a></p>';
  var options = { htmlBody: html, name: 'Site Danaya' };
  // Répondre depuis la boîte réveillée doit écrire au prospect, pas au robot.
  var mail = champ('email');
  if (mail) { options.replyTo = mail; }
  MailApp.sendEmail(DESTINATAIRES, 'Demande de démo : ' + nom + ' (' + horodatage + ')',
                    texte, options);
}

function doGet() {
  return ContentService.createTextOutput('Danaya, reception des demandes de demo. Utiliser POST.');
}
