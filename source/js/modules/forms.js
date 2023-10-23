const onSubmitForm = e => {
  let formData = new FormData(e.target);
  let products;

  const getSubscriptionID = id => {
    const elem = [...CITY_CLUBS_DATA].filter(el => el.morningID === id || el.id === id);
    return elem[0].subscriptionID;
  };

  products = [
    {
      name: formData.get('product_name'),
      price: formData.get('product_price'),
      price_id: formData.get('club_id'),
    },
    {
      name: SUBSCRIPTION_NAME,
      price: SUBSCRIPTION_PRICE,
      price_id: getSubscriptionID(formData.get('club_id')),
    },
  ];

  let data = {
    products: products,
    customer: {
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      middle_name: '',
      phone: formData.get('phone').replace(/[^+\d]/g, '').slice(2),
      birth_day: formData.get('birthDay'),
      email: formData.get('email'),
    },
    recurrentable: true,
  };

  console.log(data);
  let raw = JSON.stringify(data);

  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  // 'orders'
  generalRequest('orders', requestOptions)
    .then(result => {
      if (result.pay_url) {
        window.location = result.pay_url;
      }
    })
    .catch(error => console.log('error', error));

  // // цели метрики
  // ym(93723690, 'reachGoal', 'form-check');
  // ym(93723690, 'reachGoal', 'input-words');
};

document.addEventListener('DOMContentLoaded', () => {
  forms.forEach(form => {
    form.querySelector('[type="date"]').setAttribute('max', maxValueDate());

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('kkk');

      if (onCheckValidateForm(form)) {
        // добавляю disabled для кнопки
        let btn = form.querySelector('[type="submit"]');
        btn.setAttribute('disabled', true);

        // отправка формы
        onSubmitForm(e);

        // очистка полей формы
        form.reset();
      }
    });
  });
});
