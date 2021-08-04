
function start() {
  fetch("https://api.thecatapi.com/v1/images/search?limit=3&order=Desc")
    .then(function (response) {
      //console.log (response);
      return response.json();
    })
    .then(function (res) {
       //console.log(res)
      var cat1 = document.getElementById("catpic1");
      var cat2 = document.getElementById("catpic2");
      var cat3 = document.getElementById("catpic3");
      cat1.setAttribute("src", res[0].url);
      cat2.setAttribute("src", res[1].url);
      cat3.setAttribute("src", res[2].url);
      localStorage.setItem(1, res[0].url);
      localStorage.setItem(2, res[1].url);
      localStorage.setItem(3, res[2].url);
      //cat1 = document.createElement(“figure”)
    });
}
start();
