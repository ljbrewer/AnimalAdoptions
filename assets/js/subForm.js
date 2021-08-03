// var submissionForm = document.querySelector('.submit-Info');
// var infoSubmit = document.querySelector('#submitBtn')
// var submittedInfo = []
// var congratsEl = document.querySelector('#congrats'); 

// // var adoptionInfo = localStorage.get('')

// function displayMessage(type, message) {
//   congratsMsgDiv.textContent = message;
//   congratsMsgDiv.setAttribute("class", type);
// }

// function submitForm() {
//   submissionForm.style.display = 'block';
//   congratsEl.style.display = 'none';

//   var firstName = localStorage.getItem('multi-first-name')
//   var lastName = localStorage.getItem('multi-last-name')
//   // var email = localStorage.getItem('multi-email')
//   // var phoneNumber = localStorage.getItem('multi-phone-number')
//   // var address = localStorage.getItem('multi-address')
//   // var city = localStorage.getItem('multi-city')
//   // var state = localStorage.getItem('multi-state')
//   // var zipCode = localStorage.getItem('multi-zip-code')
//   // var yesNo = localStorage.getItem('selectionYN')


//   // || !email || !phoneNumber || !address || !city || !state || !zipCode || !yesNo 
//   if (!firstName || !lastName ) {
//     return;
//   }



// } 

// infoSubmit.addEventListener('click', function(event) {
//   event.preventDefault();

//   var firstName = document.querySelector('#multi-first-name').value
//   var lastName = document.querySelector('#multi-last-name').value
//   // var email = localStorage.querySelector('#multi-email').value
//   // var phoneNumber = localStorage.querySelector('#multi-phone-number').value
//   // var address = localStorage.querySelector('#multi-address').value
//   // var city = localStorage.querySelector('#multi-city').value
//   // var state = localStorage.querySelector('#multi-state').value
//   // var zipCode = localStorage.querySelector('#multi-zip-code').value
//   // var yesNo = localStorage.querySelector('#selectionYN').value

//   if (firstName === "") {
//     displayMessage('error', 'First Name cannot be blank')
//   } else if (lastName === "") {
//     displayMessage('error', 'Last Name cannot be blank')
//   } else {
//     displayMessage('success', 'Register Successfully')

//     localStorage.setItem('First Name', firstName)
//     localStorage.setItem('Last Name', lastName)
    
//     submitForm();

//   }

// });

var dogPic = "";

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








