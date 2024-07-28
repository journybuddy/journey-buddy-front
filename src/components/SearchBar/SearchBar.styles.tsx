/* SearchBar.css */

import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #ddd;
  padding: 8px 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto; 
  margin-bottom : 60px;
`;

export const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding: 0 16px;
  text-align: left;
  border-right: 1px solid #ddd;
  flex: 1;

  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const SubLabel = styled.div`
  font-size: 12px;
  color: #888;
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
