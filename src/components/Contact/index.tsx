import Button from "../ui/Button";

const Contact = () => {
  return (
    <section className="container">
      <div className="flex flex-wrap justify-between md:flex-nowrap">
        {/* Info */}
        <div>
          <h2 className="text-4xl text-verde-200">Nossos Contatos</h2>
          <p className="mt-4 text-white">
            Tem interesse em passar uma temporada na Forest? <br />
            Entre em contato com a gente por telefone ou email.
          </p>

          <div className="mt-8">
            <div className="h-[2px] w-7 bg-verde-200"></div>
            <h3 className="text-2xl text-verde-200">Base</h3>
            <p className="text-gray-300">
              Rua da Mata, 123 - Floresta Nacional - RJ
            </p>
          </div>

          <div className="mt-8">
            <div className="h-[2px] w-7 bg-verde-200"></div>
            <h3 className="text-2xl text-verde-200">Email</h3>
            <p className="text-gray-300">contato@forest.com</p>
          </div>

          <div className="mt-8">
            <div className="h-[2px] w-7 bg-verde-300"></div>
            <h3 className="text-2xl text-verde-300">Telefone</h3>
            <p className="text-gray-300">21 99999-9999</p>
          </div>
        </div>
        {/* Formulario */}
        <div className="mt-8 w-full rounded-2xl bg-verde-900 p-8 text-white md:mt-0 md:w-1/2">
          <form>
            <div className="flex flex-col gap-2">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="rounded-lg border border-transparent bg-verde-800 p-2 outline-none focus:border-verde-300"
              />
            </div>
            <div className="my-4 flex flex-wrap gap-4 md:flex-nowrap">
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="rounded-lg border border-transparent bg-verde-800 p-2 outline-none focus:border-verde-300"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="text"
                  className="rounded-lg border border-transparent bg-verde-800 p-2 outline-none focus:border-verde-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                className="h-40 rounded-lg border border-transparent bg-verde-800 p-2 outline-none focus:border-verde-300"
              ></textarea>
            </div>

            <Button className="mt-4">Enviar Email</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
