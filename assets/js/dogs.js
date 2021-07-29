var container = document.querySelector('#dogContainer');

function displayDog(imageArray) {
  for (let i = 0; i < imageArray.length; i++) {
    var image = document.createElement('img')
    image.setAttribute('src', imageArray[i])
    image.setAttribute('alt', "Dog Image")
    container.append(image);
    
  }
}

function getDogData(term = 'terrier') {
   var endPoint = "https://dog.ceo/api/breed/" + term +"/images/random/3"
  fetch(endPoint)
  .then(function(response) {
    //console.log(response);
    return response.json();
  })
    .then(function (data) {
    displayDog(data.message);
    })
}

getDogData();

document.querySelector('#search').addEventListener('submit', function (event) {
  event.preventDefault();
  getDogData(document.querySelector('input').value.trim());
})
