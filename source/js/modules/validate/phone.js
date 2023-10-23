// количество одинаковых цифр в строке
const orderedCount = text => {
  return Array.from(
    text.split('').reduce((acc, el) => {
      acc.set(el, (acc.get(el) || 0) + 1);
      return acc;
    }, new Map()),
  );
};

const checkPhone = phone => {
  let tel = phone.value.replace(/[^+\d]/g, '').slice(2);
  let num = tel.length;
  return num === 10 && orderedCount(tel)[0][1] < 10;
};

const elements = document.querySelectorAll('[type="tel"]');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false,
};

elements.forEach(element => new IMask(element, maskOptions));
// const mask = new IMask(element, maskOptions);
