import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { planState, scheduleState } from '../../../recoil/atoms/productState';
import * as S from '../Plan.styles';
import Button from '../../../components/Button/Button';
import { SyncLoader } from 'react-spinners';
import { TourInfo } from '../../../types/interface/TourInfo';
import NoDataInfo from '../../../components/NoDataInfo/NoDataInfo';
import { usePlanSave } from '../hooks/usePlanSave';

const KAKAO_APP_KEY = 'cd866a457c717cac35fd4372f0e43a7a';

export const FinalPlanPage: React.FC = () => {
  const [schedule] = useRecoilState(scheduleState);
  const [groupedSchedules, setGroupedSchedules] = useState<{ [key: string]: TourInfo[] }>({});
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [tripName, setTripName] = useState<string>(''); // 여행 이름 상태 관리
  const mapRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<any[]>([]);
  const { mutate: savePlan } = usePlanSave(); 

  useEffect(() => {
    if (schedule?.schedules?.length) {
      const grouped = schedule.schedules.reduce((acc: any, schedule: any) => {
        const dateTime = schedule.dateTime;
        const date = Array.isArray(dateTime)
          ? `${dateTime[0]}-${String(dateTime[1]).padStart(2, '0')}-${String(dateTime[2]).padStart(2, '0')}`
          : '';

        if (date) {
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(schedule);
        }
        return acc;
      }, {});
      setGroupedSchedules(grouped);

      const firstDate = Object.keys(grouped)[0];
      if (firstDate) {
        setSelectedDate(firstDate);
      }
    }
  }, [schedule]);

  useEffect(() => {
    const loadKakaoMap = () => {
      if (!window.kakao) {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
        script.onload = () => {
          window.kakao.maps.load(() => {
            console.log('Kakao Map SDK loaded');
            initializeMap();
          });
        };
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current && window.kakao) {
        window.kakao.maps.load(() => {
          const container = mapRef.current;
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          markersRef.current.forEach(marker => marker.setMap(null));
          markersRef.current = [];

          const bounds = new window.kakao.maps.LatLngBounds();

          if (selectedDate && groupedSchedules[selectedDate]) {
            groupedSchedules[selectedDate]?.forEach((schedule: TourInfo) => {
              const markerPosition = new window.kakao.maps.LatLng(schedule.latitude, schedule.longitude);
              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
                map: map,
                title: schedule.placeName,
              });

              markersRef.current.push(marker);

              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="padding:5px;">${schedule.placeName}</div>`,
              });

              window.kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
              window.kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());

              bounds.extend(markerPosition);
            });

            map.setBounds(bounds);
          }
        });
      }
    };

    loadKakaoMap();
  }, [selectedDate, groupedSchedules]);

  const handleSavePlan = async () => {
    console.log('여행 이름:', tripName);
    const updatedSchedule = {
      ...schedule,
      planName: tripName,  
    };
  
    savePlan(updatedSchedule);
    
  };

  return (
    <>
     <S.TripNameInput 
            type="text"
            placeholder="여행 이름을 입력하세요"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />
    <S.DashboardWrap>
      <S.PageWrapper>
        <S.Header>
          <h2>🎒 최종 여행 계획</h2>
          <Button btnType="primary" btnClass="btn_square" onClick={handleSavePlan}>
            여행 계획 저장
          </Button>
        </S.Header>

        <S.Schedule height="587px">
          <S.ScheduleHeader>
            {Object.keys(groupedSchedules).map((date) => (
              <S.ScheduleDay
                key={date}
                active={date === selectedDate}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </S.ScheduleDay>
            ))}
          </S.ScheduleHeader>
          {groupedSchedules[selectedDate]?.length ? (
            groupedSchedules[selectedDate].map((place, index) => (
              <S.ScheduleItem key={index}>
                <S.ScheduleItemImage
                  src={place.image || 'https://em-content.zobj.net/source/google/146/luggage_1f9f3.png'}
                  alt={place.name}
                />
                <S.ScheduleItemContent>
                  <div>{place.placeName}</div>
                  <div>{place.address}</div>
                </S.ScheduleItemContent>
              </S.ScheduleItem>
            ))
          ) : (
            <NoDataInfo text="장소가" />
          )}
        </S.Schedule>
      </S.PageWrapper>

      <S.PageWrapper>
        <S.Header>
          <h2>🗺️ 여행 지도 보기</h2>
        </S.Header>
        <S.MapContainer ref={mapRef} />
      </S.PageWrapper>
    </S.DashboardWrap>
    </>
  );

};
