function attemptLogin() {
    let  username = document.getElementById('username').value;
    let PhoneNo = document.getElementById('PhoneNo').value;
    if ( username === username && PhoneNo === PhoneNo) {
        window.location.href = "http://127.0.0.1:5501/Make%20A%20Book%20Store%20%20Application/mainPage.html";
    } 
};
console.log(username);