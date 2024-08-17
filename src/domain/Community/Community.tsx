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

export default function Community() {
  const { modalOpen } = useModal();
  const { communityList } = useCommunityList();
  const [postId, setPostId] = useState<number>();

  /** 포스트 상세 조회 */
	const onOpenPost = useCallback(
		(seq?: number) => {
			setPostId(seq);
      modalOpen();
    }, [setPostId],
	);

  return (
      <>
          <SearchBar />
          {communityList && communityList.content.length > 0 ? (
              <S.CardContainer>
                  {communityList.content.map((item: CommunityItem) => (
                      <S.CardItem key={item.postId} onClick={() => onOpenPost(item.postId)}>
                          <Card
                              cover={<S.RoundedImage src={item.imageUrl || defaultImage} alt={item.title} />}
                              bordered={false}
                          >
                              <S.Title>{item.title}</S.Title>
                              <S.Host>{item.writerName}</S.Host>
                              {item.likeCount && <S.Price>{item.likeCount}</S.Price>}
                              {item.location && <S.Available>{item.location}</S.Available>}
                          </Card>
                      </S.CardItem>
                  ))}
              </S.CardContainer>
          ) : (
              <NoDataInfo text="게시물이 " />
          )}
          <CommunityDetailModal postId={postId} />
      </>
  );
}
