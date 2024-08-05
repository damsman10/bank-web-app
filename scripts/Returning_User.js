const passwordInput = document.getElementById('password');
const button = document.getElementById('button');





button.addEventListener("click", () => {
    const password = localStorage.getItem("Password");
    // const userName = localStorage.getItem("Name");

    

    if (passwordInput.value.match(password)) 
        {
            
        passwordInput.value = "";
        window.location.href = "transaction.html";
        
    } 
    else {
        passwordInput.classList.add('error');
        passwordInput.value = "";
        // show a text saying 'user not found'
        document.getElementById('notSuccessful').classList.remove('hide');
        
        document.getElementById('notSuccessful').style.transition = '1.5s';
        // add blinking effect;
        setInterval(function() {
            document.getElementById('notSuccessful').style.display = (document.getElementById('notSuccessful').style.display == 'none' ? '' : 'none');
        }, 800);

        throw new Error ("User not in our Database"); 
    
    }

    
})
//     } 
//     else {


//         
//     }
        
// }
// )



