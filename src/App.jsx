import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TasksPage from "./TasksPage/TasksPage.jsx";
import TimetablePage from "./TimetablePage/TimetablePage.jsx";
import SettingsPage from "./SettingsPage/SettingsPage.jsx";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
