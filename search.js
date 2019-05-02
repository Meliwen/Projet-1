$('#formSearch').on('submit', getValue);

function getValue(event) {
    event.preventDefault();

    var $recherche_artist = $('#search-artist').val(); //Get value
    var $recherche_tri = $('#search-param option:selected').val()
        
    $.ajax({

        url : 'https://api.deezer.com/search?q='+$recherche_tri+'&output=jsonp',
     
        dataType : 'jsonp'
     
     }).done(function(resultat) {

        $(document).ready(function(){
            $('#search-param').change(function () {
            $('#search-param option:selected').val();
            })
            .trigger('change');
        })

        const $template = $(document.createDocumentFragment());
        
        for (var i = 0; i < resultat.data.length; i++) {
    
            const track = resultat.data[i].title;
            const album = resultat.data[i].album.title;
            const artist = resultat.data[i].artist.name;
            const cover_big = resultat.data[i].album.cover_big;

            $template.append(`
            <div class="carte_container">
                <div class="carte">
                <img src="${cover_big}" alt="...">
                <div class="carte-body">
                    <h5 class="card-title">${track}</h5>
                    <p class="carte-album">Album: ${album}</p>
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

