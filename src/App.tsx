import WeatherProvider from "./stores/WeatherContext";

import InfoDay from "./components/InfoDay";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ForestCards from "./components/ForestCards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReserveDate from "./components/ReserveDate";

import Ruby from "/assets/img/casa1.jpg";
import Emerald from "/assets/img/casa2.jpg";
import Sapphire from "/assets/img/casa3.jpg";
import Canoagem from "/assets/img/canoagem.jpg";
import VidaSelvagem from "/assets/img/vida-selvagem.jpg";
import ObsNotruna from "/assets/img/observacao-noturna.jpg";

import CaravanLogo from "/assets/img/parceiros/caravan.svg";
import DogsLogo from "/assets/img/parceiros/dogs.svg";
import WildbeastLogo from "/assets/img/parceiros/wildbeast.svg";
import LeSconeLogo from "/assets/img/parceiros/lescone.svg";
import SurfbotLogo from "/assets/img/parceiros/surfbot.svg";

function App() {
  return (
    <WeatherProvider>
      <InfoDay />

      <Header />

      <Hero />

      <section className="container my-16" id="acomodacoes">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="col-span-12 content-end bg-map-lines bg-contain bg-no-repeat md:col-span-6">
            <h1 className="mt-8 text-5xl text-white">Refúgio Natural</h1>
            <ul className="mt-8 flex flex-col gap-4 text-white">
              <li className="flex items-center gap-4">
                <span className="h-[2px] w-6 bg-verde-200"></span>
                Experimente a natureza de perto
              </li>
              <li className="flex items-center gap-4">
                <span className="h-[2px] w-6 bg-verde-200"></span>
                Conecte-se com a natureza
              </li>
              <li className="flex items-center gap-4">
                <span className="h-[2px] w-6 bg-verde-200"></span>
                Desconecte-se do digital
              </li>
              <li className="flex items-center gap-4">
                <span className="h-[2px] w-6 bg-verde-200"></span>
                Observe a vida selvagem
              </li>
              <li className="flex items-center gap-4">
                <span className="h-[2px] w-6 bg-verde-200"></span>
                Escolha a sua cabine preferida
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="relative">
              <img
                src={Ruby}
                alt="Ruby"
                className="max-h-[208px] w-full rounded-3xl object-cover object-center"
              />

              <span className="absolute right-4 top-2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
                RUBY
              </span>
            </div>

            <div className="mt-8 grid grid-cols-12 gap-8">
              <div className="relative col-span-7">
                <img
                  src={Emerald}
                  alt="Ruby"
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
                <span className="absolute right-4 top-2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
                  EMERALD
                </span>
              </div>
              <div className="relative col-span-5">
                <img
                  src={Sapphire}
                  alt="Ruby"
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
                <span className="absolute right-4 top-2 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
                  SAPPHIRE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-verde-900">
        <ReserveDate />
      </section>

      <section className="container my-16" id="experiencias">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="col-span-12 rounded-xl bg-verde-900 p-8 md:col-span-6">
            <p className="uppercase text-verde-200">Experiências Exclusivas</p>
            <h1 className="mt-4 text-3xl text-white md:text-5xl">
              Escolha sua próxima aventura
            </h1>

            <ul className="flex flex-col gap-4 text-white">
              <li className="relative mt-8 flex items-center gap-4">
                <span className="h-[2px] w-6 bg-verde-200 transition-all hover:w-10"></span>
                <span className="text-xl">Observação Noturna</span>
                <p className="absolute left-10 top-7 text-gray-400">
                  Explore a vida selvagem em seu habitat natural sob as
                  estrelas.
                </p>
              </li>

              <li className="relative my-16 flex items-center gap-4">
                <span className="h-[2px] w-6 bg-verde-200 transition-all hover:w-10"></span>
                <span className="text-xl">Vida Selvagem</span>
                <p className="absolute left-10 top-7 text-gray-400">
                  Explore a vida selvagem em seu habitat natural sob as
                  estrelas.
                </p>
              </li>

              <li className="relative mb-16 flex items-center gap-4">
                <span className="h-[2px] w-6 bg-verde-200 transition-all hover:w-10"></span>
                <span className="text-xl">Canoagem</span>
                <p className="absolute left-10 top-7 text-gray-400">
                  Conquiste novos horizontes com nossa equipe especializada.
                </p>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <div className="flex flex-col gap-4">
                  <img src={Canoagem} alt="Canoagem" className="rounded-3xl" />
                  <img
                    src={VidaSelvagem}
                    alt="VidaSelvagem"
                    className="rounded-3xl"
                  />
                </div>
              </div>
              <div className="col-span-6">
                <img
                  src={ObsNotruna}
                  alt="ObsNotruna"
                  className="h-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ForestCards />

      <Contact />

      <section className="container my-16 border-y-2 border-verde-900 py-8">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="p-4">
            <img src={CaravanLogo} alt="Caravan" />
          </div>
          <div className="p-4">
            <img src={DogsLogo} alt="dogs" />
          </div>
          <div className="p-4">
            <img src={WildbeastLogo} alt="Wildbeast" />
          </div>
          <div className="p-4">
            <img src={LeSconeLogo} alt="LeScone" />
          </div>
          <div className="p-4">
            <img src={SurfbotLogo} alt="Surfbot" />
          </div>
        </div>
      </section>

      <Footer />
    </WeatherProvider>
  );
}

export default App;
