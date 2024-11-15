import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  userEmail!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  onContinue() {
    this.router.navigateByUrl('facesnaps')
  }

  onSubmitForm(form : NgForm): void {
    console.log (form.value);
  }

}
