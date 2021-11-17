import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const Error = () => {
    const nav = useNavigate();
    return (
        <>
        <ErrorPage>
            <p>404 Not Found!</p>
            <p>올바르지 않은 주소입니다</p>
            <button onClick={() => nav('/')}>Back to Main</button>
        </ErrorPage>
        </>
    )
}

const ErrorPage = styled.div`
padding: 280px 50px;

p{
    font-size: 30px;
    margin-top: 10px;
}


button{
  border:0;
  outline: 0;
  padding: 10px 20px;
  background-color: #d81f26;
  color: #fff;
  border-radius: 10px;
  margin-top: 30px;
  font-family: 'GongGothicMedium';
  cursor:pointer;
  transition: all 0.5s;

  &:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
`;

export default Error
