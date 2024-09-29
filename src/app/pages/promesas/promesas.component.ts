import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  
  
  
  ngOnInit(): void {
    const promesa = new Promise ((resolve, reject )=>{
      if(false){
        resolve('Hola Mundo')}
        else{
          reject("Mal")
        }
    });
    promesa.then((mensaje)=>{
      console.log(mensaje);
    }).catch(error =>{console.log("Error en la promesa", error)});
    
    console.log("Fin Init");


    this.getUsers().then(usuarios =>{
      console.log(usuarios);
    });
  }
  getUsers(){
    const promesa = new Promise((resolve)=>{
      fetch('https://reqres.in/api/users?page=2').then((resp)=>{
        resp.json().then(body => resolve(body.data));
      })
    })
    return promesa;
    
  }

}
