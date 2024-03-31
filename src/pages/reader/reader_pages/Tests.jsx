import { useEffect, useState } from "react";
import { useLogin } from "../../../context/LoginProvider";
import { getClients } from "../../../requests/clients/getClients";
import { getTests } from "../../../requests/tests/getTests";
import HashLoader from "react-spinners/HashLoader";
import getDate from "../../../auxiliaries/getDate";

const Tests = () => {
  const { profile } = useLogin();
  const [allUserTests, setAllUserTests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const getAllUserTests = async () => {
        const allUT = await getTests(profile.id);
        setAllUserTests(allUT);
        setLoading(false);
      };
      getAllUserTests();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);
  const handleTest = (id) => {
    console.log(id);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Tus evaluaciones
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Aquí se listan todas tus evaluaciones. Haciendo click en cualquiera
            de ellas vas a poder acceder a todas sus propiedades.
          </p>
        </div>
        {loading ? (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <HashLoader
                color={"#011a42"}
                loading={loading}
                cssOverride={{
                  display: "block",
                  margin: "0 auto",
                  borderColor: "#011a42",
                }}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </>
        ) : (
          <>
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                      Email
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Test
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Segmento
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Movimiento
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUserTests.map((el) => (
                    <tr
                      onClick={() => handleTest(el._id)}
                      key={el.id}
                      className="cursor-pointer hover:bg-blue-900 hover:text-blue-50"
                    >
                      <td className="px-4 py-3">{el.email}</td>
                      <td className="px-4 py-3">{el.motionType}</td>
                      <td className="px-4 py-3">{el.segment}</td>
                      <td className="px-4 py-3 ">{el.motionType}</td>
                      <td className="w-10 text-center">{getDate(el.date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Tests;
