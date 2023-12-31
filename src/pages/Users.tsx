import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UsersTable from "../components/UsersTable";
import axios, { AxiosResponse } from "axios";

export interface User {
  id: number;
  email: string;
  role: string;
}

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      await axios
        .request({
          method: "GET",
          url: "http://localhost:5000/users/get-all",
        })
        .then((response: AxiosResponse) => {
          setUsers(response.data.users);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <UsersTable users={users} />
    </>
  );
};

export default Users;
