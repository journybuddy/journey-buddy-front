/* Community.css */

import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
`;

export const CardItem = styled.div`
  box-sizing: border-box;
`;

export const RoundedImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Host = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;

export const Price = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;

export const Available = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;
