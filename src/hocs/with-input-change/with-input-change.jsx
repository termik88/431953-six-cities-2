import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {isValidationEmail} from "../../until.js";

const withInputChange = (Component) => {
  class WithInputChange extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
      };

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(active) {
      this.setState({[active.target.name]: active.target.value});
    }

    isValidationInput() {
      return isValidationEmail(this.state.email) && this.state.password;
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          isValidationInput = {this.isValidationInput()}
          onInputChange = {this.handleInputChange}
        />
      );
    }
  }

  WithInputChange.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
  };

  return WithInputChange;
};

export default withInputChange;
