import NoListItems from "./NoListItems.jsx";
import { useState } from "react";

function TaskList() {
  const emptyobject = {
    description: "",
    fach: "Fach (LehrerKürzel)",
    weeks: [21],
    finished: false
  };

  const taskArray = [
    {
      description:
        " Bearbeitet diese Aufgabe nach der einführenden Unterrichtsstunde zu einer beliebigen Zeit in einem der Chemieräume,  dort findet ihr die notwendigen Modelle. Lasst in der Kontrollliste  abzeichnen, dass ihr die Modelle selbstständig gebaut habt (KEINE  Gruppenarbeit!). Die Aufgabe muss bis zum 13.02 erledigt sein. ",
      fach: "Chemie (Zi)",
      weeks: [21, 22],
      finished: false
    },
    {
      description:
        "Partnerarbeit: Führt das Wasserstrahlexperiment in Chemie 1 durch und lasst euch die Durchführung bestätigen. Die Erkenntnisse aus dem Versuch braucht ihr in der Lernwoche 24.",
      fach: "Chemie (Zi)",
      weeks: [23],
      finished: false
    },
    {
      description:
        "Einzelarbeit: In Chemie 1 und 2 findet ihr die Materialien für die Eigenschaften des Wassers. Führt die Versuche durch und lasst euch die Durchführung bestätigen. Ihr müsst verschiedene Münzen (mindesten 3) selbst mitbringen. Das vollständige Protokoll muss bis zum 27.02 um 14:00 Uhr im Aufgabenmodul abgegeben werden.",
      fach: "Chemie (Zi)",
      weeks: [24],
      finished: false
    },
    {
      description:
        "Examine Sara (A) and Julien (B). Write down at least one bullet point in each box on the worksheet and give page references. ",
      fach: "Englisch (Mn)",
      weeks: [21],
      finished: false
    },
    {
      description:
        "Write a characterisation of the character assigned to you (Sara or Julien).",
      fach: "Englisch (Mn)",
      weeks: [22],
      finished: false
    },
    {
      description:
        "Read the text assigned to you (The Church/ Schools/ The Maquis) and state how the church, the schools or the maquis resisted the Nazis. Take notes. \n Find passages in the novel that match your topic and explain their function. Give references. ",
      fach: "Englisch (Mn)",
      weeks: [23],
      finished: false
    },
    {
      description:
        "Textmaterial: Zur Geschichte des Wohnbaus (Michael Kant, Josef Walch. Grundkurs Kunst 3 Architektur, S. 58/59) \n \n Aufgabe: Herausarbeitung der Thesen des Autors zu den geschichtlichen Aspekten der Wohnungsbauentwicklung.",
      fach: "Kunst (Kg)",
      weeks: [21],
      finished: false
    },
    {
      description:
        "Schriftliche Recherche zum eigen Wohnen \n Leitfragen: \n 1.	Wohne ich in einem Eigenheim oder in einer Wohnung? \n 2.	Welche Räume sind in dem Eigenheim oder der Wohnung vorhanden? \n 3.	Entspricht das Wohnen meinen Bedürfnissen oder wünsche ich diese zu verbessern?",
      fach: "Kunst (Kg)",
      weeks: [22],
      finished: false
    },
    {
      description:
        "Trisomie 21 – eine Chromosomenfehlverteilung Einzelarbeit: Lies dazu im Buch S. 138/139 und bearbeite A1 schriftlich. Benenne dabei auch die jeweilige Phase der Meiose, bei der die Fehlverteilung stattfindet.",
      fach: "Bio (Km)",
      weeks: [21],
      finished: false
    },
    {
      description:
        "Partnerarbeit: s. Aufgabenmodul 1. Betrachtet die PPP_Genommutationen und lest euch zuallererst die Grundinformationen zu Genommutationen durch. Bearbeitet im Anschluss die enthaltene Aufgabe. Gebt euer erstelltes Textdokument im Aufgabenmodul ab (versehen mit euren beiden Namen; die Abgabe durch eine/n Schüler*in genügt). Einzelarbeit: 2. Bearbeite das AB Genwirkkette.",
      fach: "Bio (Km)",
      weeks: [22, 23],
      finished: false
    },
    {
      description:
        "1. Größen eines Zylinders berechnen, auch mit Einheitenumrechnungen - Lehrbuch, S. 85, A 1a,b,d (nur Oberflächen berechnen), A3 und A4 a,c (ausser Volumen) - Lehrbuch, S. 86, A12 (Würfel, Quader, Zylinder) 2. Experimentelle Herleitung der Volumenformel eines Zylinders: Plant und beschreibt ein Experiment, mit dessen Hilfe das Volumen eines Zylinders experimentell bestimmt werden kann.",
      fach: "Mathe (Ku)",
      weeks: [21, 22],
      finished: false
    },
    {
      description:
        "1.Aufgaben zum Zylindervolumen -Lehrbuch S.85, A4 (b) -Sachaufgaben: Lehrbuch S. 86, A. 10 -Rückwärtsaufgaben: Lehrbuch S. 85, A8 (a) 2. Zusatz (s. Übungsblatt ): • „Dosenopmierung“: Oberfläche minimieren • Vergleich zweier Zylinder mit gleichem Volumen",
      fach: "Mathe (Ku)",
      weeks: [23],
      finished: false
    },
    {
      description:
        "Energieformen & mechanische Energieübertragung 1. Zuordnung von Energieformen - Bearbeite das Arbeitsblatt zur Zuordnung der Energieformen (s. Übungsblatt ). 2. Energieübertragung beim Heben und Ziehen •Buch S. 48–49: - Mache dich mit den Informationen vertraut. - Fasse die wichtigsten Aussagen strukturiert und verständlich in eigenen Worten zusammen. •Buch S. 50: - Bearbeite Aufgabe 1 und 3 vollständig. - Schreibe deine Rechenwege übersichtlich und nachvollziehbar auf. Zusatz: 1. Energiegeschichte - Erstelle eine kurze Energiegeschichte als Comic oder Skizzenfolge, in der mehrere Energieformen und deren Umwandlung vorkommen. 2. Energiegewinnung durch Windenergieanlagen - Beschreibe den Energieumwandlungs-prozess von der Bewegungsenergie des Windes bis zur elektrischen Energie.",
      fach: "Physik (Ku)",
      weeks: [21, 22],
      finished: false
    },
    {
      description:
        "Kraft und Energie •Buch S. 53: - Bearbeite Aufgabe 1 und 2 vollständig. - Schreibe deine Rechenwege/Begründungen übersichtlich und nachvollziehbar auf. Zusatz: 1. Energieerhaltung - Bearbeite das Arbeitsbla zur Energieerhaltung beim Pendel oder Fallkörper. - Schätze Reibungsverluste ab und erkläre, wohin die „verlorene“ Energie geht",
      fach: "Physik (Ku)",
      weeks: [23],
      finished: false
    },
    {
      description:
        "Bearbeite das Arbeitsblatt „AB_Globalisierung der Esskultur“.",
      fach: "Erdkunde (Do)",
      weeks: [21],
      finished: false
    },
    {
      description:
        "Erörtere Chancen und Risiken des globalen Handels (S. 128 / 4)",
      fach: "Erdkunde (Do)",
      weeks: [22],
      finished: false
    },
    {
      description:
        "Erläutere die Verantwortung von weltweit großen Unternehmen im Zusammenhang mit Marktmacht (S.134 / M6, M9).",
      fach: "Erdkunde (Do)",
      weeks: [23],
      finished: false
    },
    {
      description:
        "Erörtere Vor- und Nachteile der globalisierten Smartphoneproduktion (S. 138 / 5). ",
      fach: "Erdkunde (Do)",
      weeks: [24],
      finished: false
    },
    {
      description:
        "Anschreiben und „Dritte Seite“ erstellen (Vorlagen im Gruppenordner nutzen). Bis zum 13.02.: Abgabe der Bewerbung (Aufgabenmodul)!",
      fach: "Deutsch (Dk)",
      weeks: [21, 22],
      finished: false
    },
    {
      description:
        "Wiederholung Argumenttypen (S. 64) und Zuordnung in der Tabelle aus dem Fachunterricht (Thema E-Scooter-Verbot); erst nach dem Fachunterricht möglich! Scheinargumente erkennen und entkräften Testet euch (Buch, S. 73 Aufgabe 1 bearbeiten). Argumente (Thema: Veggie-Days) gewichten und Erörterung schreiben (in Einzelarbeit; mit Textbezügen) Nicht vor dem Fachunterricht in Woche 24 (Methode Ping-Pong) anfangen!",
      fach: "Deutsch (Dk)",
      weeks: [23, 24],
      finished: false
    },
    {
      description:
        "Recherchiere im Internet die Fabeln des Phaedrus auf Deutsch. Suche eine aus, die dir gefällt. Lerne sie so „auswendig“, dass du sie im Kurs im Fachunterricht erzählen kannst (nicht wörtlich, aber in der richtigen Reihenfolge und sicher). ",
      fach: "Latein (Ah)",
      weeks: [21],
      finished: false
    },
    {
      description: "Übung nd-Formen: Buch S. 81 Nr. 3 (1,2,3)",
      fach: "Latein (Ah)",
      weeks: [22],
      finished: false
    },
    {
      description:
        "Übung zu nolle: Buch S. 81, Nr. 5. Verfasse eine kurze Interpretation zu vulpes et corbus!",
      fach: "Latein (Ah)",
      weeks: [23],
      finished: false
    },
    {
      description:
        " Bereite eine Präsentation einer Fabel für den Fachunterricht vor. Arbeitsschritte: Analysiere in Partnerarbeit eine Fabel des Phaedrus auf Deutsch. Bilde die gelernten Gliederungsabschnitte bei Fabeln. Bereite eine Interpretation von der Fabel vor! Erstelle eine PPP. ",
      fach: "Latein (Ah)",
      weeks: [24],
      finished: false
    },
    {
      description:
        "Entwickelt ein Lernvideo zu einer europäischen Institution. Rat der Europäischen Union / Ministerrat -->	Giulian, Anna, Aly, Erik",
      fach: "Politik und Wirtschaft (Ws)",
      weeks: [21, 22, 23, 24],
      finished: false
    },
    {
      description:
        "1. Stelle das Verhältnis von Kirche und Staat im Laufe der Zeit grafisch dar. − Römisches Reich unter Konstantin − Anglikanische Kirche im 16. Jahrhundert − NS-Zeit 2. Stelle die vier Stufen des Widerstands in eigenen Worten dar. Notiere Stichpunkte. (01D_Widerstand)  3. Eure Schule plant eine Ausstellung zum Thema „Widerstand im Nationalsozialismus“. Gestalte(t) alleine oder zu zweit ein Poster zum Gedenken an einen Widerstandskämpfer / eine Widerstandskämpferin / eine Widerstandsgruppe eurer Wahl. Beachte die angebenden Fragestellungen und Kriterien. Das Poster soll folgende Fragen aufgreifen: Wer war die Person bzw. Gruppierung? Was war ihre / seine Rolle in der NS-Zeit? Inwiefern wurde Widerstand gegen das Regime geleistet? In welche Stufe lässt sich das Handeln in die Stufen des Widerstands einordnen? Inwiefern betrifft mich das Handeln dieser Person bzw. Gruppierung noch heute? (02D_Widerstand Poster)",
      fach: "Religion (Hn)",
      weeks: [21, 22, 23, 24, 25, 26, 27],
      finished: false
    }
  ];

  let finishedFilterType = false;

  const [searchTerm, setSearchTerm] = useState("");

  //text Unterstreichen beim Suchen
  function highlightText(text, searchTerm) {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span className="searchHighlight" key={index}>
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  let TasksMapped = [...taskArray]
    .filter((task) => task.finished == finishedFilterType)
    .filter(
      (task) =>
        searchTerm === "" ||
        [task.fach, task.description]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.weeks[0] - b.weeks[0])
    .map((task) => (
      <div className="task" key={highlightText(task.description, searchTerm)}>
        <h3>
          <span className="fachTitel">
            {highlightText(task.fach, searchTerm)}
          </span>
          <span className="lernwochenTitel">
            {task.weeks.length == 1 ? "Lernwoche:  " : "Lernwochen: "}
            {task.weeks.map((value, index, array) => {
              // bei mehreren wochen 1-4 anzeigen
              if (array.length >= 2) {
                if (index === 0) return `${value} - `;
                if (index === array.length - 1) return value;
                return null;
              }
              // bei nur einem el nur das el anzeigen
              return value;
            })}
          </span>
        </h3>
        <p>{highlightText(task.description, searchTerm)}</p>
      </div>
    ));

  return (
    <div className="taskList">
      <input
        className="searchTasks"
        type="text"
        placeholder="Dalton-Aufgaben suchen…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h2>Nächste Dalton-Aufgaben: </h2>
      {TasksMapped.length == 0 ? <NoListItems /> : TasksMapped}
    </div>
  );
}

export default TaskList;
