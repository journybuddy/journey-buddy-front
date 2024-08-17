/** Login.css */

import styled from '@emotion/styled';


export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 20px;  
  text-align: center;  
`;

export const LoginText = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 0 20px;
  line-height: 1.5;
  font-weight: 500;
`;

export const LoginIcon = styled.div`
  svg {
    width: 120px;
    height: 120px;
  }
`;
