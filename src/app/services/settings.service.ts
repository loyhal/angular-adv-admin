import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    
    const getTheme = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme.setAttribute('href', getTheme);    
  }

  changeTheme( links: NodeListOf<Element>,theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme',url)
    this.checkCurrent(links);

  }
  checkCurrent(links: NodeListOf<Element>){
    links.forEach(elem=>{
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if(btnThemeUrl === currentTheme){
        elem.classList.add('working');
      }
    })
}

}
