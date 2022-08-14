import styled from "@emotion/styled";

export const StatBox = styled.ul`
margin-top: ${props => props.theme.spacing.mt}
`

export const StatItem = styled.li`
font-size: ${props => props.theme.fontSize.m};
font-weight: ${props => props.theme.fontWeight.m};
color: ${props => props.theme.colors.secondary};
list-syle-type: none;`