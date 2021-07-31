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
      var cat1 = document.getElementById("dogpic1");
      var cat2 = document.getElementById("catpic2");
      var cat3 = document.getElementById("catpic3");
      cat1.setAttribute("src", data.message[0]);
      cat2.setAttribute("src", res[1].url);
      cat3.setAttribute("src", res[2].url);
      localStorage.setItem(1, res[0].url);
      localStorage.setItem(2, res[1].url);
      localStorage.setItem(3, res[2].url);
    displayDog(data.message);
    })
}

getDogData();

document.querySelector('#search').addEventListener('submit', function (event) {
  event.preventDefault();
  getDogData(document.querySelector('input').value.trim());
})

// document.querySelector('#submitBtn').addEventListener('submit', function (event) {
//   event.preventDefault()
//   console.log("submitBtn")
//   window.location = "./submission-Form/subForm.html";
//});
