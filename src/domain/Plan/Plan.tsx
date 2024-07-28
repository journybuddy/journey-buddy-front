import * as S from './Plan.styles';

export default function MyPage() {
    return (
        <S.DashboardWrap>
            <S.Sidebar>
            <h2>당신을 위한 여행 장소 </h2>
                <S.Schedule>
                    <S.ScheduleHeader>
                        <S.ScheduleDay active={false}>숙소</S.ScheduleDay>
                        <S.ScheduleDay active={true}>식당</S.ScheduleDay>
                        <S.ScheduleDay active={false}>관광지</S.ScheduleDay>
                    </S.ScheduleHeader>
                    <S.ScheduleItem>
                        <S.ScheduleItemImage src="https://www.tokyo-skytree.jp/kr/access/img/img_walk_map_01.jpg" alt="Arrive in Tokyo" />
                        <S.ScheduleItemContent>
                            <div>Arrive in Tokyo</div>
                            <div>Narita Airport to your hotel</div>
                        </S.ScheduleItemContent>
                        <S.ScheduleItemButton>담기</S.ScheduleItemButton>
                    </S.ScheduleItem>
                    <S.ScheduleItem>
                        <S.ScheduleItemImage src="https://www.tokyo-skytree.jp/kr/access/img/img_walk_map_01.jpg" alt="Arrive in Tokyo" />
                        <S.ScheduleItemContent>
                            <div>Arrive in Tokyo</div>
                            <div>Narita Airport to your hotel</div>
                        </S.ScheduleItemContent>
                        <S.ScheduleItemButton>담기</S.ScheduleItemButton>
                    </S.ScheduleItem>
                    <S.ScheduleItem>
                        <S.ScheduleItemImage src="https://www.tokyo-skytree.jp/kr/access/img/img_walk_map_01.jpg" alt="Arrive in Tokyo" />
                        <S.ScheduleItemContent>
                            <div>Arrive in Tokyo</div>
                            <div>Narita Airport to your hotel</div>
                        </S.ScheduleItemContent>
                        <S.ScheduleItemButton>담기</S.ScheduleItemButton>
                    </S.ScheduleItem>
                    <S.ScheduleItem>
                        <S.ScheduleItemImage src="https://www.tokyo-skytree.jp/kr/access/img/img_walk_map_01.jpg" alt="Arrive in Tokyo" />
                        <S.ScheduleItemContent>
                            <div>Arrive in Tokyo</div>
                            <div>Narita Airport to your hotel</div>
                        </S.ScheduleItemContent>
                        <S.ScheduleItemButton>담기</S.ScheduleItemButton>
                    </S.ScheduleItem>
                </S.Schedule>
            </S.Sidebar>
            <S.MainContent>
                <S.MapContainer>
                    <S.MapImage src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="Map" />
                </S.MapContainer>
            </S.MainContent>
        </S.DashboardWrap>
    );
}
