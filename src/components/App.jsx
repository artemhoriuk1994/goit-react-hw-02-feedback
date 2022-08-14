import { Component } from "react";
import { Box } from "./Box.Styled";
import { GlobalStyles } from "./GlobalStyles";

import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };



  // setCountFeedback = (event) => {
  //   if (event.target.value === 'good') {
  //     this.setState(prevState => ({ good: prevState.good + 1 }))
  //   } else if (event.target.value === 'neutral') {
  //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
  //   } else { this.setState(prevState => ({ bad: prevState.bad + 1 })) }
  // }

  setCountFeedback = (type) => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }))
  }

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, prev) => acc + prev, 0)
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const { countTotalFeedback } = this;
    return Math.round((good / countTotalFeedback()) * 100);
  }


  render() {
    const { good, neutral, bad } = this.state
    const { setCountFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flextStart"
        listStyle="none"
        p="24px">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedBack={setCountFeedback} options={Object.keys(this.state)} />
          {countTotalFeedback() ? (
            <Section title={'Statistics'}>
              <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
            </Section>) : (<Notification message={'There is no feedback'} />)}
        </Section>
        <GlobalStyles />
      </Box>
    )
  }
};
