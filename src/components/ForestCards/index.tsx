import IconManha from "/assets/img/manha.svg";
import IconDia from "/assets/img/dia.svg";
import IconNoite from "/assets/img/noite.svg";
import CardSimple from "../ui/CardSimple";

const CardsSimple = [
  {
    icon: <img src={IconManha} alt="Manha" className="size-10 bg-gradient rounded-full p-2" />,
    title: "Amanhecer",
    description:
      "Desperte com o canto dos pássaros e participe das nossas caminhadas ao ar livre.",
    time: "05:40 - 07:00",
  },
  {
    icon: <img src={IconDia} alt="Dia" className="size-10 bg-gradient rounded-full p-2" />,
    title: "Meio-dia",
    description:
      "Explore nossas trilhas sombreadas e desfrute de um piquenique gourmet na natureza.",
    time: "12:00 - 14:00",
  },
  {
    icon: <img src={IconNoite} alt="Noite" className="size-10 bg-gradient rounded-full p-2" />,
    title: "Anoitecer",
    description: "Termine seu dia com nossa sessão de observação de estrelas.",
    time: "19:00 - 21:00",
  },
];

const ForestCards = () => {
  return (
    <section className="container bg-map-lines bg-contain bg-center bg-no-repeat py-16">
      <p className="text-center uppercase text-verde-200">Ciclo Natural</p>
      <h1 className="my-4 text-center text-4xl text-white md:text-6xl">
        Ritmo da Floresta
      </h1>
      <div className="flex gap-8 flex-wrap md:flex-nowrap">
        {CardsSimple.map((card, index) => (
          <CardSimple
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            time={card.time}
            className={index === 1 ? 'mt-0 md:mt-10' : ''}
          />
        ))}
      </div>
    </section>
  );
};
export default ForestCards;
