import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { configs } from "@/configs";

import { PageLayout } from "@/layouts";
import { useUserList } from "@/hooks/useUserList";
import { Loader, AddUser } from "@/components";

interface UserListProps {}

export const UserList: React.FC<UserListProps> = () => {
  const url = configs.SERVER_URL;
  const { loading, userList } = useUserList();

  const [openAddUser, setOpenAddUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResult, setFilteredResult] = useState([]);
  const [showInitialUsers, setShowInitialUsers] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const toggleAddUser = () => {
    setOpenAddUser(!openAddUser);
  };

  const handleClearSearch = () => {
    setSearchTerm(() => {
      return "";
    });
    setFilteredResult([]);
    setShowInitialUsers(false);
  };

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowInitialUsers(true);
    setSearchTerm(e.target.value);
    try {
      setShowInitialUsers(true);
      const response = await axios.get(
        `${url}/users/filter?key=firstName&value=${e.target.value}`
      );
      setFilteredResult(response.data.users);
    } catch (error) {
      console.log("🚀 ~ handleSearchChange ~ error:", error);
    } finally {
      setShowInitialUsers(false);
    }
  };

  return (
    <PageLayout>
      <>
        <div className="pb-20 px-20 max-h-lvh overflow-y-scroll">
          {loading ? (
            <Loader />
          ) : (
            <>
              {openAddUser ? (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 p-4 md:p-8">
                  <div className="flex align-middle justify-center">
                    <AddUser
                      openAddUser={openAddUser}
                      setOpenAddUser={setOpenAddUser}
                      setShowToast={setShowToast}
                    />
                  </div>
                </div>
              ) : null}
              {showToast ? (
                <div className="fixed top-24 right-10 z-50 bg-green-400 text-white px-4 py-2 rounded-lg">
                  User added successfully!
                </div>
              ) : null}
              <div className="flex align-middle justify-between mb-2">
                <div className="flex h-8 items-center rounded-full bg-white text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
                  <p className="pl-3 pr-2 text-xl">
                    <FiSearch className="h-4 w-4 text-gray-400 dark:text-black" />
                  </p>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block h-full w-full rounded-full text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 placeholder:dark:text-gray-400 dark:bg-navy-900 dark:text-black  sm:w-fit"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm ? (
                    <>
                      <button
                        className="ml-2 text-blue-500"
                        onClick={handleClearSearch}
                      >
                        clear
                      </button>
                    </>
                  ) : null}
                </div>

                <div className="flex align-middle justify-end ">
                  <button
                    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={toggleAddUser}
                  >
                    + Add User
                  </button>
                </div>
              </div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-primary-light dark:text-primary-dark shadow-lg">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        FirstName
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Last Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResult.length != 0 ? (
                      filteredResult.map((user: any, index: number) => (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-background-light dark:hover:bg-background-light"
                        >
                          <td className="px-6 py-4">
                            <img
                              className="w-20 h-20 rounded-full"
                              src={user.image}
                            />
                          </td>
                          <td className="px-6 py-4">{user.firstName}</td>
                          <td className="px-6 py-4">{user.lastName}</td>
                          <td className="px-6 py-4">{user.email}</td>
                          <td className="px-6 py-4">{user.phone}</td>
                        </tr>
                      ))
                    ) : (
                      <>
                        {!showInitialUsers &&
                        searchTerm! == "" &&
                        userList?.users.length !== 0 ? (
                          userList?.users.map((user: any, index: number) => (
                            <tr
                              key={index}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-background-light dark:hover:bg-background-light"
                            >
                              <td className="px-6 py-4">
                                <img
                                  className="w-20 h-20 rounded-full"
                                  src={user.image}
                                />
                              </td>
                              <td className="px-6 py-4">{user.firstName}</td>
                              <td className="px-6 py-4">{user.lastName}</td>
                              <td className="px-6 py-4">{user.email}</td>
                              <td className="px-6 py-4">{user.phone}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center">
                              No users exist
                            </td>
                          </tr>
                        )}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </>
    </PageLayout>
  );
};
