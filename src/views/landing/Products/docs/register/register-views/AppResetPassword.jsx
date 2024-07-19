import {
  registerRoutesEndpoints,
  registerRoutesName,
} from "../../../../../../auxiliaries/navigationRoutes/docRoutes/docsRoutes";

import PrevNextNavigation from "./../../../../../../components/PrevNextNavigation/PrevNextNavigation";

import DocsBlockContentImage from "../../../../../../components/docs/DocsblockContentImage";

import DocsBlockImage from "../../../../../../components/docs/DockBlockImage";
import DocsSubtitle from "../../../../../../components/docs/DocsSubtitle";
import DocsBlockDescriptionImage from "../../../../../../components/docs/DocsBlockDescripotionImage";

import clickReset from "./../../../../../../assets/docs-login/click-reset.jpeg";
import clickResetWeb from "./../../../../../../assets/docs-login/click-reset-web.png";
import ingresarMovil from "./../../../../../../assets/docs-login/mail-para-resetear.jpeg";
import ingresarWeb from "./../../../../../../assets/docs-login/ingresar-mail-reset.png";
import mensajeResetEnviado from "./../../../../../../assets/docs-login/mensaje-reset-linck.jpeg";
import mailConResetLink from "./../../../../../../assets/docs-login/mail-reestablecer.png";
import paginaRecuperacion from "./../../../../../../assets/docs-login/ingresar-password-nuevo.png";
import resetExitoso from "./../../../../../../assets/docs-login/reseteo-exitoso.png";

export default function AppResetPassword() {
  return (
    <div>
      <PrevNextNavigation
        routes={registerRoutesEndpoints}
        endPointsArray={registerRoutesName}
      />
      <DocsBlockContentImage
        title="2. Reestablecer contraseña"
        subtitle="Guia para reestablecer la contraseña"
        content="En el caso de querer reestablecer la contraseña podemos hacer click en  'Forgot password' en la aplicación móvil"
        img={clickReset}
        description="o en la web en '¿Olvidó la contraseña?'"
      />
      <DocsBlockImage img={clickResetWeb} />
      <DocsBlockDescriptionImage
        img={ingresarMovil}
        content="nos envia a una pantalla para ingresar el email de nuestra cuenta. En el movil nos aparece: "
      />
      <DocsBlockDescriptionImage
        img={ingresarWeb}
        content="o si lo estamos haciendo por pa web: "
      />
      <DocsBlockDescriptionImage
        img={mensajeResetEnviado}
        content="nos avisa que se envió un link de recuperación: "
      />
      <DocsBlockDescriptionImage
        img={mailConResetLink}
        content="y recibimos un correo con el link de recuperación: "
      />
      <DocsBlockDescriptionImage
        img={paginaRecuperacion}
        content="Haciendo click en 'Reestablecer la contraseña', nos envía a la pagina de recuperación "
      />
      <DocsBlockDescriptionImage
        img={resetExitoso}
        content="Si no hay ningún error nos avisa que la contraseña se reestableció exitosamente y ya podremos ingresar con la contraseña nueva "
      />
      <DocsSubtitle subtitle="!Ya podés seguir utilizando el entorno kinApp¡" />
      <PrevNextNavigation
        routes={registerRoutesEndpoints}
        endPointsArray={registerRoutesName}
      />
    </div>
  );
}
