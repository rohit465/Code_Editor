import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none">Online Compiler</h2>
      </Link>
      <ul>
        <li>
          <Link to="/compiler">
            <Button variant={"secondary"}>Compiler</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
