import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className="weekly-best">
                <Link to="/weekly">
                    <p>
                        <img src="/best-room.png" alt="logo" className="inline-block" width="30" height="30" />
                        이번주 화제의 인테리어
                        <img src="/best-room.png" alt="logo" className="inline-block" width="30" height="30" />
                    </p>
                </Link>
            </div>
            <div className="new-room">
                <Link to="/post">
                    <p>
                        <img src="/new.png" alt="logo" className="inline-block" width="30" height="30" />
                        새로 올라온 인테리어
                        <img src="/new.png" alt="logo" className="inline-block" width="30" height="30" />
                    </p>
                </Link>
            </div>
		</div>
    )
}