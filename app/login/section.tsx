'use client';
import Image from 'next/image'
import { FormEvent } from 'react';

interface loginForm extends HTMLFormControlsCollection  {
    id: HTMLInputElement;
    pw: HTMLInputElement;
}

export default function Section() {
    const userCheck = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const elements = e.currentTarget.elements as loginForm
        const data = await fetch('/api/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({id: elements.id.value, pw: elements.pw.value}),
        }).then(res => res.json()).catch(err => err.message);
        console.log(data)
    }

    return (
        <div className="">
            <form onSubmit={userCheck} className="" >
                <input name="id" className="" />
                <input name="pw" className="" />
                <input type="submit" className="" value="로그인"/>
            </form>
        </div>
    )
}