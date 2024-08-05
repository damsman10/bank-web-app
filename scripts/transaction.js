

//greet the user
greetings();


function greetings () {

    const greet = document.getElementById('greetings');
    const parent = document.getElementById('rightHeader');
    const userName = localStorage.getItem("Name");
    const p = document.createElement('p');
    const date = new Date();
    const hourOfDay = date.getHours();

    if (hourOfDay >= 16 && hourOfDay < 24) {
        p.innerHTML = `Good Evening, ${userName}`;
    } else if (hourOfDay >= 12 && hourOfDay < 16) {
        p.innerHTML = `Good Afternoon, ${userName}`;
        
    } else if (hourOfDay >= 0 && hourOfDay < 12) {
        p.innerHTML = `Good Morning, ${userName}`;
    }

    p.classList.add('greetings')
    parent.appendChild(p);

}



// Show different screens
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    if (screenId === 'main') {
        document.getElementById('main-screen').style.display = 'block';
    } else {
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById(screenId + '-screen').classList.add('active');
    }
}





// Initialize account balance from localStorage or set to 0 if not found
let accountBalance = parseFloat(localStorage.getItem('accountBalance')) || 0;

// Function to update the displayed account balance
function checkBalance() {
    document.getElementById('accountBalance').innerText = `$${accountBalance.toFixed(2)}`;
}


// Function to handle quick transfer
function quickTransfer() {
    
    const sendButton = document.getElementById('sendButton');
    const nameInput = document.getElementById('name-input');
    const amountInput = document.getElementById('amount-input');

    sendButton.addEventListener('click', () => {

        if (amountInput.value == "" || isNaN(amountInput.value) || nameInput.value == "") {
            const message = document.getElementById("message");
            message.innerHTML = "Please enter transfer details";
            message.style.color = "red"
            message.classList.remove('hide');


        } else if (amountInput.value <= accountBalance) {
            accountBalance -= amountInput.value;
            localStorage.setItem('accountBalance', accountBalance);

            checkBalance();

            //show a paragraph under to show successful transfer or failed transfer
            

            message.innerHTML = `You transferred $${amountInput.value} to ${nameInput.value} successfully`;
            message.style.color = 'lightgreen';
            message.style.transition = '1.5s';
            message.classList.remove('hide');


            // add blinking effect;
            setInterval(function() {
            message.style.display = (message.style.display == 'none' ? '' : 'none');
            }, 800);
            }
            
            else{
                message.innerHTML = "Insufficient Funds"
                message.style.color = "red"
                message.classList.remove('hide');
            }

            
        
            amountInput.value = ""
            nameInput.value = ""
    });
    
}



function cashWithdrawal() {
    const withdrawalButton = document.getElementById('withdrawalButton');

    withdrawalButton.addEventListener("click", () => {


        const amountInput = document.getElementById('withdrawal-amount');

        if (amountInput.value === "" || isNaN(amountInput.value)) {
          

            const withdrawalMessage = document.getElementById("withdrawalMessage");
            withdrawalMessage.innerHTML = `Please enter a value or click back to continue`;
            withdrawalMessage.style.color = 'red';
            withdrawalMessage.classList.remove('hide');
            
        } else if (amountInput.value <= accountBalance) {
                accountBalance -= parseFloat(amountInput.value); // Ensure the input value is treated as a number
                localStorage.setItem('accountBalance', accountBalance);

                
                checkBalance();
                

                //show a paragraph under to show Success status of Deposit
                
                withdrawalMessage.innerHTML = `Withdrawal of $${amountInput.value} was successful, please take your money!!`;
                withdrawalMessage.style.color = 'lightgreen';
                withdrawalMessage.classList.remove('hide');

                amountInput.value = "";

            } else {
                withdrawalMessage.innerHTML = "Insufficient Funds"
                withdrawalMessage.style.color = "red"
                withdrawalMessage.classList.remove('hide');

                amountInput.value = "";
            }
            

        

    })
}


function cashDeposit() {
    const depositButton = document.getElementById('depositButton');
    depositButton.addEventListener('click', () => {
        
        const amountInput = document.getElementById('deposit-amount');

        if (amountInput.value === "" || isNaN(amountInput.value)) {
          

            const depositMessage = document.getElementById("depositMessage");
            depositMessage.innerHTML = `Please enter a value or click back to continue`;
            depositMessage.style.color = 'red';
            depositMessage.classList.remove('hide');
            
        } else {
            accountBalance += parseFloat(amountInput.value); // Ensure the input value is treated as a number
            localStorage.setItem('accountBalance', accountBalance);

            
            checkBalance();
            

            //show a paragraph under to show Success status of Deposit
            
            depositMessage.innerHTML = `You Deposited $${amountInput.value} successfully`;
            depositMessage.style.color = 'lightgreen';
            // message.style.transition = '1.5s';
            depositMessage.classList.remove('hide');

            amountInput.value = "";

        }
        

    })
}


function quickteller() {
    const phoneNumber = document.getElementById('phoneNumber');
    const airtimeAmount = document.getElementById('airtimeAmount');

    const airtimeButton = document.getElementById('airtimeButton');

    airtimeButton.addEventListener('click', () => {

        if (airtimeAmount.value === "" || isNaN(airtimeAmount.value) || phoneNumber.value === "" || isNaN(phoneNumber.value)) {
          

            const airtimeMessage = document.getElementById("airtimeMessage");
            airtimeMessage.innerHTML = `Please enter a value or click back to continue`;
            airtimeMessage.style.color = 'red';
            airtimeMessage.classList.remove('hide');
            
        } else if (airtimeAmount.value <= accountBalance) {
                accountBalance -= parseFloat(airtimeAmount.value); // Ensure the input value is treated as a number
                localStorage.setItem('accountBalance', accountBalance);

                
                checkBalance();
                

                //show a paragraph under to show Success status of Deposit
                
                airtimeMessage.innerHTML = `You have sent $${airtimeAmount.value} airtime to ${phoneNumber.value} succesfully!!`;
                airtimeMessage.style.color = 'lightgreen';
                airtimeMessage.classList.remove('hide');

                airtimeAmount.value = "";
                phoneNumber.value = "";

            } else {
                airtimeMessage.innerHTML = "Insufficient Funds"
                airtimeMessage.style.color = "red"
                airtimeMessage.classList.remove('hide');

                airtimeAmount.value = "";
                phoneNumber.value = "";
            }






    })
}


function newPassword() {
    const passwordButton = document.getElementById('passwordButton');
    passwordButton.addEventListener('click', () => {

        const newPassword = document.getElementById('new-password');
        const storedPassword = localStorage.getItem("Password");

        const numbers = /[0-9]+$/; //RegEx group for numbers 0-9


        if (newPassword.value.match(numbers)) {

            const passwordMessage = document.getElementById('passwordMessage');

            if (newPassword.value != storedPassword) {
            localStorage.setItem("Password", newPassword.value)

            passwordMessage.innerHTML = "Your Password has been Updated Successfully!!"
            passwordMessage.style.color = "lightgreen";
            passwordMessage.classList.remove('hide');
            newPassword.value = "";


            } else if (newPassword.value === storedPassword) {
                passwordMessage.innerHTML = "You cannot enter old password!!";
                passwordMessage.classList.remove('hide');
                passwordMessage.style.color = "red";
            }


        }
            
            else if (newPassword.value == "" || isNaN(newPassword)) {
                passwordMessage.innerHTML = "Please Enter New Password!!";
                passwordMessage.classList.remove("hide");
                passwordMessage.style.color = "red";
                
                newPassword.value = "";
            }
   
        

    })

}


// Function to clear localStorage
function clearLocalStorage() {
    localStorage.clear();
    accountBalance = 0;
    checkBalance();
    window.location.href = "index.html"
}

// Add event listener to clear storage button
document.getElementById('clearStorageButton').addEventListener('click', clearLocalStorage);


//function calls
quickTransfer();
checkBalance();
cashDeposit();
cashWithdrawal();
quickteller();
newPassword();

// Update the display when the page loads
window.addEventListener('load', checkBalance);

