import styled from "@emotion/styled";

export const Message = styled.p`
color:${props => props.theme.colors.secondary};
font-size: ${props => props.theme.fontSize.m};
font-weight: ${props => props.theme.fontWeight.m};
margin-top ${props => props.theme.spacing.mt}`