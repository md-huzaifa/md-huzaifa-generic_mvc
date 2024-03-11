import { InputField } from "@/components";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { configs } from "@/configs";

interface props {
  openAddUser: boolean;
  setOpenAddUser: React.Dispatch<React.SetStateAction<boolean>>;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddUser: React.FC<props> = ({
  openAddUser,
  setOpenAddUser,
  setShowToast,
}) => {
  const defaultUser = {
    firstName: "",
    lastName: "",
    age: 0,
  };
  const [formData, setFormData] = useState(defaultUser);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${configs.SERVER_URL}/users/add`,
        JSON.stringify({
          firstName: "Muhammad",
          lastName: "Ovi",
          age: 250,
          /* other user data */
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setFormData(defaultUser);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
      setOpenAddUser(false);
      console.log("response ", response);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenAddUser(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openAddUser]);

  return (
    <div className="flex align-middle justify-center mt-28 ml-36">
      <div className="fixed justify-center items-center w-2/5 z-50">
        <div ref={modalRef} className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add User
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => setOpenAddUser(false)}
              >
                X<span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleAddUser}>
                <InputField
                  variant="text"
                  extra="mb-3"
                  label="First Name*"
                  name="firstName"
                  placeholder="name"
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <InputField
                  variant="text"
                  extra="mb-3"
                  label="Last Name*"
                  name="lastName"
                  placeholder="name"
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <InputField
                  variant="text"
                  extra="mb-3"
                  label="Age*"
                  name="age"
                  placeholder="age"
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
