import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getUserScore } from "../redux/modules/userReducer";
import { scorelist, scorelistEng } from "../utils/util";
import styled from "styled-components";

const Score = () => {
  const userInfo = useSelector((state) => state.getUser);
  //사용 언어
  const userLan = useSelector((state) => state.quiz.language);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const name = userInfo.userName;

  //get Score
  const state = useSelector((state) => state.quiz.quiz_list);
  const userAState = useSelector((state) => state.quiz.userAnswer_list);
  let scoreArr = state.filter((a, i) => a.answer === userAState[i]);
  let scoreper = scoreArr.length * 5;


  //scorelist
  let scoreMention = "";
  if(userLan === "kr"){
      Object.keys(scorelist).map((c, idx) => {
        if (scoreper >= parseInt(c)) {
          return (scoreMention = scorelist[c]);
        }
      });
    }else{
      Object.keys(scorelistEng).map((c, idx) => {
        if (scoreper >= parseInt(c)) {
          return (scoreMention = scorelistEng[c]);
        }
      });
    };


  const getScore = () => {
    dispatch(getUserScore(scoreper));
  };

  return (
    <>
      <Contents>
        <Result>
          <p>{t("scoreTitle")}</p>
          <p>{t("score", {name})}</p>
          <p>{scoreper}</p>
        </Result>
        <Mention>{scoreMention}</Mention>
        <Link to="/report">
          <ReBtn onClick={getScore}>{t("comment")}</ReBtn>
        </Link>
      </Contents>
    </>
  );
};

const Contents = styled.div`
  padding: 100px 30px;
`;

const Result = styled.div`
  margin: 30px 0;

  p:nth-child(1) {
    padding: 10px 5px;
    border-radius: 15px;
    background-color: #d81f26;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  
  }

  p:nth-child(2) {
    margin-top: 50px;
    font-size: 24px;
    font-weight: 500;

  }

  p:nth-child(3) {
    height: 130px;
    width: 130px;
    line-height: 130px;
    margin: 40px auto;
    text-align: center;
    border-radius: 50%;
    background-color: #222;
    color: #fff;
    font-size: 40px;
    font-weight: 500;
  }
`;

const Mention = styled.div`
  padding: 0 80px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 20px;
  }
`;
const ReBtn = styled.button`
  width: 180px;
  padding: 10px 20px;
  margin: 100px auto;
  border-radius: 15px;
  border: 0;
  outline: 0;
  background-color: #d81f26;
  font-family: "GongGothicMedium";
  cursor: pointer;
  color: #fff;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export default Score;
