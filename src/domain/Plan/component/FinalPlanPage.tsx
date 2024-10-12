import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { isSavedState, scheduleState } from '../../../recoil/atoms/productState';
import * as S from '../Plan.styles';
import Button from '../../../components/Button/Button';
import { TourInfo } from '../../../types/interface/TourInfo';
import NoDataInfo from '../../../components/NoDataInfo/NoDataInfo';
import { usePlanSave } from '../hooks/usePlanSave';

const KAKAO_APP_KEY = 'cd866a457c717cac35fd4372f0e43a7a';

export const FinalPlanPage: React.FC = () => {
  const [schedule] = useRecoilState(scheduleState);
  const [groupedSchedules, setGroupedSchedules] = useState<{ [key: string]: TourInfo[] }>({});
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [tripName, setTripName] = useState<string>(''); 
  const mapRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<any[]>([]); // 마커들을 관리하는 배열
  const [highlightedMarker, setHighlightedMarker] = useState<any>(null); // 강조된 마커
  const mapInstanceRef = useRef<any>(null);
  const { mutate: savePlan } = usePlanSave(); 
  const [, setIsSaved] = useRecoilState(isSavedState);

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

  // 지도 로딩 및 초기화 코드 추가
  useEffect(() => {
    const loadKakaoMap = () => {
      if (!window.kakao?.maps) {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
        script.onload = () => {
          window.kakao.maps.load(() => {
            initializeMap();
          });
        };
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current) {
        const map = new window.kakao.maps.Map(mapRef.current, {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 8,
        });
        mapInstanceRef.current = map;

        // 선택된 날짜의 일정에 따른 마커 및 경로 표시
        updateMapForSelectedDate();
      }
    };

    const updateMapForSelectedDate = () => {
      const map = mapInstanceRef.current;
      if (!map || !selectedDate || !groupedSchedules[selectedDate]) return;

      // 이전 마커 및 경로 제거
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      const bounds = new window.kakao.maps.LatLngBounds();
      const positions = groupedSchedules[selectedDate]?.map((schedule: TourInfo, idx: number) => {
        const markerPosition = new window.kakao.maps.LatLng(schedule.latitude, schedule.longitude);

        // 마커 대신 번호만 표시하는 CustomOverlay
        const labelContent = `<div style="background-color: white; border: 2px solid black; border-radius: 50%; padding: 5px; font-size: 14px; text-align: center;">${idx + 1}</div>`;
        
        const customOverlay = new (window as any).kakao.maps.CustomOverlay({
          position: markerPosition,
          content: labelContent,
          yAnchor: 1,
        });
        customOverlay.setMap(map);

     

        markersRef.current.push(customOverlay);
        bounds.extend(markerPosition);
        return markerPosition;
      });

      // 경로 그리기
      if (positions.length > 1) {
        new window.kakao.maps.Polyline({
          map: map,
          path: positions,
          strokeWeight: 3,
          strokeColor: '#ff69b4',
          strokeOpacity: 0.7,
          strokeStyle: 'solid',
        });
      }

      map.setBounds(bounds);
    };

    loadKakaoMap();
  }, [selectedDate, groupedSchedules]);

  // 마커 클릭 시 강조 처리 및 기존 강조 마커 복원
  const handleScheduleClick = (schedule: any, idx: number) => {
    if (highlightedMarker) {
      // 기존 강조된 마커 스타일 되돌리기
      const previousIndex = markersRef.current.indexOf(highlightedMarker);
      highlightedMarker.setContent(
        `<div style="background-color: white; border: 2px solid black; border-radius: 50%; padding: 5px; font-size: 14px; text-align: center;">${previousIndex + 1}</div>`
      );
    }

    const marker = markersRef.current[idx];
    if (marker) {
      // 선택된 마커 강조
      marker.setContent(
        `<div style="background-color: yellow; border: 2px solid red; border-radius: 50%; padding: 5px; font-size: 14px; text-align: center;">${idx + 1}</div>`
      );
      setHighlightedMarker(marker);
    }
  };

  const handleSavePlan = async () => {
    console.log("Save button clicked!");  
    const updatedSchedule = {
      ...schedule,
      planName: tripName,  
    };

    savePlan(updatedSchedule, {
      onSuccess: () => {
        console.log("isSucceed");
        setIsSaved(true); 
      },
    });
    console.log('Payload being sent:', updatedSchedule);
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
            {selectedDate && groupedSchedules[selectedDate]?.length ? (
              groupedSchedules[selectedDate].map((place: any, idx: number) => (
                <S.ScheduleItem
                key={idx}
                onClick={() => handleScheduleClick(schedule, idx)}
                >
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
