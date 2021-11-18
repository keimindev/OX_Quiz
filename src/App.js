import React from "react";
import { Route, Routes } from "react-router";
import Quiz from './components/Quiz';
import Start from './components/Start';
import Score from './components/Score';
import Error from "./components/Error";
import Report from "./components/Report";
import Rank from "./components/Rank";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Start/>} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/score" element={<Score/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/rank" element={<Rank/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
