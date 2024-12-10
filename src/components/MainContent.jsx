import { useState } from "react";
import "../css/MainContent.css";
import Searchbar from "./Searchbar";
import { fetchWeather } from "../functions";

function MainContent() {
  return <Searchbar citySelected={fetchWeatherData} />;
}
export default MainContent;
