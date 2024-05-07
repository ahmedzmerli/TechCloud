import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static pastOrPresent: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      return null; // Date valide (dans le passé ou le présent)
    } else {
      return { 'pastOrPresent': true }; // Date invalide (dans le futur)
    }
  };

  static futureOrPresent: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate >= currentDate) {
      return null; // Date valide (dans le futur ou le présent)
    } else {
      return { 'futureOrPresent': true }; // Date invalide (dans le passé)
    }
  };
}
