var container = document.querySelector('#dogContainer');

var dogpic = [];

function displayDog(imageArray) {
  for (let i = 0; i < imageArray.length; i++) {
    var image = document.createElement('img')
    image.setAttribute('src', imageArray[i])
    dogpic[i]=imageArray[i];
    console.log(dogpic[i]);
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
    console.log(data);
    })
}

getDogData();

document.querySelector('#search').addEventListener('submit', function (event) {
  event.preventDefault();
  getDogData(document.querySelector('input').value.trim());
})

document.querySelector('#submitBtn').addEventListener('submit', function (event) {
  event.preventDefault()
  console.log("submitBtn")
  window.location = "./submission-Form/subForm.html";
});
