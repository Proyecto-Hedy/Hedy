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
    <div className="max-w-md w-full bg-white rounded-lg overflow-hidden mx-auto mt-20 relative z-10 shadow-md">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold text-center">Welcome back</h1>
        <p className="text-gray-600 text-center mb-6">Sign in to access an enhanced shopping experience.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign in</button>
        </form>
        <p className="text-center mt-4 text-gray-600">Not a member? <button onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)} className="underline">Join us</button></p>
      </div>
    </div>
  );
}

export default Login;
