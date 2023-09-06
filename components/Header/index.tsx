import Image from "next/image";

export default function Header({userName}: { userName: string}) {
  return (
    <header className="flex items-center gap-2 justify-between">
      <div className="logo"><h2 className="text-2xl sm:text-3xl">Protein check</h2></div>
      <div className="avatar flex items-center gap-4">
        <h2 className="text-xs sm:text-sm">Olá, {userName}</h2>
        <Image src="https://i.pravatar.cc/32" className="rounded-full" width="32" height="32" alt="Avatar" />
      </div>
    </header>
  );
}
