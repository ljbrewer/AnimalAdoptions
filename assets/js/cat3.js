function start() {
    var caturl = localStorage.getItem(3)
    // console.log(caturl)
    var cat1 = document.getElementById("catImg3");
    cat1.setAttribute('src', caturl)
}

start();