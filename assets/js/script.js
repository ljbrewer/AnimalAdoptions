
var searchButton = document.getElementById('find-me');


function displayBear()


function getBearPics(term = 'bears') {
    
 var key = '21fdcacl68aypKOUNa7JaHMbnkOLR7Z7';
var endPoint = 'https://api.giphy.com/v1/gifs/search?limit=1&api_key=' + key + "&q=" + term;
fetch(endPoint)
.then(function(response) {
    return response.json(); 
})
.then(function(data) {
    displayGif(data.data[0]);
})  
}


searchButton.addEventListener('click', getBearPics);




