function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (username && password) {
    localStorage.setItem(username, password);
    document.getElementById("message").innerText = "Registration Successful!";
  } else {
    document.getElementById("message").innerText = "Please fill both fields.";
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "secure.html";
  } else {
    document.getElementById("message").innerText = "Invalid credentials!";
  }
}