// ==UserScript==
// @name			Boite à malices pour monzoo
// @namespace		https://github.com/mikey-ufc/boite-a-malices-monzoo
// @version			3.16.1
// @author			Mikey_UFC
// @description		Script apportant quelques corrections et ajouts pour un plus grand confort de jeu (version Tampermonkey)
// @match			https://monzoo.net/*
// @homepageURL		https://github.com/mikey-ufc/boite-a-malices-monzoo
// @supportURL		https://github.com/mikey-ufc/boite-a-malices-monzoo/issues
// @updateURL		https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/aide_monzoo.user.js
// @downloadURL		https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/aide_monzoo.user.js
// @require			https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js#sha256=fc9a93dd241f6b045cbff0481cf4e1901becd0e12fb45166a8f17f95823f0b1a
// @require			https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/jquery-ui.min.js#sha256=99b95259f6d8cdaabf7fee1a93232113a5c42c2a2ee236e480fbfe2503c44763
// @require			https://cdn.jsdelivr.net/npm/flot@0.8.3/jquery.flot.js#sha256=b7b931f273c38b1277b9c6c1f4e05c4ec09885a487bddaf3279e2d7e49a38e12
// @resource		jQueryUICSS                               https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/jquery-ui.min.css#sha256=4f59f420d8f5f69920bd30a484348ee272ca1f934be09c1058450ee71187b410
// @resource		ui-bg_glass_25_cb842e_1x400.png           https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-bg_glass_25_cb842e_1x400.png#sha256=e6b694b6cde814e03080778c7d71bfd7d30659f968b8a580df6e26e11f67fd13
// @resource		ui-bg_glass_70_ede4d4_1x400.png           https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-bg_glass_70_ede4d4_1x400.png#sha256=89366aadab6e9ccc30fa795da56d0b7cf49aae8d7c935b1fbeb6f3f967c3c194
// @resource		ui-bg_glass_100_f5f0e5_1x400.png          https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-bg_glass_100_f5f0e5_1x400.png#sha256=27f62d2f4bccff559bbdebef3b7a19c1d3e0a5740bf621847806d1cbfaaf0336
// @resource		ui-bg_highlight-hard_65_fee4bd_1x100.png  https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-bg_highlight-hard_65_fee4bd_1x100.png#sha256=3691cf80de2682fd79fa11e51ca08982b1c8be47e03c07e7e03026ccf4fa01b5
// @resource		ui-bg_highlight-hard_75_f5f5b5_1x100.png  https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-bg_highlight-hard_75_f5f5b5_1x100.png#sha256=b0d99543743a779659f61037d37acd11daf55af6318f44a78d78aafa5d55115d
// @resource		ui-bg_highlight-hard_100_f4f0ec_1x100.png https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-bg_highlight-hard_100_f4f0ec_1x100.png#sha256=40741c450c0d042f0586fe803628468b399ebd506aa34a73369e85c8e4e20de3
// @resource		ui-bg_inset-soft_100_f4f0ec_1x100.png     https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-bg_inset-soft_100_f4f0ec_1x100.png#sha256=3719f3f00bbb11d08b63cb80df8b5e2e1c3a1595d2526efc5931cff062686dfd
// @resource		ui-icons_c47a23_256x240.png               https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-icons_c47a23_256x240.png#sha256=aeff005b90f40ee013aeddb06e783df06952fab45ad3a3d83501d9e3575fd0ad
// @resource		ui-icons_cb672b_256x240.png               https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-icons_cb672b_256x240.png#sha256=e97a016af3fd75ec1a51ab5e192acc4b83401c62d1a2c5e648037203b6c9a3e8
// @resource		ui-icons_f08000_256x240.png               https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-icons_f08000_256x240.png#sha256=6f9600d2b15cc76a9382e88aca627085375cff954b22e317f0c0f3684f89567f
// @resource		ui-icons_f35f07_256x240.png               https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-icons_f35f07_256x240.png#sha256=2266a33068a507d3e112378df610513c91645d4bcab319185c7b3855e9bbdd9f
// @resource		ui-icons_ff7519_256x240.png               https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-icons_ff7519_256x240.png#sha256=29d7c387b5d125891104fe9770f29824eb8511c246630268db763b17e6c123d7
// @resource		ui-icons_ffffff_256x240.png               https://cdn.jsdelivr.net/npm/jquery-ui@1.14.2/dist/themes/humanity/images/ui-icons_ffffff_256x240.png#sha256=102af983463227337426f5339a7be9b690dab9407e2feb6d975b3a0e3ae5ac7b
// @resource		themePerso                                https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/css/theme.css
// @resource		aquarium.gif                              https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/aquarium.gif
// @resource		bassin.gif                                https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/bassin.gif
// @resource		foret.gif                                 https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/foret.gif
// @resource		ileauxdinos.gif                           https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/ileauxdinos.gif
// @resource		insectarium.gif                           https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/insectarium.gif
// @resource		noctarium.gif                             https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/noctarium.gif
// @resource		panda.png                                 https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/panda.png
// @resource		savane.gif                                https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/savane.gif
// @resource		terre_eau.gif                             https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/terre_eau.gif
// @resource		vivarium.gif                              https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/vivarium.gif
// @resource		voliere.gif                               https://raw.githubusercontent.com/mikey-ufc/boite-a-malices-monzoo/main/images/voliere.gif
// @grant			GM_getResourceText
// @grant			GM_getResourceURL
// @grant			GM_addStyle
// @grant			GM_getValue
// @grant			GM_setValue
// @grant			GM_deleteValue
// @grant			GM_listValues
// @grant			unsafeWindow
// @run-at			document-end
// @noframes
// ==/UserScript==

/* ===== Boite à malices ===== */
// Merci à Martaika pour les singuliers - pluriels et à Mahab pour les fautes d'orthographes
// Merci à Co522 pour les infos sur les animaux

// Variables stockées
// info_user {}
// info_parc {}
// Variable Temporaire
// cerclage => sélection des animaux

/* eslint-disable curly */

/* ===== Adaptation Tampermonkey (Brave / Chromium) =====
 * - jQuery 3.7.1, jQuery UI 1.14.2 (thème humanity) et flot 0.8.3 sont chargés via @require / @resource
 *   (versions figées et vérifiées par hash), les images du jeu proviennent du dossier images/ du dépôt.
 *   Tampermonkey les télécharge à l'installation et à chaque mise à jour, puis les garde en cache.
 * - Le thème humanity est surchargé par css/theme.css (ressource themePerso), injecté juste après :
 *   les couleurs se règlent dans ses variables --bam-*.
 */
function importerDonnees() {
    var inp = document.createElement("input");
    inp.type = "file";
    inp.accept = ".json,application/json";
    inp.addEventListener("change", function () {
        var f = inp.files[0];
        if (!f) return;
        var r = new FileReader();
        r.onload = function () {
            var j;
            try {
                j = JSON.parse(r.result);
            } catch (x) {
                alert("Fichier illisible : ce n'est pas un JSON valide.");
                return;
            }
            if (!j || j.__monzoo_export !== 1 || !j.donnees || typeof j.donnees !== "object") {
                alert("Ce fichier n'est pas un export de données de la Boite à malices.");
                return;
            }
            var cles = Object.keys(j.donnees);
            if (
                !confirm(
                    "Importer " + cles.length + " données ?\nLes données actuelles portant les mêmes noms seront remplacées.",
                )
            )
                return;
            cles.forEach(function (k) {
                GM_setValue(k, j.donnees[k]);
            });
            alert("Import terminé (" + cles.length + " données). La page va se recharger.");
            window.location.reload();
        };
        r.readAsText(f);
    });
    inp.click();
}
function exporterDonnees() {
    var donnees = {};
    GM_listValues().forEach(function (k) {
        donnees[k] = GM_getValue(k);
    });
    var maintenant = new Date(),
        deuxChiffres = function (x) {
            return (x < 10 ? "0" : "") + x;
        };
    var blob = new Blob(
        [
            JSON.stringify({
                __monzoo_export: 1,
                version: "3.16.1",
                donnees: donnees,
            }),
        ],
        {
            type: "application/json",
        },
    );
    var lien = document.createElement("a");
    lien.href = URL.createObjectURL(blob);
    lien.download =
        "monzoo_donnees_" +
        maintenant.getFullYear() +
        deuxChiffres(maintenant.getMonth() + 1) +
        deuxChiffres(maintenant.getDate()) +
        ".json";
    document.body.appendChild(lien);
    lien.click();
    setTimeout(function () {
        URL.revokeObjectURL(lien.href);
        lien.remove();
    }, 1000);
}
$(document).on("click", "#importer_donnees", importerDonnees);
$(document).on("click", "#exporter_donnees", exporterDonnees);
!(function (e) {
    e.widget("custom.tooltipX", e.ui.tooltip, {
        options: {
            autoShow: !0,
            autoHide: !0,
        },
        _create: function () {
            (this._super(), this.options.autoShow || this._off(this.element, "mouseover focusin"));
        },
        _open: function (e, a, n) {
            (this._superApply(arguments), this.options.autoHide || this._off(a, "mouseleave focusout"));
        },
    });
})(jQuery);
var heureDebutScript = new Date();
function parId(id) {
    return document.getElementById(id);
}
function parNom(nom) {
    return document.getElementsByName(nom);
}
function parBalise(balise, contexte) {
    var racine = contexte || document;
    return !!racine.getElementsByTagName(balise)[0] && racine.getElementsByTagName(balise);
}
function Espece(singulier, pluriel, prix, gabarit, enclos, binaire, vip) {
    ((binaire = binaire || 0),
        (this.nom = function (nombre) {
            return parseInt(nombre) < 2 ? "1 " + this.singulier : nombre + " " + this.pluriel;
        }),
        (this.singulier = singulier),
        (this.pluriel = "" === pluriel ? singulier + "s" : pluriel),
        (this.prix = parseInt(prix, 10) || 0),
        (this.gabarit = gabarit),
        (this.enclos = enclos),
        (this.bonus = !!(64 & binaire)),
        (this.collector = !!(32 & binaire)),
        (this.attraction = !!(16 & binaire)),
        (this.exploration = !!(8 & binaire)),
        (this.albinos = !!(4 & binaire)),
        (this.geniteur_albinos = !!(2 & binaire)),
        (this.defi = !!(1 & binaire)),
        (this.VIP = "" !== vip && vip ? vip : ""));
}
function ajouterEspece(nouvelleEspece) {
    especes[nouvelleEspece.nom]
        ? alert("Cette espèce existe déjà, action annulée")
        : (nouvelleEspece.singulier || (nouvelleEspece.singulier = nouvelleEspece.nom),
        nouvelleEspece.pluriel || (nouvelleEspece.pluriel = nouvelleEspece.nom),
        nouvelleEspece.prix || (nouvelleEspece.prix = 0),
        nouvelleEspece.gabarit || (nouvelleEspece.gabarit = 0),
        nouvelleEspece.enclos || (nouvelleEspece.enclos = 0),
        nouvelleEspece.binaire || (nouvelleEspece.binaire = 0),
        nouvelleEspece.VIP || (nouvelleEspece.VIP = ""),
            especesAjoutees.push(nouvelleEspece),
            especesAjoutees.sort(function (especeA, especeB) {
                return especeA.nom < especeB.nom ? -1 : especeA.nom > especeB.nom ? 1 : 0;
            }),
            GM_setValue("animauxajt", JSON.stringify(especesAjoutees)),
            (especes[nouvelleEspece.nom] = new Espece(
                nouvelleEspece.singulier,
                nouvelleEspece.pluriel,
                nouvelleEspece.prix,
                nouvelleEspece.gabarit,
                nouvelleEspece.enclos,
                nouvelleEspece.binaire,
                nouvelleEspece.VIP,
            )));
}
function trouverEspece(especeOuNom) {
    return (
        (nomEspece = "string" == typeof especeOuNom ? especeOuNom : especeOuNom.nom),
            void 0 !== especes[nomEspece] && especes[nomEspece]
                ? especes[nomEspece]
                : /bourse.php/.test(window.location)
                    ? void 0
                    : (alert(
                        nomEspece +
                        " non trouvé.\nSi c'est une nouvelle espèce, vous pouvez l'ajouter en allant sur la page bourse ou via le panda (debug / ajouter une nouvelle espèce) en attendant la mise à jour du script.\nSinon, me faire remonter via le forum le nom de l'animal indiqué et sur quelle page du jeu vous êtes",
                    ),
                        !1)
    );
}
function declencherClic(element) {
    var evenementClic = new MouseEvent("click", {
        view: unsafeWindow,
        bubbles: !0,
        cancelable: !0,
    });
    element.dispatchEvent(evenementClic);
}
function positionElement(element, limite) {
    var y = 0,
        x = 0;
    for (limite || (limite = document.body); element != limite;)
        ((x += element.offsetLeft - element.scrollLeft),
            (y += element.offsetTop - element.scrollTop),
            (element = element.offsetParent));
    return {
        x: x,
        y: y,
    };
}
function parametreUrl(url, cle) {
    cle = "&" + cle + "=";
    var valeur = "";
    return (
        -1 != (url = (url = url.substring(url.indexOf("?"))).replace("?", "&").replace(/&amp;/g, "&")).indexOf(cle) &&
        (-1 != (valeur = url.substring(url.indexOf(cle) + cle.length)).indexOf("&") &&
        (valeur = valeur.substring(0, valeur.indexOf("&"))),
        /#/.test(valeur) && (valeur = valeur.substring(0, valeur.indexOf("#")))),
            valeur
    );
}
function creerElement(balise, proprietes) {
    var element = document.createElement(balise);
    for (var propriete in proprietes)
        "style" == propriete
            ? element.setAttribute("style", proprietes[propriete])
            : (element[propriete] = proprietes[propriete]);
    return element;
}
function formaterNombre(nombre) {
    nombre = String(nombre);
    for (var motif = /(\d+)(\d{3})/; motif.test(nombre);) nombre = nombre.replace(motif, "$1 $2");
    return nombre;
}
function lireNomZoo() {
    var elements,
        nom = "";
    return (
        /forum/.test(window.location)
            ? (elements = $("li")).each(function () {
                if (/sous l'ident/.test(elements.filter(this).html()))
                    return ((nom = elements.filter(this).find("strong:first").html()), !1);
            })
            : (elements = $("div")).each(function () {
                if ("125px" == elements.filter(this).css("width")) return ((nom = elements.filter(this).html()), !1);
            }),
        !!nom && (nom = nom[0].toUpperCase() + nom.substring(1).toLowerCase())
    );
}
function nomTypeEnclos(especeOuType, detaille) {
    if (void 0 !== especeOuType) {
        var numeroType;
        if ("object" == typeof especeOuType && especeOuType) {
            if (!detaille && especeOuType.bonus) return "bonus";
            numeroType = parseInt(especeOuType.enclos);
        } else "string" == typeof especeOuType && (numeroType = parseInt(especeOuType, 10));
        switch (numeroType) {
            case 1:
                return "savane";
            case 2:
                return "bassin";
            case 3:
                return detaille ? "terre / eau" : "terre";
            case 4:
                return "foret";
            case 5:
                return "voliere";
            case 6:
                return "aquarium";
            case 7:
                return "vivarium";
            case 8:
                return "noctarium";
            case 9:
                return "insectarium";
            case 10:
                return "ile aux dinos";
        }
    }
}
function creerBulle(options) {
    var etatSauvegarde = JSON.parse(GM_getValue("bulle_" + options.id, '{"etat":false,"position":false}'));
    (etatSauvegarde.position && (options.position = etatSauvegarde.position),
    options.position.top < 0 && (options.position.top = 0),
    options.position.top > window.innerHeight - 100 && (options.position.top = window.innerHeight - 100),
    options.position.left < 0 && (options.position.left = 0));
    var icone = $("<span>").addClass("ui-icon"),
        conteneur = $("<div>")
            .attr("id", "container_" + options.id)
            .addClass("ui-widget-content ui-corner-all")
            .addClass("container")
            .css(options.container_options)
            .offset(options.position)
            .appendTo("body")
            .hide()
            .css({
                position: "fixed",
            }),
        barreTitre = $("<p>")
            .attr("id", "titre_" + options.id)
            .addClass("ui-widget-content ui-widget-header ui-corner-top")
            .css({
                "vertical-align": "middle",
                cursor: "move",
                "font-size": "1em",
                padding: "2px",
                margin: "0px",
            })
            .html(options.titre)
            .appendTo(conteneur),
        poignee = $("<a>")
            .attr("id", "handle_" + options.id)
            .css({
                float: "right",
                "margin-left": "4px",
                color: "#000",
                "font-weight": "bold",
                cursor: "pointer",
            })
            .appendTo(barreTitre);
    poignee.append(icone);
    var contenu = "function" == typeof options.contenu ? options.contenu() : options.contenu;
    ((contenu = $("<div>")
        .attr("id", "contenu_" + options.id)
        .addClass("contenu")
        .css({
            "font-size": "0.8em",
        })
        .html(contenu)
        .appendTo(conteneur)),
        etatSauvegarde.etat
            ? icone.addClass("ui-icon-circle-triangle-n")
            : (icone.addClass("ui-icon-circle-triangle-s"), contenu.hide()));
    var haut,
        elementContenu = parId("contenu_" + options.id),
        elementConteneur = elementContenu.parentNode,
        estBlocNote = "bloc_note" == options.id;
    if (estBlocNote) var blocNote = parId(options.id);
    var decalageScroll = document.body.scrollWidth - window.innerWidth > 0 ? 18 : 0;
    (poignee.on(
        "click",
        {
            id: options.id,
        },
        basculerBulle,
    ),
        conteneur.draggable({
            handle: "#titre_" + options.id,
            stop: function (evenement, ui) {
                ((elementContenu.style.height = "100%"),
                elementContenu.scrollHeight <= elementContenu.clientHeight &&
                ((elementContenu.style.width = "auto"), estBlocNote && (blocNote.style.resize = "both")),
                    (ui.position = ajusterPosition(ui.position, "container_" + options.id)),
                (haut = Math.min(
                    parseInt(elementConteneur.style.top.substring(0, elementConteneur.style.top.length - 2)),
                    window.innerHeight - 100,
                )) +
                elementConteneur.clientHeight +
                decalageScroll >
                window.innerHeight &&
                ((elementContenu.style.height = window.innerHeight - haut - decalageScroll - 26 + "px"),
                elementContenu.scrollWidth - elementContenu.clientWidth > 1 &&
                ((elementContenu.style.width = elementContenu.clientWidth + 32 + "px"),
                estBlocNote && (blocNote.style.resize = "none"))),
                elementContenu.scrollHeight <= elementContenu.clientHeight &&
                ((elementContenu.style.width = "auto"), estBlocNote && (blocNote.style.resize = "both")),
                    (ui.position = ajusterPosition(ui.position, "container_" + options.id)),
                    ((objetTemp = JSON.parse(GM_getValue("bulle_" + options.id, '{"etat":false,"position":false}'))).position =
                        ui.position),
                    GM_setValue("bulle_" + options.id, JSON.stringify(objetTemp)));
            },
        }),
        conteneur.show(),
        (haut = Math.min(
            parseInt(elementConteneur.style.top.substring(0, elementConteneur.style.top.length - 2)),
            window.innerHeight - 100,
        )) +
        elementConteneur.clientHeight +
        decalageScroll >
        window.innerHeight
            ? ((elementContenu.style.height = window.innerHeight - haut - decalageScroll - 26 + "px"),
            elementContenu.scrollWidth - elementContenu.clientWidth > 1 &&
            ((elementContenu.style.width = elementContenu.clientWidth + 32 + "px"),
            estBlocNote && (blocNote.style.resize = "none")))
            : "bloc_note" == options.id && (elementContenu.style.width = "auto"),
    elementContenu.scrollHeight <= elementContenu.clientHeight &&
    ((elementContenu.style.width = "auto"), estBlocNote && (blocNote.style.resize = "both")));
    var gaucheMax =
        window.innerWidth -
        (document.body.scrollHeight - window.innerHeight > 0 ? 18 : 0) -
        parId("container_" + options.id).clientWidth;
    (options.position.left > gaucheMax && (options.position.left = gaucheMax),
        (etatSauvegarde.position = ajusterPosition(options.position, "container_" + options.id)),
        GM_setValue("bulle_" + options.id, JSON.stringify(etatSauvegarde)));
}
function basculerBulle(evenement) {
    var contenu = $(this).closest(".container").find(".contenu");
    ((objetTemp = JSON.parse(GM_getValue("bulle_" + evenement.data.id, '{"etat":false,"position":false}'))),
        contenu.slideToggle({
            complete: function () {
                if (
                    (contenu
                        .closest(".container")
                        .find("p:first span")
                        .toggleClass("ui-icon-circle-triangle-n")
                        .toggleClass("ui-icon-circle-triangle-s"),
                        (objetTemp.etat = !objetTemp.etat),
                        objetTemp.etat)
                ) {
                    var decalageScroll = document.body.scrollWidth - window.innerWidth > 0 ? 18 : 0,
                        elementContenu = parId("contenu_" + evenement.data.id),
                        elementConteneur = elementContenu.parentNode,
                        blocNote = parId(evenement.data.id);
                    elementContenu.style.height = "100%";
                    var haut = parseInt(elementConteneur.style.top.substring(0, elementConteneur.style.top.length - 2));
                    (haut + elementConteneur.clientHeight + decalageScroll > window.innerHeight &&
                    ((elementContenu.style.height = window.innerHeight - haut - decalageScroll - 26 + "px"),
                    elementContenu.scrollWidth - elementContenu.clientWidth > 1 &&
                    ((elementContenu.style.width = elementContenu.clientWidth + 32 + "px"),
                        (blocNote.style.resize = "none"))),
                    elementContenu.scrollHeight <= elementContenu.clientHeight &&
                    ((elementContenu.style.width = "auto"), (blocNote.style.resize = "both")),
                        (objetTemp.position = ajusterPosition(objetTemp.position, "container_" + evenement.data.id)));
                }
                GM_setValue("bulle_" + evenement.data.id, JSON.stringify(objetTemp));
            },
        }));
}
function ajusterPosition(position, idConteneur) {
    var largeur = parId(idConteneur).clientWidth;
    position.top += window.scrollY;
    for (
        var decalageScroll = document.body.scrollHeight - window.innerHeight > 0 ? 18 : 0;
        position.top < window.scrollY ||
        position.left < 0 ||
        position.top - window.scrollY > window.innerHeight - 100 ||
        position.left + largeur > window.innerWidth - decalageScroll;
    )
        (position.top < window.scrollY && (position.top = window.scrollY),
        position.left < 0 && (position.left = 0),
        position.top - window.scrollY > window.innerHeight - 100 &&
        (position.top = window.scrollY + window.innerHeight - 100),
        position.left + largeur > window.innerWidth - decalageScroll &&
        (position.left = window.innerWidth - decalageScroll - largeur));
    return (
        void 0 !== position.right &&
        position.right < position.left &&
        (position.left = window.innerWidth - position.right - largeur - decalageScroll),
            (position.right = window.innerWidth - position.left - largeur - decalageScroll),
            $("#" + idConteneur).offset(position),
            {
                top: position.top - window.scrollY,
                left: position.left,
                right: position.right,
            }
    );
}
function enclosPrecedent(refEnclos) {
    var resultat = {
            t: "debut",
        },
        parties = refEnclos.split("_");
    return (
        (parties[0] = parseInt(parties[0])),
            (parties[1] = parseInt(parties[1])),
            0 == parties[0]
                ? 20 == parties[1]
                    ? ((resultat.t = 0), (resultat.v = 15))
                    : parties[1] > 0 && ((resultat.t = 0), (resultat.v = parties[1] - 1))
                : 0 == parties[1]
                    ? ((resultat.t = 0), (resultat.v = 60))
                    : ((resultat.t = 1), (resultat.v = parties[1] - 1)),
            resultat
    );
}
function enclosPrecedentAvec(refEnclos, critere) {
    for (
        var precedent = enclosPrecedent(refEnclos);
        "debut" != precedent.t && !0 !== parc.encls[precedent.t + "_" + precedent.v][critere];
    )
        precedent = enclosPrecedent(precedent.t + "_" + precedent.v);
    return precedent;
}
function enclosSuivant(refEnclos) {
    var resultat = {
            t: "fin",
        },
        parties = refEnclos.split("_");
    return (
        (parties[0] = parseInt(parties[0])),
            (parties[1] = parseInt(parties[1])),
            0 == parties[0]
                ? 60 == parties[1]
                    ? ((resultat.t = 1), (resultat.v = 0))
                    : 15 == parties[1]
                        ? ((resultat.t = 0), (resultat.v = 20))
                        : ((resultat.t = 0), (resultat.v = parties[1] + 1))
                : 5 != parties[1] && ((resultat.t = 1), (resultat.v = parties[1] + 1)),
            resultat
    );
}
function enclosSuivantAvec(refEnclos, critere) {
    var suivant;
    if (
        ((suivant =
            "" !== refEnclos
                ? enclosSuivant(refEnclos)
                : {
                    t: 0,
                    v: 0,
                }),
        "mouraverif" != critere)
    )
        for (; "fin" != suivant.t && !0 !== parc.encls[suivant.t + "_" + suivant.v][critere];)
            suivant = enclosSuivant(suivant.t + "_" + suivant.v);
    else
        for (
            ;
            "fin" != suivant.t &&
            !0 !== parc.encls[suivant.t + "_" + suivant.v].a_verifier &&
            !0 !== parc.encls[suivant.t + "_" + suivant.v].mourant;
        )
            suivant = enclosSuivant(suivant.t + "_" + suivant.v);
    return suivant;
}
function nomAnimalDepuisImage(cheminImage) {
    return (
        (cheminImage = (cheminImage = cheminImage.substring(cheminImage.indexOf("_") + 1, cheminImage.indexOf(".jpg")))
            .replace(/%20/g, " ")
            .replace("chenille gr", "gr")
            .replace("papillon gr", "gr")),
            $.trim(cheminImage.replace(2, ""))
    );
}
function htmlImageAnimal(nomAnimal, styleCss, formePapillon) {
    if ((espece = trouverEspece(nomAnimal)))
        return (
            '<img src="images/animaux/' +
            nomTypeEnclos(especes[nomAnimal]) +
            "_" +
            ("greta oto" == nomAnimal ? (formePapillon ? "papillon " : "chenille ") : "") +
            nomAnimal +
            '.jpg" style="' +
            styleCss +
            '" title="' +
            especes[nomAnimal].singulier +
            '" alt="' +
            especes[nomAnimal].singulier +
            '">'
        );
}
function initialiserStylesEtDonnees() {
    var remplacementsImages = {
            "images/ui-bg_glass_25_cb842e_1x400.png": GM_getResourceURL("ui-bg_glass_25_cb842e_1x400.png"),
            "images/ui-bg_glass_70_ede4d4_1x400.png": GM_getResourceURL("ui-bg_glass_70_ede4d4_1x400.png"),
            "images/ui-bg_glass_100_f5f0e5_1x400.png": GM_getResourceURL("ui-bg_glass_100_f5f0e5_1x400.png"),
            "images/ui-bg_highlight-hard_65_fee4bd_1x100.png": GM_getResourceURL("ui-bg_highlight-hard_65_fee4bd_1x100.png"),
            "images/ui-bg_highlight-hard_75_f5f5b5_1x100.png": GM_getResourceURL("ui-bg_highlight-hard_75_f5f5b5_1x100.png"),
            "images/ui-bg_highlight-hard_100_f4f0ec_1x100.png": GM_getResourceURL(
                "ui-bg_highlight-hard_100_f4f0ec_1x100.png",
            ),
            "images/ui-bg_inset-soft_100_f4f0ec_1x100.png": GM_getResourceURL("ui-bg_inset-soft_100_f4f0ec_1x100.png"),
            "images/ui-icons_c47a23_256x240.png": GM_getResourceURL("ui-icons_c47a23_256x240.png"),
            "images/ui-icons_cb672b_256x240.png": GM_getResourceURL("ui-icons_cb672b_256x240.png"),
            "images/ui-icons_f35f07_256x240.png": GM_getResourceURL("ui-icons_f35f07_256x240.png"),
            "images/ui-icons_f08000_256x240.png": GM_getResourceURL("ui-icons_f08000_256x240.png"),
            "images/ui-icons_ff7519_256x240.png": GM_getResourceURL("ui-icons_ff7519_256x240.png"),
            "images/ui-icons_ffffff_256x240.png": GM_getResourceURL("ui-icons_ffffff_256x240.png"),
        },
        cssThemeUi = GM_getResourceText("jQueryUICSS"),
        cssThemePerso = GM_getResourceText("themePerso");
    $.each(remplacementsImages, function (cheminImage, uriImage) {
        cssThemeUi = cssThemeUi.replace(new RegExp(cheminImage, "g"), uriImage);
        cssThemePerso = cssThemePerso.replace(new RegExp(cheminImage, "g"), uriImage);
    });
    var cle,
        elementStyle = creerElement("style", {
            innerHTML: cssThemeUi,
        }),
        elementStylePerso = creerElement("style", {
            innerHTML: cssThemePerso,
        });
    if (
        (parBalise("head")[0].appendChild(elementStyle),
            parBalise("head")[0].appendChild(elementStylePerso),
            GM_addStyle(
                '.lien_naissances {cursor:pointer;float:left;margin-right:10px;font-size:10px;font-weight:bold}.lien_naissances a {color:navy}.lien_naissances a:hover {color:#3399CC}.ui-tooltip{padding:5px 10px;margin-right:20px;border-radius:20px;font:bold 12px "Times", Sans-Serif;text-transform:uppercase;box-shadow:0 0 7px black}.info_bulle{border:2px solid #000;border-radius:6px;position:absolute;z-index:83;background-color:#F7E3C0;padding:0px;font-family:garamond arial sans serif;font-size:12px}',
            ),
        prefsUtilisateur ||
        (prefsUtilisateur = {
            decalage_horaire: 0,
            rapport_mode_image: !0,
            encadrement: 1,
            tri: 1,
            couple: 3,
            bulletin: {
                nomzoo: !0,
                achats: !0,
                couleurs: {
                    nomzoo: "#3D17E7",
                    base: "#3D17E7",
                    cher: "#3D17E7",
                    bonus: "#4bb86c",
                    albinos: "#31b9e4",
                    vols: "#9848B7",
                },
            },
        }),
        !GM_getValue("nettoie", !1) &&
        (GM_deleteValue("nettoie2"),
            GM_deleteValue("nettoie3"),
            GM_deleteValue("nettoie4"),
            GM_deleteValue("formatok"),
            GM_deleteValue("connexion"),
            GM_setValue("nettoie", !0)),
            !GM_getValue("nettoie2", !1))
    ) {
        for (indexBoucle = 0, limiteBoucle = listeZoos.length; indexBoucle < limiteBoucle; indexBoucle++) {
            if (
                !1 !== (objetTemp = JSON.parse(GM_getValue(listeZoos[indexBoucle] + "_info_parc", !1))) &&
                objetTemp.hasOwnProperty("enclos") &&
                0 !== Object.keys(objetTemp.enclos).length
            )
                for (var refEnclos in objetTemp.enclos)
                    if (
                        objetTemp.enclos[refEnclos].hasOwnProperty("animaux") &&
                        0 !== Object.keys(objetTemp.enclos[refEnclos].animaux).length
                    )
                        for (nomEspece in objetTemp.enclos[refEnclos].animaux)
                            "lamentin" == nomEspece &&
                            ((objetTemp.enclos[refEnclos].animaux.lamantin = objetTemp.enclos[refEnclos].animaux.lamentin),
                                delete objetTemp.enclos[refEnclos].animaux.lamentin);
            if (
                (objetTemp.hasOwnProperty("historique") &&
                objetTemp.historique.hasOwnProperty("naissances") &&
                (objetTemp.historique.naissances.hasOwnProperty("lamentin") &&
                !objetTemp.historique.naissances.hasOwnProperty("lamantin")
                    ? ((objetTemp.historique.naissances.lamantin = objetTemp.historique.naissances.lamentin),
                        delete objetTemp.historique.naissances.lamentin)
                    : objetTemp.historique.naissances.hasOwnProperty("lamentin") &&
                    objetTemp.historique.naissances.hasOwnProperty("lamantin") &&
                    ((objetTemp.historique.naissances.lamantin += objetTemp.historique.naissances.lamentin),
                        delete objetTemp.historique.naissances.lamentin)),
                    objetTemp.hasOwnProperty("naissances"))
            )
                for (cle in objetTemp.naissances)
                    "lamentin" == objetTemp.naissances[cle] && (objetTemp.naissances[cle] = "lamantin");
            GM_setValue(listeZoos[indexBoucle] + "_info_parc", JSON.stringify(objetTemp));
        }
        GM_setValue("nettoie2", !0);
    }
    if (!GM_getValue("nettoie3", !1)) {
        for (indexBoucle = 0, limiteBoucle = listeZoos.length; indexBoucle < limiteBoucle; indexBoucle++)
            (!1 !== (objetTemp = JSON.parse(GM_getValue(listeZoos[indexBoucle] + "_info_parc", !1))) &&
            objetTemp.hasOwnProperty("maj_pa") &&
            delete objetTemp.maj_pa.vente_greta,
                GM_setValue(listeZoos[indexBoucle] + "_info_parc", JSON.stringify(objetTemp)));
        GM_setValue("nettoie3", !0);
    }
    if (!GM_getValue("nettoie4", !1)) {
        for (indexBoucle = 0, limiteBoucle = listeZoos.length; indexBoucle < limiteBoucle; indexBoucle++)
            (!1 !== (objetTemp = JSON.parse(GM_getValue(listeZoos[indexBoucle] + "_info_parc", !1))) &&
            objetTemp.hasOwnProperty("maj_pa") &&
            delete objetTemp.maj_pa.vente_surplus_pa,
                GM_setValue(listeZoos[indexBoucle] + "_info_parc", JSON.stringify(objetTemp)));
        GM_setValue("nettoie4", !0);
    }
    if (!GM_getValue("nettoie5", !1)) {
        for (indexBoucle = 0, limiteBoucle = listeZoos.length; indexBoucle < limiteBoucle; indexBoucle++) {
            if (!1 !== (objetTemp = JSON.parse(GM_getValue(listeZoos[indexBoucle] + "_info_parc", !1)))) {
                if (
                    (objetTemp.hasOwnProperty("ilefait") || (objetTemp.ilefait = !1),
                    objetTemp.hasOwnProperty("gestion") || (objetTemp.gestion = prefsUtilisateur.gestion),
                    objetTemp.hasOwnProperty("infoscan") ||
                    (objetTemp.infoscan = {
                        dateConnexion: "",
                        type_mise_a_jour: "",
                        scan_messages: !0,
                        scan_suite: !0,
                        surpopulation: 15,
                        vente_surpopulation: !1,
                        lexclusions: ["greta oto"],
                        vente_mourant: !1,
                        attraction: "",
                        vols: [],
                        achats: {},
                    }),
                    objetTemp.hasOwnProperty("dateConnexion") &&
                    ((objetTemp.infoscan.dateConnexion = objetTemp.dateConnexion), delete objetTemp.dateConnexion),
                    objetTemp.hasOwnProperty("type_mise_a_jour") &&
                    ((objetTemp.infoscan.type_mise_a_jour = objetTemp.type_mise_a_jour), delete objetTemp.type_mise_a_jour),
                    objetTemp.hasOwnProperty("scan_message") &&
                    ((objetTemp.infoscan.scan_messages = objetTemp.scan_message), delete objetTemp.scan_message),
                    objetTemp.hasOwnProperty("scan_suite") &&
                    ((objetTemp.infoscan.scan_suite = objetTemp.scan_suite), delete objetTemp.scan_suite),
                    prefsUtilisateur.hasOwnProperty("maj_pa") &&
                    prefsUtilisateur.maj_pa.hasOwnProperty("surpopulation") &&
                    (objetTemp.infoscan.surpopulation = prefsUtilisateur.maj_pa.surpopulation),
                    prefsUtilisateur.hasOwnProperty("maj_pa") &&
                    prefsUtilisateur.maj_pa.hasOwnProperty("vente_surpopulation") &&
                    (objetTemp.infoscan.vente_surpopulation = prefsUtilisateur.maj_pa.vente_surpopulation),
                    objetTemp.hasOwnProperty("lexclusions") &&
                    ((objetTemp.infoscan.lexclusions = objetTemp.lexclusions), delete objetTemp.lexclusions),
                    prefsUtilisateur.hasOwnProperty("maj_pa") &&
                    prefsUtilisateur.maj_pa.hasOwnProperty("vente_mourant") &&
                    (objetTemp.infoscan.vente_mourant = prefsUtilisateur.maj_pa.vente_mourant),
                    objetTemp.hasOwnProperty("attraction") &&
                    ((objetTemp.infoscan.attraction = objetTemp.attraction), delete objetTemp.attraction),
                    objetTemp.hasOwnProperty("vols") && ((objetTemp.infoscan.vols = objetTemp.vols), delete objetTemp.vols),
                    objetTemp.hasOwnProperty("achats") &&
                    ((objetTemp.infoscan.achats = objetTemp.achats), delete objetTemp.achats),
                    objetTemp.hasOwnProperty("naissances") &&
                    ((objetTemp.infoscan.naissances = objetTemp.naissances), delete objetTemp.naissances),
                    objetTemp.hasOwnProperty("genre_naissances") &&
                    ((objetTemp.infoscan.genre_naissances = objetTemp.genre_naissances), delete objetTemp.genre_naissances),
                    objetTemp.hasOwnProperty("trouvailles") &&
                    ((objetTemp.infoscan.trouvailles = objetTemp.trouvailles), delete objetTemp.trouvailles),
                    objetTemp.hasOwnProperty("deces") && ((objetTemp.infoscan.deces = objetTemp.deces), delete objetTemp.deces),
                    objetTemp.hasOwnProperty("message") &&
                    ((objetTemp.infoscan.messages = objetTemp.message), delete objetTemp.message),
                    objetTemp.hasOwnProperty("mise_a_jour") &&
                    ((objetTemp.mises_a_jour = objetTemp.mise_a_jour), delete objetTemp.mise_a_jour),
                    objetTemp.hasOwnProperty("enclos") && ((objetTemp.encls = objetTemp.enclos), delete objetTemp.enclos),
                        objetTemp.hasOwnProperty("rapport"))
                )
                    for (cle in objetTemp.rapport)
                        objetTemp.rapport[cle].hasOwnProperty("message") &&
                        ((objetTemp.rapport[cle].messages = objetTemp.rapport[cle].message),
                            delete objetTemp.rapport[cle].message);
                (objetTemp.hasOwnProperty("historique") &&
                objetTemp.historique.hasOwnProperty("mise_a_jour") &&
                ((objetTemp.historique.mises_a_jour = objetTemp.historique.mise_a_jour),
                    delete objetTemp.historique.mise_a_jour),
                objetTemp.hasOwnProperty("bloc_note") || (objetTemp.bloc_note = prefsUtilisateur.bloc_note));
            }
            GM_setValue(listeZoos[indexBoucle] + "_info_parc", JSON.stringify(objetTemp));
        }
        (delete prefsUtilisateur.maj_pa,
            delete prefsUtilisateur.gestion,
            delete prefsUtilisateur.bloc_note,
            GM_setValue("info_user", JSON.stringify(prefsUtilisateur)),
            GM_setValue("nettoie5", !0));
    }
}
function initialiserParc() {
    (!(parc = JSON.parse(GM_getValue(nomZoo + "_info_parc", !1))) &&
    ((parc = {
        premier_scan: !1,
        gestion: !0,
        ilefait: !1,
        toutou: !1,
        infoscan: {
            dateConnexion: "",
            type_mise_a_jour: "",
            scan_messages: !0,
            scan_suite: !0,
            surpopulation: 15,
            vente_surpopulation: !1,
            lexclusions: ["greta oto"],
            vente_mourant: !1,
            attraction: "",
            vols: [],
            achats: {},
        },
        mises_a_jour: "",
        encls: {},
        rapport: [],
        stock: {},
        bloc_note: {
            width: 300,
            height: 150,
        },
        bloc_note_text: "",
    }),
        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc))),
    -1 == listeZoos.indexOf(nomZoo) && (listeZoos.push(nomZoo), GM_setValue("liste_zoos", JSON.stringify(listeZoos))));
}
function insererBulletinForum() {
    var naissances,
        trouvailles,
        vols,
        cleMessage,
        achats = "",
        texteBulletin = "",
        entete = "",
        regexNettoyage = new RegExp("<a href=[^>]*>.*|<img[^>]*>", "gi"),
        nomZooClique = $(this).html();
    if (parcsForum[nomZooClique].hasOwnProperty("rapport") && parcsForum[nomZooClique].rapport.length > 0)
        for (
            var indexRapport = 0, nbRapports = parcsForum[nomZooClique].rapport.length;
            indexRapport < nbRapports;
            indexRapport++
        )
            for (cleMessage in ((naissances = formaterEvenements(
                parcsForum[nomZooClique].rapport[indexRapport],
                "naissance",
                "forum",
            )),
                (trouvailles = formaterEvenements(parcsForum[nomZooClique].rapport[indexRapport], "trouvaille", "forum")),
                (vols = formaterEvenements(parcsForum[nomZooClique].rapport[indexRapport], "vol", "forum")),
            prefsUtilisateur.bulletin.achats &&
            (achats = formaterEvenements(parcsForum[nomZooClique].rapport[indexRapport], "achat", "forum")),
                (texteBulletin +=
                    "\n[color=#000]mise à jour " +
                    (/14h|minuit/.test(parcsForum[nomZooClique].rapport[indexRapport].type_mise_a_jour)
                        ? "de " + parcsForum[nomZooClique].rapport[indexRapport].type_mise_a_jour
                        : parcsForum[nomZooClique].rapport[indexRapport].type_mise_a_jour.substring(2)) +
                    "[/color]\n" +
                    naissances +
                    trouvailles +
                    vols +
                    achats),
                parcsForum[nomZooClique].rapport[indexRapport].messages))
                texteBulletin +=
                    "[i]" +
                    parcsForum[nomZooClique].rapport[indexRapport].messages[cleMessage]
                        .replace(regexNettoyage, "")
                        .replace(/</g, "[")
                        .replace(/>/g, "]")
                        .replace(/strong/g, "b")
                        .replace(/\s\s/g, "")
                        .replace(/dÃ©fi/g, "défi")
                        .replace(/avancÃ©es/g, "avancées") +
                    "[/i]\n";
    ((naissances = formaterEvenements(parcsForum[nomZooClique].infoscan, "naissance", "forum")),
        (trouvailles = formaterEvenements(parcsForum[nomZooClique].infoscan, "trouvaille", "forum")),
        (vols = formaterEvenements(parcsForum[nomZooClique].infoscan, "vol", "forum")),
    prefsUtilisateur.bulletin.achats &&
    (achats = formaterEvenements(parcsForum[nomZooClique].infoscan, "achat", "forum")),
        (texteBulletin +=
            "\n[color=#000]mise à jour " +
            (/14h|minuit/.test(parcsForum[nomZooClique].infoscan.type_mise_a_jour)
                ? "de " + parcsForum[nomZooClique].infoscan.type_mise_a_jour
                : parcsForum[nomZooClique].infoscan.type_mise_a_jour.substring(2)) +
            "[/color]\n" +
            naissances +
            trouvailles +
            vols +
            achats));
    var messageDejaAjoute = !1;
    for (cleMessage in parcsForum[nomZooClique].infoscan.messages)
        (messageDejaAjoute && (texteBulletin += "\n"),
            (texteBulletin +=
                "[i]" +
                parcsForum[nomZooClique].infoscan.messages[cleMessage]
                    .replace(regexNettoyage, "")
                    .replace(/</g, "[")
                    .replace(/>/g, "]")
                    .replace(/strong/g, "b")
                    .replace(/\s\s/g, "")
                    .replace(/dÃ©fi/g, "défi")
                    .replace(/avancÃ©es/g, "avancées") +
                "[/i]"),
            (messageDejaAjoute = !0));
    prefsUtilisateur.bulletin.nomzoo &&
    ((entete = nomZooClique),
    prefsUtilisateur.bulletin.couleurs.nomzoo &&
    (entete = "[color=" + prefsUtilisateur.bulletin.couleurs.nomzoo + "]" + entete + "[/color]"),
        (entete = "[b]" + entete + "[/b]\n"));
    var champMessage = $('[name="req_message"]');
    champMessage.length
        ? champMessage.val(champMessage.val() + "[quote]" + entete + texteBulletin + "[/quote]")
        : alert("[quote]" + entete + texteBulletin + "[/quote]");
}
function formaterEvenements(donneesScan, typeEvenement, mode) {
    var texte = "",
        modeRapport = "rapport" == mode;
    if ("vol" == typeEvenement) {
        var indexVol, nbVols;
        if (modeRapport) {
            if (donneesScan.vols)
                for (indexVol = 0, nbVols = donneesScan.vols.length; indexVol < nbVols; indexVol++)
                    texte += "<span>- " + donneesScan.vols[indexVol] + "</span><br>";
        } else {
            for (indexVol = 0, nbVols = donneesScan.vols.length; indexVol < nbVols; indexVol++)
                "" == texte
                    ? (texte = "[b][u]Mes vols réussis :[/u][/b] - " + donneesScan.vols[indexVol])
                    : (texte += "\n                 - " + donneesScan.vols[indexVol]);
            ("" != texte &&
            "" != prefsUtilisateur.bulletin.couleurs.vols &&
            (texte = "[color=" + prefsUtilisateur.bulletin.couleurs.vols + "]" + texte + "[/color]"),
            "" != texte && (texte += "\n"));
        }
    } else {
        var libelle,
            indexListe,
            resumeGenres = compterEvenements(donneesScan, typeEvenement),
            total = 0,
            valeurTotale = 0;
        for (indexListe in listeTemp)
            (espece = trouverEspece(listeTemp[indexListe][0])) &&
            (modeRapport
                ? (/albinos/.test(listeTemp[indexListe][0])
                    ? (texte += '<span class="albinos">')
                    : espece.bonus
                        ? (texte += '<span class="bonus">')
                        : espece.prix >= 1e5
                            ? (texte += '<span class="cher">')
                            : (texte += '<span class="normal">'),
                    (texte += espece.nom(listeTemp[indexListe][1]) + "</span>, "))
                : ((libelle = espece.nom(listeTemp[indexListe][1])),
                    /albinos/.test($.trim(nomEspece))
                        ? ("" != prefsUtilisateur.bulletin.couleurs.albinos &&
                        (libelle = "[color=" + prefsUtilisateur.bulletin.couleurs.albinos + "]" + libelle + "[/color]"),
                            (libelle = "[b]" + libelle + "[/b]"))
                        : espece.bonus
                            ? ("" != prefsUtilisateur.bulletin.couleurs.bonus &&
                            (libelle = "[color=" + prefsUtilisateur.bulletin.couleurs.bonus + "]" + libelle + "[/color]"),
                                (libelle = "[b]" + libelle + "[/b]"))
                            : espece.prix >= 1e5
                                ? ("" != prefsUtilisateur.bulletin.couleurs.cher &&
                                (libelle = "[color=" + prefsUtilisateur.bulletin.couleurs.cher + "]" + libelle + "[/color]"),
                                    (libelle = "[b]" + libelle + "[/b]"))
                                : "" != prefsUtilisateur.bulletin.couleurs.base &&
                                (libelle = "[color=" + prefsUtilisateur.bulletin.couleurs.base + "]" + libelle + "[/color]"),
                    (texte += libelle + ", ")),
                (total += parseInt(listeTemp[indexListe][1])),
                (valeurTotale += especes[listeTemp[indexListe][0]].prix * parseInt(listeTemp[indexListe][1])));
        ("naissance" == typeEvenement && (valeurTotale = " (" + formaterNombre(valeurTotale) + " zoo'z)"),
        "" != texte && (texte = texte.slice(0, -2)),
            "naissance" != typeEvenement && 0 === total
                ? (texte = "")
                : modeRapport
                    ? ("" != texte && (texte += "<br>"),
                        "naissance" == typeEvenement
                            ? (texte =
                                total >= 1
                                    ? "<h6>" +
                                    total +
                                    " naissance" +
                                    (total > 1 ? "s" : "") +
                                    valeurTotale +
                                    "</h6>" +
                                    resumeGenres +
                                    texte
                                    : "<h6>Aucune naissance</h6>")
                            : "achat" == typeEvenement &&
                            (texte = "<h6>" + total + " achat" + (total > 1 ? "s" : "") + "</h6>" + texte))
                    : ("" != texte && (texte += ".\n"),
                        "naissance" == typeEvenement
                            ? (texte =
                                total >= 1
                                    ? "[u][b]" + total + " naissance" + (total > 1 ? "s" : "") + valeurTotale + "[/b][/u] : " + texte
                                    : "[u][b]Aucune naissance[/b][/u]\n")
                            : "trouvaille" == typeEvenement
                                ? (texte = "[u][b]Trouvaille" + (total > 1 ? "s" : "") + " :[/b][/u] " + texte)
                                : "achat" == typeEvenement &&
                                (texte = "[u][b]" + total + " achat" + (total > 1 ? "s" : "") + "[/b][/u] : " + texte)));
    }
    return texte;
}
function compterEvenements(donneesScan, typeEvenement) {
    var dejaListe,
        indexListe,
        nbNaissancesParTypeEnclos = {},
        evenements = donneesScan[typeEvenement + ("deces" != typeEvenement ? "s" : "")];
    if (((listeTemp = []), "achat" != typeEvenement))
        for (var cleEvenement in evenements) {
            for (indexListe in ((dejaListe = !1), listeTemp))
                if (listeTemp[indexListe][0] == evenements[cleEvenement]) {
                    dejaListe = !0;
                    break;
                }
            (dejaListe ? listeTemp[indexListe][1]++ : listeTemp.push([evenements[cleEvenement], 1]),
            "naissance" == typeEvenement &&
            (nbNaissancesParTypeEnclos[especes[evenements[cleEvenement]].enclos] ||
            (nbNaissancesParTypeEnclos[especes[evenements[cleEvenement]].enclos] = 0),
                nbNaissancesParTypeEnclos[especes[evenements[cleEvenement]].enclos]++));
        }
    else if (void 0 !== evenements)
        for (const [nomAchat, quantite] of Object.entries(evenements)) listeTemp.push([nomAchat, quantite]);
    if (
        (listeTemp.sort(function (ligneA, ligneB) {
            return especes[ligneA[0]].enclos < especes[ligneB[0]].enclos
                ? -1
                : especes[ligneA[0]].enclos > especes[ligneB[0]].enclos
                    ? 1
                    : ligneA[0] < ligneB[0]
                        ? -1
                        : ligneA[0] > ligneB[0]
                            ? 1
                            : 0;
        }),
        "naissance" == typeEvenement && Object.keys(nbNaissancesParTypeEnclos).length > 0)
    ) {
        var htmlGenres =
            "<h7>mâle(s) : " +
            Object.keys(donneesScan.genre_naissances.male).length +
            "</h7>&nbsp;&nbsp;-&nbsp;&nbsp;<h7>femelle(s) : " +
            Object.keys(donneesScan.genre_naissances.femelle).length +
            "</h7><br><br>";
        for (var codeTypeEnclos in ((htmlGenres += '<div class="ui-helper-clearfix">'), nbNaissancesParTypeEnclos))
            htmlGenres +=
                '<h7 style="width:150px;white-space:nowrap;float:left"><span style="float:left;width:70px">' +
                nomTypeEnclos(codeTypeEnclos, !0) +
                "</span> : <b>" +
                nbNaissancesParTypeEnclos[codeTypeEnclos] +
                "</b></h7>";
        return htmlGenres + "</div><br>";
    }
    return "";
}
function genererImagesRapport(typeEvenement) {
    var indexListe,
        numeroImage,
        nbAnimaux,
        resumeGenres = compterEvenements(parc.infoscan, typeEvenement),
        valeurTotale = 0,
        total = 0,
        htmlImages = "",
        suffixeValeur = "";
    for (indexListe in listeTemp) {
        for (numeroImage = 0, nbAnimaux = parseInt(listeTemp[indexListe][1]); numeroImage < nbAnimaux; numeroImage++)
            htmlImages += htmlImageAnimal(listeTemp[indexListe][0], "width:50px", "deces" == typeEvenement);
        (espece = trouverEspece(listeTemp[indexListe][0])) &&
        ((valeurTotale += espece.prix * nbAnimaux), (total += nbAnimaux));
    }
    return (
        "deces" == typeEvenement
            ? (typeEvenement = "décès")
            : "naissance" == typeEvenement && (suffixeValeur = " (" + formaterNombre(valeurTotale) + " zoo'z)"),
            total > 0
                ? "<h6>" +
                total +
                " " +
                typeEvenement +
                (total > 1 && "décès" != typeEvenement ? "s" : "") +
                suffixeValeur +
                "</h6>" +
                resumeGenres +
                htmlImages
                : "naissance" == typeEvenement && "<h6>Aucune naissance</h6>"
    );
}
function compterAnimauxPossedes() {
    for (nomEspece in especes) especes[nomEspece].nb = 0;
    for (var refEnclos in parc.encls)
        for (nomEspece in parc.encls[refEnclos].animaux)
            especes.hasOwnProperty(nomEspece) &&
            (especes[nomEspece].nb +=
                parc.encls[refEnclos].animaux[nomEspece].male + parc.encls[refEnclos].animaux[nomEspece].femelle);
}
function creerIconeEnclos(refEnclos) {
    var parties = refEnclos.split("_");
    ((parties[0] = parseInt(parties[0])), (parties[1] = parseInt(parties[1])));
    var debutHtml =
            "<div onclick=\"window.open('enclosgestion1.php?t=" + parties[0] + "&v=" + parties[1] + '\')" class="img_enclos_',
        finHtml = '" title="' + libelleEnclos(refEnclos) + '">';
    return 0 == parties[0]
        ? parties[1] <= 9
            ? $(debutHtml + "savane" + finHtml + (parties[1] + 1) + "</div>")
            : parties[1] <= 15
                ? $(debutHtml + "bassin" + finHtml + (parties[1] - 9) + "</div>")
                : parties[1] <= 29
                    ? $(debutHtml + "terre_eau" + finHtml + (parties[1] - 19) + "</div>")
                    : parties[1] <= 40
                        ? $(debutHtml + "foret" + finHtml + (parties[1] - 29) + "</div>")
                        : parties[1] <= 45
                            ? $(debutHtml + "savane" + finHtml + (parties[1] - 30) + "</div>")
                            : parties[1] <= 50
                                ? $(debutHtml + "bassin" + finHtml + (parties[1] - 39) + "</div>")
                                : parties[1] <= 55
                                    ? $(debutHtml + "terre_eau" + finHtml + (parties[1] - 40) + "</div>")
                                    : $(debutHtml + "foret" + finHtml + (parties[1] - 44) + "</div>")
        : 1 == parties[0]
            ? ((finHtml += "</div>"),
                0 == parties[1]
                    ? $(debutHtml + "voliere" + finHtml)
                    : 1 == parties[1]
                        ? $(debutHtml + "aquarium" + finHtml)
                        : 2 == parties[1]
                            ? $(debutHtml + "vivarium" + finHtml)
                            : 3 == parties[1]
                                ? $(debutHtml + "noctarium" + finHtml)
                                : 4 == parties[1]
                                    ? $(debutHtml + "insectarium" + finHtml)
                                    : $(debutHtml + "ileauxdinos" + finHtml))
            : $('<div style="display:none"></div>');
}
function libelleEnclos(refEnclos) {
    var parties = refEnclos.split("_");
    return (
        (parties[0] = parseInt(parties[0])),
            (parties[1] = parseInt(parties[1])),
            0 == parties[0]
                ? parties[1] <= 9
                    ? "Savane n° " + (parties[1] + 1)
                    : parties[1] <= 15
                        ? "Bassin n° " + (parties[1] - 9)
                        : parties[1] <= 29
                            ? "Terre / Eau n° " + (parties[1] - 19)
                            : parties[1] <= 40
                                ? "Forêt n° " + (parties[1] - 29)
                                : parties[1] <= 45
                                    ? "Savane n° " + (parties[1] - 30)
                                    : parties[1] <= 50
                                        ? "Bassin n° " + (parties[1] - 39)
                                        : parties[1] <= 55
                                            ? "Terre / Eau n° " + (parties[1] - 40)
                                            : "Forêt n° " + (parties[1] - 44)
                : 1 == parties[0]
                    ? 0 == parties[1]
                        ? "Volière"
                        : 1 == parties[1]
                            ? "Aquarium"
                            : 2 == parties[1]
                                ? "Vivarium"
                                : 3 == parties[1]
                                    ? "Noctarium"
                                    : 4 == parties[1]
                                        ? "Insectarium"
                                        : "Île aux dinos"
                    : void 0
    );
}
function completerMenu() {
    var lienFaune = $("<a>")
            .attr("href", "bureau5.php?faune")
            .append(
                $("<div>").html("Faune de monzoo").addClass("link").css({
                    "font-size": "15px",
                }),
            ),
        lienRapport = $("<a>")
            .css({
                cursor: "pointer",
            })
            .on("click", afficherRapport)
            .append(
                $("<div>").html("Rapport").addClass("link").css({
                    "font-size": "15px",
                }),
            ),
        lienMusee = $("<a>")
            .attr("href", "enclosgestion.php?t=5&v=0")
            .append(
                $("<div>").html("Musée").addClass("link").css({
                    "font-size": "15px",
                }),
            ),
        lienBotanica = $("<a>")
            .attr("href", "botanica.php")
            .append(
                $("<div>").html("Botanica").addClass("link").css({
                    "font-size": "15px",
                }),
            ),
        lienLabo = $("<a>")
            .attr("href", "labo.php")
            .append(
                $("<div>").html("Labo").addClass("link").css({
                    "font-size": "15px",
                }),
            ),
        menu = $(".menu")[0],
        divsMenu = $("div", menu);
    divsMenu.each(function () {
        var divMenu = divsMenu.filter(this),
            parentMenu = divMenu.parent(),
            classeLien = parentMenu.attr("class") || null,
            texteMenu = divMenu.html();
        (divMenu.attr("style", "font-size:15px"),
        /intendance/i.test(texteMenu) &&
        ($(parentMenu).before(lienFaune.attr("class", classeLien)), $(parentMenu).before(lienRapport.attr("class", classeLien))),
        /missions/i.test(texteMenu) &&
        ($(parentMenu).before(lienMusee.attr("class", classeLien)),
            $(parentMenu).before(lienBotanica.attr("class", classeLien)),
            $(parentMenu).before(lienLabo.attr("class", classeLien))),
        /classement/i.test(texteMenu) && divMenu.html("Les classements"),
        /\+ de Mise/i.test(texteMenu) && divMenu.html("+ de mises à jour"));
    });
    var libelleCourant,
        positionMenu,
        nbOptions,
        codeEnclos,
        selectEspeces = $("<select>")
            .attr("id", "recherche")
            .attr("title", "Recherche le(s) enclos où se trouve l'animal")
            .css({
                width: "145px",
            })
            .append('<option value="">Mes espèces</option>'),
        selectEnclos = $("<select>")
            .attr("id", "recherche_enclos")
            .attr("title", "Aller à l'enclos choisi")
            .css({
                width: "145px",
            })
            .append('<option value="">Les enclos</option>'),
        especesPresentes = [],
        libellesParOrdre = [],
        enclosParLibelle = [];
    if (parc && parc.encls)
        for (var refEnclos in parc.encls)
            for (nomEspece in ((codeEnclos = refEnclos.split("_")),
                (codeEnclos = 100 * parseInt(codeEnclos[0]) + parseInt(codeEnclos[1])),
                (libelleCourant = libelleEnclos(refEnclos)),
                (libellesParOrdre[ordreEnclosMenu(codeEnclos)] = libelleCourant),
                (enclosParLibelle[libelleCourant] = {
                    param: refEnclos,
                    peuple: !1,
                }),
                parc.encls[refEnclos].animaux))
                (especesPresentes.push(nomEspece), (enclosParLibelle[libelleCourant].peuple = !0));
    for (indexBoucle2 in (especesPresentes.sort(), especesPresentes))
        (espece = trouverEspece(especesPresentes[indexBoucle2])) &&
        selectEspeces.append('<option value="' + especesPresentes[indexBoucle2] + '">' + espece.singulier + "</option>");
    for (positionMenu in libellesParOrdre)
        selectEnclos.append(
            "<option " +
            (enclosParLibelle[libellesParOrdre[positionMenu]].peuple ? 'style="background-color:#D19260" ' : "") +
            'value="' +
            enclosParLibelle[libellesParOrdre[positionMenu]].param +
            '">' +
            libellesParOrdre[positionMenu] +
            "</option>",
        );
    var conteneurRecherche = $("<div>").addClass("link"),
        spanResultat = $("<span>").attr("id", "resultat").addClass("info_bulle").css({
            position: "absolute",
            display: "none",
            "background-color": "#fff",
            padding: "5px",
        });
    if (
        (conteneurRecherche.append(spanResultat),
            conteneurRecherche.append(selectEspeces),
            conteneurRecherche.append(selectEnclos),
            $(".link:first").parent().before(conteneurRecherche),
            /enclosgestion1.php/.test(window.location))
    ) {
        refEnclos = parametreUrl(window.location.href, "t") + "_" + parametreUrl(window.location.href, "v");
        var optionsEnclos = parBalise("option", parId("recherche_enclos"));
        for (
            positionMenu = 0, nbOptions = optionsEnclos.length;
            positionMenu < nbOptions && optionsEnclos[positionMenu].value != refEnclos;
            positionMenu++
        );
        parId("recherche_enclos").selectedIndex = positionMenu;
    }
    (parId("recherche").addEventListener("change", rechercherEnclosParEspece, !1),
        parId("recherche_enclos").addEventListener(
            "change",
            function (evenement) {
                var parties = evenement.target.value.split("_");
                window.location.href = urlBase + "enclosgestion1.php?t=" + parties[0] + "&v=" + parties[1];
            },
            !1,
        ));
}
function ordreEnclosMenu(indexEnclos) {
    return indexEnclos < 10
        ? indexEnclos + 1
        : indexEnclos < 16
            ? indexEnclos + 10
            : indexEnclos < 30
                ? indexEnclos + 20
                : indexEnclos < 41
                    ? indexEnclos + 30
                    : indexEnclos < 46
                        ? indexEnclos - 30
                        : indexEnclos < 51
                            ? indexEnclos - 20
                            : indexEnclos < 56
                                ? indexEnclos - 1
                                : indexEnclos < 61
                                    ? indexEnclos + 15
                                    : indexEnclos;
}
function rechercherEnclosParEspece(evenement) {
    var parties,
        htmlListe = "";
    for (var refEnclos in parc.encls)
        for (nomEspece in parc.encls[refEnclos].animaux)
            nomEspece == evenement.target.value &&
            (htmlListe +=
                '<a href="enclosgestion1.php?t=' +
                (parties = refEnclos.split("_"))[0] +
                "&v=" +
                parties[1] +
                '">' +
                libelleEnclos(refEnclos) +
                '</a>&nbsp;&nbsp;&nbsp;<span style="color:#394AE2;font-weight:bold">' +
                parc.encls[refEnclos].animaux[nomEspece].male +
                '</span> / <span style="color:#b016ba;font-weight:bold">' +
                parc.encls[refEnclos].animaux[nomEspece].femelle +
                "</span><br>");
    ((parId("resultat").innerHTML =
        '<span style="font-weight:bold;text-decoration:underline">Liste des enclos :</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="document.getElementById(\'resultat\').style.display=\'none\';" title="Fermer"> <span style="float:right;font-weight:bold;color:#000;cursor:pointer">X</span></a><div style="clear:both;margin-bottom:5px"></div>' +
        htmlListe),
        (parId("resultat").style.display = "inline"));
}
function afficherRapport() {
    parId("rapport_dial") && supprimerDialogue("rapport_dial");
    var imgSavane = GM_getResourceURL("savane.gif"),
        imgBassin = GM_getResourceURL("bassin.gif"),
        imgTerreEau = GM_getResourceURL("terre_eau.gif"),
        imgForet = GM_getResourceURL("foret.gif"),
        imgVoliere = GM_getResourceURL("voliere.gif"),
        imgAquarium = GM_getResourceURL("aquarium.gif"),
        imgVivarium = GM_getResourceURL("vivarium.gif"),
        imgNoctarium = GM_getResourceURL("noctarium.gif"),
        imgInsectarium = GM_getResourceURL("insectarium.gif"),
        imgIleDinos = GM_getResourceURL("ileauxdinos.gif");
    GM_addStyle(
        'h6{font-size:1em;margin:0px 0px 15px}h7{font-size:1em}.img_enclos_savane, .img_enclos_bassin, .img_enclos_terre_eau, .img_enclos_foret, .img_enclos_voliere, .img_enclos_aquarium, .img_enclos_vivarium,.img_enclos_noctarium, .img_enclos_insectarium, .img_enclos_ileauxdinos{margin:2px;cursor:pointer;font-size:1em;float:left;color:#FFF;text-align:right;padding:2px;font-weight:bold;width:46px;height:46px}.img_enclos_savane{background:url("' +
        imgSavane +
        '")}.img_enclos_bassin{background:url("' +
        imgBassin +
        '")}.img_enclos_terre_eau{background:url("' +
        imgTerreEau +
        '")}.img_enclos_foret{background:url("' +
        imgForet +
        '")}.img_enclos_voliere{background:url("' +
        imgVoliere +
        '")}.img_enclos_aquarium{background:url("' +
        imgAquarium +
        '")}.img_enclos_vivarium{background:url("' +
        imgVivarium +
        '")}.img_enclos_noctarium{background:url("' +
        imgNoctarium +
        '")}.img_enclos_insectarium{background:url("' +
        imgInsectarium +
        '")}.img_enclos_ileauxdinos{background:url("' +
        imgIleDinos +
        '")}.bullencl{white-space:nowrap;display:flex;justify-content:space-between}.animal{text-align:left;white-space:nowrap}.surpopind{text-align:left;white-space:nowrap;font-style:italic}.sexe{float:right}.male{color:#394AE2}.femelle{color:#B016BA}#legend{font-size:1em;padding:5px;margin:1px;font-weight:bold}.bonus,.collector,.cher,.albinos,.attraction,.exploration,.defi,.indication{font-weight:bold}.bonus{color:#1bb86c}.collector{color:#ec6c6e}.cher{color:#2732c7}.albinos{color:#31b9E4}.attraction{color:#AE1609}.exploration{color:#E69418}.defi{color:#862AD4}.indication{color:#c88}.listeManquant{max-height:300px;overflow-y:auto;font-size:0.8em}',
    );
    var pointsMoyenne,
        cumul,
        optionsGraphique,
        styleGraphique = {
            width: "680px",
            height: ($(window).height() - (document.body.scrollWidth - window.innerWidth > 0 ? 18 : 0)) / 2 - 80 + "px",
            margin: "10px",
        },
        selecteursGraphiques = "",
        evenementsNaissances = JSON.parse(GM_getValue(nomZoo + "_ev_naissances", "[]"));
    if (evenementsNaissances.length > 1) {
        for (
            selecteursGraphiques += "#graph_naissances",
                $("<div>").attr("id", "graph_naissances").css(styleGraphique).appendTo("body").hide(),
                objetTemp = [],
                pointsMoyenne = [],
                cumul = 0,
                indexBoucle = 0,
                limiteBoucle = evenementsNaissances.length;
            indexBoucle < limiteBoucle;
            indexBoucle++
        )
            (objetTemp.push([indexBoucle, evenementsNaissances[indexBoucle]]),
                (cumul += evenementsNaissances[indexBoucle]),
                pointsMoyenne.push([indexBoucle, cumul / (indexBoucle + 1)]));
        ((optionsGraphique = {
            grid: {
                show: !0,
                aboveData: !0,
                margin: 3,
                labelMargin: 10,
                minBorderMargin: 2,
                clickable: !0,
                hoverable: !0,
                autoHighlight: !0,
            },
            legend: {
                show: !0,
            },
            xaxis: {
                tickDecimals: 0,
            },
            yaxis: {
                position: "right",
                reserveSpace: !0,
            },
        }),
            $.plot(
                "#graph_naissances",
                [
                    {
                        data: objetTemp,
                        label: "naissances",
                    },
                    {
                        data: pointsMoyenne,
                        label: "moyenne",
                    },
                ],
                optionsGraphique,
            ));
    }
    var evenementsMontants = JSON.parse(GM_getValue(nomZoo + "_ev_montants", "[]"));
    if (evenementsMontants.length > 1) {
        for (
            selecteursGraphiques += ("" != selecteursGraphiques ? ", " : "") + "#graph_montants",
                $("<div>").attr("id", "graph_montants").css(styleGraphique).appendTo("body").hide(),
                objetTemp = [],
                pointsMoyenne = [],
                cumul = 0,
                indexBoucle = 0,
                limiteBoucle = evenementsMontants.length;
            indexBoucle < limiteBoucle;
            indexBoucle++
        )
            (objetTemp.push([indexBoucle, evenementsMontants[indexBoucle]]),
                (cumul += evenementsMontants[indexBoucle]),
                pointsMoyenne.push([indexBoucle, cumul / (indexBoucle + 1)]));
        ((optionsGraphique = {
            grid: {
                show: !0,
                aboveData: !0,
                margin: 3,
                labelMargin: 10,
                minBorderMargin: 2,
                clickable: !0,
                hoverable: !0,
                autoHighlight: !0,
            },
            series: {
                label: "zoo'z",
            },
            legend: {
                show: !0,
            },
            xaxis: {
                tickDecimals: 0,
            },
            yaxis: {
                position: "right",
                reserveSpace: !0,
                tickFormatter: function (valeur, axe) {
                    return valeur > 1e6
                        ? parseInt(valeur / 1e6, 10) +
                        "M" +
                        (0 == parseInt(((valeur / 1e6) % 1) * 10, 10) ? "" : parseInt(((valeur / 1e6) % 1) * 10, 10))
                        : valeur > 1e3
                            ? parseInt(valeur / 1e3, 10) +
                            "k" +
                            (0 == parseInt(((valeur / 1e3) % 1) * 10, 10) ? "" : parseInt(((valeur / 1e3) % 1) * 10, 10))
                            : valeur;
                },
            },
        }),
            $.plot(
                "#graph_montants",
                [
                    {
                        data: objetTemp,
                        label: "montants",
                    },
                    {
                        data: pointsMoyenne,
                        label: "moyenne",
                    },
                ],
                optionsGraphique,
            ));
    }
    if ("" != selecteursGraphiques) {
        var dernierPointSurvole = null;
        ($(selecteursGraphiques).on("plothover", function (evenement, position, point) {
            point
                ? dernierPointSurvole != point.dataIndex + "#" + point.seriesIndex &&
                ((dernierPointSurvole = point.dataIndex + "#" + point.seriesIndex),
                    $("#tooltip").remove(),
                    afficherInfobulleGraphique(
                        point.pageX,
                        point.pageY,
                        "graph_naissances" == evenement.target.id
                            ? (1 == point.seriesIndex ? "moyenne des naissances : " : "") +
                            formaterNombre(
                                point.datapoint[1].toFixed(
                                    1 == point.seriesIndex && point.datapoint[1] > 0
                                        ? Math.max(2 - parseInt(Math.log10(parseFloat(point.datapoint[1]))), 0)
                                        : 0,
                                ),
                            ) +
                            (0 == point.seriesIndex ? " naissance" + (point.datapoint[1] > 1 ? "s" : "") : "")
                            : (1 == point.seriesIndex ? "moyenne des montants : " : "montant : ") +
                            formaterNombre(
                                point.datapoint[1].toFixed(
                                    point.datapoint[1] > 0
                                        ? Math.max(2 - parseInt(Math.log10(parseFloat(point.datapoint[1]))), 0)
                                        : 0,
                                ),
                            ) +
                            " zoo'z",
                        point.seriesIndex,
                    ))
                : ($("#tooltip").remove(), (dernierPointSurvole = null));
        }),
            $(".legend").find("table:first").css({
                right: "-100px",
            }));
    }
    var contenuEvenement,
        htmlCelibataires,
        htmlSurpop15,
        htmlSurpopCollective,
        htmlSurpopIndividuelle,
        nbEspecesManquantes,
        valeurSurpopEnclos,
        htmlEspecesManquantes = "",
        nbEspeces = Object.keys(especes).length,
        totalMales = 0,
        totalFemelles = 0,
        valeurSurpopCollective = parc.infoscan.surpopulation,
        iconesMourants = $("<div>"),
        iconesAControler = $("<div>"),
        iconesCelibataires = $("<div>"),
        iconesSurpop15 = $("<div>"),
        iconesSurpopCollective = $("<div>"),
        iconesSurpopIndividuelle = $("<div>"),
        htmlDebutLigne = '<div class="bullencl"><span class="animal">',
        htmlSeparateurSexe = '</span>&nbsp;&nbsp;&nbsp;<span class="sexe"><span class="male">',
        htmlSeparateurFemelle = '</span> / <span class="femelle">',
        htmlFinLigne = "</span></span></div>";
    for (cleEnclos in ((especesPossedees = []), parc.encls)) {
        for (nomEspece in ((htmlCelibataires = ""),
            (htmlSurpop15 = ""),
            (htmlSurpopCollective = ""),
            (htmlSurpopIndividuelle = ""),
            (valeurSurpopEnclos = parc.encls[cleEnclos].hasOwnProperty("surpop")
                ? parc.encls[cleEnclos].surpop
                : valeurSurpopCollective),
        parc.encls[cleEnclos].mourant && iconesMourants.append(creerIconeEnclos(cleEnclos)),
        parc.encls[cleEnclos].a_verifier && iconesAControler.append(creerIconeEnclos(cleEnclos)),
            parc.encls[cleEnclos].animaux))
            (espece = trouverEspece(nomEspece)) &&
            (especesPossedees.push(nomEspece),
                (totalMales += parc.encls[cleEnclos].animaux[nomEspece].male),
                (totalFemelles += parc.encls[cleEnclos].animaux[nomEspece].femelle),
            parc.encls[cleEnclos].animaux[nomEspece].male != parc.encls[cleEnclos].animaux[nomEspece].femelle &&
            (htmlCelibataires +=
                htmlDebutLigne +
                nomEspece +
                htmlSeparateurSexe +
                parc.encls[cleEnclos].animaux[nomEspece].male +
                htmlSeparateurFemelle +
                parc.encls[cleEnclos].animaux[nomEspece].femelle +
                htmlFinLigne),
            (parc.encls[cleEnclos].animaux[nomEspece].male > 15 || parc.encls[cleEnclos].animaux[nomEspece].femelle > 15) &&
            (htmlSurpop15 +=
                htmlDebutLigne +
                nomEspece +
                htmlSeparateurSexe +
                parc.encls[cleEnclos].animaux[nomEspece].male +
                htmlSeparateurFemelle +
                parc.encls[cleEnclos].animaux[nomEspece].femelle +
                htmlFinLigne),
            15 != valeurSurpopCollective &&
            (parc.encls[cleEnclos].animaux[nomEspece].male > valeurSurpopCollective ||
                parc.encls[cleEnclos].animaux[nomEspece].femelle > valeurSurpopCollective) &&
            (htmlSurpopCollective +=
                htmlDebutLigne +
                nomEspece +
                htmlSeparateurSexe +
                parc.encls[cleEnclos].animaux[nomEspece].male +
                htmlSeparateurFemelle +
                parc.encls[cleEnclos].animaux[nomEspece].femelle +
                htmlFinLigne),
            (parc.encls[cleEnclos].animaux[nomEspece].male > valeurSurpopEnclos ||
                parc.encls[cleEnclos].animaux[nomEspece].femelle > valeurSurpopEnclos) &&
            (htmlSurpopIndividuelle +=
                htmlDebutLigne +
                nomEspece +
                htmlSeparateurSexe +
                parc.encls[cleEnclos].animaux[nomEspece].male +
                htmlSeparateurFemelle +
                parc.encls[cleEnclos].animaux[nomEspece].femelle +
                htmlFinLigne));
        ("" !== htmlCelibataires &&
        iconesCelibataires.append(creerIconeEnclos(cleEnclos).attr("htmltitle", htmlCelibataires)),
        "" !== htmlSurpop15 && iconesSurpop15.append(creerIconeEnclos(cleEnclos).attr("htmltitle", htmlSurpop15)),
        "" !== htmlSurpopCollective &&
        iconesSurpopCollective.append(creerIconeEnclos(cleEnclos).attr("htmltitle", htmlSurpopCollective)),
        "" !== htmlSurpopIndividuelle &&
        iconesSurpopIndividuelle.append(
            creerIconeEnclos(cleEnclos).attr(
                "htmltitle",
                '<div class="bullencl"><span class="surpopind">surpop indiv</span>&nbsp;&nbsp;&nbsp;<span class="sexe">' +
                valeurSurpopEnclos +
                "</span></div>" +
                htmlSurpopIndividuelle,
            ),
        ));
    }
    for (nomEspece in ((listeTemp = []), especes))
        -1 == especesPossedees.indexOf(nomEspece) && listeTemp.push([especes[nomEspece].prix, nomEspece]);
    for (indexBoucle in ((nbEspecesManquantes = listeTemp.length),
        listeTemp.sort(function (ligneA, ligneB) {
            return parseInt(ligneB) - parseInt(ligneA);
        }),
        listeTemp))
        (/albinos/.test(listeTemp[indexBoucle][1])
            ? (htmlEspecesManquantes += '<span class="albinos">' + especes[listeTemp[indexBoucle][1]].singulier + "</span>")
            : especes[listeTemp[indexBoucle][1]].defi
                ? (htmlEspecesManquantes += '<span class="defi">' + especes[listeTemp[indexBoucle][1]].singulier + "</span>")
                : especes[listeTemp[indexBoucle][1]].bonus
                    ? (htmlEspecesManquantes += '<span class="bonus">' + especes[listeTemp[indexBoucle][1]].singulier + "</span>")
                    : especes[listeTemp[indexBoucle][1]].collector
                        ? (htmlEspecesManquantes +=
                            '<span class="collector">' + especes[listeTemp[indexBoucle][1]].singulier + "</span>")
                        : especes[listeTemp[indexBoucle][1]].attraction
                            ? (htmlEspecesManquantes +=
                                '<span class="attraction">' + especes[listeTemp[indexBoucle][1]].singulier + "</span>")
                            : especes[listeTemp[indexBoucle][1]].exploration
                                ? (htmlEspecesManquantes +=
                                    '<span class="exploration">' + especes[listeTemp[indexBoucle][1]].singulier + "</span>")
                                : (htmlEspecesManquantes += "<span>" + especes[listeTemp[indexBoucle][1]].singulier + "</span>"),
        "" != especes[listeTemp[indexBoucle][1]].VIP &&
        (htmlEspecesManquantes += ' <span class="indication">(' + especes[listeTemp[indexBoucle][1]].VIP + ")</span>"),
            (htmlEspecesManquantes += "<br>"));
    nbEspecesManquantes > 0 &&
    (htmlEspecesManquantes =
        '<p id="legend">Légende des couleurs : <span class="albinos">albinos</span> <span class="bonus">bonus</span> <span class="attraction">attraction</span> <span class="collector">périodique</span> <span class="exploration">exploration</span> <span class="defi">défi</span> </p><hr><div class="listeManquant">' +
        htmlEspecesManquantes +
        "</div>");
    var htmlMessages = "",
        regexNettoyage = new RegExp("<a href=[^>]*>|</a>|<img[^>]*>", "gi");
    if (parc.infoscan.hasOwnProperty("messages") && Object.keys(parc.infoscan.messages).length > 0)
        for (var cleMessage in parc.infoscan.messages)
            htmlMessages +=
                parc.infoscan.messages[cleMessage]
                    .replace(regexNettoyage, "")
                    .replace(/strong/g, "b")
                    .replace(/\s\s/g, "")
                    .replace(/dÃ©fi/g, "défi") + "<br>";
    var blocTotaux = $("<div>")
            .css("font-weight", "bold")
            .html(
                "Nombre d'animaux : " +
                (totalMales + totalFemelles) +
                "<br>- mâle" +
                (totalMales > 1 ? "s" : "") +
                " : " +
                totalMales +
                "<br>- femelle" +
                (totalFemelles > 1 ? "s" : "") +
                " : " +
                totalFemelles +
                "<br>",
            ),
        blocRapport = $("<div>").attr("id", "rapport_bloc");
    for (var typeEvenement of ["naissance", "achat", "trouvaille", "deces", "vol"])
        (contenuEvenement =
            "vol" != typeEvenement && prefsUtilisateur.rapport_mode_image
                ? genererImagesRapport(typeEvenement)
                : formaterEvenements(parc.infoscan, typeEvenement, "rapport")) &&
        blocRapport
            .append(
                $("<h3>").html(
                    typeEvenement.charAt(0).toUpperCase() +
                    typeEvenement.slice(1) +
                    ("deces" != typeEvenement ? "s" : "") +
                    ("vol" == typeEvenement ? " réussis" : ""),
                ),
            )
            .append($("<div>").append(contenuEvenement));
    (blocRapport
        .append($("<h3>").html("Météo"))
        .append($("<div>").append($('<img src="https://monzoo.net/meteo_fofo.php">'))),
        blocRapport
            .append(
                $("<h3>").html(
                    "Vous possédez " +
                    (nbEspeces - nbEspecesManquantes) +
                    " espèces sur " +
                    nbEspeces +
                    " (soit " +
                    nbEspecesManquantes +
                    " manquante" +
                    (nbEspecesManquantes > 1 ? "s" : "") +
                    "). Liste des espèces manquantes",
                ),
            )
            .append($("<div>").append(htmlEspecesManquantes)),
    iconesMourants.find("div").length &&
    blocRapport.append($("<h3>").html("Mourants")).append($("<div>").append(iconesMourants)),
    iconesAControler.find("div").length &&
    blocRapport.append($("<h3>").html("Enclos à contrôler")).append($("<div>").append(iconesAControler)),
    iconesCelibataires.find("div").length &&
    blocRapport.append($("<h3>").html("Célibataires")).append($("<div>").append(iconesCelibataires)),
    iconesSurpop15.find("div").length &&
    blocRapport
        .append($("<h3>").html("Surpopulation (dépassant les 15 mâles ou 15 femelles)"))
        .append($("<div>").append(iconesSurpop15)),
    iconesSurpopCollective.find("div").length &&
    blocRapport
        .append(
            $("<h3>").html(
                "Surpopulation2 (dépassant les " +
                valeurSurpopCollective +
                " mâle" +
                (valeurSurpopCollective > 1 ? "s" : "") +
                " ou " +
                valeurSurpopCollective +
                " femelle" +
                (valeurSurpopCollective > 1 ? "s" : "") +
                " = surpopulation collective)",
            ),
        )
        .append($("<div>").append(iconesSurpopCollective)),
    iconesSurpopIndividuelle.find("div").length &&
    blocRapport
        .append(
            $("<h3>").html(
                "Surpopulation3 (les mâles ou les femelles dépassent les valeurs de surpopulation définies par enclos = surpopulation individuelle)",
            ),
        )
        .append($("<div>").append(iconesSurpopIndividuelle)),
    htmlMessages && blocRapport.append($("<h3>").html("Messages divers")).append($("<div>").append(htmlMessages)),
    evenementsNaissances.length > 1 &&
    blocRapport
        .append($("<h3>").html("Evolution des naissances"))
        .append($("<div>").append($("#graph_naissances").show())),
    evenementsMontants.length > 1 &&
    blocRapport
        .append($("<h3>").html("Evolution du montant des naissances"))
        .append($("<div>").append($("#graph_montants").show())),
        $("<div>")
            .attr("id", "rapport_dial")
            .css({
                "font-size": "75%",
            })
            .appendTo("body")
            .hide()
            .append(blocTotaux)
            .append(blocRapport)
            .dialog({
                title: "Rapport",
                width: 850,
                buttons: {
                    Fermer: function () {
                        supprimerDialogue("rapport_dial");
                    },
                },
            }),
        blocRapport.accordion({
            heightStyle: "content",
            collapsible: !0,
        }),
        $("#rapport_dial").dialog("open"),
        parId("rapport_dial").parentNode.setAttribute(
            "style",
            "z-index:5002;position:absolute;width:850px;top:0px;left:" + (window.innerWidth - 859) / 2 + "px",
        ),
        window.scroll(window.scrollX, 0));
}
function supprimerDialogue(idDialogue) {
    parId(idDialogue).parentNode.parentNode.removeChild(parId(idDialogue).parentNode);
}
function afficherInfobulleGraphique(x, y, contenu, indexSerie) {
    $("<div>")
        .attr("id", "tooltip")
        .append(contenu)
        .addClass("ui-corner-all")
        .css({
            position: "absolute",
            display: "none",
            top: y + 5,
            left: x + 5,
            border: 1 == indexSerie ? "1px solid #599" : "1px solid #99A",
            padding: "5px",
            "z-index": 6e3,
            "background-color": 1 == indexSerie ? "#cff" : "#ffa",
            opacity: 0.8,
        })
        .appendTo("body")
        .fadeIn(200);
}
function creerPanda() {
    GM_addStyle(
        "#img_preference {width:60px}#preferences {width:270px;display:none;padding:2px}#preferences p {margin:1px}#preferences label {font-size:12px}#preferences h2, #preferences h3 {margin:4px;padding:2px;font-size:12px;border:1px dotted #D19260;border-radius:0px 0px 5px 5px}#preferences h3 {margin:2px 12px;font-size:10px}#preferences h2.inactif, #preferences h3.inactif {opacity:0.5}#preferences h2.actif, #preferences h3.actif {opacity:1}#preferences h2:hover, #preferences h3:hover {opacity:0.8}#preferences h2 a, #preferences h3 a {cursor:pointer}#preferences div {display:none}#preferences div p label {width:147px;margin-left:15px;margin-top:2px;text-align:left;float:left}#preferences .inptxt {height:12px;font-size:10px;margin-left:-10px}#preferences .inptxt2 {height:12px;font-size:10px;margin-left:4px}#preferences fieldset {border:0;padding:0px}#preferences button {font-family:garamond arial sans serif;font-size:12px;background-color:#F7E3C0;padding:0px;border:0}#preferences button.action:hover {text-decoration:underline;cursor:pointer}#preferences button.inaction {opacity:0.4}#version {margin:4px;text-align:right;font-size:12px;font-weight:bold}a.action {margin:5px;padding-left:10px;font-weight:normal;color:#12249a;cursor:pointer}a.action:hover {text-decoration:underline}.a_perso {display:block;float:left;font-size:14px;text-align:right;padding-top:5px;width:120px}.div_a_perso {float:left;width:120px;display:inline}",
    );
    var positionPanda = JSON.parse(GM_getValue("preferences_position", !1));
    (positionPanda ||
    (positionPanda = {
        top: 85,
        left: 5,
    }),
    (positionPanda.top < 0 ||
        positionPanda.left < 0 ||
        positionPanda.top > window.innerHeight - 100 ||
        positionPanda.left > window.innerWidth - (document.body.scrollHeight - window.innerHeight > 0 ? 18 : 0)) &&
    (positionPanda = {
        top: 85,
        left: 5,
    }),
        GM_setValue("preferences_position", JSON.stringify(positionPanda)));
    var ressources = {
            panda: GM_getResourceURL("panda.png"),
        },
        conteneurPanda = $("<div>")
            .attr("id", "preferences_container")
            .offset(positionPanda)
            .appendTo("body")
            .css({
                position: "fixed",
                "z-index": "5000",
            })
            .draggable({
                handle: "#img_preference",
                stop: function (evenement, ui) {
                    ((ui.position = ajusterPosition(ui.position, "preferences_container")),
                        GM_setValue("preferences_position", JSON.stringify(ui.position)),
                        (parId("img_preference").style.cursor = "pointer"),
                        (pandaCliquable = !1));
                },
                start: function (evenement, ui) {
                    parId("img_preference").style.cursor = "move";
                },
            })
            .show();
    $("<img>")
        .attr("src", ressources.panda)
        .attr("id", "img_preference")
        .attr("alt", "panda")
        .css({
            cursor: "pointer",
        })
        .on("click", basculerPanda)
        .appendTo(conteneurPanda);
    var htmlPreferences =
        '<span id="version">Aide_monzoo v <span style="font-size:11px">' +
        versionScript +
        '</span></span><h2 class="inactif"><a id="lien_pref_general">Général</a></h2><div id="pref_general"><p><label for="decalage_horaire">Décalage horaire :</label><input type="text" id="decalage_horaire" class="inptxt2" maxlength="3" size="2"></p><p><a id="popNotesVersion" class="action">Voir les notes de version</a></p><h3 class="inactif"><a id="lien_pref_encadrement">Encadrement pré-mort et naissances</a></h3><div id="pref_encadrement"><input id="select_1" type="radio" name="choix_encadrement" value="1">Encadrement complet (image + barre)<br><input id="select_2" type="radio" name="choix_encadrement" value="2">Encadrement de la barre de vie</div></div><h2 class="inactif"><a id="lien_pref_tableau">Tableau des animaux de l\'enclos</a></h2><div id="pref_tableau"><h3><a id="lien_pref_tri">Tri</a></h3><div id="pref_tri" style="margin-left:12px;"><input type="radio" name="choix_tri" value="1">Par nom<br><input type="radio" name="choix_tri" value="2">Par prix<br><input type="radio" name="choix_tri" value="3">Par nombre d\'animaux<br><input type="radio" name="choix_tri" value="4">Par nombre de mâle<br><input type="radio" name="choix_tri" value="5">Par nombre de femelle<br></div><h3><a id="lien_pref_couple">Type d\'affichage</a></h3><div id="pref_couple" style="margin-left:12px;"><input type="radio" name="choix_couple" value="1">Total<br><input type="radio" name="choix_couple" value="2">Total+Adulte<br><input type="radio" name="choix_couple" value="3">Total+Bébé<br><input type="radio" name="choix_couple" value="4">Adulte+Bébé<br></div></div><h2 class="inactif"><a id="lien_pref_scan_maj">Scan de mise à jour DE CE PARC</a></h2><div id="pref_scan_maj"><fieldset id="scanmajfait"><p><label for="gestion">Lancement espions et stocks :</label><input type="checkbox" id="gestion"></p><p><label for="vente_surpopulation">Vente de la surpopulation :</label><input type="checkbox" id="vente_surpopulation"></p><p title="' +
        texteAideSurpopulation() +
        '" style="margin-left:18px;margin-top:-4px;width:max-content"><label style="width:129px">Surpopulation collective :</label><input type="text" id="valeur_surpopulation" class="inptxt2" maxlength="2" size="2"></p><p style="margin-left:18px"><button id="gestion_exclusions" class="action" style="color:hotpink"><a class="action" style="color:hotpink">Cliquez ici pour gérer la liste des exclusions</a></button></p><p><label for="vente_mourant">Vente des mourants :</label><input type="checkbox" id="vente_mourant"></p><p><button id="scan_de_maj" class="action"><a class="action">Lancer un scan de maj avec les choix ci-dessus</a></button></p></fieldset></div><h2 class="inactif"><a id="lien_pref_rapport">Rapport</a></h2><div id="pref_rapport"><p><label for="rapport_mode_image">Animaux en mode image :</label><input type="checkbox" id="rapport_mode_image"></p></div><h2 class="inactif"><a id="lien_pref_bulletin">Bulletin</a></h2><div id="pref_bulletin"><h3><a id="lien_pref_couleurs">Couleurs</a></h3><div id="pref_couleurs"><p><label for="couleur_nomzoo">Nom du zoo :</label><input type="text" class="inptxt" id="couleur_nomzoo" maxlength="7" size="7"></p><p><label for="couleur_base">Base :</label><input type="text" class="inptxt" id="couleur_base" maxlength="7" size="7"></p><p><label for="couleur_cher">Animaux > 100000 Zoo\'s :</label><input type="text" class="inptxt" id="couleur_cher" maxlength="7" size="7"></p><p><label for="couleur_bonus">Animaux bonus :</label><input type="text" class="inptxt" id="couleur_bonus" maxlength="7" size="7"></p><p><label for="couleur_albinos">Albinos :</label><input type="text" class="inptxt" id="couleur_albinos" maxlength="7" size="7"></p><p><label for="couleur_vols">Vols :</label><input type="text" class="inptxt" id="couleur_vols" maxlength="7" size="7"></p></div><h3><a id="lien_pref_nomzoo">Préférences</a></h3><div id="pref_nomzoo"><p><label for="nomzoo">Afficher nom des zoos :</label><input type="checkbox" id="nomzoo"></p><p><label for="achats">Afficher mes achats :</label><input type="checkbox" id="achats"></p></div></div><h2 class="inactif"><a id="lien_pref_infos">Infos DE CE PARC</a></h2><div id="pref_infos"><h3 class="inactif"><a id="lien_pref_historique">Historique des naissances</a></h3><div id="pref_historique"><a id="affiche_historique" class="action">Afficher</a><br><a id="raz_historique" class="action">Remettre à zéro</a></div></div><h2 class="inactif"><a id="lien_pref_debug">Debug</a></h2><div id="pref_debug"><p><a id="relance_scan_initial" class="action">Relancer un scan initial de tous les enclos</a></p><p><a id="voir_log" class="action">Afficher le log</a></p><p><a id="affiche_ajout_animal" class="action">Ajouter une nouvelle espèce</a></p><p><a id="affiche_modif_animal" class="action">Modifier une espèce ajoutée</a></p><p><a id="control_animaux" class="action">Contrôler les espèces ajoutées</a></p><p><a id="importer_donnees" class="action">Importer mes données (fichier JSON)</a></p><p><a id="exporter_donnees" class="action">Exporter mes données (fichier JSON)</a></p></div>';
    $("<div>").attr("id", "preferences").addClass("info_bulle").append(htmlPreferences).appendTo(conteneurPanda);
    ($("#gestion").prop("checked", parc.gestion),
        $("#decalage_horaire").val(prefsUtilisateur.decalage_horaire).on("input", changerDecalageHoraire),
        $("#select_" + prefsUtilisateur.encadrement).prop("checked", !0),
        $("#valeur_surpopulation").val(parc.infoscan.surpopulation).on("input", changerSurpopulation),
        $("#vente_surpopulation").prop("checked", parc.infoscan.vente_surpopulation),
        $("#vente_mourant").prop("checked", parc.infoscan.vente_mourant),
        $("#rapport_mode_image").prop("checked", prefsUtilisateur.rapport_mode_image));
    var typesCouleurs = ["nomzoo", "base", "cher", "bonus", "albinos", "vols"];
    for (indexBoucle = 0, limiteBoucle = typesCouleurs.length; indexBoucle < limiteBoucle; indexBoucle++)
        $("#couleur_" + typesCouleurs[indexBoucle])
            .val(prefsUtilisateur.bulletin.couleurs[typesCouleurs[indexBoucle]])
            .css("background", prefsUtilisateur.bulletin.couleurs[typesCouleurs[indexBoucle]]);
    ($("#nomzoo").prop("checked", prefsUtilisateur.bulletin.nomzoo),
        $("#achats").prop("checked", prefsUtilisateur.bulletin.achats),
        $('input:radio[name="choix_tri"]').each(function () {
            $(this).val() == prefsUtilisateur.tri && $(this).prop("checked", !0);
        }),
        $('input:radio[name="choix_couple"]').each(function () {
            $(this).val() == prefsUtilisateur.couple && $(this).prop("checked", !0);
        }));
    var sections = [
        "general",
        "encadrement",
        "tableau",
        "tri",
        "couple",
        "scan_maj",
        "rapport",
        "bulletin",
        "couleurs",
        "nomzoo",
        "infos",
        "historique",
        "debug",
    ];
    for (indexBoucle in sections)
        parId("lien_pref_" + sections[indexBoucle]).addEventListener("click", deplierSectionPanda, !1);
    ($(".inptxt").on("change", changerCouleur),
        $('[name="choix_tri"], [name="choix_encadrement"], [name="choix_couple"]').on("change", changerChoixAffichage));
    var casesACocher = ["gestion", "vente_surpopulation", "vente_mourant", "rapport_mode_image", "nomzoo", "achats"];
    for (indexBoucle in casesACocher) $("#" + casesACocher[indexBoucle]).on("click", changerOptionCase);
    ($("#popNotesVersion").on("click", afficherNotesVersion),
        $("#affiche_historique").on("click", afficherHistoriqueNaissances),
        $("#raz_historique").on("click", viderHistoriqueNaissances),
        $("#scan_de_maj").on("click", lancerScanMaj),
        $("#gestion_exclusions").on("click", gererExclusions),
        $("#relance_scan_initial").on("click", relancerScanInitial),
        $("#voir_log").on("click", afficherLog),
        $("#affiche_ajout_animal").on("click", afficherAjoutEspece),
        $("#affiche_modif_animal").on("click", afficherModifEspece),
        $("#control_animaux").on("click", controlerEspecesAjoutees),
    GM_getValue("maj_a_faire", !1) &&
    (parId("scanmajfait").setAttribute("disabled", !0),
        $("button", "#scanmajfait").removeClass("action").addClass("inaction")));
    var zoneBlocNote = $('<textarea id="bloc_note" wrap="soft">' + parc.bloc_note_text + "</textarea>")
        .width(parc.bloc_note.width)
        .height(parc.bloc_note.height)
        .on("change", enregistrerBlocNote)
        .on("mouseup", function () {
            var largeur = $(this).width(),
                hauteur = $(this).height();
            (largeur != parc.bloc_note.width || hauteur != parc.bloc_note.height) &&
            ((parc.bloc_note.width = largeur),
                (parc.bloc_note.height = hauteur),
                GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)));
        });
    (GM_addStyle("#contenu_bloc_note {overflow-y:auto}#bloc_note {margin:0px}"),
        creerBulle({
            id: "bloc_note",
            titre: "Bloc note",
            contenu: zoneBlocNote,
            container_options: {
                "min-width": "100px",
                "z-index": "5000",
            },
            position: {
                top: 5,
                left: 5,
            },
        }),
    "achat" != pageCourante && afficherStocks());
}
function texteAideSurpopulation() {
    return "Si vous cochez la case 'vente de la surpopulation', la vente s'effectura au-dessus de la valeur de la surpopulation collective pour toutes les espèces sauf pour celles figurant dans la liste des exclusions";
}
function enregistrerBlocNote() {
    ((parc.bloc_note_text = parId("bloc_note").value), GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)));
}
function afficherStocks() {
    GM_addStyle(
        "#contenu_stock {overflow-y:auto;background-color:#cb842e}#stock {border-collapse:collapse;font-weight:bold;cursor:default;margin-left:1px;width:99%}#stock th, #stock td{padding:2px 2px 0px}#stock .stock{text-align:center;font-size:14px}#stock .titre{text-align:right;vertical-align:middle;font-size:12px;white-space:nowrap}#stock .savane{background-color:#F8CC6B}#stock .bassin{background-color:#6F96FB}#stock .terre_eau{background-color:#CBD563}#stock .foret{background-color:#80E56B}#stock .voliere{background-color:#AFBDBC}#stock .aquarium{background-color:#97D5F9}#stock .vivarium{background-color:#BBCA77}#stock .noctarium{background-color:#D8C5E9}#stock .insectarium{background-color:#EFDC7C}#stock .ile aux dinos{background-color:#8BA9FF}",
    );
    var stock,
        typeEnclos,
        htmlLignes = "";
    for (nomEspece in ((listeTemp = []), especes))
        (especes[nomEspece].defi ||
            especes[nomEspece].VIP.includes("oeuf") ||
            especes[nomEspece].VIP.includes("parrainage")) &&
        listeTemp.push([especes[nomEspece].enclos, nomEspece]);
    for (var indexListe in (listeTemp.sort(function (ligneA, ligneB) {
        return ligneA[0] < ligneB[0]
            ? -1
            : ligneA[0] > ligneB[0]
                ? 1
                : ligneA[1] < ligneB[1]
                    ? -1
                    : ligneA[1] > ligneB[1]
                        ? 1
                        : 0;
    }),
        listeTemp))
        ((stock = parc.stock.hasOwnProperty(listeTemp[indexListe][1]) ? parc.stock[listeTemp[indexListe][1]] : "?"),
            (htmlLignes +=
                '<tr class="' +
                (typeEnclos = nomTypeEnclos(especes[listeTemp[indexListe][1]], !0)).replace(" / ", "_") +
                '"' +
                ("?" == stock
                    ? " title=\"Aucun stock en mémoire : allez sur une page d'achat ou de construction d'enclos de type " +
                    typeEnclos +
                    ' pour les récupérer"'
                    : "") +
                '><td class="titre">' +
                especes[listeTemp[indexListe][1]].singulier +
                "</td><td>" +
                htmlImageAnimal(listeTemp[indexListe][1], "width:26px") +
                '</td><td class="stock">' +
                stock +
                "</td></tr>"));
    ("" === htmlLignes &&
    (htmlLignes =
        "<tr><td class=\"stock\">Aucun stock en mémoire :<br>allez sur des pages d'achat ou de<br>construction d'enclos pour les récupérer</td></tr>"),
        creerBulle({
            id: "stock",
            titre: "Mes stocks",
            container_options: {
                "min-width": "205px",
                "z-index": "5000",
            },
            position: {
                top: 45,
                left: 5,
            },
            contenu: (htmlLignes = '<table id="stock"><tbody>' + htmlLignes + "</tbody></table>"),
        }));
}
function basculerPanda() {
    (pandaCliquable && ($("#preferences").is(":visible") ? $("#preferences").slideUp() : $("#preferences").slideDown()),
        (pandaCliquable = !0));
}
function changerDecalageHoraire() {
    var decalage = $.trim($(this).val());
    if (/^(\+|\-)?$|^(\+|\-)?[0-9]{1}$|^(\+|\-)?[0-9]{2}$/.test(decalage) || "" === decalage) {
        if (
            ((/^(\+|\-)?$/.test(decalage) || "" === decalage) && (decalage = 0),
                (prefsUtilisateur.decalage_horaire = decalage),
                GM_setValue("info_user", JSON.stringify(prefsUtilisateur)),
            0 !== decalage && "+" != decalage && "-" != decalage)
        ) {
            var dateFrance = new Date();
            ((dateFrance = new Date(Date.parse(dateFrance) - 36e5 * parseFloat(decalage))),
                alert(
                    "Vérification d'après votre saisie :\nen France, on est le " +
                    dateFrance.getDate() +
                    "/" +
                    (dateFrance.getMonth() + 1) +
                    "/" +
                    dateFrance.getFullYear() +
                    " et il est " +
                    dateFrance.getHours() +
                    "h" +
                    dateFrance.getMinutes() +
                    "\n\nSi c'est incorrect, modifiez votre saisie.\nSi c'est correct, il est obligatoire de vous déconnecter maintenant\npour que le script puisse mettre à jour des données indispensables.",
                ));
        }
    } else alert("Erreur, décalage horaire invalide");
}
function changerSurpopulation() {
    var idChamp = $(this).attr("id"),
        valeur = $.trim($(this).val());
    /^[0-9]{1}$|^[0-9]{2}/.test(valeur) || "" === valeur
        ? ((valeur = "" === valeur ? 15 : parseInt(valeur)),
            "valeur_surpop" == idChamp ? (parc.encls[idEnclos].surpop = valeur) : (parc.infoscan.surpopulation = valeur),
            GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
            "valeur_surpopulation" == idChamp && $("#valeur_surpopulation2")
                ? $("#valeur_surpopulation2").val(valeur)
                : "valeur_surpopulation2" == idChamp && $("#valeur_surpopulation").val(valeur))
        : alert("Erreur, valeur de surpopulation incorrecte");
}
function deplierSectionPanda(evenement) {
    var divsPanda = parBalise("div", parId("preferences")),
        section = parId(evenement.target.id.substring(5)),
        sectionParente = "";
    for (
        /preferences/.test(section.parentNode.id) || (sectionParente = section.parentNode),
            indexBoucle = 0,
            limiteBoucle = divsPanda.length;
        indexBoucle < limiteBoucle;
        indexBoucle++
    )
        divsPanda[indexBoucle] != section &&
        divsPanda[indexBoucle] != sectionParente &&
        ((divsPanda[indexBoucle].style.display = "none"),
            parId("lien_" + divsPanda[indexBoucle].id).parentNode.setAttribute("class", "inactif"));
    "block" == section.style.display
        ? ((section.style.display = "none"), evenement.target.parentNode.setAttribute("class", "inactif"))
        : ((section.style.display = "block"), evenement.target.parentNode.setAttribute("class", "actif"));
}
function changerCouleur() {
    var couleur = $.trim($(this).val());
    if (/^#?[A-Fa-f0-9]{6}$|^#?[A-Fa-f0-9]{3}/.test(couleur) || "" === couleur) {
        var typeCouleur = $(this).attr("id").substring(8);
        (/#/.test(couleur) || "" === couleur || (couleur = "#" + couleur),
            (parId("couleur_" + typeCouleur).style.backgroundColor = couleur),
            (prefsUtilisateur.bulletin.couleurs[typeCouleur] = couleur),
            GM_setValue("info_user", JSON.stringify(prefsUtilisateur)));
    } else alert("Erreur, code couleur invalide");
}
function changerChoixAffichage() {
    var nomChamp = $(this).attr("name");
    ((prefsUtilisateur[nomChamp.substring(nomChamp.indexOf("_") + 1)] = parseInt($(this).val())),
        GM_setValue("info_user", JSON.stringify(prefsUtilisateur)));
}
function changerOptionCase() {
    var idCase = $(this).attr("id"),
        idCasePrincipale = idCase.slice(0, -1),
        coche = $(this).prop("checked");
    "rapport_mode_image" == idCase || "nomzoo" == idCase || "achats" == idCase
        ? ("rapport_mode_image" == idCase
            ? (prefsUtilisateur[idCase] = coche)
            : ("nomzoo" != idCase && "achats" != idCase) || (prefsUtilisateur.bulletin[idCase] = coche),
            GM_setValue("info_user", JSON.stringify(prefsUtilisateur)))
        : ("gestion" == idCase
            ? ((parc[idCase] = coche), $("#" + idCase + "2") && $("#" + idCase + "2").prop("checked", coche))
            : "gestion2" == idCase
                ? ((parc[idCasePrincipale] = coche), $("#" + idCasePrincipale).prop("checked", coche))
                : "vente_surpopulation" == idCase || "vente_mourant" == idCase
                    ? ((parc.infoscan[idCase] = coche), $("#" + idCase + "2") && $("#" + idCase + "2").prop("checked", coche))
                    : ("vente_surpopulation2" == idCase || "vente_mourant2" == idCase) &&
                    ((parc.infoscan[idCasePrincipale] = coche), $("#" + idCasePrincipale).prop("checked", coche)),
            GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)));
}
function afficherNotesVersion() {
    if (!$("#information").length) {
        GM_addStyle(".important{font-size:16px;font-weight:bold;color:#ff0000;}.strong{font-weight:bold;}");
        var notesParVersion = {
                "3.16.1": [
                    {
                        class: "",
                        txt: "Ajout de 16 espèces : amargasaure, cerf huppé, chien viverin, edmontosaure, gibbon, huppe fasciée, macareux moine, mammouth laineux, mante orchidée, ombonie épineuse, poisson perroquet, renard mélanique, requin baleine, tamarin, tenrec zébré et vipère velue",
                    },
                ],
                "3.16.0": [
                    {
                        class: "",
                        txt: "Nouveau thème pour les fenêtres et les boutons du script, sans les textures d'origine",
                    },
                ],
                "3.15.0": [
                    {
                        class: "",
                        txt: "Mise à jour des bibliothèques jQuery (3.7.1) et jQuery UI (1.14.2), qui corrige plusieurs failles de sécurité",
                    },
                ],
                "3.14.5": [
                    {
                        class: "",
                        txt: "Les liens ajoutés au menu reprennent l'apparence des liens du jeu",
                    },
                ],
                "3.14.4": [
                    {
                        class: "",
                        txt: "Les liens ajoutés au menu (Faune de monzoo, Rapport, Musée, Botanica, Labo) s'affichent de nouveau suite au changement des libellés du menu du jeu",
                    },
                ],
                "3.14.3": [
                    {
                        class: "",
                        txt: "Les bibliothèques (jQuery, jQuery UI, flot) et les images ne sont plus intégrées au script : Tampermonkey les télécharge à l'installation et les garde en cache, le script est beaucoup plus léger",
                    },
                ],
                "3.14.2": [
                    {
                        class: "",
                        txt: "Le script est désormais compatible avec Tampermonkey sur les navigateurs récents",
                    },
                    {
                        class: "",
                        txt: "Ajout d'un lien vers le convertisseur des anciens fichiers .db en .json dans la fenêtre « Gérer mes parcs »",
                    },
                ],
                "3.14.1": [
                    {
                        class: "",
                        txt: "Meilleure gestion des messages notamment lorsque des messages arrivent alors que le scan a déjà été lancé (cas des défis réussis ou des visites de parrainage par exemple)",
                    },
                    {
                        class: "",
                        txt: "Le scan passe sur les espions et les stocks après le passage éventuel sur les enclos et non plus avant",
                    },
                ],
                "3.14.0": [
                    {
                        class: "strong",
                        txt: "Les valeurs des surpopulatons, les choix de vendre les surpopulations et les mourants, les dimensions du bloc-note, le choix d'envoyer les espions et de mettre à jour les stocks : toutes ces données deviennent spécifiques à chaque parc",
                    },
                    {
                        class: "",
                        txt: "Le choix d'envoyer les espions et de mettre à jour les stocks a été ajouté à la fenêtre de lancement du scan de maj",
                    },
                    {
                        class: "",
                        txt: "Modification de certains libellés du panda et déplacement de certaines options d'une rubrique à une autre",
                    },
                    {
                        class: "",
                        txt: "Dans le tableau des animaux d'un enclos, suppression du bouton pour mettre à jour les PA (devenu inutile puisque les PA sont automatiquement mis à jour)",
                    },
                    {
                        class: "strong",
                        txt: "Attention : la multi sélection dans le tableau des animaux d'un enclos ne se fait plus avec la touche SHIFT mais avec la touche CTRL",
                    },
                    {
                        class: "",
                        txt: "Correction d'un vieux bug lorsqu'on cliquait sur une espèce dans le tableau des animaux d'un enclos",
                    },
                    {
                        class: "",
                        txt: "Lors du scan initial (scan effectué lorsqu'on rajoute un nouveau parc), celui-ci ne passe plus sur les enclos mais sur les pages intendance, beaucoup plus rapide",
                    },
                    {
                        class: "",
                        txt: "Dans le panda et la fenêtre de lancement du scan de maj, la 'Surpopulation' devient 'Surpopulation collective'",
                    },
                    {
                        class: "",
                        txt: "Dans le tableau des animaux d'un enclos, la case 'Surpop' devient 'Surpop indiv' (surpopulation individuelle)",
                    },
                    {
                        class: "strong",
                        txt: "Les cases 'Surpop indiv' sont spécifiques à chaque enclos et sont distinctes de la surpopulation collective (vous pouvez donc choisir par exemple une surpop indiv de 15 pour savane 1, de 25 pour savane 2 tout en ayant sur surpopulation collective de 10)",
                    },
                    {
                        class: "strong",
                        txt: "Pour toutes les cases surpopulation collective ou individuelle (dans le panda, dans la fenêtre de lancement du scan de maj et dans les enclos), ajout d'une bulle d'info explicitant le fonctionnement",
                    },
                    {
                        class: "",
                        txt: "Dans le rapport, ajout de la surpopulation3 listant les enclos qui ont des espèces dépassant la surpopulation individuelle de l'enclos concerné (avec, dans la bulle d'info, un rappel de cette valeur de surpop indiv)",
                    },
                    {
                        class: "",
                        txt: "La fenêtre des stocks liste systématiquement toutes les espèces à stocks : quand une valeur est inconnue, affichage d'un point d'interrogation avec une bulle d'infos explicitant comment la récupérer",
                    },
                    {
                        class: "",
                        txt: "Prise en compte de la suppression du classement greta oto",
                    },
                    {
                        class: "",
                        txt: "Prise en compte du changement de prix du mamba noir albinos",
                    },
                ],
                "3.13.0": [
                    {
                        class: "",
                        txt: "Dans le rapport et sur le forum, les listes d'animaux (naissances, achats, etc) sont triées par type d'enclos puis par nom",
                    },
                    {
                        class: "",
                        txt: "Amélioration du tri des stocks (par type d'enclos puis par nom)",
                    },
                    {
                        class: "",
                        txt: "Sur les pages achats, suppression de la couleur foncée pour les espèces manquantes, qui faisait doublon avec la couleur orange au milieu des colonnes et ralentissait énormément le script",
                    },
                    {
                        class: "strong",
                        txt: "Le script teste dorénavant les PA gardiens puisqu'il est devenu inutile d'en mettre plus que nécessaire (puisque lors du scan les PA sont tous mis à jour immédiatement avec le bouton de la page intendance)",
                    },
                    {
                        class: "strong",
                        txt: "pour les mêmes raisons que le cas précédent, la case à cocher de mise à jour des PA a été supprimée : le contrôle et la mise à jour des PA deviennent systématiques",
                    },
                    {
                        class: "strong",
                        txt: "Lorsqu'on arrive sur un enclos avec des PA incorrects (style après un achat, une vente, etc), le script les met immédiatement à jour",
                    },
                    {
                        class: "",
                        txt: "Optimisation de l'analyse des enclos en fonction de ce qu'il y a à analyser (ex : lorsque qu'on vendait mourant et surpopulation, le script mettait à jour 4 fois la liste des animaux de l'enclos, au 1er passage, après la vente des mourants, après la vente de la surpopulation et après la maj éventuelle des PA. Dorénavant la liste des animaux n'est mise à jour qu'une seule fois)",
                    },
                    {
                        class: "",
                        txt: "Dans le tableau des missions team, séparation des naissances du parc et des naissances de la team + d'autres corrections mineures",
                    },
                    {
                        class: "",
                        txt: "Sur la page des missions, changement de méthode pour sélectionner les missions réussies/non réussies, beaucoup plus rapide",
                    },
                    {
                        class: "",
                        txt: "Ajout du mamba noir albinos",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug lors du tri des tableaux des enclos par nom (girafe albinos apparaissait avant girafe par exemple)",
                    },
                ],
                "3.12.0": [
                    {
                        class: "",
                        txt: "Lors du scan, l'intégralité des informations sur les enclos est récupérée lors du passage sur les pages intendance, rendant inutile le passage de contrôle sur les enclos sauf en cas de vente de surpopulation, de mourant ou en cas d'absence du bouton de maj des PA de tous les enclos",
                    },
                ],
                "3.11.2": [
                    {
                        class: "",
                        txt: "Correction d'un bug lors du scan sur les pages Intendance",
                    },
                ],
                "3.11.1": [
                    {
                        class: "",
                        txt: "Suppression de la case 'y compris les animaux de la liste des exclusions', devenue inutile (il suffit de vider la liste des exclusions pour tout vendre)",
                    },
                ],
                "3.11.0": [
                    {
                        class: "",
                        txt: "Sur la page faune, correction de quelques infos erronées sur les animaux (par exemple, l'éléphant rose n'était pas indiqué comme espèce périodique)",
                    },
                    {
                        class: "",
                        txt: "Mise à jour du panda (déplacement de fonctions de la zone Général à la zone Débug, modification de certains libellés)",
                    },
                    {
                        class: "",
                        txt: "Suppression du double bouton pour lancer un scan de mise à jour, redondant avec la case de mise à jour des PA",
                    },
                    {
                        class: "strong",
                        txt: "Pour la vente des surpopulations, suppression de la gestion spécifique des gretas oto, remplacée par la gestion d'une liste d'exclusions (contenant par défaut l'espèce greta oto mais vous pouvez y ajouter tout ce que vous voulez)",
                    },
                    {
                        class: "",
                        txt: "Ajout du tyrannosaure albinos",
                    },
                ],
                "3.10.1": [
                    {
                        class: "",
                        txt: "Dans les options (panda), partie Débug, ajout d'une fonction pour pouvoir modifier un animal ajouté",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug ancien lors de la création d'un animal ajouté (le prix et le gabarit ne s'enregistraient pas)",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug dans la gestion des animaux ajoutés",
                    },
                ],
                "3.10.0": [
                    {
                        class: "",
                        txt: "Ajout du requin scie, du requin nourrice albinos et du lamantin albinos",
                    },
                    {
                        class: "",
                        txt: "Transformation du lamentin en lamantin",
                    },
                    {
                        class: "",
                        txt: "Ajout dans le menu d'un lien direct vers le labo",
                    },
                    {
                        class: "",
                        txt: "Correction de plusieurs gabarits erronés",
                    },
                ],
                "3.9.9": [
                    {
                        class: "",
                        txt: "Correction des gabarits de certains dinos",
                    },
                    {
                        class: "",
                        txt: "Prise en compte d'un changement sur la page de la carte du zoo qui faisait planter le script",
                    },
                ],
                "3.9.8": [
                    {
                        class: "",
                        txt: "Ajout du sarcosuchus",
                    },
                ],
                "3.9.7": [
                    {
                        class: "",
                        txt: "Correction d'un bug dans le débogage de la page des stocks (voir les notes de la version précédente)",
                    },
                ],
                "3.9.6": [
                    {
                        class: "",
                        txt: "Correction d'un bug lorsqu'on vendait des mourants ou des surplus et que tous les PA étaient mis à jour à la fin du scan avec le bouton de l'intendance : le script indiquait les enclos correspondant à vérifier alors que ce n'était plus nécessaire",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug lors du passage sur la page des stocks, si on n'avait plus assez d'argent, le script tournait en boucle sans fin",
                    },
                    {
                        class: "",
                        txt: "Lorsqu'on ouvrait Waterfox, le script n'affichait la bulle indiquant une nouvelle news qu'après le lancement d'un scan, maintenant elle apparaît immédiatement. De plus, si on changeait de pages sans aller voir tout de suite la news, la bulle d'infos disparaissait de la page de la carte du zoo : maintenant elle ne disparaît qu'après avoir été sur la page des news",
                    },
                    {
                        class: "",
                        txt: "Lors du passage sur l'intendance, le script vérifie la cohérence entre les animaux actuellement dans les enclos et ce qui est enregistré dans le script. En cas d'incohérence, le script scannera (ou marquera à vérifier) les enclos concernés pour mettre à jour les données (cela n'aura aucun impact si vous jouez en permanence avec un seul script mais améliorera le suivi pour ceux qui jouent partiellement avec le script ou avec 2 scripts)",
                    },
                    {
                        class: "",
                        txt: "Sur la page de la carte du zoo, ajout de bulles d'infos pour le beau temps et le grand soleil (utile pour ceux qui bloquent les images gifs)",
                    },
                ],
                "3.9.5": [
                    {
                        class: "",
                        txt: "Changement du titre du menu Le classement en Les classements",
                    },
                    {
                        class: "",
                        txt: "Ajout des liens vers ses nouveaux classements dinos",
                    },
                ],
                "3.9.4": [
                    {
                        class: "",
                        txt: "Ajout des 3 nouveaux dinosaures",
                    },
                    {
                        class: "",
                        txt: "Amélioration de la gestion des différentes MAJ avec affichage d'une alerte en cas de changement de MAJ pendant qu'on est connecté",
                    },
                    {
                        class: "",
                        txt: "Pour la faune, lorsque 2 espèces ont le même prix de base, les animaux sont triés par ordre lexicographique (visible notamment pour les dinos)",
                    },
                    {
                        class: "",
                        txt: "Lorsque le bouton de maj de tous les PA est disponible, le script ne met plus à jour les PA enclos par enclos mais retourne sur l'intendance à la fin de la vente des mourants et des surplus",
                    },
                ],
                "3.9.3": [
                    {
                        class: "",
                        txt: "Correction d'un bug sur la page de l'intendance, le script ne passait plus sur les différents type d'enclos après la maj de tous les PA, ce qui empêchait la vente automatique des mourants",
                    },
                ],
                "3.9.2": [
                    {
                        class: "",
                        txt: "Lors du scan avec maj des PA, si le bouton de maj des pa de tous les enclos est présent sur la page intendance, le script commence par actionner ce bouton avant de poursuivre sur les autres enclos de l'intendance (pour contrôler comme auparavant les mourants)",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug d'affichage du rapport sur le forum lors de la réussite d'un vol d'animal",
                    },
                ],
                "3.9.1": [
                    {
                        class: "",
                        txt: "Correction d'un bug lorsque plusieurs nouveaux animaux étaient ajoutés dans le jeu, le script n'en créait qu'un seul",
                    },
                ],
                "3.9.0": [
                    {
                        class: "",
                        txt: "Ajout des 10 nouveaux animaux (dinosaures)",
                    },
                    {
                        class: "",
                        txt: "Ajout du nouvel enclos 'ile aux dinos' (création de l'image pour le rapport, le scan passe sur l'enclos, la faune montre l'enclos et ses espèces, la page de l'enclos a des images d'animaux aux dimensions normales)",
                    },
                    {
                        class: "",
                        txt: "Prise en compte des nouveaux messages du super espion",
                    },
                    {
                        class: "",
                        txt: "Affichage correct dans le rapport du message informant d'une éclosion",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug lorsqu'on est sur la page bourse et qu'un nouvel animal a été détecté (le script affichait 2 messages contradictoires)",
                    },
                ],
                "3.8.7": [
                    {
                        class: "",
                        txt: "Suppression du commentaire sur le phasme feuille de java (qui ne se trouve plus tous les 100 achats, cf. https://monzoo.net/forumv2/viewtopic.php?pid=91103#p91103)",
                    },
                    {
                        class: "",
                        txt: "Ajout dans le rapport du message formaté du super espion trouvant une maj bonus",
                    },
                    {
                        class: "",
                        txt: "Ajout dans le rapport des messages bruts du super espion trouvant autre chose (oeuf de dino, objet du musée, plante, voire d'autres)",
                    },
                ],
                "3.8.6": [
                    {
                        class: "",
                        txt: "Prise en compte des nouveaux espions",
                    },
                ],
                "3.8.5": [
                    {
                        class: "",
                        txt: "Meilleure gestion de la fenêtre d'infos sur la page de connexion (se ferme avec la touche Entrée, focus sur le pseudo ensuite)",
                    },
                    {
                        class: "",
                        txt: "Prise en compte du changemenr de prix de base d'une dizaine d'espèces de type savane",
                    },
                    {
                        class: "",
                        txt: "Ajout du pangolin, nouvelle attraction exceptionnelle",
                    },
                ],
                "3.8.4": [
                    {
                        class: "",
                        txt: "Sur la page de connexion, ajout d'une fenêtre d'infos sur le jour et l'heure du site monzoo",
                    },
                    {
                        class: "",
                        txt: "Dans les défis, suppression du texte 'avant samedi 23h'",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug pour l'actualisation automatique de la page de connexion",
                    },
                ],
                "3.8.3": [
                    {
                        class: "",
                        txt: "Sur la page de connexion, ajout d'une actualisation automatique de la page pour que le script sache en permanence sur quelle maj le jeu est",
                    },
                    {
                        class: "",
                        txt: "Correction d'un nouveau bug lors de l'analyse du message informant de la réussite d'un défi",
                    },
                ],
                "3.8.2": [
                    {
                        class: "",
                        txt: "Correction d'un bug lors de la suppression des animaux ajoutés",
                    },
                    {
                        class: "",
                        txt: "Réinitialisation des stocks",
                    },
                ],
                "3.8.1": [
                    {
                        class: "",
                        txt: "Ajout du nasique de Bornéo",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug lors de l'analyse du message informant de la réussite d'un défi",
                    },
                ],
                "3.8.0": [
                    {
                        class: "strong",
                        txt: "Lors du scan avec MAJ des PA, si le joueur choisit de ne pas vendre les mourants, le scan ne passe plus sur les enclos où il n'y a que des mourants (il ne passe que sur les enclos où les PA sont insuffisants et ceux où il y a eu des naissances ou des décès)",
                    },
                    {
                        class: "strong",
                        txt: "Correction d'un vieux bug qui, lorsque on avait sélectionné la vente de la surpopulation, ne faisait aucun contrôle des enclos concernés (bug invisible si la case est en permanence cochée mais contrôle indispensable si la case n'était pas cochée et qu'elle le devient)",
                    },
                    {
                        class: "",
                        txt: "Sur la page des enclos, rétablissement de la ligne complète au dessus du bouton pour acheter des animaux",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug qui faisait planter le lien de lancement de la maj des PA dans les options (panda)",
                    },
                ],
                "3.7.7": [
                    {
                        class: "",
                        txt: "Correction d'un bug qui ne faisait plus passer le scan initial sur les enclos avec mourants",
                    },
                ],
                "3.7.6": [
                    {
                        class: "",
                        txt: "Pour les missions team, correction de plusieurs vieux bugs qui empêchaient le tri sur la colonne naissance team ou le fonctionnement correct des filtres sur les missions réussies ou pas",
                    },
                    {
                        class: "",
                        txt: "Amélioration du tableau des missions naissances (dans le même style que le tableau des missions team)",
                    },
                    {
                        class: "",
                        txt: "Suite et fin de l'optimisation du script",
                    },
                ],
                "3.7.5": [
                    {
                        class: "",
                        txt: "Sur la page bourse, suppression des lignes noires, dorénavant elles sont pour tout le monde de la couleur correspond au type de variation de prix de l'espèce",
                    },
                    {
                        class: "",
                        txt: "Sur les pages des enclos, remise en place de la flèche verte",
                    },
                    {
                        class: "",
                        txt: "Poursuite de l'optimisation de diverses fonctions",
                    },
                ],
                "3.7.4": [
                    {
                        class: "",
                        txt: "Correction d'un bug sur les pages des enclos (disparition d'un des boutons achat)",
                    },
                    {
                        class: "",
                        txt: "Sur la page de la faune, la bulle d'info suit maintenant correctement la souris",
                    },
                    {
                        class: "",
                        txt: "Poursuite de l'optimisation de diverses fonctions",
                    },
                ],
                "3.7.3": [
                    {
                        class: "",
                        txt: "Correction d'un bug dans la gestion de la liste des parcs",
                    },
                    {
                        class: "",
                        txt: "Poursuite de l'optimisation de diverses fonctions",
                    },
                ],
                "3.7.2": [
                    {
                        class: "",
                        txt: "Dans les enclos, amélioration du positionnement de la bulle d'infos sur les animaux",
                    },
                    {
                        class: "",
                        txt: "Dans les enclos vides, ajout d'un tableau vide ce qui permet d'avoir les icônes pour acheter et mettre à jour les PA",
                    },
                    {
                        class: "",
                        txt: "Correction d'un vieux bug dans la récupération des prix bourse",
                    },
                    {
                        class: "",
                        txt: "Correction d'un vieux bug qui masquait l'icône de fermeture des bulles d'infos",
                    },
                    {
                        class: "",
                        txt: "Poursuite de l'optimisation de diverses fonctions",
                    },
                ],
                "3.7.1": [
                    {
                        class: "strong",
                        txt: "Remplacement des liens vers le site de Mikey, qui plantait régulièrement, par des liens vers un autre site",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug dans l'initialisation des bulles d'infos",
                    },
                    {
                        class: "",
                        txt: "Après affichage de la fenêtre informant des caractéristiques de la nouvelle version, affichage de la fenêtre de démarrage du scan",
                    },
                    {
                        class: "",
                        txt: "Prise en compte du nouveau classement tournoi",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug quand on allait sur la page gare, hôtel, etc et qu'ils n'étaient pas construits",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug dans le décompte des maj bonus",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug pour l'affichage de l'ensemble des maj sur le forum quand il y en avait plus de 2",
                    },
                    {
                        class: "",
                        txt: "Poursuite de l'optimisation de diverses fonctions",
                    },
                ],
                "3.7.0": [
                    {
                        class: "strong",
                        txt: "Ajout d'une option pour inclure/exclure les gretas oto de la vente des surpopulations",
                    },
                    {
                        class: "strong",
                        txt: "Ajout d'une case surpopulation dans le tableau des animaux des enclos",
                    },
                    {
                        class: "",
                        txt: "Prise en compte d'un changement sur la page intendance qui faisait croire au script qu'il y avait des mourants dans tous les enclos non vides",
                    },
                    {
                        class: "",
                        txt: "Correction d'un vieux bug quand on trouvait un phasme feuille de java",
                    },
                ],
                "3.6.5": [
                    {
                        class: "",
                        txt: "Correction d'un bug dans les décomptes des sexes des naissances",
                    },
                    {
                        class: "",
                        txt: "Dans le menu, la liste des enclos est maintenant triée selon le type d'enclos (= comme dans l'intendance)",
                    },
                    {
                        class: "",
                        txt: "Poursuite de l'optimisation de diverses fonctions",
                    },
                    {
                        class: "",
                        txt: "Correction de plusieurs bugs d'initialisation des données",
                    },
                    {
                        class: "",
                        txt: "Quand une bulle d'infos (style le bloc-note, le tableau des animaux d'un enclos, etc) était sur la droite de l'écran, il arrivait parfois que la bulle se retrouvait décalée par rapport au bord droit de la fenêtre. Ce ne sera plus le cas.",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug (faute de frappe) lorsqu'on enchaînait 2 MAJ bonus.",
                    },
                ],
                "3.6.4": [
                    {
                        class: "",
                        txt: "Correction d'un vieux bug qui n'affichait pas le genre de la naissance quand on en avait qu'une ou quand on avait des naissances que de femelles",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug du mode image qui ne marchait plus",
                    },
                    {
                        class: "",
                        txt: "Correction d'un vieux bug qui empêchait la détection du lancement d'une maj bonus",
                    },
                    {
                        class: "",
                        txt: "Correction d'un vieux bug dans l'affichage des messages divers sur le forum",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug dans le scan initial qui ne passait plus sur le 1er enclos savane",
                    },
                    {
                        class: "",
                        txt: "Correction d'un vieux bug lors de la vente automatique des mourants",
                    },
                    {
                        class: "",
                        txt: "Nettoyage de vieilles données",
                    },
                ],
                "3.6.3": [
                    {
                        class: "",
                        txt: "Prise en compte des nouveaux classements valeur et greta oto",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug qui n'affichait pas correctement l'image du greta oto dans le rapport (en cas de naissance, achat, etc)",
                    },
                    {
                        class: "",
                        txt: "Poursuite de l'optimisation de diverses fonctions",
                    },
                ],
                "3.6.2": [
                    {
                        class: "",
                        txt: "Optimisation de plusieurs fonctions (en particulier celle affichant la faune)",
                    },
                    {
                        class: "",
                        txt: "Lorsque une fenêtre d'info (stocks, tableau des animaux de l'enclos, etc) dépasse la taille de la fenêtre, ajout d'un ascenseur",
                    },
                    {
                        class: "",
                        txt: "Lorsqu'on déplace une fenêtre d'info, la taille s'adapte avec ajout d'un ascenseur si nécessaire",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug lorsqu'on n'avait aucune naissance",
                    },
                    {
                        class: "",
                        txt: "Prise en compte du changement de prix de base de plusieurs animaux de la volière",
                    },
                    {
                        class: "",
                        txt: "Ajout du greta oto",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug lorsque le script créait automatiquement un nouvel animal",
                    },
                ],
                "3.6.1": [
                    {
                        class: "",
                        txt: "Pour la liste des achats sur le forum, prise en compte des changements sur les pages de confirmation d'achat d'animaux ou d'enclos",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug dans le contrôle des animaux ajoutés",
                    },
                    {
                        class: "",
                        txt: "Amélioration des graphiques",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug dans la gestion des news",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug qui empêchait l'affichage dans la faune de l'image des animaux ajoutés",
                    },
                    {
                        class: "",
                        txt: "Pour le calcul des changements de la bourse, prise en compte du décalage horaire",
                    },
                ],
                "3.6.0": [
                    {
                        class: "important",
                        txt: "Prise en compte du rapport journalier des naissances et des décès",
                    },
                    {
                        class: "",
                        txt: "Prise en compte d'un changement sur la page de la carte du zoo qui empêchait l'affichage de la bulle informant d'une nouvelle news",
                    },
                ],
                "3.5.2": [
                    {
                        class: "",
                        txt: "Dans les options (panda), partie debug, ajout d'une fonction pour contrôler les animaux ajoutés manuellement par l'utilisateur ou automatiquement par le script",
                    },
                ],
                "3.5.1": [
                    {
                        class: "",
                        txt: "Correction d'un bug d'affichage des bulles d'infos du rapport",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug lors du scan initial des enclos",
                    },
                ],
                "3.5.0": [
                    {
                        class: "",
                        txt: "Dans les enclos, les animaux ne sont plus présentés par espèce (nouveauté de monzzoo) mais sont à nouveau triés par âge",
                    },
                ],
                "3.4.7": [
                    {
                        class: "",
                        txt: "Correction d'un bug qui empêchait la vente automatique des surpopulations",
                    },
                    {
                        class: "",
                        txt: "Lors de l'ajout d'un parc, amélioration de la gestion du chien",
                    },
                    {
                        class: "",
                        txt: "Lorsqu'on lançait un scan des PA avec la case Gestion automatique (pour les espions et les stocks) non cochée, le scan ne se lançait pas. Dorénavant il n'est plus nécessaire de cocher cette case",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug pour l'affichage du rapport, du log, de l'historique des naissances et de l'ajout manuel d'un nouvel animal qui pouvaient apparâitre sous les images",
                    },
                    {
                        class: "",
                        txt: "Dans les préférences (panda), suppression des cases célibataires, surpopulation et afficher mes variables car inutilisées",
                    },
                    {
                        class: "",
                        txt: "Dans le rapport correction des critères définissant les enclos en surpopulation et ajout d'un nouveau rapport de surpopulation",
                    },
                ],
                "3.4.6": [
                    {
                        class: "",
                        txt: "Correction d'un bug qui, lorsque le panda était hors écran, ne le repositionnait jamais dans la zone visible",
                    },
                    {
                        class: "",
                        txt: "Meilleure gestion du déplacement du panda et des tableaux (stocks, bloc-note, attraction, etc)",
                    },
                    {
                        class: "",
                        txt: "Les bulles et fenêtres d'infos (notes de version, bloc-note, changement de la bourse, etc) s'affichent au dessus des images et restent visibles partout",
                    },
                ],
                "3.4.5": [
                    {
                        class: "",
                        txt: "Correction d'un bug qui empêchait la vente des mourants",
                    },
                    {
                        class: "",
                        txt: "Correction d'un bug lors de la création automatique d'une nouvelle espèce",
                    },
                    {
                        class: "",
                        txt: "Ajout du percnoptere",
                    },
                    {
                        class: "",
                        txt: "Prise en compte du changement de prix de base de 3 animaux",
                    },
                    {
                        class: "",
                        txt: "Prise en compte des changements faits sur les pages d'achat",
                    },
                ],
                "3.4.4": [
                    {
                        class: "",
                        txt: "Lors du scan initial, seuls les enclos avec naissances, morts ou mourants sont analysés (comme avec les versions antérieures à la 3.4.3)",
                    },
                    {
                        class: "",
                        txt: "Prise en compte des nouveaux messages informant des naissances",
                    },
                ],
                "3.4.3": [
                    {
                        class: "",
                        txt: "Correction d'un bug sur la page des achats qui affichait des lignes en trop dans certaines listes",
                    },
                    {
                        class: "",
                        txt: "Pour les MAJ suivantes du script, le script les proposera au téléchargement",
                    },
                    {
                        class: "",
                        txt: "Les stocks étaient analysés uniquement sur les pages des achats, maintenant ils le seront aussi sur les enclos en construction",
                    },
                    {
                        class: "",
                        txt: "Le panda (options) est maintenant visible même sur les images",
                    },
                    {
                        class: "",
                        txt: "Par défaut, le scan initial des nouveaux parcs n'incluait pas les espions ni les stocks ni le scan des enclos. Dorénavant ce sera la configuration par défaut",
                    },
                    {
                        class: "",
                        txt: "Lors du scan initial, seuls les enclos avec naissances, morts ou mourants étaient vus. Dorénavant tous les enclos non vides sont analysés (cas de la migration des taupes par exemple)",
                    },
                    {
                        class: "",
                        txt: "Sur la page des classements, le lien vers son classement team a été corrigé",
                    },
                    {
                        class: "",
                        txt: "Sur la page team, la mise en page des missions team ne marchait plus",
                    },
                    {
                        class: "",
                        txt: "Lors des changements bourse, le scan automatique de la bourse ne marchait plus. Une alternative a été mise en place",
                    },
                    {
                        class: "",
                        txt: "Ajout d'un contrôle des PA sur les enclos vides",
                    },
                    {
                        class: "",
                        txt: "Contrôle/correction des caractéristiques de tous les animaux (en particulier les prix de base)",
                    },
                    {
                        class: "",
                        txt: "Les liens suivants/précédents sont à nouveau disponibles sur tous les enclos",
                    },
                    {
                        class: "",
                        txt: "Correcton d'autres bugs mineurs",
                    },
                ],
                "3.4.2": [
                    {
                        class: "",
                        txt: "Sur la page des enclos, dans le tableau des animaux, correction du lien pour la MAJ des PA",
                    },
                    {
                        class: "",
                        txt: "Sur la page des enclos, correction d'un bug d'affichage pour les enclos vides ou non construits",
                    },
                    {
                        class: "",
                        txt: "Lors du scan initial, ajout à la liste des enclos à vérifier des enclos où il manque des PA",
                    },
                    {
                        class: "",
                        txt: "Prise en compte des modifications du menu",
                    },
                ],
                "3.4.1": [
                    {
                        class: "",
                        txt: "Prise en compte du changement http/https",
                    },
                    {
                        class: "",
                        txt: "Ajout des animaux manquants et correction de certains autres",
                    },
                ],
                "3.4.0": [
                    {
                        class: "",
                        txt: "Update jquery et adaptation du script pour essayer de résoudre les problèmes de lenteur",
                    },
                ],
                "3.3.0": [
                    {
                        class: "",
                        txt: "Ajout des 3 nouveaux animaux : la genette, le piranha et le dauphin à bec court",
                    },
                ],
                "3.2.0": [
                    {
                        class: "",
                        txt: "Migration de l'hébergeur",
                    },
                ],
                "3.1.0": [
                    {
                        class: "",
                        txt: "Ajout de la météo à 5 jours au rapport",
                    },
                ],
                "3.0.8": [
                    {
                        class: "",
                        txt: "Correction de la page faune",
                    },
                    {
                        class: "",
                        txt: "Correction du rapport qui plantait lors de la migration des taupes",
                    },
                    {
                        class: "",
                        txt: "Ajout des derniers animaux (licorne, nouveaux albinos, porcs...)",
                    },
                ],
                "3.0.7": [
                    {
                        class: "",
                        txt: "Ajout de la taupe",
                    },
                    {
                        class: "",
                        txt: "Bourse : autodétection des nouveaux animaux et ajout automatique dans le debug",
                    },
                    {
                        class: "",
                        txt: "Ajout des infos de mise à jour des PA dans la fenêtre de lancement automatique",
                    },
                ],
                "3.0.6": [
                    {
                        class: "",
                        txt: "Ajout des 5 animaux fidélités",
                    },
                ],
                "3.0.5": [
                    {
                        class: "",
                        txt: "Ajout des 4 nouveaux animaux : loup à crinière, quokka, poisson cocher et fourmi panda",
                    },
                    {
                        class: "",
                        txt: "Rapport : affichage des messages manquants dans un volet séparé",
                    },
                ],
                "3.0.4": [
                    {
                        class: "",
                        txt: "Correction suite au bug inconnu apparu sur la page d'accueil",
                    },
                    {
                        class: "",
                        txt: "Rapport : affichage des messages manquants",
                    },
                ],
                "3.0.2": [
                    {
                        class: "",
                        txt: "Page achat : l'icône du tableau des couples lance l'achat",
                    },
                    {
                        class: "",
                        txt: "Page achat : augmentation à 20 du nombre d'animaux achetables à la fois",
                    },
                    {
                        class: "",
                        txt: "Ajout des animaux : lucane cyclommatus, lézard cuirassé, manchot antipode",
                    },
                    {
                        class: "",
                        txt: "Refonte des notes de version",
                    },
                    {
                        class: "",
                        txt: "Suppression de l'évolution des points",
                    },
                ],
                "3.0.1": [
                    {
                        class: "",
                        txt: "Correction debug, les animaux ajoutés sont pris en compte",
                    },
                    {
                        class: "",
                        txt: "Gestion des zoos : possibilité de supprimer totalement les données d'un zoo",
                    },
                    {
                        class: "",
                        txt: "Réduction de l'affichage des notes de version",
                    },
                    {
                        class: "",
                        txt: "Possibilité de réafficher les notes de version via les options",
                    },
                    {
                        class: "",
                        txt: "Achat de stock de nourriture : ajout d'un seuil de 1000 unités pour éviter le manque en cas de nombreux achats",
                    },
                ],
                "3.0.0": [
                    {
                        class: "",
                        txt: "Adaptation du script aux dernières mises à jour du jeu suite au crash",
                    },
                ],
            },
            htmlNotes =
                '<p style="font-weight:bold;color:#FF3418;text-align:center">Si vous avez un bug, essayez en désactivant le script pour savoir si ça vient du jeu ou du script.</p><div id="notesVersion">';
        for (var version in notesParVersion) {
            for (var indexNote in ((htmlNotes += "<h3>Version " + version + "</h3><div>"), notesParVersion[version]))
                htmlNotes +=
                    "<p" +
                    ("" != notesParVersion[version][indexNote].class
                        ? " class='" + notesParVersion[version][indexNote].class + "'"
                        : "") +
                    "> - " +
                    notesParVersion[version][indexNote].txt +
                    "</p>";
            htmlNotes += "</div>";
        }
        htmlNotes += "</div>";
        var dialogueNotes = $("<div>").attr("id", "information").html(htmlNotes).appendTo("body");
        ($("#notesVersion").accordion({
            heightStyle: "content",
            collapsible: !0,
        }),
            dialogueNotes.hide().dialog({
                title: "Notes de version",
                close: function () {
                    parId("bloc_note") || (window.location.href = window.location);
                },
            }));
    }
    ($("#information").dialog("open"),
        parId("information").setAttribute(
            "style",
            "font-size:12px;max-height:" + (window.innerHeight - 60) + "px;overflow-y:auto",
        ),
        parId("information").parentNode.setAttribute(
            "style",
            "z-index:5004;position:fixed;width:800px;top:0px;left:" +
            (window.innerWidth - 800) / 2 +
            "px;height:" +
            (window.innerHeight - 10) +
            "px",
        ));
}
function afficherHistoriqueNaissances() {
    if (!parId("conteneur_historique")) {
        var htmlNaissances = "",
            naissancesTriees = [];
        for (nomEspece in (parc.hasOwnProperty("historique") ||
        (parc.historique = {
            mises_a_jour: 0,
            naissances: {},
        }),
            parc.historique.naissances))
            (espece = trouverEspece(nomEspece)) && naissancesTriees.push([espece.prix, nomEspece]);
        for (indexBoucle in (naissancesTriees.sort(function (ligneA, ligneB) {
            return parseInt(ligneB) - parseInt(ligneA);
        }),
            naissancesTriees))
            htmlNaissances +=
                "<span>" +
                naissancesTriees[indexBoucle][1] +
                "</span> " +
                parc.historique.naissances[naissancesTriees[indexBoucle][1]] +
                "<br>";
        ("" === htmlNaissances && (htmlNaissances = "Aucune naissance"),
            GM_addStyle(
                "#conteneur_historique{position:fixed;text-align:center;font-size:12px;color:#000;z-index:5002}#historique{overflow-y:auto;margin:0px 10px 10px;height:400px;text-align:left;width:220px}#historique span{float:left;width:180px}#historique p{text-align:center}#historique .titre{font-weight:bold}",
            ));
        var conteneurHistorique = creerElement("div", {
            id: "conteneur_historique",
            className: "info_bulle",
        });
        ((conteneurHistorique.style.top = (window.innerHeight - 480) / 2 + "px"),
            (conteneurHistorique.style.left = (window.innerWidth - 220) / 2 + "px"),
            (conteneurHistorique.innerHTML =
                (0 === parc.historique.mises_a_jour
                    ? '<p class="titre">Aucune mise à jour prise en compte<br>pour le moment</p><div id="historique"></div>'
                    : '<p class="titre">Historique après ' +
                    parc.historique.mises_a_jour +
                    " mise" +
                    (parc.historique.mises_a_jour > 1 ? "s" : "") +
                    ' à jour</p><br><div id="historique">' +
                    htmlNaissances +
                    "</div>") +
                "<a style=\"cursor:pointer\" onclick=\"document.getElementById('conteneur_historique').style.display = 'none'\">Fermer</a><br><br>"),
            document.body.appendChild(conteneurHistorique));
    }
    parId("conteneur_historique").style.display = "block";
}
function viderHistoriqueNaissances() {
    confirm("Etes vous sûr de vouloir vider l'historique ?\n\nAttention les données ne pourront pas être récupérées !") &&
    ((parc.historique = {
        mises_a_jour: 0,
        naissances: {},
    }),
        supprimerDialogue("historique"),
        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)));
}
function lancerScanMaj() {
    if (parc.infoscan.vente_surpopulation) {
        var valeurSurpop = parc.infoscan.surpopulation;
        for (cleEnclos in parc.encls)
            for (nomEspece in parc.encls[cleEnclos].animaux)
                (espece =
                    trouverEspece(nomEspece) &&
                    (parc.encls[cleEnclos].animaux[nomEspece].male > valeurSurpop ||
                        parc.encls[cleEnclos].animaux[nomEspece].femelle > valeurSurpop) &&
                    -1 == parc.infoscan.lexclusions.indexOf(nomEspece)) && (parc.encls[cleEnclos].a_verifier = !0);
        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc));
    }
    scanMajEnCours || GM_setValue("maj_PA2", !0);
    var prochainEnclos = enclosSuivantAvec("", parc.infoscan.vente_mourant ? "mouraverif" : "a_verifier");
    "fin" != prochainEnclos.t
        ? (window.location.href = urlBase + "enclosgestion1.php?t=" + prochainEnclos.t + "&v=" + prochainEnclos.v)
        : (GM_deleteValue("PAtsenclos2"),
            parc.infoscan.scan_suite
                ? (window.location.href = urlBase + "zonemembre.php")
                : (window.location.href = urlBase + "espion.php"));
}
function gererExclusions() {
    if (!parId("div_gestExclus")) {
        var dialogueExclusions = $("<div>").attr("id", "div_gestExclus").hide(),
            htmlExclues = '<select id="m_exc" style="width:200px">';
        for (indexBoucle = 0, limiteBoucle = parc.infoscan.lexclusions.length; indexBoucle < limiteBoucle; indexBoucle++)
            htmlExclues += '<option value="' + indexBoucle + '">' + parc.infoscan.lexclusions[indexBoucle] + "</option>";
        htmlExclues += "</select>";
        var htmlAutresEspeces = '<select id="t_anim" style="width:200px">';
        for (indexBoucle in ((listeTemp = []), especes)) listeTemp.push(indexBoucle);
        for (listeTemp.sort(), indexBoucle = 0, limiteBoucle = listeTemp.length; indexBoucle < limiteBoucle; indexBoucle++)
            -1 == parc.infoscan.lexclusions.indexOf(listeTemp[indexBoucle]) &&
            (htmlAutresEspeces += '<option value="' + listeTemp[indexBoucle] + '">' + listeTemp[indexBoucle] + "</option>");
        ((htmlAutresEspeces += "</select>"),
            dialogueExclusions.html(
                '<p><label class="a_perso" style="width:180px" for="m_exc">Espèces exclues :&nbsp;</label>' +
                htmlExclues +
                '</p><p><label class="a_perso" style="width:180px" for="t_anim">Toutes les autres espèces :&nbsp;</label>' +
                htmlAutresEspeces +
                '</p><p></p><p style="font-style:italic">Pour ajouter une espèce à exclure : choisissez l\'animal désiré dans la liste "Toutes les autres espèces" et cliquez sur "Ajouter"</p><p style="font-style:italic">Pour en supprimer une : choisissez l\'animal désiré dans la liste "Espèces exclues" et cliquez sur "Supprimer"</p>',
            ),
            $("body").append(dialogueExclusions),
            dialogueExclusions.dialog({
                title: "Gérer les espèces exclues des ventes de surpopulation collective",
                autoOpen: !1,
                buttons: {
                    Ajouter: function () {
                        ajouterExclusion();
                    },
                    Supprimer: function () {
                        supprimerExclusion();
                    },
                    Annuler: function () {
                        supprimerDialogue("div_gestExclus");
                    },
                },
            }));
    }
    $("#div_gestExclus").dialog("open");
    var fenetreDialogue = parId("div_gestExclus").parentNode;
    (fenetreDialogue.setAttribute(
        "style",
        "z-index:5002;position:fixed;width:580px;left:" + (window.innerWidth - 580) / 2 + "px",
    ),
        (parBalise("span", fenetreDialogue)[0].style.width = "100%"),
        styliserBoutonsDialogue(fenetreDialogue),
        (fenetreDialogue.style.top =
            (window.innerHeight -
                fenetreDialogue.clientHeight -
                (document.body.scrollWidth - window.innerWidth > 0 ? 18 : 0)) /
            2 +
            "px"));
}
function ajouterExclusion() {
    ((indexBoucle = parId("t_anim").value),
    -1 == parc.infoscan.lexclusions.indexOf(indexBoucle) &&
    (parc.infoscan.lexclusions.push(indexBoucle),
        parc.infoscan.lexclusions.sort(),
        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
        rafraichirListesExclusions()));
}
function rafraichirListesExclusions() {
    var htmlOptions = "";
    for (indexBoucle = 0, limiteBoucle = parc.infoscan.lexclusions.length; indexBoucle < limiteBoucle; indexBoucle++)
        htmlOptions += '<option value="' + indexBoucle + '">' + parc.infoscan.lexclusions[indexBoucle] + "</option>";
    for (
        parId("m_exc").innerHTML = htmlOptions, htmlOptions = "", indexBoucle = 0, limiteBoucle = listeTemp.length;
        indexBoucle < limiteBoucle;
        indexBoucle++
    )
        -1 == parc.infoscan.lexclusions.indexOf(listeTemp[indexBoucle]) &&
        (htmlOptions += '<option value="' + listeTemp[indexBoucle] + '">' + listeTemp[indexBoucle] + "</option>");
    parId("t_anim").innerHTML = htmlOptions;
}
function supprimerExclusion() {
    ((indexBoucle = parId("m_exc").value),
        parc.infoscan.lexclusions.splice(indexBoucle, 1),
        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
        rafraichirListesExclusions());
}
function styliserBoutonsDialogue(fenetre) {
    ((fenetre = parBalise("button", fenetre)[1].parentNode.parentNode),
        (divs = parBalise("div", fenetre)),
        fenetre.setAttribute("style", "padding:0.5em"),
        divs[0].setAttribute("style", "text-align:center"),
        divs[0].removeAttribute("class"));
    var indexBouton,
        nbBoutons,
        boutons = parBalise("button", fenetre);
    for (indexBouton = 0, nbBoutons = boutons.length; indexBouton < nbBoutons; indexBouton++)
        boutons[indexBouton].setAttribute("style", "margin:0.5em");
    boutons[nbBoutons - 1].focus();
}
function relancerScanInitial() {
    confirm(
        "Etes vous sûr de vouloir relancer un scan initial ?\n\nCe scan est le passage sur tous les enclos via l'intendance pour récupérer la\nliste complète des animaux possédés et l'état de chaque enclos (PA et mourants) :\naucun changement ne sera effectué sur les enclos, ni vente, ni maj des PA.\n\nCe type de scan est normalement inutile sauf s'il y a eu un bug lors de\nl'exécution du script (exemple : déconnexion intempestive du réseau).",
    ) &&
    ((parc.premier_scan = !1),
        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
        (window.location.href = urlBase + "animaux.php?choix_type=savane"));
}
function afficherLog() {
    ($("#logz").length ||
    $("<div>")
        .attr("id", "logz")
        .html("<div style='padding:10px 0px'>" + GM_getValue(nomZoo + "_log", "") + "</div>")
        .dialog({
            title: "Log du zoo " + nomZoo,
        }),
        $("#logz").dialog("open"),
        parId("logz").setAttribute(
            "style",
            "font-size:0.7em;max-height:" + (window.innerHeight - 55) + "px;overflow-y:auto",
        ),
        parId("logz").parentNode.setAttribute(
            "style",
            "z-index:5002;position:fixed;width:300px;top:0px;left:" +
            (window.innerWidth - 300) / 2 +
            "px;height:" +
            (window.innerHeight - 10) +
            "px",
        ),
        parBalise("button", parId("logz").parentNode)[0].blur());
}
function afficherAjoutEspece() {
    if (
        (parId("div_modifAnimal") && supprimerDialogue("div_modifAnimal"),
        parId("ContrAnim") && declencherClic(parBalise("button", parId("ContrAnim").parentNode)[0]),
            (especesAjoutees = JSON.parse(GM_getValue("animauxajt", "[]"))),
            !parId("div_ajoutAnimal"))
    ) {
        var dialogueAjout = $("<div>").attr("id", "div_ajoutAnimal").hide();
        (dialogueAjout.html(
            '<p style="margin-bottom:0px"><label class="a_perso" for="a_nom">Nom de l\'espèce :&nbsp;</label><input type="text" id="a_nom" maxlength="30" size="30"></p><p style="margin-top:0px"><label class="a_perso">&nbsp;</label><span style="font-size:10px">(en minuscule sans accent)</span></p><p><label class="a_perso" for="a_nomS">Nom au singulier :&nbsp;</label><input type="text" id="a_nomS" maxlength="30" size="30"></p><p><label class="a_perso" for="a_nomP">Nom au pluriel :&nbsp;</label><input type="text" id="a_nomP" maxlength="30" size="30"></p><p><label class="a_perso" for="a_enclos">Enclos :&nbsp;</label>' +
            htmlListeTypesEnclos() +
            '</p><p><label class="a_perso" for="a_prix">Prix :&nbsp;</label><input type="text" id="a_prix" maxlength="7" size="30"></p><p><label class="a_perso" for="a_gabarit">Gabarit :&nbsp;</label><input type="text" id="a_gabarit" maxlength="1" size="30"></p><p style="margin-bottom:0px"><label class="a_perso" for="a_VIP">Spécial :&nbsp;</label><input type="text" id="a_VIP" maxlength="30" size="30"></p><p style="margin-top:0px"><label class="a_perso">&nbsp;</label><span style="font-size:10px">(ex : VIP d\'argent, mission 16)</span></p><p style="text-align:center">Type :</p><div class="div_a_perso"><input type="checkbox" id="a_bonus">Bonus</div><div class="div_a_perso"><input type="checkbox" id="a_collector">Collector</div><div class="div_a_perso"><input type="checkbox" id="a_attraction">Attraction</div><div class="div_a_perso"><input type="checkbox" id="a_exploration">Exploration</div><div class="div_a_perso"><input type="checkbox" id="a_defi">Défi</div><div class="div_a_perso"><input type="checkbox" id="a_albinos">Albinos</div><div class="div_a_perso" style="width:240px"><input type="checkbox" id="a_geniteur_albinos">Géniteur d\'albinos</div>',
        ),
            $("body").append(dialogueAjout),
            dialogueAjout.dialog({
                title: "Nouvelle espèce",
                autoOpen: !1,
                buttons: {
                    Ajouter: function () {
                        (enregistrerEspeceSaisie(), supprimerDialogue("div_ajoutAnimal"));
                    },
                    Annuler: function () {
                        supprimerDialogue("div_ajoutAnimal");
                    },
                },
            }));
    }
    $("#div_ajoutAnimal").dialog("open");
    var fenetreDialogue = parId("div_ajoutAnimal").parentNode;
    (fenetreDialogue.setAttribute(
        "style",
        "z-index:5002;position:fixed;width:516px;left:" + (window.innerWidth - 516) / 2 + "px",
    ),
        styliserBoutonsDialogue(fenetreDialogue),
        (fenetreDialogue.style.top =
            (window.innerHeight -
                fenetreDialogue.clientHeight -
                (document.body.scrollWidth - window.innerWidth > 0 ? 18 : 0)) /
            2 +
            "px"));
}
function htmlListeTypesEnclos() {
    var html = '<select id="a_enclos" style="width:140px">';
    for (indexBoucle = 1, limiteBoucle = nomsTypesEnclos.length; indexBoucle < limiteBoucle; indexBoucle++)
        html += '<option value="' + indexBoucle + '">' + nomsTypesEnclos[indexBoucle] + "</option>";
    return html + "</select>";
}
function enregistrerEspeceSaisie(modification) {
    if ("" != parId("a_nom").value) {
        var especeSaisie = {};
        ((especeSaisie.nom = parId("a_nom").value.noAccent().toLowerCase()),
            (especeSaisie.singulier = "" !== parId("a_nomS").value ? parId("a_nomS").value : especeSaisie.nom),
            (especeSaisie.pluriel = "" !== parId("a_nomP").value ? parId("a_nomP").value : especeSaisie.nom),
            (especeSaisie.prix = /^[0-9]+$/.test(parId("a_prix").value) ? parseInt(parId("a_prix").value) : 0),
            (especeSaisie.gabarit = /^[1-4]$/.test(parId("a_gabarit").value) ? parseInt(parId("a_gabarit").value) : 1),
            (especeSaisie.enclos = parseInt(parId("a_enclos").value)),
            (especeSaisie.binaire = parId("a_bonus").checked ? 64 : 0),
            (especeSaisie.binaire += parId("a_collector").checked ? 32 : 0),
            (especeSaisie.binaire += parId("a_attraction").checked ? 16 : 0),
            (especeSaisie.binaire += parId("a_exploration").checked ? 8 : 0),
            (especeSaisie.binaire += parId("a_albinos").checked ? 4 : 0),
            (especeSaisie.binaire += parId("a_geniteur_albinos").checked ? 2 : 0),
            (especeSaisie.binaire += parId("a_defi").checked ? 1 : 0),
            (especeSaisie.VIP = parId("a_VIP").value),
            modification
                ? ((especesAjoutees[indexBoucle2] = especeSaisie),
                    GM_setValue("animauxajt", JSON.stringify(especesAjoutees)),
                    (especes[especeSaisie.nom] = new Espece(
                        especeSaisie.singulier,
                        especeSaisie.pluriel,
                        especeSaisie.prix,
                        especeSaisie.gabarit,
                        especeSaisie.enclos,
                        especeSaisie.binaire,
                        especeSaisie.VIP,
                    )),
                    alert("Les modifications ont été enregistrées"))
                : ajouterEspece(especeSaisie));
    } else alert("Il faut au moins renseigner le nom de l'animal");
}
function afficherModifEspece() {
    if (
        (parId("div_ajoutAnimal") && supprimerDialogue("div_ajoutAnimal"),
        parId("ContrAnim") && declencherClic(parBalise("button", parId("ContrAnim").parentNode)[0]),
            (especesAjoutees = JSON.parse(GM_getValue("animauxajt", "[]"))),
        0 === Object.keys(especesAjoutees).length)
    )
        alert("Il n'y a actuellement aucune espèce ajoutée");
    else {
        if (!parId("div_modifAnimal")) {
            var htmlListeEspeces = '<select id="m_esp" style="width:200px">';
            for (indexBoucle in especesAjoutees)
                htmlListeEspeces += '<option value="' + indexBoucle + '">' + especesAjoutees[indexBoucle].nom + "</option>";
            htmlListeEspeces += "</select>";
            var premiereEspece = especesAjoutees[(indexBoucle2 = 0)],
                dialogueModif = $("<div>").attr("id", "div_modifAnimal").hide();
            (dialogueModif.html(
                '<p style="margin-bottom:0px"><label class="a_perso" for="m_esp">Espèce :&nbsp;</label>' +
                htmlListeEspeces +
                '</p><p style="display:none"><input type="text" id="a_nom" maxlength="30" size="30" value="' +
                premiereEspece.nom +
                '"></p><p><label class="a_perso" for="a_nomS">Nom au singulier :&nbsp;</label><input type="text" id="a_nomS" maxlength="30" size="30" value="' +
                premiereEspece.singulier +
                '"></p><p><label class="a_perso" for="a_nomP">Nom au pluriel :&nbsp;</label><input type="text" id="a_nomP" maxlength="30" size="30" value="' +
                premiereEspece.pluriel +
                '"></p><p><label class="a_perso" for="a_enclos">Enclos :&nbsp;</label>' +
                htmlListeTypesEnclos() +
                '</p><p><label class="a_perso" for="a_prix">Prix :&nbsp;</label><input type="text" id="a_prix" maxlength="7" size="30" value="' +
                premiereEspece.prix +
                '"></p><p><label class="a_perso" for="a_gabarit">Gabarit :&nbsp;</label><input type="text" id="a_gabarit" maxlength="1" size="30" value="' +
                premiereEspece.gabarit +
                '"></p><p style="margin-bottom:0px"><label class="a_perso" for="a_VIP">Spécial :&nbsp;</label><input type="text" id="a_VIP" maxlength="30" size="30" value="' +
                premiereEspece.VIP +
                '"></p><p style="margin-top:0px"><label class="a_perso">&nbsp;</label><span style="font-size:10px">(ex : VIP d\'argent, mission 16)</span></p><p style="text-align:center">Type :</p><div class="div_a_perso"><input type="checkbox" id="a_bonus">Bonus</div><div class="div_a_perso"><input type="checkbox" id="a_collector">Collector</div><div class="div_a_perso"><input type="checkbox" id="a_attraction">Attraction</div><div class="div_a_perso"><input type="checkbox" id="a_exploration">Exploration</div><div class="div_a_perso"><input type="checkbox" id="a_defi">Défi</div><div class="div_a_perso"><input type="checkbox" id="a_albinos">Albinos</div><div class="div_a_perso" style="width:240px"><input type="checkbox" id="a_geniteur_albinos">Géniteur d\'albinos</div>',
            ),
                $("body").append(dialogueModif),
                dialogueModif.dialog({
                    title: "Modifier une espèce",
                    autoOpen: !1,
                    buttons: {
                        Modifier: function () {
                            enregistrerEspeceSaisie(!0);
                        },
                        Annuler: function () {
                            supprimerDialogue("div_modifAnimal");
                        },
                    },
                }),
                (parId("a_enclos").selectedIndex = parseInt(premiereEspece.enclos) - 1),
                (parId("a_bonus").checked = 0 != (64 & premiereEspece.binaire)),
                (parId("a_collector").checked = 0 != (32 & premiereEspece.binaire)),
                (parId("a_attraction").checked = 0 != (16 & premiereEspece.binaire)),
                (parId("a_exploration").checked = 0 != (8 & premiereEspece.binaire)),
                (parId("a_albinos").checked = 0 != (4 & premiereEspece.binaire)),
                (parId("a_geniteur_albinos").checked = 0 != (2 & premiereEspece.binaire)),
                (parId("a_defi").checked = 0 != (1 & premiereEspece.binaire)),
                parId("m_esp").addEventListener("change", chargerEspeceModif));
        }
        $("#div_modifAnimal").dialog("open");
        var fenetreDialogue = parId("div_modifAnimal").parentNode;
        (fenetreDialogue.setAttribute(
            "style",
            "z-index:5002;position:fixed;width:516px;left:" + (window.innerWidth - 516) / 2 + "px",
        ),
            styliserBoutonsDialogue(fenetreDialogue),
            (fenetreDialogue.style.top =
                (window.innerHeight -
                    fenetreDialogue.clientHeight -
                    (document.body.scrollWidth - window.innerWidth > 0 ? 18 : 0)) /
                2 +
                "px"));
    }
}
function chargerEspeceModif() {
    indexBoucle2 = parId("m_esp").value;
    var especeChoisie = especesAjoutees[indexBoucle2];
    ((parId("a_nom").value = especeChoisie.nom),
        (parId("a_nomS").value = especeChoisie.singulier),
        (parId("a_nomP").value = especeChoisie.pluriel),
        (parId("a_prix").value = especeChoisie.prix),
        (parId("a_gabarit").value = especeChoisie.gabarit),
        (parId("a_VIP").value = especeChoisie.VIP),
        (parId("a_enclos").selectedIndex = parseInt(especeChoisie.enclos) - 1),
        (parId("a_bonus").checked = 0 != (64 & especeChoisie.binaire)),
        (parId("a_collector").checked = 0 != (32 & especeChoisie.binaire)),
        (parId("a_attraction").checked = 0 != (16 & especeChoisie.binaire)),
        (parId("a_exploration").checked = 0 != (8 & especeChoisie.binaire)),
        (parId("a_albinos").checked = 0 != (4 & especeChoisie.binaire)),
        (parId("a_geniteur_albinos").checked = 0 != (2 & especeChoisie.binaire)),
        (parId("a_defi").checked = 0 != (1 & especeChoisie.binaire)));
}
function controlerEspecesAjoutees() {
    if (
        (parId("div_ajoutAnimal") && supprimerDialogue("div_ajoutAnimal"),
        parId("div_modifAnimal") && supprimerDialogue("div_modifAnimal"),
            (especesAjoutees = JSON.parse(GM_getValue("animauxajt", "[]"))),
        0 === Object.keys(especesAjoutees).length)
    )
        alert("Il n'y a actuellement aucune espèce ajoutée");
    else {
        var especeEnCours,
            especesConservees = [],
            messageFin =
                "' a été créée précédemment.<br><br>Cliquez sur 'Je confirme' si vous confirmez son existence.<br>Cliquez sur 'Supprimer' si l'espèce est à supprimer.<br>Cliquez sur 'Annuler' pour stopper le contrôle.";
        function verifierSuivante() {
            return (
                0 !== Object.keys(especesAjoutees).length &&
                (void 0 !== (especeEnCours = especesAjoutees.shift())
                    ? ((parId("ContrAnim").innerHTML = "L'espèce '" + especeEnCours.nom + messageFin), !0)
                    : verifierSuivante())
            );
        }
        function enregistrerListe(liste) {
            (0 !== Object.keys(liste).length
                ? GM_setValue("animauxajt", JSON.stringify(liste))
                : GM_deleteValue("animauxajt"),
                (especesAjoutees = JSON.parse(GM_getValue("animauxajt", "[]"))));
        }
        function annulerControle() {
            (null != especeEnCours && especesConservees.push(especeEnCours),
                (especeEnCours = null),
                enregistrerListe((especesConservees = especesConservees.concat(especesAjoutees))),
                supprimerDialogue("ContrAnim"));
        }
        if (!$("#ContrAnim").length)
            $("<div>")
                .attr("id", "ContrAnim")
                .dialog({
                    title: "Contrôle des espèces ajoutées",
                    buttons: {
                        "Je confirme": function () {
                            (especesConservees.push(especeEnCours),
                            !verifierSuivante() && (enregistrerListe(especesConservees), supprimerDialogue("ContrAnim")));
                        },
                        Supprimer: function () {
                            (delete especes[especeEnCours.nom],
                            !verifierSuivante() && (enregistrerListe(especesConservees), supprimerDialogue("ContrAnim")));
                        },
                        Annuler: function () {
                            annulerControle();
                        },
                    },
                });
        var fenetreControle = parId("ContrAnim").parentNode;
        (fenetreControle.setAttribute("style", "display:none"),
            verifierSuivante()
                ? (parBalise("button", fenetreControle)[0].addEventListener("click", annulerControle, !0),
                    fenetreControle.setAttribute(
                        "style",
                        "display:block;z-index:5005;position:fixed;width:500px;left:" + (window.innerWidth - 500) / 2 + "px",
                    ),
                    styliserBoutonsDialogue(fenetreControle),
                    (fenetreControle.style.top = (window.innerHeight - fenetreControle.clientHeight) / 2 + "px"))
                : (alert("Il n'y a actuellement aucune espèce ajoutée"), GM_deleteValue("animauxajt")));
    }
}
function analyserPageEnclos(reorganiser, modeInteractif) {
    GM_addStyle(
        ".div_animal {background-color:#F7E3C0;float:left;width:95px;text-align:center;border:1px solid #F7E3C0}.div_animal:hover span {position:absolute;display:inline}.barre_de_vie {margin:auto}.naissance_fin {border:1px solid #00f}.premort_fin {border:1px solid #f00}.naissance_epais {border:2px solid #00f}.premort_epais {border:2px solid #f00}.light_bulle {display:none;border:1px dashed #000;margin-top:-40px;background-color:#fff;opacity:0.8;border-radius:5px;padding:2px;white-space:nowrap}.selectedAnimal {background:#CD7F96 !important}",
    );
    var indexCellule,
        divTitre,
        divAnimal,
        joursAVivre,
        imageAnimal,
        nomAnimal,
        sexe,
        cellulesPage = parBalise("td", parBalise("table")[3]),
        comptesParEspece = [],
        mourantPresent = !1,
        animauxParJoursAVivre = [],
        conteneurPage = document.createElement("div");
    for (
        parc.encls[idEnclos].a_verifier = !GM_getValue("PAtsenclos2", !1) && paPasAJour,
            parc.encls[idEnclos].mourant = !1,
            parc.encls[idEnclos].animaux = {},
            divTitre = parBalise("div", cellulesPage[0])[1],
            conteneurPage.appendChild(parBalise("div", cellulesPage[0])[0]),
            conteneurPage.appendChild(parBalise("div", cellulesPage[0])[0]),
            indexCellule = 0;
        indexCellule < cellulesPage.length;
        indexCellule++
    )
        (divTitre = parBalise("div", cellulesPage[indexCellule])[0]) && "title_site2" == divTitre.getAttribute("class")
            ? (divTitre.setAttribute("style", "margin:15px 0px"), conteneurPage.appendChild(divTitre))
            : ((imageAnimal = (images = parBalise("img", cellulesPage[indexCellule]))[0]),
            "center" == cellulesPage[indexCellule].align &&
            void 0 !== imageAnimal &&
            /images\/animaux\//.test(imageAnimal.src) &&
            ((nomAnimal = nomAnimalDepuisImage(imageAnimal.src)),
                (sexe = /female/.test(images[1].src) ? "femelle" : "male"),
            !comptesParEspece[nomAnimal] &&
            ((comptesParEspece[nomAnimal] = []),
                (comptesParEspece[nomAnimal].male = 0),
                (comptesParEspece[nomAnimal].femelle = 0),
                (comptesParEspece[nomAnimal].bebe_male = 0),
                (comptesParEspece[nomAnimal].bebe_femelle = 0)),
            /baby/.test(images[2].src) && (comptesParEspece[nomAnimal]["bebe_" + sexe] += 1),
                (comptesParEspece[nomAnimal][sexe] += 1),
                (divAnimal = creerElement("div", {
                    className: "div_animal " + sexe + " " + nomAnimal.replace(/ /g, "_"),
                })).appendChild(images[0]),
                divAnimal.appendChild(divTitre),
                divAnimal.appendChild(parBalise("div", cellulesPage[indexCellule])[0]),
                (joursAVivre = (joursAVivre = (joursAVivre = divTitre.innerHTML).substring(
                    joursAVivre.indexOf("width") + 6,
                )).substring(0, joursAVivre.indexOf("px"))),
                (joursAVivre = Math.round(parseFloat($.trim(joursAVivre) / 0.71, 10))),
            reorganiser &&
            (imageAnimal.addEventListener("click", basculerVenteAnimal, !1),
                divTitre.setAttribute("class", "barre_de_vie"),
                1 == joursAVivre
                    ? 1 == prefsUtilisateur.encadrement
                        ? (divAnimal.className = divAnimal.getAttribute("class") + " premort_fin")
                        : (divTitre.className = "barre_de_vie premort_epais")
                    : 99 == joursAVivre &&
                    (1 == prefsUtilisateur.encadrement
                        ? (divAnimal.className = divAnimal.getAttribute("class") + " naissance_fin")
                        : (divTitre.className = "barre_de_vie naissance_epais"))),
            modeInteractif &&
            ((imageAnimal.width = "80"),
                (imageAnimal.height = "80"),
                divAnimal.addEventListener("mouseover", survolerAnimal, !1),
                divAnimal.addEventListener("mouseout", survolerAnimal, !1),
                divAnimal.insertBefore(
                    creerElement("span", {
                        className: "light_bulle",
                        innerHTML:
                            "<strong>" +
                            especes[nomAnimal].singulier +
                            "</strong> " +
                            sexe.replace(/a/, "â") +
                            "<br>" +
                            (1 == joursAVivre ? "dernier jour de vie" : joursAVivre + " jours à vivre"),
                    }),
                    divAnimal.firstChild,
                ),
                (parBalise("a", divAnimal)[0].href += "&nom=" + encodeURIComponent(nomAnimal) + "&sexe=" + sexe)),
            1 == joursAVivre && (mourantPresent = !0),
            reorganiser &&
            (animauxParJoursAVivre[joursAVivre] || (animauxParJoursAVivre[joursAVivre] = []),
                animauxParJoursAVivre[joursAVivre].push(divAnimal))));
    for (nomAnimal in ((parc.encls[idEnclos].mourant = mourantPresent), comptesParEspece))
        parc.encls[idEnclos].animaux[nomAnimal] = {
            male: comptesParEspece[nomAnimal].male,
            femelle: comptesParEspece[nomAnimal].femelle,
        };
    if (reorganiser) {
        for (joursAVivre in animauxParJoursAVivre)
            for (indexCellule in animauxParJoursAVivre[joursAVivre])
                conteneurPage.appendChild(animauxParJoursAVivre[joursAVivre][indexCellule]);
        if (
            ((formulaire = parBalise("form")[0]).setAttribute("style", "padding:5px"),
                formulaire.replaceChild(conteneurPage, parBalise("table", formulaire)[0]),
                scanMajEnCours)
        ) {
            if (parc.infoscan.vente_surpopulation) {
                var surpopulationTrouvee = !1,
                    valeurSurpop = parc.infoscan.surpopulation;
                for (nomAnimal in parc.encls[idEnclos].animaux)
                    if (
                        (parc.encls[idEnclos].animaux[nomAnimal].male > valeurSurpop ||
                            parc.encls[idEnclos].animaux[nomAnimal].femelle > valeurSurpop) &&
                        -1 == parc.infoscan.lexclusions.indexOf(nomAnimal)
                    ) {
                        surpopulationTrouvee = !0;
                        break;
                    }
                surpopulationTrouvee && afficherTableauPopulation(comptesParEspece, !0);
            }
        } else afficherTableauPopulation(comptesParEspece);
    }
    modeInteractif &&
    $(".div_animal :checkbox").on("click", function (evenement) {
        declencherClic(parBalise("img", evenement.target.parentNode.parentNode)[0]);
    });
}
function basculerVenteAnimal(evenement) {
    for (var divAnimal = evenement.target; !/div_animal/.test(divAnimal.className);) divAnimal = divAnimal.parentNode;
    "1" == divAnimal.getAttribute("a_vendre")
        ? (divAnimal.removeAttribute("style"),
            divAnimal.removeAttribute("a_vendre"),
            (parBalise("input", divAnimal)[0].checked = !1))
        : ((divAnimal.style.opacity = "0.3"),
            divAnimal.setAttribute("a_vendre", "1"),
            (parBalise("input", divAnimal)[0].checked = !0));
}
function survolerAnimal(evenement) {
    for (var divAnimal = evenement.target; !/div_animal/.test(divAnimal.className);) divAnimal = divAnimal.parentNode;
    var bulle = parBalise("span", divAnimal)[0];
    ((bulle.style["margin-left"] = 40 - bulle.clientWidth / 2 + "px"),
        (nomEspece = divAnimal.className.toLowerCase()),
        (nomEspece = $.trim(nomEspece.replace(/div_animal|male|femelle|naissance_fin|premort_fin/g, ""))));
    for (
        var lignesPopulation = parBalise("tr", parId("population")), indexLigne = 0, nbLignes = lignesPopulation.length;
        indexLigne < nbLignes;
        indexLigne++
    )
        nomEspece == lignesPopulation[indexLigne].getAttribute("anim") &&
        ("mouseover" != evenement.type || /selectedAnimal/.test(lignesPopulation[indexLigne].className)
            ? "mouseout" == evenement.type &&
            (lignesPopulation[indexLigne].className = lignesPopulation[indexLigne].className.replace(
                " selectedAnimal",
                "",
            ))
            : (lignesPopulation[indexLigne].className += " selectedAnimal"));
}
function afficherTableauPopulation(animauxEnclos, modeScan) {
    var classeLigne,
        modeAffichage,
        htmlLignes = "";
    listeTemp = [];
    var typeEtNumero = {
        t: parametreUrl(window.location.href, "t"),
        v: parametreUrl(window.location.href, "v"),
    };
    if (
        (animauxEnclos
            ? (modeAffichage = modeScan ? 1 : parseInt(prefsUtilisateur.couple))
            : ((animauxEnclos = parc.encls[typeEtNumero.t + "_" + typeEtNumero.v].animaux), (modeAffichage = 1)),
        1 == prefsUtilisateur.tri)
    ) {
        for (nomEspece in animauxEnclos) listeTemp.push([nomEspece, nomEspece]);
        listeTemp.sort(function (ligneA, ligneB) {
            return ligneA[0] < ligneB[0] ? -1 : ligneA[0] > ligneB[0] ? 1 : 0;
        });
    } else {
        if (2 == prefsUtilisateur.tri)
            for (nomEspece in animauxEnclos) listeTemp.push([especes[nomEspece].prix, nomEspece]);
        else if (3 == prefsUtilisateur.tri)
            for (nomEspece in animauxEnclos)
                listeTemp.push([animauxEnclos[nomEspece].male + animauxEnclos[nomEspece].femelle, nomEspece]);
        else if (4 == prefsUtilisateur.tri)
            for (nomEspece in animauxEnclos) listeTemp.push([animauxEnclos[nomEspece].male, nomEspece]);
        else for (nomEspece in animauxEnclos) listeTemp.push([animauxEnclos[nomEspece].femelle, nomEspece]);
        listeTemp.sort(function (ligneA, ligneB) {
            return parseInt(ligneA) - parseInt(ligneB);
        });
    }
    var htmlMales,
        htmlFemelles,
        bourse,
        pageAchat = /achat_animaux2?\.php/.test(window.location);
    if (modeScan) bourse = !1;
    else {
        bourse = JSON.parse(GM_getValue("bourse", !1));
        var imgBaisse = '<img src="https://monzoo.net/images/bourse/-.gif" title="%title%">',
            imgHausse = '<img src="https://monzoo.net/images/bourse/+.gif" title="%title%">',
            imgStable = '<img src="https://monzoo.net/images/bourse/=.gif" title="%title%">';
    }
    for (indexBoucle in listeTemp) {
        switch (
            ((classeLigne = ""),
            !modeScan &&
            (animauxEnclos[listeTemp[indexBoucle][1]].male != animauxEnclos[listeTemp[indexBoucle][1]].femelle ||
                animauxEnclos[listeTemp[indexBoucle][1]].male > 15 ||
                animauxEnclos[listeTemp[indexBoucle][1]].femelle > 15) &&
            (classeLigne = ' class="desequilibre"'),
                modeAffichage)
            ) {
            case 1:
                ((htmlMales = animauxEnclos[listeTemp[indexBoucle][1]].male),
                    (htmlFemelles = animauxEnclos[listeTemp[indexBoucle][1]].femelle));
                break;
            case 2:
                ((htmlMales =
                    animauxEnclos[listeTemp[indexBoucle][1]].male +
                    "<span>-" +
                    (animauxEnclos[listeTemp[indexBoucle][1]].male - animauxEnclos[listeTemp[indexBoucle][1]].bebe_male) +
                    "</span>"),
                    (htmlFemelles =
                        animauxEnclos[listeTemp[indexBoucle][1]].femelle +
                        "<span>-" +
                        (animauxEnclos[listeTemp[indexBoucle][1]].femelle - animauxEnclos[listeTemp[indexBoucle][1]].bebe_femelle) +
                        "</span>"));
                break;
            case 3:
                ((htmlMales =
                    animauxEnclos[listeTemp[indexBoucle][1]].male +
                    "<span>-" +
                    animauxEnclos[listeTemp[indexBoucle][1]].bebe_male +
                    "</span>"),
                    (htmlFemelles =
                        animauxEnclos[listeTemp[indexBoucle][1]].femelle +
                        "<span>-" +
                        animauxEnclos[listeTemp[indexBoucle][1]].bebe_femelle +
                        "</span>"));
                break;
            case 4:
                ((htmlMales =
                    animauxEnclos[listeTemp[indexBoucle][1]].male -
                    animauxEnclos[listeTemp[indexBoucle][1]].bebe_male +
                    "<span>-" +
                    animauxEnclos[listeTemp[indexBoucle][1]].bebe_male +
                    "</span>"),
                    (htmlFemelles =
                        animauxEnclos[listeTemp[indexBoucle][1]].femelle -
                        animauxEnclos[listeTemp[indexBoucle][1]].bebe_femelle +
                        "<span>-" +
                        animauxEnclos[listeTemp[indexBoucle][1]].bebe_femelle +
                        "</span>"));
        }
        (espece = trouverEspece(listeTemp[indexBoucle][1])) &&
        (htmlLignes +=
            "<tr" +
            classeLigne +
            ' anim="' +
            (nomEspece = listeTemp[indexBoucle][1].replace(/ /g, "_")) +
            '"><td class="titre">' +
            especes[listeTemp[indexBoucle][1]].singulier +
            '</th><td class="male">' +
            htmlMales +
            '</td><td class="femelle">' +
            htmlFemelles +
            '</td><td class="evolution">' +
            (bourse
                ? (bourse[listeTemp[indexBoucle][1]] > espece.prix
                        ? imgHausse
                        : bourse[listeTemp[indexBoucle][1]] < espece.prix
                            ? imgBaisse
                            : imgStable
                ).replace("%title%", Math.round(100 * (bourse[listeTemp[indexBoucle][1]] / espece.prix - 1)) + "&nbsp;%")
                : "") +
            "</td>" +
            (pageAchat ? "" : '<td><input type="checkbox" surpopulation="1" animal="' + nomEspece + '"></td>') +
            "</tr>");
    }
    var aucunAnimal = !1,
        htmlIcones = "";
    if (
        ("" === htmlLignes &&
        ((htmlLignes = '<tr><td colspan="5" style="text-align:center">Aucun animal</td></tr>'), (aucunAnimal = !0)),
            !modeScan)
    ) {
        GM_addStyle(
            ".cerclage{background-color:#D19260}#contenu_population {overflow-y:auto}#population {border-collapse:collapse;background-color:#F7E3C0;font-weight:bold;cursor:help;width:auto}#population th, #population td {border:1px solid #000;padding:2px}#population .titre{text-align:right;white-space:nowrap}#population .male{color:#394AE2;text-align:center;min-width:24px;max-width:24px}#population .femelle{color:#B016BA;text-align:center;min-width:24px;max-width:24px}#population .male span, #population .femelle span{font-size:10px;font-weight:normal;color:#000}#population .evolution{text-align:center;min-width:17px}#population tr.desequilibre{background-color:#eac893}",
        );
        var styleIcones = ' style="cursor:pointer;margin-left:15px;height:20px;width:20px">';
        pageAchat
            ? (htmlIcones = '<img id="img_achat" src="images/icones/baby.png" alt="Achat" title="Achat"' + styleIcones)
            : (aucunAnimal ||
            (htmlIcones =
                '<img src="images/icones/icone_achat.png" id="img_vente_animaux" alt="Vente multiple" title="Vente multiple"' +
                styleIcones),
                (htmlIcones +=
                    '<img id="img_achat" src="images/icones/baby.png" onclick="window.location.href=\'achat_animaux' +
                    (aucunAnimal ? "2" : "") +
                    ".php?t=" +
                    typeEtNumero.t +
                    "&vtemp=" +
                    (1e3 * parseInt(typeEtNumero.t, 10) + parseInt(typeEtNumero.v, 10)) +
                    "&v=" +
                    typeEtNumero.v +
                    '\'" alt="Achat" title="Achat"' +
                    styleIcones));
    }
    htmlLignes =
        '<table id="population"><tr anim="tous"><th class="titre">Tous les animaux</th><th class="male"><img src="images/icones/icone_male.png"></th><th class="femelle"><img src="images/icones/icone_female.png"></th><th>&nbsp;</th>' +
        (pageAchat ? "" : '<th><input type="checkbox" surpopulation="1" checkAll="1"></th>') +
        "</tr>" +
        htmlLignes +
        '</table><div style="display:flex;margin:5px 5px 0px 5px;justify-content:center">' +
        htmlIcones +
        "</div>";
    var optionsConteneur = {
        "min-width": "180px",
        "z-index": 5e3,
    };
    (modeScan && (optionsConteneur.opacity = 0.01),
        creerBulle({
            id: "population",
            titre: "Animaux de l'enclos",
            contenu: htmlLignes,
            container_options: optionsConteneur,
            position: {
                top: 0,
                left: 100,
                right: 0,
            },
        }),
    modeScan ||
    (pageAchat
        ? $("#img_achat").on("click", function () {
            $('input:submit[value="Acheter l\'animal"]').click();
        })
        : aucunAnimal ||
        $("#img_vente_animaux").on("click", function () {
            declencherClic(parId("button"));
        }),
        $("th.titre, th.male, th.femelle, td.titre, td.male, td.femelle", "#population").on(
            "click",
            filtrerParSelection,
        )),
        $(':checkbox[surpopulation="1"]').on("click", gererCaseSurpopulation));
}
function filtrerParSelection(evenement) {
    var cellule = $(this),
        classeCellule = cellule.attr("class"),
        nomLigne = cellule.parent().attr("anim"),
        divsAnimaux = $(".div_animal");
    ((filtreSelection = ""),
    (!evenement || !evenement.ctrlKey || "tous" == nomLigne) &&
    ($(".cerclage", "#population").removeClass("cerclage"), cellule.addClass(classeCellule)),
        cellule.toggleClass("cerclage"));
    var cellulesCerclees = $(".cerclage", "#population");
    ("tous" != nomLigne && cellulesCerclees.length
        ? cellulesCerclees.each(function () {
            filtreSelection +=
                (filtreSelection ? "," : "") +
                (cellulesCerclees.filter(this).hasClass("male")
                    ? ".male"
                    : cellulesCerclees.filter(this).hasClass("femelle")
                        ? ".femelle"
                        : "") +
                "." +
                cellulesCerclees.filter(this).parent().attr("anim");
        })
        : (filtreSelection =
            cellulesCerclees.length && cellule.hasClass("male")
                ? ".male"
                : cellulesCerclees.length && cellule.hasClass("femelle")
                    ? ".femelle"
                    : ".male, .femelle"),
        divsAnimaux.hide(),
        $(filtreSelection).show());
}
function gererCaseSurpopulation() {
    if ($(this).attr("checkAll")) {
        var coche = $(this).prop("checked");
        $(':checkbox[surpopulation="1"][checkAll!="1"]').each(function () {
            ($(this).prop(
                "checked",
                -1 == parc.infoscan.lexclusions.indexOf($(this).attr("animal").replace(/_/g, " ")) && coche,
            ),
                appliquerSurpopulation($(this).attr("animal"), $(this).prop("checked"), !0));
        });
    } else appliquerSurpopulation($(this).attr("animal"), $(this).prop("checked"), !1);
}
function appliquerSurpopulation(nomAnimalClasse, coche, forcerCollective) {
    var excedent,
        valeurSurpop =
            !forcerCollective && $("#valeur_surpop") && parc.encls[idEnclos].hasOwnProperty("surpop")
                ? parc.encls[idEnclos].surpop
                : parc.infoscan.surpopulation,
        sexes = ["male", "femelle"];
    for (indexBoucle = 0; indexBoucle < 2; indexBoucle++)
        ((excedent = $(".div_animal." + sexes[indexBoucle] + "." + nomAnimalClasse).length - valeurSurpop),
            $(".div_animal." + sexes[indexBoucle] + "." + nomAnimalClasse + '[a_vendre="1"]')
                .find("img:first")
                .click(),
        coche &&
        excedent > 0 &&
        $(".div_animal." + sexes[indexBoucle] + "." + nomAnimalClasse)
            .slice(0, excedent)
            .find("img:first")
            .click());
    "" != filtreSelection && ($(".div_animal").hide(), $(filtreSelection).show());
}
function proposerScanBourse() {
    if (!/scanBourse/.test(window.location.href)) {
        var dernierScanBourse = GM_getValue("bourse_scan", !1),
            heuresScan = ["00", "03", "06", "09", "12", "15", "18", "21"],
            dateDecalee = new Date(),
            mois =
                (dateDecalee = new Date(
                    Date.parse(dateDecalee) - 36e5 * parseFloat(prefsUtilisateur.decalage_horaire),
                )).getMonth() + 1,
            dateJour = dateDecalee.getDate(),
            heure = dateDecalee.getHours(),
            minute = dateDecalee.getMinutes();
        for (
            dateJour =
                dateDecalee.getFullYear() +
                "-" +
                (mois < 10 ? "0" + mois : mois) +
                "-" +
                (dateJour < 10 ? "0" + dateJour : dateJour),
                indexBoucle = 0,
                limiteBoucle = heuresScan.length;
            indexBoucle < limiteBoucle;
            indexBoucle++
        )
            if (
                !dernierScanBourse ||
                (dernierScanBourse < dateJour + " " + heuresScan[indexBoucle] + ":05" &&
                    (heure < 10 ? "0" + heure : heure) + ":" + (minute < 10 ? "0" + minute : minute) >
                    heuresScan[indexBoucle] + ":05")
            ) {
                $(".menu").append('<a href="' + urlBase + 'bourse.php?scanBourse" name="scanbo" target="_blank">bo</a>');
                var dialogueBourse = $("<div>").attr("id", "ChBourse");
                (dialogueBourse.html(
                    "Les prix de la bourse ont changé :<br><br>cliquez sur le bouton pour que le script aille les récupérer dans un nouvel onglet qui se refermera ensuite automatiquement",
                ),
                    dialogueBourse.dialog({
                        title: "Prix des animaux",
                        width: 400,
                        modal: !0,
                        buttons: {
                            "Aller récupérer les prix": function () {
                                (declencherClic(parNom("scanbo")[0]), $(this).dialog("close"));
                            },
                            "Ne rien faire": function () {
                                $(this).dialog("close");
                            },
                        },
                    }));
                var fenetreDialogue = parId("ChBourse").parentNode;
                (fenetreDialogue.setAttribute(
                    "style",
                    "z-index:5005;position:fixed;width:400px;left:" + (window.innerWidth / 2 - 200) + "px",
                ),
                    styliserBoutonsDialogue(fenetreDialogue),
                    (fenetreDialogue.style.top = (window.innerHeight - fenetreDialogue.clientHeight) / 2 + "px"));
                break;
            }
    }
}
function proposerScanMaj() {
    var htmlOptionsScan =
            '<br><ul style="font-weight:bold;font-size:0.8em;color:#982298;list-style-type:none"><li style="margin-top:10px">Lancement espions et stocks : <input type="checkbox" id="gestion2"></li><li style="margin-top:8px">Vente de la surpopulation : <input type="checkbox" id="vente_surpopulation2"></li><div style="margin-left:23px;width:max-content" title="' +
            texteAideSurpopulation() +
            '">Surpopulation collective : <input type="text" id="valeur_surpopulation2" maxlength="2" size="2" tyle="height:12px;font-size:10px"></div><li style="margin-left:8px"><a id="gestion_exclusions2" class="action" style="color:hotpink">Cliquez ici pour gérer la liste des exclusions</a></li><li style="margin-top:6px">Vente des mourants : <input type="checkbox" id="vente_mourant2"></li></ul>',
        dialogueScan = $("<div>").attr("id", "ScanMAJ");
    (dialogueScan.html(
        "Voulez-vous lancer le scan de mise à jour ?<br>Si vous ne le faites pas, cela vous sera de nouveau proposé la prochaine fois que vous viendrez sur cette page.",
    ),
        dialogueScan.append(htmlOptionsScan),
        dialogueScan.dialog({
            title: "Détection d'une nouvelle mise à jour",
            modal: !0,
            buttons: {
                "Lancer le scan de mise de jour": function () {
                    (GM_setValue("maj_PA", !0), demarrerScanMaj());
                },
                "Ne rien faire": function () {
                    $(this).dialog("close");
                },
            },
        }),
        $("#gestion2").prop("checked", parc.gestion),
        $("#valeur_surpopulation2").val(parc.infoscan.surpopulation).on("input", changerSurpopulation),
        $("#vente_surpopulation2").prop("checked", parc.infoscan.vente_surpopulation),
        $("#gestion_exclusions2").on("click", gererExclusions),
        $("#vente_mourant2").prop("checked", parc.infoscan.vente_mourant));
    var idsCases = ["gestion2", "vente_surpopulation2", "vente_mourant2"];
    for (dialogueScan in idsCases) $("#" + idsCases[dialogueScan]).on("click", changerOptionCase);
    var fenetreDialogue = parId("ScanMAJ").parentNode;
    (fenetreDialogue.setAttribute(
        "style",
        "z-index:5002;position:fixed;width:860px;left:" + (window.innerWidth / 2 - 430) + "px",
    ),
        styliserBoutonsDialogue(fenetreDialogue),
        (fenetreDialogue.style.top = (window.innerHeight - fenetreDialogue.clientHeight) / 2 + "px"));
}
function demarrerScanMaj() {
    if (
        (GM_deleteValue("maj_a_faire"),
            GM_deleteValue(nomZoo + "_log"),
            GM_deleteValue(nomZoo + "_ev_performances"),
            parc.hasOwnProperty("historique")
                ? (parc.historique.mises_a_jour += 1)
                : (parc.historique = {
                    mises_a_jour: 1,
                    naissances: {},
                }),
            parc.infoscan.hasOwnProperty("naissances"))
    ) {
        var dejaDansHistorique, especeHistorique;
        for (var indexNaissance in parc.infoscan.naissances) {
            for (especeHistorique in ((dejaDansHistorique = !1), parc.historique.naissances))
                if (especeHistorique == parc.infoscan.naissances[indexNaissance]) {
                    dejaDansHistorique = !0;
                    break;
                }
            dejaDansHistorique
                ? (parc.historique.naissances[parc.infoscan.naissances[indexNaissance]] += 1)
                : (parc.historique.naissances[parc.infoscan.naissances[indexNaissance]] = 1);
        }
        var naissancesParMaj = JSON.parse(GM_getValue(nomZoo + "_ev_naissances", "[]"));
        (naissancesParMaj.push(Object.keys(parc.infoscan.naissances).length),
            GM_setValue(nomZoo + "_ev_naissances", JSON.stringify(naissancesParMaj)));
        var montantsParMaj = JSON.parse(GM_getValue(nomZoo + "_ev_montants", "[]")),
            montantNaissances = 0;
        for (var indexMontant in parc.infoscan.naissances)
            (espece = trouverEspece(parc.infoscan.naissances[indexMontant])) &&
            (montantNaissances += parseInt(espece.prix, 10) || 0);
        (montantsParMaj.push(montantNaissances), GM_setValue(nomZoo + "_ev_montants", JSON.stringify(montantsParMaj)));
    }
    var dateMaj = idMajActuelle.substring(0, idMajActuelle.lastIndexOf("/"));
    if (dateMaj != dateJeu)
        ((dateJeu = dateMaj),
            (heureJeu = idMajActuelle.substring(idMajActuelle.lastIndexOf("/") + 1)),
            GM_setValue("aujourd_hui", dateJeu),
            GM_setValue("heure", heureJeu),
            (parc.infoscan.dateConnexion = dateJeu),
            heureJeu < 14
                ? ((parc.mises_a_jour = {
                    matin: !0,
                    am: !1,
                }),
                    (parc.infoscan.type_mise_a_jour = "minuit"))
                : ((parc.mises_a_jour = {
                    matin: !1,
                    am: !0,
                }),
                    (parc.infoscan.type_mise_a_jour = "14h")),
            (parc.rapport = []),
            GM_deleteValue("maj_bonus"));
    else if (GM_getValue("maj_bonus", !1)) {
        (parc.rapport.push({
            type_mise_a_jour: parc.infoscan.type_mise_a_jour,
            naissances: parc.infoscan.naissances,
            trouvailles: parc.infoscan.trouvailles,
            deces: parc.infoscan.deces,
            vols: parc.infoscan.vols,
            achats: parc.infoscan.achats,
            messages: parc.infoscan.messages,
            attraction: parc.infoscan.attraction,
        }),
            GM_deleteValue("maj_bonus"));
        var typeMajPrecedent = parc.infoscan.type_mise_a_jour;
        ("" == typeMajPrecedent && (typeMajPrecedent = heureJeu < 14 ? "minuit" : "14h"),
            (parc.infoscan.type_mise_a_jour =
                "minuit" == typeMajPrecedent
                    ? "mibonus1"
                    : "14h" == typeMajPrecedent
                        ? "14bonus1"
                        : -1 != typeMajPrecedent.indexOf("mibonus")
                            ? "mibonus" + (parseInt(typeMajPrecedent.substring(7)) + 1)
                            : "14bonus" + (parseInt(typeMajPrecedent.substring(7)) + 1)));
    } else
        parc.infoscan.dateConnexion != dateJeu
            ? ((parc.infoscan.dateConnexion = dateJeu),
                heureJeu < 14
                    ? ((parc.mises_a_jour = {
                        matin: !0,
                        am: !1,
                    }),
                        (parc.infoscan.type_mise_a_jour = "minuit"))
                    : ((parc.mises_a_jour = {
                        matin: !1,
                        am: !0,
                    }),
                        (parc.infoscan.type_mise_a_jour = "14h")),
                (parc.rapport = []))
            : (parc.rapport.push({
                type_mise_a_jour: parc.infoscan.type_mise_a_jour,
                naissances: parc.infoscan.naissances,
                trouvailles: parc.infoscan.trouvailles,
                deces: parc.infoscan.deces,
                vols: parc.infoscan.vols,
                achats: parc.infoscan.achats,
                messages: parc.infoscan.messages,
                attraction: parc.infoscan.attraction,
            }),
                (parc.mises_a_jour = {
                    matin: !0,
                    am: !0,
                }),
                (parc.infoscan.type_mise_a_jour = "14h"));
    ((parc.infoscan.scan_suite = !parc.gestion),
        (parc.infoscan.scan_messages = !1),
        (parc.infoscan.attraction = ""),
        (parc.infoscan.vols = []),
        (parc.infoscan.naissances = {}),
        (parc.infoscan.genre_naissances = {
            male: {},
            femelle: {},
        }),
        (parc.infoscan.trouvailles = {}),
        (parc.infoscan.deces = {}),
        (parc.infoscan.achats = {}),
        (parc.infoscan.messages = {}),
        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
        (window.location.href = urlBase + "event.php"));
}
function journaliser(message) {
    (console.log(message), GM_setValue(nomZoo + "_log", GM_getValue(nomZoo + "_log", "") + message + "<br>"));
}
function supprimerDonneesZoo(nomZooCible) {
    (GM_deleteValue(nomZooCible + "_ev_montants"),
        GM_deleteValue(nomZooCible + "_ev_naissances"),
        GM_deleteValue(nomZooCible + "_ev_performances"),
        GM_deleteValue(nomZooCible + "_info_parc"),
        GM_deleteValue(nomZooCible + "_log"),
    -1 != listeZoos.indexOf(nomZooCible) && listeZoos.splice(listeZoos.indexOf(nomZooCible), 1),
        GM_setValue("liste_zoos", JSON.stringify(listeZoos)));
}
function ajouterLiensNavigation(refEnclos, nonConstruit) {
    var suivant = enclosSuivant(refEnclos),
        precedent = enclosPrecedent(refEnclos),
        suivantAVerifier = enclosSuivantAvec(refEnclos, "a_verifier"),
        precedentAVerifier = enclosPrecedentAvec(refEnclos, "a_verifier"),
        suivantMourant = enclosSuivantAvec(refEnclos, "mourant"),
        precedentMourant = enclosPrecedentAvec(refEnclos, "mourant"),
        htmlLiens = '<div id="bloc_liens">';
    ("debut" != precedent.t &&
    (htmlLiens +=
        '<a href="enclosgestion1.php?t=' +
        precedent.t +
        "&v=" +
        precedent.v +
        '" style="float:left;cursor:pointer">Enclos précédent</a>'),
    "fin" != suivant.t &&
    (htmlLiens +=
        '<a href="enclosgestion1.php?t=' +
        suivant.t +
        "&v=" +
        suivant.v +
        '" style="float:right;cursor:pointer">Enclos suivant</a>'),
        (htmlLiens += '<div style="text-align:center">'),
    "debut" != precedentAVerifier.t &&
    (htmlLiens +=
        '<a href="enclosgestion1.php?t=' +
        precedentAVerifier.t +
        "&v=" +
        precedentAVerifier.v +
        '" class="navigation"><<</a> '),
    ("debut" == precedentAVerifier.t && "fin" == suivantAVerifier.t) || (htmlLiens += "Enclos à vérifier"),
    "fin" != suivantAVerifier.t &&
    (htmlLiens +=
        ' <a href="enclosgestion1.php?t=' +
        suivantAVerifier.t +
        "&v=" +
        suivantAVerifier.v +
        '" class="navigation">>></a>'),
    ("debut" == precedentAVerifier.t && "fin" == suivantAVerifier.t) ||
    ("debut" == precedentMourant.t && "fin" == suivantMourant.t) ||
    (htmlLiens += "<br>"),
    "debut" != precedentMourant.t &&
    (htmlLiens +=
        '<a href="enclosgestion1.php?t=' +
        precedentMourant.t +
        "&v=" +
        precedentMourant.v +
        '" class="navigation"><<</a> '),
    ("debut" == precedentMourant.t && "fin" == suivantMourant.t) || (htmlLiens += "Enclos avec mourant"),
    "fin" != suivantMourant.t &&
    (htmlLiens +=
        ' <a href="enclosgestion1.php?t=' +
        suivantMourant.t +
        "&v=" +
        suivantMourant.v +
        '" class="navigation">>></a>'),
        (htmlLiens += '</div><div style="margin-bottom:10px;clear:both"></div></div>'));
    var ligneLiens = parBalise("tbody", (tables = parBalise("table"))[1])[0].insertRow(0),
        cellule = ligneLiens.insertCell(0);
    ((cellule.colSpan = 2), (cellule.innerHTML = htmlLiens));
    var sautsLigne = parBalise("br", (cellule = parBalise("td", tables[0])[0]));
    (cellule.removeChild(sautsLigne[sautsLigne.length - 1]),
    nonConstruit && cellule.removeChild(sautsLigne[sautsLigne.length - 1]),
        (cellule = (ligneLiens = $("table:first")[0].insertRow()).insertCell(0)).setAttribute(
            "style",
            "background-color:#F7E3C0;padding-top:10px",
        ),
        (cellule.innerHTML = htmlLiens));
}
function colorierLignesMissions() {
    var lignesMissions = $(".ligne_mission");
    (lignesMissions.filter(":visible").not(":even").find("td").addClass("ui-state-default").removeClass("ui-state-hover"),
        lignesMissions.filter(":visible:even").find("td").addClass("ui-state-hover").removeClass("ui-state-default"));
}
function rechargerAccueil() {
    (/index.php/.test(window.location) ||
        /myzoo.php/.test(window.location) ||
        "https://monzoo.net/" == window.location.href ||
        "monzoo.net" == window.location.href) &&
    (String(window.location) != urlBase + "index.php"
        ? window.location.assign(urlBase + "index.php")
        : window.location.reload());
}
function identifiantMajActuelle() {
    var dateDecalee = new Date();
    return (
        (dateDecalee = new Date(Date.parse(dateDecalee) - 36e5 * parseFloat(prefsUtilisateur.decalage_horaire))).getDate() +
        "/" +
        (dateDecalee.getMonth() + 1) +
        "/" +
        dateDecalee.getFullYear() +
        "/" +
        (dateDecalee.getHours() < 14 ? 1 : 2)
    );
}
((String.prototype.noAccent = function () {
    for (
        var accents = new Array(
                "à",
                "á",
                "â",
                "ã",
                "ä",
                "ç",
                "è",
                "é",
                "ê",
                "ë",
                "ì",
                "í",
                "î",
                "ï",
                "ñ",
                "ò",
                "ó",
                "ô",
                "õ",
                "ö",
                "ù",
                "ú",
                "û",
                "ü",
                "ý",
                "ÿ",
                "À",
                "Á",
                "Â",
                "Ã",
                "Ä",
                "Ç",
                "È",
                "É",
                "Ê",
                "Ë",
                "Ì",
                "Í",
                "Î",
                "Ï",
                "Ñ",
                "Ò",
                "Ó",
                "Ô",
                "Õ",
                "Ö",
                "Ù",
                "Ú",
                "Û",
                "Ü",
                "Ý",
            ),
            sansAccents = new Array(
                "a",
                "a",
                "a",
                "a",
                "a",
                "c",
                "e",
                "e",
                "e",
                "e",
                "i",
                "i",
                "i",
                "i",
                "n",
                "o",
                "o",
                "o",
                "o",
                "o",
                "u",
                "u",
                "u",
                "u",
                "y",
                "y",
                "A",
                "A",
                "A",
                "A",
                "A",
                "C",
                "E",
                "E",
                "E",
                "E",
                "I",
                "I",
                "I",
                "I",
                "N",
                "O",
                "O",
                "O",
                "O",
                "O",
                "U",
                "U",
                "U",
                "U",
                "Y",
            ),
            texte = this,
            indexAccent = 0,
            nbAccents = accents.length;
        indexAccent < nbAccents;
        indexAccent++
    )
        texte = texte.replace(new RegExp(accents[indexAccent], "g"), sansAccents[indexAccent]);
    return texte;
}),
!GM_getValue("nettoieajoutes6", !1) &&
(GM_deleteValue("animauxajt"),
    GM_deleteValue("nettoieajoutes"),
    GM_deleteValue("nettoieajoutes2"),
    GM_deleteValue("nettoieajoutes3"),
    GM_deleteValue("nettoieajoutes4"),
    GM_deleteValue("nettoieajoutes5"),
    GM_setValue("nettoieajoutes6", !0)));
var pageCourante,
    indexBoucle,
    limiteBoucle,
    indexBoucle2,
    limiteBoucle2,
    cleEnclos,
    espece,
    listeTemp,
    objetTemp,
    nomEspece,
    texteTemp,
    elementsTemp,
    valeurTemp,
    urlBase = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1),
    versionScript = "3.16.1",
    dateJeu = GM_getValue("aujourd_hui", !1),
    heureJeu = GM_getValue("heure", !1),
    listeZoos = JSON.parse(GM_getValue("liste_zoos", "[]")),
    nomZoo = lireNomZoo(),
    especes = [],
    especesAjoutees = JSON.parse(GM_getValue("animauxajt", "[]")),
    prefsUtilisateur = JSON.parse(GM_getValue("info_user", !1)),
    parc = null,
    pandaCliquable = !0,
    nomsTypesEnclos = [
        "",
        "Savane",
        "Bassin",
        "Terre/Eau",
        "Forêt",
        "Volière",
        "Aquarium",
        "Vivarium",
        "Noctarium",
        "Insectarium",
        "Île aux dinos",
    ];
for (
    initialiserStylesEtDonnees(),
        especes["dendrobate a ventre tachete"] = new Espece(
            "dendrobate à ventre tacheté",
            "dendrobates à ventre tacheté",
            7e5,
            1,
            3,
            0,
            "VIP de diamant",
        ),
        especes["shagya criniere de feu"] = new Espece(
            "shagya crinière de feu",
            "shagyas crinière de feu",
            1e6,
            3,
            3,
            2,
            "VIP de diamant",
        ),
        especes.dugong = new Espece("dugong", "", 7e5, 3, 2, 0, "VIP d'or"),
        especes["messager sagittaire"] = new Espece("messager sagittaire", "messagers sagittaires", 6e4, 1, 5),
        especes["gorfou a crete"] = new Espece("gorfou à crête", "gorfous à crête", 5e5, 3, 2, 8),
        especes.hyene = new Espece("hyène", "", 3e5, 2, 1),
        especes["tigre blanc"] = new Espece("tigre blanc", "tigres blancs", 5e5, 4, 4),
        especes["loup rouge"] = new Espece("loup rouge", "loups rouges", 4e5, 3, 4, 0, "VIP d'argent"),
        especes.serval = new Espece("serval", "", 225e3, 2, 1, 0, "débloquée avec la mission avancée 28"),
        especes.phoque = new Espece("phoque", "", 4e5, 2, 2),
        especes["douc a queue rayee"] = new Espece("douc à queue rayée", "doucs à queue rayée", 4e5, 2, 4, 8),
        especes.koala = new Espece("koala", "", 25e4, 2, 4),
        especes["crabe percussionniste"] = new Espece("crabe percussionniste", "crabes percussionniste", 3e5, 1, 6, 8),
        especes.tamandua = new Espece("tamandua", "", 3e5, 2, 4, 1),
        especes["poisson clown divin"] = new Espece(
            "poisson clown divin",
            "poissons clown divin",
            35e4,
            1,
            6,
            0,
            "VIP d'or",
        ),
        especes.taupe = new Espece("taupe", "", 500, 0, 1, 64),
        especes["dik dik zebre"] = new Espece("dik dik zèbre", "diks diks zèbres", 25e4, 1, 1, 8),
        especes["coq patriote"] = new Espece("coq patriote", "coqs patriotes", 35e3, 1, 5, 32),
        especes["dragon de komodo"] = new Espece("dragon de komodo", "dragons de komodo", 23e4, 3, 7),
        especes.quetzal = new Espece("quetzal", "", 35e3, 1, 5, 0, "oeuf mystérieux"),
        especes.caracal = new Espece("caracal", "", 2e5, 2, 1, 0, "VIP d'or"),
        especes["barbotte de berlin"] = new Espece("barbotte de berlin", "barbottes de berlin", 2e3, 1, 6),
        especes["dendrobate fraise"] = new Espece("dendrobate fraise", "dendrobates fraise", 185e3, 1, 3),
        especes.espadon = new Espece("espadon", "", 176e3, 3, 6),
        especes["ours polaire"] = new Espece("ours polaire", "ours polaires", 175e3, 4, 2),
        especes["ibis rouge"] = new Espece("ibis rouge", "ibis rouges", 8e4, 1, 5),
        especes.mandrill = new Espece("mandrill", "", 17e4, 2, 4, 0, "VIP de bronze"),
        especes["loup blanc"] = new Espece("loup blanc", "loups blancs", 8e4, 3, 4),
        especes["calao buffle"] = new Espece("calao buffle", "calaos buffle", 155e3, 1, 5, 8),
        especes["paul le poulpe"] = new Espece("Paul le poulpe", "Paul le poulpe", 59e3, 1, 6, 32),
        especes["meduse des bermudes"] = new Espece("méduse des bermudes", "méduses des bermudes", 15e4, 1, 6),
        especes.grizzly = new Espece("grizzly", "", 15e4, 4, 4),
        especes["toucan bec sanglant"] = new Espece("toucan bec sanglant", "toucans bec sanglant", 15e4, 2, 3),
        especes.husky = new Espece("husky", "", 49e3, 3, 4),
        especes["salamandre de feu"] = new Espece(
            "salamandre de feu",
            "salamandres de feu",
            154e3,
            1,
            8,
            0,
            "réussir une naissance pour 150 espèces différentes",
        ),
        especes["paon bleu"] = new Espece("paon bleu", "paons bleus", 135e3, 2, 3, 0, "VIP d'argent"),
        especes["mamba noir"] = new Espece("mamba noir", "mambas noirs", 68e3, 1, 7, 2),
        especes.tarsier = new Espece("tarsier", "", 11e4, 1, 8),
        especes.lemurien = new Espece("lémurien", "", 18500, 2, 4),
        especes.chimpanze = new Espece("chimpanzé", "", 2e4, 2, 4),
        especes["requin nourrice"] = new Espece("requin nourrice", "requins nourrices", 105e3, 3, 2, 2),
        especes["python royal"] = new Espece("python royal", "pythons royal", 83e3, 1, 7),
        especes["dunnart castor"] = new Espece("dunnart castor", "dunnarts castor", 98e3, 1, 8, 8),
        especes.tapir = new Espece("tapir", "", 5e4, 3, 4, 16),
        especes["orang outan"] = new Espece("orang outan", "orangs outans", 64e3, 3, 4),
        especes["requin bleu"] = new Espece("requin bleu", "requins bleus", 45e3, 3, 2),
        especes["marsouin argente"] = new Espece("marsouin argenté", "marsouins argentés", 135e3, 2, 2, 8),
        especes.otarie = new Espece("otarie", "", 14e3, 3, 2),
        especes["scorpion aiguille ecarlate"] = new Espece(
            "scorpion aiguille écarlate",
            "scorpions aiguille écarlate",
            1e5,
            1,
            7,
            0,
            "VIP de bronze",
        ),
        especes["requin marteau"] = new Espece("requin marteau", "requins marteau", 95e3, 3, 2, 16),
        especes.ornithorynque = new Espece("ornithorynque", "", 18e3, 2, 3),
        especes["cameleon luminophore"] = new Espece("caméléon luminophore", "caméléons luminophores", 9e4, 1, 7),
        especes.dromadaire = new Espece("dromadaire", "", 11e3, 3, 1),
        especes["mygale geante asiatique"] = new Espece(
            "mygale géante asiatique",
            "mygales géantes asiatiques",
            75e3,
            1,
            7,
        ),
        especes.pelican = new Espece("pélican", "", 9500, 2, 3),
        especes["calamar geant"] = new Espece("calamar géant", "calamars géants", 75e3, 3, 6, 16),
        especes.rhinoceros = new Espece("rhinocéros", "rhinocéros", 15e3, 4, 1),
        especes.muscardin = new Espece("muscardin", "", 74e3, 1, 8, 2),
        especes["iguane vert albinos"] = new Espece("iguane vert albinos", "iguanes verts albinos", 78e3, 1, 7, 4),
        especes.perlinsky = new Espece("perlinsky", "", 73e3, 3, 3, 8),
        especes["papillon joyeux"] = new Espece("papillon joyeux", "papillons joyeux", 22500, 1, 5),
        especes["scorpion coton du mexique"] = new Espece(
            "scorpion coton du mexique",
            "scorpions coton du mexique",
            65e3,
            1,
            7,
        ),
        especes.elan = new Espece("élan", "", 26e3, 3, 4),
        especes["couleuvre agile"] = new Espece("couleuvre agile", "couleuvres agiles", 6500, 1, 7),
        especes["lion albinos"] = new Espece("lion albinos", "lions albinos", 2e5, 3, 1, 4),
        especes["raie ventouse"] = new Espece("raie ventouse", "raies ventouse", 14e3, 1, 6),
        especes["girafe albinos"] = new Espece("girafe albinos", "girafes albinos", 5e4, 4, 1, 4),
        especes["raie lunaire"] = new Espece("raie lunaire", "raies lunaires", 62500, 1, 6),
        especes["carpe venimeuse"] = new Espece("carpe venimeuse", "carpes venimeuses", 3e3, 1, 6),
        especes["elaphe noir"] = new Espece("élaphe noir", "élaphes noirs", 55e3, 1, 7, 0, "VIP d'argent"),
        especes.loutre = new Espece("loutre", "", 1e4, 2, 2),
        especes["papillon du crepuscule"] = new Espece("papillon du crépuscule", "papillons du crépuscule", 45e3, 1, 5),
        especes.luciole = new Espece("luciole", "", 26500, 1, 9),
        especes["mamba rouge"] = new Espece("mamba rouge", "mambas rouges", 52e3, 1, 7, 8),
        especes["mante religieuse"] = new Espece("mante religieuse", "mantes religieuses", 35500, 1, 9),
        especes["tortue geante"] = new Espece("tortue géante", "tortues géantes", 55e3, 3, 3, 2),
        especes["aigle royal"] = new Espece("aigle royal", "aigles royaux", 15e3, 1, 5),
        especes["effraie des clochers"] = new Espece("effraie des clochers", "effraies des clochers", 48e3, 1, 8),
        especes.hermine = new Espece("hermine", "", 94e3, 2, 3),
        especes["ara pyrodactile"] = new Espece("ara pyrodactile", "aras pyrodactile", 4e4, 1, 5),
        especes["saumon banni"] = new Espece("saumon banni", "saumons bannis", 3e3, 1, 6),
        especes["saumon ardent"] = new Espece("saumon ardent", "saumons ardents", 2500, 1, 6),
        especes.marmotte = new Espece("marmotte", "", 12e3, 1, 3, 0, "disponible par parrainage"),
        especes["renard polaire"] = new Espece("renard polaire", "renards polaires", 48e3, 2, 3),
        especes["poisson cocher"] = new Espece("poisson cocher", "poissons cocher", 135e3, 1, 6),
        especes["massasauga argente"] = new Espece("massasauga argenté", "massasaugas argentés", 6e4, 1, 7),
        especes.sanglier = new Espece("sanglier", "", 12e3, 3, 4),
        especes["raie des sables"] = new Espece("raie des sables", "raies des sables", 45e3, 1, 6),
        especes["chevre naine"] = new Espece("chèvre naine", "chèvres naines", 8e3, 2, 3),
        especes["iguane vert"] = new Espece("iguane vert", "iguanes verts", 39e3, 1, 7, 2),
        especes.suricate = new Espece("suricate", "", 3e3, 1, 1, 64),
        especes["hippocampe lumineux"] = new Espece("hippocampe lumineux", "hippocampes lumineux", 49e3, 1, 6),
        especes.gavial = new Espece("gavial", "", 26e3, 3, 3, 16),
        especes["panthere noire"] = new Espece("panthère noire", "panthères noires", 4e4, 3, 4),
        especes["aigle antique"] = new Espece("aigle antique", "aigles antiques", 3e3, 1, 5),
        especes["tarentule rosea"] = new Espece("tarentule rosea", "tarentules rosea", 35e3, 1, 7),
        especes["ara fantome"] = new Espece("ara fantôme", "aras fantômes", 7e3, 1, 5),
        especes["cameleon allumette"] = new Espece("cameleon allumette", "cameleons allumette", 41e3, 1, 7),
        especes.colocolo = new Espece("colocolo", "", 9e5, 2, 4, 1),
        especes["raie furtive"] = new Espece("raie furtive", "raies furtives", 3e4, 1, 6, 0, "VIP d'argent"),
    especes.pingouin = new Espece("pingouin", "", 9e4, 2, 3),
    especes["dendrobate bleu"] = new Espece("dendrobate bleu", "dendrobates bleues", 3e4, 1, 3),
    especes.crocodile = new Espece("crocodile", "", 19500, 3, 3, 2),
    especes["poisson clown sable"] = new Espece("poisson clown sable", "poissons clown sable", 32e3, 1, 6),
    especes.herisson = new Espece("hérisson", "", 2e3, 1, 8, 64),
    especes["vipere des dunes"] = new Espece("vipère des dunes", "vipères des dunes", 27e3, 1, 7),
    especes.panthere = new Espece("panthère", "", 32500, 3, 4),
    especes["loup gris"] = new Espece("loup gris", "loups gris", 27500, 3, 4),
    especes["ours rastafarai"] = new Espece("ours rastafarai", "ours rastafarai", 2e5, 4, 2, 32),
    especes["fourmi rousse"] = new Espece("fourmi rousse", "fourmis rousses", 5600, 1, 9),
    especes["renard veloce"] = new Espece("renard véloce", "renards véloces", 15e3, 2, 3),
    especes["ara ararauna"] = new Espece("ara ararauna", "aras ararauna", 3e4, 1, 5),
    especes["cobra royal"] = new Espece("cobra royal", "cobras royal", 23500, 1, 7),
    especes["hibou grand duc"] = new Espece("hibou grand duc", "hiboux grand duc", 34e3, 1, 8),
    especes["panda roux"] = new Espece("panda roux", "pandas roux", 2e5, 2, 4),
    especes["cameleon sanguin"] = new Espece("caméléon sanguin", "caméléons sanguins", 18e3, 1, 7),
    especes["heron agami"] = new Espece("héron agami", "hérons agami", 53e3, 2, 3),
    especes["western pipistrelle"] = new Espece("western pipistrelle", "westerns pipistrelle", 24e3, 1, 8),
    especes["carpe koi"] = new Espece("carpe koï", "carpes koï", 1500, 1, 6),
    especes.hippopotame = new Espece("hippopotame", "", 18500, 4, 3),
    especes.bison = new Espece("bison", "", 21e3, 4, 3),
    especes.zebre = new Espece("zèbre", "", 17e3, 3, 1),
    especes["greta oto"] = new Espece(
        "greta OTO",
        "gretas OTO",
        11e4,
        0,
        5,
        0,
        "se transforme en papillon à un âge aléatoire",
    ),
    especes.fugu = new Espece("fugu", "", 225e3, 1, 6),
    especes["boa constrictor"] = new Espece("boa constrictor", "boas constrictor", 17500, 1, 7, 2),
    especes.lama = new Espece("lama", "", 19e3, 3, 3, 0, "VIP de bronze"),
    especes["vigogne a bosses"] = new Espece("vigogne à bosses", "vigognes à bosses", 26e3, 3, 3, 8),
    especes.cervicapre = new Espece("cervicapre", "", 4e4, 2, 1),
    especes["tarentule infernale"] = new Espece("tarentule infernale", "tarentules infernales", 2e4, 1, 7),
    especes.chamois = new Espece("chamois", "chamois", 16e3, 2, 4, 16),
    especes["hippocampe roux"] = new Espece("hippocampe roux", "hippocampes roux", 22500, 1, 6),
    especes["aigle noir"] = new Espece("aigle noir", "aigles noirs", 11e3, 1, 5),
    especes["poisson clown"] = new Espece("poisson clown", "poissons clown", 17500, 1, 6),
    especes["vautour cendre"] = new Espece("vautour cendre", "vautours cendre", 3500, 1, 5),
    especes["scorpion amazone"] = new Espece("scorpion amazone", "scorpions amazone", 16e3, 1, 7),
    especes.alpaga = new Espece("alpaga", "", 75e3, 3, 3, 1),
    especes["poisson clown cuivre"] = new Espece("poisson clown cuivre", "poissons clown cuivre", 1e4, 1, 6),
    especes.cygne = new Espece("cygne", "", 9e3, 2, 3),
    especes["barbotte nicoise"] = new Espece("barbotte niçoise", "barbottes niçoises", 7500, 1, 6),
    especes["grand tetra"] = new Espece("grand tétras", "grands tétras", 17500, 2, 5),
    especes["flamant rose"] = new Espece("flamant rose", "flamants roses", 7e3, 2, 3),
    especes["copris lunaire"] = new Espece("copris lunaire", "copris lunaires", 47e3, 1, 9),
    especes["saumon rouge gorge"] = new Espece("saumon rouge gorge", "saumons rouge gorge", 5500, 1, 6),
    especes["ange royal"] = new Espece("ange royal", "anges royaux", 25e4, 1, 6),
    especes["scorpion africain"] = new Espece("scorpion africain", "scorpions africains", 5400, 1, 7),
    especes["ibis sacre"] = new Espece("ibis sacré", "ibis sacrés", 14e4, 1, 5),
    especes["vautour imperial"] = new Espece("vautour impérial", "vautours impériaux", 5e3, 1, 5),
    especes["faisan dore"] = new Espece("faisan doré", "faisans dorés", 7e4, 1, 5),
    especes["mygale moderatum"] = new Espece("mygale moderatum", "mygales moderatum", 5e3, 1, 7),
    especes["gypaete barbu"] = new Espece("gypaète barbu", "gypaètes barbus", 9e3, 1, 5),
    especes["papillon du soleil"] = new Espece("papillon du soleil", "papillons du soleil", 4e3, 1, 5),
    especes["blue dragon"] = new Espece("blue dragon", "blue dragons", 25e3, 1, 6),
    especes["barbotte du mistral"] = new Espece("barbotte du mistral", "barbottes du mistral", 4e3, 1, 6),
    especes.phacochere = new Espece("phacochère", "", 13e3, 2, 1),
    especes["carpe ancestrale"] = new Espece("carpe ancestrale", "carpes ancestrales", 5e3, 1, 6),
    especes["raton laveur"] = new Espece("raton laveur", "ratons laveurs", 9e4, 2, 4),
    especes["cobra perce roches"] = new Espece("cobra perce roches", "cobras perce roches", 3500, 1, 7),
    especes.licorne = new Espece("licorne", "", 85e4, 3, 3, 8),
    especes["vautour des marais"] = new Espece("vautour des marais", "vautours des marais", 2500, 1, 5),
    especes.olinguito = new Espece("olinguito", "", 19e4, 2, 8),
    especes.sasquatch = new Espece("sasquatch", "", 35e4, 4, 4, 0, "nait de parents gorilles un jour de neige"),
    especes.girafe = new Espece("girafe", "", 25e3, 4, 1, 2),
    especes["condor des andes"] = new Espece("condor des andes", "condors des andes", 95e3, 2, 5, 0, "VIP de diamant"),
    especes.kangourou = new Espece("kangourou", "", 5e4, 3, 1, 2),
    especes["criquet du mato grosso"] = new Espece("criquet du mato grosso", "criquets du mato grosso", 85e3, 1, 9),
    especes.nautile = new Espece("nautile", "", 7200, 1, 6),
    especes["phalanger renard"] = new Espece("phalanger renard", "phalangers renards", 85e3, 2, 8),
    especes.anaconda = new Espece("anaconda", "", 142e3, 3, 7),
    especes.puma = new Espece("puma", "", 57e3, 3, 4),
    especes["dauphin bec court"] = new Espece("dauphin à bec court", "dauphins à bec court", 22e4, 3, 2),
    especes["musaraigne elephant"] = new Espece("musaraigne éléphant", "musaraignes éléphants", 54e3, 1, 8),
    especes.lamantin = new Espece("lamantin", "", 35e4, 4, 2, 2),
    especes["tortue caouanne"] = new Espece("tortue caouanne", "tortues caouannes", 42e3, 2, 2, 0, "VIP de bronze"),
    especes.fossa = new Espece("fossa", "", 275e3, 3, 4),
    especes["poulpe a anneaux bleus"] = new Espece("poulpe à anneaux bleus", "poulpes à anneaux bleus", 36e3, 1, 6),
    especes.hemione = new Espece("hémione", "", 115e3, 3, 3),
    especes["murene commune"] = new Espece("murène commune", "murènes communes", 28e3, 2, 6),
    especes["etoile de mer"] = new Espece("étoile de mer", "étoiles de mer", 2500, 1, 2, 64),
    especes["leopard de mer"] = new Espece("léopard de mer", "léopards de mer", 25e3, 3, 2),
    especes["buffle du cap"] = new Espece("buffle du cap", "buffles du cap", 23500, 3, 1),
    especes["lemming des toundras"] = new Espece("lemming des toundras", "lemmings des toundras", 16e3, 1, 8),
    especes.markhor = new Espece("markhor", "", 95e4, 3, 3),
    especes["manchot empereur"] = new Espece("manchot empereur", "manchots empereurs", 19e3, 2, 2),
    especes.abeille = new Espece("abeille", "", 29e3, 1, 9),
    especes["crotale diamantin"] = new Espece("crotale diamantin", "crotales diamantins", 9e3, 1, 7),
    especes.viscache = new Espece("viscache", "", 7500, 1, 1),
    especes["cigogne blanche"] = new Espece("cigogne blanche", "cigognes blanches", 6e3, 2, 5, 16),
    especes.casoar = new Espece("casoar", "", 3e5, 2, 4),
    especes["hippocampe divin"] = new Espece("hippocampe divin", "hippocampes divin", 5e5, 1, 6, 32),
    especes.quokka = new Espece("quokka", "", 15e4, 1, 1),
    especes["muscardin albinos"] = new Espece("muscardin albinos", "muscardins albinos", 148e3, 1, 8, 4),
    especes.autruche = new Espece("autruche", "", 12e3, 2, 1),
    especes["dauphin albinos"] = new Espece("dauphin albinos", "dauphins albinos", 12e4, 3, 2, 4),
    especes.genette = new Espece("genette", "", 217e3, 2, 8),
    especes["kangourou albinos"] = new Espece("kangourou albinos", "kangourous albinos", 1e5, 3, 1, 4),
    especes.piranha = new Espece("piranha", "", 82e3, 1, 6),
    especes["caribou de noel"] = new Espece("caribou de noël", "caribous de noël", 79e3, 3, 4, 32),
    especes.gazelle = new Espece("gazelle", "", 6e3, 2, 1),
    especes.cariama = new Espece(
        "cariama",
        "",
        2e5,
        1,
        5,
        0,
        "nécessite d'avoir le loup noir qui est débloqué avec la mission avancée 19",
    ),
    especes["chimpanze zombie"] = new Espece("chimpanzé zombie", "chimpanzés zombie", 55e3, 2, 4, 32),
    especes.margay = new Espece("margay", "", 39e3, 2, 4),
    especes.manul = new Espece("manul", "", 123e3, 2, 3, 0, "débloquée avec la mission avancée 28"),
    especes.ecureuil = new Espece("écureuil", "", 1e3, 1, 4, 66),
    especes["gorille albinos"] = new Espece("gorille albinos", "gorilles albinos", 46e3, 4, 4, 4),
    especes.colombe = new Espece("colombe", "", 15e3, 1, 5, 32),
    especes["crocodile albinos"] = new Espece("crocodile albinos", "crocodiles albinos", 39e3, 3, 3, 4),
    especes.lycaon = new Espece("lycaon", "", 45e4, 2, 1),
    especes["boa constrictor albinos"] = new Espece(
        "boa constrictor albinos",
        "boas constrictor albinos",
        35e3,
        1,
        7,
        4,
    ),
    especes.lion = new Espece("lion", "", 1e5, 3, 1, 2),
    especes["grabote de paques"] = new Espece("grabote de Pâques", "grabotes de Pâques", 7e3, 1, 6, 64),
    especes.oryx = new Espece("oryx", "oryx", 75e3, 3, 1),
    especes["colibri thalassin"] = new Espece("colibri thalassin", "colibris thalassin", 5e3, 1, 5, 64),
    especes.once = new Espece("once", "", 35e4, 3, 3),
    especes["elephant rose"] = new Espece("éléphant rose", "éléphants roses", 45e3, 4, 1, 32),
    especes.dingo = new Espece("dingo", "", 22e3, 2, 1, 1),
    especes.percnoptere = new Espece("percnoptère", "", 125e3, 1, 5, 0, "oeuf trouvé par le chien et le super espion"),
    especes.lynx = new Espece("lynx", "lynx", 35e3, 3, 4),
    especes["rainette verte"] = new Espece("rainette verte", "rainettes vertes", 500, 1, 3, 64),
    especes.morse = new Espece("morse", "", 32e3, 3, 2),
    especes["porc kunekune"] = new Espece(
        "porc kunekune",
        "porcs kunekune",
        65e3,
        3,
        3,
        0,
        "disponible certains jours de grand soleil",
    ),
    especes["gecko poudre d or"] = new Espece("gecko poudre d'or", "geckos poudre d'or", 3e3, 1, 7, 64),
    especes.elephant = new Espece("éléphant", "", 3e4, 4, 1),
    especes["coccinelle a 7 points"] = new Espece("coccinelle à 7 points", "coccinelles à 7 points", 2500, 1, 9, 64),
    especes.guepard = new Espece("guépard", "", 175e3, 3, 1),
    especes["bernard l ermite"] = new Espece("bernard-l'ermite", "bernard-l'ermite", 2e3, 1, 6, 64),
    especes.axolotl = new Espece("axolotl", "", 72e3, 1, 6, 1),
    especes["perroquet gris du gabon"] = new Espece(
        "perroquet gris du gabon",
        "perroquets gris du gabon",
        25e3,
        1,
        5,
        1,
    ),
    especes.caribou = new Espece("caribou", "", 55e3, 3, 4),
    especes["phasme baton du diable"] = new Espece("phasme bâton du diable", "Phasmes bâton du diable", 14500, 1, 9),
    especes.orque = new Espece("orque", "", 7e4, 4, 2, 2),
    especes["sternocera aequisignata"] = new Espece(
        "sternocera aequisignata",
        "sternocera aequisignata",
        19500,
        1,
        9,
        1,
    ),
    especes.gorille = new Espece("gorille", "", 23e3, 4, 4, 2),
    especes["cardinal rouge"] = new Espece("cardinal rouge", "cardinaux rouges", 12500, 1, 5, 0, "oeuf mystérieux"),
    especes.castor = new Espece("castor", "", 17e3, 2, 3),
    especes["jaseur boreal"] = new Espece("jaseur boréal", "jaseurs boréals", 5e4, 1, 5, 0, "oeuf mystérieux"),
    especes.narval = new Espece("narval", "", 3e5, 3, 2, 16),
    especes["tuit tuit"] = new Espece("tuit-tuit", "tuit-tuit", 185e3, 1, 5, 0, "oeuf mystérieux"),
    especes.napoleon = new Espece("napoléon", "", 11e4, 2, 6),
    especes["libellule deesse precieuse"] = new Espece(
        "libellule déesse précieuse",
        "libellules déesses précieuses",
        2e5,
        1,
        9,
        1,
    ),
    especes["chouette leptogramme"] = new Espece("chouette leptogramme", "chouettes leptogrammes", 63e3, 1, 8, 1),
    especes.dauphin = new Espece("dauphin", "", 6e4, 3, 2, 2),
    especes["bourdon terrestre"] = new Espece("bourdon terrestre", "bourdons terrestres", 9e3, 1, 9),
    especes.beluga = new Espece("béluga", "", 26e4, 4, 2),
    especes["rhinopitheque de chine"] = new Espece("rhinopithèque de chine", "rhinopithèques de chine", 39e4, 1, 4),
    especes.gerenuk = new Espece("gérénuk", "", 27500, 2, 1, 16),
    especes["dauphin d hector"] = new Espece("dauphin d hector", "dauphins d hector", 8e5, 2, 2),
    especes.kakapo = new Espece("kakapo", "", 133e3, 2, 8),
    especes["diable de tasmanie"] = new Espece("diable de Tasmanie", "diables de Tasmanie", 175e3, 1, 8),
    especes.komondor = new Espece("komondor", "", 215e3, 3, 3, 1),
    especes["touraco de schalow"] = new Espece(
        "touraco de Schalow",
        "touracos de Schalow",
        17e4,
        1,
        5,
        0,
        "disponible par parrainage",
    ),
    especes["canard mandarin"] = new Espece(
        "canard mandarin",
        "canards mandarin",
        32e3,
        1,
        3,
        0,
        "disponible par parrainage",
    ),
    especes.saiga = new Espece("saïga", "", 4e5, 2, 1),
    especes["serpent nasique"] = new Espece(
        "serpent nasique",
        "serpents nasiques",
        225e3,
        1,
        7,
        0,
        "débloquée avec la mission avancée 9",
    ),
    especes["phasme feuille de java"] = new Espece("phasme feuille de java", "phasmes feuille de java", 2e4, 1, 9, 64),
    especes.panda = new Espece("panda", "", 35e4, 3, 4),
    especes["lucane cyclommatus"] = new Espece("lucanes cyclommatus", "lucane cyclommatus", 9e3, 1, 9),
    especes.tigre = new Espece("tigre", "", 125e3, 4, 4),
    especes["lezard cuirasse"] = new Espece("lézard cuirassé", "lézards cuirassés", 32e3, 1, 7),
    especes.fennec = new Espece("fennec", "", 7e4, 2, 1, 16),
    especes["manchot antipode"] = new Espece("manchot antipode", "manchots antipodes", 18e4, 2, 2),
    especes.ouistiti = new Espece("ouistiti", "", 7e4, 2, 4),
    especes["loup a criniere"] = new Espece("loup à crinière", "loups à crinière", 325e3, 3, 4),
    especes.unau = new Espece("unau", "", 23e4, 3, 4, 0, "VIP d'or"),
    especes["fourmi panda"] = new Espece(
        "fourmi panda",
        "fourmis pandas",
        245e3,
        1,
        9,
        0,
        "débloquée avec la mission avancée 14",
    ),
    especes["chenille de la breche"] = new Espece(
        "chenille de la brèche",
        "chenilles de la brèche",
        12e3,
        1,
        9,
        0,
        "débloquée après 10 mises à jour d'affilée",
    ),
    especes["faucon pelerin"] = new Espece(
        "faucon pélerin",
        "faucons pélerins",
        2e4,
        1,
        5,
        0,
        "débloquée après 20 mises à jour d'affilée",
    ),
    especes["poisson chirurgien"] = new Espece(
        "poisson chirurgien",
        "poissons chirurgiens",
        2e4,
        1,
        6,
        0,
        "débloquée après 35 mises à jour d'affilée",
    ),
    especes.coati = new Espece("coati", "", 45e3, 1, 4, 0, "débloquée après 50 mises à jour d'affilée"),
    especes.pangolin = new Espece("pangolin", "", 6e4, 2, 1, 16),
    especes["phoque moine"] = new Espece(
        "phoque moine",
        "phoques moines",
        6e5,
        2,
        2,
        0,
        "débloquée après 60 mises à jour d'affilée",
    ),
    especes["loup noir"] = new Espece(
        "loup noir",
        "loups noirs",
        128e3,
        3,
        4,
        0,
        "débloquée avec la mission avancée 19, stocks à 5 lors de tornade",
    ),
    especes["porc vietnamien"] = new Espece(
        "porc vietnamien",
        "porcs vietnamiens",
        37e3,
        3,
        3,
        0,
        "disponible certains jours de grand soleil",
    ),
    especes["porc large white"] = new Espece(
        "porc large white",
        "porcs larges white",
        1e4,
        4,
        3,
        0,
        "disponible certains jours de grand soleil",
    ),
    especes["shagya criniere de feu albinos"] = new Espece(
        "shagya crinière de feu albinos",
        "shagyas crinière de feu albinos",
        15e5,
        3,
        3,
        4,
        "débloquée avec la mission avancée 16",
    ),
    especes["cameleon des roches"] = new Espece("caméléon des roches", "caméléons des roches", 6e3, 1, 7),
    especes["tortue geante albinos"] = new Espece(
        "tortue géante albinos",
        "tortues géantes albinos",
        11e4,
        3,
        3,
        4,
        "débloquée avec la mission avancée 16",
    ),
    especes["orque albinos"] = new Espece(
        "orque albinos",
        "orques albinos",
        14e4,
        4,
        2,
        4,
        "débloquée avec la mission avancée 16",
    ),
    especes["ecureuil albinos"] = new Espece(
        "écureuil albinos",
        "écureuils albinos",
        2e3,
        1,
        4,
        4,
        "débloquée avec la mission avancée 16",
    ),
    especes["chat de temminck"] = new Espece(
        "chat de Temminck",
        "chats de Temminck",
        425e3,
        2,
        4,
        2,
        "débloquée avec la mission avancée 28",
    ),
    especes["chat de temminck albinos"] = new Espece(
        "chat de Temminck albinos",
        "chats de Temminck albinos",
        75e4,
        2,
        4,
        4,
        "débloquée avec la mission avancée 28",
    ),
    especes["chat des sables"] = new Espece(
        "chat des sables",
        "chats des sables",
        8e4,
        2,
        1,
        0,
        "débloquée avec la mission avancée 28",
    ),
    especes["rosalie des alpes"] = new Espece(
        "rosalie des Alpes",
        "rosalies des Alpes",
        315e3,
        1,
        9,
        0,
        "VIP de diamant",
    ),
    especes.kiwi = new Espece("kiwi", "", 41e3, 1, 8),
    especes["requin scie"] = new Espece(
        "requin scie",
        "requins scie",
        15e4,
        2,
        2,
        0,
        "débloquée avec la mission avancée 35",
    ),
    especes["nasique de borneo"] = new Espece(
        "nasique de Bornéo",
        "nasiques de Bornéo",
        11e4,
        2,
        4,
        0,
        "débloquée avec la mission avancée 31",
    ),
    especes["lamantin albinos"] = new Espece("lamantin albinos", "lamantins albinos", 5e5, 4, 2, 4),
    especes.tatou = new Espece("tatou", "", 45e3, 2, 3, 16),
    especes["requin nourrice albinos"] = new Espece(
        "requin nourrice albinos",
        "requins nourrices albinos",
        21e4,
        3,
        2,
        4,
        "débloquée avec la mission avancée 37",
    ),
    especes["mamba noir albinos"] = new Espece(
        "mamba noir albinos",
        "mambas noirs albinos",
        1e5,
        1,
        7,
        4,
        "débloquée avec la mission avancée 39",
    ),
    especes["tyrannosaure albinos"] = new Espece("tyrannosaure albinos", "tyrannosaures albinos", 1e6, 4, 10, 4),
    especes.sarcosuchus = new Espece(
        "sarcosuchus",
        "sarcosuchus",
        75e4,
        4,
        10,
        0,
        "débloquée avec la mission avancée 34",
    ),
    especes.tyrannosaure = new Espece("tyrannosaure", "", 75e4, 4, 10, 2),
    especes.mosasaure = new Espece("mosasaure", "", 3e5, 4, 10),
    especes.spinosaure = new Espece("spinosaure", "", 3e5, 4, 10),
    especes.velociraptor = new Espece("vélociraptor", "", 3e5, 2, 10),
    especes.ankylosaure = new Espece("ankylosaure", "", 125e3, 4, 10),
    especes.dilophosaure = new Espece("dilophosaure", "", 125e3, 3, 10),
    especes.pachycephalosaure = new Espece("pachycephalosaure", "", 125e3, 4, 10),
    especes.triceratops = new Espece("triceratops", "triceratops", 125e3, 4, 10),
    especes.diplodocus = new Espece("diplodocus", "diplodocus", 5e4, 4, 10),
    especes.parasaure = new Espece("parasaure", "", 5e4, 4, 10),
    especes.pteranodon = new Espece("ptéranodon", "", 5e4, 2, 10),
    especes.sarcosaure = new Espece("sarcosaure", "", 5e4, 3, 10),
    especes.stegosaure = new Espece("stégosaure", "", 5e4, 4, 10),
    especes.amargasaure = new Espece("amargasaure", "", 50000, 0, 10),
    especes.edmontosaure = new Espece("edmontosaure", "", 500000, 0, 10),
    especes["cerf huppe"] = new Espece("cerf huppé", "cerfs huppés", 185000, 0, 4),
    especes.gibbon = new Espece("gibbon", "", 245000, 0, 4),
    especes.tamarin = new Espece("tamarin", "", 370000, 0, 4),
    especes["chien viverin"] = new Espece("chien viverin", "chiens viverins", 282500, 0, 3),
    especes["macareux moine"] = new Espece("macareux moine", "macareux moines", 475000, 0, 3),
    especes["mammouth laineux"] = new Espece("mammouth laineux", "mammouths laineux", 650000, 0, 3),
    especes["renard melanique"] = new Espece("renard mélanique", "renards mélaniques", 100000, 0, 3),
    especes["huppe fasciee"] = new Espece("huppe fasciée", "huppes fasciées", 55000, 0, 5),
    especes["mante orchidee"] = new Espece("mante orchidée", "mantes orchidées", 68000, 0, 9),
    especes["ombonie epineuse"] = new Espece("ombonie épineuse", "ombonies épineuses", 145000, 0, 9),
    especes["poisson perroquet"] = new Espece("poisson perroquet", "poissons perroquets", 200000, 0, 6),
    especes["requin baleine"] = new Espece("requin baleine", "requins baleines", 325000, 0, 2),
    especes["tenrec zebre"] = new Espece("tenrec zébré", "tenrecs zébrés", 240000, 0, 8),
    especes["vipere velue"] = new Espece("vipère velue", "vipères velues", 275000, 0, 7),
    indexBoucle = 0;
    indexBoucle < especesAjoutees.length;
    indexBoucle++
)
    null === especesAjoutees[indexBoucle]
        ? (especesAjoutees.splice(indexBoucle, 1), indexBoucle--)
        : "object" != typeof especesAjoutees[indexBoucle]
            ? (especesAjoutees.splice(indexBoucle, 1), indexBoucle--)
            : especesAjoutees[indexBoucle].hasOwnProperty("nom")
                ? especes[especesAjoutees[indexBoucle].nom]
                    ? (especesAjoutees.splice(indexBoucle, 1), indexBoucle--)
                    : (especes[especesAjoutees[indexBoucle].nom] = new Espece(
                        especesAjoutees[indexBoucle].singulier,
                        especesAjoutees[indexBoucle].pluriel,
                        especesAjoutees[indexBoucle].prix,
                        especesAjoutees[indexBoucle].gabarit,
                        especesAjoutees[indexBoucle].enclos,
                        especesAjoutees[indexBoucle].binaire,
                        especesAjoutees[indexBoucle].VIP,
                    ))
                : (especesAjoutees.splice(indexBoucle, 1), indexBoucle--);
if (
    (0 !== Object.keys(especesAjoutees).length
        ? GM_setValue("animauxajt", JSON.stringify(especesAjoutees))
        : GM_deleteValue("animauxajt"),
        (pageCourante = /forumv2/.test(window.location)
            ? "forum"
            : $('[name="pseudo"]').length && $('[name="passe"]').length
                ? "accueil"
                : /zonemembre.php/.test(window.location)
                    ? "carte"
                    : /enclosgestion1?.php/.test(window.location) && -1 != parBalise("strong")[0].textContent.indexOf("construire")
                        ? "achat"
                        : /enclosgestion1?.php/.test(window.location)
                            ? "enclos"
                            : /achat_animaux2?.php/.test(window.location)
                                ? "achat"
                                : /achat_animauxconfirm2?.php/.test(window.location)
                                    ? "achatConfirmation"
                                    : /enclosconfirm.php/.test(window.location)
                                        ? "achatConfirmation"
                                        : /vente_animaux_group.php/.test(window.location)
                                            ? "vente_multiple"
                                            : /vente_animaux.php/.test(window.location)
                                                ? "vente"
                                                : /event.php/.test(window.location)
                                                    ? "messages"
                                                    : /espion.php/.test(window.location)
                                                        ? "espion"
                                                        : /bureau.php/.test(window.location)
                                                            ? "personnel"
                                                            : /bureau2.php/.test(window.location)
                                                                ? "recettes"
                                                                : /bureau3/.test(window.location)
                                                                    ? "banque"
                                                                    : /bureau4.php/.test(window.location)
                                                                        ? "stocks"
                                                                        : /bureau5.php\?faune/.test(window.location)
                                                                            ? "faune"
                                                                            : /\/animaux.php/.test(window.location)
                                                                                ? "intendance"
                                                                                : /bourse.php/.test(window.location)
                                                                                    ? "bourse"
                                                                                    : /missions.php/.test(window.location)
                                                                                        ? "missions"
                                                                                        : /news.php/.test(window.location)
                                                                                            ? "news"
                                                                                            : /classement.php/.test(window.location)
                                                                                                ? "classement"
                                                                                                : /team.php/.test(window.location)
                                                                                                    ? "team"
                                                                                                    : /musee.php/.test(window.location)
                                                                                                        ? "musee"
                                                                                                        : /botanica.php/.test(window.location)
                                                                                                            ? "botanica"
                                                                                                            : /regle.php/.test(window.location)
                                                                                                                ? "regles"
                                                                                                                : /toutou\.php/.test(window.location)
                                                                                                                    ? "toutou"
                                                                                                                    : /maj_bonus.php/.test(window.location)
                                                                                                                        ? "majbonus"
                                                                                                                        : "aDeterminer"),
    nomZoo && "forum" != pageCourante)
) {
    var scriptInterrompu = !1;
    if (!dateJeu)
        throw (
            alert(
                "Suite à une modification du fonctionnement du script\npour la vérification des maj du jeu,\nmerci de vous déconnecter afin d'initialiser une variable.",
            ),
                ""
        );
    (initialiserParc(), "carte" == pageCourante && (GM_deleteValue("maj_PA"), GM_deleteValue("maj_PA2")));
    var idMajActuelle = identifiantMajActuelle(),
        scanMajEnCours = GM_getValue("maj_PA", !1) || GM_getValue("maj_PA2", !1);
    idMajActuelle != dateJeu + "/" + (heureJeu < 14 ? 1 : 2) &&
    idMajActuelle != GM_getValue("verifauj", "") &&
    parc.premier_scan &&
    parc.infoscan.scan_messages &&
    parc.infoscan.scan_suite &&
    !scanMajEnCours &&
    (alert(
        "Le site de monzoo a changé de MAJ.\nVous pouvez la lancer quand vous voulez simplement\nen vous déconnectant et en vous reconnectant",
    ),
        GM_setValue("verifauj", idMajActuelle));
    var numVersion = versionScript.replace(/\./g, "");
    if (
        (numVersion != GM_getValue("numversion", "") &&
        (GM_setValue("numversion", numVersion), (scriptInterrompu = !0), afficherNotesVersion()),
            !scriptInterrompu)
    ) {
        var formulaire,
            tables,
            cellules,
            images,
            champsInput,
            divs,
            idEnclos,
            prochainEnclosAVerifier,
            compteursMissions,
            lignes,
            especesPossedees,
            nomsBoutiques,
            nomsStocks,
            especesParEnclos,
            especesVisiteParrainage,
            typesEnclosBourse,
            nomsFiltresBourse,
            libellesFiltres,
            htmlTemp,
            stockLu,
            urlTemp,
            filtreSelection = "";
        switch (
            (parc.premier_scan &&
            parc.infoscan.scan_messages &&
            parc.infoscan.scan_suite &&
            !scanMajEnCours &&
            (creerPanda(), completerMenu()),
                pageCourante)
            ) {
            case "carte":
                if (
                    (journaliser("Carte"),
                        parc.premier_scan
                            ? !parc.ilefait &&
                            ($("<div>")
                                .html(
                                    "Bonjour,<br><br>le script ne connaît pas l'île aux dinos pour ce parc.<br>Une initialisation est nécessaire&nbsp;: cliquez sur 'Ok' et patientez",
                                )
                                .dialog({
                                    title: "Avertissement",
                                    width: 500,
                                    buttons: {
                                        Ok: function () {
                                            $(this).dialog("close");
                                        },
                                    },
                                    close: function () {
                                        window.location.href = urlBase + "animaux.php?choix_type=ile aux dinos";
                                    },
                                }),
                                (parc.premier_scan = !1),
                                (scriptInterrompu = !0))
                            : ($("<div>")
                                .html(
                                    "Bonjour,<br><br>le script ne connaît pas ce parc.<br>Un premier scan va être lancé automatiquement.<br>Merci de patienter jusqu'à ce qu'il se termine.",
                                )
                                .dialog({
                                    title: "Avertissement",
                                    width: 500,
                                    buttons: {
                                        Ok: function () {
                                            $(this).dialog("close");
                                        },
                                    },
                                    close: function () {
                                        (GM_setValue("maj_a_faire", !0),
                                            GM_deleteValue("maj_bonus"),
                                            (window.location.href = urlBase + "animaux.php?choix_type=savane"));
                                    },
                                }),
                                (scriptInterrompu = !0)),
                        !scriptInterrompu)
                ) {
                    for (
                        !GM_getValue("maj_a_faire", !1) &&
                        ((idMajActuelle == dateJeu + "/" + (heureJeu < 14 ? 1 : 2) &&
                                (parc.infoscan.dateConnexion != dateJeu ||
                                    (parc.mises_a_jour.matin && !parc.mises_a_jour.am && heureJeu >= 14))) ||
                            /zonemembre.php\?maj_bonus/.test(window.location)) &&
                        (GM_setValue("maj_a_faire", !0),
                        /zonemembre.php\?maj_bonus/.test(window.location) && GM_setValue("maj_bonus", !0)),
                        GM_getValue("maj_a_faire", !1) && (proposerScanMaj(), (scriptInterrompu = !0)),
                            images = parBalise("img"),
                            indexBoucle = 0,
                            limiteBoucle = images.length;
                        indexBoucle < limiteBoucle && !/bandeau_maj/.test(images[indexBoucle].src);
                        indexBoucle++
                    );
                    if (indexBoucle < limiteBoucle) {
                        var imageBandeauMaj = images[indexBoucle];
                        (parId("defi") && imageBandeauMaj.parentNode.insertBefore(parId("defi"), imageBandeauMaj),
                            imageBandeauMaj.parentNode.insertBefore(parId("bloc1"), imageBandeauMaj),
                            (parId("bloc1").innerHTML = parId("bloc1").innerHTML.replace(/avant samedi 23h/g, "et")));
                    }
                    for (indexBoucle = 0; indexBoucle < limiteBoucle; indexBoucle++)
                        (/meteo0/.test(images[indexBoucle].src) &&
                        (images[indexBoucle].setAttribute("onmousemove", "Tip('Grand soleil')"),
                            images[indexBoucle].setAttribute("onmouseout", "UnTip()")),
                        /meteo1/.test(images[indexBoucle].src) &&
                        (images[indexBoucle].setAttribute("onmousemove", "Tip('Beau temps')"),
                            images[indexBoucle].setAttribute("onmouseout", "UnTip()")));
                    var texteNews;
                    if (
                        ((elementsTemp = $("a")).each(function () {
                            if ("news.php" == elementsTemp.filter(this).attr("href"))
                                return (
                                    (texteNews = elementsTemp.filter(this).text()),
                                    (!prefsUtilisateur.hasOwnProperty("news") || texteNews != prefsUtilisateur.news) &&
                                    (GM_setValue("news", texteNews),
                                        creerBulle({
                                            id: "news",
                                            titre: "Nouvelle news",
                                            contenu: '<a id="news" href="news.php">' + texteNews + "</a>",
                                            container_options: {
                                                "min-width": "400px",
                                                "z-index": "5000",
                                            },
                                            position: {
                                                top: 5,
                                                left: parseInt($(window).width() / 2 - 200, 10),
                                            },
                                        })),
                                        !1
                                );
                        }),
                        !scriptInterrompu && "" != parc.infoscan.attraction)
                    ) {
                        GM_addStyle("#contenu_attraction {overflow-y:auto}");
                        var imageAttraction = "";
                        (/fennec/i.test(parc.infoscan.attraction)
                            ? (imageAttraction = "savane_fennec.jpg")
                            : /calamar géant/i.test(parc.infoscan.attraction)
                                ? (imageAttraction = "aquarium_calamar geant.jpg")
                                : /tatou/i.test(parc.infoscan.attraction)
                                    ? (imageAttraction = "terre_tatou.jpg")
                                    : /tapir/i.test(parc.infoscan.attraction)
                                        ? (imageAttraction = "foret_tapir.jpg")
                                        : /requin marteau/i.test(parc.infoscan.attraction)
                                            ? (imageAttraction = "bassin_requin marteau.jpg")
                                            : /narval/i.test(parc.infoscan.attraction)
                                                ? (imageAttraction = "bassin_narval.jpg")
                                                : /gerenuk|gérénuk/i.test(parc.infoscan.attraction)
                                                    ? (imageAttraction = "savane_gerenuk.jpg")
                                                    : /pangolin/i.test(parc.infoscan.attraction)
                                                        ? (imageAttraction = "savane_pangolin.jpg")
                                                        : /gavial/i.test(parc.infoscan.attraction)
                                                            ? (imageAttraction = "terre_gavial.jpg")
                                                            : /chamois/i.test(parc.infoscan.attraction)
                                                                ? (imageAttraction = "foret_chamois.jpg")
                                                                : /cigogne blanche/i.test(parc.infoscan.attraction) &&
                                                                (imageAttraction = "voliere_cigogne blanche.jpg"),
                        "" != imageAttraction &&
                        (imageAttraction =
                            '<img style="text-align:center;height:80px;width:80px" src="images/animaux/' +
                            imageAttraction +
                            '">'),
                            creerBulle({
                                id: "attraction",
                                titre: "Attraction exceptionnelle dans votre parc !",
                                contenu:
                                    '<div id="attraction"><div style="text-align:center;margin:5px">' +
                                    parc.infoscan.attraction.substring(44) +
                                    '</div><div style="text-align:center;min-height:84px">' +
                                    imageAttraction +
                                    "</div></div>",
                                container_options: {
                                    "min-width": "400px",
                                    "max-width": "400px",
                                    "z-index": "5000",
                                },
                                position: {
                                    top: 55,
                                    left: parseInt($(window).width() / 2 - 200, 10),
                                },
                            }));
                    }
                }
                break;
            case "toutou":
                (journaliser("Toutou"),
                parc.premier_scan ||
                (parNom("Submit").length > 0
                    ? alert("Le script reprendra après que vous ayez baptisé votre toutou")
                    : ((parc.toutou = !0),
                        (parc.premier_scan = !0),
                        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
                        (window.location.href = urlBase + "zonemembre.php"))));
                break;
            case "news":
                (journaliser("News"),
                "" != GM_getValue("news", "") && (prefsUtilisateur.news = GM_getValue("news")),
                    GM_deleteValue("news"));
                break;
            case "espion":
                for (
                    journaliser("Espions"), divs = parBalise("div"), texteTemp = "", indexBoucle = 0, limiteBoucle = divs.length;
                    indexBoucle < limiteBoucle;
                    indexBoucle++
                )
                    if ("10px" == divs[indexBoucle].style.padding) {
                        texteTemp = divs[indexBoucle].innerHTML;
                        break;
                    }
                ("" !== texteTemp &&
                (/Votre espion a r/.test(texteTemp)
                    ? parc.infoscan.vols.push(
                        "un animal de l'espèce " +
                        texteTemp
                            .substring(
                                texteTemp.indexOf("Votre espion a réussi à") + 67,
                                texteTemp.indexOf("Ce dernier a été") - 2,
                            )
                            .replace(/<b>|<\/b>/g, "")
                            .toLowerCase() +
                        " pour " +
                        texteTemp.substring(texteTemp.indexOf("Ce dernier a été rev") + 70).replace(/<b>|<\/b>/g, ""),
                    )
                    : /Votre espion vient de/.test(texteTemp)
                        ? parc.infoscan.vols.push(
                            texteTemp
                                .slice(
                                    texteTemp.indexOf("Votre espion vient") + 28 + (-1 != texteTemp.indexOf("trouver") ? 2 : 0),
                                    -1,
                                )
                                .replace(" dans votre parc concurent", "")
                                .replace(/<b>|<\/b>/g, "")
                                .replace(", elle", " qui"),
                        )
                        : /Votre super espion vient de/.test(texteTemp)
                            ? parc.infoscan.vols.push(
                                texteTemp
                                    .slice(texteTemp.indexOf("trouver") + 8, -1)
                                    .replace(/<b>|<\/b>/g, "")
                                    .replace(", elle", " qui"),
                            )
                            : /fouineur hors pair/.test(texteTemp)
                                ? parc.infoscan.vols.push(texteTemp.slice(texteTemp.indexOf("trouver") + 8, -1))
                                : /Vous allez pouvoir/.test(texteTemp)
                                    ? parc.infoscan.vols.push(
                                        texteTemp
                                            .slice(texteTemp.indexOf("il vient") + 18, -1)
                                            .replace(" dans un parc concurent", "")
                                            .replace("et elle", "qui"),
                                    )
                                    : "green" == divs[indexBoucle].style["border-color"] &&
                                    parc.infoscan.vols.push(
                                        texteTemp
                                            .replace(" dans un parc concurent", "")
                                            .replace(" dans votre parc concurent", "")
                                            .replace(/<b>|<\/b>/g, ""),
                                    )),
                parc.infoscan.scan_suite ||
                (parBalise("input")
                    ? declencherClic(parBalise("input")[0])
                    : (window.location.href = urlBase + "bureau4.php")));
                break;
            case "personnel":
                journaliser("Personnel");
                break;
            case "recettes":
                var lienBoutique;
                for (
                    journaliser("Recettes"),
                        GM_addStyle(
                            ".lien_boutique img {opacity:0.7;border:1px solid #FCF0DB}.lien_boutique:hover img {cursor:pointer;opacity:1;border:1px solid #D19260}",
                        ),
                        nomsBoutiques = ["souvenirs", "restauration rapide", "boissons", "glaces"],
                        cellules = parBalise("td", parBalise("tr", parBalise("table")[6])[0]),
                        indexBoucle = 0;
                    indexBoucle < 4;
                    indexBoucle++
                )
                    ((lienBoutique = creerElement("a", {
                        className: "lien_boutique",
                        href: "enclosgestion.php?t=4&v=" + indexBoucle,
                        title: "Aller à la boutique de " + nomsBoutiques[indexBoucle],
                    })).appendChild(parBalise("img", cellules[indexBoucle])[0]),
                        cellules[indexBoucle].appendChild(lienBoutique));
                break;
            case "stocks":
                if ((journaliser("Stocks"), !parc.infoscan.scan_suite)) {
                    var stockActuel,
                        besoinStock,
                        stockAjoute = !1;
                    nomsStocks = ["nourritures", "souvenirs", "restaurations rapides", "boissons", "glaces"];
                    var balisesStrong = $("strong");
                    ((indexBoucle = 0),
                        balisesStrong.each(function () {
                            if ((indexBoucle++, -1 != balisesStrong.filter(this).html().indexOf("Vous n'avez pas assez d'argent")))
                                return (alert("Vous n'avez pas assez d'argent pour acheter tous les stocks désirés"), !1);
                        }),
                    indexBoucle == balisesStrong.length &&
                    (formulaire = $("form")).each(function (indexStock) {
                        if (
                            ((stockActuel = parseInt(formulaire.filter(this).find("strong:first").html(), 10)),
                                (besoinStock =
                                    0 == indexStock
                                        ? formulaire.filter(this).closest("tr").next().find("strong:last")
                                        : formulaire
                                            .filter(this)
                                            .closest("tr")
                                            .next()
                                            .find("div:eq(" + (indexStock - 1) + ")")),
                            (besoinStock = -1 * parseInt(besoinStock.html(), 10)) > 0 && stockActuel < besoinStock + 200)
                        )
                            return (
                                journaliser("Ajout de " + (200 + besoinStock - stockActuel) + " " + nomsStocks[indexStock]),
                                    formulaire
                                        .filter(this)
                                        .find("input:text")
                                        .val(200 + besoinStock - stockActuel),
                                    formulaire.filter(this).find("input:submit").click(),
                                    (stockAjoute = !0),
                                    !1
                            );
                    }),
                    !stockAjoute &&
                    ((parc.infoscan.scan_suite = !0),
                        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
                        (window.location.href = urlBase + "zonemembre.php")));
                }
                break;
            case "achatConfirmation": {
                // function dk(){
                // for(aW in bz)aK.stock.hasOwnProperty(aW)&&(aK.stock[aW]-=bz[aW]),aK.infoscan.achats.hasOwnProperty(aW)||(aK.infoscan.achats[aW]=0),aK.infoscan.achats[aW]+=bz[aW];GM_setValue(aG+"_info_parc",JSON.stringify(aK))
                // }av("AchatConfirme"),!/enclosconfirm\.php/.test(window.location)&&((bc=d("form")[0]).parentNode.removeChild(bc),be=c("Submit")[0].parentNode.parentNode,bc.innerHTML=be.innerHTML,be.innerHTML="",be.appendChild(bc));var bz={};for(bg=d("input"),aO=0,aP=bg.length;aO<aP;aO++)if(bg[aO].name&&-1!=bg[aO].name.indexOf("choix["))aW=(aW=bg[aO].name).substring(aW.indexOf("[")+1,aW.indexOf("]")-1),bz.hasOwnProperty(aW)||(bz[aW]=0),bz[aW]+=parseInt(bg[aO].value);else if(bg[aO].name&&"choix"==bg[aO].name){aW=bg[aO].value.slice(0,-1),bz[aW]=1;break}c("Submit")[0].addEventListener("click",dk,!0);break
            }
            case "achat":
                if (((idEnclos = parametreUrl(window.location.href, "t")), parseInt(idEnclos) < 2)) {
                    var enclosNonConstruit = -1 != parBalise("strong")[0].textContent.indexOf("construire");
                    journaliser(enclosNonConstruit ? "Enclos non construit" : "Achat");
                    var listesDeroulantes = $("select");
                    for (indexBoucle2 = 2, limiteBoucle2 = listesDeroulantes.length; indexBoucle2 < limiteBoucle2; indexBoucle2++)
                        for (indexBoucle = 10; indexBoucle <= 25; indexBoucle++)
                            listesDeroulantes[indexBoucle2].innerHTML +=
                                '<option value="' + indexBoucle + '">' + indexBoucle + "</option>";
                    ((tables = (tables = $("table")).slice(enclosNonConstruit ? 4 : 3, -1)).each(function (e) {
                        (tables.filter(this).find("strong:eq(1)").text("Gabarit :"),
                            (nomEspece = nomAnimalDepuisImage(tables.filter(this).find("img:first").attr("src"))),
                        (espece = trouverEspece(nomEspece)) &&
                        ((cellules = tables.filter(this).find("td:eq(2)")).find("select").length &&
                        cellules.find("select").attr("style", "font-size:14px"),
                            (cellules = tables.filter(this).find("td:eq(1)")).append(
                                $("<strong>Base :</strong> " + espece.prix + " Zoo'z<br>"),
                            ),
                            delete parc.stock[nomEspece],
                            cellules.find("span").length > 1
                                ? cellules.find("span:eq(1)").appendTo(cellules)
                                : cellules.find("div").length &&
                                (cellules.find("div").appendTo(cellules),
                                    (texteTemp = cellules.find("div:first")[0]),
                                /stock/i.test(texteTemp.innerHTML) &&
                                ((stockLu = texteTemp.innerHTML.split(":")),
                                (stockLu = parseInt($.trim(stockLu[1]), 10)) < 2 && (texteTemp.innerHTML = "Stock : " + stockLu),
                                    (parc.stock[nomEspece] = stockLu)))));
                    }),
                        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
                        enclosNonConstruit
                            ? ajouterLiensNavigation(idEnclos + "_" + parametreUrl(window.location.href, "v"), !0)
                            : afficherTableauPopulation(),
                        afficherStocks());
                }
                break;
            case "vente":
                (journaliser("Vente"),
                    (nomEspece =
                        especes[decodeURIComponent(parametreUrl(window.location.href, "nom"))].singulier +
                        " " +
                        parametreUrl(window.location.href, "sexe").replace(/a/, "â")),
                    ((cellules = parBalise("td", parBalise("table")[2])[0]).innerHTML = cellules.innerHTML.replace(
                        "Cet animal",
                        "Cet animal <b>(" + nomEspece + ")</b>",
                    )));
                break;
            case "vente_multiple":
                (journaliser("Vente multi"),
                scanMajEnCours &&
                (parc.infoscan.vente_mourant || parc.infoscan.vente_surpopulation) &&
                $('input[name="vente"]').click());
                break;
            case "faune":
                for (nomEspece in (journaliser("Faune"),
                    GM_addStyle(
                        ".noFloat {clear:both}.fauneTitreGeneral {font-size:22px;color:#BB5F2A}.fauneTitre {margin-top:15px;font-size:14px;color:#CC6E3B}.imgAnimal {float:left;cursor:help}.imgAnimal .info_bulle {width:230px;;display:none;color:#000;padding:3px;font-size:10px;font-family:arial, helvetica, sans-serif}.nom_animal {font-weight:bold;font-size:12px}",
                    ),
                    (tables = parBalise("table"))[2].parentNode.removeChild(tables[2]),
                    (tables[1].innerHTML = ""),
                    tables[1].removeAttribute("background"),
                    compterAnimauxPossedes(),
                    (listeTemp = []),
                    especes))
                    listeTemp.push([especes[nomEspece].prix, nomEspece]);
                listeTemp.sort(function (especeA, especeB) {
                    return parseInt(especeB) != parseInt(especeA)
                        ? parseInt(especeB) - parseInt(especeA)
                        : especeA[1] < especeB[1]
                            ? -1
                            : especeA[1] > especeB[1]
                                ? 1
                                : 0;
                });
                var descriptionSpecialite,
                    typeEnclosImage,
                    indexImage = 0;
                for (especesParEnclos = [], indexBoucle = 0; indexBoucle < 11; indexBoucle++)
                    especesParEnclos[indexBoucle] = [];
                for (indexBoucle = 0, limiteBoucle = listeTemp.length; indexBoucle < limiteBoucle; indexBoucle++)
                    especesParEnclos[especes[listeTemp[indexBoucle][1]].enclos].push(listeTemp[indexBoucle][1]);
                var htmlFaune =
                    '<div id="divfaune" style="text-align:center"><h2 class="fauneTitreGeneral">Faune de monzoo <span class="fauneTitre">(' +
                    listeTemp.length +
                    " animaux)</span></h2>";
                for (indexBoucle = 0; indexBoucle < 11; indexBoucle++)
                    if ((limiteBoucle2 = especesParEnclos[indexBoucle].length) > 0)
                        for (
                            htmlFaune +=
                                '<div class="noFloat"></div><h2 class="fauneTitre">' +
                                nomsTypesEnclos[indexBoucle] +
                                " (" +
                                limiteBoucle2 +
                                " espèces)</h2>",
                                typeEnclosImage = nomTypeEnclos(String(indexBoucle)),
                                indexBoucle2 = 0;
                            indexBoucle2 < limiteBoucle2;
                            indexBoucle2++
                        )
                            (espece = trouverEspece(especesParEnclos[indexBoucle][indexBoucle2])) &&
                            ((descriptionSpecialite =
                                espece.bonus && espece.geniteur_albinos
                                    ? "Espèce bonus génitrice d'albinos"
                                    : espece.bonus
                                        ? "Espèce bonus"
                                        : espece.collector
                                            ? "Espèce périodique"
                                            : espece.attraction
                                                ? "Espèce de type attraction exceptionnelle"
                                                : espece.exploration
                                                    ? "Espèce découverte avec l'explorateur"
                                                    : espece.geniteur_albinos && "" != espece.VIP
                                                        ? "Espèce génitrice d'albinos<br>" + espece.VIP
                                                        : espece.geniteur_albinos
                                                            ? "Espèce génitrice d'albinos"
                                                            : /VIP/.test(espece.VIP)
                                                                ? "Espèce " + espece.VIP
                                                                : "" != espece.VIP
                                                                    ? "Spécial : " + espece.VIP
                                                                    : espece.defi
                                                                        ? "Espèce réapprovisionnée avec les défis"
                                                                        : ""),
                                (htmlFaune +=
                                    '<div class="imgAnimal"><img id="divinfob' +
                                    indexImage +
                                    '" src="images/animaux/' +
                                    (espece.bonus ? "bonus" : typeEnclosImage) +
                                    "_" +
                                    ("greta oto" == especesParEnclos[indexBoucle][indexBoucle2] ? "papillon " : "") +
                                    especesParEnclos[indexBoucle][indexBoucle2] +
                                    '.jpg" style="width:59px;' +
                                    (0 === espece.nb ? "opacity:0.4;border:1px solid #FF7885" : "border:1px solid #F7E3C0") +
                                    '" alt="' +
                                    espece.singulier +
                                    '"><div id="div2infob' +
                                    indexImage +
                                    '" class="info_bulle"><span class="nom_animal">' +
                                    espece.singulier +
                                    "</span><br>Vous en possédez " +
                                    espece.nb +
                                    "<br>Prix : " +
                                    formaterNombre(espece.prix) +
                                    " zoo'z<br>Gabarit : " +
                                    espece.gabarit +
                                    ("" != descriptionSpecialite ? "<br>" + descriptionSpecialite : "") +
                                    "</div></div>"),
                                indexImage++);
                parBalise("table")[1].innerHTML = htmlFaune + "</div>";
                var positionFaune = positionElement(parId("divfaune"));
                for (indexBoucle = 0; indexBoucle < indexImage; indexBoucle++)
                    (parId("divinfob" + indexBoucle).addEventListener(
                        "mousemove",
                        function (evenement) {
                            var infobulle = parId(evenement.target.id.replace("divinfob", "div2infob"));
                            ((infobulle.style.display = "block"),
                                (infobulle.style.top =
                                    window.scrollY - positionFaune.y + evenement.clientY - infobulle.clientHeight + 70 + "px"),
                                (infobulle.style.left = window.scrollX - positionFaune.x + evenement.clientX - 100 + "px"));
                        },
                        !1,
                    ),
                        parId("divinfob" + indexBoucle).addEventListener(
                            "mouseout",
                            function (evenement) {
                                parId(evenement.target.id.replace("divinfob", "div2infob")).style.display = "none";
                            },
                            !0,
                        ));
                break;
            case "messages":
                journaliser("Messages");
                var texteMessage,
                    idEvenement,
                    liensMessage,
                    sectionDeces,
                    enfantsMessage,
                    elementEnfant,
                    indexNoms = 0,
                    indexGenres = 0,
                    evenementsTraites = JSON.parse(GM_getValue("messages", "[]")),
                    divsMessages = parBalise("div", parBalise("table")[1]);
                for (var divMessage of divsMessages)
                    if (((texteMessage = divMessage.innerHTML), divMessage.style && "560px" == divMessage.style.width))
                        if ("30px" == divMessage.style.height)
                            -1 != texteMessage.indexOf("eventid=") &&
                            (idEvenement = (texteMessage = texteMessage.substring(texteMessage.indexOf("eventid=") + 8)).substring(
                                0,
                                texteMessage.indexOf('"'),
                            ));
                        else {
                            if (
                                ((texteMessage = texteMessage.substring(14).replace('<div style="clear: both"></div>', "")),
                                    !parc.infoscan.scan_messages)
                            )
                                if (/éclore/.test(texteMessage))
                                    parc.infoscan.messages[idEvenement] = texteMessage.substring(0, texteMessage.indexOf("dinos") + 10);
                                else if (texteMessage.indexOf("Rapport journalier") > 0) {
                                    if ((liensMessage = parBalise("a", divMessage)))
                                        for (elementEnfant of (enfantsMessage = divMessage.children))
                                            if ("SPAN" == elementEnfant.tagName)
                                                ((nomEspece = elementEnfant.innerHTML.toLowerCase()),
                                                    /naissance/.test(nomEspece)
                                                        ? (sectionDeces = !1)
                                                        : /décès/.test(nomEspece)
                                                            ? (sectionDeces = !0)
                                                            : sectionDeces
                                                                ? (parc.infoscan.deces[indexNoms++] = nomEspece)
                                                                : (parc.infoscan.naissances[indexNoms++] = nomEspece));
                                            else if ("IMG" == elementEnfant.tagName) {
                                                if (((urlTemp = elementEnfant.getAttribute("src")), /images\/animaux/.test(urlTemp))) continue;
                                                /icone_male/.test(urlTemp)
                                                    ? sectionDeces
                                                        ? indexGenres++
                                                        : (parc.infoscan.genre_naissances.male[indexGenres++] = 1)
                                                    : /icone_female/.test(urlTemp) &&
                                                    (sectionDeces
                                                        ? indexGenres++
                                                        : (parc.infoscan.genre_naissances.femelle[indexGenres++] = 1));
                                            }
                                } else
                                    /myst.rieux oeuf/.test(texteMessage)
                                        ? (parc.infoscan.messages[idEvenement] =
                                            "Vous venez de trouver un oeuf mystérieux de " +
                                            texteMessage
                                                .substring(texteMessage.indexOf("oeuf de") + 8, texteMessage.indexOf(". Un"))
                                                .trim()
                                                .toLowerCase() +
                                            ".")
                                        : /Attraction exceptionnelle/.test(texteMessage)
                                            ? ((parc.infoscan.attraction = texteMessage.substring(
                                                texteMessage.indexOf("Attraction exceptionnelle"),
                                                texteMessage.indexOf("mise") + 12,
                                            )),
                                                (parc.infoscan.messages[idEvenement] =
                                                    "Attraction exceptionnelle : " +
                                                    texteMessage.substring(texteMessage.indexOf("!") + 2, texteMessage.indexOf("est") - 1) +
                                                    " est là"))
                                            : /tornade/.test(texteMessage)
                                                ? (parc.infoscan.messages[idEvenement] = 'Une tornade s"est abattue sur votre parc')
                                                : /sant./.test(texteMessage)
                                                    ? (parc.infoscan.messages[idEvenement] = '<span color="red">Manque de nourriture</span>')
                                                    : /Pack Mission Naissances/.test(texteMessage)
                                                        ? ((texteMessage = texteMessage.substring(texteMessage.indexOf("licitation") - 2)),
                                                            (parc.infoscan.messages[idEvenement] = texteMessage.substring(
                                                                0,
                                                                texteMessage.indexOf("Naissances") + 11,
                                                            )))
                                                        : /mission/.test(texteMessage)
                                                            ? ((texteMessage = texteMessage.substring(texteMessage.indexOf("licitation") - 2)),
                                                                (parc.infoscan.messages[idEvenement] = texteMessage
                                                                    .substring(texteMessage.indexOf("Vos"))
                                                                    .replace(/vos ordre /g, "vos ordres ")))
                                                            : /Bravo/.test(texteMessage)
                                                                ? (parc.infoscan.messages[idEvenement] = texteMessage.substring(
                                                                    texteMessage.indexOf("Bravo"),
                                                                ))
                                                                : /Votre chien/.test(texteMessage)
                                                                    ? (parc.infoscan.messages[idEvenement] = texteMessage.substring(
                                                                        texteMessage.indexOf("Votre"),
                                                                    ))
                                                                    : /Vos taupes/.test(texteMessage)
                                                                        ? (parc.infoscan.messages[idEvenement] = texteMessage.substring(
                                                                            texteMessage.indexOf("Vos taupes"),
                                                                        ))
                                                                        : /chenilles Greta Oto/.test(texteMessage) &&
                                                                        (parc.infoscan.messages[idEvenement] = texteMessage
                                                                            .substring(texteMessage.indexOf("<b>"))
                                                                            .replace(new RegExp(" <a href=[^>]*>.*", "gi"), ""));
                            if (-1 == evenementsTraites.indexOf(idEvenement))
                                if ((evenementsTraites.push(idEvenement), /Catastrophe/.test(texteMessage)))
                                    ((texteMessage = texteMessage.substring(texteMessage.indexOf("Catastrophe"))),
                                        (parc.infoscan.messages[idEvenement] = texteMessage));
                                else if (/Vous venez de trouver u/.test(texteMessage) && !/myst.rieux oeuf/.test(texteMessage))
                                    ((texteMessage = texteMessage.substring(texteMessage.indexOf("Vous venez de trouver u") + 23)),
                                        (nomEspece = $.trim(
                                            texteMessage.substring(texteMessage.indexOf(" "), texteMessage.indexOf(".")).noAccent(),
                                        )),
                                    /bonus/.test(nomEspece) && (nomEspece = nomEspece.substring(0, nomEspece.indexOf("bonus"))),
                                        /phasme tres rare/.test(nomEspece)
                                            ? (nomEspece = "phasme feuille de java")
                                            : "rainette" == nomEspece && (nomEspece = "rainette verte"),
                                        (parc.infoscan.trouvailles[idEvenement] = $.trim(nomEspece).toLowerCase()));
                                else if (/classement mensuel/.test(texteMessage))
                                    parc.infoscan.messages[idEvenement] = texteMessage.substring(texteMessage.indexOf("licitation") - 2);
                                else if (/d.fi /.test(texteMessage))
                                    ((parc.infoscan.messages[idEvenement] = texteMessage.substring(texteMessage.indexOf("Vous"))),
                                        (objetTemp = texteMessage.substring(texteMessage.indexOf("remporter") + 6)),
                                        (nomEspece = $.trim(objetTemp.substring(objetTemp.indexOf("de ") + 3))),
                                    (espece = trouverEspece(nomEspece) && parc.stock.hasOwnProperty(nomEspece)) &&
                                    (parc.stock[nomEspece] += parseInt(
                                        objetTemp.substring(objetTemp.indexOf("gagnez ") + 7, objetTemp.indexOf(" stock")),
                                        10,
                                    )));
                                else if (/joueur a visité/.test(texteMessage) && /stock/.test(texteMessage))
                                    for (nomEspece of ((parc.infoscan.messages[idEvenement] = texteMessage.substring(
                                        texteMessage.indexOf("Un"),
                                    )),
                                        (especesVisiteParrainage = ["marmotte", "touraco de schalow", "canard mandarin"])))
                                        parc.stock.hasOwnProperty(nomEspece) && (parc.stock[nomEspece] += 1);
                                else
                                    /éclore/.test(texteMessage) ||
                                    -1 != texteMessage.indexOf("Rapport journalier") ||
                                    /myst.rieux oeuf/.test(texteMessage) ||
                                    /Attraction exceptionnelle/.test(texteMessage) ||
                                    /tornade/.test(texteMessage) ||
                                    /sant./.test(texteMessage) ||
                                    /Pack Mission Naissances/.test(texteMessage) ||
                                    /mission/.test(texteMessage) ||
                                    /Bravo/.test(texteMessage) ||
                                    /Votre chien/.test(texteMessage) ||
                                    /Vos taupes/.test(texteMessage) ||
                                    /chenilles Greta Oto/.test(texteMessage) ||
                                    (parc.infoscan.messages[idEvenement] = texteMessage);
                        }
                if ((GM_setValue("messages", JSON.stringify(evenementsTraites)), !parc.infoscan.scan_messages)) {
                    for (
                        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
                            elementsTemp = parBalise("a"),
                            indexBoucle = 0,
                            limiteBoucle = elementsTemp.length;
                        indexBoucle < limiteBoucle;
                        indexBoucle++
                    )
                        if ("[ Les 20 suivants ]" == elementsTemp[indexBoucle].innerHTML)
                            throw ((window.location.href = elementsTemp[indexBoucle].href), "");
                    window.location.href = urlBase + "animaux.php?choix_type=savane";
                }
                break;
            case "enclos":
                var typeEnclosUrl = parseInt(parametreUrl(window.location.href, "t")),
                    numeroEnclosUrl = parametreUrl(window.location.href, "v");
                if (((idEnclos = typeEnclosUrl + "_" + numeroEnclosUrl), 4 == typeEnclosUrl))
                    journaliser(
                        "Boutique de " +
                        ("0" == numeroEnclosUrl
                            ? "souvenirs"
                            : "1" == numeroEnclosUrl
                                ? "restauration rapide"
                                : "2" == numeroEnclosUrl
                                    ? "boissons"
                                    : "glaces"),
                    );
                else if (typeEnclosUrl < 2) {
                    "1_5" == idEnclos && (parc.ilefait = !0);
                    var tableEmployes,
                        paPasAJour = !1;
                    for (
                        tables = parBalise("table"), indexBoucle = 0, limiteBoucle = tables.length;
                        indexBoucle < limiteBoucle;
                        indexBoucle++
                    )
                        /bureau.php/.test(tables[indexBoucle].innerHTML) && (tableEmployes = tables[indexBoucle]);
                    var tablesEmployes = $("table", tableEmployes);
                    tablesEmployes.each(function (e) {
                        (/grand1/.test(tablesEmployes.filter(this).html()) && (paPasAJour = !0),
                        parseInt(tablesEmployes.filter(this).find("tr:first").find("td:eq(1)").text()) !=
                        parseInt(tablesEmployes.filter(this).find("tr:eq(1)").find("td:eq(1)").text()) && (paPasAJour = !0));
                    });
                    var boutonMajPA = !1;
                    if (
                        ((elementsTemp = $("input")).each(function () {
                            if (/Rajoutez/.test(elementsTemp.filter(this).attr("value")))
                                return ((boutonMajPA = elementsTemp.filter(this)), !1);
                        }),
                            /Afficher/.test($("table:eq(4)").html()))
                    ) {
                        if (
                            (journaliser("Enclos " + libelleEnclos(idEnclos) + " non vide"),
                                !GM_getValue("maj_PA2", !1) ||
                                parc.infoscan.vente_mourant ||
                                parc.infoscan.vente_surpopulation ||
                                paPasAJour
                                    ? scanMajEnCours && (parc.infoscan.vente_mourant || parc.infoscan.vente_surpopulation)
                                        ? analyserPageEnclos(!0, !1)
                                        : !GM_getValue("maj_PA", !1) &&
                                        !paPasAJour &&
                                        (GM_addStyle(".navigation {cursor:pointer;font-weight:bold;font-size:16px}"),
                                            analyserPageEnclos(!0, !0))
                                    : analyserPageEnclos(!1, !1),
                            scanMajEnCours && (parc.infoscan.vente_mourant || parc.infoscan.vente_surpopulation))
                        ) {
                            journaliser("contrôle mourants et surpop");
                            var venteNonFaite = !0,
                                venteSurpopulation = !1;
                            if (
                                (parc.infoscan.vente_mourant &&
                                ($(".premort_epais").length
                                    ? ($(".premort_epais")
                                        .closest(".div_animal")
                                        .find(":checkbox")
                                        .each(function () {
                                            $(this).prop("checked") || $(this).closest(".div_animal").find("img:first").click();
                                        }),
                                        (venteNonFaite = !1))
                                    : $(".premort_fin").length &&
                                    ($(".premort_fin")
                                        .find(":checkbox")
                                        .each(function () {
                                            $(this).prop("checked") || $(this).closest(".div_animal").find("img:first").click();
                                        }),
                                        (venteNonFaite = !1))),
                                venteNonFaite &&
                                parc.infoscan.vente_surpopulation &&
                                ($('input:checkbox[checkall="1"]').click(), (venteSurpopulation = !0), (venteNonFaite = !1)),
                                !venteNonFaite && $('[a_vendre="1"]').length)
                            )
                                throw (
                                    journaliser(venteSurpopulation ? "vente surpopulation" : "vente mourants"),
                                        $('input[name="button"]').click(),
                                        ""
                                );
                        } else if (!scanMajEnCours && !paPasAJour) {
                            var texteAideSurpopIndiv =
                                    "Lorsque vous cochez la case de la ligne 'Tous les animaux', le script applique la surpopulation collective (disponible dans le panda/Scan de mise à jour) à toutes les espèces de l'enclos sauf les espèces listées dans les exclusions.<br><br>Si vous cochez individuellement une ou plusieurs cases des espèces du tableau, le script applique alors la valeur de la surpopulation individuelle (sans tenir compte de la liste des exclusions).",
                                champSurpopIndiv = creerElement("input", {
                                    type: "text",
                                    id: "valeur_surpop",
                                    size: "1",
                                    style: "height:12px;font-size:11px;margin:1px 2px 5px",
                                    title: texteAideSurpopIndiv,
                                });
                            (champSurpopIndiv.setAttribute("maxlength", 2),
                                parId("img_achat").parentNode.appendChild(
                                    creerElement("label", {
                                        innerHTML: "Surpop indiv.:",
                                        style: "margin-left:15px;margin-top:3px",
                                        title: texteAideSurpopIndiv,
                                    }),
                                ),
                                parId("img_achat").parentNode.appendChild(champSurpopIndiv),
                                $("#valeur_surpop")
                                    .val(
                                        parc.encls[idEnclos].hasOwnProperty("surpop")
                                            ? parc.encls[idEnclos].surpop
                                            : parc.infoscan.surpopulation,
                                    )
                                    .on("input", changerSurpopulation));
                        }
                    } else
                        (journaliser("Enclos " + libelleEnclos(idEnclos) + " vide"),
                            (parc.encls[idEnclos].mourant = !1),
                            (parc.encls[idEnclos].animaux = {}),
                        scanMajEnCours || afficherTableauPopulation());
                    if (paPasAJour && !GM_getValue("PAtsenclos2", !1))
                        throw (journaliser("mise à jour des employés"), $(boutonMajPA).click(), "");
                    if (
                        ((parc.encls[idEnclos].a_verifier = !1),
                            GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
                            scanMajEnCours)
                    )
                        throw (
                            "fin" !=
                            (prochainEnclosAVerifier = enclosSuivantAvec(
                                idEnclos,
                                parc.infoscan.vente_mourant ? "mouraverif" : "a_verifier",
                            )).t
                                ? (window.location.href =
                                    urlBase + "enclosgestion1.php?t=" + prochainEnclosAVerifier.t + "&v=" + prochainEnclosAVerifier.v)
                                : GM_getValue("PAtsenclos2", !1)
                                    ? (GM_setValue("PAtsenclos3", !0), (window.location.href = urlBase + "animaux.php?choix_type=savane"))
                                    : parc.infoscan.scan_suite
                                        ? (window.location.href = urlBase + "zonemembre.php")
                                        : (window.location.href = urlBase + "espion.php"),
                                ""
                        );
                    ajouterLiensNavigation(idEnclos);
                }
                break;
            case "bourse":
                journaliser("Bourse");
                var lignesBourse,
                    typeEnclosEspece,
                    variationPourcent,
                    variationPrix,
                    sensVariation,
                    prixParEspece = {};
                for (
                    !/scanBourse/.test(window.location.href) &&
                    (compterAnimauxPossedes(),
                        GM_addStyle(
                            ".ligne {cursor:pointer}.nom_animal {font-weight:bold;font-size:12px}.hausse {color:#41AF20}.baisse{color:#C70000}.stable{color:#969696}#div_masque {text-align:center;padding:5px}fieldset {padding:5px;width:100%}",
                        )),
                        typesEnclosBourse = [
                            "bonus",
                            "savane",
                            "bassin",
                            "terre",
                            "foret",
                            "voliere",
                            "aquarium",
                            "vivarium",
                            "noctarium",
                            "insectarium",
                            "ile aux dinos",
                        ],
                        tables = parBalise("table"),
                        objetTemp = 0,
                        indexBoucle2 = 4,
                        limiteBoucle2 = tables.length;
                    indexBoucle2 < limiteBoucle2 && !((indexBoucle2 += objetTemp) >= tables.length);
                    indexBoucle2++
                )
                    for (
                        lignesBourse = parBalise("tr", tables[indexBoucle2]), indexBoucle = 0, limiteBoucle = lignesBourse.length;
                        indexBoucle < limiteBoucle &&
                        ((objetTemp = indexBoucle),
                            (cellules = parBalise("td", lignesBourse[2 * indexBoucle])),
                        lignesBourse[2 * indexBoucle] && 239 == cellules[0].width);
                        indexBoucle++
                    )
                        ((nomEspece = $.trim(cellules[2].textContent).toLowerCase()),
                        !(espece = trouverEspece(nomEspece)) &&
                        ((typeEnclosEspece = (typeEnclosEspece = cellules[1].innerHTML).substring(
                            typeEnclosEspece.indexOf("images/animaux/") + 15,
                            typeEnclosEspece.indexOf("_"),
                        )),
                            (typeEnclosEspece = typesEnclosBourse.indexOf(typeEnclosEspece)),
                            ajouterEspece({
                                nom: nomEspece,
                                singulier: nomEspece,
                                pluriel: nomEspece + "s",
                                prix: cellules[3].textContent,
                                gabarit: 0,
                                enclos: typeEnclosEspece,
                                binaire: 0 == typeEnclosEspece ? 64 : 0,
                            }),
                            alert("L'espèce \"" + nomEspece + "\" n'existait pas dans le script.\nElle vient d'être ajoutée.")),
                            (espece = trouverEspece(nomEspece)),
                            (variationPrix = parseInt(cellules[4].textContent - cellules[3].textContent)),
                        !/scanBourse/.test(window.location.href) &&
                        ((variationPourcent = Math.round((100 * cellules[4].textContent) / cellules[3].textContent) - 100),
                            (sensVariation = variationPrix > 0 ? "hausse" : 0 == variationPrix ? "stable" : "baisse"),
                            (lignesBourse[2 * indexBoucle].className = "ligne " + sensVariation + (0 == espece.nb ? " mq" : "")),
                            (sensVariation =
                                '<span class="' +
                                sensVariation +
                                '">Prix ' +
                                (0 == variationPrix
                                    ? "stable"
                                    : "en " +
                                    sensVariation +
                                    " de " +
                                    Math.abs(variationPourcent) +
                                    "% soit de " +
                                    formaterNombre(Math.abs(variationPrix)) +
                                    " Zoo'z") +
                                "</span>"),
                            $(lignesBourse[2 * indexBoucle]).attr(
                                "title",
                                '<img src="images/animaux/' +
                                nomTypeEnclos(espece) +
                                "_" +
                                nomEspece +
                                '.jpg" style="float:left;margin-right:10px"><div><span class="nom_animal">' +
                                espece.singulier +
                                "</span> (" +
                                nomTypeEnclos(espece, !0) +
                                ")<br>" +
                                sensVariation +
                                "<br>Vous en possédez " +
                                espece.nb +
                                "</div>",
                            )),
                            (prixParEspece[nomEspece] = variationPrix + espece.prix));
                var dateBourse = new Date(),
                    moisBourse =
                        (dateBourse = new Date(
                            Date.parse(dateBourse) - 36e5 * parseFloat(prefsUtilisateur.decalage_horaire),
                        )).getMonth() + 1,
                    jourBourse = dateBourse.getDate(),
                    heureBourse = dateBourse.getHours(),
                    minuteBourse = dateBourse.getMinutes();
                if (
                    (GM_setValue(
                        "bourse_scan",
                        dateBourse.getFullYear() +
                        "-" +
                        (moisBourse < 10 ? "0" : "") +
                        moisBourse +
                        "-" +
                        (jourBourse < 10 ? "0" : "") +
                        jourBourse +
                        " " +
                        (heureBourse < 10 ? "0" : "") +
                        heureBourse +
                        ":" +
                        (minuteBourse < 10 ? "0" : "") +
                        minuteBourse,
                    ),
                        GM_setValue("bourse", JSON.stringify(prixParEspece)),
                        /scanBourse/.test(window.location.href))
                )
                    window.close();
                else {
                    function filtrerBourse() {
                        var nomAnimal,
                            lignesTable,
                            cellulesLigne,
                            afficherLigne,
                            filtrePossession = $('[name="possession"]:checked').val(),
                            filtreVariation = $('[name="variation"]:checked').val(),
                            filtreNom = new RegExp($("#recherche_nom").val(), "i"),
                            tablesPage = $("table");
                        for (
                            objetTemp = 0, indexBoucle2 = 4, limiteBoucle2 = tablesPage.length;
                            indexBoucle2 < limiteBoucle2 && !((indexBoucle2 += objetTemp) >= tablesPage.length);
                            indexBoucle2++
                        )
                            for (
                                lignesTable = parBalise("tr", tablesPage[indexBoucle2]),
                                    indexBoucle = 0,
                                    limiteBoucle = lignesTable.length;
                                indexBoucle < limiteBoucle &&
                                ((objetTemp = indexBoucle),
                                    (cellulesLigne = parBalise("td", lignesTable[2 * indexBoucle])),
                                lignesTable[2 * indexBoucle] && 239 == cellulesLigne[0].width);
                                indexBoucle++
                            ) {
                                switch (
                                    ((lignesTable[2 * indexBoucle].style.display = "none"),
                                        (nomAnimal = $.trim(cellulesLigne[2].textContent).toLowerCase()),
                                        (cellulesLigne = cellulesLigne[5].innerHTML),
                                        (afficherLigne =
                                            (/mq/.test(lignesTable[2 * indexBoucle].className) && "manquant" == filtrePossession) ||
                                            (!/mq/.test(lignesTable[2 * indexBoucle].className) && "possede" == filtrePossession) ||
                                            "tous" == filtrePossession),
                                        filtreVariation)
                                    ) {
                                    case "tous":
                                        afficherLigne && (lignesTable[2 * indexBoucle].style.display = "block");
                                        break;
                                    case "baisse":
                                        /-/.test(cellulesLigne) && afficherLigne && (lignesTable[2 * indexBoucle].style.display = "block");
                                        break;
                                    case "hausse":
                                        /\+/.test(cellulesLigne) && afficherLigne && (lignesTable[2 * indexBoucle].style.display = "block");
                                        break;
                                    case "stable":
                                        !/\+|-/.test(cellulesLigne) &&
                                        afficherLigne &&
                                        (lignesTable[2 * indexBoucle].style.display = "block");
                                }
                                filtreNom.test(nomAnimal) || (lignesTable[2 * indexBoucle].style.display = "none");
                            }
                    }
                    var divFiltres = $("<div>")
                        .attr("id", "div_masque")
                        .html(
                            '<fieldset><legend>Possession</legend><input type="radio" name="possession" value="tous" checked>Tous les animaux&nbsp;&nbsp;<input type="radio" name="possession" value="manquant">Animaux manquants&nbsp;&nbsp;<input type="radio" name="possession" value="possede">Animaux possédés</fieldset><fieldset><legend>Variation de prix</legend><input type="radio" name="variation" value="tous" checked>Toutes les variations&nbsp;&nbsp;<input type="radio" name="variation" value="baisse">Prix à la baisse&nbsp;&nbsp;<input type="radio" name="variation" value="hausse">Prix à la hausse&nbsp;&nbsp;<input type="radio" name="variation" value="stable">Prix stable</fieldset><fieldset style="text-align:left"><legend>Filtrer sur le nom de l\'animal</legend><input type="text" id="recherche_nom" style="width:500px"><div style="clear:both"></div>',
                        );
                    for (indexBoucle2 of ($(".title_site2:eq(1)").before(divFiltres),
                        $("#recherche_nom").on("keyup", filtrerBourse),
                        (nomsFiltresBourse = ["possession", "variation"])))
                        for (
                            limiteBoucle2 = parNom(indexBoucle2), indexBoucle = 0, limiteBoucle = limiteBoucle2.length;
                            indexBoucle < limiteBoucle;
                            indexBoucle++
                        )
                            limiteBoucle2[indexBoucle].addEventListener("change", filtrerBourse, !1);
                    for (
                        lignes = parBalise("tr", tables[2]), indexBoucle = 0, limiteBoucle = lignes.length;
                        indexBoucle < limiteBoucle;
                        indexBoucle++
                    )
                        for (indexBoucle2 = 0; indexBoucle2 < 2; indexBoucle2++)
                            ((texteTemp = parBalise("div", lignes[indexBoucle])[indexBoucle2]),
                                (nomEspece = nomAnimalDepuisImage(parBalise("img", texteTemp)[0].src)),
                                (espece = trouverEspece(nomEspece)),
                                texteTemp.setAttribute(
                                    "title",
                                    '<span class="nom_animal">' +
                                    espece.singulier +
                                    "</span> (" +
                                    nomTypeEnclos(espece, !0) +
                                    ")<br>Vous en possédez " +
                                    espece.nb +
                                    "<br>Prix actuel : " +
                                    formaterNombre(prixParEspece[nomEspece]) +
                                    " Zoo'z",
                                ));
                }
                break;
            case "regles":
                journaliser("Règles");
                break;
            case "team": {
                function trierMissions(indexColonne, sens) {
                    var texteCellule,
                        lignesTriees = [];
                    for (
                        lignes.each(function () {
                            ((texteCellule = lignes
                                .filter(this)
                                .find("td:eq(" + indexColonne + ")")
                                .html()),
                                lignesTriees.push([lignes.filter(this), parseInt(texteCellule)]));
                        }),
                            lignesTriees.sort(function (ligneA, ligneB) {
                                return ligneA[1] > ligneB[1] ? -1 * sens : ligneA[1] < ligneB[1] ? sens : 0;
                            }),
                            lignes.remove(),
                            indexBoucle = 0,
                            limiteBoucle = lignesTriees.length;
                        indexBoucle < limiteBoucle;
                        indexBoucle++
                    )
                        lignesTriees[indexBoucle][0].appendTo(tableMissionsTeam);
                    colorierLignesMissions();
                }
                (journaliser("Team"), (tables = $("table")));
                var tableMissionsTeam,
                    htmlTable,
                    texteNaissances,
                    tableTrouvee = !1,
                    titreVu = !1;
                tables.each(function () {
                    if (((htmlTable = tables.filter(this).html()), tableTrouvee))
                        return (
                            (tableMissionsTeam = tables.filter(this)),
                                (lignes = tableMissionsTeam.find("tr").slice(3)).addClass("ligne_mission"),
                                !1
                        );
                    /Missions de team/.test(htmlTable) && (titreVu ? (tableTrouvee = !0) : (titreVu = !0));
                });
                var lignesTableMissions = tableMissionsTeam.find("tr");
                (lignesTableMissions.each(function () {
                    lignesTableMissions.filter(this).find("td:eq(1)").after("<td></td>");
                }),
                    lignes.removeAttr("bgColor").removeAttr("style"),
                    lignes.not(":even").find("td").addClass("ui-state-default"),
                    lignes.filter(":even").find("td").addClass("ui-state-hover"),
                    (compteursMissions = [0, 0, 0, 0, 0]));
                var missionsAValider = [0, 0, 0, 0, 0],
                    naissancesTeam = [];
                for (
                    lignes.each(function (indexLigne) {
                        (/realise1/.test(lignes.filter(this).find("td:eq(4)").html()) && compteursMissions[0]++,
                        /realise1/.test(lignes.filter(this).find("td:eq(5)").html()) && compteursMissions[1]++,
                        /realise1/.test(lignes.filter(this).find("td:eq(6)").html()) && compteursMissions[2]++,
                        /realise1/.test(lignes.filter(this).find("td:eq(7)").html()) && compteursMissions[3]++,
                        /realise1/.test(lignes.filter(this).find("td:eq(8)").html()) && compteursMissions[4]++,
                            lignes
                                .filter(this)
                                .find("td:eq(3)")
                                .css({
                                    "text-align": "center",
                                })
                                .html(lignes.filter(this).find("td:eq(3)").find("div").html())
                                .removeAttr("width"),
                            (texteNaissances = lignes.filter(this).find("td:eq(3)").html()),
                            (naissancesTeam[indexLigne] = parseInt(texteNaissances.slice(texteNaissances.indexOf("/") + 1).trim())),
                        !/realise1/.test(lignes.filter(this).find("td:eq(4)").html()) &&
                        naissancesTeam[indexLigne] >= 10 &&
                        missionsAValider[0]++,
                        !/realise1/.test(lignes.filter(this).find("td:eq(5)").html()) &&
                        naissancesTeam[indexLigne] >= 20 &&
                        missionsAValider[1]++,
                        !/realise1/.test(lignes.filter(this).find("td:eq(6)").html()) &&
                        naissancesTeam[indexLigne] >= 30 &&
                        missionsAValider[2]++,
                        !/realise1/.test(lignes.filter(this).find("td:eq(7)").html()) &&
                        naissancesTeam[indexLigne] >= 40 &&
                        missionsAValider[3]++,
                        !/realise1/.test(lignes.filter(this).find("td:eq(8)").html()) &&
                        naissancesTeam[indexLigne] >= 50 &&
                        missionsAValider[4]++,
                            (nomEspece = nomAnimalDepuisImage(lignes.filter(this).find("td:first").find("img:first").attr("src"))),
                        (espece = trouverEspece(nomEspece)) &&
                        (lignes
                            .filter(this)
                            .find("td:eq(2)")
                            .css({
                                "text-align": "center",
                            })
                            .html(texteNaissances.slice(0, texteNaissances.indexOf("/")).trim()),
                            lignes
                                .filter(this)
                                .find("td:eq(3)")
                                .css({
                                    "text-align": "center",
                                })
                                .html(naissancesTeam[indexLigne])));
                    }),
                        htmlTemp = '<tr><th colspan="4">Nombres de missions réussies</th>',
                        indexBoucle2 = 0;
                    indexBoucle2 < 5;
                    indexBoucle2++
                )
                    htmlTemp +=
                        '<th class="total ui-widget-header">' +
                        compteursMissions[indexBoucle2] +
                        " (" +
                        missionsAValider[indexBoucle2] +
                        ")</th>";
                for (
                    htmlTemp += "</tr>", libellesFiltres = ["Toutes", "Réussies", "Non réussies"], indexBoucle = 0;
                    indexBoucle < 3;
                    indexBoucle++
                ) {
                    for (
                        htmlTemp += '<tr><th colspan="4">' + libellesFiltres[indexBoucle] + "</th>", indexBoucle2 = 1;
                        indexBoucle2 < 6;
                        indexBoucle2++
                    )
                        htmlTemp +=
                            '<th><input type="radio" filtre_mis name="mission_etat_' +
                            indexBoucle2 +
                            '" value="' +
                            libellesFiltres[indexBoucle] +
                            '"' +
                            (0 == indexBoucle ? " checked" : "") +
                            "></th>";
                    htmlTemp += "</tr>";
                }
                (tableMissionsTeam.find("tr:eq(2)").find("td:eq(3)").html("Naissances team totales du jour"),
                    tableMissionsTeam.find("tr:eq(2)").find("td:eq(2)").html("Mes naissances du jour"),
                    tableMissionsTeam.find("tr:eq(3)").before(htmlTemp),
                    tableMissionsTeam
                        .find("tr")
                        .slice(0, 7)
                        .find("td, th")
                        .addClass("ui-widget-header")
                        .css({
                            "text-align": "center",
                        })
                        .end()
                        .each(function () {
                            $(this).find("th:first").css({
                                "text-align": "left",
                            });
                        }));
                var sensTriTeam = -1,
                    sensTriPerso = -1;
                (tableMissionsTeam
                    .find("tr:eq(2) > td:eq(3)")
                    .attr("title", "Cliquez pour trier selon le nombre de naissances team")
                    .css({
                        cursor: "pointer",
                    })
                    .on("mouseenter", function () {
                        $(this).css({
                            color: "red",
                        });
                    })
                    .on("mouseleave", function () {
                        $(this).removeAttr("style").css({
                            cursor: "pointer",
                            "text-align": "center",
                        });
                    })
                    .on("click", function () {
                        ((sensTriPerso = -1), trierMissions(3, (sensTriTeam *= -1)));
                    }),
                    tableMissionsTeam
                        .find("tr:eq(2) > td:eq(2)")
                        .attr("title", "Cliquez pour trier selon le nombre de vos naissances")
                        .css({
                            cursor: "pointer",
                        })
                        .on("mouseenter", function () {
                            $(this).css({
                                color: "red",
                            });
                        })
                        .on("mouseleave", function () {
                            $(this).removeAttr("style").css({
                                cursor: "pointer",
                                "text-align": "center",
                            });
                        })
                        .on("click", function () {
                            ((sensTriTeam = -1), trierMissions(2, (sensTriPerso *= -1)));
                        }),
                    $("input:radio[filtre_mis]").on("click", function () {
                        (lignes.each(function (indexLigne) {
                            for (lignes.filter(this).show(), indexBoucle2 = 1; indexBoucle2 < 6; indexBoucle2++)
                                switch ($('input:radio[name="mission_etat_' + indexBoucle2 + '"]:checked').val()) {
                                    case "Réussies":
                                        !/realise1/.test(
                                            lignes
                                                .filter(this)
                                                .find("td:eq(" + (indexBoucle2 + 3) + ")")
                                                .html(),
                                        ) &&
                                        naissancesTeam[indexLigne] < 10 * indexBoucle2 &&
                                        (lignes.filter(this).hide(), (indexBoucle2 = 6));
                                        break;
                                    case "Non réussies":
                                        (/realise1/.test(
                                                lignes
                                                    .filter(this)
                                                    .find("td:eq(" + (indexBoucle2 + 3) + ")")
                                                    .html(),
                                            ) ||
                                            naissancesTeam[indexLigne] >= 10 * indexBoucle2) &&
                                        (lignes.filter(this).hide(), (indexBoucle2 = 6));
                                }
                        }),
                            colorierLignesMissions());
                    }));
                break;
            }
            case "missions":
                (journaliser("Missions"),
                    GM_addStyle(".total {text-align:center;font-weight:bold;color:#0FA430}.total2 {text-align:center}"));
                var ligneTemp = (tables = $("table:eq(4)")).find("tr:eq(-1)");
                ((compteursMissions = [
                    ligneTemp.find("td:eq(1)").find("div:eq(0)").html(),
                    ligneTemp.find("td:eq(2)").find("div:eq(0)").html(),
                    ligneTemp.find("td:eq(3)").find("div:eq(0)").html(),
                    ligneTemp.find("td:eq(4)").find("div:eq(0)").html(),
                    ligneTemp.find("td:eq(5)").find("div:eq(0)").html(),
                ]),
                    ligneTemp.remove(),
                    (lignes = tables.find("tr").slice(3)));
                var missionsRealisees = [];
                for (
                    lignes.each(function (indexLigne) {
                        for (
                            lignes.filter(this).addClass("ligne_mission"),
                                lignes.filter(this).find("td:eq(0)").attr("width", "48px"),
                                lignes.filter(this).find("td:eq(1)").attr("width", "170px"),
                                lignes.filter(this).find("td:eq(2)").attr("width", "60px"),
                                lignes.filter(this).find("td:eq(3)").attr("width", "60px"),
                                lignes.filter(this).find("td:eq(4)").attr("width", "60px"),
                                lignes.filter(this).find("td:eq(5)").attr("width", "60px"),
                                lignes.filter(this).find("td:eq(6)").attr("width", "70px"),
                                indexBoucle2 = 0;
                            indexBoucle2 < 4;
                            indexBoucle2++
                        )
                            (0 == indexBoucle2 && (missionsRealisees[indexLigne] = []),
                                (missionsRealisees[indexLigne][indexBoucle2] = /realise1/.test(
                                    lignes
                                        .filter(this)
                                        .find("td:eq(" + (indexBoucle2 + 2) + ")")
                                        .html(),
                                )));
                        ((cellules = lignes.filter(this).find("td:eq(6)").text()),
                            (missionsRealisees[indexLigne][4] =
                                parseInt(cellules.replace(new RegExp("/.*"), ""), 10) >=
                                parseInt(cellules.replace(new RegExp("^[^/]*/"), ""), 10)));
                    }),
                        tables.find("tr:eq(2)").find("td:first").attr("colspan", 2).html("Animaux").css({
                            "text-align": "center",
                            "font-weight": "bold",
                        }),
                        tables.find("tr:eq(2)").find("td:eq(1)").remove(),
                        tables.find("tr:eq(2)").addClass("ligne_mission"),
                        tables = parBalise("table")[4],
                        htmlTemp = "",
                        indexBoucle = 0;
                    indexBoucle < 3;
                    indexBoucle++
                )
                    ((ligneTemp = parBalise("tr", tables)[0]),
                        (htmlTemp +=
                            "<tr" + (2 == indexBoucle ? ' class="ligne_mission"' : "") + ">" + ligneTemp.innerHTML + "</tr>"),
                        ligneTemp.parentNode.removeChild(ligneTemp));
                for (
                    htmlTemp += '<tr class="ligne_mission"><td colspan="2">Nombres de missions réussies</td>', indexBoucle = 0;
                    indexBoucle < 5;
                    indexBoucle++
                )
                    htmlTemp += '<td class="total">' + compteursMissions[indexBoucle] + "</td>";
                for (
                    htmlTemp += "</tr>", libellesFiltres = ["Toutes", "Réussies", "Non réussies"], indexBoucle = 0;
                    indexBoucle < 3;
                    indexBoucle++
                ) {
                    for (
                        htmlTemp += '<tr class="ligne_mission"><td colspan="2">' + libellesFiltres[indexBoucle] + "</td>",
                            indexBoucle2 = 0;
                        indexBoucle2 < 5;
                        indexBoucle2++
                    )
                        htmlTemp +=
                            '<td class="total2"><input type="radio" filtre_mis name="mission_etat_' +
                            indexBoucle2 +
                            '" value="' +
                            libellesFiltres[indexBoucle] +
                            '"' +
                            (0 == indexBoucle ? " checked" : "") +
                            "></td>";
                    htmlTemp += "</tr>";
                }
                var tableFiltres = document.createElement("table");
                (tableFiltres.setAttribute(
                    "style",
                    "border:1px solid #E9CA94;width:100%;margin-bottom:-2px;border-spacing:0px",
                ),
                    tableFiltres.setAttribute("cellpadding", "4"),
                    (tableFiltres.innerHTML = htmlTemp),
                    tables.parentNode.insertBefore(tableFiltres, tables),
                    colorierLignesMissions(),
                    (tables = parBalise("table")[5]),
                    (htmlTemp = tables.innerHTML));
                var colonneCliquee,
                    indexFiltre,
                    colonnesFiltrees,
                    filtresActifs = [0, 0, 0, 0, 0];
                $("input:radio[filtre_mis]").on("click", function (evenement) {
                    if (
                        ((colonneCliquee = parseInt(evenement.target.name.slice(-1))),
                            (indexFiltre = libellesFiltres.indexOf(evenement.target.value)),
                        filtresActifs[colonneCliquee] != indexFiltre)
                    ) {
                        for (
                            filtresActifs[colonneCliquee] = indexFiltre,
                                tables.innerHTML = htmlTemp,
                                colonnesFiltrees = [],
                                indexBoucle2 = 0;
                            indexBoucle2 < 5;
                            indexBoucle2++
                        )
                            filtresActifs[indexBoucle2] && colonnesFiltrees.push(indexBoucle2);
                        (limiteBoucle2 = colonnesFiltrees.length) > 0 &&
                        ((lignes = $("table:eq(5)").find("tr")).each(function (indexLigne) {
                            for (indexBoucle2 = 0; indexBoucle2 < limiteBoucle2; indexBoucle2++)
                                switch ($('input:radio[name="mission_etat_' + colonnesFiltrees[indexBoucle2] + '"]:checked').val()) {
                                    case "Réussies":
                                        !missionsRealisees[indexLigne][colonnesFiltrees[indexBoucle2]] &&
                                        (lignes.filter(this).hide(), (indexBoucle2 = limiteBoucle2));
                                        break;
                                    case "Non réussies":
                                        missionsRealisees[indexLigne][colonnesFiltrees[indexBoucle2]] &&
                                        (lignes.filter(this).hide(), (indexBoucle2 = limiteBoucle2));
                                }
                        }),
                            colorierLignesMissions());
                    }
                });
                break;
            case "classement":
                journaliser("Classement");
                var debutClassement = Math.max(parseInt(/^[0-9]+/.exec($.trim($("strong:eq(3)").html())), 10) - 4, 0);
                ($("strong:first").html(
                    '<a title="accéder à mon classement prestige" href="classement.php?deb=' +
                    debutClassement +
                    '&choix_class=2">Prestige</a>',
                ),
                    (debutClassement = Math.max(parseInt(/^[0-9]+/.exec($.trim($("b:first").html())), 10) - 4, 0)),
                    $("strong:eq(4)").html(
                        '<a title="accéder à mon classement valeur" href="classement.php?deb=' +
                        debutClassement +
                        '&choix_class=6">Valeur</a>',
                    ),
                    (debutClassement = Math.max(parseInt(/^[0-9]+/.exec($.trim($("strong:eq(10)").html())), 10) - 4, 0)),
                    $("strong:eq(7)").html(
                        '<a title="accéder à mon classement mensuel" href="classement.php?deb=' +
                        debutClassement +
                        '&choix_class=4">Mensuel</a>',
                    ),
                    "Tournoi" == $.trim($("strong:eq(13)").html())
                        ? ((debutClassement = Math.max(parseInt(/^[0-9]+/.exec($.trim($("b:eq(2)").html())), 10) - 4, 0)),
                            $("strong:eq(17)").html(
                                '<a title="accéder à mon classement dinos" href="classement.php?deb=' +
                                debutClassement +
                                '&choix_class=8">Dinos</a>',
                            ))
                        : ((debutClassement = Math.max(parseInt(/^[0-9]+/.exec($.trim($("strong:eq(14)").html())), 10) - 8, 0)),
                            $("strong:eq(11)").html(
                                '<a title="accéder à notre classement team" href="classement.php?deb=' +
                                debutClassement +
                                '&choix_class=3">Points</a>',
                            ),
                            (debutClassement = Math.max(parseInt(/^[0-9]+/.exec($.trim($("strong:eq(18)").html())), 10) - 6, 0)),
                            $("strong:eq(15)").html(
                                '<a title="accéder à notre classement tournoi" href="classement.php?deb=' +
                                debutClassement +
                                '&choix_class=7">Tournoi</a>',
                            ),
                            (debutClassement = Math.max(parseInt(/^[0-9]+/.exec($.trim($("strong:eq(22)").html())), 10) - 7, 0)),
                            $("strong:eq(19)").html(
                                '<a title="accéder à notre classement dinos" href="classement.php?deb=' +
                                debutClassement +
                                '&choix_class=9">Dinos</a>',
                            ),
                            (debutClassement = Math.max(parseInt(/^[0-9]+/.exec($.trim($("b:eq(2)").html())), 10) - 4, 0)),
                            $("strong:eq(23)").html(
                                '<a title="accéder à mon classement dinos" href="classement.php?deb=' +
                                debutClassement +
                                '&choix_class=8">Dinos</a>',
                            )));
                break;
            case "musee":
                (journaliser("Musée"),
                    $("strong:first").html(
                        'Après avoir acheté un item, celui-ci sera placé dans votre vitrine.<br><a href="botanica.php">Aller à la Botanica</a>',
                    ));
                break;
            case "botanica":
                (journaliser("Botanica"),
                !$("strong:first").html().includes("La botanica est disponible") &&
                ($("strong:first").html(
                    'Après avoir acheté une plante, celle-ci sera placée dans votre botanica.<br><a href="enclosgestion.php?t=5&v=0">Aller au Musée</a>',
                ),
                    ((valeurTemp = document.getElementsByClassName("Style2"))[0].innerHTML =
                        "Votre super espion, quand disponible, a une petite chance de vous dénicher une plante gratuite.")));
                break;
            case "intendance":
                if (
                    ((objetTemp = parametreUrl(window.location.href, "choix_type")),
                        (divs = parBalise("div", (divs = document.getElementsByClassName("content_site"))[0])),
                    "" == objetTemp)
                ) {
                    for (indexBoucle = 0, limiteBoucle = divs.length; indexBoucle < limiteBoucle; indexBoucle++)
                        if ("145px" == divs[indexBoucle].style.width) {
                            objetTemp = divs[indexBoucle].innerHTML.trim().toLowerCase();
                            break;
                        }
                } else objetTemp = objetTemp.replace(/%20/g, " ");
                if (
                    (journaliser("Intendance " + objetTemp),
                    parc.premier_scan &&
                    (!parc.infoscan.scan_messages || GM_getValue("PAtsenclos3", !1)) &&
                    !1 !== (champsInput = parBalise("input")) &&
                    !GM_getValue("PAtsenclos", !1))
                )
                    throw (GM_setValue("PAtsenclos", !0), GM_setValue("PAtsenclos2", !0), declencherClic(champsInput[0]), "");
                if (!GM_getValue("PAtsenclos3", !1)) {
                    var divTitreEnclos, codesEnclos;
                    switch (objetTemp) {
                        case "savane":
                            codesEnclos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 41, 42, 43, 44, 45];
                            break;
                        case "bassin":
                            codesEnclos = [10, 11, 12, 13, 14, 15, 46, 47, 48, 49, 50];
                            break;
                        case "terre":
                            codesEnclos = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 51, 52, 53, 54, 55];
                            break;
                        case "foret":
                            codesEnclos = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 56, 57, 58, 59, 60];
                            break;
                        case "voliere":
                            codesEnclos = [100];
                            break;
                        case "aquarium":
                            codesEnclos = [101];
                            break;
                        case "vivarium":
                            codesEnclos = [102];
                            break;
                        case "noctarium":
                            codesEnclos = [103];
                            break;
                        case "insectarium":
                            codesEnclos = [104];
                            break;
                        case "ile aux dinos":
                            codesEnclos = [105];
                    }
                    for (indexBoucle = 0, limiteBoucle = codesEnclos.length; indexBoucle < limiteBoucle; indexBoucle++)
                        ((idEnclos = Math.floor(codesEnclos[indexBoucle] / 100) + "_" + (codesEnclos[indexBoucle] % 100)),
                        parc.premier_scan || (parc.encls[idEnclos] = {}),
                            (parc.encls[idEnclos].a_verifier = !1),
                            (parc.encls[idEnclos].mourant = !1),
                            (parc.encls[idEnclos].animaux = {}));
                    for (indexBoucle = 0, limiteBoucle = divs.length; indexBoucle < limiteBoucle; indexBoucle++)
                        ("111px" == divs[indexBoucle].style.width &&
                        "22px" == divs[indexBoucle].style.height &&
                        ((divTitreEnclos = divs[indexBoucle]),
                            (indexBoucle2 = parseInt(divTitreEnclos.innerHTML.trim().slice(-2)) - 1),
                            (idEnclos = Math.floor(codesEnclos[indexBoucle2] / 100) + "_" + (codesEnclos[indexBoucle2] % 100))),
                        "605px" == divs[indexBoucle].style.width &&
                        "127px" == divs[indexBoucle].style.height &&
                        ((texteTemp = (texteTemp = divs[indexBoucle].innerHTML.substring(
                            divs[indexBoucle].innerHTML.indexOf("<br>") + 4,
                            divs[indexBoucle].innerHTML.indexOf("mourant"),
                        ))
                            .replace(/<strong>|<\/strong>/g, "")
                            .trim()),
                        /[1-9]/.test(texteTemp) &&
                        (parc.infoscan.scan_messages
                            ? ((parBalise("div", divs[indexBoucle])[0].style.backgroundColor = "#FBB197"),
                                (divTitreEnclos.style.backgroundImage = "none"),
                                (divTitreEnclos.style.backgroundColor = "#FBB197"),
                                (divTitreEnclos.style.border = "2px solid #E1975F"))
                            : (parc.encls[idEnclos].mourant = !0)),
                            (nomEspece = parBalise("strong", divs[indexBoucle])[0].innerHTML.trim().toLowerCase()),
                            (parc.encls[idEnclos].animaux[nomEspece] = {}),
                            (parc.encls[idEnclos].animaux[nomEspece].male = parseInt(
                                divs[indexBoucle + 3].innerHTML.substring(1).trim(),
                            )),
                            (parc.encls[idEnclos].animaux[nomEspece].femelle = parseInt(
                                divs[indexBoucle + 4].innerHTML.substring(1).trim(),
                            ))));
                    for (
                        elementsTemp = parBalise("a"), indexBoucle = 0, limiteBoucle = elementsTemp.length;
                        indexBoucle < limiteBoucle;
                        indexBoucle++
                    )
                        -1 != elementsTemp[indexBoucle].innerHTML.indexOf("Il manque des PA") &&
                        ((urlTemp = elementsTemp[indexBoucle].href),
                            (idEnclos = parametreUrl(urlTemp, "t") + "_" + parametreUrl(urlTemp, "v")),
                            (parc.encls[idEnclos].a_verifier = !0));
                    if (!parc.premier_scan && "noctarium" == objetTemp) {
                        ((cleEnclos = []), (parc.encls2 = parc.encls));
                        for (const [e, a] of Object.entries(parc.encls)) cleEnclos.push(e);
                        for (
                            cleEnclos.sort(function (especeA, especeB) {
                                return especeA.charAt(0) < especeB.charAt(0)
                                    ? -1
                                    : especeA.charAt(0) > especeB.charAt(0)
                                        ? 1
                                        : parseInt(especeA.slice(2)) < parseInt(especeB.slice(2))
                                            ? -1
                                            : parseInt(especeA.slice(2)) > parseInt(especeB.slice(2))
                                                ? 1
                                                : 0;
                            }),
                                parc.encls = {},
                                indexBoucle = 0,
                                limiteBoucle = cleEnclos.length;
                            indexBoucle < limiteBoucle;
                            indexBoucle++
                        )
                            parc.encls[cleEnclos[indexBoucle]] = parc.encls2[cleEnclos[indexBoucle]];
                        delete parc.encls2;
                    }
                    GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc));
                }
                if (parc.premier_scan && parc.infoscan.scan_messages)
                    GM_getValue("PAtsenclos3", !1) &&
                    (GM_deleteValue("PAtsenclos"),
                        GM_deleteValue("PAtsenclos2"),
                        GM_deleteValue("PAtsenclos3"),
                        parc.infoscan.scan_suite
                            ? (window.location.href = urlBase + "zonemembre.php")
                            : (window.location.href = urlBase + "espion.php"));
                else {
                    var typeSuivant = "";
                    switch (objetTemp) {
                        case "savane":
                            typeSuivant = "bassin";
                            break;
                        case "bassin":
                            typeSuivant = "terre";
                            break;
                        case "terre":
                            typeSuivant = "foret";
                            break;
                        case "foret":
                            typeSuivant = "voliere";
                            break;
                        case "voliere":
                            typeSuivant = "aquarium";
                            break;
                        case "aquarium":
                            typeSuivant = "vivarium";
                            break;
                        case "vivarium":
                            typeSuivant = "noctarium";
                            break;
                        case "noctarium":
                            typeSuivant = "insectarium";
                            break;
                        case "insectarium":
                            typeSuivant = "ile aux dinos";
                    }
                    "" != typeSuivant
                        ? (window.location.href = urlBase + "animaux.php?choix_type=" + typeSuivant)
                        : parc.premier_scan
                            ? (GM_deleteValue("PAtsenclos"),
                                (parc.infoscan.scan_messages = !0),
                                GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
                                lancerScanMaj())
                            : ((parc.ilefait = !0),
                                parc.toutou
                                    ? ((parc.premier_scan = !0),
                                        GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc)),
                                        (window.location.href = urlBase + "zonemembre.php"))
                                    : (window.location.href = urlBase + "toutou.php"));
                }
                break;
            case "majbonus":
                parBalise("form")[0].setAttribute("action", "zonemembre.php?maj_bonus");
        }
    }
} else
    switch (pageCourante) {
        case "forum":
            (nomZoo && journaliser("Forum"),
                (texteTemp = $("<div>")
                    .attr("id", "liste_zoo")
                    .css({
                        padding: "5px",
                    })
                    .appendTo("body")
                    .hide()));
            var parcsForum = {};
            for (indexBoucle = 0, limiteBoucle = listeZoos.length; indexBoucle < limiteBoucle; indexBoucle++)
                parcsForum[listeZoos[indexBoucle]] = JSON.parse(GM_getValue(listeZoos[indexBoucle] + "_info_parc", !1));
            for (var zooForum in parcsForum)
                !1 !== parcsForum[zooForum] &&
                ((valeurTemp = $("<span>").addClass("lien_naissances")),
                    (elementsTemp = $("<a>").html(zooForum).appendTo(valeurTemp)),
                    texteTemp.append(valeurTemp),
                    elementsTemp.on("click", insererBulletinForum));
            texteTemp.show();
            var dialogueBulletins = $("<div>")
                    .attr("id", "div_fofo")
                    .html("Cliquez sur le nom d'un zoo pour insérer le rapport dans votre message<br>")
                    .append(texteTemp)
                    .dialog({
                        title: "Bulletins",
                    }),
                conteneurDialogue = parId("div_fofo").parentNode;
            (conteneurDialogue.setAttribute("style", "position:fixed;height:auto;width:300px;top:0px;left:0px"),
                parBalise("button", conteneurDialogue)[0].blur());
            break;
        case "accueil":
            var htmlListeZoos = "",
                couleursLignes = ["#FFFFFF", "#E6E6E6"];
            for (indexBoucle = 0, limiteBoucle = listeZoos.length; indexBoucle < limiteBoucle; indexBoucle++)
                htmlListeZoos +=
                    '<div style="padding:3px;background:' +
                    couleursLignes[indexBoucle % 2] +
                    '"><a class="raz_zoo" nomzoo="' +
                    listeZoos[indexBoucle] +
                    '" style="float:right;cursor:pointer"><span class="ui-icon ui-icon-trash"></span></a>' +
                    listeZoos[indexBoucle] +
                    "</div>";
            ($("<div>")
                .attr("id", "gestion_zoos")
                .css({
                    background: "#F1F1F1",
                })
                .appendTo("body")
                .html(
                    htmlListeZoos +
                    '<div style="padding:6px;text-align:center"><a id="importer_donnees" class="action" style="cursor:pointer;color:#12249a">Importer mes données (fichier JSON)</a> &nbsp;|&nbsp; <a id="exporter_donnees" class="action" style="cursor:pointer;color:#12249a">Exporter</a><br><a href="https://mikey-ufc.github.io/boite-a-malices-monzoo/" target="_blank" rel="noopener" style="color:#12249a;font-size:0.9em">Ancien fichier .db ? Convertissez-le ici</a></div>',
                )
                .hide()
                .dialog({
                    title: "Parcs enregistrés sur ce PC",
                    autoOpen: !1,
                }),
                $(".raz_zoo").on("click", function () {
                    (supprimerDonneesZoo($(this).attr("nomzoo")),
                        $(this).closest("div").remove(),
                        $("#gestion_zoos").find("div:even").css({
                            background: couleursLignes[0],
                        }),
                        $("#gestion_zoos").find("div:odd").css({
                            background: couleursLignes[1],
                        }));
                }),
                $(
                    '<div class="ui-state-highlight" style="cursor:pointer;width:80%;margin:auto;font-size:0.9em;padding:3px;vertical-align:middle;box-shadow:1px 2px 5px #333456"><span class="ui-icon ui-icon-gear" style="float:left;margin-right:3px;margin-top:0px"></span>Gérer mes parcs</div>',
                )
                    .insertBefore($("#form"))
                    .on("click", function () {
                        ($("#gestion_zoos").dialog("open"), parBalise("button", parId("gestion_zoos").parentNode)[0].blur());
                    }),
                $("input:submit")
                    .css({
                        float: "right",
                    })
                    .button(),
                $("#form")
                    .clone()
                    .addClass("ui-state-highlight")
                    .prepend(
                        $("<span>")
                            .html("Boite à malices pour monzoo version " + versionScript)
                            .css("font-size", "0.6em"),
                    )
                    .dialog({
                        title: "Bienvenue sur monzoo.net",
                    }),
                GM_deleteValue("maj_a_faire"),
                GM_deleteValue("maj_bonus"),
                GM_deleteValue("maj_PA"),
                GM_deleteValue("maj_PA2"),
                (dateJeu = new Date()),
                (dateJeu = new Date(Date.parse(dateJeu) - 36e5 * parseFloat(prefsUtilisateur.decalage_horaire))));
            var delaiRechargement =
                (13 == (heureJeu = parseInt(dateJeu.getHours())) || 23 == heureJeu) && dateJeu.getMinutes() > 45
                    ? 6e4 * (60 - dateJeu.getMinutes())
                    : 9e5;
            ((dateJeu = dateJeu.getDate() + "/" + (dateJeu.getMonth() + 1) + "/" + dateJeu.getFullYear()) !=
            GM_getValue("aujourd_hui", "") && GM_deleteValue("messages"),
                GM_setValue("aujourd_hui", dateJeu),
                GM_setValue("heure", heureJeu),
                (texteTemp = $("<div>").attr("id", "Hmonzoo").css("font-size", "0.9em")).html(
                    "Le script a calculé que sur le site de monzoo nous sommes le " +
                    dateJeu +
                    " et qu'il est (sans les minutes) <span style='background-color:#6BD949'>" +
                    heureJeu +
                    "</span> heure(s).<br><br>Si ce n'est pas le cas :<br>- connectez-vous<br>- fermez toutes les fenêtres (lancement de la maj et éventuellement la bourse) avec les boutons 'ne rien faire'<br>- changez le décage horaire dans les options (panda/général)<br>- puis déconnectez-vous.",
                ),
                texteTemp.dialog({
                    title: "Heure de monzoo",
                    width: 450,
                    modal: !0,
                    buttons: {
                        Ok: function () {
                            ($(this).dialog("destroy"), parNom("pseudo", parNom("form")[1])[1].focus());
                        },
                    },
                }));
            var fenetreHeure = parId("Hmonzoo").parentNode;
            (fenetreHeure.setAttribute(
                "style",
                "z-index:5005;position:fixed;width:450px;left:" + (window.innerWidth / 2 - 225) + "px",
            ),
                (fenetreHeure.style.top = (window.innerHeight - fenetreHeure.clientHeight) / 2 + "px"),
                parBalise("button", fenetreHeure)[1].focus(),
                window.setTimeout(rechargerAccueil, delaiRechargement));
    }
nomZoo &&
"forum" != pageCourante &&
(parc.infoscan.scan_messages &&
(GM_setValue("info_user", JSON.stringify(prefsUtilisateur)),
    GM_setValue(nomZoo + "_info_parc", JSON.stringify(parc))),
parc.premier_scan &&
parc.infoscan.scan_messages &&
parc.infoscan.scan_suite &&
!scanMajEnCours &&
proposerScanBourse());
var dureeExecution = new Date() - heureDebutScript;
if (
    (document.body.appendChild(
        creerElement("span", {
            style: "float:right;font-size:12px;color:#0ff",
            textContent: "Temps d'exécution du script = " + dureeExecution + " ms",
        }),
    ),
        nomZoo)
) {
    ($(document).tooltip({
        content: function () {
            return "handle_manquant" != $(this).attr("id") &&
            $(this).not("embed") &&
            $(this).not("[bginactive]").length &&
            $(this).not("[bgactive]").length
                ? $(this).attr("htmltitle")
                    ? $(this).attr("htmltitle")
                    : $(this).attr("title")
                : "";
        },
    }),
        $(document).tooltipX({
            content: function () {
                return "handle_manquant" == $(this).attr("id") ? $(this).attr("title") : "";
            },
            autoHide: !1,
        }),
        $("#handle_manquant").tooltipX({
            autoHide: !1,
        }));
    var perfsPage = JSON.parse(GM_getValue(nomZoo + "_ev_performances", "{}"));
    ("enclos" == pageCourante &&
    (typeEnclosUrl < 2 ? (pageCourante += " " + idEnclos) : (pageCourante = "bâtiment " + idEnclos)),
    perfsPage.hasOwnProperty(pageCourante) || (perfsPage[pageCourante] = []),
        perfsPage[pageCourante].push(dureeExecution),
        GM_setValue(nomZoo + "_ev_performances", JSON.stringify(perfsPage)));
}