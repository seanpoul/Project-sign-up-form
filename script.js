let pwd = document.getElementById("pwd");
let pwdConfirm = document.getElementById("pwdConfirm");

pwd.addEventListener("keyup", function (event) {
    if (pwdConfirm.value != pwd.value) {
        document.getElementById("message").textContent = "Password does not match!";
        pwdConfirm.style.border = "red solid 2px";
        pwdConfirm.style.boxShadow = "2px 2px 2px red";
        pwd.style.border = "red solid 2px";
        pwd.style.boxShadow = "2px 2px 2px red";
    }
    else if (pwdConfirm.value == pwd.value) {
        document.getElementById("message").textContent = "";
        pwdConfirm.style.border = "green solid 2px";
        pwdConfirm.style.boxShadow = "2px 2px 2px green";
        pwd.style.border = "green solid 2px";
        pwd.style.boxShadow = "2px 2px 2px green";
    }
});

pwdConfirm.addEventListener("keyup", function (event) {
    if (pwdConfirm.value != pwd.value) {
        document.getElementById("message").textContent = "Password does not match!";
        pwdConfirm.style.border = "red solid 2px";
        pwdConfirm.style.boxShadow = "2px 2px 2px red";
        pwd.style.border = "red solid 2px";
        pwd.style.boxShadow = "2px 2px 2px red";
    }
    else if (pwdConfirm.value == pwd.value) {
        document.getElementById("message").textContent = "";
        pwdConfirm.style.border = "green solid 2px";
        pwdConfirm.style.boxShadow = "2px 2px 2px green";
        pwd.style.border = "green solid 2px";
        pwd.style.boxShadow = "2px 2px 2px green";
    }
});