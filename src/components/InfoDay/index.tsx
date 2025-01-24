const InfoDay = () => {
  const day = new Date()
    .toLocaleDateString("pt-BR", { weekday: "long" })
    .split("-")[0];

  console.log(day);

  return (
    <>
      <section className="container mt-4 flex justify-center md:justify-start">
        <div className="relative flex h-full items-center">
          <div className="bg-verde-900 text-verde-300 divide-verde-800 inline-flex items-center divide-x-2 rounded-md">
            <span className="px-4 py-2 capitalize" id="dia">
              {day}
            </span>
            <span className="px-4 py-2" id="temperatura">
              23º
            </span>
            <span className="px-4 py-2" id="umidade">
              🌧️
            </span>
          </div>
          <span className="bg-verde-300 absolute -left-1 block size-2 rounded-full"></span>
        </div>
      </section>
    </>
  );
};

export default InfoDay;
