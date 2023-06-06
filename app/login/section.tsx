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
        const formData = new FormData();
        formData.append('id', elements.id.value);
        formData.append('pw', elements.pw.value);
        const data = fetch('/api/login', {
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
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