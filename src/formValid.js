function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    const errorDiv = document.getElementById('error');

    const imgShow = ()=>{
        const alertPic = document.createElement('img')
        alertPic.setAttribute(
            'src',
            '..//imgs/alert.png',
          );
          errorDiv.appendChild(alertPic);
    }

    // Check if name is empty
    if (name === "") {
        errorDiv.innerText="Name field must be filled out"
        errorDiv.classList.add('border-red');
        imgShow();
        return false;
    }

    // Check if email is empty
    if (email === "") {
        errorDiv.innerText="Email field must be filled out"
        errorDiv.classList.add('border-red')
        imgShow();
        return false;
    }

    // Check if email is valid (basic validation)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errorDiv.innerText="Invalid email adress"
        errorDiv.classList.add('border-red')
        imgShow();
        return false;
    }

    // Check if message is empty
    if (message === "") {
        errorDiv.innerText="Message field must be filled out"
        errorDiv.classList.add('border-red')
        imgShow();
        return false;
    }

    return true; // Form is valid and can be submitted
}