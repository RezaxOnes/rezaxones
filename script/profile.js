// profile.js
const token = localStorage.getItem("token");

if (token) {
  fetch("https://api2.rezaxones.com/profile", {  // hoặc URL thật của backend
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token
    }
  })
  .then(res => {
    if (!res.ok) throw new Error("Không thể lấy profile");
    return res.json();
  })
  .then(data => {
    document.getElementById("username").innerText = data.username || "Guest";
    document.getElementById("language").innerText = data.language || "N/A";
  })
  .catch(err => {
    console.error(err);
    document.getElementById("username").innerText = "Guest";
    document.getElementById("language").innerText = "N/A";
  });
} else {
  // Chưa có token
  document.getElementById("username").innerText = "Guest";
  document.getElementById("language").innerText = "N/A";
}
