import React, { useState, useContext } from "react";

//
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
//
import { OpenSidebar, CloseSidebar } from "./sidebarIcons";
import contextSidebar from "../../context/menu_sidebar";
import { MenusSidebar, menuAdmin } from "../../data/sidbarData";
//components
const Sidebar: React.FC = () => {
  //toggle

  const [menu, setMenu] = useState<MenusSidebar[]>(menuAdmin);
  //
  const context = useContext(contextSidebar);

  //handleSwitchSidebar

  const handleSwitchSidebar = () => {
    context.setOpen(!context.open);
  };

  //toggle submenu

  const toggleSubMenu = (id: number) => {
    const m = menu.map((item) => {
      if (item.id === id) {
        item = { ...item, subToggle: !item.subToggle };
      }
      return item;
    });
    if (m) {
      setMenu(m);
    }
  };

  return (
    <div
      className={`sidebar__bg ${
        context.open ? "sidebar__open sidebar__open__sm sidebar__open__md sidebar__open__lg sidebar__open__xl" : "sidebar__close sidebar__close__sm sidebar__close__md sidebar__close__lg sidebar__close__xl"
      }`}
    >
      <div className={`${context.open ? "button__sidebar__open" : "button__sidebar__close "}`}>
        <span className="text-inherit" onClick={handleSwitchSidebar}>
          {context.open ? <CloseSidebar /> : <OpenSidebar />}
        </span>
      </div>
      {menu.map((item, index) => (
        <div
          key={index}
          className={`${item.subToggle === false && "sidebar__items__hover"} ${
            context.open ? "sidebar__items__open" : "sidebar__items__close"
          }`}
        >
          <div
            className={`sidebar__items__parent sidebar__items__parent__sm ${item.subToggle === true && "text-meta-1"}`}
            onClick={() => toggleSubMenu(item.id)}
          >
            <div className="flex flex-row ">
              <span
                className={`${
                  context.open
                    ? "sidebar__items__icons__open sidebar__items__icons__open__sm"
                    : "sidebar__items__icons__close sidebar__items__icons__close__sm"
                }`}
              >
                {<item.icon />}
              </span>
              <span
                style={{
                  transitionDelay: `${index + 1}00ms`,
                }}
                className={`${
                  context.open
                    ? "sidebar__items__name__open sidebar__items__name__open__sm"
                    : "sidebar__items__name__close"
                }`}
              >
                {item.name}
              </span>
            </div>
            {item.subToggle === true ? (
              <span
                className={`${
                  context.open
                    ? "sidebar__items__icons__open"
                    : "sidebar__items__icons__close hidden"
                }`}
              >
                <ExpandMoreIcon />
              </span>
            ) : (
              <span
                className={`${
                  context.open
                    ? "sidebar__items__icons__open"
                    : "sidebar__items__icons__close hidden"
                }`}
              >
                <ExpandLessIcon />
              </span>
            )}
          </div>
          {item.subItems && (
            <div
              className={`${
                item.subToggle
                  ? "sidebar__items__subItems__open sidebar__items__subItems__open__sm"
                  : "sidebar__items__subItems__close sidebar__items__subItems__close__sm"
              }`}
            >
              {item.subItems &&
                item.subItems.map((sub, i) => (
                  <div key={i} className={`sidebar__items__subItems__item sidebar__items__subItems__item__sm`}>
                    <span
                      style={{
                        transitionDelay: `${index + 1}00ms`,
                      }}
                      className={`${
                        context.open
                          ? "sidebar__subItems__icons__open sidebar__subItems__icons__open__sm"
                          : "sidebar__subItems__icons__close sidebar__subItems__icons__close__sm"
                      }`}
                    >
                      {<sub.icon/>}
                    </span>
                    <span
                      style={{
                        transitionDelay: `${index + 1}00ms`,
                      }}
                      className={`${
                        context.open
                          ? "sidebar__subItems__name__open sidebar__subItems__name__open__sm"
                          : "sidebar__subItems__name__close sidebar__subItems__name__close__sm "
                      }`}
                    >
                      {sub.name}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
