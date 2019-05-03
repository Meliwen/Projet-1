$('#formSearch').on('submit', getValue);

function getValue(event) {
    event.preventDefault();

    var $recherche_artist = $('#search-artist').val(); //Récupérer la valeur de l'input texte

    const $selectMenu = $('#search-param'); //Associer le menu dédoulant à une variable
    const $selectOption = $selectMenu.find('option:selected'); //Trouver l'option qui a été sélectionnée dans le menu déroulant
    const $recherche_tri = $selectOption.val(); //Récupérer la valeur de l'option sélectionnée


    $.ajax({

        url: 'https://api.deezer.com/search?q=' + $recherche_artist + '&order=' + $recherche_tri + '&output=jsonp',

        dataType: 'jsonp'

    }).done(function (resultat) {

        const $template = $(document.createDocumentFragment());

        for (var i = 0; i < resultat.data.length; i++) {

            const track = resultat.data[i].title;
            const album = resultat.data[i].album.title;
            const artist = resultat.data[i].artist.name;
            const cover_big = resultat.data[i].album.cover_big;
            const track_preview = resultat.data[i].preview;
            const track_id = resultat.data[i].id;

            var $carte = $(`<div class="carte_container">
                                <div class="carte">
                                <img src="${cover_big}" alt="...">
                                <div class="carte-body">
                                    <h5 class="card-title">${track}</h5>
                                    <p class="carte-album">Album: ${album}</p>
                                    <p class="carte-artist">${artist}</p>
                                    <audio controls>
                                    <source src="${track_preview}" type="audio/ogg">
                                    </audio>
                                </div>
                                <div class="carte-footer">
                                    <button type="button" class="btn btn-outline-danger addFavori">Ajouter aux favoris</button>
                                </div>
                                </div>
                            </div>`);

            $carte.data('track', resultat.data[i]);

            $template.append($carte);
        } // fin for

        $('#results').html($template);

        $('.addFavori').on('click', addFavori);

        function addFavori() {
            var favs = JSON.parse(localStorage.getItem('fav'));

            const track = $(this).parents('.carte_container').data('track'); // La carte qui a été cliquée

            var deleted = false;

            if (favs === null) {
                favs = []
            }
            // Parcourir le tableau pour vérifier si le track cliqué se trouve dedans
            for (var i = 0; i < favs.length; i++) {
                if (favs[i].id == track.id) {// Si l'élément s'y trouve...
                    favs.splice(i, 1); // ...on le supprime avec splice
                    deleted = true; // On vérifie si il a été supprimé
                    break;
                }
            }


            if (deleted === false) {
                // SINON, on l'ajoute avec push
                favs.push(track);
            }

            localStorage.setItem('fav', JSON.stringify(favs)); // On enregistre le nouveau tableau
        }
    })
}
// Afficher les musiques favorites mais en string ...
$("#display_fav").click(function displayFavs() {
    document.getElementById("result_fav").innerHTML = (localStorage.getItem('fav'));
 });