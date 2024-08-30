// MyPage.tsx

import React, { useState, useEffect, useCallback } from 'react';
import useModal from '../../hooks/useModal';
import { getStoredUser } from '../../utils/userStorage';
import LoginForm from '../Auth/component/LoginForm';
import * as S from './MyPage.styles';
import { useMyPosts } from './hooks/useMyPosts';
import { useMyScraps } from './hooks/useMyScraps';
import { useMyLikes } from './hooks/useMyLikes';
import { useMyComments } from './hooks/useMyComments';
import NoDataInfo from '../../components/NoDataInfo/NoDataInfo';
import { useRecoilState } from 'recoil';
import { profileUrlState, showState } from '../../recoil/atoms/productState';
import CommunityDetailModal from '../Community/component/CommunityDetailModal';
import { userImage } from '../../assets/images';
import ProfileEditModal from './component/ProfileEditModal'; 

export default function MyPage() {
  const { authModelOpen } = useModal();
  const user = getStoredUser();
  const isAuthenticated = user != null;
  const [, setShow] = useRecoilState(showState);
  const [profileUrl] = useRecoilState(profileUrlState);
  const [editProfileVisible, setEditProfileVisible] = useState(false);

  const [activeTab, setActiveTab] = useState('posts');
  const [postId, setPostId] = useState<number>();
  const { modalOpen } = useModal();
  const { myPosts } = useMyPosts();
  const { myScraps } = useMyScraps();
  const { myLikes } = useMyLikes();
  const { myComments } = useMyComments();

  useEffect(() => {
    if (!isAuthenticated) {
      setShow(true);
      authModelOpen();
    }
  }, [isAuthenticated, authModelOpen]);

  const onOpenPost = useCallback(
    (postId?: number) => {
      setPostId(postId);
      modalOpen();
    },
    [setPostId, modalOpen],
  );

  const renderGalleryImages = () => {
    const postsToDisplay =
      activeTab === 'posts'
        ? myPosts?.result.content
        : activeTab === 'scraps'
        ? myScraps?.result.content.map((scrap: { postResponse: any }) => scrap.postResponse)
        : activeTab === 'likes'
        ? myLikes?.result.content.map((like: { postResponse: any }) => like.postResponse)
        : myComments?.result.content.map((comment: { postResponse: any }) => comment.postResponse);

    const noDataContext =
      activeTab === 'posts'
        ? '작성글이'
        : activeTab === 'scraps'
        ? '스크랩이'
        : activeTab === 'likes'
        ? '좋아요가'
        : '댓글이';

    return postsToDisplay && postsToDisplay.length > 0 ? (
      <S.Gallery>
        {postsToDisplay.map((post: any) => (
          <S.GalleryImage
            key={post.postId}
            src={post.imageUrl || post.imageUrlList[0]}
            alt={post.title}
            onClick={() => onOpenPost(post.postId)}
          />
        ))}
      </S.Gallery>
    ) : (
      <NoDataInfo text={noDataContext} />
    );
  };

  return (
    <>
      {!isAuthenticated && <LoginForm />}
      <S.DashboardWrap>
        <S.ProfileHeader>
          <S.ProfileImage src={profileUrl || userImage} alt="Profile" />
          <S.ProfileInfo>
            <S.ProfileName>{user?.nickname}</S.ProfileName>
            <S.ProfileDetails>{user?.bio ? user?.bio : user?.email }</S.ProfileDetails>
            <S.ButtonGroup>
              <S.FollowButton onClick={() => setEditProfileVisible(true)}>프로필 수정</S.FollowButton> {/* Open modal */}
              <S.MessageButton>탈퇴</S.MessageButton>
            </S.ButtonGroup>
          </S.ProfileInfo>
        </S.ProfileHeader>

        <S.Stats>
          <S.Stat>
            <S.StatNumber>{myPosts?.result.totalElements || 0}</S.StatNumber>
            <S.StatLabel>Posts</S.StatLabel>
          </S.Stat>
          <S.Stat>
            <S.StatNumber>{myScraps?.result.totalElements || 0}</S.StatNumber>
            <S.StatLabel>Bookmarks</S.StatLabel>
          </S.Stat>
          <S.Stat>
            <S.StatNumber>{myLikes?.result.totalElements || 0}</S.StatNumber>
            <S.StatLabel>Likes</S.StatLabel>
          </S.Stat>
        </S.Stats>

        <S.Tabs>
          <S.Tab className={activeTab === 'posts' ? 'active' : ''} onClick={() => setActiveTab('posts')}>
            게시글
          </S.Tab>
          <S.Tab className={activeTab === 'scraps' ? 'active' : ''} onClick={() => setActiveTab('scraps')}>
            책갈피
          </S.Tab>
          <S.Tab className={activeTab === 'likes' ? 'active' : ''} onClick={() => setActiveTab('likes')}>
            좋아요
          </S.Tab>
          <S.Tab className={activeTab === 'comments' ? 'active' : ''} onClick={() => setActiveTab('comments')}>
            댓글
          </S.Tab>
        </S.Tabs>

        {renderGalleryImages()}
      </S.DashboardWrap>

      <CommunityDetailModal postId={postId} />
      <ProfileEditModal isVisible={editProfileVisible} onClose={() => setEditProfileVisible(false)} /> {/* Profile Edit Modal */}
    </>
  );
}
