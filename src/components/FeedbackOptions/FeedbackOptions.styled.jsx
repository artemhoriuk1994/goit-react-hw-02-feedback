import styled from "@emotion/styled";

export const BtnList = styled.ul`
    list-style:none;
    padding:0;
        display:flex;
        gap:10px;
        
`
export const BtnItem = styled.li`
`


export const Btn = styled.button`
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.sm};
 & + button {
    margin-left: ${props => props.theme.spacing.ml}
 };
 &:hover, :focus {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.btn};
 };`