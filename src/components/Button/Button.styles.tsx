import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const btn = css`
	width: 106px;
	height: 36px;
`;
export const btn_small = css`
	padding: 3px 12px;
`;
export const btn_square = css`
	padding: 8px 15px;
	font-size: 14px;
	border-radius: 5px;
`;

export const deleteType = css`
	color: #f06292;
	border: 1.5px solid #f06292;
`;
export const reportType = css`
	color: #fff;
	background: #f06292;
	border: 1.5px solid #f06292;
`;
export const primaryType = css`
	color: #fff;
	background: #f06292;
	border: 1.5px solid #f06292;
`;
export const editType = css`
	color: #fff;
	background: #f06292;
	border: 1.5px solid #f06292;
`;

export const BasicButton = styled.button<{
	btnClass: 'btn' | 'btn_small' | 'btn_square';
	btnType?: 'primary' | 'edit' | 'delete' | 'report';
}>`
	color: #f06292;
	font-weight: 500;
	border: 1.5px solid #f06292;
	border-radius: 30px;
	background: none;
	box-sizing: border-box;
	transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	&:hover {
		opacity: 0.85;
	}
	&:disabled {
		color: #fff;
		border: 1.5px solid #f06292;
		background: #f06292;
		cursor: not-allowed;
		&:hover {
			opacity: 1;
		}
	}

	&.green-modal-button {
		&:hover {
			background-color: #f06292;
			color: #f06292;
		}
	}

	&.red-modal-button {
		&:hover {
			background-color: #f06292;
			color: #f06292;
		}
	}

	${(props) => props.btnClass === 'btn' && btn};
	${(props) => props.btnClass === 'btn_small' && btn_small};
	${(props) => props.btnClass === 'btn_square' && btn_square};

	${(props) => props.btnType === 'primary' && primaryType};
	${(props) => props.btnType === 'edit' && editType};
	${(props) => props.btnType === 'delete' && deleteType};
	${(props) => props.btnType === 'report' && reportType};
`;
