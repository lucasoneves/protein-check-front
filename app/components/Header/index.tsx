import Avatar from "../Avatar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import UserOptions from "../UserOptions";
import UserOptionsNav from "../UserOptions/UserOptionsNav";
import { useAppDispatch } from "@/app/store/hooks";
import { EventHandler, ReactEventHandler, useState } from "react";
import { initialState, setUserInfo } from "@/app/store/userSlice";

export default function Header({ userName }: { userName: string }) {
  const [settings, setSettings] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  function showUserSettings() {
    setSettings(!settings);
  }
  function handleKeyboardSettings(e: React.KeyboardEvent) {
    if (Number(e.altKey) === 13) {
      showUserSettings()
      return false;
    }
  }
  function logout() {
    dispatch(setUserInfo({ ...initialState.userInfo }));
    Cookies.remove("authToken");
    router.push("/signin");
  }
  return (
    <header className="flex items-center gap-2 justify-between">
      <div className="logo">
        <h2 className="text-2xl sm:text-3xl">Protein check</h2>
      </div>
      <Avatar
        handleClick={showUserSettings}
        handlePress={handleKeyboardSettings}
        userName={userName}
      >
        {settings && (
          <UserOptions>
            <UserOptionsNav handleLogout={logout} />
          </UserOptions>
        )}
      </Avatar>
    </header>
  );
}
