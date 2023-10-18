import Link from "next/link";
import Avatar from "../Avatar";
import { cookies } from "next/dist/client/components/headers";
import Cookies from "js-cookie";
import { useRouter} from 'next/navigation';

export default function Header({ userName }: { userName: string }) {
  const router = useRouter();
  function showUserSettings() {
    console.log("heeeey");
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
        {userName && (
          <div className="bg-slate-800 text-sm p-3 absolute right-0 top-full rounded-md w-full">
            <nav>
              <ul>
                <Link href={'/dashboard/settings'}>settings</Link>
                <li onClick={() => logout()}>logout</li>
              </ul>
            </nav>
          </div>
        )}
      </Avatar>
    </header>
  );
}
