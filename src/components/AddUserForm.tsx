import axios, { AxiosResponse } from "axios";
import { useState } from "react";

const AddUserForm = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");

  const addUser = async () => {
    await axios
      .post("http://localhost:5000/users/add-user", {
        email,
        role,
      })
      .then((res: AxiosResponse) => {
        console.log("res.data", res.data);
        if (res.data.statusCode === 200) {
          window.location.reload();
        }
      })
      .catch((error) => {
        // If it exists, prefer to throw the error message from the medical-records server
        throw new Error(error.response?.data?.error ?? error);
      });
  };

  const addUserDisabled = email.trim() === "";

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full p-6 border-t border-b"
      >
        <div className="flex flex-wrap mb-6">
          <div className="px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-[300px] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="some.email@gmail.com"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-2">
          <div className="px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Role
            </label>
            <div className="relative">
              <select
                onChange={(e) => setRole(e.currentTarget.value)}
                className="w-full block appearance-none border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      </form>
      <div className="m-4 flex justify-end items-end">
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
          onClick={onClose}
          className="bg-transparent text-gray-500 font-semibold hover:text-gray-800 hover:border-gray-800 py-2 px-4 border border-gray-500 rounded"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default AddUserForm;
