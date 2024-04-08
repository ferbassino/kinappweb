import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 ">
      {users.map((el, index) => (
        <Link key={el._id} to={`/user/${el._id}`}>
          <li className="px-3 pb-3 sm:pb-4 hover:bg-gray-200">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0 py-2">
                <span className="text-sm text-gray-900 truncate dark:text-gray-900">
                  {index + 1}
                </span>
                <span className=" ml-2 text-sm text-gray-900 truncate dark:text-gray-900">
                  {el.userName}
                </span>
                <p className="text-sm text-gray-900 truncate dark:text-gray-400">
                  {el.email}
                </p>
                <p className="text-sm text-gray-900 truncate dark:text-gray-900">
                  {el.roles}
                </p>
                <p className="text-sm text-gray-900 truncate dark:text-gray-900">
                  {el.verified ? (
                    <span>perfil verificado</span>
                  ) : (
                    <span className="text-red-500 text-lg ">
                      perfil no verificado
                    </span>
                  )}
                </p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default UsersList;
