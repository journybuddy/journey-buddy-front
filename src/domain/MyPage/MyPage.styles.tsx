import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ListTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

export const ListInfo = styled.p`
  margin: 8px 0 0;
  color: #666;
  font-size: 0.9em;
`;

export const DashboardWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 40px;
  border: 1px solid gray;
`;

export const ProfileInfo = styled.div`
  text-align: left;
`;

export const ProfileName = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`;

export const ProfileDetails = styled.p`
    margin: 0;
    color: gray;
    font-size: 16px;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

export const Stat = styled.div`
  text-align: center;
`;

export const StatNumber = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
`;

export const StatLabel = styled.p`
  margin: 0;
  color: gray;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const FollowButton = styled.button`
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px;
`;

export const MessageButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Tab = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  &.active {
    border-bottom: 2px solid black;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
