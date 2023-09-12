import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/journal-entries', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'journal-entries', component: JournalEntriesComponent },
  { path: 'create-entry', component: CreateEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
