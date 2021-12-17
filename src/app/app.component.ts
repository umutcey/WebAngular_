
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {




  title = 'umut';
  userObj: any = {};
  email = 'aydınedirne@gmail.com';
  
 
  umuts=[
    {name:"umut",address:"aydın",phone:"(256) 256 25 25", mobilePhone:"(252) 265 26 26",emal:"jkdkjsdkjsh@gmail.com"},
    {name:"ahmet",address:"edirne",phone:"(257) 365 95 87", mobilePhone:"(254) 236 96 21",emal:"jkdkjsdkjsh@gmail.com"},
    {name:"furkan",address:"istanbul",phone:"(258) 784 52 63", mobilePhone:"(246) 874 25 14",emal:"jkdkjsdkjsh@gmail.com"},
    {name:"duygu",address:"çanakkale",phone:"(253) 325 21 36", mobilePhone:"(282) 362 21 87",emal:"jkdkjsdkjsh@gmail.com"},
    {name:"fatih",address:"yalova",phone:"(254) 214 58 96", mobilePhone:"(276) 636 54 98",emal:"jkdkjsdkjsh@gmail.com"}
  ];
  

 
  

    //email kontrol
   isValidEmail(email:any) {
    const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
 //

  // Kişiyi kayıt etme
  addPerson( name:String,address:String,phone:String,mobilePhone:String,email:String){
   
   if(this.isValidEmail(this.email)){
     console.log('test');
     /*
    this.userObj.name = 'ahmet';
    this.userObj.address = 'aydın';
    this.userObj.phone = '(256) 256 65 85';
    this.userObj.mobilePhone = '(554) 256 58 75';
    this.userObj.email = 'aydınedirne@gmail.com';
    
  
    this.ServiceService.insertUser(this.userObj).subscribe(cevap => {
      console.log(cevap);
      if (cevap != null) {
        this.umuts = cevap;
        console.log(cevap);
        console.log(this.umuts);
      } else {
        console.log('bağlantı sağlanamadı.')
      }
  
    }
    )
    */
  

 //// console.log(name);
 //// console.log(address);
 // console.log(phone);
 // console.log(mobilePhone);
      }else
      {
        console.log("Uluslararası formatlara göre geçerli email adresi giriniz.");
      }
            
   }



// Kayıt getirme

getPerson(){

}

//Kayıt Silme

deletePerson(name:String){

}

// Kayot güncelleme
updatePerson(name:String,address:String,phone:String,mobilePhone:String,email:String){

}


  
}
