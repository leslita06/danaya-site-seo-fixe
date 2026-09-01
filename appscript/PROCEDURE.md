# Brancher le formulaire, 2 minutes

Une seule étape ne peut pas se faire par API : la publication du script. Elle se fait
depuis un compte qui a accès au classeur.

1. Ouvrir https://script.google.com et créer un projet, nommé par exemple
   « Danaya, demandes de démo ».
2. Remplacer tout le contenu de `Code.gs` par le fichier `Code.gs` fourni à côté de
   cette note. L'identifiant du classeur y est déjà renseigné.
3. Déployer, Nouveau déploiement, type **Application Web**.
   - Exécuter en tant que : **moi**
   - Qui a accès : **Tout le monde**
4. Autoriser à la première exécution (Google affiche un écran d'avertissement pour un
   script non vérifié : Paramètres avancés, puis Accéder au projet). Google demande
   deux autorisations : écrire dans le classeur, et **envoyer des e-mails en votre
   nom**. La seconde sert à prévenir contact@danaya.africa à chaque demande reçue ;
   sans elle, les demandes s'écrivent quand même dans le classeur, mais personne
   n'est averti.
5. Copier l'URL qui se termine par `/exec`.
6. Dans le site, ouvrir `contact/index.html` et remplacer `__ENDPOINT_FORMULAIRE__`
   par cette URL. C'est la seule occurrence à changer.
7. Envoyer une demande de test depuis la page et vérifier qu'une ligne apparaît dans
   l'onglet « Demandes ».

Chaque demande reçue part aussi par e-mail à **contact@danaya.africa**, avec le
détail de la demande et un lien vers le classeur. Répondre à cet e-mail écrit
directement au prospect. Pour changer cette adresse, modifier la ligne
`var DESTINATAIRES` en tête du script (plusieurs adresses se séparent par une
virgule).

Pour modifier le script plus tard : Déployer, Gérer les déploiements, crayon,
Nouvelle version. L'URL `/exec` ne change pas.
