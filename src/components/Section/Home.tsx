import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const WeeklyBestLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    padding: 10px;
    background-color: #ff5a5f;
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        background-color: #ff373d;
    }
`;

const NewRoomLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    padding: 10px;
    background-color: #ff5a5f;
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        background-color: #ff373d;
    }
`;

export default function Home() {
    return (
        <HomeContainer>
            <WeeklyBestLink to="/weekly">
                <img src="/best-room.png"
                    alt="logo"
                    className="inline-block"
                    width="30"
                    height="30"
                />
                이번주 화제의 인테리어
                <img src="/best-room.png"
                    alt="logo"
                    className="inline-block"
                    width="30"
                    height="30"
                />
            </WeeklyBestLink>
            <NewRoomLink to="/post">
                <img src="/new.png"
                    alt="logo"
                    className="inline-block"
                    width="30"
                    height="30"
                />
                새로 올라온 인테리어
                <img src="/new.png"
                    alt="logo"
                    className="inline-block"
                    width="30"
                    height="30"
                />
            </NewRoomLink>
        </HomeContainer>
    );
}