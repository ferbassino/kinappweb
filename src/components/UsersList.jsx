import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 ">
      {users.map((el) => (
        <Link key={el._id} to={`/user/${el._id}`}>
          <li className="px-3 pb-3 sm:pb-4 hover:bg-gray-200">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 truncate dark:text-gray-900">
                  {el.userName}
                </p>
                <p className="text-sm text-gray-900 truncate dark:text-gray-400">
                  {el.email}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <p className="text-sm text-gray-900 truncate dark:text-gray-900">
                  {el.roles}
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
