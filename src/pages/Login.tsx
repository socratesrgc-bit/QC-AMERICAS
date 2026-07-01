interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-[460px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

        {/* Barra superior */}
        <div className="h-2 bg-red-700"></div>

        <div className="p-10">

          <h1 className="text-5xl font-extrabold text-center">

            <span className="text-gray-900">
              Q.C-
            </span>

            <span className="text-red-700">
              AMERICAS
            </span>

          </h1>

          <p className="text-center text-gray-500 mt-3 mb-10">
            Sistema de Gestión de Calidad · FONAFE
          </p>

          {/* Usuario */}

          <label className="block text-gray-700 font-semibold mb-2">
            Usuario
          </label>

          <input
            type="text"
            placeholder="Ingrese su usuario"
            className="w-full rounded-lg border border-gray-300 bg-white p-3 mb-6 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none transition"
          />

          {/* Contraseña */}

          <label className="block text-gray-700 font-semibold mb-2">
            Contraseña
          </label>

          <input
            type="password"
            placeholder="Ingrese su contraseña"
            className="w-full rounded-lg border border-gray-300 bg-white p-3 mb-8 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none transition"
          />

          <button
            onClick={onLogin}
            className="w-full bg-red-700 hover:bg-red-800 text-white rounded-lg py-3 font-bold text-lg transition"
          >
            Iniciar Sesión
          </button>

          <div className="mt-8 pt-6 border-t border-gray-200">

            <p className="text-center text-sm text-gray-500">
              Acceso exclusivo para personal autorizado
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}