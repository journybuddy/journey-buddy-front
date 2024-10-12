import * as S from './MainPage.styles';
import TopPicks from './components/TopPicks';
import { useEffect } from "react";
import { useKakaoLogin } from "../Auth/hooks/useLogin"; 
import { setStoredUser, getStoredUser } from "../../utils/userStorage";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { profileUrlState } from '../../recoil/atoms/productState';


export default function MainPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
    const code: string | undefined = searchParams.get("code") || undefined;
	const [,setProfileUrl] = useRecoilState(profileUrlState);
	const navigate = useNavigate(); 

    const { login, error } = useKakaoLogin(code);

	useEffect(() => {
        if (login) {
            setStoredUser(login.userInfo, login.jwt);
			setProfileUrl(getStoredUser()?.profile_image)
        } else if (error) {
            console.error("Login failed:", error);
        }
    }, [login, error]);

	
	const DestinationCardComponent = ({ destination, imageSrc }: { destination: string; imageSrc: string }) => {
		const navigate = useNavigate();
	  
		const handleClick = () => {
		  navigate(`/community?location=${encodeURIComponent(destination)}`);
		};
	  
		return (
		  <S.DestinationCard onClick={handleClick}>
			<img src={imageSrc} alt={destination} />
			<div className="text-overlay">{destination}</div>
		  </S.DestinationCard>
		);
	  };

	return (
		<S.DashboardWrap>
			<S.BannerWrap>
			<S.BannerContent>
				<h1>친구와 함께 여행을 계획하세요</h1>
				<p>AI를 사용해 계획을 만들고 친구와 공동으로 수정해 완벽한 여행을 완성하세요!</p>
				<S.SearchBarWrap>
				<input type="text" placeholder="My Location" />
				<input type="date" placeholder="Start Date" />
				<input type="number" placeholder="People" />
				<S.BannerButton onClick={() => {console.log("clicked"); navigate('/plan')}}>
					Discover
				</S.BannerButton>
				</S.SearchBarWrap>
			</S.BannerContent>
			<S.BannerBackgroundContainer>
    <S.BannerBackground />
  </S.BannerBackgroundContainer>
		</S.BannerWrap>
			<h2>✈️ 추천 여행지</h2>
			<S.PopularDestinationsWrap>
			<DestinationCardComponent destination="서울" imageSrc="https://blog.kakaocdn.net/dn/rU8ez/btrYRTWGebd/mKlift0gwVzBRmeacCkb4k/img.png" />
			<DestinationCardComponent destination="대전" imageSrc="https://media.istockphoto.com/id/1436430810/ko/%EC%82%AC%EC%A7%84/%ED%8C%8C%EB%A6%AC-%EC%97%90%ED%8E%A0%ED%83%91.jpg?s=612x612&w=0&k=20&c=QNJciywnoQKyHsZPR8ltNt2rGOKL9BpSL6hOLqmbamE=" />
			<DestinationCardComponent destination="부산" imageSrc="https://media.istockphoto.com/id/876560704/ko/%EC%82%AC%EC%A7%84/%EB%B4%84%EC%97%90%EC%84%9C-%EC%9D%BC%EB%B3%B8-%ED%9B%84-%EC%A7%80.jpg?s=612x612&w=0&k=20&c=NDCk03y7WDrv1TsQdyY_2biW5ejOJIlYIl-d8zj9rqU=" />
			<DestinationCardComponent destination="광주" imageSrc="https://media.istockphoto.com/id/149719545/ko/%EC%82%AC%EC%A7%84/dawn-%EB%A7%8C%EB%93%A4%EC%A7%84-%EB%8F%85%EC%9D%BC%EC%96%B4-%EB%AA%BD%EA%B3%A0.jpg?s=612x612&w=0&k=20&c=tE-Ac5gzLfESgxJpRaYCVPifS_Bn5YVVMmpbI6WkT4E=" />
			<DestinationCardComponent destination="구례" imageSrc="https://media.istockphoto.com/id/604373174/ko/%EC%82%AC%EC%A7%84/%ED%83%80%EC%9D%B4%ED%8E%98%EC%9D%B4-%EB%8F%84%EC%8B%9C-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9D%B8.jpg?s=612x612&w=0&k=20&c=CrSWb3zgZuaezU16hvJ9a8Xymr0VUdQVB3Mbh6PKJXg=" />
			<DestinationCardComponent destination="한국" imageSrc="https://a.cdn-hotels.com/gdcs/production140/d1583/119ec73c-cbf4-431e-b128-eadb32999939.jpg" />
			</S.PopularDestinationsWrap>
            <TopPicks/>
		</S.DashboardWrap>
	);
}