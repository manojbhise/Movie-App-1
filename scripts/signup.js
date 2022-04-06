let data = JSON.parse(localStorage.getItem("userData")) || [];

document.getElementById("form").addEventListener("submit",function(){
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var obj = {
        name:name,
        contact:contact,
        email:email,
        password:password,
    }
    data.push(obj);
    localStorage.setItem("userData",JSON.stringify(data));
});