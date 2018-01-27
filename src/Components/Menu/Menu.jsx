import React from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

//actions
import { toggleMenu } from "../../redux/actions";

import { theme, fontSize } from "../../lib/theme";

const BasicMenu= (props) => {
  return (
    <div className={`${props.className} ${props.store.basicReducer.showMenu ? 'show-menu' : null}`}>
      <Link to="/">Main Page</Link>
      <Link to="/toggle-switches">Toggle Switches</Link>
    </div>
  );
};

const Menu = styled(BasicMenu)`
  position: fixed;
  right: -227px;
  z-index: 98;
  transition: 0.6s cubic-bezier(.75,-0.5,0,1.75);
  top: 65px;
  color: #ffffff;
  text-align: right;
  width: 227px;
  
  &.show-menu {
    opacity: 1;
    right: 23px;
  }
  
  a {
    display: inline-block;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    ${theme.fonts.TitilliumWebBold}
    ${fontSize(20, 26)}
  }
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);