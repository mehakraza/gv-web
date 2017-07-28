import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './styles/signUpStyle.scss';


class FlightDetails extends Component {
constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  },

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <h2>Plan a Flight</h2>

        <form style={{border:"1px solid #ccc"}}>
          <div className="container">
            <label><b>Departure Date</b></label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />;
            <input type="text" placeholder="Departure Date" name="date" required />

            <label><b>Departure Time</b></label>
            <input type="" placeholder="Enter Password" name="psw" required />

            <label><b>Departure Airport</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

            <label><b>Arrival Airport</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
            <input type="checkbox" checked="checked" /> <label>Remember me </label>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

            <div className="clearfix">
              <button type="submit" className="signupbtn">Sign Up</button>
              <button type="button" className="cancelbtn">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Signup;
