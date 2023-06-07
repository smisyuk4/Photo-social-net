
# Мобільний додаток 
Соціальна мережа де користувачі можуть публікувати свої фотографії.

## Клієнтська частина 
- React native
- Expo
- Redux (збереження та передача даних про користувача)
- [demo video on android](https://www.youtube.com/watch?v=sn5QQwlnCHw&ab_channel=%D0%A1%D0%B5%D1%80%D0%B3i%D0%B9%D0%9Ci%D1%81%D1%8E%D0%BA)
- [demo video on ios](https://www.youtube.com/watch?v=G7g7Y2bCTGY&ab_channel=%D0%A1%D0%B5%D1%80%D0%B3i%D0%B9%D0%9Ci%D1%81%D1%8E%D0%BA)

## Серверна частина
Firebase, де зберігаються аватари користувача, фотографії постів, а також всі текстові поля. Вони між собою пов`язані.

![firebase collection and document](https://i.ibb.co/DQqt4P2/2023-06-07-23-13-48.png)

![firebase collection and document](https://i.ibb.co/5GzQzN6/2023-06-07-23-00-41.png)

- вигляд об`єкту - публікація (post):
![firebase collection post](https://i.ibb.co/Sv4KkHX/2023-06-07-22-57-35.png)

- вигляд об`єкту - коментар (comment):
![firebase collection post](https://i.ibb.co/rvrzqz9/2023-06-07-22-59-48.png)

## Макет
Для проекту був розроблений дизайн, по ньому деякі моменти були не зрозумілими, а документація відсутня, тому зробив частину функціоналу на свій розсуд.
- [Figma](https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?type=design&node-id=12-47&t=kuDhQgU4zgLOwPh8-0)

## Дорожня карта користувача
**1. Реєстрація (екран реєстрації)**
- заповнити поля форми
- додати аватар з галереї. За замовчуванням зображення котиків

**2. Перегляд публікацій всіх користувачів (екран публікації)**
- перегляд геолокаціі публікації
- перегляд та коментування публікацій

**3. Cтворення нової публікації (екран створення публікації)**
- завантажити фото / зробити новий знімок
- написати заголовок до публікації. За замовчуванням «Незабутня подія»
- змінити геолокацію (кнопка), перетягнути маркер на потрібне місце. За замовчуванням геолокація мобільного пристрою.
- написати назву геолокації. За замовчуванням місто та вулиця де знаходиться мобільний пристрій

**4. Перегляд власних публікацій (екран користувача)**
- завантаження нового аватару з галереї

## Тестування додатку
**1. Запуск на сервері [Expo](https://expo.dev/@misyuk.dev/MyPain?serviceType=classic&distribution=expo-go)**

Потрібно скачати додаток Expo на телефон, а для ios ще необхідно зробити авторизацію інакше політика не дозволить.

**2. Клонування проекту собі на ПК та запуск локально**

Обовʼязково створіть файл `.env` на рівні з `App.js` і запишіть в нього наступні змінні з своїми значеннями:
```bash
API_KEY=...
AUTH_DOMAIN=...
PROJECT_ID=...
STORAGE_BUCKET=...
MESSAGING_SENDDER_ID=...
APP_ID=...
MEASUREMENT_ID=...
```

Після цього потрібно завантажити модулі
`npm i`, а вже тоді запускати сервер `npm start`

## Допомогали тестувати
- [Iryna Rybka - Front-end Developer](https://www.linkedin.com/in/iryna-rybka-95482819a/)
- [Olena Boiko - QA Engineer](https://www.linkedin.com/in/olena-boiko/)
- [Vitalii Volianyk - Full Stack Developer](https://www.linkedin.com/in/vitalii-volianyk/)
- [Marharyta Okhten - Front-end Developer](https://www.linkedin.com/in/marharyta-okhten/)

Коли не зміг розібратись з деякими багами, то звернувся до спільноти в лінкедін, а там двоє розробників допомогли:
- [Max Pashynov - React / React Native Developer](https://www.linkedin.com/in/max-pashynov-080a451a1/)
- [Mykyta Rusyn - React Native Developer](https://www.linkedin.com/in/mykyta-rusyn/)

## Про мене та процес розробки
Я fullstack розробник початківець. Вивчаю JavaScript, React, React Native, Node JS...

- [Linkedin](https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%BC%D0%B8%D1%81%D1%8E%D0%BA/)

- [GitHub](https://github.com/smisyuk4)

В процесі роботи над цим проектом були найбільші складнощі з геолокацією, а саме з дозволом на її використання. Було не легко налаштувати навігацію між екранами, опції заголовків та нижньої панелі з кнопками.

Також слідкував за роботою додатку у React Native Debuger, там відловлював помилки та контролював данні в Redux та state компонентів

![](https://i.ibb.co/QjxnDq1/2023-06-08-00-05-45.png)

Всі виникаючі питання вирішував в більшості самотужки за допомогою пошуків відповідей у інтернеті. Окрім офіційної документації найбільше користі принесли такі ресурси як:
- [stackoverflow](https://stackoverflow.com/)
- [medium](https://medium.com/)