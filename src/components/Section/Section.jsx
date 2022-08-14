import React from "react";
import { Title } from "./Section.styled";

const Section = ({ title, children }) => {
    return (
        <>
            <Title>{title}</Title>
            {children}
        </>
    )
}



export default Section;