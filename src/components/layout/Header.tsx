import { Bell, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 bg-white border-b border-gray-300 px-8 flex items-center justify-between shadow-sm">

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          QC-AMÉRICAS
        </h1>

        <p className="text-sm text-gray-500">
          Sistema de Gestión de Calidad • FONAFE
        </p>

      </div>

      <div className="flex items-center gap-6">

        <button className="text-red-700 hover:text-red-800 transition">

          <Bell size={22} />

        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            size={38}
            className="text-red-700"
          />

          <div>

            <p className="font-bold text-gray-800">
              Administrador
            </p>

            <p className="text-xs text-gray-500">
              Supervisor de Calidad
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}