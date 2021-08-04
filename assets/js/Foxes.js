var bearContainer = document.querySelector('#foxesContainer');

var foxpic = [];


  var picture = [];
function getFoxData() {
  foxpic[0] = document.querySelector('.foxpic1');
  foxpic[1] = document.querySelector('.foxpic2');
  foxpic[2] = document.querySelector('.foxpic3');
  for (let i = 0; i < 3; i++) {
  var endPoint = "https://randomfox.ca/floof/"
 fetch(endPoint)
 .then(function(response) {
   return response.json();
 })
   .then(function (data) {
    console.log(foxpic[i]);
     foxpic[i].setAttribute('src', data.image);
     localStorage.setItem(1, data.image);
   })
  }
}


    
  getFoxData();

  document.querySelector('#search').addEventListener('submit', function (event) {
    event.preventDefault();
    getFoxData(document.querySelector('input').value.trim());
  })
  