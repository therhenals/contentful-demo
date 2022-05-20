import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: '7ipfpt8781ou',
  accessToken: 'qVC63cewNOWt_03CayZWC1nDGE8UXH0agRkX0QTA_Wk',
  contentTypeIds: {
    simCard: 'simCard',
  },
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  async getSimCards(query?: object): Promise<Entry<any>[]> {
    const res = await this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.simCard
    }, query));

    return res.items;
  }
}
