import styled from '@emotion/styled';


export const LayoutWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 1280px;
	min-height: 100vh;
`;
export const InnerWrap = styled.div`
	width: calc(100% - 10%);
	display: flex;
	align-items: center;
	justify-content: space-between;
	.logo-menu {
		display: flex;
		align-items: center;
	}
`;

export const Header = styled.div`
	width: 100%;
	height: 30px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.div`
	width: 200px;
	flex: none;
	margin-right: 80px;
`;

export const Container = styled.div`
	width: 100%;
	min-height: 500px;
	margin: 55px 0;
	background: rgba(255, 255, 255, 0.6);
	border: 2px solid #ffffff;
	backdrop-filter: blur(15px);
	border-radius: 20px;
	padding: 30px;
	box-sizing: border-box;
`;

export const RightButton = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 14px;
	button {
		display: flex;
		align-items: center;
		padding: 5px 7px;
		font-size: 15px;
		font-weight: 700;
		line-height: 23px;
		svg {
			position: relative;
			top: 1px;
			width: 16px;
			height: 16px;
			margin-right: 7px;
		}
	}
`;
