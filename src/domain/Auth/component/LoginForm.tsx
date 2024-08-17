import { useLocation } from "react-router-dom";
import { JourneyBuddyIcon } from "../../../assets";
import Button from "../../../components/Button";
import ModalLayout from "../../../components/Modal/ModalLayout";
import useModal from "../../../hooks/useModal";
import * as S from '../Auth.styles';

export default function LoginForm() {
    const { isAuthOpen } = useModal();
    const location = useLocation();

    const handleClick = () => {
        const REDIRECT_URI = 'http://localhost:3000/journeybuddy/oauth';
        const CLIENT_ID = "3ca10b8a1bcbd4d9809b2c1b8169aacf";
        const href = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        window.location.href = href; 
    };

    return (
        <ModalLayout show={true} open={isAuthOpen}>
            <S.LoginContainer>
                <S.LoginIcon>
                    <JourneyBuddyIcon />
                </S.LoginIcon>
                <S.LoginText>
                    친구와 함께하는 스마트한 여행,<br />
                    져니버디와 함께하세요!
                </S.LoginText>
                <Button btnType="primary" btnClass="btn_square" onClick={handleClick}>
                    카카오 간편 로그인 / 회원가입
                </Button>
            </S.LoginContainer>
        </ModalLayout>
    );
}
