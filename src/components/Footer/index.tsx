import ForestLogo from "/assets/img/forest.svg";

const Footer = () => {
  return (
    <section>
      <div className="container bg-verde-900 rounded-xl">
        <div className="flex flex-wrap justify-start md:justify-between p-12 md:flex-nowrap">
          <div className="flex flex-wrap gap-12 md:flex-nowrap">
            <div>
              <h3 className="text-2xl text-white">Endereço</h3>
              <p className="mt-4 text-gray-400">Rua da Mata, 123</p>
              <p className="text-gray-400">Floresta Nacional</p>
              <p className="text-gray-400">Rio de Janeiro, RJ</p>
            </div>
            <div>
              <h3 className="text-2xl text-white">Contato</h3>
              <p className="mt-4 text-gray-400">contato@forest.com</p>
              <p className="text-gray-400">+55 21 9999-9999</p>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img src={ForestLogo} alt="Forest" width={138} />
            <p className="mt-4 text-gray-400">Conecte-se com a natureza</p>
          </div>
        </div>
      </div>

      <div className="container my-8">
        <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap md:justify-between">
          <p className="text-gray-400">
            © 2024 Forest. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8 text-gray-400">
            <a href="#" className="hover:text-verde-300">
              Instagram
            </a>
            <a href="#" className="hover:text-verde-300">
              Linkedin
            </a>
            <a href="#" className="hover:text-verde-300">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
