import * as React from 'react';
import styled, {css} from 'styled-components';
import {useState} from "react";
import {Grid} from "./grid/Grid";
import {TopBar} from "./topBar/TopBar";
import {SecondaryBar} from "./secondaryBar/SecondaryBar";
import {PicsumPhotoData} from "../_domain/picsumPhotoData";
import {PictureGridStore} from "./store/PictureGridStore";
import { observer } from "mobx-react";

//region [[ Styles ]]

const PictureGridView = styled.div`
  ${(props: {}) => css`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: white;
`};
`;

//endregion [[ Styles ]]

//region [[ Props ]]

export interface Props {
    className?: string;
    store: PictureGridStore;
}

//endregion [[ Props ]]

//region [[ Functions ]]
//endregion [[ Functions ]]

export const PictureGrid = observer(({...props}: Props) => {

    const [filter, setFilter] = useState<string>("");
    const [grayscale, setGrayscale] = useState<boolean>(false);

    const grayscaleChange = () => {
        setGrayscale(!grayscale);
    };

    const filterChange = (value: string) => {
        setFilter(value);
    };

    const filterPictures = (pictures: PicsumPhotoData[]) => {
        return pictures.filter(pic => pic.author.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
                                      pic.id.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
                                      pic.download_url.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

    return <PictureGridView className={props.className}>
        <TopBar/>
        <SecondaryBar grayscale={grayscale} setFilter={filterChange} setGrayscale={grayscaleChange} loadMorePictures={() => {
            props.store.loadMorePictures();
        }}/>
        <Grid pictures={filterPictures(props.store.currentPictures)} grayscale={grayscale}/>
    </PictureGridView>;
})
