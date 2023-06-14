import { FormEvent } from "react";
import bcrypt from 'bcryptjs';
import { styled } from "styled-components";

interface loginForm extends HTMLFormControlsCollection  {
    id: HTMLInputElement;
    pw: HTMLInputElement;
}

interface apiData {
    message: string;
}

const LoginContainer = styled.div`
    
`;

const LoginResult = styled.div`
    
`;

export default function Register() {
    const loginResult = document.getElementById('login-result');

    const register = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const salt = await bcrypt.genSalt(5); 
        const elements = e.currentTarget.elements as loginForm;
        const id = elements.id.value;
        const pw = await bcrypt.hash(elements.pw.value, salt);
        const data: apiData = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({id: id, pw: pw}),
        }).then(res => res.json()).catch(err => err.message);
        if(loginResult) {
            if(loginResult) {
                if(data.message === 'login fail') loginResult.innerText = '다시 로그인 해주세요';
                if(data.message === 'login success') window.location.replace('/home')
            }
        }
    }

    return (
        <LoginContainer id="loginContainer">
            <form onSubmit={register} >
                <input name="id" />
                <input name="pw" />
                <input type="submit" value="회원가입"/>
            </form>
            <LoginResult id="login-result"></LoginResult>
        </LoginContainer>
    )
}