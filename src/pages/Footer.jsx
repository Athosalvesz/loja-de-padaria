import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <img src="/src/assets/Logo.png" alt="" width={'300px'}/>
            <p>
              Somos uma loja dedicada a oferecer as melhores refeições.
              Encontre os combos mais recentes e deliciosos em nosso catálogo.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/produtos">Produtos</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/sobre">Sobre nós</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato</h3>
            <p>
              <i className="fa fa-phone"></i> (99) 9999-9999
            </p>
            <p>
              <i className="fa fa-envelope"></i> contato@atrigueira.com
            </p>
            <p>
              <i className="fa fa-map-marker"></i>  R. Demóstenes, 805 - Campo Belo, São Paulo - SP, 04614-014
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Atrigueira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;