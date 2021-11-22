import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { addRankFB, getComment, updateRank } from '../redux/modules/userReducer'
import { db } from '../firebase';
import { collection, addDoc} from 'firebase/firestore'

const Report = () => {
    const user = useSelector(state => state.getUser)
    const dispatch = useDispatch()
    const text = useRef()
    const getUserComment = async () =>{
        dispatch(getComment(text.current.value))
        dispatch(addRankFB({
            userN : user.userName,
            score: user.userScore,
            comment: text.current.value
        }))
        // dispatch(updateRank(
        //     {userN : user.userName,
        //         score: user.userScore,
        //         comment: text.current.value}
        //     ))
    }

    return (
        <Main>
            <img src="/assets/logo.jpg" alt="logo"/>
            <p><span> Netflix</span> 에게 남기는 한마디</p>
            <input type="text" ref={text}/>
            <Link to="/rank">
            <Button onClick={getUserComment}>남기고 랭킹 보러가기</Button>
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
            padding: 10px 10px;

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
