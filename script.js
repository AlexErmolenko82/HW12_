﻿"use strict"
// Сделать запрос в API использую fetch
// https://jsonplaceholder.typicode.com/users - необходимо получить список пользователей
// После получения результата найти пользователя, который работает в компании "Johns Group"
// Получение данных нужно реализовать одним из способов (.then/.catch) или (async/await)

const getJson = async (url, companyName) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw response;
    } else {
    console.log(response);
    const data = await response.json();
    console.log(data);
    // let filteredData = data.filter(data => data.company.name === companyName);
    // console.log(filteredData);
    // const {username, company: {name}} = filteredData[0];

    const {username, company: {name}} = data.filter(data => data.company.name === companyName)[0];

    console.log(`Company name: ${name}; username: ${username}`);
    }
  } catch (responseError) {
    if (responseError.status === 404) {
      console.log("URL not found");
    } else {
      console.error(error);
    }
  }
}


let url = "https://jsonplaceholder.typicode.com/users";
let companyName = "Johns Group";
getJson(url, companyName);
