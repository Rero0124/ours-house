'use client';
import Image from 'next/image'
import { FormEvent } from 'react';

interface loginForm extends HTMLFormControlsCollection  {
    id: HTMLInputElement;
    pw: HTMLInputElement;
}

export default function Section() {
    const userCheck = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const elements = e.currentTarget.elements as loginForm
        console.log(JSON.stringify({'id': elements.id.value, 'pw': elements.pw.value}))
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id': elements.id.value, 'pw': elements.pw.value}),
        }).then(res => res.json()).then(res => console.log(res))
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