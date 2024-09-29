import { Component, OnDestroy, OnInit } from '@angular/core';
import {  ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})
export class BreadcrumbComponent implements OnDestroy {
  public titulo: string;
  public tituloSubs$: Subscription;
  constructor(
    private router: Router
  ) { 
   
    this.tituloSubs$ = this.getDataRuta().subscribe(({titulo})=>{//En el map obtenemos {titulo:....NOMBRE)} En este caso podemos usar la desestructuración
      this.titulo = titulo;
      document.title = titulo;
    })
  }
  ngOnDestroy(): void {
  this.tituloSubs$.unsubscribe();
  }


  getDataRuta(){
    return this.router.events.pipe(
      filter(event=> event instanceof ActivationEnd),
      filter((event: ActivationEnd) =>event.snapshot.firstChild === null),
      map((event: ActivationEnd) =>event.snapshot.data)
    )
  }
 
}
