import { FormEvent } from "react";
import bcrypt from 'bcrypt';

interface loginForm extends HTMLFormControlsCollection  {
    id: HTMLInputElement;
    pw: HTMLInputElement;
}

export default function Register() {
    const register = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const salt = await bcrypt.genSalt(5); 
        const elements = e.currentTarget.elements as loginForm;
        const id = elements.id.value;
        const pw = await bcrypt.hash(elements.pw.value, salt);
        const data = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({id: id, pw: pw}),
        }).then(res => res.json()).catch(err => err.message);
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={register} >
                <input name="id" />
                <input name="pw" />
                <input type="submit" value="회원가입"/>
            </form>
        </div>
    )
}