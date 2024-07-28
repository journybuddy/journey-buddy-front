/* MainPage.css */

import { JourneyBuddyBackground } from '../../assets';
import styled from '@emotion/styled';

export const DashboardWrap = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	width: 100%;
	padding: 20px;
`;

export const BannerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, rgba(255, 182, 193, 1) 0%, rgba(255, 105, 180, 1) 100%);
  padding: 20px;
  border-radius: 20px;
  background-size: cover;
  text-align: center;
  color: white;
  margin-bottom: 30px;
  position: relative;
`;

export const BannerBackgroundContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 56%;
  transform: translateY(-50%);
  width: 300px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden; 
`;

export const BannerBackground = styled(JourneyBuddyBackground)`
  width: 100%;
  height: 100%;
  display: block;
`;
export const BannerContent = styled.div`
max-width: 50%;
`;

export const BannerButton = styled.button`
background-color: #f06292;
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
	background-color: #e91e63;
}
`;


export const SearchBarWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	gap: 10px;

	input, button {
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
	}

	button {
		background-color: #f06292;
		color: white;
		border: none;
		cursor: pointer;

		&:hover {
			background-color: #e91e63;
		}
	}
`;

export const PopularDestinationsWrap = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 20px 0;
`;

export const DestinationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .text-overlay {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    padding: 10px 20px;
    color: white;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #f06292;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e91e63;
    }
  }
`;

export const TopPicksWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
`;

export const TopPicksHeading = styled.h2`
	margin-bottom: 20px;
	font-size: 1.5rem;
`;

export const TopPicksGrid = styled.div`
	display: flex;
	gap: 20px;
`;

export const TopPickCard = styled.div<{ image: string }>`
	position: relative;
	border-radius: 10px;
	overflow: hidden;
	width: 300px;
	height: 400px;
	background: url(${props => props.image}) no-repeat center center;
	background-size: cover;
`;

export const TopPickInfo = styled.div`
	position: absolute;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	width: 100%;
	padding: 10px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const TopPickCategory = styled.div`
	font-size: 0.75rem;
`;

export const TopPickTitle = styled.div`
	font-size: 1.25rem;
	font-family: 'GmarketSansMedium';
	font-weight: bold;
`;

export const TopPickPrice = styled.div`
	font-size: 1rem;
`;