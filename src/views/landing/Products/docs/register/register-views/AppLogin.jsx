import PrevNextNavigation from "./../../../../../../components/PrevNextNavigation/PrevNextNavigation";

import pantallaLogin from "./../../../../../../assets/docs-login/pantalla-login.jpeg";
import registroWeb from "./../../../../../../assets/docs-login/registro-web.png";
import suscripcionMobile from "./../../../../../../assets/docs-login/pantalla-suscripcion-datos.jpeg";
import numeroVerificacionMail from "./../../../../../../assets/docs-login/numero-verificación.png";
import numeroVerificaciónMovil from "./../../../../../../assets/docs-login/numero-verificacion-escrito.jpeg";
import numeroVerificacionWeb from "./../../../../../../assets/docs-login/verificacion-web.png";
import mailBienvenida from "./../../../../../../assets/docs-login/mail-bienvenida.png";
import pantallaIncicioPerfil from "./../../../../../../assets/docs-login/pantalla-inicio.jpeg";

import {
  registerRoutesEndpoints,
  registerRoutesName,
} from "../../../../../../auxiliaries/navigationRoutes/docRoutes/docsRoutes";
import DocsBlockContentImage from "../../../../../../components/docs/DocsblockContentImage";
import DocsSubtitle from "../../../../../../components/docs/DocsSubtitle";
import DocsBlockImageDescription from "../../../../../../components/docs/DocsBlockImageDescription";
import DocsBlockDescriptionImage from "../../../../../../components/docs/DocsBlockDescripotionImage";

export default function AppLogin() {
  return (
    <>
      <PrevNextNavigation
        routes={registerRoutesEndpoints}
        endPointsArray={registerRoutesName}
      />
      <DocsBlockContentImage
        title="2. Suscripción y logeo"
        subtitle="Guia de suscripción"
        content="Cuando abrimos la aplicacion por primera vez aparece la siguiente pantalla. En el caso de estar registrado solo se deben ingresar el correo y la contraseña"
        img={pantallaLogin}
        description="Si no estamos registrados debemos hacerlo. IMPORTANTE: para suscribirse se debe ingresar un mail válido ya que se envía un número de verificacion para validarlo."
      />
      <DocsBlockContentImage
        title="Proceso de registro"
        subtitle="Suscribirse a kinApp"
        content="Para poder acceder a los recursos de la aplicación web y de las aplicaciones móviles debemos estar registrados en el entorno. Para registrarnos podemos hacerlo desde la web haciendo click en 'Registrarse':"
        img={registroWeb}
        description="o tambien podemos hacerlo desde la aplicación móvil deslizando hacia 'Sign-up', allí ingresamos los datos: username, email, password y la repetición del password:"
      />
      <DocsBlockImageDescription
        img={suscripcionMobile}
        content="Si todo sale bien, se envía un email al correo electrónico ingresado con el código de validacion."
      />
      <DocsBlockDescriptionImage
        img={numeroVerificacionMail}
        content="El correo que se recibe con el numero de verificacion:"
      />
      <DocsBlockDescriptionImage
        img={numeroVerificaciónMovil}
        content="Ingresamos el número de verificación en la aplicación móvil:"
      />
      <DocsBlockDescriptionImage
        img={numeroVerificacionWeb}
        content="Si nos estamos registrando en la aplicación web debemos ingresar el número aqui:"
      />
      <DocsBlockDescriptionImage
        img={pantallaIncicioPerfil}
        content="Si la verificación se realizó con éxito, en la aplicación móvil no redirigirá a la página de inicio de nuestro perfil: "
      />
      <DocsBlockDescriptionImage
        img={mailBienvenida}
        content="Y recibiremos un correo con el siguiente mensaje: "
      />
      <DocsSubtitle subtitle="!Ya podés comenzar a utilizar todos los recursos de kinApp¡" />
      <PrevNextNavigation
        routes={registerRoutesEndpoints}
        endPointsArray={registerRoutesName}
      />
    </>
  );
}
