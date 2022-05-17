import React from "react";
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import Quiz from "./pages/Quiz";
import Start from "./pages/Start";
import Score from "./pages/Score";
import Report from "./pages/Report";
import Rank from "./pages/Rank";
import Error from "./pages/Error";
import Spinner from "./components/Spinner";
import theme from "./utils/theme";

function App() {
  const isLoaded = useSelector((state) => state.getUser.is_loaded);

  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
          <Route path="/report" element={<Report />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {!isLoaded && <Spinner />}
      </Wrap>
    </ThemeProvider>
  );
}

export default App;

const Wrap = styled.div`
  width: 500px;
  height: 880px;
  margin: 0 auto;
  background-color: #eee;
  text-align: center;
  border-radius: 10px;
  font-family: "GongGothicMedium";

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 920px;
    border-radius: 0px;
    padding-top: 0px;
    padding-bottom: 60px;

    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%)
  }
`;
