import React, { createContext, useCallback, useMemo, useState } from "react";

export const SidebarContext = createContext();
const DrawerContext = ({ children }) => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const toggleDrawer = useCallback(() => setMobileDrawer((open) => !open), []);
  const value = useMemo(() => ({ mobileDrawer, toggleDrawer }), [mobileDrawer, toggleDrawer]);
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export default DrawerContext;
