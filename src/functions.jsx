export function newID() {
  if (localStorage.getItem("latestID") == null) {
    localStorage.setItem("latestID", 1);
  }

  const currentID = String(Number(localStorage.getItem("latestID")) + 1);

  localStorage.setItem("latestID", currentID);

  return currentID;
}
