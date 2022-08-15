import { Btn, BtnItem, BtnList } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types'
const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
    return (<BtnList>
        {options.map((option) => {
            return (
                <BtnItem key={option}>
                    <Btn onClick={() => onLeaveFeedBack(option)} type="button">{option.charAt(0).toUpperCase() + option.slice(1)}
                    </Btn>
                </BtnItem>
            );
        })}
    </BtnList>)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedBack: PropTypes.func.isRequired
}

export default FeedbackOptions;