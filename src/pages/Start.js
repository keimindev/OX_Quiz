import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getName, loadRankFB } from "../redux/modules/userReducer";
import {  changeLang } from "../redux/modules/quizReducer";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { contents } from "../utils/util";
import styled from "styled-components";


const Start = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userInfo = useSelector((state) => state.getUser.usersRank);
  const people = userInfo.length;
  const lang =useSelector((state) => state.quiz.language);

  const [name, setName] = useState('')
  const [err, setErr] = useState(false);

  const getUserName = () => {
    if(name !== ''){
      dispatch(getName(name));
      setErr(false)
    }else{
      setErr(true)
    }
  };

  const handleErrorMessage = () =>{
      return (
        <Err>Please Enter Your Name!</Err>
      )
    
  }

  useEffect(() => {
    if(name == ''){
      setErr(true)
    }else{
      setErr(false)
    }
  },[name])

  const handleOnChangeName = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    dispatch(loadRankFB())
}, [])

  return (
    <Wrapper>
      <Lng>
        <button data-testid="engbtn" onClick={() => {
          i18n.changeLanguage("en")
          dispatch(changeLang("en"))
          }} style={{ color: lang === "en" ? "#d81f26" : "#222"}}>ENG</button>
        <button onClick={() => {
          i18n.changeLanguage("kr")
          dispatch(changeLang("kr"))
          }} style={{ color: lang === "kr" ? "#d81f26" : "#222"}}>KOR</button>
      </Lng>
      <ImgBox>
        <img src="/assets/llogo.png" alt="logo" />
      </ImgBox>
      <Title>
        <p>{t("title1")}</p>
        <p>{t("title2")}</p>
        <p>{t("title3", { people })}</p>
      </Title>
      <Contents>
        <ul>
          {contents.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </Contents>
      <InputBox>
      {err && handleErrorMessage()}
        <input type="text" placeholder="please your name" onChange={ (e) => {handleOnChangeName(e)}}/>
        <Link to="/quiz/0">
          <Button disabled={name != "" ? false: true} onClick={getUserName}>Start</Button>
        </Link>
      
      </InputBox>
    
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 20px;

  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 40px;
  }

  
`;

const Lng = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 50px;
  margin: 30px 0 70px 0;

  button {
    font-size: 18px;
    margin: 5px 8px;
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: #d81f26;
    }

    
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;  
  }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding-right: 40px;
    margin: 15px 0 30px 0;
  
  }
`;
const ImgBox = styled.div`
  img {
    width: 70%;
  }

`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
  padding: 0 80px;
  line-height: 45px;
  margin-top: 80px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 40px;
    font-size: 18px;
    line-height: 25px;
  }

  p:nth-child(3) {
    padding: 5px 15px;
    color: #d81f26;
    font-weight: 500;
    font-size: 16px;

    @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
  }

`;

const Contents = styled.div`
  color: #fff;
  list-style: none;
  text-align: center;
  margin-bottom: 40px;

  ul {
    overflow: hidden;
    list-style: none;
    text-align: center;
    padding: 0 90px;

    @media ${({ theme }) => theme.device.mobile} {
      padding: 0px 30px;
  }

    li {
      float: left;
      background-color: #222;
      padding: 5px 10px;
      border-radius: 5px;
      margin: 5px 5px;

      @media ${({ theme }) => theme.device.mobile} {
        font-size: 13px;
        padding: 5px 8px;
        margin: 3px 5px;
  }
    }
  }
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #d81f26;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  font-family: "GongGothicMedium";
  transition: all 0.5s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const InputBox = styled.div`
  input {
    width: 300px;
    display: block;
    padding: 16px 10px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    margin: 10px auto;
    background-color: rgb(255, 255, 255, 0.9);
  }
`;

const Err = styled.p`
  color:  #d81f26;
  font-size: 12px;
  `

export default Start;
