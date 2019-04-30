document.getElementById("btn-search").addEventListener("submit", getValue);

function getValue() {
    var bla = $('#search-titre').val(); //Get value
    $('#search-titre').val(bla);
    alert(bla);
}