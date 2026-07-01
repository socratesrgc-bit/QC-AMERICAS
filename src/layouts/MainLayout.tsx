import type { ReactNode } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Contenido */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <Header />

        {/* Página */}
        <main className="flex-1 p-8 bg-gray-100">

          <div className="max-w-7xl mx-auto">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}