import CardWithButton from "../ui/CardWithButton";

const Cards = [
  {
    cardName: "Lua Nova",
    cardDateDay: "23",
    cardDateMonth: "Março",
    cardDateYear: "2049",
    cardInfo:
      "Melhor período para observação astronômica. O Céu estará claro e as estrelas visíveis.",
  },
  {
    cardName: "Aurora Boreal",
    cardDateDay: "15",
    cardDateMonth: "Abril",
    cardDateYear: "2049",
    cardInfo:
      "Melhor período para observação astronômica. O Céu estará claro e as estrelas visíveis.",
  },
  {
    cardName: "Chuva de Meteoros",
    cardDateDay: "18",
    cardDateMonth: "Agosto",
    cardDateYear: "2049",
    cardInfo:
      "Melhor período para observação astronômica. O Céu estará claro e as estrelas visíveis.",
  },
];

const ReserveDate = () => {
  return (
    <>
      <section className="container py-16" id="eventos">
        <p className="text-center uppercase text-verde-200">
          Conecte-se com a natureza
        </p>

        <h1 className="my-8 text-center text-4xl text-white md:text-6xl">
          Cada Som, Cada Momento, Uma Nova Descoberta
        </h1>

        <div className="overflow-scroll md:overflow-hidden">
          <div className="flex justify-center gap-8 md:flex-nowrap">
            {Cards.map((card) => (
              <CardWithButton
                key={card.cardName}
                cardName={card.cardName}
                cardDateDay={card.cardDateDay}
                cardDateMonth={card.cardDateMonth}
                cardDateYear={card.cardDateYear}
                cardInfo={card.cardInfo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReserveDate;
