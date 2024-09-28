import PrevNextNavigation from "./../../../../../../components/PrevNextNavigation/PrevNextNavigation";
import DocsHeader from "./../../../../../../components/docs/DocsHeader";
import DocsDescription from "./../../../../../../components/docs/DocsDescription";
import {
  jumpRoutes,
  jumpEndPointsArray,
} from "../../../../../../auxiliaries/navigationRoutes/jumpRoutes/jumpRoutes";
import DocsItems from "../../../../../../components/docs/DocsItems";
import { contentJumpDocsItems } from "../../../../../../auxiliaries/contents/docs/apks/jump/jumpApksAuxiliaries";
import DocsBlockContentImage from "../../../../../../components/docs/DocsblockContentImage";
import DocsButton from "../../../../../../components/docs/DocsButton";
import { useNavigate } from "react-router-dom";
import DocsSubtitle from "../../../../../../components/docs/DocsSubtitle";
import completo from "/completo.mp4";
import "./JumpDocs.css";
import DocsBlockTitleImage from "../../../../../../components/docs/DockBlockTitleImage";

import jumpError from "/jump_error.jpeg";
export default function Jump() {
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate("/downloads");
  };
  return (
    <>
      {/* <PrevNextNavigation
        routes={jumpRoutes}
        endPointsArray={jumpEndPointsArray}
      /> */}
      <DocsHeader
        title="Aplicación móvil Jump"
        subTitle="En esta documentación encontrarás todo lo necesario para poder sacar el mejor provecho a esta poderosa herramienta de evaluacion del salto vertical."
      />
      <DocsDescription description="El salto vertical es un importante método de evaluación del rendimiento deportivo. Jump evalúa 3 de ellos: el squat-jump, el counter-movement-jump y el drop-jump. Ademas evalúa el stiffness que básicamente es una forma de medir la rigidez de los miembros inferiores durante el rebote. " />
      {/* <DocsItems
        title="En esta documentación vamos a ver:"
        array={contentJumpDocsItems}
      /> */}
      <DocsBlockContentImage
        title="Tutorial"
        subtitle="A continuación vas a poder ver el videotutorial de la aplicación "
        content="Sigue las consignas para poder registrar y guardar tus datos"
      />
      <DocsItems
        title={"En el video verás:"}
        array={[
          "Datos a ingresar",
          "Forma de sujetar el dispositivo",
          "Forma adecuada de esperar la señales para evaluar",
          "Ver los datos en el dispositivo",
          "Guardar datos en el dispositivo, compartirlos y eliminarlos",

          "Ver los datos en tu perfil de kinApp web",
        ]}
      />
      <div className="video-container">
        <video
          controls
          controlsList="nodownload"
          className="program-video"
          loop
          autoPlay={true}
          // poster="./images/1.jpg"
          muted
          src={completo}
        ></video>
      </div>

      <DocsSubtitle subtitle="Si no existen errores durante la evaluación la aplicación nos hará saber que el registro fue exitoso." />
      <DocsBlockContentImage
        title={"Errores en el registro"}
        content="La aplicación jump presenta una serie de validaciones para poder evaluar un salto especifico. Si no se cumplen ciertas condiciones en cada salto va a aparecer el siguiente mensaje inmediatamente despues del sonido final del test:"
        subtitle="Mensajes de advertencia durante el test"
        img={jumpError}
        description="Vamos a ver qué elementos detecta la aplicación para dar los errores de valicación"
      />
      <DocsItems
        title={"De los saltos en general"}
        array={[
          "Que el gesto no sea un salto",
          "Que se generen movimientos sin respetar los sonidos de la evaluación",
          "Que el dispositivo se mueva con respecto al cuerpo en el momento del salto",
          "Que el dispositivo no este vertical",
          "Que el salto no se realice hacia arriba",
        ]}
      />
      {/* <DocsItems
        title={"Del Drop Jump"}
        array={[
          "No realizar la técnica del drop jump",
          "Saltar hacia arriba en vez de caer",
        ]}
      />
      <DocsItems
        title={"Del Squat Jump"}
        array={[
          "No realizar la técnica del Squat Jump",
          "Tomar impulso en el comienzo del salto",
        ]}
      />
      <DocsItems
        title={"Del Stiffness"}
        array={["No realizar un rebote adecuado", "Interrumpir el multisalto"]}
      /> */}
      <DocsSubtitle subtitle="Con el tiempo los mensajes de error tienden a desaparecer ya que las personas evaluadas aprenden a sujetar el dispositivo y a realizar el salto correctamente." />
      <DocsSubtitle
        subtitle="
      ¡Ahora solo tenés que evaluar!"
      />
    </>
  );
}
