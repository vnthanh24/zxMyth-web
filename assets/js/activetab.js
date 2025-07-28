document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().getDay();

  const dayTabMap = {
    0: "#chunhat",
    1: "#thu2",
    2: "#thu3",
    3: "#thu4",
    4: "#thu5",
    5: "#thu6",
    6: "#thu7"
  };

  const targetTabId = dayTabMap[today];
  const tabContainer = document.querySelector("#tab-lichhoatdong");

  if (!tabContainer || !targetTabId) return;

  // Chỉ ảnh hưởng trong vùng tab ngày
  const navLinks = tabContainer.querySelectorAll('.nav-link[data-bs-toggle="tab"]');
  const tabPanes = tabContainer.querySelectorAll('.tab-pane');

  navLinks.forEach(el => el.classList.remove('active'));
  tabPanes.forEach(el => el.classList.remove('active', 'show'));

  const navLink = tabContainer.querySelector(`.nav-link[href="${targetTabId}"]`);
  const tabPane = tabContainer.querySelector(`${targetTabId}`);

  if (navLink) navLink.classList.add('active');
  if (tabPane) tabPane.classList.add('active', 'show');
});