import React, { useState } from 'react';
import './Join.css';

function Join() {

    const id = useState("");
    const password = useState("");
    const nickname = useState("");

    

    return (
        <div className="Y22">
            <div className="background22">
                <div className="modal22">
                    <form>
                        <span className="pinkSpan22">계정 생성</span>
                        <p className="id22">아이디</p>
                        <input className="id221"></input>
                        <p className="pw22">비밀번호</p>
                        <input className="pw221"></input>
                        <p className="nick22">닉네임</p>
                        <input className="nick221"></input>
                        <button className="make22">생성</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Join;