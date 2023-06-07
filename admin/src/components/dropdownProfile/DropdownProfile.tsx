import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

//
import UserTwo from "../../assets/images/user/user-02.png";

//interface
interface dropdownProfileProps {
  username: string;
}
//componenet

const DropdownProfile: React.FC<dropdownProfileProps> = ({ username }) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  //
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  //close on click outside
  useEffect(() => {
    const handlClick = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", handlClick);
    return () => document.removeEventListener("click", handlClick);
  });
  //close on click outside
  useEffect(() => {
    const keypress = ({ keyCode }: KeyboardEvent) => {
      if (!dropdown.current || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  });

  return (
    <li className="li__navigation__sm li__navigation__md li__navigation__lg li__navigation__xl !ml-4">
      {/* icon */}
      <Link
        to=""
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white sm:w-12 sm:h-12 md:w-14 md:h-14"
      >
        <span className="inline-block w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14">
          <img src={`${UserTwo}`} className="mx-w-[100%] h-auto"/>
        </span>
      </Link>

      {/* dropdown start */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute  mt-2.5 flex h-24 w-40 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-36 md:w-42 md:h-32 overflow-hidden ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className={`flex justify-center items-center text-white text-sm md:text-lg`}>
          <h3>{username}</h3>
        </div>
        <ul className={`p-0 m-0 flex flex-col text-white text-[0.8rem] md:text-[1.2rem]`}>
          <li>
            <Link to="">پروفایل</Link>
          </li>
          <li>
            <button>ورود</button>
          </li>
          <li>
            <button>خروج</button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default DropdownProfile;
