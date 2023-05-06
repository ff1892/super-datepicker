import { CALENDAR_WEEKS } from '../constants/calendar';

// Функция возввращает объект с тремя ключами,
// каждый ключ имеет значение -- массив с числами месяца
// предыдущий месяц (первый элемент -- понедельник) -- текущий месяц -- следующий месяц
// всего 5 недель, или 35 дней. Используется для отрисовки календаря
export const getCalendarData = (date: Date) => {

  const year = date.getFullYear();
  const month = date.getMonth();

  // Последний день предыдущего месяца
  const lastDayPrevMonth = new Date(year, month, 0).getDate();

  // Число дней в текущем месяце
  const numDaysThisMonth = new Date(year, month + 1, 0).getDate();

  const prevMonthDays = [];
  const thisMonthDays = [];
  const nextMonthDays = [];

  // Определяем число дней, которые должны войти в предыдущий месяц
  const lastDayWeekPrevMonth = new Date(year, month - 1, lastDayPrevMonth).getDay();
  const numDaysPrevMonth = (lastDayWeekPrevMonth === 0) ? 7 : lastDayWeekPrevMonth;

  // Добавляем все дни предыдущего месяца
  for (let i = 0; i < numDaysPrevMonth; i++) {
    prevMonthDays.push(lastDayPrevMonth - i);
  }

  // Добавляем все дни текущего месяца
  for (let i = 1; i <= numDaysThisMonth; i++) {
    thisMonthDays.push(i);
  }

  // Добавляем все дни следущего месяца
  for (let i = 1; i <= (CALENDAR_WEEKS * 7) - (prevMonthDays.length + thisMonthDays.length); i++) {
    nextMonthDays.push(i);
  }

  return {
    prevMonthDays: prevMonthDays.reverse(),
    thisMonthDays,
    nextMonthDays,
  };
};
