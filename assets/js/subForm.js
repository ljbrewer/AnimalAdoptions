var submissionForm = document.querySelector('')

function submitForm() {
  if(document.adoptForm.onsubmit && !document.adoptForm.onsubmit()) {
    return;
  }
  document.adoptForm.submit();


} 




