fetch("/content/updates/updates.json")
  .then(r => r.json())
  .then(items => {
    const container = document.getElementById("updates");

    items.reverse().forEach(item => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${item.title}</h3>
        <small>${item.date}</small>
        <p>${item.text}</p>
        ${item.image ? `<img src="${item.image}" width="250">` : ""}
        <hr>
      `;

      container.appendChild(div);
    });
  });