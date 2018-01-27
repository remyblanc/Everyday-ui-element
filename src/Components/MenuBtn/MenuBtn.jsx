import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//actions
import { toggleMenu } from "../../redux/actions/index.js"

import theme from "../../lib/theme";

const BasicMenuBtn = (props) => {
  return (
    <div
      className={`${props.className} hamburger-icon ${props.store.basicReducer.showMenu ? 'active-hamburger' : null}`}
      onClick={() => props.toggleMenu()}>
      <div className="hamburger-line" />
      <div className="hamburger-line" />
      <div className="hamburger-line" />
    </div>
  );
};

const MenuBtn = styled(BasicMenuBtn)`
  position: fixed;
  right: 0;
  z-index: 99;
  margin: 20px;
  cursor: pointer;
  transition: 0.5s;
  
  .hamburger-line {
    background: #ffffff;
    width: 26px;
    height: 4px;
    margin-bottom: 5px;
    transition: 0.5s;
  }
   
  &:hover .hamburger-line:nth-child(1) {
    transform: translateY(2px);
  }
  &:hover .hamburger-line:nth-child(3) {
    transform: translateY(-2px);
  }
  
  &.active-hamburger {
    transform: rotate(360deg);
    transition: 0.5s;
  }
  
  &.active-hamburger .hamburger-line:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  &.active-hamburger .hamburger-line:nth-child(2) {
    transform: scale(0);
  }
  &.active-hamburger .hamburger-line:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBtn);