// get the pathname of the current page (must get the last name only)
const path = window.location.href;
const pathArr = path.split('/');
const filename = pathArr[pathArr.length-1];
console.log(filename);

// change the js that runs based on the file path 
switch(filename){
    case 'login.html':
        console.log("login");
        let submit_login=document.getElementById("submit-login");

        submit_login.addEventListener("click", function () {
            console.log("Logging in");
            // Some login code here

        });

        break;

    case 'register.html':
        console.log("register");
        let submit_register=document.getElementById("submit-register");

        submit_register.addEventListener("click", function() {
            console.log("Creating account");
            // Register (account creation) code here

        });

        break;
    default:
}



