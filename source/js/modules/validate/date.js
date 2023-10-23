const nowAgeUser = val => {
  var now = new Date(); //Текущя дата
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  // var dob = new Date(1988, 6, 26); //Дата рождения
  var dob = new Date(val);
  var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
  var age; //Возраст

  //Возраст = текущий год - год рождения
  age = today.getFullYear() - dob.getFullYear();
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
};

const maxValueDate = () => {
  const nowDate = new Date().toLocaleDateString(); //Текущя дата
  const m = nowDate.slice(3, 5);
  const d = nowDate.slice(0, 2);

  const y = new Date().getFullYear() - 14; // 14 лет сегодня
  const result = y + '-' + m + '-' + d;

  return result;
};
