import React from 'react';
import styled from "styled-components";

import theme from "../../lib/theme";
import {toggleMenu} from "../../redux/actions";
import {connect} from "react-redux";

const BasicMenu= (props) => {
  return (
    <div
      className={`${props.className} ${props.store.basicReducer.showMenu ? 'show-menu' : null}`}>
    </div>
  );
};

const Menu = styled(BasicMenu)`
  position: fixed;
  left: 0;
  z-index: 98;
  width: 100%;
  height: 100%;
  background: #3a3a3c;
  opacity: 0;
  transition: 0.3s;
  
  &.show-menu {
    opacity: 1;
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