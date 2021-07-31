var searchButton = document.getElementById('find-me');
var bearContainer = document.getElementById('bearContainer');


function displayBear(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
      var image = document.createElement('img')
      image.setAttribute('src', imageArray[i])
      image.setAttribute('alt', "Bear Image")
      container.append(image);
    }
  }
  
  function getBearData(term = 'Foxes') {
     var endPoint = "https://randomfox.ca/floof/"
    fetch(endPoint)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
      .then(function (data) {
      //displayBear(data.message);
      console.log(data);
      })
  }
  
  getBearData();




searchButton.addEventListener('click', getBearData);