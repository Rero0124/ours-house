import { FormEvent } from "react";
import bcrypt from 'bcryptjs';
import { styled } from "styled-components";

interface RegisterForm extends HTMLFormControlsCollection  {
    id: HTMLInputElement;
    pw: HTMLInputElement;
}

interface apiData {
    message: string;
}

export default function Register() {
    

    const register = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const salt = await bcrypt.genSalt(5); 
        const elements = e.currentTarget.elements as RegisterForm;
        const id = elements.id.value;
        const pw = await bcrypt.hash(elements.pw.value, salt);
        const data: apiData = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({id: id, pw: pw}),
        }).then(res => res.json()).catch(err => err.message);
        
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