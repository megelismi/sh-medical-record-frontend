import { useState } from "react";
import AddUserModal from "./AddUserModal";
import type { User } from "../pages/Users";

const UserRow = ({ user }: { user: User }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.role}</td>
    </tr>
  );
};

const UsersTable = ({ users }: { users: User[] }) => {
  const currentUserRole = sessionStorage.getItem("userRole");

  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <>
      <AddUserModal show={showAddUser} onClose={() => setShowAddUser(false)} />
      <div className="mx-20 mt-24 mb-4 flex justify-between">
        <h1 className="font-bold text-2xl">Users</h1>
        {currentUserRole === "ADMIN" ? (
          <button
            onClick={() => setShowAddUser(true)}
            className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded"
          >
            Add New User
          </button>
        ) : null}
      </div>
      <div className="border sm:rounded-lg mx-16 mb-16">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={`user-${user.id}`} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
