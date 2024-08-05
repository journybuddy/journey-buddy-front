import { JourneyBuddyIcon } from '../../assets';
import * as S from './Navbar.styles';
import PersonIcon from '@mui/icons-material/Person';

export default function Navbar() {
    return (
        <S.NavbarWrap>
            <S.LogoWrap>
                <JourneyBuddyIcon />
            </S.LogoWrap>
            <S.NavItems>
                <S.NavItemWrap
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? "active" : undefined)}
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
            <S.ProfilePicWrap>
                <S.StyledAvatar icon={<PersonIcon />} />
            </S.ProfilePicWrap>
        </S.NavbarWrap>
    );
}
