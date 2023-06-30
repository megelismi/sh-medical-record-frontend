import axios, { AxiosResponse } from "axios";
import { useState } from "react";

const ErrorAlert = ({
  errorMessage,
  onClose,
}: {
  errorMessage: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="m-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline"> {errorMessage}</span>
      <span
        onClick={onClose}
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
      >
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

const AddUserForm = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");
  const [error, setError] = useState<string | null>(null);

  const addUser = async () => {
    await axios
      .post("http://localhost:5000/users/add-user", {
        email,
        role,
      })
      .then((res: AxiosResponse) => {
        if (res.data.statusCode === 200) {
          window.location.reload();
        }
      })
      .catch((error) => {
        let errorMessage = "Could not create user";

        if (error.response?.data?.error?.status === 422) {
          errorMessage = "A user with that email address already exists.";
        }

        // If it exists, prefer to throw the error message from the medical-records server
        setError(errorMessage);
      });
  };

  const addUserDisabled = email.trim() === "";

  return (
    <div className="border-t border-b">
      {error ? (
        <ErrorAlert errorMessage={error} onClose={() => setError(null)} />
      ) : null}
      <form onSubmit={(e) => e.preventDefault()} className="w-full p-6 ">
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
    </div>
  );
};

export default AddUserForm;
