import { createContext, useContext, useState } from "react";

// Criar o contexto
const WeatherContext = createContext<any>(null);

// Provedor do Contexto
const WaeatherProvider = ({ children }: any) => {
  const [weather, setWeather] = useState("");

  return (
    <>
      <WeatherContext.Provider value={{ weather, setWeather }}>
        {children}
      </WeatherContext.Provider>
    </>
  );
};
export default WaeatherProvider;

// Hook para consumir o contexto
export const useWeather = () => useContext(WeatherContext);
