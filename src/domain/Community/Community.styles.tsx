/* Community.css */

import styled from '@emotion/styled';
import { Avatar } from 'antd';

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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
`;

export const CommentsSection = styled.div`
  margin: 20px 0 50px 0;
  border-top: 1px solid #ccc;
  padding-top: 10px;
  max-height: 300px; 
  overflow-y: auto; 
`;

export const CommentsTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CommentNickname = styled.span`
  font-weight: bold;
`;

export const CommentContent = styled.p`
  margin: 5px 0;
`;

export const CommentDate = styled.span`
  font-size: 12px;
  color: #999;
`;

export const AddCommentSection = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 10px;
`;

export const ProfilePicWrap = styled.div<{ profileUrl?: string }>`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-image: ${({ profileUrl }) => `url(${profileUrl})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer; 
`;

export const StyledAvatar = styled(Avatar)`
    width: 45px;
    height: 45px;
    
    .MuiSvgIcon-root {
        width: 40px;
        height: 40px;
    }
`;

