import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { SubscribeLeadService } from './services/subscribe-lead.service';
import { CommonModule } from '@angular/common';

function emailOrPhoneValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value || '';
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    const isPhone = /^\+?[1-9]\d{1,14}$/.test(value);

    return isEmail || isPhone ? null : { invalidFormat: true };
  };
}

@Component({
  selector: 'app-release-campaign',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './release-campaign.html',
  styleUrl: './release-campaign.scss'
})
export class ReleaseCampaign {
  public message: string = '';
  public subscribeLeadService = inject(SubscribeLeadService);


  public dataLead = new FormControl('', {
    validators: [
      Validators.required,
      emailOrPhoneValidator()
    ],
    updateOn: 'blur'
  });

  public teachings = [
    '✓ fundamentos da filosofia budista',
    '✓ alicerce da disciplina búdica',
    '✓ técnicas para meditação ',
    '✓ Técnicas anti-burnout',
    '✓ o caminho do meio para encontrar o equilíbrio',
    '✓ open-source como um campo de méritos',
  ];

  subscribeLead() {
    if (this.dataLead.invalid) {
      this.dataLead.markAsTouched();
      return;
    }

    if (!this.dataLead.value) {
      return;
    }

      this.subscribeLeadService.add(this.dataLead.value).subscribe({
        next: (response: unknown) => {
          this.message = 'success';
          this.dataLead.reset();
        },
        error: (error: any) => {
          this.message = 'error;'
          console.error('Error subscribing lead:', error);
        }
      });
  }
}
