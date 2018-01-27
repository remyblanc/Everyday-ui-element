import React from 'react';
import styled from "styled-components";
import { connect } from "react-redux";

import { onSearch } from '../../redux/actions';

import { theme, macbook, flexContainer, fontSize } from "../../lib/theme";

// import SearchResult from "../SearchResult/SearchResult";

const BasicSearch = (props) => {
  return(
    <div className={`${props.className} search`}>
      <input
        type="text"
        data-value=""
        onChange={
          (e) => {
            e.target.setAttribute('data-value', e.target.value);
            e.target.value.length >= '3' ? (
              props.onSearch(e.target.value)
            ) : props.onSearch(null);
          }
        }
        onKeyUp={(e) => e.target.setAttribute('data-value', e.target.value)}
      />
      <label>
        <span className="material-icons">search</span>
        <span>Search</span>
      </label>
      <div className="glass-effect" />
    </div>
  );
};

const SearchResults = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  text-align: left;
  width: 100%;
  z-index: 2;
`;

const Search = styled(BasicSearch)`
  position: relative;
  //background: rgba(255,255,255,0.1);
  border-radius: 4px;
  min-width: 400px;
  box-shadow: inset 2px 2px 2px rgba(1,1,1,0.3);
  overflow: hidden;
  
  .glass-effect {
    filter: blur(10px);
    position: absolute;
    left: -20%;
    top: -20%;
    width: 150%;
    height: 150%;
    z-index: 1;
    background: rgba(255,255,255,0.1);
    transition: 0.3s;
  }
  
  label {
    position: absolute;
    z-index: 1;
    transition: 0.3s;
    top: 16px;
    left: 15px;
    ${flexContainer('center','center','center')}
    
    span:not(.material-icons) {
      margin: -1px 0 0 3px;
    }
  }
  
  input[type=text] {
    padding: 14px 40px 14px;
    background: transparent;
    color: #ffffff;
    ${theme.fonts.TitilliumWebRegular}
    ${fontSize(16, 24)}
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    top: 0;
    transition: 0.3s;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    
    &:focus + label + .glass-effect {
      background: rgba(255,255,255,0.15);
    }
    
    &:focus + label span:not(.material-icons), &:not([data-value=""]) + label span:not(.material-icons) {
      opacity: 0;
    }
  }
`;


function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (searchData) => dispatch(onSearch(searchData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);