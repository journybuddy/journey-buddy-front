import { useLocation } from "react-router-dom";
import { JourneyBuddyIcon } from "../../../assets";
import Button from "../../../components/Button";
import ModalLayout from "../../../components/Modal/ModalLayout";
import useModal from "../../../hooks/useModal";
import * as S from '../Auth.styles';
import { profileUrlState, showState } from "../../../recoil/atoms/productState";
import { useRecoilState } from "recoil";

export default function LoginForm() {
    const { isAuthOpen, onAuthClose } = useModal();
    const [show] = useRecoilState(showState);

    const handleClick = () => {
        const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
        const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
        const href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        window.location.href = href; 
    };

    const handleClose = () => {
        if (show === false) {
            onAuthClose();
        }
    };

    return (
        <ModalLayout show={show !== false ? show : false} open={isAuthOpen} onClose={handleClose}>
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
