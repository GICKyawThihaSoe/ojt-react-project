import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Question from "./components/Question";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
