document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/js/data/rank.json")
    .then(response => response.json())
    .then(data => {
      const rankLevelTab = document.getElementById("rank-level");

      // Tạo bảng
      const table = document.createElement("table");
      table.className = "table table-striped table-sm";
      table.innerHTML = `
        <thead>
          <tr>
            <th>Hạng</th>
            <th>Tên nhân vật</th>
            <th>Cấp độ</th>
            <th>Môn phái</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;

      const tbody = table.querySelector("tbody");

      data
        .sort((a, b) => b.level - a.level)
        .slice(0, 12)
        .forEach((item, index) => {
          const row = document.createElement("tr");

          // Áp dụng hiệu ứng ánh sáng quét cho top 1 và 2
          if (index === 0 || index === 1) {
            row.classList.add("glow-sweep");
          }

          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.level}</td>
            <td>${item.class}</td>
          `;
          tbody.appendChild(row);
        });

      rankLevelTab.innerHTML = "";
      rankLevelTab.appendChild(table);
    })
    .catch(error => {
      console.error("Lỗi khi tải rank.json:", error);
    });
});
