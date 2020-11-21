var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "toni" && password == "1234567") {

        return true;
    } else {
        alert('Anda harus mengisi data dengan benar!');
        return false;
    }
}