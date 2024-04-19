import { useState } from "react";
import { LOGIN_VIEW } from "@/modules/account/login-template";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
}

const Login = ({ setCurrentView }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  implementar lógica para iniciar sesión
    try {
      // Lógica para iniciar sesión utilizando los valores de email y password
    } catch (error) {
      setErrorMessage("Error al iniciar sesión. Verifica tus credenciales e inténtalo de nuevo.");
    }
  };

  return (
    <div className="max-w-sm w-full flex flex-col items-center mt-20 relative z-10"> {/* Agregamos un margen superior de 20 unidades y z-index de 10 */}
      <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
        <div className="flex justify-center mt-6">
          <button type="submit" className="btn btn-primary w-full">Sign in</button>
        </div>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
          data-testid="register-button"
        >
          Join us
        </button>
        .
      </span>
    </div>
  );
}

export default Login;
