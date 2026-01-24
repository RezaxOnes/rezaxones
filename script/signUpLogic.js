  document.getElementById('signUpForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const username = document.getElementById('your-user').value;
  const password = document.getElementById('your-pass').value;
  const language = document.getElementById('your-FavourLang').value;

  try {
    const res = await fetch('https://singapore.api.hollawgostar.uno/sign_up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, language }),
    });

    const clone = res.clone();
    let data;

    try {
      data = await res.json();
    } catch {
      const html = await clone.text();
      document.open();
      document.write(html);
      document.close();
      return;
    }

    try {
    if (res.ok) {
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
     alert("Đã đăng ký thành công");
  } else {
    throw new Error();
  }
  }
  catch {
  alert(data?.error || 'Đăng ký thất bại');
}

    document.open();
    document.write(data.html);
    document.close();

  } catch (err) {
    alert('Lỗi kết nối database: ' + err.message);
  }
});