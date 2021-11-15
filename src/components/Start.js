import React from 'react'

const Start = ({contents, title}) => {
    return ( 
        <>
        <div className="wrapper">
          <div className = "imgBox">
              <img src="/assets/llogo.png" alt="logo" />
          </div> 
          <div className = "title">
            <p>나는 <span>{title}</span> 에 대해서 얼마나 알고 있을까?</p>
          </div> 
          <div className="contents">
              <ul>
                  {
                    contents.map((item, i) => {
                        return(
                        <li key={i}>{item}</li>
                        )
                    })
                  }
              </ul>
          </div>
          <div className = "nameBox" >
            <input type = "text" placeholder="이름을 입력해주세요"/>
            <button > Start </button> 
          </div> 
        </div>   
        </>
    )
}


export default Start