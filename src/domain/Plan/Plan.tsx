import React, { useEffect } from 'react';

import Button from '../../components/Button';
import * as S from './Plan.styles';
import useModal from '../../hooks/useModal';
import { getStoredUser } from '../../utils/userStorage';
import LoginForm from '../Auth/component/LoginForm';
import { useRecoilState } from 'recoil';
import { showState } from '../../recoil/atoms/productState';

export default function MyPage() {
    const { authModelOpen } = useModal();
    const [, setShow] = useRecoilState(showState);

  const user = getStoredUser();
  const isAuthenticated = user != null;

  useEffect(() => {
    if (!isAuthenticated) {
      setShow(true);
      authModelOpen(); 
    }
  }, [isAuthenticated, authModelOpen]);
    return (
        <>
        {!isAuthenticated && (
            <LoginForm/>
          )}
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
                        <Button btnType="primary" btnClass="btn_square">담기</Button>
                    </S.ScheduleItem>
                    <S.ScheduleItem>
                        <S.ScheduleItemImage src="https://www.tokyo-skytree.jp/kr/access/img/img_walk_map_01.jpg" alt="Arrive in Tokyo" />
                        <S.ScheduleItemContent>
                            <div>Arrive in Tokyo</div>
                            <div>Narita Airport to your hotel</div>
                        </S.ScheduleItemContent>
                        <Button btnType="primary" btnClass="btn_square">담기</Button>
                    </S.ScheduleItem>
                    <S.ScheduleItem>
                        <S.ScheduleItemImage src="https://www.tokyo-skytree.jp/kr/access/img/img_walk_map_01.jpg" alt="Arrive in Tokyo" />
                        <S.ScheduleItemContent>
                            <div>Arrive in Tokyo</div>
                            <div>Narita Airport to your hotel</div>
                        </S.ScheduleItemContent>
                        <Button btnType="primary" btnClass="btn_square">담기</Button>
                    </S.ScheduleItem>
                    <S.ScheduleItem>
                        <S.ScheduleItemImage src="https://www.tokyo-skytree.jp/kr/access/img/img_walk_map_01.jpg" alt="Arrive in Tokyo" />
                        <S.ScheduleItemContent>
                            <div>Arrive in Tokyo</div>
                            <div>Narita Airport to your hotel</div>
                        </S.ScheduleItemContent>
                        <Button btnType="primary" btnClass="btn_square">담기</Button>
                    </S.ScheduleItem>
                </S.Schedule>
            </S.Sidebar>
            <S.MainContent>
                <S.MapContainer>
                    <S.MapImage src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="Map" />
                </S.MapContainer>
            </S.MainContent>
        </S.DashboardWrap>
        </>
    );
}
