import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="O1">
            <div className="background01">
                <Link to="/login" style={{ textDecoration: 'none' }} className="login01">
                    <span className="loginwhite01">계정이 있어요!</span>
                    <span className="loginbrown101">로그인하고</span>
                    <span className="loginbrown201">시작하기</span>
                </Link>
                <Link to="/join" style={{ textDecoration: 'none' }} className="start01">
                    <span className="startwhite01">계정이 없어도 편지를 쓸 수 있어요!</span>
                    <span className="startbrown101">바로</span>
                    <span className="startbrown201">시작하기</span>
                </Link>
            </div>
        </div>
    );
}
export default Home;