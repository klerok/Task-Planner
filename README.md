# Task Planner

# Стэк

- Стейтменеджеры - **[Tanstack Query](https://tanstack.com/query/latest) <!-- // fetch-запросы, axios-посмотреть;  -->, [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) <!-- useState, useContext -> redux-toolkit -> Zustand -->**
- Работа с формами - **[React Hook Form](https://www.npmjs.com/package/react-hook-form), [yup](https://yup-docs.vercel.app/docs/intro)**
- Сборка - **[Vite](https://vite.dev/guide/)**
- ui-library - **[Mantine ui](https://ui.mantine.dev/)**
- Роуты - **[ReactRouterDom](https://reactrouter.com/home)**

# Скрипты

## Подгрузка зависимостей

```bash
npm install
```

## Запуск проекта

```bash
npm run dev
```

## Структура

```bash
- **\_templates** - шаблоны hygen
- **public** - статичный контент
- **src** - все исходники
  - **assets** - глобальные стили (scss), шрифты, изображения
  - **components** - папка с общими компонентами приложения
    - modals - модальные окна
    - template - компоненты, относящиеся к общему шаблону сайта
  - **config** - конфигурационные файлы
  - **constants** - константы
  - **context** - контексты
  - **hocs** - компоненты высшего порядка - подключение прелоадера, предзагрузка информации, etc
  - **hooks** - кастомные хуки
  - **interfaces** - общие интерфейсы приложения
  - **layouts** - лейауты
  - **modules** - модули приложения
  - **packages** - модули, которые можно вынести в отдельные пакеты
  - **routes** - роуты, страницы
  - **ui** - компоненты без бизнес-логики
  - **utils** - вспомогающие функции

**_В UI-компонентах разрешаются импорты только из папок constants и utils_**

## Модульная архитектура

Приложение разделено на модули, которые хранятся в папках **modules**. Каждая папка - отдельная фича, внутри следующая структура:

- **api**
  - endpoints - эндпойнты для этой фичи
  - methods - методы api для этой фичи
  - interfaces - интерфейсы, касающиеся именно api
  - index - по умолчанию экспортируются только api-методы и интерфейсы
- **accesses** - хуки, касающиеся управлением доступом к загрузке ресурсов по фиче
- **components** - компоненты для фичи
- **handlers** - хуки, касающиеся фичи, но не касающиеся запросов к серверу
- **helpers** - вспомогательные функции для фичи, но не хуки
- **interfaces** - интерфейсы фичи, не касающиеся api
  - common - общие интерфейсы фичи, используемые в компонентах
  - queries - интерфейсы, используемые в папке queries, так же могут использоваться в api-методах для типизации принимаемых этими методами аргументов
- **queries** - хуки для react-query
  - types - enum для ключей в queries-хуках
- **constants** - какие-либо статичные данные для фичи
- **store** - файлы для какого-то внутреннего стора компонента
- **requests** - если одни и те же запросы используются в нескольких хуках useQuery, то такие запросы следует выносить в эту папку, оформляя их как хуки.
```
# Ссылка на макет
https://www.figma.com/design/XtiHVpSGNrV6TFlrGwAz9q/01-24-task-planning--Copy-?node-id=1-606&p=f&t=laYVNGk4mKqWu8aa-0