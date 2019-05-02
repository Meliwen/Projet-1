/*$.ajax({

   url : 'https://api.deezer.com/search?q=eminem&output=jsonp',

   dataType : 'jsonp'

}).done(function(musiques) {

   console.log(musiques);

    document.querySelector('#results').innerHTML =

        musiques.data.map(m => m.title).join('<br>');

});*/

/*
$.ajax({
    url : 'https://api.deezer.com/search?q=eminem&output=jsonp',
    dataType : 'jsonp' 
}).done(function(musiques) {

for (var i = 0; i < musiques.data.length; i++) {
    var item = document.createElement("li");
        item.innerHTML = musiques.data[i].title; 
        $("ol").append(item)
        console.log(musiques.data[i].artist.name)
    }
});
*/