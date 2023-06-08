export default function Header() {
	return (
        <div >
            <a href="/">
                <img src="/icon.png" alt="logo" width="100" height="100" />
                <p >우리의 집</p>
            </a>
            <div>
                <a href="/post">게시글</a>
                <a href="/question">질문글</a>
                <a href="/my">내정보</a>
            </div>
            <div>
                <input type="text"/>
                <img src="/search.png" alt="logo" width="100" height="100" />
            </div>
            <div >
                <a href="/login">로그인</a>
                <a href="/logout">로그아웃</a>
                <a href="/register">회원가입</a>
            </div>
        </div>
    )
}