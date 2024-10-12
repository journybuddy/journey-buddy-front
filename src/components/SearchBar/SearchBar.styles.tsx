import styled from '@emotion/styled';

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

export const Label = styled.label`
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