# Super Date Picker

Тестовое задание на позицию фронтенд-разработчика (React) в [&laquo;Эшелон Технологии&raquo;](https://npo-echelon.ru/)

## Функционал

1. Выбор даты конца и начала события
2. Режим абсолютного времени: можно выбрать дату и время в календаре, можно ввести дату в текстовое поле в указанном формате
3. Режим относительного времени: можно выбрать дату и время с указанием отрезка относительно текущего времени
4. Установить текущее время
5. Быстрый выбор даты: в относительном режиме, можно также выбрать уже готовые отрезки времени

## Как использовать

Запуск в режиме разработки: `npm run dev`  
Сборка для продакшена: `npm run build`  

```tsx
function App () {
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    return {
      startDate: e.currentTarget.pickerStartDate,
      endDate: e.currentTarget.pickerEndDate
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <SuperDatePicker />
    </form>
  )
}

// Returns date as strings in format 'MMM D, YYYY @ HH:mm:ss.SSS'
```
## Технологии

1. TypeScript
2. UI: React
3. Управление состоянием: Context API
4. Стили: SCSS modules
5. Сборка: Webpack
6. Линтеры: Eslint
7. Парсинг относительного времени: [`@elastic/datemath`](https://github.com/elastic/kibana/tree/main/packages/kbn-datemath)

## Планы

- [ ] Написать парсер 'дата -> строка' для относительных дат. Пока в режиме относительного времени пользователю показывается абсолютная дата
- [ ] Добавить возможность обновления и автообновления дат
- [ ] Добавить историю обновленных дат
- [ ] Разбить редьюсер на несколько в зависмости от логики: работа с данными, показ окон. Добавить action creators, чтобы разгрузить компоненты
- [ ] Вынести переиспользуемую логику и стили в отдельные модули
- [ ] Рефакторинг утилитарных функций - сделать их более универсальными
- [ ] Добавить возможность кастомизации компонента: тема, функциональность
- [ ] Добавить юнит-тесты для компонента
