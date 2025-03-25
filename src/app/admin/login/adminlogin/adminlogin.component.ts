import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = ''; 

  
  private adminEmail: string = 'admin@example.com'; 
  private adminPassword: string = 'admin123'; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  
  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      
      if (formData.email === this.adminEmail && formData.password === this.adminPassword) {
        console.log('Sikeres bejelentkezés!');
        this.errorMessage = '';  
        
       
        alert('Sikeres bejelentkezés! Üdvözlünk az Admin felületen!');
        
        
      } else {
        this.errorMessage = 'Hibás admin email vagy jelszó!'; 
      }
    }
  }
}
