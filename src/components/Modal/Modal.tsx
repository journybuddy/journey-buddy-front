import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import * as S from './Modal.styles';
import ModalLayout from './ModalLayout';

interface IProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  open?: boolean;
  onClose?: () => void;
  onOk?: () => void;
  width?: string;
  okText?: string;
  cancleText?: string;
  disabled?: boolean;
}

export default function Modal({
  children,
  title,
  subtitle,
  open,
  onClose,
  onOk,
  width,
  okText,
  cancleText,
  disabled = false,
}: IProps) {
  const { t } = useTranslation('index');
  
  return (
    <ModalLayout onClose={onClose} open={open} width={width}>
      <div style={{ paddingBottom: '30px' }}>
        {title && <p className="modal-title">{title}</p>}
        {subtitle && <p className="modal-sub-title">{subtitle}</p>}
      </div>
      <S.ChildrenContainer>
        {children}
      </S.ChildrenContainer>
      <S.ModalButtons>
        <Button btnType="primary" onClick={onOk} disabled={disabled}>
          {t(okText ? okText : '등록')}
        </Button>
        <Button onClick={onClose}>{t(cancleText ? cancleText : '취소')}</Button>
      </S.ModalButtons>
    </ModalLayout>
  );
}
