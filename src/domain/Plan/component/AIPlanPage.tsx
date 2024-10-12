import React, { useState, useEffect } from 'react';
import * as S from '../Plan.styles';
import { SyncLoader } from 'react-spinners';
import Button from '../../../components/Button/Button';
import { useTourInfo } from '../hooks';
import { useRecoilState } from "recoil";
import { planState, placeState, isSavedState } from '../../../recoil/atoms/productState';
import { TourInfo } from '../../../types/interface/TourInfo';
import NoDataInfo from '../../../components/NoDataInfo/NoDataInfo';

export const AIPlanPage: React.FC = () => {

  const [preference, setPreference] = useState('');
  const [places, setPlaces] = useState<TourInfo[]>([]);
  const [, setSelectedPlaces] = useRecoilState(placeState); 
  const [activeTab, setActiveTab] = useState('문화시설'); 
  const [plan, ] = useRecoilState(planState);
  const [,setIsSaved] = useRecoilState(isSavedState);

  const { tourInfoData, isLoading: isTourInfoLoading } = useTourInfo(plan?.areaCode, plan?.sigunguCode, preference);

  useEffect(() => {
    if (tourInfoData && tourInfoData.tourInfoList) {
      setPlaces(tourInfoData.tourInfoList);
    } 
    if(places?.length === 0)
      setIsSaved(true)
    else
      setIsSaved(false)
  }, [tourInfoData]);

  const handleAddToPlan = (place: TourInfo) => {
    const newPlace = { 
      ...place, 
      latitude: 0,  
      longitude: 0,
      category: activeTab, 
    };     
    setSelectedPlaces((prev) => [...prev, newPlace]);  
    };

  return (
    <S.PageWrapper>
      <>
        <S.Header>
          <h2>🤖 당신을 위한 여행 장소</h2>
        </S.Header>
        
        <S.Schedule height='620px'>
          <S.ScheduleHeader>
            {['레포츠', '관광지', '문화시설', '숙박', '음식점'].map((tab) => (
              <S.ScheduleDay 
                key={tab} 
                active={tab === activeTab}
                onClick={() => {
                  setActiveTab(tab);
                  setPreference(tab);  
                }}
              >
                {tab}
              </S.ScheduleDay>
            ))}
          </S.ScheduleHeader>

          {isTourInfoLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <SyncLoader color='#f06292' cssOverride={{ padding: '100px 0 50px 0' }} />
          </div>) : (
                places?.length === 0 ? (
                <NoDataInfo text="장소가" />
              ) : (
                places.map((place, index) => (
                <S.ScheduleItem key={index}>
                  <S.ScheduleItemImage 
                  src={place.image || "https://cdn-icons-png.flaticon.com/512/500/500745.png"} 
                  alt={place.name} />
                  <S.ScheduleItemContent>
                    <div>{place.name}</div>
                    <div>{place.address}</div>
                    </S.ScheduleItemContent>
                    <Button 
                      btnType="primary" 
                      btnClass="btn_square" 
                      onClick={() => handleAddToPlan(place)}>
                        담기
                        </Button>
                        </S.ScheduleItem>
                        ))))}
        </S.Schedule>
      </>
    </S.PageWrapper>
  );
};
