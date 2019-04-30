/*$.ajax({

   url : 'https://api.deezer.com/search?q=eminem&output=jsonp',

   dataType : 'jsonp'

}).done(function(musiques) {

   console.log(musiques);

    document.querySelector('#results').innerHTML =

        musiques.data.map(m => m.title).join('<br>');

});*/


$.ajax({
    url : 'https://api.deezer.com/search?q=eminem&output=jsonp',
    dataType : 'jsonp' 
}).done(function(musiques) {

for (var i = 0; i < musiques.data.length; i++) {
        console.log(musiques.data[i].title)
        console.log(musiques.data[i].artist.name)
    }
});



