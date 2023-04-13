import { ReactElement, ReactNode } from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
