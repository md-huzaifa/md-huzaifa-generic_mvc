import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "@/hooks/useUser";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const { userData } = useUser();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        id="dropdownAvatarNameButton"
        ref={profileButtonRef}
        onClick={toggleDropdown}
        className="flex items-center text-sm pe-1 font-medium text-primary-light dark:text-primary-dark rounded-full md:me-0 focus:ring-4 focus:ring-primary-dark"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 me-2 rounded-full"
          src={userData?.image}
          alt="user photo"
        />
        {userData?.firstName}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          id="dropdownAvatarName"
          className="absolute z-10 bg-white dark:bg-black text-black dark:text-text-light divide-y divide-gray-100 rounded-lg shadow w-44 right-0 top-full"
        >
          <div className="px-4 py-3 text-sm ">
            <div className="truncate">{userData?.email}</div>
          </div>
          <ul
            className="py-2 text-sm  "
            aria-labelledby="dropdownAvatarNameButton"
          >
            <li>
              <a
                href="/profile"
                className="block px-4 py-2 hover:bg-background-light "
              >
                Profile
              </a>
            </li>
          </ul>
          <div className="py-2">
            <button
              className="block w-full text-start px-4 py-2 text-sm  hover:bg-background-light"
              onClick={handleLogOut}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
