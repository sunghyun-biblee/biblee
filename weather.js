const API_KEY = "c75a16b0fcfc4f98a1a34b29ed15d23c";

function onSuccess(position) {
  const lat = position.coords.latitude; //위도
  const long = position.coords.longitude; //경도
  const url = `https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  console.log(lat);
  console.log(long);
  console.log("You live in", lat, long);
  console.log(url);
  console.log(position);
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weatherContainer = document.querySelector(
        "#weather span:nth-child(2)"
      );
      const temp = document.querySelector("#weather span:last-child");
      city.innerText = `☁  ${data.name} `;
      weatherContainer.innerText = data.weather[0].main;
      temp.innerText = `${Math.floor(data.main.temp)} ☁`;
    })
  );
}
function onError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
