
let submitForm = document.querySelector('#submitBtn');
let msgDiv = document.querySelector('#msg');
let finalPageEl = document.querySelector('#after-Submit')
let form = document.querySelector('#myForm')

renderSavedInput();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type)
}


function renderSavedInput() {
  var firstName = localStorage.getItem('multi-first-name')
  var lastName = localStorage.getItem('multi-last-name')
  var address = localStorage.getItem('multi-address')
  var city = localStorage.getItem('multi-city')
  var state = localStorage.getItem('multi-state')
  var zipCode = localStorage.getItem('multi-zip-code')
  var email = localStorage.getItem('multi-email')
  var phoneNumber = localStorage.getItem('multi-phone-number')
  var yNSelection = localStorage.getItem('selectionYN')
  var questionTwo = localStorage.getItem('screen-q-2')
  var signature = localStorage.getItem('multi-signature')

  if (!firstName || !lastName || !address || !city || !state || !zipCode || !email || !phoneNumber || !yNSelection || questionTwo || signature) {
    return;
  }

}

submitForm.addEventListener('click', function(event) {
  event.preventDefault();

  finalPageEl.style.display = 'none';
  form.style.display = 'block';

  var firstName = document.querySelector("#multi-first-name").value;
  var lastName = document.querySelector("#multi-last-name").value;
  var address = document.querySelector("#multi-address").value;
  var city = document.querySelector("#multi-city").value;
  var state = document.querySelector("#multi-state").value;
  var zipCode = document.querySelector("#multi-zip-code").value;
  var email = document.querySelector("#multi-email").value;
  var phoneNumber = document.querySelector("#multi-phone-number").value;
  var question1 = document.querySelector("#selectionYN").value;
  var question2 = document.querySelector("#screen-q-2").value;
  var signature = document.querySelector("#multi-signature").value;

  if (firstName === "") {
    displayMessage('error', 'First Name cannot be left blank');
  } else if (lastName === "") {
    displayMessage('error', 'Last Name be left blank');
  } else if (address === "") {
    displayMessage('error', 'Address cannot be left blank');
  } else if (city === "") {
    displayMessage('error', 'City cannot be left blank');
  } else if (state === "") {
    displayMessage('error', 'State cannot be left blank');
  } else if (zipCode === "") {
    displayMessage('error', 'Zip Code cannot be left blank');
  } else if (email === "") {
    displayMessage('error', 'Email cannot be left blank');
  } else if (phoneNumber === "") {
    displayMessage('error', 'Phone Number cannot be left blank');
  } else if (question1 === "") {
    displayMessage('error', 'Questions cannot be left blank');
  } else if (question2 === "") {
    displayMessage('error', 'Questions cannot be left blank');
  } else if (signature === "") {
    displayMessage('error', 'Your Signature is Required');
  }  else {
    displayMessage('success', 'Submission accepted');

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("zip code", zipCode);
    localStorage.setItem("email", email);
    localStorage.setItem("phone number", phoneNumber);
    localStorage.setItem("question 1", question1);
    localStorage.setItem("question 2", question2);
    localStorage.setItem("signature", signature);
    renderSavedInput();

    form.style.display = 'none';

  if (finalPageEl.style.display === 'none') {
    finalPageEl.style.display = 'block'
  }
  }

});



var dogPic = [];

function getGif(term = 'terrier') {
  var endPoint = "https://dog.ceo/api/breed/" + term +"/images/random/3"
 fetch(endPoint)
 .then(function(response) {
   return response.json();
 })
   .then(function (data) {
    console.log(data);
      dogPic = document.getElementById('gifPlace');
    dogPic.setAttribute('src', data.message[1])
    localStorage.setItem(1, data.message[1])
   })
}

getGif();