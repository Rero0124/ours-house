import Image from 'next/image'

export default function Header() {
	return (
        <div className="flex items-center">
            <a className="flex-6 flex flex-col" href="/">
                <Image src="/icon.png" alt="logo" className="" width={100} height={50} />
                <p className="">우리의 집</p>
            </a>
            <div className="flex-2 justify-between">
                <a className="flex-1" href="/post">게시글</a>
                <a className="flex-1" href="/question">질문글</a>
                <a className="flex-1" href="/my">내정보</a>
            </div>
            <div className="flex-4">
                <input type="text" className=""/>
                <Image src="/search.png" alt="logo" className="inline-block" width={100} height={50} />
            </div>
            <div className="flex-5">
                <a className="flex-1" href="/login">로그인</a>
                <a className="flex-1" href="/logout">로그아웃</a>
                <a className="flex-1" href="/register">회원가입</a>
            </div>
        </div>
    )
}