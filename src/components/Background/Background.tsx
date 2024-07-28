import { BackgroundWrap  } from "./Background.styles";
import { bgIcon1 } from "../../assets/images";

export default function Background() {
    return (
        <BackgroundWrap>
            	<div className="figure">
				<img src={bgIcon1} alt="" />
			</div>
        </BackgroundWrap>
    )
}