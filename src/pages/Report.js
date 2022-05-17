import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  addRankFB,
  getComment,
} from "../redux/modules/userReducer";


const Report = () => {
  const user = useSelector((state) => state.getUser);
  const dispatch = useDispatch();
  const text = useRef();
  const { t } = useTranslation();
  const name = "Netflix"
  const getUserComment = async () => {
    dispatch(getComment(text.current.value));
    dispatch(
      addRankFB({
        userN: user.userName,
        score: user.userScore,
        comment: text.current.value,
      })
    );
  };

  return (
    <Main>
      <img src="/assets/logo.jpg" alt="logo" />
      <p>{t("leaveComment", {name})}</p>
      <textarea id="story" name="story"
          rows="6" cols="33" ref={text} maxLength="300"/>
      <Link to="/rank">
        <Button onClick={getUserComment}>{t("checkRank")}</Button>
      </Link>
    </Main>
  );
};

const Main = styled.div`
  padding: 100px 80px;

  img {
    width: 150px;
  }

  p {
    font-size: 20px;
    margin: 30px 0;
  }

  textarea{
    display: block;
    width: 100%;
    height: 150px;
    margin: 50px auto;
    padding: 10px 10px;

    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    outline: none;

    &:focus {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #d81f26;
  font-family: "GongGothicMedium";
  color: #fff;
  border-radius: 10px;
  outline: none;
  border: 0;

  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export default Report;
