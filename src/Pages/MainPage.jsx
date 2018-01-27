import React from 'react';
import styled from 'styled-components';

import {theme, gradient, fontSize} from '../lib/theme';

//Components
import AnimatedRouter from '../Components/AnimatedRouter/AnimatedRouter';
import Search from '../Components/Search/Search';

class BasicMainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let i = 0,
    h1 = "Welcome, to my everyday UI elements kit";
    h1 = h1.split("");
    let typing = setInterval(() => {
      h1[i] ? this.refs.h1.innerHTML += h1[i++] : clearInterval(typing);
    }, 100);
  }

  render() {
    return (
      <AnimatedRouter>
        <div className={this.props.className}>
          <div className="main-page-welcome-element" ref="div">
            <h1 ref="h1" />
            <Search />
          </div>
        </div>
      </AnimatedRouter>
    );
  }
}

const MainPage = styled(BasicMainPage)`
  ${gradient('linear','-125deg', '#989fde', '#38a6c3')}
  color: #ffffff;
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  
  .main-page-welcome-element {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    box-sizing: border-box;
    transform: translateY(-50%);
    
    h1 {
      display: inline-block;
      position: relative;
      margin-bottom: 25px;
      
      &:after {
        content: '';
        position: absolute;
        right: -8px;
        top: 0;
        background: white;
        width: 5px;
        height: 100%;
        animation: sparkling 0.8s infinite;
        
        @keyframes sparkling {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }
    }
    
    .search {
      width: 500px;
      margin: auto;
    }
  }
`;

export default MainPage;