document.getElementById("form").addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  document.querySelectorAll('.errormessage').forEach(span => span.textContent = "");
  document.querySelectorAll('.inputField, .textarea').forEach(input => input.style.border = "1px solid var(--Grey_900_darker)");

  const firstName = document.getElementById('name');
  if(!firstName.value.trim()){
    setError(firstName, "This field is required");
    isValid = false;
  }
  
  const lastName = document.getElementById('lastName');
    if (!lastName.value.trim()) {
        setError(lastName, "This field is required");
        isValid = false;
    }

  
    const email = document.getElementById("email");
    if(!email.value.trim()){
        setError(email, "This field is required");
        isValid = false;
    }
    else if(!validateEmail(email.value)){
        setError(email, "Please enter a valid email address");
        isValid = false;
    }



    const queryType = document.querySelector('input[name="query"]:checked');
    const radioError = document.querySelector('.radioGroup .errormessage');
    if (!queryType) {
      radioError.textContent = "Please select a query type";
      isValid = false;
    } else {
      radioError.textContent = "";
    }


    const message = document.getElementById('message');
    const messageError = message.closest(".formItem").querySelector('.errormessage');
    if (!message.value.trim()) {
        messageError.textContent = "This field is required";
        message.style.border = "1px solid var(--Red)";
        isValid = false;
    }else{
        messageError.textContent = "";
    }


    const checkbox = document.getElementById("checkbox");
    const checkboxError = checkbox.closest('.formItem').querySelector('.errormessage');
    if(!checkbox.checked){
        checkboxError.textContent = "To submit this form, please consent to being contacted";
        isValid = false;
    }else {
        checkboxError.textContent = "";
    }

    


    if(isValid){
       const successAlert = document.querySelector(".successAlert");
       successAlert.style.visibility = "visible";

       window.scrollTo({ top: 0, behavior: "smooth"});

       setTimeout( ()=>{
        window.location.reload()
       }, 4000);

       
    }
    
});

function setError(element, message){
    element.style.border = "1px solid var(--Red)";
    element.nextElementSibling.textContent = message;
}


function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}