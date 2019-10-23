
import * as React from 'react';
import styled, {css} from 'styled-components';

//region [[ Styles ]]

const TopBarView = styled.div`
  ${(props: {}) => css`
      background-color: darkblue;
      height: 80px;
      flex-shrink: 0;
      display: flex;
`};
`;

const Title = styled.div`
  ${(props: {}) => css`
        color: white;
        font-weight: bold;
        font-size: 30px;
        margin-left: 20px;
        margin-top: 20px;
`};
`;

//endregion [[ Styles ]]

//region [[ Props ]]

export interface Props {
  className?: string;
}

//endregion [[ Props ]]

//region [[ Functions ]]
//endregion [[ Functions ]]

export const TopBar = ({ ...props }: Props) => {
  return <TopBarView className={props.className}>
    <Title>Picture Grid</Title>
  </TopBarView>;
}
