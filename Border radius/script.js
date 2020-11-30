'use strict';

const radiusSettings = document.querySelectorAll('input');
const copyToClipboardBtn = document.querySelector('.copyBtn');
const resetBtn = document.querySelector('.resetBtn');
const box = document.querySelector('.shape');

let borderProperty = [];

const clearSettings = () => {
  borderProperty = [];
};

const isUnit = (inputValue) => {
  const units = ['px', 'in', 'pc', 'pt', 'em', 'rem', '%'];
  if (units.some((unit) => inputValue.endsWith(unit))) return true;
  return false;
};

const setRadius = (direction, value) => {
  if (!isUnit(value)) value = value + 'px';

  switch (direction) {
    case 'TL':
      box.style.borderTopLeftRadius = value;
      borderProperty.push('border-top-left-radius: ' + value + ';');
      break;
    case 'TR':
      box.style.borderTopRightRadius = value;
      borderProperty.push('border-top-right-radius: ' + value + ';');
      break;
    case 'BR':
      box.style.borderBottomRightRadius = value;
      borderProperty.push('border-bottom-right-radius: ' + value + ';');
      break;
    case 'BL':
      box.style.borderBottomLeftRadius = value;
      borderProperty.push('border-bottom-left-radius: ' + value + ';');
      break;
  }
};

for (let i = 0; i < radiusSettings.length; i++) {
  radiusSettings[i].addEventListener('blur', () => {
    if (radiusSettings[i].value) {
      switch (i) {
        case 0:
          setRadius('TL', radiusSettings[i].value);
          break;
        case 1:
          setRadius('TR', radiusSettings[i].value);
          break;
        case 2:
          setRadius('BR', radiusSettings[i].value);
          break;
        case 3:
          setRadius('BL', radiusSettings[i].value);
          break;
      }
    }
  });
}

resetBtn.addEventListener('click', () => {
  for (let i = 0; i < radiusSettings.length; i++) {
    radiusSettings[i].value = '';
    box.style.borderRadius = 0;
    clearSettings();
  }
});

copyToClipboardBtn.addEventListener('click', () => {
  const el = document.createElement('textarea');

  for (let i = 0; i < borderProperty.length; i++) {
    el.value += `${borderProperty[i]}\n`;
  }
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
});
