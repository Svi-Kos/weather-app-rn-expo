export const getImage = (name) => {
  switch (name) {
    case "Clear":
      return require("../../assets/Clear.jpg");
    case "Thunderstorm":
      return require("../../assets/Thunderstorm.png");
    case "Drizzle":
      return require("../../assets/Drizzle.jpg");
    case "Rain":
      return require("../../assets/Rain.jpg");
    case "Snow":
      return require("../../assets/Snow.jpg");
    case "Clouds":
      return require("../../assets/Clouds.jpg");
    case "Haze":
      return require("../../assets/Haze.jpg");
    case "Mist":
      return require("../../assets/Mist.jpg");
    default:
      return require("../../assets/DeafaultWeather.jpg");
  }
};
