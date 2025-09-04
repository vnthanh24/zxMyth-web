document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/js/data/lichhoatdong.json")
    .then(response => response.json())
    .then(data => {
      const days = ["thu2", "thu3", "thu4", "thu5", "thu6", "thu7", "chunhat"];

      days.forEach(day => {
        const list = document.querySelector("#" + day + " .list-group");
        if (list && Array.isArray(data[day])) {
          list.innerHTML = "";

          // Hiển thị tối đa 10 hoạt động
          data[day].slice(0, 10).forEach(item => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = `
              <span class="text-dark">${item.title}</span>
              <small class="text-muted">${item.time}</small>
            `;
            list.appendChild(li);
          });
        }
      });
    })
    .catch(error => {
      console.error("Lỗi khi đọc file lichhoatdong.json:", error);
    });
});