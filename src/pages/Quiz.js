import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getAnswer, loadQuizFB } from "../redux/modules/quizReducer";
import ProgressBar from "../components/ProgressBar";
import Spinner from '../components/Spinner';

const Quiz = () => {
  let nav = useNavigate();
  let dispatch = useDispatch();
  const state = useSelector((state) => state.quiz.quiz_list);
  const loaded = useSelector((state) => state.quiz.is_loaded);
  const lang = useSelector((state) => state.quiz.language);

  useEffect(() => {
    dispatch(loadQuizFB(lang));
  }, []);

  //왜 굳이 꼭 id? 여야하는지???
  const { id } = useParams();
  const qnum = +id + 1;

  const nextQuiz = () => {
    if (qnum < state.length) {
      nav(`/quiz/${qnum}`);
    } else {
      nav(`/score`);
    }
  };

  const clickFalse = () => {
    dispatch(getAnswer({ userAnswer: false }));
    nextQuiz();
  };

  const clickTrue = () => {
    dispatch(getAnswer({ userAnswer: true }));
    nextQuiz();
  };
  return (
    <>
      <Wrapper>
        {loaded ? <>
          <ContentBox>
        <ProgressBar />
        <QuizContents>
          <div className="img">
            <img src={state[id].questionImg} alt="img" />
          </div>
          <Question>
            <p>
              Question.<span>{qnum}</span>
            </p>
            <p>
              <span>{state[id].questionShow}</span>
              {state[id].question}
            </p>
          </Question>
        </QuizContents>
        <AnswerBox>
          <ul>
            <li onClick={clickTrue}>⭕</li>
            <li onClick={clickFalse}>❌</li>
          </ul>
        </AnswerBox>
				</ContentBox>
        </> :
        <><Spinner /></>}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;

	@media ${({ theme }) => theme.device.mobile} {
    height: 100vh;
  }
`;

const ContentBox = styled.div`
  width: 90%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 10%);
  
	@media ${({ theme }) => theme.device.mobile} {
    top: 2%;
    left: 50%;
    transform: translate(-50%, 2%);
  }
`

const QuizContents = styled.div`
  height: 600px;
  background-color: #fff;
  padding: 20px 20px 60px 20px;
  border-radius: 10px;

  .img {
    height: 280px;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;

const Question = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  margin-top: 10px;

  p:nth-child(1) {
    padding: 8px 6px;
    border-radius: 10px;
    background-color: #222;
    color: #fff;
    font-size: 14px;
    margin-bottom: 40px;

    span {
      background-color: #222;
      padding: 0;
    }
  }

  p:nth-child(2) {
    line-height: 30px;

  span {
    display: block;
    background-color: #d81f26;
    border-radius: 10px;
    color: #fff;
    width: 50%;
    padding: 5px 8px;
    margin-right: 0px;
    margin: 10px auto;
  
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 0.9rem;

}
  }
  }
`;

const AnswerBox = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-top: 20px;

    li {
      height: 100px;
      list-style: none;
      padding: 30px 30px;
      border-radius: 20px;

      background-color: #fff;
      font-size: 30px;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
`;

export default Quiz;
