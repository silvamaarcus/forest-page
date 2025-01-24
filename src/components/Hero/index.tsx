import Button from "../ui/Button";

import WildbeastLogo from "/assets/img/parceiros/wildbeast.svg";

import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container">
      <div className="bg-hero-pattern flex h-[453px] flex-col justify-end rounded-lg bg-cover bg-center bg-no-repeat p-8 md:h-[583px]">
        <div className="flex flex-col rounded-lg bg-black/70 p-4 md:max-w-[400px] md:flex-row md:items-center md:justify-between md:rounded-full md:bg-black md:p-0">
          <span className="text-base text-white md:pl-4">
            vagas para dezembro abertas
          </span>

          <Button className="mt-2 flex max-w-[168px] items-center gap-2 border-2 border-black md:mt-0">
            Reserve Hoje
            <ChevronRight />
          </Button>
        </div>
        <h1 className="mt-8 text-5xl text-white md:max-w-[40%]">
          Venha Experimentar a Vida na Floresta
        </h1>
        <div className="mt-8 flex flex-col text-white md:mt-28 md:flex-row md:items-center md:justify-between">
          <span>
            Melhores locais para visitar{" "}
            <span className="border-b border-white">2049</span>
          </span>
          <div className="mt-4 flex flex-col text-white md:mt-0">
            <span className="uppercase">Recomendado por</span>
            <div className="mt-2 flex items-center gap-2 divide-x-2">
              <img src={WildbeastLogo} alt="Wildbeast" width={112} />
              <span className="pl-2">Revista Nacional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
