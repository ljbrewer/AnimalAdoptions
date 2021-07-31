fetch('https://thatcopy.pw/catapi/rest/')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    //cat1 = document.createElement("figure")
    console.log(data);
  });
