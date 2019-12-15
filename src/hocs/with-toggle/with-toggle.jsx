import React from 'react';
import PropTypes from 'prop-types';

const withToggle = (Component) => {
  class WithToggle extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
      this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      const isOpen = this.state.isOpen;

      return (
        <Component
          {...this.props}
          isOpen = {isOpen}
          handleToggle={this.handleToggle}
        />
      );
    }
  }

  WithToggle.propTypes = {
    active: PropTypes.number,
  };

  return WithToggle;
};

withToggle.propTypes = {
  Component: PropTypes.element,
};

export default withToggle;
