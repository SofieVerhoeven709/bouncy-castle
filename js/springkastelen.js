fetch("content/springkastelen.json")
  .then((r) => r.json())
  .then((data) => {
    const items = (data && data.items) ? data.items : [];

    // Kaarten renderen
    const grid = document.getElementById("kastelenGrid");
    if (grid) {
      grid.innerHTML = "";
      items.forEach((k) => {
        const card = document.createElement("div");
        card.className = "kasteel-kaart";

        card.innerHTML = `
          <div class="kasteel-foto">
            <img src="${k.image || ""}" alt="${k.name || ""}">
          </div>
          <div class="kasteel-info">
            <h3>${k.name || ""}</h3>
            <p>${k.description || ""}</p>
            <ul class="kasteel-features">
              ${k.price ? `<li>${k.price}</li>` : ""}
              ${k.capacity ? `<li>${k.capacity}</li>` : ""}
            </ul>
          </div>
        `;

        grid.appendChild(card);
      });
    }

    // Dropdown vullen
    const select = document.getElementById("springkasteelSelect");
    if (select) {
      while (select.options.length > 1) select.remove(1);
      items.forEach((k) => {
        const opt = document.createElement("option");
        opt.value = k.name;
        opt.textContent = k.name;
        select.appendChild(opt);
      });
    }
  })
  .catch((err) => console.error("Kon springkastelen.json niet laden:", err));