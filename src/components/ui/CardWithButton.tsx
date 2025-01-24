import Button from "./Button";

interface CardWithButtonProps {
  cardName: string;
  cardDateDay: string;
  cardDateMonth: string;
  cardDateYear: string;
  cardInfo: string;
}

const getMonthNumber = (monthName: string): string => {
  const months = {
    Janeiro: "01",
    Fevereiro: "02",
    Março: "03",
    Abril: "04",
    Maio: "05",
    Junho: "06",
    Julho: "07",
    Agosto: "08",
    Setembro: "09",
    Outubro: "10",
    Novembro: "11",
    Dezembro: "12",
  };
  return months[monthName as keyof typeof months];
};

const CardWithButton = ({
  cardName,
  cardDateDay,
  cardDateMonth,
  cardDateYear,
  cardInfo,
}: CardWithButtonProps) => {
  return (
    <section className="min-w-[300px] rounded-xl bg-verde-800 p-8">
      <div className="text-2xl text-verde-200">{cardName}</div>
      <div className="my-4 text-white">
        <span className="text-5xl">{cardDateDay}</span>
        <span className="flex items-center text-xl">
          {`${cardDateMonth} ${cardDateYear}`}
        </span>
      </div>
      <div className="mb-4 text-white">{cardInfo}</div>
      <Button>{`Reservar ${cardDateDay}/${getMonthNumber(cardDateMonth)}`}</Button>
    </section>
  );
};

export default CardWithButton;
