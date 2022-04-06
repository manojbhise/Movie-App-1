var data = JSON.parse(localStorage.getItem("userData")) || [];

document.getElementById("form").addEventListener("submit", function(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var flag = false;
    for (i = 0; i < data.length; i++) {
        if (data[i].email == email && data[i].password == password) {
            flag = true;
            break;
        }
    }
    if (flag) {
        event.preventDefault();
        window.location = "./index.html";
        // alert("Login is Successful");
    } else {
        alert("Wrong Email & Password")
    }
});