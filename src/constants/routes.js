import { BiCategory } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi2";
import { MdBarChart, MdOutlineSettingsSuggest, MdPeople } from "react-icons/md";
import { PiBooksDuotone } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";

import { objectToArray } from "../utils/helpers";

export const ADMIN_ROUTES = objectToArray({
  DASHBOARD: {
    path: "/dashboard",
    name: "Trang chủ",
    icon: HiOutlineHome,
  },
  USERS: {
    path: "/users",
    name: "Người dùng",
    icon: MdPeople,
  },
  CATEGORIES: {
    path: "/categories",
    name: "Danh mục",
    icon: BiCategory,
  },
  BOOKS: {
    path: "/books",
    name: "Sản phẩm",
    icon: PiBooksDuotone,
  },
  STATISTICS: {
    path: "/statistics",
    name: "Thống kê",
    icon: MdBarChart,
  },
  ACCOUNT: {
    path: "/account",
    name: "Tài khoản của tôi",
    icon: RiUserSettingsLine,
    meta: "bottom",
  },
  SETTINGS: {
    path: "/settings",
    name: "Cài đặt chung",
    icon: MdOutlineSettingsSuggest,
  },
});
