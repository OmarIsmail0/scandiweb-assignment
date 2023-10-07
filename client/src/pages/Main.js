import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Main() {
  return (
    <div
      style={{
        width: "90vw",
        minHeight: "98vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
