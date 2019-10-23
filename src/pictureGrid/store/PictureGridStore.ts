import {computed, observable} from "mobx";
import {PicsumApi} from "../../_api/picsumApi";
import {PicsumPhotoData} from "../../_domain/picsumPhotoData";

export class PictureGridStore {
    @observable pictures : PicsumPhotoData[] = [];
    private page = 1;

    constructor() {
        this.loadMorePictures();
    }

    @computed get currentPictures() {
        return this.pictures;
    }

    async loadMorePictures() {
        const data = await PicsumApi.instance.list(this.page);
        this.pictures = data.concat(this.pictures);
        this.page++;
    }
}

