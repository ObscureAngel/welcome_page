function fct_afficherMasquerCategorie(po_element) {
	if (po_element.classList.contains("chevron-down")) {
		po_element.classList.remove("chevron-down");
		po_element.classList.add("chevron-up");

		po_element.parentNode.parentNode.parentNode.classList.remove("link-hidden");
		po_element.parentNode.parentNode.parentNode.classList.add("link-visible");
	}
	else {
		po_element.classList.remove("chevron-up");
		po_element.classList.add("chevron-down");

		po_element.parentNode.parentNode.parentNode.classList.remove("link-visible");
		po_element.parentNode.parentNode.parentNode.classList.add("link-hidden");
	}
}

function fct_getContenuHtmlCategorie(pa_categories) {
	let fi_indexLigne = -1;
	let fs_contenuHtml = '';

	pa_categories.forEach(po_categorie => {
		if (po_categorie.ligne != fi_indexLigne) {
			if (po_categorie.ligne != 0) {
				fs_contenuHtml += '\n</div>';
			}

			fs_contenuHtml += '\n<div class="div-row">';
			fi_indexLigne = po_categorie.ligne;
		}

		fs_contenuHtml += '\n<div class="link-container link-visible">';

		fs_contenuHtml += '\n<div class="title-container">';
		fs_contenuHtml += '\n<h2>' + po_categorie.titre + ' <span class="chevron-up" onclick="fct_afficherMasquerCategorie(this)"></span></h2>';
		fs_contenuHtml += '\n</div>';

		fs_contenuHtml += '\n<div class="content">';
		fs_contenuHtml += '\n<table>';
		fs_contenuHtml += fct_getContenuHtmlLien(po_categorie.liens);
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
	let fi_indexLigne = -1;
	let fs_contenuHtml = '';

	pa_liens.forEach(po_lien => {
		if (po_lien.ligne != fi_indexLigne) {
			if (po_lien.ligne != 0) {
				fs_contenuHtml += '\n</tr>';
			}

			fs_contenuHtml += '\n<tr>';
			fi_indexLigne = po_lien.ligne;
		}

		fs_contenuHtml += '\n<td>';
		fs_contenuHtml += '\n<a href="' + po_lien.url + '" target="_blank" title="' + po_lien.description + '">' + po_lien.titre + '</a>';
		fs_contenuHtml += '\n</td>';
	});

	if (fi_indexLigne != -1) {
		fs_contenuHtml += '\n</tr>';
	}

	return fs_contenuHtml
}