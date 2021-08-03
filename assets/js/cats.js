var cat = [];


for (let i = 0; i < 3; i++) {
 console.log(i);
function start() {
  fetch("https://api.thecatapi.com/v1/images/search?limit=3&order=Desc")
    .then(function (response) {
    return response.json();
  })
      .then(function (res) {
       cat[i] = document.getElementById("catpic1");
       console.log(cat[i]);
        cat[i].setAttribute("src", res.url[i]);
;
        localStorage.setItem(1, res.url[i]);

        //cat1 = document.createElement(“figure”)
      });
}}
start();
