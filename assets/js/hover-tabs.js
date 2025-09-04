document.querySelectorAll('a[data-bs-toggle="tab"]').forEach(function(tabLink) {
  tabLink.addEventListener('mouseenter', function (e) {
    e.preventDefault();
    const tab = new bootstrap.Tab(tabLink);
    tab.show();
  });
});