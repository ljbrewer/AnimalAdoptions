var container = document.querySelector('#dogContainer');

var dogpic = [];


function getDogData(term = 'terrier') {
   var endPoint = "https://dog.ceo/api/breed/" + term +"/images/random/3"
  fetch(endPoint)
  .then(function(response) {
    //console.log(response);
    return response.json();
    
  })
    .then(function (data) {
    console.log(data);
      dogpic[0] = document.getElementById("dogpic1");
      dogpic[1] = document.getElementById("dogpic2");
      dogpic[2] = document.getElementById("dogpic3");
      dogpic[0].setAttribute("src", data.message[0]);
      dogpic[1].setAttribute("src", data.message[1]);
      dogpic[2].setAttribute("src", data.message[2]);
      localStorage.setItem(1, data.message[0]);
      localStorage.setItem(2, data.message[1]);
      localStorage.setItem(3, data.message[2]);
    })
}

getDogData();

document.querySelector('#search').addEventListener('submit', function (event) {
  event.preventDefault();
  getDogData(document.querySelector('input').value.trim());
})

