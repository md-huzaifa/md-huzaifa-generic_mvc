import { IoHome } from "react-icons/io5";
import { MdOutlineChecklist } from "react-icons/md";

import type { ISidebarItem } from "@/types/sidebar.types";

export const SideBarList: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <IoHome />,
    accordian: null,
  },
  {
    name: "UserList",
    path: "/userlist",
    icon: <MdOutlineChecklist />,
    accordian: null,
  },
];
