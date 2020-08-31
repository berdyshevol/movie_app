import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getNumber, getUsersSelector } from '../../redux/selectors';
import { numberPlus, numberMinus } from '../../redux/actions';

class Blank extends Component {

  render() {
    const { numberMinus, numberPlus, number, users } = this.props;
    return (
      <div>
        <button onClick={() => numberPlus()}>+</button>
        <button onClick={() => numberMinus()}>-</button>
        <h2>{number}</h2>
        {users.map(u => (
          <ul>
            <li>{u.name}</li>
            <li>{u.year}</li>
            <li>{u.cite}</li>
          </ul>
        ))}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  number: getNumber(state),
  users: getUsersSelector(state),
});

let mapDispatchToProps = dispatch => ({
  numberPlus: () => dispatch(numberPlus()),
  numberMinus: () => dispatch(numberMinus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blank);