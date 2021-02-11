const checkbox = document.querySelector("form input[type=checkbox]");
const password = document.querySelector("form input[type=password]");
const label = document.querySelector("form label");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    password.type = "text";
    label.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    password.type = "password";
    label.classList.replace("fa-eye", "fa-eye-slash");
  }
});

// CodeWithMaster