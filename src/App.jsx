import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TasksPage from "./TasksPage/TasksPage.jsx";
import TimetablePage from "./TimetablePage/TimetablePage.jsx";
import SettingsPage from "./SettingsPage/SettingsPage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/timetable" element={<TimetablePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
