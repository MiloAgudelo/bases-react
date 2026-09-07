import type { User } from '../interfaces/reqres.interface';

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { avatar, first_name, last_name, email } = user;

  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
      <td className="p-3">
        <img
          src={avatar}
          alt={`${first_name} ${last_name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </td>
      <td className="p-3 font-medium text-slate-900">
        {first_name} {last_name}
      </td>
      <td className="p-3 text-slate-600">{email}</td>
    </tr>
  );
};
