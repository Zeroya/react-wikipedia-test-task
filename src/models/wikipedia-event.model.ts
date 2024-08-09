class ThumbnailModel {
  public source: string;
  public width: number;
  public height: number;
}

export class PageModel {
  public pageid: number;
  public title: string;
  public extract: string;
  public thumbnail?: ThumbnailModel;
}

export class WikipediaEventModel {
  public text: string;
  public year: number;
  public pages: PageModel[];
}
