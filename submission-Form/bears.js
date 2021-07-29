var searchButton = document.getElementById('find-me');


// function displayBear()
fetch('https://placebear.com/200/300')
  .then(response => response.json())
  .then(data => console.log(data));


// function getBearPics(term = 'bears') {
    
// var key = '21fdcacl68aypKOUNa7JaHMbnkOLR7Z7';
// var endPoint = 'https://placebear.com/200/300';
// fetch(endPoint)
// .then(function(response) {
//     return response.json(); 
// })
// .then(function(data) {
//     getBearPics(data.data[0]);
// })  
// }


searchButton.addEventListener('click', getBearPics);