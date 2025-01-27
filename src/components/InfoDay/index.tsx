import { useEffect, useState } from "react";
import { useWeather } from "../../stores/WeatherContext";

const InfoDay = () => {
  const [temperature, setTemperature] = useState("");
  const { weather, setWeather } = useWeather();

  const day = new Date()
    .toLocaleDateString("pt-BR", { weekday: "long" })
    .split("-")[0];

  const getTemperature = async () => {
    try {
      const city = "Belo Horizonte";

      const response = await fetch(`https://wttr.in/${city}?format=j1`);

      const data = await response.json();

      const temp = data.current_condition[0].temp_C;
      setTemperature(temp);

      const wather = data.current_condition[0].weatherDesc[0].value;
      setWeather(wather);
      console.log(wather);
    } catch (error) {
      console.error("Erro ao obter a temperatura:", error);
    }
  };

  useEffect(() => {
    getTemperature();
  }, []);

  return (
    <>
      <section className="container mt-4 flex justify-center md:justify-start">
        <div className="relative flex h-full items-center">
          <div className="inline-flex items-center divide-x-2 divide-verde-800 rounded-md bg-verde-900 text-verde-300">
            <span className="px-4 py-2 capitalize" id="dia">
              {day}
            </span>
            <span className="px-4 py-2" id="temperatura">
              {temperature}º
            </span>
            <span className="px-4 py-2" id="umidade">
              {weather === "Rain" ? <span>🌧️</span> : <span>🌤️</span>}
            </span>
          </div>
          <span className="absolute -left-1 block size-2 rounded-full bg-verde-300"></span>
        </div>
      </section>
    </>
  );
};

export default InfoDay;
