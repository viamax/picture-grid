
import * as React from 'react';
import styled, {css} from 'styled-components';
import {PicsumPhotoData} from "../../_domain/picsumPhotoData";



//region [[ Styles ]]

const GridView = styled.div`
  ${(props: {}) => css`
    margin-top: 20px;
   display:flex;
   flex-wrap: wrap;
   align-items: center;   
    justify-content: center;
`};
`;

const PictureItem = styled.div`
  ${(props: {}) => css`
    width: 300px;   
    margin-right: 20px;
    margin-bottom: 20px;        
`};
`;

const Picture = styled.img`
  ${(props: {}) => css`
    width: 300px;
    height: 300px;    
`};
`;

const Author = styled.div`
  ${(props: {}) => css`
      margin-left: 10px;
`};
`;

//endregion [[ Styles ]]

//region [[ Props ]]

export interface Props {
  pictures: PicsumPhotoData[];
  grayscale: boolean
  className?: string;
}

//endregion [[ Props ]]

//region [[ Functions ]]
//endregion [[ Functions ]]

export const Grid = ({ ...props }: Props) => {
  return <GridView className={props.className}>

    {props.pictures && props.pictures.length > 0 && props.pictures.map(photo => (
        <PictureItem key={photo.id}>
          <Picture src={photo.download_url + (props.grayscale ? "?grayscale" : "")} alt={photo.author}/>
          <Author>{photo.author}</Author>
        </PictureItem>
    ))}


  </GridView>;
}
