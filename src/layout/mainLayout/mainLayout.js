import React from "react";
import AppNavigator from "../../components/navigator/appNavigator";

export default function mainLayout({ children }) {
  return (
    <>
      <AppNavigator />
      {children}
    </>
  );
}
