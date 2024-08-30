import React, { useEffect, useRef, useState } from 'react';
import * as S from './Modal.styles';
import ModalLayout from './ModalLayout';
import Button from '../Button';
import { Image } from '../../types/interface/Image';
import { deleteIcon, editIcon, likeBlankIcon, likeIcon, scrapBlankIcon, scrapIcon } from '../../assets/images'; // scrapIcon 추가

interface IProps {
  children?: React.ReactNode;
  title?: string;
  content?: string;
  detailText?: string[];
  imageUrlList?: Image[];
  edit?: boolean;
  social?: boolean;
  open?: boolean;
  onClose?: () => void;
  onEdit?: () => void;    
  onDelete?: () => void;  
  width?: string;
  isLiked?: boolean;
  isScrapped?: boolean;
  onLikeClick?: () => void;
  onScrapClick?: () => void;
}

export default function InfoModal({
  children,
  title,
  content,
  detailText,
  imageUrlList,
  open,
  onClose,
  onEdit,   
  onDelete,
  width,
  edit = false,
  social,
  isLiked,
  isScrapped,
  onLikeClick,
  onScrapClick,
}: IProps) {
  const [minHeight, setMinHeight] = useState<number>(0);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (imageUrlList) {
      const updateMinHeight = () => {
        const heights = imageRefs.current.map(img => img?.clientHeight || 0);
        setMinHeight(Math.min(...heights));
      };

      const handleLoad = () => updateMinHeight();

      imageRefs.current.forEach(img => {
        if (img) {
          img.addEventListener('load', handleLoad);
          if (img.complete) handleLoad(); 
        }
      });

      return () => {
        imageRefs.current.forEach(img => img?.removeEventListener('load', handleLoad));
      };
    }
  }, [imageUrlList]);

  return (
    <ModalLayout onClose={onClose} open={open} width={width}>
      {title && <S.Title>{title}</S.Title>}
      {imageUrlList && imageUrlList.length > 0 && (
        <S.ImageCarousel>
          {imageUrlList.map((image) => (
            <S.Image height={minHeight} key={image.id} src={image.url} alt={`Image ${image.id}`} />))}
        </S.ImageCarousel>
      )}
      {content && <S.Content>{content}</S.Content>}
      {detailText && detailText.map((text, index) => (
           <S.DetailContainer key={index}>
           <S.DetailButton>{text}</S.DetailButton>
         </S.DetailContainer>
      ))}
      {children}
      {edit ? (
        <S.Footer>
          <S.IconContainer>
            {onDelete && <S.ImageIcon src={deleteIcon} alt="Delete Icon" onClick={onDelete} />}
            {onEdit && <S.ImageIcon src={editIcon} alt="Edit Icon" onClick={onEdit} />}
          </S.IconContainer>
          <S.ModalButtons>
            <Button btnType="primary" btnClass="btn_square" onClick={onClose}>
              확인
            </Button>
          </S.ModalButtons>
        </S.Footer>
      ) : social ? (
        <S.Footer>
          <S.IconContainer>
          <S.ImageIcon
              src={isScrapped ? scrapIcon : scrapBlankIcon} 
              alt="Scrap Icon"
              onClick={onScrapClick} 
            />
            <S.ImageIcon
              src={isLiked ? likeIcon : likeBlankIcon} 
              alt="Like Icon"
              onClick={onLikeClick}
            />
          </S.IconContainer>
          <S.ModalButtons>
            <Button btnType="primary" btnClass="btn_square" onClick={onClose}>
              확인
            </Button>
          </S.ModalButtons>
        </S.Footer>
      ) : (
        <S.Arrange>
          <div className="parent">
            <div className="child">
              <S.ModalButtons className="info-modal-button">
                <Button btnType="primary" btnClass="btn_square" onClick={onClose}>
                  확인
                </Button>
              </S.ModalButtons>
            </div>
          </div>
        </S.Arrange>
      )}
    </ModalLayout>
  );
}
