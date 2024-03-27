import Hero from "../components/general/Hero";
import Blocks from "../components/otros/Blocks";
import CookieConsent from "react-cookie-consent";
const KinApp = () => {
  return (
    <div>
      <Hero />
      <Blocks />
      <div className="container flex w-11">
        <CookieConsent
          location="bottom"
          buttonText="Acepto"
          cookieName="myAwesomeCookieName2"
          style={{ background: "rgb(23 37 84)" }}
          buttonStyle={{
            background: "#db7602",
            color: "rgb(23 37 84)",
            fontSize: "13px",
          }}
          expires={150}
        >
          Este sitio web utiliza cookies para mejorar la experiencia del
          usuario.
        </CookieConsent>
      </div>
    </div>
  );
};

export default KinApp;
