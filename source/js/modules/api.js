// проверка ответа
const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = res => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Ответ не success: ${res}`);
};

const generalRequest = (endpoint, options) => {
  let url;
  if (window.location.hostname === 'localhost') {
    url = 'http://127.0.0.1:8000/payments/' + endpoint + '/';
  } else {
    url = window.location.origin + '/payments/' + endpoint + '/';
  }
  return fetch(url, options).then(checkResponse);
  // .then(checkSuccess);
};
