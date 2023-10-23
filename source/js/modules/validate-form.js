
// валидация формы
let forms = document.querySelectorAll('.needs-validation');

const onCheckValidateForm = form => {
  let isValidate = false;
  const textInputs = form.querySelectorAll('[type="text"]')
  const phoneForm = form.querySelector('[type="tel"]');
  const dataForm = form.querySelector('[type="date"]');
  const checkPhoneForm = checkPhone(phoneForm);
  const checkDateForm = nowAgeUser(dataForm.value) >= 14;

  textInputs.forEach((el) => {
    if (!el) {
      form.classList.add('was-validated');
      el.parentElement.classList.add('is-invalid');
    }
  })


  if (!checkPhoneForm || !checkDateForm) {
    form.classList.add('was-validated');
    if (!checkPhoneForm) {
      phoneForm.parentElement.classList.add('is-invalid');
    }
  } else {
    form.classList.remove('was-validated');
    phoneForm.parentElement.classList.remove('is-invalid');
    return (isValidate = !isValidate);
  }
  return isValidate;
};
