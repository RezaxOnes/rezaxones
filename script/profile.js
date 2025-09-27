    fetch("/api/profile", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => res.json())
      .then(data => {
        const u = data.user || data;
        document.getElementById("username").innerText = u.username || "Guest";
        document.getElementById("language").innerText = u.language || "NAN/Null/None";
      })
      .catch(err => {
        document.getElementById("username").innerText = "Guest";
        document.getElementById("language").innerText = "NAN/Null/None";
        console.error(err);
      });
