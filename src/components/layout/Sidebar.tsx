import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    icon: LayoutDashboard,
    text: "Panel",
    path: "/dashboard",
  },
  {
    icon: ClipboardList,
    text: "Evaluaciones",
    path: "/evaluaciones",
  },
  {
    icon: BarChart3,
    text: "Informes",
    path: "#",
  },
  {
    icon: Users,
    text: "Usuarios",
    path: "#",
  },
  {
    icon: Settings,
    text: "Configuración",
    path: "#",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold text-blue-400">
          QC-AMÉRICAS
        </h1>

        <p className="text-sm text-slate-400">
          Gestión de Calidad
        </p>

      </div>

      <nav className="flex-1 p-4">

        <div className="space-y-2">

          {menu.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.text}</span>
            </NavLink>
          ))}

        </div>

      </nav>

      <div className="border-t border-slate-700 p-4">

        <p className="text-xs text-slate-500">
          QC-AMÉRICAS v1.0
        </p>

      </div>

    </aside>
  );
}