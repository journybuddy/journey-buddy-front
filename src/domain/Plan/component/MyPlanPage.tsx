import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '../Plan.styles';
import { FaRunning, FaMapMarkerAlt, FaLandmark, FaBed, FaUtensils } from 'react-icons/fa';
import Button from '../../../components/Button/Button';
import { SyncLoader } from 'react-spinners';
import { useTourInfo, useSearchPlaceByKeyword, useCreateAIPlan } from '../hooks';
import { useRecoilState } from "recoil";
import { planState, placeState, createdState, scheduleState } from '../../../recoil/atoms/productState';
import NoDataInfo from '../../../components/NoDataInfo/NoDataInfo';
import { FaSearch, FaRedo } from 'react-icons/fa';
import { TourInfo } from '../../../types/interface/TourInfo';

export const MyPlanPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('문화시설'); 
    const [searchKeyword, setSearchKeyword] = useState('');
    const {places} = useSearchPlaceByKeyword(searchKeyword);
    const [selectedPlaces, setSelectedPlaces] = useRecoilState(placeState); 
    const { mutate: createAIPlan } = useCreateAIPlan(); 
    const [plan, ] = useRecoilState(planState);
    const [,setCreated] = useRecoilState(createdState); 
    const [, setScheduled] = useRecoilState(scheduleState);

  
    const filteredPlaces = selectedPlaces.filter((selectedPlaces) => selectedPlaces.category === activeTab);

    const handleSearch = () => {
      };

      const handleReset = () => {
        setSearchKeyword('')
    };

    const handleAddToPlan = (place: TourInfo) => {
      const newPlace = { 
        ...place, 
        latitude: 0,  
        longitude: 0,
        category: activeTab, 
      };     
      setSelectedPlaces((prev) => [...prev, newPlace]);  
      };

      const handleCreateAIPlan = () => {
        console.log(selectedPlaces)
        createAIPlan({
          startDate: plan?.startDate,
          endDate: plan?.endDate,
          transport: plan?.transport,
          selectedPlaces: selectedPlaces,
        }, {
          onSuccess: (response) => {
            console.log('Response:', response); 
            setScheduled(response); 
            setCreated(true);  
          },
          onError: (error) => {
            console.error('Error:', error); 
          },
        });
      };
      
  
    return (
        <>
      <S.PageWrapper>
        <S.Header>
          <h2>🏖️ 나의 여행 장소</h2>
          <Button 
                      btnType="primary" 
                      btnClass="btn_square" 
                      onClick={handleCreateAIPlan}>
                        완료
                        </Button> 
        </S.Header>
  
        <S.ScheduleHeader>
          {['레포츠', '관광지', '문화시설', '숙박', '음식점'].map((tab) => (
            <S.ScheduleDay 
              key={tab} 
              active={tab === activeTab}
              onClick={() => setActiveTab(tab)} 
            >
              {tab}
            </S.ScheduleDay>
          ))}
        </S.ScheduleHeader>
  
        <S.Schedule height='200px'>
          {filteredPlaces.length === 0 ? (
           <NoDataInfo text='장소가' height='50px'/>
          ) : (
            filteredPlaces.map((place, index) => (
              <S.ScheduleItem key={index}>
                <S.ScheduleItemImage 
                  src={place.image || "https://cdn-icons-png.flaticon.com/512/500/500745.png"} 
                  alt={place.name} />
                <S.ScheduleItemContent>
                  <div>{place.name}</div>
                  <div>{place.address}</div>
                </S.ScheduleItemContent>
              </S.ScheduleItem>
            ))
          )}
        </S.Schedule>
      </S.PageWrapper>

      <S.PageWrapper>
        <S.SearchContainer>
        <S.SearchBarContainer>
            <S.SearchItem>
                <S.SearchLabel>검색</S.SearchLabel>
                <S.Input 
                    type="text" 
                    placeholder="장소를 입력하세요"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)} 
                />
            </S.SearchItem>
            <S.SearchButton onClick={handleSearch}>
                <FaSearch />
            </S.SearchButton>
            <S.ResetButton onClick={handleReset}>
                <FaRedo />
            </S.ResetButton>
        </S.SearchBarContainer>
      </S.SearchContainer>
      <S.Schedule height='200px'>
          {places === undefined ? (
           <NoDataInfo height='50px'/>
          ) : (
            places?.length === 0 ? <NoDataInfo text="장소가" height='50px'/> : (
            places.map((place: TourInfo, index: number)  => (
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
            ))
          ))}
        </S.Schedule>
        </S.PageWrapper>
      </>
    );
  };
  