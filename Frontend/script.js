async function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter username and password");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
      alert("Login successful!");
      localStorage.setItem("username", username);
      window.location.href = "dashboard.html"; 
    } else {
      alert("Login failed!");
    }
  } catch (error) {
    alert("Error connecting to backend");
  }
}
