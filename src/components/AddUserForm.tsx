import { useState } from "react";

const AddUserForm = ({ onCancel }: { onCancel: () => void }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");

  const addUser = () => {
    console.log("email", email);
    console.log("role", role);
    // validate email
    // make axios call
  };

  const addUserDisabled = email.trim() === "";

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-lg p-16 ml-16 border rounded w-full"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-96 md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="some.email@gmail.com"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-64 md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Role
          </label>
          <div className="relative">
            <select
              onChange={(e) => setRole(e.currentTarget.value)}
              className="w-full block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value={"USER"}>USER</option>
              <option value={"ADMIN"}>ADMIN</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          disabled={addUserDisabled}
          onClick={addUser}
          className={`${
            addUserDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-violet-700"
          } mr-4 bg-violet-500 text-white font-bold py-2 px-4 rounded`}
        >
          Add User
        </button>
        <button
          onClick={onCancel}
          className="bg-transparent text-gray-500 font-semibold hover:text-gray-800 hover:border-gray-800 py-2 px-4 border border-gray-500 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
