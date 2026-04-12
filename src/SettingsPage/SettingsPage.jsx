function SettingsPage() {
  function deleteAll() {
    if (
      confirm(
        "⚠️⚠️⚠️ ALLES wird gelöcht ⚠️⚠️⚠️ \nEine Wiederherstellung der Daten ist nicht möglich.",
      )
    ) {
      localStorage.clear();
      location.reload();
    }
  }
  return (
    <>
      <div className="buttonRow">
        <button className="buttonBad" onClick={() => deleteAll()}>
          Alle Daten Löschen!
        </button>
      </div>
    </>
  );
}

export default SettingsPage;
