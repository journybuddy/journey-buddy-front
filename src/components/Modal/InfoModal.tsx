import React from 'react';
import * as S from './Modal.styles';
import ModalLayout from './ModalLayout';
import Button from '../Button';

interface IProps {
	children?: React.ReactNode;
	title?: string;
	content?: string;
	detailText?: string[];
	imageUrlList?: string[];
	open?: boolean;
	onClose?: () => void;
	width?: string;
}

export default function InfoModal({
	children,
	title,
	content,
	detailText,
	imageUrlList,
	open,
	onClose,
	width,
}: IProps) {
	return (
		<ModalLayout onClose={onClose} open={open} width={width}>
			{title && <S.Title>{title}</S.Title>}
			{imageUrlList && imageUrlList.length > 0 && (
				<S.ImageCarousel>
					{imageUrlList.map((url, index) => (
						<S.Image key={index} src={url} alt={`Image ${index + 1}`} />
					))}
				</S.ImageCarousel>
			)}
			{content && <S.Content>{content}</S.Content>}
			{detailText && detailText.map((text, index) => (
				<S.DetailText key={index}>{text}</S.DetailText>
			))}
			{children}
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
		</ModalLayout>
	);
}
