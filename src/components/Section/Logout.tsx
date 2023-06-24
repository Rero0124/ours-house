import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                await fetch('http://localhost:5000/api/logout', {
                    method: 'POST',
                    credentials: 'include'
                });

                // 세션 데이터를 지우거나 필요한 정리 작업을 수행합니다.

                navigate('/'); // 로그아웃 후 메인 페이지로 이동합니다.
            } catch (error) {
                console.log('로그아웃 에러:', error);
            }
        };

        logout();
    }, [navigate]);

    return (
        <div>
            <p>로그아웃 중...</p>
        </div>
    );
}