interface CardSimpleProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  className?: string;
}

const CardSimple = ({
  icon,
  title,
  description,
  time,
  className,
}: CardSimpleProps) => {
  return (
    <section
      className={`h-[280px] rounded-xl bg-verde-900 p-8 transition-transform sm:hover:-translate-y-2 ${className}`}
    >
      <div className="mb-4">{icon}</div>
      <span className="text-2xl text-white">{title}</span>
      <p className="my-4 text-gray-400">{description}</p>
      <p className="text-verde-200">{time}</p>
    </section>
  );
};

export default CardSimple;
