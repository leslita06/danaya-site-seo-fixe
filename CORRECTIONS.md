# Corrections appliquées au build du 31 août 2026

Rejouables par `projects/danaya-seo-fix/build/corriger.py`, qui part du build reçu
et n'y touche jamais.

## Bloquants

- **Politique de confidentialité.** Le pied de page des 26 pages visait
  `https://www.danaya.africa/privacy`, une adresse absente du build qui ne répondait
  que parce que l'ancien site Figma la servait encore. La page existe maintenant dans
  le site, à `/privacy/`, avec le texte réel repris de la version en ligne (1 373 mots,
  dernière mise à jour du 21 octobre 2025), et les 27 liens pointent dessus.
- **Page 404.** Créée à `/404.html`, aux couleurs du site, avec fil d'Ariane et sept
  chemins de retour. En `noindex, follow`.
- **Image de partage social.** Le `og-default.svg` est retiré : aucun réseau n'affiche
  un SVG en carte de partage. Il est remplacé par 28 PNG 1200 × 630 dans `/og/`, un par
  page, portant le titre de la page, à la charte (navy #001096, orange #FF9B00,
  Space Grotesk et Sora).

## Avant mise en ligne

- **5 titres** ramenés sous 60 caractères, dont celui du guide LCB-FT qui en faisait 81.
  Corrigés dans `<title>`, `og:title` et `twitter:title` à la fois.
- **4 descriptions** ramenées entre 120 et 158 caractères.
- **Plan de site** refait : 27 adresses, chacune datée d'un `lastmod`.
- **`/blog/`** reçoit ses données structurées : un bloc `Blog` listant les 5 articles,
  et un fil d'Ariane.
- **Maillage interne** : 9 pages solution et article renvoient désormais vers les pages
  secteur qu'elles concernent. Les pages secteur passent de 2 à 4 liens reçus à 5 à 10.

## Performance et forme

- **105 images** portent maintenant leurs dimensions, et 69 sont en chargement différé
  (la première image de chaque page reste immédiate).
- **2 photos** converties en WebP, 240 Ko économisés.
- **13 fichiers** jamais affichés retirés, 419 Ko, dont une planche de contrôle de
  production de 221 Ko.
- **Hiérarchie des titres** : plus aucun saut de niveau sur les 7 pages concernées.
- **21 tirets cadratins** retirés.

## Non corrigé, à trancher

- `cima-afrique.org`, cité en source sur la page assurances, ne répond pas depuis notre
  serveur. À revérifier depuis Abidjan avant de conclure : un filtrage par pays est une
  explication au moins aussi probable qu'un domaine hors service.
- Les 8 pages secteur restent autour de 310 mots. Les étoffer à 700 ou 900 mots demande
  de la matière métier, pas une passe automatique.
- Les logos Waribei et Yango sont dans le dossier public sans être affichés nulle part :
  à afficher ou à retirer selon l'accord de citation.
