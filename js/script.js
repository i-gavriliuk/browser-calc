const form = document.querySelector('#calc');
const closeBtn = form.querySelector('#close-btn');
const modal = form.querySelector('.calc-form__modal-box');
const output = modal.querySelector('#calc-result');

const isNumber = function whetherNumberRepresentationValid(numbRepr) {
  return /^-?\d+(\.\d)?\d*$/.test(numbRepr);
};

const getAddition = function returnTwoValuesSum(val1, val2) {
  // eslint-disable-next-line no-undef
  return Big(val1).plus(Big(val2));
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const firstVal = form.querySelector('#first-number').value.trim();
  const secondVal = form.querySelector('#second-number').value.trim();
  let result = '';
  // checking that both values are valid numbers and output result formation
  if (isNumber(firstVal) && isNumber(secondVal)) {
    // eslint-disable-next-line no-undef
    result = String(getAddition(firstVal, secondVal));
  } else {
    result = 'Надо ввести число. Десятичный разделитель - точка.';
  }
  output.innerHTML = result;
  modal.classList.add('show-modal');
  closeBtn.focus();
});

closeBtn.addEventListener('click', () => {
  output.innerHTML = '';
  modal.classList.remove('show-modal');
});
