import * as React from 'react';
import styled, {css} from 'styled-components';

//region [[ Styles ]]

const SecondaryBarView = styled.div`
  ${(props: {}) => css`
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    height: 30px;
    color: white;
    background-color: cornflowerblue;    
`};
`;

const Button = styled.button`
  ${(props: {}) => css`
     margin-right: 10px;
`};
`;

const CheckBox = styled.input`
  ${(props: {}) => css`
     margin-right: 3px;
`};
`;

const Searchbox = styled.input`
  ${(props: {}) => css`
     margin-left: 10px;
    font-size: 14px;
    color: #5a6674;
    width: 195px;
    height: 20px;
    border: none;
    appearance: none;
    outline: none;
`};
`;

const SearchArea = styled.div`
  ${(props: {}) => css`
   display: flex;
   margin-left: 5px;
   align-items: center;
`};
`;

const Buttons = styled.div`
  ${(props: {}) => css`
     display: flex;
     margin-right: 20px;
     align-items: center;
`};
`;

const Label = styled.div`
  ${(props: {}) => css`
    color: white;
    font-size: 14px;
`};
`;

//endregion [[ Styles ]]

//region [[ Props ]]

export interface Props {
  className?: string;
  setFilter: (value: string) => void;
  grayscale: boolean;
  setGrayscale: () => void;
  loadMorePictures: () => void;
}

//endregion [[ Props ]]

//region [[ Functions ]]
//endregion [[ Functions ]]

export const SecondaryBar = ({ ...props }: Props) => {
  return <SecondaryBarView className={props.className}>
    <SearchArea>
      <Label>Search</Label>
      <Searchbox type={"text"} placeholder={"search anything..."} onChange={(value) => {
        props.setFilter(value.target.value);
      }}></Searchbox>
    </SearchArea>
    <Buttons>
      <Button onClick={props.loadMorePictures}>More Images</Button>
      <CheckBox type={"checkbox"} onChange={() => {
        props.setGrayscale();}} checked={props.grayscale}/>
      <Label>Grayscale</Label>
    </Buttons>
  </SecondaryBarView>;
}
