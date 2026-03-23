import { useLayoutEffect, useRef } from "react";

function Footer() {
  const dialogInfoRef = useRef();

  const parameters = new URL(window.location.href).searchParams;
  const entries = new URLSearchParams(parameters).entries();
  const entriesArray = Array.from(entries);

  useLayoutEffect(() => {
    const dialog = dialogInfoRef.current;

    entriesArray.forEach((entry) => {
      let key = entry[0];
      let value = entry[1];

      if (key == "info") {
        if (dialog && !dialog.open) {
          dialog.showModal();
        }
      }
    });
  }, []);

  return (
    <>
      <footer>
        <p>
          &copy; <a href="https://erpicoding.de">Erpi Coding</a> - 2026
          {/* & (<a href="https://github.com/domi207">Domi207</a>) */}
        </p>
        <p>Version: Beta 0.8</p>
        <a href="/?info">Was sind Dalton-Aufgaben?</a>
      </footer>
      {/* Informations Modal */}
      <dialog className="info" ref={dialogInfoRef}>
        <h2>Was sind Dalton-Aufgaben?</h2>
        <p>
          Dalton-Aufgaben sind Teil des Dalton-Schulsystems. Sie werden immer
          für eine oder mehrere Wochen gestellt und können in den Dalton-Stunden
          in ausgewähten Dalton-Räumen erledigt werden.
          <br />
          <br />
          <b>
            Der Dalton-Manager hilft dabei, Aufgaben und Räume übersichtlich zu
            organisieren.
          </b>
        </p>
        <div className="buttonRow ButtonRowBorders">
          <b>
            <a
              className="blue"
              href="https://raabeschule.de/schulentwicklung/schulentwicklungsziel-daltonstunden/"
            >
              Mehr Infos
            </a>
          </b>
          <button
            className="buttonNormal"
            onClick={() => (window.location.href = "/")}
          >
            Schließen
          </button>
        </div>
      </dialog>
    </>
  );
}

export default Footer;
