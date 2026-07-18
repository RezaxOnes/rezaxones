document.getElementById("togglePass2").addEventListener("click", () => {
  const pass = document.getElementById("password");
  const icon = document.querySelector("#togglePass2 i");

  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    pass.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
});