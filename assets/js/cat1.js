function start() {
    var caturl = localStorage.getItem(1)
    // console.log(caturl)
    var cat1 = document.getElementById("catImg1");
    cat1.setAttribute('src', caturl)
}

start();