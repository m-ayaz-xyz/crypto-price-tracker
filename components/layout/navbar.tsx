import Refresh from "./refresh";
import { FaBitcoin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <div className="h-16 bg-blue-400 flex flex-row justify-between items-center p-3">
        <div className="logo flex flex-row items-center gap-2 pl-5"><FaBitcoin className="h-8 w-8" /> <p className="text-3xl font-medium">Crypto Price Tracker</p></div>
        <div className="flex font-medium flex-row justify-between gap-4 pr-5">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <Refresh/>
        </div>
      </div>
    </>
  );
};
