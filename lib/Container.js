/**
 * Container
 *
 */

import React from 'react';

class Container extends React.Component {

  constructor(props) {
    super(props);

    // component initial state
    this.state = {
    };

    // bind class methods
    // this.bindedMethod = this.bindedMethod.bind(this);
  }

  render() {
    return (
      <div>
          <h1>react-bootstrap-chat</h1>
          <p>
            This is a dev test to verify the dev workflow is setup.
          </p>
      </div>
    );
  }
}

Container.displayName = 'Container';

Container.propTypes = {

};

Container.defaultProps = {

};

export default Container;
