function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        document.getElementById("result").innerText = data.message;
      } else {
        document.getElementById("result").innerText = data.message;
      }
    })
    .catch(err => {
      console.log(err);
    });
}
