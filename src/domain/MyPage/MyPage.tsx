import React from 'react';
import useModal from '../../hooks/useModal';
import { getStoredUser } from '../../utils/userStorage';
import LoginForm from '../Auth/component/LoginForm';
import * as S from './MyPage.styles';

export default function MyPage() {
  const { authModelOpen } = useModal();

  const user = getStoredUser();
  console.log(user);
  const isAuthenticated = user != null;

  React.useEffect(() => {
    if (!isAuthenticated) {
      authModelOpen(); 
    }
  }, [isAuthenticated, authModelOpen]);

  return (
    <>
      {!isAuthenticated && (
        <LoginForm/>
      )}
        <S.DashboardWrap>
          <S.ProfileHeader>
            <S.ProfileImage 
              src="https://mblogthumb-phinf.pstatic.net/MjAyMjEwMDZfMTM3/MDAxNjY1MDQxNzQyNzQ0.QQi5NvTdqIVFT6RKwe0HPLR3ZCwBH4CCVRH6YIo1k30g.wqRq6A61qFmhd1W0kNnwnXHggdRq5HXY-oC2ZDj8isog.JPEG.90_05_28/IMG_1471.JPG?type=w800" 
              alt="Profile" 
            />
            <S.ProfileInfo>
              <S.ProfileName>져니버디</S.ProfileName>
              <S.ProfileDetails>journey-buddy@naver.com</S.ProfileDetails>
              <S.ButtonGroup>
                <S.FollowButton>프로필 수정</S.FollowButton>
                <S.MessageButton>탈퇴</S.MessageButton>
              </S.ButtonGroup>
            </S.ProfileInfo>
          </S.ProfileHeader>
          <S.Stats>
            <S.Stat>
              <S.StatNumber>11</S.StatNumber>
              <S.StatLabel>Plans</S.StatLabel>
            </S.Stat>
            <S.Stat>
              <S.StatNumber>97</S.StatNumber>
              <S.StatLabel>Posts</S.StatLabel> 
            </S.Stat>
            <S.Stat>
              <S.StatNumber>64</S.StatNumber>
              <S.StatLabel>Bookmarks</S.StatLabel>
            </S.Stat>
          </S.Stats>
          <S.Tabs>
            <S.Tab className="active">여행 계획</S.Tab>
            <S.Tab>게시글</S.Tab>
            <S.Tab>책갈피</S.Tab>
          </S.Tabs>
          <S.Gallery>
            <S.GalleryImage src="https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg" alt="Gallery Image 1" />
            <S.GalleryImage src="https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg" alt="Gallery Image 2" />
            <S.GalleryImage src="https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg" alt="Gallery Image 3" />
            <S.GalleryImage src="https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg" alt="Gallery Image 4" />
            <S.GalleryImage src="https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg" alt="Gallery Image 5" />
            <S.GalleryImage src="https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg" alt="Gallery Image 6" />
          </S.Gallery>
        </S.DashboardWrap>
    </>
  );
}
