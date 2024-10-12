/* Plan.css */
import styled from '@emotion/styled';

export const DashboardWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
`;

export const Sidebar = styled.div`
  width: 50%;
`;

export const MainContent = styled.div`
  width: 60%;
  padding-left: 20px;
`;

export const Schedule = styled.div<{ height?: string }>`
  background-color: #f8f8f8;
  margin: 0px; 
  padding: 0px 20px;
  border-radius: 10px;
  height: ${(props) => props.height};
  overflow-y: auto;  
`;

export const MapContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  height: 550px;
`;

export const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px; 
  position: sticky; 
  top: 0; 
  background-color: #f8f8f8;
  z-index: 1; 
`;

export const ScheduleDay = styled.div<{ active: boolean }>`
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  background-color: ${(props) =>
    props.active ? '#f0f0f0' : 'transparent'};
  border-radius: 5px;
`;

export const ScheduleItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ScheduleItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const ScheduleItemContent = styled.div`
  flex: 1;
`;

export const PlanModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const PlanModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const NextButton = styled.button`
  padding: 10px 20px;
  background-color: #f06292;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;

export const BackButton = styled(NextButton)`
  background-color: #6c757d;
`;

export const CompleteButton = styled(NextButton)`
  background-color: #28a745;
`;

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const DateLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

export const DateInput = styled.input`
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
  box-shadow: none;

  &:hover {
    border-color: #f06292;
  }

  &::placeholder {
    color: #999;
  }
`;


export const PeriodMessage = styled.p`
  font-size: 14px;
  color: #555;
`;

export const ThemeSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const TransportSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const PreferenceButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ScrollableContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

export const PlaceItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const PlaceImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const EmptyPlaceImage = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const SelectedPlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const ThemesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ThemeLabel = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

export const TransportOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TransportLabel = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;


export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  border: 1px solid #ddd;
  padding: 8px 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const SearchItem = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center; 
  padding: 0 16px;
  text-align: center;
  justify-content: center; 
  flex: 1;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

export const SearchLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px; 
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 60%;
  margin-top: 0;

  &:focus {
    border-color: #80bdff;
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: #f06292;
  border: none;
  border-radius: 50%;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;

  &:hover {
    background-color: #e91e63;
  }
`;

export const ResetButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 50%;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;

  &:hover {
    background-color: #388e3c;
  }
`;

export const TabButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  background-color: ${props => (props.isActive ? '#ff69b4' : '#fff')};
  color: ${props => (props.isActive ? '#fff' : '#ff69b4')};
  border: 1px solid #ff69b4;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff4081;
    color: white;
  }
`;


// 선택된 장소 목록 스타일
export const SelectedPlacesList = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 100%;
  background-color: #f9f9f9;
`;

// 장소 이름 스타일
export const PlaceName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

// 장소 주소 스타일
export const PlaceAddress = styled.div`
  font-size: 14px;
  color: #666;
`;

export const TripNameInput = styled.input`
  width: 50%;
  padding: 10px;
  margin: 10px 0;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  
  &:focus {
    border-color: #007bff;
  }
`;