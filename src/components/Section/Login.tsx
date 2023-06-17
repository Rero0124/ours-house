import { FormEvent } from 'react';
import { styled } from "styled-components";

interface loginForm extends HTMLFormControlsCollection  {
    id: HTMLInputElement;
    pw: HTMLInputElement;
}

const LoginContainer = styled.div`
    
`;

const LoginResult = styled.div`
    
`;

export default function Login() {
    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const elements = e.currentTarget.elements as loginForm
        const id = elements.id.value;
        const pw = elements.pw.value;
        await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json', withCredentials: 'true'},
            body: JSON.stringify({id: id, pw: pw}),
        }).then(res => res.json()).catch(err => err.message).then(data => {
            const loginResult = document.getElementById('login-result');
            const message = data.message;
            if(message === 'login success') {
                if(loginResult) {
                    loginResult.innerText = 'message';
                }
            }
            if(message === 'login fail') {
                if(loginResult) {
                    loginResult.innerText = 'message';
                }
            }
            
        });
    }

    return (
        <LoginContainer id="loginContainer">
            <form onSubmit={login} >
                <input name="id" />
                <input name="pw" />
                <input type="submit" value="로그인"/>
            </form>
            <LoginResult id="login-result"></LoginResult>
        </LoginContainer>
    )
}