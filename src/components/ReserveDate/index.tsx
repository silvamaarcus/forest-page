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
      <section className="container py-16">
        <p className="text-center uppercase text-verde-200">
          Conecte-se com a natureza
        </p>

        <h1 className="my-8 text-center text-4xl md:text-6xl text-white">
          Cada Som, Cada Momento, Uma Nova Descoberta
        </h1>

        <div className="md:overflow-hidden overflow-scroll">
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
