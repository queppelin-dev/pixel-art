import React from 'react';
import { connect } from 'react-redux';
import { toggleButton } from '../store/actions/actionCreators';

const ToggleButton = ({ toggle, toggleButton }) => (
  <button type="button" className="toggle" onClick={toggleButton}>
    {toggle ? 'ON' : 'OFF'}
  </button>
);

const mapStateToProps = state => ({
  toggle: state.present.get('toggle')
});

const mapDispatchToProps = dispatch => ({
  toggleButton: () => dispatch(toggleButton())
});

const ToggleButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
export default ToggleButtonContainer;
