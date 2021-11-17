import React from "react";
import { Route, Routes } from "react-router";
import Quiz from './components/Quiz';
import Start from './components/Start';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Start/>} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/score" element={<Score/>} />
      </Routes>
    </div>
  );
}

export default App;
