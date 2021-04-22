import I18n from '../../localization/locale';

export function format(date: string | number) {
  const orderDate = new Date(date);
  let minutes: string | number = orderDate.getMinutes();
  let hours: string | number = orderDate.getHours();
  let day: string | number = orderDate.getDate();
  let month: string | number = orderDate.getMonth() + 1;
  if (minutes < 9) {
    minutes = '0' + minutes;
  }
  if (hours < 9) {
    hours = '0' + hours;
  }
  if (day < 9) {
    day = '0' + day;
  }
  if (month < 9) {
    month = '0' + month;
  }
  return `${day}/${month} ${hours}:${minutes}`;
}

export function formatTime(time: string | number) {
  const sensorTime = new Date(time);
  let minutes: string | number = sensorTime.getMinutes();
  let hours: string | number = sensorTime.getHours();
  let day: string | number = sensorTime.getDate();
  let year: string | number = sensorTime.getFullYear();
  let month: string | number = sensorTime.getMonth() + 1;

  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  if (hours <= 9) {
    hours = '0' + hours;
  }
  if (day <= 9) {
    day = '0' + day;
  }
  if (month <= 9) {
    month = '0' + month;
  }
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function formatDateToday(date: any) {
  var dd: string | number = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm: string | number = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy: string | number = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return '20' + yy + '-' + mm + '-' + dd;
}

export const getDaysArray = function (year: number, month: number) {
  let date = new Date(year, month - 1, 1);
  var names = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var result = [];
  while (date.getMonth() == month - 1) {
    const newArr = { title: names[date.getDay()], number: date.getDate() };
    result.push(newArr);
    date.setDate(date.getDate() + 1);
  }
  return result;
};

export const toNumberMonth = (month: string, numMonth: number) => {
  let num = numMonth;
  switch (month) {
    case 'Jan':
      num = 1;
      break;
    case 'Feb':
      num = 2;
      break;
    case 'Mar':
      num = 3;
      break;
    case 'Apr':
      num = 4;
      break;
    case 'May':
      num = 5;
      break;
    case 'Jun':
      num = 6;
      break;
    case 'Jul':
      num = 7;
      break;
    case 'Aug':
      num = 8;
      break;
    case 'Sep':
      num = 9;
      break;
    case 'Oct':
      num = 10;
      break;
    case 'Nov':
      num = 11;
      break;
    case 'Dec':
      num = 12;
      break;
  }
  return num;
};

export const monthA = [
  { title: I18n.t('1'), number: 1 },
  { title: I18n.t('2'), number: 2 },
  { title: I18n.t('3'), number: 3 },
  { title: I18n.t('4'), number: 4 },
  { title: I18n.t('5'), number: 5 },
  { title: I18n.t('6'), number: 6 },
  { title: I18n.t('7'), number: 7 },
  { title: I18n.t('8'), number: 8 },
  { title: I18n.t('9'), number: 9 },
  { title: I18n.t('10'), number: 10 },
  { title: I18n.t('11'), number: 11 },
  { title: I18n.t('12'), number: 12 },
];
