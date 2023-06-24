import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from '../types';

const Wrapper = styled.div`
    max-width: 1024px;
    display: flex;
    gap: 32px;
    margin: 0 auto;
    padding: 16px 0px;
    justify-content: space-between;
    height:  80px;
    align-items: center;

`;
const Logo = styled(Link)`
    display: flex;
    align-items:center;
    gap:8px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    flex-shrink: 0;
`;
const Navigation = styled.nav`
    display:flex;
    align-items:center;
    gap:16px;
    font-size: 0.9rem;
    font-weight:bold;
    width: 100%;
`
const SearchBox =styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px;
    border: 1px solid #AAA;
    flex-shrink: 0;
    width: 300px;
    height: 40px;
    border-radius: 4px;
    &:focus-within{
        border-color: #23d3ff
    }
`
const SearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    
`
export default function Header() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchUserData();
    });

    const fetchUserData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user", {
                method: "GET",
                credentials: "include",
            });
            console.log(await response.json())
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.log("세션 정보를 가져오는 중 에러:", error);
            setUser(null);
        }
  };

	return (
        <Wrapper >
            <Logo to="/">
                <img src="/icon.png" alt="logo" height="48" />
                <p >우리의 집</p>
            </Logo>
            <Navigation>
                <Link to="/post">게시글</Link>
                <Link to="/question">질문글</Link>
                <Link to="/my">내정보</Link>
            </Navigation>
            <SearchBox>
                <SearchInput type="text"/>
                <img src="/search.svg" alt="logo" height="24" placeholder="검색"/>
            </SearchBox>
            <Navigation >
                {user ? (
                    <>
                        <span>{user.id}</span>
                        <Link to="/logout">로그아웃</Link>
                    </>
                    ) : (
                    <>
                        <Link to="/login">로그인</Link>
                        <Link to="/register">회원가입</Link>
                    </>
                )}
            </Navigation>
        </Wrapper>

    )
}