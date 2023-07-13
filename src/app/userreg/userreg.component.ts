// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-userreg',
//   templateUrl: './userreg.component.html',
//   styleUrls: ['./userreg.component.css']
// })
// export class UserregComponent {
//   onSubmit(formvalue:NgForm){
//     console.log(formvalue)
//   }
// }

//Using template refference variable


import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
db: any;
constructor(private data:UserregService){
  
}
ngOnInit (){
  this.data.data()
  .subscribe((x:any)=>{
    this.db=x[0];
    // console.log(x[0]);
    // console.log(this.db);
  })
}
 @ViewChild('formval') form: any;
  onSubmit(){
    // console.log(this.form.value.username)
    // console.log(this.db.username);
    if(this.form.value.username==this.db.username  && this.form.value.password==this.db.password){
      
      alert('You have Successfully Logged In')
      // console.log('true');
    }else{
      // console.log('false');
      alert("This user data doesnot exist in our database")
    }
    // this.form.reset()
  }



}
//Using @viewchild decorator 