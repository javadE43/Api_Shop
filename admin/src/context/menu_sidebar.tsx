import React, { useState } from "react";

interface ContextProps {
  readonly open: boolean;
  setOpen: (open: boolean) => void;
}
const contextSidebar = React.createContext<ContextProps>({ open: false, setOpen: (open) => false });

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return <contextSidebar.Provider value={{ open, setOpen }}>{children}</contextSidebar.Provider>;
};
export default contextSidebar;
