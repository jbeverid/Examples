import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Form: FormGroup = this.CreateReactiveForm();
  constructor(private fb: FormBuilder) {}

  private CreateReactiveForm(): FormGroup {
    return this.fb.group({
      Progress: this.fb.control(0, [])
    });
  }
}
