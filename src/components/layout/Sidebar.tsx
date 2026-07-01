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
    <aside className="w-64 bg-[#2B2B2B] border-r border-gray-300 flex flex-col shadow-lg">

      <div className="p-6 border-b border-gray-600">

        <h1 className="text-2xl font-extrabold text-red-600 tracking-wide">
          QC-AMÉRICAS
        </h1>

        <p className="text-sm text-gray-300 mt-1">
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
                `flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-red-700 text-white shadow-md"
                    : "text-gray-200 hover:bg-red-600 hover:text-white"
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.text}</span>
            </NavLink>
          ))}

        </div>

      </nav>

      <div className="border-t border-gray-600 p-4">

        <p className="text-xs text-gray-400">
          FONAFE • QC-AMÉRICAS v1.0
        </p>

      </div>

    </aside>
  );
}