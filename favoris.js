$('#addFavori').on('click', addFavori);

function addFavori(event) {
    event.preventDefault();
    
    alert("Musique ajoutée aux favoris");
        
    $.ajax({

        url : 'https://api.deezer.com/search?q='+$recherche_artist+'&order='+$recherche_tri+'&output=jsonp',
    
        dataType : 'jsonp'
     
     }).done(function(resultat) {

        const $template = $(document.createDocumentFragment());
    
        localStorage.setItem('track_id', $track_id);
        
        for (var i = 0; i < resultat.data.length; i++) {
    
            const track_id = resultat.data[i].id;

            console.log(track_id);
        } // fin for

        $('#results').html( $template );

    });
    
}