//API_KEY=057be26a4da93af078568dcb3ef55c3f

//api = https://api.openweathermap.org/data/2.5/weather?appid=057be26a4da93af078568dcb3ef55c3f&q=lagos
//icon url = // http://openweathermap.org/img/wn/{code}@2x.png"

const searchForm = document.querySelector(".search_form");
const searchBox = document.querySelector(".search_box");
const tempValue = document.querySelector(".temp_value");
const tempDescription = document.querySelector(".temp_desc");
const state = document.querySelector(".state");
const windSpeed = document.querySelector(".speed");
const weather_images = document.querySelectorAll(".weather-img");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(searchBox.value);

  getWeatherData(searchBox.value);
  searchBox.value = "";
});

async function getWeatherData(stateName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=057be26a4da93af078568dcb3ef55c3f&q=${stateName}&units=metric`
    );

    if (response.ok) {
      const data = await response.json();
      // const { description, icon } = data.weather[0];
      // const { speed } = data.wind;
      // const {
      //   name,
      //   main: { temp },
      // } = data;

      const name = data.name
      const temp = data.main.temp
      const speed = data.wind.speed
      const description = data.weather[0].description
      const icon = data.weather[0].icon

      state.textContent = name;
      tempValue.textContent = temp + "°C";
      tempDescription.textContent = description;
      windSpeed.textContent = speed;
      weather_images.forEach((img) => {
        img.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${icon}@2x.png`
        );
      });
    } else {
      alert("check your spelling or internet connectivity!");
    }
  } catch (error) {
    console.log(error);
  }
}
