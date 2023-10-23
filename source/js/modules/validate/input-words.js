
// Только буквы английского и русского алфавита
// $('body').on('input', '.input-words', function() {
//   this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
// });


const onlyInputWords = (el) => {
  el.addEventListener('input', (e) => {
    e.target.value = e.value.replace(/[^a-zа-яё\s]/gi, '');
  })
}
