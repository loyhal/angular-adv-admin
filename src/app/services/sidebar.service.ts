import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      tittle: 'Dashboard!!',
      icon: 'mdi mdi-gauge',
      submenu: [
        { tittle: 'Main', url: '/' },
        { tittle: 'ProgressBar', url: 'progress' },
        { tittle: 'Gráficas', url: 'grafica1' },
      ]
    }
  ];

  constructor() { }
}
