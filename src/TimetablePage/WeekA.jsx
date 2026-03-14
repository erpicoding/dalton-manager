import { produce } from "immer";

import DaltonStundenSelect from "./DaltonStundenSelect.jsx";

function WeekA({
  daltonStunden,
  selectedDaltonStunden,
  setSelectedDaltonStunden,
}) {
  return (
    <div className="week">
      <div className="day">
        <p className="dayLabel"></p>
        <p className="stundeLabel">2. Stunde</p>
        <p className="stundeLabel">4. Stunde</p>
        <p className="stundeLabel">7. Stunde</p>
      </div>
      <div className="day">
        <p className="dayLabel">Montag</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.mo2.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.mo2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.mo2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.mo4.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.mo4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.mo4 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.mo7.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.mo7}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.mo7 = newSelection;
              }),
            )
          }
        />
      </div>
      <div className="day">
        <p className="dayLabel">Dienstag</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.di2.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.di2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.di2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.di4.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.di4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.di4 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.di7.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.di7}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.di7 = newSelection;
              }),
            )
          }
        />
      </div>
      <div className="day">
        <p className="dayLabel">Mittwoch</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.mi2.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.mi2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.mi2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.mi4.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.mi4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.mi4 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.mi7.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.mi7}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.mi7 = newSelection;
              }),
            )
          }
        />
      </div>
      <div className="day">
        <p className="dayLabel">Donnerstag</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.do2.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.do2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.do2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.do4.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.do4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.do4 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.do7.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.do7}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.do7 = newSelection;
              }),
            )
          }
        />
      </div>
      <div className="day">
        <p className="dayLabel">Freitag</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.fr2.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.fr2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.fr2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.fr4.filter((e) => e.week.includes("a"))}
          selectedOption={selectedDaltonStunden.a.fr4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.a.fr4 = newSelection;
              }),
            )
          }
        />
        <p className="stundeLabel"></p>
      </div>
    </div>
  );
}

export default WeekA;
