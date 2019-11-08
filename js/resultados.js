var queryString = location.search; //Capturamos la query string del navegador

var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString

var search = searchParams.get("search"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

var url = "https://api.themoviedb.org/3/search/tv?api_key=7246c48f98d8db92d443b21af0633a14&language=en-US&page=1"+ search 
fetch(url)
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
  var destino = document.querySelector(".resultados");
  var datosFinales = datos.data;
  var li = ""

  for(var i=0; i<datosFinales.length; i++){
    li += "<li>"
    li += datosFinales[i].title + i
    li += "</li>"
  }

  destino.innerHTML = li //Inlcuimos todos los li del for en el contenedor html que capturamos en la línea 14.



})
