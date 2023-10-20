import Avatar from "../Avatar";
import Cookies from "js-cookie";
import { useRouter} from 'next/navigation';
import UserOptions from "../UserOptions";
import UserOptionsNav from "../UserOptions/UserOptionsNav";
import { useState } from "react";

export default function Header({ userName }: { userName: string }) {
  const [settings, setSettings] = useState(false);
  const router = useRouter();
  function showUserSettings() {
    setSettings(!settings);
  }
  function logout() {
    Cookies.remove('authToken');
    router.push('/signin');
  }
  return (
    <header className="flex items-center gap-2 justify-between">
      <div className="logo">
        <h2 className="text-2xl sm:text-3xl">Protein check</h2>
      </div>
      <Avatar handleClick={showUserSettings} userName={userName}>
        {settings && (
          <UserOptions>
            <UserOptionsNav handleLogout={logout} />
          </UserOptions>
        )}
      </Avatar>
    </header>
  );
}
