import { Injectable, EventEmitter } from '@angular/core';

export class LoadingService
{
  public static loadings: LoadingObj[] = new Array();

  constructor() { }


  public static getLoading(elementName)
  {
    if (this.checkExits(elementName))
      this.addLoading(elementName);

    let load = LoadingService.loadings.find(o => o.Name == elementName);

    return load;
  }

  public static show(elementName)
  {
      let loader = this.getLoading(elementName);
      debugger;
    loader.loading.emit(true);
  }

  public static hide(elementName)
  {
    let loader = this.getLoading(elementName);
    loader.loading.emit(false);
  }

  private static checkExits(elementName: string)
  {
      return LoadingService.loadings.find(o => o.Name == elementName) == null
  }

  private static addLoading(elementName)
  {
      LoadingService.loadings.push(new LoadingObj(elementName));
  }
}

export class LoadingObj
{
  constructor(
    public Name: string,
    public loading: EventEmitter<any> = new EventEmitter()
  )
  {
  }
}
