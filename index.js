var fs_contenuHtml = '';

function fct_afficherMasquerCategorie(po_element) {
    if ($(po_element).hasClass("glyphicon-chevron-down")) {
        $(po_element).removeClass("glyphicon-chevron-down");
        $(po_element).addClass("glyphicon-chevron-up");

        $(po_element).parents("div.link-container").removeClass("link-hidden");
        $(po_element).parents("div.link-container").addClass("link-visible");
    }
    else {
        $(po_element).removeClass("glyphicon-chevron-up");
        $(po_element).addClass("glyphicon-chevron-down");

        $(po_element).parents("div.link-container").removeClass("link-visible");
        $(po_element).parents("div.link-container").addClass("link-hidden");
    }
}

function fct_getContenuHtmlCategorie(pa_categories) {
    var fi_indexLigne = -1;

    pa_categories.forEach(po_categorie => {
        if (po_categorie.attributes[1].value != fi_indexLigne) {
            if (po_categorie.attributes[1].value != 0) {
                fs_contenuHtml += '\n</div>';
            }

            fs_contenuHtml += '\n<div class="div-row">';
            fi_indexLigne = po_categorie.attributes[1].value;
        }

        fs_contenuHtml += '\n<div class="link-container link-visible">';

        fs_contenuHtml += '\n<div class="title-container">';
        fs_contenuHtml += '\n<h2>' + po_categorie.attributes[0].value + ' <span class="glyphicon glyphicon-chevron-up" onclick="fct_afficherMasquerCategorie(this)"></span></h2>';
        fs_contenuHtml += '\n</div>';

        fs_contenuHtml += '\n<div class="content">';
        fs_contenuHtml += '\n<table>';
        var fa_liens = Array.from(po_categorie.getElementsByTagName("liens")[0].children);
        fct_getContenuHtmlLien(fa_liens);
        fs_contenuHtml += '\n</tr>';
        fs_contenuHtml += '\n</table>';
        fs_contenuHtml += '\n</div>';

        fs_contenuHtml += '\n</div>';
    });

    if (fi_indexLigne != -1) {
        fs_contenuHtml += '\n</div>';
    }

    return fs_contenuHtml;
}

function fct_getContenuHtmlLien(pa_liens) {
    var fi_indexLigne = -1;

    pa_liens.forEach(po_lien => {
        if (po_lien.attributes[0].value != fi_indexLigne) {
            if (po_lien.attributes[0].value != 0) {
                fs_contenuHtml += '\n</tr>';
            }

            fs_contenuHtml += '\n<tr>';
            fi_indexLigne = po_lien.attributes[0].value;
        }

        fs_contenuHtml += '\n<td>';
        fs_contenuHtml += '\n<a href="' + po_lien.children[0].innerHTML + '" target="_blank" title="' + po_lien.children[2].innerHTML + '">' + po_lien.children[1].innerHTML + '</a>';
        fs_contenuHtml += '\n</td>';
    });

    if (fi_indexLigne != -1) {
        fs_contenuHtml += '\n</tr>';
    }
}