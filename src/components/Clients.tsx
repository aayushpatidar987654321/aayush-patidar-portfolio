import "./styles/Clients.css";

const clients = [
  "/Clients/amrit.png",
  "/Clients/aradhana.png",
  "/Clients/ather.png",
  "/Clients/be10x.png",
  "/Clients/cheerio.png",
  "/Clients/dmart.png",
  "/Clients/glasseo.png",
  "/Clients/igh.png",
  "/Clients/mumuso.png",
  "/Clients/reknsleek.png",
  "/Clients/shakti.png",
  "/Clients/wwr.png",
];

const Clients = () => {
  return (
    <section className="clients-section" id="clients">
      <div className="clients-container">

        <div className="clients-heading">
          <h2>
            Clients I've <span>Worked For</span>
          </h2>

          <p>
            Creating visual content for brands, businesses and creators.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((logo, index) => (
            <div className="client-logo" key={index}>
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;