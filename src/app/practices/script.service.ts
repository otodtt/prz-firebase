import { Injectable } from '@angular/core';
import {ScriptStore} from './script.store';

declare var document: any;

@Injectable()
export class ScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]): any {
    let promise = Promise.resolve();
    scripts.forEach(script => {
      promise = promise.then(() =>
      this.loadScript(script));
      // this.loadScript(script)).then(res => console.log(res));
    });
  }

  // load(...scripts: string[]): any {
  //   const promises: any[] = [];
  //   scripts.forEach((script) => promises.push(this.loadScript(script)));
  //   return Promise.all(promises);
  // }

  loadScript(name: string): any {
    return new Promise((resolve, reject) => {
      if (this.scripts[name].loaded) {
          resolve({script: name, loaded: true, status: 'Already Loaded'});
      }
      else {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {
          script.onload = () => {
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}

