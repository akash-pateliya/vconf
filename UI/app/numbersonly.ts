import { FormControl } from '@angular/forms';

export class numbersonly {
    static invalidContactNumber(control: FormControl):{ [key:string]:boolean } {
        if ( control.value.length<10  ){
            return {invalidContactNumber: true };
        }
        return null;
    }
	static invalidPassword(control: FormControl):{ [key:string]:boolean } {
        if ( control.value.length && !control.value.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$") ){
            return {invalidPassword: true };
        }
        return null;
    }
	static invalidEmail(control: FormControl):{ [key:string]:boolean } {
        if ( control.value.length && !control.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") ){
            return {invalidEmail: true };
        }
        return null;	
    }
	static invalidUserId(control: FormControl):{ [key:string]:boolean } {
        if ( control.value.length && !control.value.match("^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$") ){
            return {invalidUserId: true };
        }
        return null;	
    }
}

//&& !control.value.match("^[0-9]{10}$")