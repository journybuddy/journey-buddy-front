import * as S from './Layout.styles';
import {
	Link,
	Navigate,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Background from '../components/Background/Background';

export default function Layout() {
    return (
        <>
        <Background/>
        <S.LayoutWrap>
            <S.Header>
              <Navbar/>
            </S.Header>
            <S.InnerWrap>
            <S.Container>
            <Outlet />
			</S.Container>
            </S.InnerWrap>
        </S.LayoutWrap>
        </>
    );
}