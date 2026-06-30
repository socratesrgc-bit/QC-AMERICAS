interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-[420px] rounded-xl bg-slate-800 p-10 shadow-2xl">
        <h1 className="text-5xl font-bold text-white text-center">
          QC-AMÉRICAS
        </h1>

        <p className="text-slate-400 text-center mt-2 mb-8">
          Sistema de Gestión de Calidad
        </p>

        <label className="text-white">Usuario</label>

        <input
          className="w-full mt-2 mb-6 rounded-lg p-3 bg-slate-700 text-white"
          type="text"
        />

        <label className="text-white">Contraseña</label>

        <input
          className="w-full mt-2 mb-8 rounded-lg p-3 bg-slate-700 text-white"
          type="password"
        />

        <button
          onClick={onLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-3 font-bold"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}