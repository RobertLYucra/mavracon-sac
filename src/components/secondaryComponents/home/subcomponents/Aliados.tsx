import "./styles/Aliados.scss";
import Logo1 from "../images/logos/logo1.svg";
import Logo2 from "../images/logos/logo2.svg";
import Logo3 from "../images/logos/logo3.svg";
import Logo4 from "../images/logos/logo4.svg";
import Logo5 from "../images/logos/logo5.svg";

// Placeholder for client logos - in a real scenario these would be imported images
const clients = [
  { name: "Strata", logo: Logo1 },
  { name: "Core Mining", logo: Logo2 },
  { name: "IronWorks", logo: Logo3 },
  { name: "Terra", logo: Logo4 },
  { name: "Apex", logo: Logo5 },
];

const Aliados = () => {
  return (
    <section className="aliados-section">
      <div className="aliados-header">
        <h2>Confían en Nosotros</h2>
        <div className="separator"></div>
      </div>
      
      <div className="aliados-grid">
        {clients.map((client, index) => (
          <div className="aliado-item" key={index}>
             <img src={client.logo} alt={client.name} className="aliado-logo" />
             {/* <div className="aliado-placeholder">...</div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aliados;
