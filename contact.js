document.getElementById("contactform").addEventListener("submit",function(e){
    let inputNameValue = document.getElementById('name').value;
    let inputEmailValue = document.getElementById('email').value;
    let inputMsgValue = document.getElementById('msg').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(inputNameValue.length < 3){
        document.getElementById("nameValid").innerText = "Name must be at least 3 characters.";
        e.preventDefault();
    }else{
        document.getElementById('nameValid').innerText = "";
    }

    if(!emailRegex.test(inputEmailValue)){
        document.getElementById('emailValid').innerText = "Please enter a valid email address.";
        e.preventDefault();
    }else{
        document.getElementById('emailValid').innerText = "";
    }

    if(inputMsgValue.split(/\s+/).length < 3){
        document.getElementById("msgValid").innerText = "Message must be at least 3 words.";
        e.preventDefault();
    }else{
        document.getElementById('msgValid').innerText = "";
    }

})