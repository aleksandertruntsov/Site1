/**
 * Created by Саша on 11.03.2015.
 */

var ratingTable = document.getElementsByClassName('rating-table')[0];
ratingTable.onclick = function(e){
    if(e.target.parentNode.className=='name-film'){
        localStorage.nameFilm=e.target.innerHTML;
     console.log(e.target.innerHTML)
    }
}