import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Report = () => {
    return (
        <Main>
            <img src="/assets/logo.jpg" alt="logo"/>
            <p><span> Netflix</span> 에게 남기는 한마디</p>
            <input type="text" />
            <Link to="/rank">
            <Button>남기고 랭킹 보러가기</Button>
            </Link>
        </Main>
    )
}


const Main = styled.div`
    padding: 100px 80px;

        img{
            width: 150px;
            
        }

        p{
            font-size: 20px;
            margin: 30px 0;
        }


        input{
            display:block;
            width: 100%;
            height: 200px;
            margin: 30px auto;

            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: rgba(255,255,255, 0.6);
            outline: none;

            &:focus{
                background-color: rgba(255,255,255, 0.8);
            }
        }
`;

const Button = styled.button`
    padding: 15px 30px;
    background-color: #d81f26;
    font-family: 'GongGothicMedium';
    color:#fff;
    border-radius: 10px;
    outline: none;
    border: 0;
    
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
`;


export default Report
