import React, { useEffect, useState } from 'react';
import InfoModal from "../../../components/Modal/InfoModal";
import useModal from "../../../hooks/useModal";
import { useCommunityDetail } from '../hooks/useCommunityDetail';
import { usePostDelete } from '../hooks/usePostDelete';  
import { useCommentAdd } from '../hooks/useCommentAdd';
import { SyncLoader } from 'react-spinners';
import { getStoredUser } from '../../../utils/userStorage';
import ConfirmModal from '../../../components/Modal/ConfirmModal';
import PostFormModal from './PostFormModal';
import { Post } from '../../../types/interface/Post';
import * as S from '../Community.styles';
import { Comment } from '../../../types/interface/Comment';
import Button from '../../../components/Button';
import { useRecoilState } from 'recoil';
import { profileUrlState } from '../../../recoil/atoms/productState';
import PersonIcon from '@mui/icons-material/Person';
import { useScrapAdd } from '../hooks/useScrapAdd';
import { useLikeAdd } from '../hooks/useLikeAdd';
import { useScrapDelete } from '../hooks/useScrapDelete';
import { useLikeDelete } from '../hooks/useLikeDelete';

interface IProps {
  postId?: number;
}

export default function CommunityDetailModal({ postId }: IProps) {
  const { isOpen, onClose, confirmModalOpen, isConfirmOpen, onConfirmClose } = useModal();
  const { communityDetail, isLoading, error } = useCommunityDetail(postId);
  const user = getStoredUser();
  const isAuthorized = user?.nickname === communityDetail?.writer;
  const { mutate: deletePost } = usePostDelete();  
  const { secondmodalOpen } = useModal();
  const [initialValues, setInitialValues] = useState<Post | undefined>(undefined);
  const [profileUrl, ] = useRecoilState(profileUrlState); 
  const [comment, setComment] = useState<string>('');  
  const { mutate: addComment } = useCommentAdd(); 
  const { mutate: addScrap } = useScrapAdd(); 
  const { mutate: deleteScrap } = useScrapDelete(); 
  const { mutate: deleteLike } = useLikeDelete(); 
  const { mutate: addLike } = useLikeAdd(); 
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isScrapped, setIsScrapped] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && communityDetail) {
      setIsLiked(communityDetail.liked);
      setIsScrapped(communityDetail.scrapped);
    }
  }, [isOpen, communityDetail]);  
  
  const handleLikeClick = () => {
    if (isLiked || !postId) return; 
    addLike(postId);
    setIsLiked(true);
  };

  const handleUnlikeClick = () => {
    if (!isLiked || !postId) return; 
    deleteLike(postId);
    setIsLiked(false);
  };

  const handleScrapClick = () => {
    if (isScrapped || !postId) return; 
    addScrap(postId); 
    setIsScrapped(true); 
  };

  const handleUnScrapClick = () => {
    if (!isScrapped || !postId) return; 
    deleteScrap(postId); 
    setIsScrapped(false); 
  };

  const handleClose = () => {
    setIsLiked(false); 
    setIsScrapped(false); 
    onClose && onClose(); 
  };

  const handleDelete = () => {
    if (postId) {
      deletePost(postId, {
        onSuccess: () => {
          onConfirmClose();
          onClose();
        },
        onError: (error) => {
          console.error('Failed to delete post:', error);
        }
      });
    }
  };

  const handleEdit = () => {
    setInitialValues({
      postId: communityDetail.postId,
      title: communityDetail.title,
      location: communityDetail.location,
      content: communityDetail.content,
      images: communityDetail.imageUrlList,
    });
    secondmodalOpen();
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (postId && comment) {
      addComment({ postId, comment }, {
        onSuccess: () => {
          setComment('');  
        },
        onError: (error) => {
          console.error('Failed to add comment:', error);
        }
      });
    }
  };

  return (
    <>
      <InfoModal
        open={isOpen}
        onClose={handleClose}
        edit={isAuthorized}
        social={!isAuthorized}
        isLiked={isLiked}
        isScrapped={isScrapped}
        onScrapClick={isScrapped ? handleUnScrapClick : handleScrapClick} 
        onLikeClick={isLiked ? handleUnlikeClick : handleLikeClick} 
        title={communityDetail?.title}
        content={communityDetail ? communityDetail.content : <SyncLoader color='#f06292' cssOverride={{ padding: '100px 0 50px 0' }}/>}
        detailText={communityDetail ? [
          communityDetail.location,
          communityDetail.writer,
          `${new Date(communityDetail.createdAt).toLocaleString()} 작성`,
          `좋아요 ${communityDetail.likeCount}`,
          `댓글 ${communityDetail.commentCount}`,
        ] : undefined}
        imageUrlList={communityDetail?.imageUrlList}
        onEdit={handleEdit}  
        onDelete={confirmModalOpen} 
        children={communityDetail && (
          <S.CommentsSection>
            <S.CommentsTitle>댓글 {communityDetail.commentCount}</S.CommentsTitle>
            {communityDetail.commentList?.map((comment: Comment) => (
              <S.Comment key={comment.commentId}>
                <S.CommentNickname>{comment.nickname}</S.CommentNickname>
                <S.CommentContent>{comment.content}</S.CommentContent>
                <S.CommentDate>{new Date(comment.createdAt).toLocaleString()}</S.CommentDate>
              </S.Comment>
            ))}
            <S.AddCommentSection>
              <S.ProfilePicWrap  profileUrl={profileUrl}> {!profileUrl && <S.StyledAvatar icon={<PersonIcon />} />}</S.ProfilePicWrap>
              <S.CommentInput 
                placeholder="댓글을 입력하세요..." 
                value={comment} 
                onChange={handleCommentChange}  
              />
              <Button btnType="edit" btnClass="btn_square" onClick={handleAddComment}>
                추가
              </Button>
            </S.AddCommentSection>
          </S.CommentsSection>
        )}
      />
      
      <PostFormModal
        initialValues={initialValues}
        setInitialValues={setInitialValues}
      />
      <ConfirmModal
        title="삭제 하시겠습니까?"
        okText="삭제"
        open={isConfirmOpen}
        onClose={onConfirmClose}
        onOk={handleDelete}
      />
    </>
  );
}
