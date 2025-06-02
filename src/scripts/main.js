'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

function getFirstLetterBig(value) {
  const first = value[0].toUpperCase();
  const result = value.split('');

  result[0] = first;

  return result.join('');
}

inputs.forEach((element) => {
  element.setAttribute('placeholder', getFirstLetterBig(element.name));

  const label = document.createElement('label');

  label.classList.add('field-label');
  element.parentElement.insertBefore(label, element);

  const idAttribute = element.getAttribute('id');

  label.setAttribute('for', idAttribute);

  label.style.textTransform = 'none';
  label.textContent = getFirstLetterBig(element.name.toLowerCase());
});
