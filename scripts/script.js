const rightHeader = document.getElementById("rightHeader");

const date = new Date();
//create a p element to hold the date
const p = document.createElement('p');

//create an array of days and use the getDay method as array index to get day of the week
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[date.getDay()];
//since getMonth is indexed from 0, we need to add 1 to it
let month = date.getMonth() + 1;

//pass the dates into the element
p.innerHTML = ` ${day},  ${date.getDate()} / ${month} / ${date.getFullYear()}  | ${date.getHours()} : ${date.getMinutes()}`;
//add the element to the dom
rightHeader.appendChild(p);


const input = document.getElementById("input");
const userName = input.value;

const buttons = document.querySelectorAll("button");

for (const button of buttons) {

    button.addEventListener('click', function (e) {

        if (button.innerHTML === "Returning User"){
            window.location.href = "Returning_User.html";
        }

        else if (button.innerHTML === "New User"){
            const userName = input.value;

            //condition to make code run only when name is entered

            if (userName !== ""){
            //push the name to local storage so you can get anytime
            localStorage.setItem("Name", userName);

            username = "";

            window.location.href = "New_User.html"



        }   else {
            
            input.classList.add('error');
            throw new Error ("Please Enter name"); 
            
            }
        



        } 
            
    

        
    })
}










//To get the time to say 1:39am
// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }
  
//   console.log(formatAMPM(new Date));