import axios from 'axios';
import {PicsumPhotoData} from "../_domain/picsumPhotoData";

const API_URL =  "https://picsum.photos";

export class PicsumApi {
  protected constructor() {}

  public async list(page: number = 1): Promise<PicsumPhotoData[]> {
      const resp = await axios.get(API_URL + '/v2/list?page=' + page);
      return resp.data as PicsumPhotoData[];
  }

  //region [[ Singleton ]]
  protected static _instance: PicsumApi;
  static get instance(): PicsumApi {
    if (!this._instance) {
      this._instance = new PicsumApi();
    }
    return this._instance;
  }
  //endregion
}
