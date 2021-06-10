import { AbstractControl } from "@angular/forms";

export function passwordValidator(control :AbstractControl): {[key:string]: any} | null {
    const password = control.get('password');
    const passwordRepeat = control.get('passwordRepeat');

    if (password.pristine || passwordRepeat.untouched ) {
        return null;
    } else {
        return password && passwordRepeat && password.value !== passwordRepeat.value ?
        { 'misMatch': true } : null;
    }
}