import React, { useState, useCallback } from 'react';
import useModal from '../../hooks/useModal';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as S from './Community.styles';
import { Card } from 'antd';
import CommunityDetailModal from './component/CommunityDetailModal';
import { useCommunityList } from './hooks/useCommunityList';
import { CommunityItem } from '../../types/interface/Community';
import NoDataInfo from '../../components/NoDataInfo/NoDataInfo';
import { defaultImage } from '../../assets/images';
import Button from '../../components/Button';
import { getStoredUser } from '../../utils/userStorage';

export default function Community() {
  const { modalOpen, secondmodalOpen } = useModal();
  const [searchParams, setSearchParams] = useState<{ location?: string; sort?: string }>({});
  const { communityList } = useCommunityList(searchParams);
  const [postId, setPostId] = useState<number>();
  const user = getStoredUser();
  const isAuthenticated = user != null;

  /** 포스트 상세 조회 */
  const onOpenPost = useCallback(
    (seq?: number) => {
      setPostId(seq);
      modalOpen();
    },
    [setPostId, modalOpen]
  );

  const handleSearch = (params: { location?: string; sort?: string }) => {
    setSearchParams(params);
  };

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} onReset={handleReset} /> 
      <S.ButtonWrapper>
        {isAuthenticated && (
          <>
            <Button btnType="primary" btnClass="btn_square" onClick={secondmodalOpen}>
              글 작성하기
            </Button>
          </>
        )}
      </S.ButtonWrapper>
      {communityList && communityList?.content?.length > 0 ? (
        <S.CardContainer>
          {communityList.content.map((item: CommunityItem) => (
            <S.CardItem key={item.postId} onClick={() => onOpenPost(item.postId)}>
              <Card
                cover={<S.RoundedImage src={item.imageUrl || defaultImage} alt={item.title} />}
                bordered={false}
              >
                <S.Title>{item.title}</S.Title>
                <S.Host>{item.writerName}</S.Host>
                {<S.Price>{`👍🏻 ${item.likeCount} 💬 ${item.commentCount}`}</S.Price>}
                {item.location && <S.Available>{item.location}</S.Available>}
              </Card>
            </S.CardItem>
          ))}
        </S.CardContainer>
      ) : (
        <NoDataInfo text="게시물이" />
      )}
      <CommunityDetailModal postId={postId} />
    </>
  );
}
