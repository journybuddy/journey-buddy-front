import * as S from '../MainPage.styles';

export default function TopPicks() {
	return (
		<S.TopPicksWrap>
			<S.TopPicksHeading>🏝️ TOP3 인기 게시글</S.TopPicksHeading>
			<S.TopPicksGrid>
				<S.TopPickCard image="https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg">
					<S.TopPickInfo>
						<S.TopPickCategory>HIKING</S.TopPickCategory>
						<S.TopPickTitle>Rocky Mountains</S.TopPickTitle>
						<S.TopPickPrice>from €500</S.TopPickPrice>
					</S.TopPickInfo>
				</S.TopPickCard>
				<S.TopPickCard image="https://cdn.pixabay.com/photo/2023/10/11/13/41/ship-8308680_1280.jpg">
					<S.TopPickInfo>
						<S.TopPickCategory>ISLAND</S.TopPickCategory>
						<S.TopPickTitle>Caribbean</S.TopPickTitle>
						<S.TopPickPrice>from €800</S.TopPickPrice>
					</S.TopPickInfo>
				</S.TopPickCard>
				<S.TopPickCard image="https://cdn.pixabay.com/photo/2015/09/02/12/30/hiker-918473_1280.jpg">
					<S.TopPickInfo>
						<S.TopPickCategory>ADVENTURE</S.TopPickCategory>
						<S.TopPickTitle>Patagonia</S.TopPickTitle>
						<S.TopPickPrice>from €700</S.TopPickPrice>
					</S.TopPickInfo>
				</S.TopPickCard>
			</S.TopPicksGrid>
		</S.TopPicksWrap>
	);
}