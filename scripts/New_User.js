const passwordInput = document.getElementById('password');
const button = document.getElementById('button');



const numbers = /[0-9]+$/; //RegEx group for numbers 0-9



button.addEventListener("click", () => {


    const notNumber = document.getElementById('notNumber'); 

    if (passwordInput.value.match(numbers)) {


    localStorage.setItem("Password", password.value);

    window.location.href = "transaction.html";
    passwordInput.value = "";
    

    } else {
        notNumber.innerHTML = "Please Enter an accepted Value"
        
        passwordInput.value = "";
        passwordInput.classList.add('error'); 
    }
        
})



