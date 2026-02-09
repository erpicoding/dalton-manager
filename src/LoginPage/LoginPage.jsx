import { useState } from "react";

function LoginPage() {
  return (
    <div>
      <div className="warning">
        <p>
          Anmeldung noch nicht möglich.
          <br />
          Dieses Programm ist noch in der Entwicklungsphase.
        </p>
      </div>
      <input placeholder="Username" />
      <br />
      <input placeholder="Passwort" type="password" />
      <br />
      <button>Einloggen</button>
    </div>
  );
}

export default LoginPage;
