import { JourneyBuddyIcon } from '../../assets';
import * as S from './Navbar.styles';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Tooltip } from 'antd';

export default function Navbar() {
    return (
        <S.NavbarWrap>
            <S.LogoWrap>
                <JourneyBuddyIcon />
            </S.LogoWrap>
            <S.NavItems>
                <S.NavItemWrap className="active">
                    Home
                </S.NavItemWrap>
                <S.NavItemWrap>
                    Plan
                </S.NavItemWrap>
                <S.NavItemWrap>
                    Community
                </S.NavItemWrap>
                <S.NavItemWrap>
                    MyPage
                </S.NavItemWrap>
            </S.NavItems>
            <S.ProfilePicWrap>
            <S.StyledAvatar icon={<PersonIcon/>}/>
            </S.ProfilePicWrap>
        </S.NavbarWrap>
    );
}