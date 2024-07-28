import React, { ReactNode, CSSProperties } from 'react';

import * as S from './Button.styles';

interface IProps {
	onClick?: React.MouseEventHandler<HTMLElement> | undefined;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	btnClass?: 'btn' | 'btn_small' | 'btn_square';
	btnType?: 'primary' | 'edit' | 'delete' | 'report';
	disabled?: boolean;
	style?: CSSProperties;
	children?: ReactNode;
}

export default function Button({
	onClick,
	type = 'button',
	btnClass = 'btn',
	btnType,
	disabled,
	style,
	children,
	className,
}: IProps) {
	return (
		<S.BasicButton
			onClick={onClick}
			type={type}
			disabled={disabled}
			btnClass={btnClass}
			btnType={btnType}
			style={style}
			className={className}
		>
			{children}
		</S.BasicButton>
	);
}
