import { useState, useContext } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import client from "../../api/client";
import "./PaymentButton.css";
import { testsContext } from "../../context/TestsContext";

export default function PaymentButton({ title, quantity, price, buttonTitle }) {
  const [preferenceId, setPreferenceId] = useState(null);
  const { user } = useContext(testsContext);

  initMercadoPago(`APP_USR-8e90396a-fd28-4c24-81e4-812af239461f`, {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await client.post("/create_preference", {
        title: { title },
        quantity: quantity,
        price: price,
      });

      const { result } = response.data;

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    if (!user.userName) {
      alert(
        "debes ser usuario registrado para inscribirte a los cursos, podes hacerlo arriba a la derecha en `Registrarse`"
      );
    } else {
      createPreference();
      const result = await createPreference();

      if (result) {
        setPreferenceId(result);
      }
    }
  };
  return (
    <div className="mercado-button-container">
      <p className="price-product">Inversión: AR$ {price}</p>
      <button onClick={handleBuy}>{buttonTitle}</button>
      {preferenceId && (
        <div className="wallet-container">
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        </div>
      )}
    </div>
  );
}
