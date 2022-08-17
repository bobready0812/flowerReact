import React, { useState } from 'react';
import './Join.css';
const axios = require('axios');

function Join() {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");


    const changeID = (e) => {
        setId(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const changeNickname = (e) => {
        setNickname(e.target.value);
    }
    
    const createID = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/join', {
            id,
            password,
            nickname,
        })
        .then((res) => console.log(res));

    }
    

    return (
        <div className="Y22">
            <div className="background22">
                <div className="modal22">
                    <form>
                        <span className="pinkSpan22">계정 생성</span>
                        <p className="id22">아이디</p>
                        <input onChange={changeID} value={id} className="id221"></input>
                        <p className="pw22">비밀번호</p>
                        <input onChange={changePassword} value={password} className="pw221"></input>
                        <p className="nick22">닉네임</p>
                        <input  onChange={changeNickname} value={nickname} className="nick221"></input>
                        <button onClick={createID} className="make22">생성</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Join;