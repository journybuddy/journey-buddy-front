import React from 'react';

import { SmileOutlined } from '@ant-design/icons';
import * as S from './NoDataInfo.styles';

interface IProps {
	text?: string;
}

export default function NoDataInfo({ text }: IProps) {
	return (
		<S.NoData>
			<SmileOutlined />
			<p>{`등록된 ${text} 없습니다.`}</p>
		</S.NoData>
	);
}
