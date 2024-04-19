"use client";
import { useFormState } from "react-dom";
import { LOGIN_VIEW } from "@/modules/account/login-template";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Register = ({ setCurrentView }: Props) => {
  const handleRegister = () => {
    // Aquí puedes implementar la lógica para el registro del usuario
    console.log("Registrando usuario...");
  };

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="register-page">
      <h1 className="text-large-semi uppercase mb-6">
        Become a Medusa Store Member
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Create your Medusa Store Member profile, and get access to an enhanced
        shopping experience.
      </p>
      <form className="w-full flex flex-col" onSubmit={handleRegister}>
        <div className="flex flex-col w-full gap-y-2">
          <label>
            First name:
            <input
              type="text"
              name="first_name"
              required
              autoComplete="given-name"
              data-testid="first-name-input"
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name="last_name"
              required
              autoComplete="family-name"
              data-testid="last-name-input"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              data-testid="email-input"
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              data-testid="phone-input"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              required
              autoComplete="new-password"
              data-testid="password-input"
            />
          </label>
        </div>
        <button type="submit" className="w-full mt-6" data-testid="register-button">
          Join
        </button>
      </form>
    <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Already a member?{" "}
        <button
            onClick={() => setCurrentView("sign-in" as LOGIN_VIEW)}
            className="underline"
        >
            Sign in
        </button>
        .
    </span>
    </div>
  );
};

export default Register;
