

    document.getElementById('signInForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const res = await fetch('https://api.rezaxones.com/sign_in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        try {
          localStorage.setItem('token', data.token);
          alert("Đã đăng nhập thành công");
        } catch (error) {
          alert("Đăng nhập không thành công / Lỗi phía server");
        }
      } else {
        alert(data.error || 'Đăng nhập thất bại');
      }
      document.open();
      document.write(data.html);
      document.close();
    } catch (err) {
      alert('Lỗi kết nối database: ' + err.message);
    }
  });

