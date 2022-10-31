import React from "react";
import CitySelector from "./components/CitySelector";
import "./App.scss";
import { Container } from "react-bootstrap";
import UseFetch from "./hooks/UseFetch";
import { API_KEY, API_BASE_URL } from "./apis/config";
import logo from "./what-a-grumpy-cloud.svg";
import WeatherList from "./components/WeatherList";

const App = () => {
  const { data, setUrl } = UseFetch();
  console.log(data);

  return (
    <Container className="App">
      <h1>The Weather App</h1>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        width="150"
        height="150"
      />
      <CitySelector
        onSearch={(city) =>
          setUrl(
            `${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`
          )
        }
      />
      {/* conditionally render  */}
      {data && <WeatherList weathers={data.list} />}
    </Container>
  );
};

export default App;
