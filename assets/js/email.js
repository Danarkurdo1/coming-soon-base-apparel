function emailValidation() {


    var errLogo = document.querySelector('#err-logo');
    var errP = document.querySelector('#err-p');


    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.querySelector('#email').value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        errLogo.style.display = "block";
        errP.style.display = "block";
    }else{
        errLogo.style.display = "none";
        errP.style.display = "none";        
    }

}