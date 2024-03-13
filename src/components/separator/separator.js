import SeparatorWhiteSvg from './icon/Separator-white.svg';
import SeparatorBlackSvg from './icon/Separator-black.svg';
import LineWhiteSvg from './icon/Line-white.svg';
import LineBlackSvg from './icon/Line-black.svg';

import './separator.scss';

const Separator = ({color, marginTop}) => {
    return (
        <div className="separator" style={{marginTop: marginTop}}>
            <img src={ color === "white" ? LineWhiteSvg : LineBlackSvg } alt="Line icon" />
            <img src={ color === "white" ? SeparatorWhiteSvg : SeparatorBlackSvg } alt="Logo icon" className='separator-icon' />
            <img src={ color === "white" ? LineWhiteSvg : LineBlackSvg } alt="Line icon" />
        </div>
    );
};

export default Separator;