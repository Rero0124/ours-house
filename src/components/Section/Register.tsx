import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import styled from "styled-components";

interface RegisterForm extends HTMLFormElement {
    userId: HTMLInputElement;
    pw: HTMLInputElement;
}

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
`;

const RegisterInput = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
`;

const RegisterButton = styled.button`
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

const RegisterResult = styled.div`
    margin-top: 20px;
    font-size: 14px;
    color: #333;
`;

export default function Register() {
    const [registerResult, setRegisterResult] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const salt = await bcrypt.genSalt(10);
        const elements = e.target as RegisterForm;
        const id = elements.userId.value;
        const pw = await bcrypt.hash(elements.pw.value, salt);
        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: id, pw: pw, salt: salt }),
            });

            const data = await response.json();
            const message = data.message;
      
            console.log(message)

            if (message === "register success") {
                setRegisterResult("회원가입 성공");
                navigate("/");
            } else {
                setRegisterResult("회원가입 실패");
            }
        } catch (error) {
            console.log(error);
            setRegisterResult("회원가입 중 오류가 발생했습니다.");
        }
    };

    return (
        <RegisterContainer>
            <RegisterForm onSubmit={handleRegister}>
                <RegisterInput name="userId" placeholder="아이디" />
                <RegisterInput name="pw" placeholder="비밀번호" type="password" />
                <RegisterButton type="submit">회원가입</RegisterButton>
            </RegisterForm>
            {registerResult && <RegisterResult>{registerResult}</RegisterResult>}
        </RegisterContainer>
    );
}
