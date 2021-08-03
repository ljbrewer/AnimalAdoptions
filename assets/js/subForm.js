var submissionForm = document.querySelector('.submit-Info');
var submittedInfo = []
var congratsEl = document.querySelector('#congrats'); 

// var adoptionInfo = localStorage.get('')

function submitForm() {
  submissionForm.style.display = 'block';
  congratsEl.style.display = 'none';

  var firstName = localStorage.getItem('multi-first-name')
  var lastName = localStorage.getItem('multi-last-name')
  var email = localStorage.getItem('multi-email')
  var phoneNumber = localStorage.getItem('multi-phone-number')
  var address = localStorage.getItem('multi-address')
  var city = localStorage.getItem('multi-city')
  var state = localStorage.getItem('multi-state')
  var zipCode = localStorage.getItem('multi-zip-code')
  var yesNo = localStorage.getItem('selectionYN')


} 






