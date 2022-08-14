import { Btn, BtnItem, BtnList } from "./FeedbackOptions.styled";
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

export default FeedbackOptions;