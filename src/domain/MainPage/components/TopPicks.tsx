import React, { useState, useCallback } from 'react';

import { defaultTopImage } from '../../../assets/images';
import { TopPickItem } from '../../../types/interface/TopPickItem';
import useModal from '../../../hooks/useModal';
import * as S from '../MainPage.styles';
import { useTopPicks } from '../hooks/useTopPicks';
import CommunityDetailModal from '../../../domain/Community/component/CommunityDetailModal';
import NoDataInfo from '../../../components/NoDataInfo/NoDataInfo';

export default function TopPicks() {
	const { modalOpen } = useModal();
	const { topPicks } = useTopPicks();
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
		<S.TopPicksWrap>
		  <S.TopPicksHeading>🏝️ TOP3 인기 게시글</S.TopPicksHeading>
		  <S.TopPicksGrid>
		  {topPicks && topPicks.length > 0 ? (
			topPicks?.map((pick : TopPickItem) => (
			  <S.TopPickCard key={pick.postId} image={pick?.imageUrl || defaultTopImage} onClick={() => onOpenPost(pick.postId)}>
				<S.TopPickInfo>
				  <S.TopPickCategory>{pick.location}</S.TopPickCategory>
				  <S.TopPickTitle>{pick.title}</S.TopPickTitle>
				  <S.TopPickPrice>{pick.likeCount}</S.TopPickPrice>
				</S.TopPickInfo>
			  </S.TopPickCard>
			))) : (
				<NoDataInfo text="게시물이 " />
			)}
		  </S.TopPicksGrid>
		</S.TopPicksWrap>
		<CommunityDetailModal postId={postId} />
		</>
	  );
}