
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Card from "./components/card/Index";

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet/>
      <Card/>
    </div>
  );
}