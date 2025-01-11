// Update the year in the footer
document.addEventListener('DOMContentLoaded', function () {
  const year = new Date().getFullYear();
  let footer = document.getElementById('footer');
  if (footer) footer.innerText = footer.innerText.replace('2024', year);
});

