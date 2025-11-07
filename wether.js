const sinput = document.querySelector("#sinput");
const btn = document.querySelector("button");
const h2 = document.querySelector(".city-name");
const p1 = document.querySelector(".temperature");
const p2 = document.querySelector(".description");
const p3 = document.querySelector(".humidity");
const p4 = document.querySelector(".wind-speed");
let ssinput;
btn.addEventListener("click", () => {
  ssinput = sinput.value;
  getWeatherdata();
});

const getWeatherdata = async () => {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ssinput}?key=S8XWGRWUHHDG86F7LEU9U6Z3L`
  );
  const dataa = await data.json();
  h2.textContent = ssinput;
  p1.innerHTML = `<p class="temperature">Temperature: ${dataa.currentConditions.temp} °C</p>`;
  p2.innerHTML = ` <p class="description">Description: ${dataa.description}</p>`;
  p3.innerHTML = `<p class="humidity">Humidity: ${dataa.currentConditions.humidity} %</p>`;
  p4.innerHTML = `<p class="wind-speed">Wind Speed: ${dataa.currentConditions.windspeed} km/h</p>`;
};
//description

//urrentConditions
