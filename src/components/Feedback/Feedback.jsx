import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Item, List } from './Feedback.styled';

export const Feedback = ({ options, feedbackClick }) => {
  return (
    <List>
      {options.map(value => (
        <Item key={value}>
          <Btn type="button" value={value} onClick={() => feedbackClick(value)}>
            {value}
          </Btn>
        </Item>
      ))}
    </List>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  // onLeaveFeedback: PropTypes.func.isRequired,
};

// import { Button } from './Feedback.styled';

// class Feedback extends React.Component {
//   static defaultProps = {
//     initialGood: 0,
//     initialNeutral: 0,
//     initialBad: 0,
//   };

//   state = {
//     good: this.props.initialGood,
//     neutral: this.props.initialNeutral,
//     bad: this.props.initialBad,
//   };

//   feedback = e => {
//     console.log(e); // good
//     this.setState({ [e]: this.state[e] + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Please Leave Feedback</h1>
//         <Button type="button" onClick={this.feedback}>
//           {}
//         </Button>
//         <Button type="button"></Button>
//         <Button type="button"></Button>

//         <h2>Statistic</h2>
//         <p>Good: {this.state.good}</p>
//         <p>Neutral: {this.state.neutral}</p>
//         <p>Bad: {this.state.bad}</p>
//       </div>
//     );
//   }
// }

// export default Feedback;
