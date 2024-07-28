import styled from "@emotion/styled";

export const BackgroundWrap = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #F6F6F6;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;

    @media screen and (max-width: 767px) {
		display: none;
	}

	.figure {
        position: absolute;
        animation-name: move; 
        animation-duration: 30s; 
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: normal; 
        img {
            width: 60%; 
            height: auto; 
            object-fit: cover;
        }
	}

`