$('#formSearch').on('submit', getValue);

function getValue(event) {
    event.preventDefault();

    var $recherche_artist = $('#search-artist').val(); //Get value

    $.ajax({

        url : 'https://api.deezer.com/search?q='+$recherche_artist+'&output=jsonp',
     
        dataType : 'jsonp'
     
     }).done(function(musiques) {

        const $template = $(document.createDocumentFragment());
        
        for (var i = 0; i < musiques.data.length; i++) {
    
            const track = musiques.data[i].title;
            const album = musiques.data[i].album.title;
            const artist = musiques.data[i].artist.name;
            const cover_big = musiques.data[i].album.cover_big;

            $template.append(`
            <div class="carte_container">
                <div class="carte">
                <img src="${cover_big}" alt="...">
                <div class="carte-body">
                    <p class="carte-title">${track}</p>
                    <p class="carte-album">${album}</p>
                    <p class="carte-artist">${artist}</p>
                </div>
                <div class="carte-footer">
                    <button type="button" class="btn btn-outline-danger">Ajouter aux favoris</button>
                </div>
                </div>
            </div>
            `)
        } // fin for

        $('#results').html( $template );

    });
    
}

