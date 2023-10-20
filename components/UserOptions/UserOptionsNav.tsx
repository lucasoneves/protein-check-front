import { MouseEventHandler } from "react";

export default function UserOptionsNav({handleLogout}: { handleLogout: MouseEventHandler}) {
  return (
    <nav>
      <ul>
        {/* <li>
                  settings
                </li> */}
        <li className="cursor-pointer hover:opacity-80" onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
}
