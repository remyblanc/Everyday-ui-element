import React from 'react';
import styled from 'styled-components';

import theme from "../lib/theme";

//Components
import AnimatedRouter from "../Components/AnimatedRouter/AnimatedRouter";

const BasicMainPage = (props) => {
  return (
    <AnimatedRouter>
      <div className={props.className}>
        search
      </div>
    </AnimatedRouter>
  );
};

const MainPage = styled(BasicMainPage)`
  background: ${theme.colors.menuColor};
  color: #ffffff;
  height: 100vh;
`;

export default MainPage;