import React from "react";
import { PageLayout } from "@/layouts";
import { useUserList } from "@/hooks/useUserList";
import { Loader } from "@/components";

interface UserListProps {}

export const UserList: React.FC<UserListProps> = () => {
  const { loading, userList } = useUserList();

  return (
    <PageLayout>
      <>
        <div className=" pb-20 px-20 max-h-lvh overflow-y-scroll ">
          {loading ? (
            <Loader />
          ) : (
            <>
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
                    {userList?.users.length !== 0 ? (
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
