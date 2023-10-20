import { MouseEventHandler } from "react";

export default function UserOptionsNav({handleLogout}: { handleLogout: MouseEventHandler}) {
  return (
    <nav>
      <ul>
        {/* <li>
                  settings
                </li> */}
        <li className="cursor-pointer" onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
}
