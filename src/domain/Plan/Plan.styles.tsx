/* Plan.css */
import styled from '@emotion/styled';

export const DashboardWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
`;

export const Sidebar = styled.div`
  width: 40%;
  padding-right: 20px;
`;

export const MainContent = styled.div`
  width: 60%;
  padding-left: 20px;
`;

export const Schedule = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const MapContainer = styled.div`
background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
`;

export const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ScheduleDay = styled.div<{ active: boolean }>`
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  background-color: ${props => (props.active ? '#f0f0f0' : 'transparent')};
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

export const ScheduleItemButton = styled.button`
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const MapImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;