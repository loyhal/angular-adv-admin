import { Component, OnDestroy } from '@angular/core';
import { interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;
  constructor(){
    
    // this.returnObs().pipe(
    //   retry()
    // ).subscribe({
    //   next: valor => console.log('Subs:', valor),
    //   error : error => console.warn('Error:', error),
    //   complete: () => console.info('Obs terminado')
    // })
    this.intervalSubs =  this.returnIntervalo().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


  returnIntervalo(): Observable<number>{
    return interval(1000).pipe(
      take(4),
      map(valor=>{
        return valor + 1;
      }) 
    )   
  }

  returnObs(){
    const obs$ = new Observable<number>( observer =>{
      let i = -1;
      const intervalo = setInterval(()=>{
      i++;
      observer.next(i);
      if(i==4){
        clearInterval(intervalo);
        observer.complete()
      }
      if(i==2){
        observer.error('i es 2');
      }
    },1000);
})
  return obs$;
  }
}
