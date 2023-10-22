(function() {
  let days = document.querySelector('#days');
  let daysLabel = document.querySelector('#label-days');
  let hoursLabel = document.querySelector('#label-hours');
  let minutesLabel = document.querySelector('#label-minutes');
  let secondsLabel = document.querySelector('#label-seconds');
  let hours = document.querySelector('#hours');
  let minutes = document.querySelector('#minutes');
  let seconds = document.querySelector('#seconds');

  let dd = document.querySelector('#dd');
  let hh = document.querySelector('#hh');
  let mm = document.querySelector('#mm');
  let ss = document.querySelector('#ss');

  let declOfNum = function(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  declOfNum(days, ['день', 'дня', 'дней']);
  declOfNum(hours, ['час', 'часа', 'часов']);
  declOfNum(minutes, ['минута', 'минуты', 'минут']);
  declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

  const saleEndDateCity = () => {
    const url = window.location.pathname;
    if (url === '/spb.html') {
      return new Date('October 24, 2023 00:00:00')
    }
    return new Date('October 24, 2023 00:00:00')
  }

  let deadline = saleEndDateCity().getTime();
  // console.log(deadline);

  let x = setInterval(function() {
    let now = new Date().getTime();
    let t = deadline - now;

    let d = Math.floor(t / (1000 * 60 * 60 * 24));
    let h = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let m = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.floor(t % (1000 * 60) / 1000);

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;

    daysLabel.textContent = declOfNum(d, ['день', 'дня', 'дней']);
    hoursLabel.textContent = declOfNum(h, ['час', 'часа', 'часов']);
    minutesLabel.textContent = declOfNum(m, ['минута', 'минуты', 'минут']);
    secondsLabel.textContent = declOfNum(s, ['секунда', 'секунды', 'секунд']);

    dd.style.strokeDashoffset = 440 - 440 * d / 365;
    hh.style.strokeDashoffset = 440 - 440 * h / 24;
    mm.style.strokeDashoffset = 440 - 440 * m / 60;
    ss.style.strokeDashoffset = 440 - 440 * s / 60;

    if (t < 0) {
      clearInterval(x);
      d = 0;
      h = 0;
      m = 0;
      s = 0;

      days.textContent = d;
      hours.textContent = h;
      minutes.textContent = m;
      seconds.textContent = s;

      dd.style.strokeDashoffset = 440 - 440 * d / 365;
      hh.style.strokeDashoffset = 440 - 440 * h / 24;
      mm.style.strokeDashoffset = 440 - 440 * m / 60;
      ss.style.strokeDashoffset = 440 - 440 * s / 60;

      document.querySelector('.timer').style.display = 'none';
    }
  }, 100);
})();
