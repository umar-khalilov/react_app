import React from 'react';
import styles from './FlexCon.module.scss';
import PropTypes from 'prop-types';

const FlexContainer = props => {
  const { children, ai, jc, fd } = props;
  const innerStyles = {
    alignItems: ai,
    justifyContent: jc,
    flexDirection: fd,
  };
  return (
    <div className={styles.container} style={innerStyles}>
      {children}
    </div>
  );
};

FlexContainer.propTypes = {
  children: PropTypes.element.isRequired,
  ai: PropTypes.string.isRequired,
  jc: PropTypes.string.isRequired,
  fd: PropTypes.string.isRequired,
};

export default FlexContainer;
