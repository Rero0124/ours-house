import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #f0f0f0;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 172px;
`;

const UserInfo = styled.div`
    width: 100%;
`;
const FooterCome = styled.div`
    width: 100%;
`;

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Wrapper = styled.div`
    max-width: 1024px;
    display: flex;
    gap: 32px;
    margin: 0 auto;
    background-color: #f0f0f0;
    padding: 16px 0px;
    justify-content: space-between;
    height: 100%;
`;

const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: #dadada;
    flex-shrink: 0;
`;

const Flexbox = styled.div`
    display: flex;
    gap: 8px;
    height: 48px;
    align-items: center;
    padding: 10px 0px;
`;

const InfoText = styled.div`
    font-size: 12px;
    color: #505050;
`;

const ComeTextLabel = styled.p`
    color: #333;
    font-weight: bold;
    margin-bottom: 2px;
`;

const DivisionLabel = styled.h3`
    margin-bottom: 8px;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
                <UserInfo>
                    <DivisionLabel>고객센터</DivisionLabel>
                        <ListContainer>
                            <InfoText>
                                <ComeTextLabel>문의처</ComeTextLabel>
                                <p>Tel : 010-5483-0084</p>
                                <p>E-mail : rero0124@icloud.com</p>
                            </InfoText>
                            <InfoText>
                                <ComeTextLabel>운영시간</ComeTextLabel>{" "}
                                <p>평일 : 24시간 전체 문의 상담 가능</p>
                                <p>주말, 공휴일: 09:00 ~ 18:00</p>
                            </InfoText>
                        </ListContainer>
                    </UserInfo>
                    <Divider />
                <FooterCome>
                    <Link to="/contact">
                        <DivisionLabel>오시는 길</DivisionLabel>
                    </Link>
                    <InfoText>
                        <ComeTextLabel>주소</ComeTextLabel>서울시 금천구가산디지털 1로 168
                        B동 412호(가산동, 우림라이온스벨리)
                    </InfoText>
                    <Flexbox>
                        <InfoText>
                            <ComeTextLabel>TEL </ComeTextLabel> 02-861-0216
                        </InfoText>
                        <Divider />
                        <InfoText>
                            <ComeTextLabel>FAX</ComeTextLabel> 0504-844-0215
                        </InfoText>
                        <Divider />
                        <InfoText>
                            <ComeTextLabel>E-mail</ComeTextLabel> huen@huensystem.com
                        </InfoText>
                    </Flexbox>
                <InfoText>Copyrightⓒ huensystem Right Reserved.</InfoText>
                </FooterCome>
            </Wrapper>
        </FooterContainer>
    );
}
