import React, { useEffect } from 'react';
import { JourneyBuddyIcon } from '../../assets';
import * as S from './Navbar.styles';
import PersonIcon from '@mui/icons-material/Person';
import { clearStoredUser, getStoredUser } from '../../utils/userStorage'; 
import LoginForm from '../../domain/Auth/component/LoginForm';
import useModal from '../../hooks/useModal';
import { profileUrlState, showState } from '../../recoil/atoms/productState';
import { useRecoilState } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmModal from '../../components/Modal/ConfirmModal';

export default function Navbar() {
    const user = getStoredUser();
    const [profileUrl, setProfileUrl] = useRecoilState(profileUrlState); 
    const { authModelOpen, onAuthClose, infoModalOpen, isInfoOpen, onInfoClose } = useModal();
    const [, setShow] = useRecoilState(showState);
    const location = useLocation();
    const navigate = useNavigate(); 

    useEffect(() => {
        const storedProfileUrl = getStoredUser()?.profile_image;
        if (storedProfileUrl) {
          setProfileUrl(storedProfileUrl);
        }
      }, [setProfileUrl]);

    const handleProfileClick = () => {
        if (!user) {
            setShow(false)
            authModelOpen(); 
        } else {
            infoModalOpen()
        }
    };

    const onDeleteUser = () => {
        clearStoredUser()
        setProfileUrl(undefined)
        onInfoClose();
    }

    const handleAuthShow = () => {
        setShow(false)
        onAuthClose()
    }

    const isLocationRestricted = location.pathname === '/plan' || location.pathname === '/my-page';

    return (
        <>
        <S.NavbarWrap>
            <S.LogoWrap>
                <JourneyBuddyIcon onClick={() => {navigate('/journeybuddy/oauth');}}/>
            </S.LogoWrap>
            <S.NavItems>
                <S.NavItemWrap
                    to="/journeybuddy/oauth"
                    end
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                    onClick={handleAuthShow}
                >
                    Home
                </S.NavItemWrap>
                <S.NavItemWrap
                    to="/plan"
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                    Plan
                </S.NavItemWrap>
                <S.NavItemWrap
                    to="/community"
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                    onClick={handleAuthShow}
                >
                    Community
                </S.NavItemWrap>
                <S.NavItemWrap
                    to="/my-page"
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                    MyPage
                </S.NavItemWrap>
            </S.NavItems>
            <S.ProfilePicWrap 
                profileUrl={profileUrl}
                onClick={isLocationRestricted ? undefined : handleProfileClick} 
            >
                {!profileUrl && <S.StyledAvatar icon={<PersonIcon />} />}
            </S.ProfilePicWrap>
        </S.NavbarWrap>
        <LoginForm/>
        <ConfirmModal
				title="로그아웃 하시겠습니까?"
				okText="로그아웃"
				open={isInfoOpen}
				onClose={onInfoClose}
				onOk={onDeleteUser}
			/>
        </>
    );
}
