var searchButton = document.getElementById('find-me');
var bearContainer = document.getElementById('foxesContainer');
var fox1 = document.getElementById("foxpic1");

var foxpic = [];

function start() {
  fetch("https://randomfox.ca/floof/")
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      var fox1 = document.getElementById("foxpic1");
      fox1.setAttribute("src", res[0].url);
      localStorage.setItem(1, res[0].url);
    });
}
start();


function displayFox(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
      var image = document.createElement('img')
      image.setAttribute('src', imageArray[i])
      foxpic[i]=imageArray[i];
      image.setAttribute('alt', "Fox Image")
      container.append(image);
    }
  }
  
  for (var i = 0; i < 3; i++) {
  function getFoxData(term = 'Foxes') {
     var endPoint = "https://randomfox.ca/floof/"
    fetch(endPoint)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
      .then(function (data) {
      displayFox(data.message);
      // console.log(data);
      })
    }
  }
  
  getFoxData();

  document.querySelector('#search').addEventListener('submit', function (event) {
    event.preventDefault();
    getFoxData(document.querySelector('input').value.trim());
  })
  
  document.querySelector('#submitBtn').addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("submitBtn")
    window.location = "./submission-Form/subForm.html";
  });