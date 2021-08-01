function start() {
    var caturl = localStorage.getItem(2)
    // console.log(caturl)
    var cat1 = document.getElementById("catImg2");
    cat1.setAttribute('src', caturl)
}

start();