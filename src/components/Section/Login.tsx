import { FormEvent } from 'react';

interface loginForm extends HTMLFormControlsCollection  {
    id: HTMLInputElement;
    pw: HTMLInputElement;
}

export default function Login() {
    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const elements = e.currentTarget.elements as loginForm
        const id = elements.id.value;
        const pw = elements.pw.value;
        const data = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json', withCredentials: 'true'},
            body: JSON.stringify({id: id, pw: pw}),
        }).then(res => res.json()).catch(err => err.message);
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={login} >
                <input name="id" />
                <input name="pw" />
                <input type="submit" value="로그인"/>
            </form>
        </div>
    )
}