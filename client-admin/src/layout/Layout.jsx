import NavBar from "../components/NavBar";
import SideBar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet />
    </>
  );
}
