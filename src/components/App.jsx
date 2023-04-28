import React from 'react';
import { Container } from './App.styled';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
// import Feedback from './Feedback/Feedback';

class App extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  countFeedback = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good / this.countTotalFeedback(this.state)) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <h1>Please Leave Feedback</h1>

        <Feedback
          options={Object.keys(this.state)}
          feedbackClick={this.countFeedback}
        ></Feedback>

        <h2>Statistics</h2>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(this.state)}
          percent={this.countPositiveFeedbackPercentage(this.state)}
        ></Statistics>
      </Container>
    );
  }
}

// export const App = () => {
//   return (
//     <Container>
//       <h1>Please Leave Feedback</h1>
//       <Feedback />
//     </Container>
//   );
// };

export default App;
