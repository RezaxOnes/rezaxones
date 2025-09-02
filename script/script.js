
  const user = "rezaxonesassist";
  const domain = "gmail";
  const email = user + "@" + domain;
  const container = document.getElementById("My_Email");
  container.innerHTML = `<a href="mailto:${email}" style="color:#000000;">${email}.com</a>`;