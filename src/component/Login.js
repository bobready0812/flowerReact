import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="background21">
            <div className="modal21">
                <span className="pink">꽃병을 만들려면</span>
                <span className="pink2">로그인이 필요해요</span>
                <p className="id21">아이디</p>
                <input required className="id211"></input>
                <p className="pw21">비밀번호</p>
                <input className="pw211"></input>
                <Link to="/">
                <button className="login21">로그인</button>
                </Link>
                <Link to="/join">
                <button className="nonAcc">계정이 없다면?</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;