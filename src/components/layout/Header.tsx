import { Bell, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-slate-800 border-b border-slate-700 px-8 flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          Sistema de Gestión de Calidad
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="text-slate-400 hover:text-white transition">
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-2">

          <UserCircle
            size={34}
            className="text-blue-400"
          />

          <div>

            <p className="font-semibold">
              Administrador
            </p>

            <p className="text-xs text-slate-400">
              Supervisor de Calidad
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}