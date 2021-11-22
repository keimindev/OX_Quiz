import React from 'react';
import styled, {keyframes} from 'styled-components';

const Spinner = () => {
    return (
        <LOADING>
        <div className="loading-text">
            <span className="loading-text-words">L</span>
            <span className="loading-text-words">O</span>
            <span className="loading-text-words">A</span>
            <span className="loading-text-words">D</span>
            <span className="loading-text-words">I</span>
            <span className="loading-text-words">N</span>
            <span className="loading-text-words">G</span>         
        </div> 
        </LOADING>
    )
}

const blurtext = keyframes`
0% {
    filter: blur(0px);
  }
  100% {
    filter: blur(4px);
  }
` ;

const LOADING = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #eee;

.loading-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 250px;
  height: 250px;
  line-height: 100px;
  background-color: #d81f26;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  span {
  display: inline-block;
  margin: 0 10px;
  color: #fff;
  font-family: "Quattrocento Sans", sans-serif;
  } 

 span:nth-child(1) {
  filter: blur(0px);
  -webkit-animation: ${blurtext} 1.5s 0s infinite linear alternate;
          animation: ${blurtext} 1.5s 0s infinite linear alternate;
}

span:nth-child(2) {
  filter: blur(0px);
  -webkit-animation: ${blurtext} 1.5s 0.2s infinite linear alternate;
          animation: ${blurtext} 1.5s 0.2s infinite linear alternate;
}
span:nth-child(3) {
  filter: blur(0px);
  -webkit-animation: ${blurtext} 1.5s 0.4s infinite linear alternate;
          animation: ${blurtext} 1.5s 0.4s infinite linear alternate;
}

span:nth-child(4) {
  filter: blur(0px);
  -webkit-animation: ${blurtext} 1.5s 0.6s infinite linear alternate;
          animation: ${blurtext} 1.5s 0.6s infinite linear alternate;
}
span:nth-child(5) {
  filter: blur(0px);
  -webkit-animation: ${blurtext} 1.5s 0.8s infinite linear alternate;
          animation: ${blurtext} 1.5s 0.8s infinite linear alternate;
}
span:nth-child(6) {
  filter: blur(0px);
  -webkit-animation: ${blurtext} 1.5s 1s infinite linear alternate;
          animation: ${blurtext} 1.5s 1s infinite linear alternate;
}
span:nth-child(7) {
  filter: blur(0px);
  -webkit-animation: ${blurtext} 1.5s 1.2s infinite linear alternate;
          animation: ${blurtext} 1.5s 1.2s infinite linear alternate;
}
}`;


export default Spinner
