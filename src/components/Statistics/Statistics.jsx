
import React from "react";
import { StatBox, StatItem } from "./Statistics.styled";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatBox>
            <StatItem>Good:{good}</StatItem>
            <StatItem>Neutral:{neutral}</StatItem>
            <StatItem>Bad:{bad}</StatItem>
            <StatItem>Total: {total}</StatItem>
            <StatItem>Positive feedback: {positivePercentage}%</StatItem>
        </StatBox>

    )
}

export default Statistics;