


function attemptLogin() {
    let  username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if ( username === "ali" && password ==="ali123") {
        window.location.href = "http://127.0.0.1:5501/Make%20A%20Book%20Store%20%20Application/mainPage.html";
    }   else if ( username !== "ali"){
        alert("( "+  username + " ) IS  A Incorrect USERNAME" );
    }else if (password !== "ali123"){
        alert("( "+ password + " ) IS  A Incorrect PASSWORD");
    } 
};
console.log(username);