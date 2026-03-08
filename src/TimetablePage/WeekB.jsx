import { produce } from "immer";

import DaltonStundenSelect from "./DaltonStundenSelect.jsx";

function WeekB({
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
          optionsList={daltonStunden.mo2.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.mo2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.mo2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.mo4.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.mo4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.mo4 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.mo7.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.mo7}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.mo7 = newSelection;
              }),
            )
          }
        />
      </div>
      <div className="day">
        <p className="dayLabel">Dienstag</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.di2.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.di2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.di2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.di4.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.di4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.di4 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.di7.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.di7}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.di7 = newSelection;
              }),
            )
          }
        />
      </div>
      <div className="day">
        <p className="dayLabel">Mittwoch</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.mi2.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.mi2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.mi2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.mi4.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.mi4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.mi4 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.mi7.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.mi7}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.mi7 = newSelection;
              }),
            )
          }
        />
      </div>
      <div className="day">
        <p className="dayLabel">Donnerstag</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.do2.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.do2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.do2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.do4.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.do4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.do4 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.do7.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.do7}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.do7 = newSelection;
              }),
            )
          }
        />
      </div>
      <div className="day">
        <p className="dayLabel">Freitag</p>
        <DaltonStundenSelect
          optionsList={daltonStunden.fr2.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.fr2}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.fr2 = newSelection;
              }),
            )
          }
        />
        <DaltonStundenSelect
          optionsList={daltonStunden.fr4.filter((e) => e.week.includes("b"))}
          selectedOption={selectedDaltonStunden.b.fr4}
          setSelectedOption={(newSelection) =>
            setSelectedDaltonStunden(
              produce((daltonStunde) => {
                daltonStunde.b.fr4 = newSelection;
              }),
            )
          }
        />
        <p className="stundeLabel">keine Stunde</p>
      </div>
    </div>
  );
}

export default WeekB;
