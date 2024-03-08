import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../requests/getUser";
import client from "../api/client";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [clients, setClients] = useState(0);
  const [tests, setTests] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const getOneUser = async () => {
      const user = await getUser(id);
      setClients(user.client.length);
      setTests(user.motion.length);
      setUser(user);
    };
    getOneUser();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await client.delete(`/api/user/${user._id}`);
      if (response.data.success) {
        alert("User deleted successfully");
        navigate("/users");
      } else {
        alert("error has ocurred, try again later ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {/* <div className="lg:w-4/5 mx-auto flex flex-wrap"> */}
          <div>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {user.userName}
            </h2>
            <h1 className="text-gray-900 text-lg title-font font-medium mb-4">
              {user.email}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Roles</span>
              <span className="ml-auto text-gray-900">{user.roles}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">id</span>
              <span className="text-xs ml-auto text-gray-900">{user._id}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Verificado</span>
              <span className="ml-auto text-gray-900">
                {user.verified ? "Si" : "No"}
              </span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Clientes</span>
              <span className="ml-auto text-gray-900">{clients}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Tests</span>
              <span className="ml-auto text-gray-900">{tests}</span>
            </div>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button
                onClick={handleDelete}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
          {/* <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            /> */}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default User;
