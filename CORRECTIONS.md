# Site Danaya, version corrigée pour le référencement

Archive produite le 1er septembre 2026 par Mstudio, à partir du build Astro livré
par l'équipe Danaya. Le contenu éditorial n'a pas été réécrit : les corrections
portent sur ce que les moteurs de recherche lisent, sur le poids des pages et sur
le formulaire de contact.

## Ce qui a changé, mesuré avant et après

| Indicateur | Avant | Après |
|---|---|---|
| Pages | 26 | 28 |
| Titres hors de la fourchette 30 à 60 signes | 5 | 0 |
| Descriptions hors de la fourchette 120 à 158 signes | 4 | 0 |
| Pages indexables sans données structurées | 1 | 0 |
| Images sans dimensions déclarées | 101 | 0 |
| Images sans chargement différé | 93 | 28 |
| Pages recevant moins de 6 liens internes | 13 | 6 |
| Poids des ressources chargées | 1761 Ko | 1103 Ko |

Les deux pages en plus sont la politique de confidentialité, qui était liée depuis
le pied de page de tout le site sans exister, et la page 404.

Le poids total de l'archive est plus élevé que celui des ressources chargées : les
28 cartes de partage du dossier `og/` ne sont jamais téléchargées par un visiteur,
seulement par les robots des réseaux sociaux quand un lien est partagé.

## Le détail, passe par passe

1. Cinq titres ramenés sous 60 signes, dans la balise `title` comme dans les
   métadonnées de partage.
2. Quatre descriptions ramenées dans la fourchette lisible par Google.
3. Vingt-huit cartes de partage PNG au format 1200 x 630 générées, dans le dossier
   `og/`. Le SVG unique qui servait à toutes les pages a été retiré : aucun réseau
   social ne sait l'afficher.
4. Page `/privacy/` créée, avec les 1373 mots du texte réellement servi sur
   danaya.africa. Les 27 liens du pied de page pointent maintenant vers une page
   qui existe.
5. Page 404 créée, aux couleurs du site, avec sept chemins de retour.
6. Données structurées `Blog` et `BreadcrumbList` ajoutées sur `/blog/`.
7. Hiérarchie des titres reprise sur sept pages, sans saut de niveau.
8. Neuf pages solution et article renvoient maintenant vers les pages secteur.
9. Deux photos converties en WebP, 240 Ko économisés.
10. Cent sept images dimensionnées, soixante et onze passées en chargement différé.
11. Treize fichiers jamais affichés retirés, 419 Ko.
12. Plan de site refait : 27 adresses, chacune datée.
13. Les huit pays de l'UEMOA portent leur drapeau sur la carte de l'accueil,
    au lieu d'une liste en texte. Les SVG sont embarqués dans `img/flags/` :
    le site ne dépend d'aucun service tiers pour afficher ses propres visuels.
    Les noms restent en texte, un moteur de recherche ne lit pas une image.
14. Titre de la page Développeurs corrigé : « Intégrez les contrôles KYC, KYB et
    AML en quelques minutes ». Un sigle de réglementation ne s'intègre pas, c'est
    le contrôle qui le met en oeuvre qui s'intègre.
15. Vingt et un tirets cadratins retirés.
16. Deux logos clients ajoutés au mur « Ils nous font confiance » :
    Bridge Microfinance et Kolinvest. Les cinq autres noms transmis par
    Danaya (Credafrica, Wizall, Paymetrust, Jèko, MAFA) étaient déjà en
    place, sauf MAFA dont aucun logo public n'existe.
17. `robots.txt` refait et `llms.txt` ajouté, pour les moteurs de réponse.
18. Les 8 pages secteur portent la réglementation qui les concerne, article par
    article, et leur FAQ passe de 3 à 7 ou 9 questions.

## Ce que lisent ChatGPT, Claude, Perplexity et Gemini

Ces moteurs ne passent pas par le même flux que Google, et ils n'exécutent pas de
JavaScript : ils lisent le HTML servi, tel quel. Trois choses ont été faites pour
eux.

Le `robots.txt` NOMME maintenant leurs agents, séparés en deux familles parce que
les conséquences ne sont pas les mêmes. Dix agents de citation (OAI-SearchBot,
ChatGPT-User, Claude-User, Claude-SearchBot, PerplexityBot, Perplexity-User,
Google-Extended, DuckAssistBot, Amazonbot, Applebot) lisent la page pour la citer
dans une réponse : les refuser, c'est disparaître de ces moteurs. Huit agents de
collecte (GPTBot, ClaudeBot, anthropic-ai, Applebot-Extended, CCBot,
Meta-ExternalAgent, cohere-ai, Bytespider) alimentent l'entraînement des modèles.
Les deux familles sont autorisées ; refuser l'une se fait en passant son bloc de
`Allow` à `Disallow`, sans toucher au reste.

`llms.txt` à la racine donne le plan du site en texte clair, les 27 pages avec
leur titre et leur résumé, selon la convention de llmstxt.org. `llms-full.txt`
porte le contenu entier des pages, 117 Ko, pour un modèle qui veut la matière sans
parcourir le site.

Deux points restent hors de cette archive et se règlent chez Danaya. Le site en
production sert encore `noindex` à tous les robots, y compris ceux de ChatGPT, de
Claude et de Perplexity, et `robots.txt` y répond 404 : tant que ce build n'est
pas déployé, rien de ce qui précède n'a d'effet. Et le domaine est derrière
Cloudflare, dont l'option de blocage des robots d'IA agit AVANT le `robots.txt` :
elle est à vérifier dans le tableau de bord.

## Le formulaire de contact

Dans la version d'origine, l'adresse de destination du formulaire était vide dans
le code, et le script sautait l'appel réseau pour afficher directement l'écran de
confirmation. Un visiteur voyait « Demande envoyée », personne chez Danaya ne
recevait rien, et la perte était invisible des deux côtés.

Le script a été réécrit : il n'annonce jamais un succès qu'il n'a pas vérifié. Si
l'envoi échoue, il le dit et renvoie vers l'e-mail et le WhatsApp de Danaya.

Chaque demande est écrite dans un Google Sheet et notifiée par e-mail à
contact@danaya.africa, avec l'adresse du prospect en réponse : répondre au message
de notification écrit directement au prospect.

Il reste **une étape à faire depuis un compte Danaya**, deux minutes, décrite dans
`appscript/PROCEDURE.md` : publier le petit script de réception. Tant qu'elle n'est
pas faite, le formulaire affiche « Formulaire indisponible » au lieu de mentir.


## Les pages secteur

Une page de 300 mots ne se fait citer ni par un moteur de recherche ni par un
moteur de réponse : il n'y a rien à citer. Les huit pages secteur en faisaient
entre 250 et 310. Chacune porte maintenant ce que le texte officiel exige
vraiment de ce métier, avec le renvoi à l'article, et un déroulé qui relie chaque
contrôle à l'exigence correspondante.

| Page | Mots avant | Mots après | Questions |
|---|---|---|---|
| Banques | 310 | 1234 | 9 |
| Microfinances | 307 | 1171 | 8 |
| Fintech | 279 | 1162 | 8 |
| Assurances | 265 | 989 | 8 |
| Notaires | 271 | 977 | 7 |
| Immobilier | 279 | 961 | 7 |
| Gaming et casinos | 261 | 895 | 7 |
| Mobilité et livraison | 255 | 846 | 7 |

Les textes lus, en entier, pour écrire ces pages : la loi uniforme LBC/FT/FP du
31 mars 2023 adoptée par le Conseil des ministres de l'UMOA, 85 pages, et
l'instruction n°003-03-2025 du 18 mars 2025 de la BCEAO. Les articles cités le
sont dans le corps du texte, pour que le lecteur puisse vérifier. Les huit
adresses officielles citées répondent toutes en HTTP.

Deux précisions de méthode. Les seuils chiffrés, prime d'assurance, mise au
casino, prix immobilier réglé en espèces, sont renvoyés par la loi à l'autorité
compétente ou à la CIMA : les pages disent qui fixe le seuil, jamais un montant
qui n'est pas dans le texte. Et la page Mobilité dit ce que la réglementation
demande, mais aussi ce qu'elle ne demande pas : une plateforme de mise en
relation n'est pas un assujetti de la LCB-FT, elle le devient quand elle opère un
portefeuille ou un service de paiement.

Une affirmation de votre article de blog n'a pas été reprise, faute d'avoir pu la
vérifier : celle selon laquelle un traitement biométrique demande une
autorisation préalable de l'Autorité de protection. Les pages de l'Autorité
accessibles ne la mentionnent pas. À confirmer de votre côté avant de l'écrire.

Ce qui manque encore et qui ne peut venir que de vous : les délais réels de
vérification, les registres branchés pays par pays, et un cas client par secteur.
Rien n'a été inventé à leur place.
