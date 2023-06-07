import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
//
import { NotificationIcon } from "../header/iconsHeader";

interface Data {
  name: string;
  content: string;
  date: string;
  img?:string
}

interface DropdownMessageProps {
  data: Data[];
}

const DropdownMessage: React.FC<DropdownMessageProps> = ({ data }) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <li className="relative" x-data="{ dropdownOpen: false, notifying: true }">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white navigation__icon__sm navigation__icon__md navigation__icon__lg navigation__icon__xl"
        to="#"
      >
        <span className="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1">
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>
        <NotificationIcon />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-80 w-60 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:-right-12 sm:top-8 sm:w-80 md:-right-12 md:top-10 md:w-96 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm md:text-lg font-medium text-bodydark2">پیام ها</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto px-2">
          {data &&
            data.map((item,index) => (
              <li key={index}>
                <Link
                  className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  to="/messages"
                >
                  <div className={`basis-3/4`}>
                    <h6 className="text-sm md:text-lg font-medium text-black dark:text-white">{item.name}</h6>
                    <p className="text-sm md:text-lg">{item.content} 💪</p>
                    <p className="text-xs md:sm">{item.date}</p>
                  </div>
                  <div className="basis-1/4 rounded-full">
                    <img src={item.img} alt="User" />
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  );
};

export default DropdownMessage;
