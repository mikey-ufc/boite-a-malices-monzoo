# boite-a-malices-monzoo
Boîte à malices pour monzoo, userscript Tampermonkey

## Installation

1. Installez l'extension [Tampermonkey](https://www.tampermonkey.net/) dans votre navigateur.
   - Sur Chrome, Edge, Brave ou un autre navigateur basé sur Chromium : ouvrez la page des extensions (`chrome://extensions`), cliquez sur « Détails » de Tampermonkey et activez « Autoriser les scripts utilisateur ». Sur les versions plus anciennes du navigateur, activez plutôt le « Mode développeur » en haut à droite de cette page.
2. Ouvrez ce lien pour installer le script : https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/aide_monzoo.user.js
3. Validez l'installation dans la fenêtre de Tampermonkey.

Les mises à jour sont ensuite proposées automatiquement par Tampermonkey.

## Convertisseur .db → .json

Vous avez un ancien fichier de sauvegarde `.db` ? Convertissez-le en `.json` ici : https://mikey-ufc.github.io/boite-a-malices-monzoo/

### Où trouver mon fichier `.db` ?

Ce fichier a été créé automatiquement par l'ancienne version du script, utilisée avec l'extension Greasemonkey sur Firefox. Il s'appelle `Boite_à_malices_pour_monzoo.db` et se trouve dans le dossier `gm_scripts` de votre profil Firefox.

1. Ouvrez Firefox et tapez `about:support` dans la barre d'adresse.
2. Sur la ligne « Dossier de profil », cliquez sur « Ouvrir le dossier ».
3. Ouvrez le dossier `gm_scripts` : le fichier `Boite_à_malices_pour_monzoo.db` s'y trouve.

Vous pouvez aussi y accéder directement depuis l'explorateur de fichiers :

- **Windows** : tapez `%APPDATA%\Mozilla\Firefox\Profiles` dans la barre d'adresse de l'explorateur, puis ouvrez le dossier de votre profil (souvent terminé par `.default` ou `.default-release`) et enfin `gm_scripts`.
- **macOS** : `~/Library/Application Support/Firefox/Profiles/<votre profil>/gm_scripts`
- **Linux** : `~/.mozilla/firefox/<votre profil>/gm_scripts`

Si vous avez plusieurs profils, regardez dans chacun d'eux. En cas de doute, lancez une recherche sur `Boite_à_malices_pour_monzoo.db` (ou simplement `*.db`) dans le dossier `Profiles`.

Copiez le fichier ailleurs (sur le bureau par exemple) avant de le déposer dans le convertisseur : ainsi l'original reste intact.

Pas de dossier `gm_scripts` ? Les versions récentes de Greasemonkey (4 et suivantes) ne créent plus de fichier `.db` : vos données n'existent alors pas sous cette forme et il n'y a rien à convertir.

Importez ensuite le fichier `.json` obtenu dans le script via « Gérer mes parcs » → « Importer mes données (fichier JSON) ».
