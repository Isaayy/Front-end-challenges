'use strict';

const buttons = document.querySelectorAll('.img-btn');

for (const button of buttons) {
  button.addEventListener('click', function () {
    let panel = this.parentElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    panel.classList.toggle('margin-top-show');
    this.classList.toggle('arrow-flip');
    this.parentElement.classList.toggle('bold-font');
  });
}
