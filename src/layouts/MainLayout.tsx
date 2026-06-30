import { ReactNode } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Contenido */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <Header />

        {/* Página */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>

      </div>

    </div>
  );
}