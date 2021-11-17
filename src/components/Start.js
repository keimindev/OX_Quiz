import React, {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { getName } from '../redux/modules/userReducer';
import styled from 'styled-components'
import {Link} from "react-router-dom";


const Start = () => {
  const text = useRef(null);
  const dispatch = useDispatch();

  const getUserName = () =>{
    dispatch(getName(text.current.value))
  }


  const title = "Netflix Original Series"
  const contents = ["Stranger Things","My Name", "Squid Game", "House Of Cards", "You", "Sex Education","D.P."]
    return ( 
        <Wrapper>
          <ImgBox>
              <img src="/assets/llogo.png" alt="logo" />
          </ImgBox> 
          <Title>
            <p>나는 <span>{title}</span> 에 대해서 얼마나 알고 있을까?</p>
            <p>나의 덕력은?!</p>
          </Title> 
          <Contents>
              <ul>
                  {
                    contents.map((item, i) => {
                        return(
                        <li key={i}>{item}</li>
                        )
                    })
                  }
              </ul>
          </Contents>
          <InputBox>
            <input type="text" placeholder="이름을 입력해주세요" ref={text}/>
            <Link to="/quiz/0">
            <Button onClick={getUserName}>Start</Button>
            </Link>
          </InputBox> 
        </Wrapper>  
    )
}

const Wrapper = styled.div`
padding-top: 50px;
`;

const ImgBox = styled.div`
 img{
  width: 70%;
 }
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
  padding: 0 80px;
  line-height: 45px;
  margin-top: 80px;

  span{
    padding: 5px 15px;
    border-radius: 10px;
    background-color: #d81f26;
    color: #fff;
    font-weight: 500;
    font-size: 22px;
  }
  `;

const Contents=styled.div`
  color: #fff;
  list-style: none;
  text-align: center;
  margin-bottom: 40px;

  ul{
    overflow: hidden;
    list-style: none;
    text-align: center;
    padding: 0 90px;

    li{
      float: left;
      background-color: #222;
      padding: 5px 10px;
      border-radius: 5px;
      margin: 5px 5px;
    }
  }
`;

const Button = styled.button`
border: 0;
outline: 0;
padding: 10px 20px;
border-radius: 10px;
background-color:#d81f26;
color: #fff;
font-size: 18px;
cursor: pointer;
`;

const InputBox = styled.div`
input{
  width: 250px;
  display: block;
  padding: 16px 10px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  margin: 30px auto;
  background-color: rgb(255, 255, 255, 0.9);
}
`;

export default Start