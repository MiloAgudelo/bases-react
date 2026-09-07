import { useForm } from 'react-hook-form';

interface FormInputs {
  email: string;
  password: string;
}

export const FormsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      email: 'susana@google.com',
      password: '',
    },
  });

  const onSubmit = (data: FormInputs) => {
    console.log('Formulario enviado:', data);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold">Formularios (React Hook Form)</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col gap-4"
      >
        <div className="flex flex-col text-left gap-1">
          <label className="text-sm font-semibold text-slate-700" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            {...register('email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Correo no válido',
              },
            })}
            className="p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col text-left gap-1">
          <label className="text-sm font-semibold text-slate-700" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="******"
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
            })}
            className="p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          {errors.password && (
            <span className="text-xs text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
