import React from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: null,
      };
      this.handleSelectItem = this.handleSelectItem.bind(this);
    }

    handleSelectItem(active) {
      this.setState({
        active,
      });
    }

    render() {
      const {active} = this.state;

      return (
        <Component
          {...this.props}
          active = {active}
          onSelect={this.handleSelectItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    active: PropTypes.number,
  };

  return WithActiveItem;
};

withActiveItem.propTypes = {
  Component: PropTypes.element,
};

export default withActiveItem;
