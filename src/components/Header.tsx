import styled from "styled-components";
import { Link } from "react-router-dom";

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
	return (
        
        <Wrapper >
            <Logo to="/">
                <img src="/icon.png" alt="logo" height="48" />
                <p >우리의 집</p>
            </Logo>
            <Navigation>
                <a href="/post">게시글</a>
                <a href="/question">질문글</a>
                <a href="/my">내정보</a>
            </Navigation>
            <SearchBox>
                <SearchInput type="text"/>
                <img src="/search.svg" alt="logo" height="24" placeholder="검색"/>
            </SearchBox>
            <Navigation >
                <a href="/login">로그인</a>
                <a href="/logout">로그아웃</a>
                <a href="/register">회원가입</a>
            </Navigation>
        </Wrapper>

    )
}