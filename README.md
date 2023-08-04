## Deploy:

http://il-test.androidel.org/

## Стек:

[![React](https://img.shields.io/badge/ReactJS-blue?logo=react&style=flat)](https://react.dev/) [![Redux](https://img.shields.io/badge/Redux--toolkit-blueviolet?logo=Redux&style=flat)](https://redux.js.org/) [![Saga](https://img.shields.io/badge/Redux--Saga-blueviolet?logo=reduxsaga&style=flat)](https://redux-saga.js.org/) [![Ant](https://img.shields.io/badge/AntDesign-red?logo=antdesign&style=flat)](https://ant.design/) [![Leaflet](https://img.shields.io/badge/Leaflet-greengray?logo=leaflet&style=flat)](https://leafletjs.com/) [![Axios](https://img.shields.io/badge/Axios-darkblue?logo=axios&style=flat)]() [![OSRM](https://img.shields.io/badge/OSRM_API-gray?logo=osrm&style=flat)](http://project-osrm.org/)

## Требуется:

Реализовать приложение по отображению маршрутов на карте.

Используя заданный набор маршрутов, реализовать экран, в котором слева будет таблица со списком маршрутов, а справа карта. При выборе в таблице строки с маршрутом, выбранная строка должна подсветиться, а на карте должны отобразиться точки маршрута в виде маркеров и полилиний трека движения по точкам маршрута, полученная из сервиса построения треков по дорогам OSRM. При выборе маршрута в таблице, на карте происходит центрирование и масштабирование таким образом, что весь маршрут должен попасть в область видимости карты. Одновременно на карте может отображаться только один маршрут – выбранный.

В отображении карты используется пакет Leaflet, для компонентов — AntDesign, для хранения стейта компонентов Redux (redux-toolkit), для реакции на события — Sagas.

**OSRM API:** http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service
