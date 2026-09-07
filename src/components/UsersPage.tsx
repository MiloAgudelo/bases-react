import { useUsers } from '../hooks/useUsers';
import { UserRow } from './UserRow';

export const UsersPage = () => {
  const { users, isLoading, currentPage, nextPage, prevPage } = useUsers();

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold">Usuarios (ReqRes)</h3>

      {isLoading ? (
        <p className="text-slate-500 py-6">Cargando usuarios...</p>
      ) : (
        <div className="w-full overflow-x-auto shadow-md rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-700 uppercase font-semibold">
              <tr>
                <th className="p-3">Avatar</th>
                <th className="p-3">Nombre</th>
                <th className="p-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage <= 1}
          className="bg-blue-500 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Anteriores
        </button>
        <span className="text-sm font-medium text-slate-600">Página {currentPage}</span>
        <button
          onClick={nextPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Siguientes
        </button>
      </div>
    </div>
  );
};
