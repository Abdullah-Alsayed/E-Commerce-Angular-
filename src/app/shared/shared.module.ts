import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, ErrorComponent, SpinnerComponent, InputSelectComponent],
  imports: [CommonModule, RouterModule,FormsModule],
  exports: [HeaderComponent , ErrorComponent,SpinnerComponent,InputSelectComponent],
})
export class SharedModule {}
