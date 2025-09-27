let token = localStorage.getItem("token");

// Nếu không có token, hiển thị Guest luôn
if (!token) {
    document.getElementById("username").innerText = "Guest";
    document.getElementById("language").innerText = "NAN/Null/None";
} else {
    fetch("https://api2.rezaxones.com/profile", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(res => res.json())
    .then(data => {
        const u = data.user || data;
        document.getElementById("username").innerText = u.username || "Guest";
        document.getElementById("language").innerText = u.language || "NAN/Null/None";
    })
    .catch(err => {
        console.error(err);
        document.getElementById("username").innerText = "Guest";
        document.getElementById("language").innerText = "NAN/Null/None";
    });
}
