import React, { useState, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

interface loginForm extends HTMLFormElement {
    userId: HTMLInputElement;
    pw: HTMLInputElement;
}

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
`;

const LoginInput = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
`;

const LoginButton = styled.button`
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: #ff5a5f;
    color: #fff;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #ff373d;
    }
`;

const LoginResult = styled.div`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
`;

export default function Login() {
    const [loginResult, setLoginResult] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as loginForm
        const id = form.userId.value;
        const pw = form.pw.value;
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    credentials: 'include'
                },
                body: JSON.stringify({ id, pw }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                if (data.message === 'login success') {
                    // 로그인 성공 후 필요한 동작 수행
                    navigate('/'); // 로그인 후 메인 페이지로 이동
                } else {
                    setLoginResult('로그인 실패');
                }
            } else {
                setLoginResult('로그인 실패');
            }
        } catch (error) {
            console.log('로그인 에러:', error);
            setLoginResult('로그인 실패');
        }
    }

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleLogin}>
                <LoginInput name="userId" placeholder="아이디" />
                <LoginInput name="pw" placeholder="비밀번호" type="password" />
                <LoginButton type="submit">회원가입</LoginButton>
            </LoginForm>
            {loginResult && <LoginResult>{loginResult}</LoginResult>}
        </LoginContainer>
    );
}