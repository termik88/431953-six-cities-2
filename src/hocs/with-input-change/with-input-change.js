import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withInputChange = (Component) => {
  class WithInputChange extends PureComponent {
    constructor(props) {
      super(props);

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(active) {
      this.setState({[active.target.name]: active.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
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
