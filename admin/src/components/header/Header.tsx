import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

//
import UserOne from "../../assets/images/user/user-01.png";
import UserTwo from "../../assets/images/user/user-02.png";
import UserThree from "../../assets/images/user/user-03.png";
import UserFour from "../../assets/images/user/user-04.png";
import useColorMode from "../../hooks/useColorMode";

//

import { IconsLanguage, Moon, NightIcon, NotificationIcon, SunIcon } from "./iconsHeader";
import { NotificationType } from "../../global-d";
import DropdownMessage from "../dropdownMessage/DropDownMessage";
import DropdownProfile from "../dropdownProfile/DropdownProfile";
//components
function Header() {
  return (
    <header className="header">
      <nav className="nav__navigation__Mobile">
        <ul className="ul__navigation__mobile">
          <DropdownProfile username={`جواد احمدی`} />
          <Notification />
          <Language />
          <DarkModeSwitcher />
        </ul>
      </nav>
    </header>
  );
}

//Notification
const Notification = () => {
  const [noti, setNoti] = useState<NotificationType[]>([]);
  const [openNoti, setOpenNoti] = useState<boolean>(true);

  useEffect(() => {
    setNoti([
      {
        name: "جواد",
        content: "پیام جدید",
        date: "1342/2/12",
        img:`${UserOne}`
      },
      {
        name: "حامد",
        content: "پیام جدید",
        date: "1342/2/12",
        img:`${UserTwo}`

      },
      {
        name: "سارا",
        content: "پیام جدید",
        date: "1342/2/12",
        img:`${UserThree}`
      },
    ]);
  }, []);
  return (
    <li className="li__navigation__mobile li__navigation__sm li__navigation__md li__navigation__lg li__navigation__xl">
      {openNoti && (
        <ul>
          <DropdownMessage data={noti} />
        </ul>
      )}
    </li>
  );
};

//language

const Language = () => {
  return (
    <li className="li__navigation__mobile li__navigation__sm li__navigation__md li__navigation__lg li__navigation__xl">
      <span className=" navigation__icon__mobile navigation__icon__sm navigation__icon__md navigation__icon__lg navigation__icon__xl ">
        <IconsLanguage />
      </span>
    </li>
  );
};

//darkModeSwitcher
const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <li className="li__navigation__switcherColor__mobile li__navigation__switcherColor__sm li__navigation__switcherColor__md li__navigation__switcherColor__lg li__navigation__switcherColor__xl">
      <label
        className={`relative m-0 block h-7.5 w-14 rounded-full ${
          colorMode === "dark" ? "bg-primary" : "bg-stroke"
        }`}
      >
        <input
          type="checkbox"
          onChange={() => {
            if (typeof setColorMode === "function") {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }
          }}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`absolute top-1/2 -left-[5px] flex h-6 w-6 md:h-8 md:w-8 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
            colorMode === "dark" && "!right-[10px] !translate-x-full"
          }`}
        >
          <span className="dark:hidden flex items-center justify-center sm:text-[1.4rem] md:text-[1.8rem]">
            <SunIcon />
          </span>
          <span className="hidden dark:flex tems-center justify-center sm:text-[1.4rem] md:text-[1.8rem]">
            <Moon />
          </span>
        </span>
      </label>
    </li>
  );
};

export default Header;
