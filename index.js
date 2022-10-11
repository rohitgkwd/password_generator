

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass_field1 = document.getElementById("gen-pass1");
let pass_field2 = document.getElementById("gen-pass2");
let genPass = document.getElementById("gen-pass-btn");
let input = document.getElementById("input-field");
let viewPass = document.getElementById("input-showpass");



let password1 = "";
let password2 = "";
let passArray = [];



const generatePass = () => {
   

    for(let i=0;i<16;i++){
        let randomNumber2 = Math.floor(Math.random()*characters.length);
        let randomNumber1 = Math.floor(Math.random()*characters.length);
        password1 += characters[randomNumber1];
        password2 += characters[randomNumber2];

    }

    passArray.push(password1,password2);  ;
    console.log(passArray)
    
    pass_field1.textContent = passArray[passArray.length-1];
    pass_field2.textContent = passArray[passArray.length-2];

    password2 = "";
    password1 = "";
    input.value = "";
}
    
genPass.addEventListener('click', generatePass)

function pastePass(){
    input.value = pass_field1.textContent;
}

function showPassword(){
    if(input.type === "password"){
        input.type = "text";
    }
    else{
        input.type = "password";
    }
}


