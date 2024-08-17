import React from 'react';
import InfoModal from "../../../components/Modal/InfoModal";
import useModal from "../../../hooks/useModal";
import { useCommunityDetail } from '../hooks/useCommunityDetail';

interface IProps {
  postId?: number;
}

export default function CommunityDetailModal({ postId }: IProps) {
  const { isOpen, onClose } = useModal();
  const { communityDetail, isLoading, error } = useCommunityDetail(postId);

  return (
    <InfoModal
      open={isOpen}
      onClose={onClose}
      title={communityDetail?.title}
      content={communityDetail?.content}
      detailText={[
        `Location: ${communityDetail?.location}`,
        `Author: ${communityDetail?.writer}`,
        `Created At: ${new Date(communityDetail?.createdAt).toLocaleString()}`,
        `Likes: ${communityDetail?.likeCount}`,
        `Comments: ${communityDetail?.commentCount}`,
      ]}
      imageUrlList={communityDetail?.imageUrlList}
    />
  );
}
