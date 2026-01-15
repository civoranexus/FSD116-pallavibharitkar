function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
    } else {
        alert("Login successful (frontend check)");
    }
}
