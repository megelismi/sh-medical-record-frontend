import type { User } from "../pages/Users";

const UserRow = ({ user }: { user: User }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.role}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

const UsersTable = ({ users }: { users: User[] }) => {
  return (
    <>
      <div className="mx-20 mt-24 mb-4 flex justify-between">
        <h1 className="font-bold text-2xl">User's Table</h1>
        <button
          onClick={() => console.log("adding new user")}
          className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded"
        >
          Add New User
        </button>
      </div>
      <div className="relative overflow-x-auto border sm:rounded-lg mx-16 mb-16">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
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
