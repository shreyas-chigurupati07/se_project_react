export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherCondition(result.temp.F);
  return result;
};

const getWeatherCondition = (temp) => {
  if (temp > 86) {
    return "Hot";
  } else if (temp >= 66 && temp < 86) {
    return "Warm";
  } else {
    return "Cold";
  }
};
