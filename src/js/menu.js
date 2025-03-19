document.querySelector('.menu-open').onclick = e => {
  e.preventDefault();
  document.querySelector('.menu-overlay').classList.add('is-open');
};
document.querySelectorAll('.close').forEach(
  item =>
    (item.onclick = e => {
      e.preventDefault();
      document.querySelector('.menu-overlay').classList.remove('is-open');
    })
);
