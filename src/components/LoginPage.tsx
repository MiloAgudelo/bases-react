import { useAuthContext } from '../context/useAuthContext';

export const LoginPage = () => {
  const { isChecking, isAuthenticated, user, loginWithEmailPassword, logout } = useAuthContext();

  if (isChecking) {
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-medium text-amber-600">Validando sesión...</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className="text-2xl font-bold">
        {isAuthenticated ? 'Autenticado' : 'No autenticado'}
      </h3>

      {isAuthenticated ? (
        <div className="flex flex-col items-center gap-2">
          <div className="bg-slate-100 p-3 rounded-lg text-sm text-slate-800">
            <p><strong>Nombre:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Salir
          </button>
        </div>
      ) : (
        <button
          onClick={() => loginWithEmailPassword('fernando@google.com')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Ingresar
        </button>
      )}
    </div>
  );
};
