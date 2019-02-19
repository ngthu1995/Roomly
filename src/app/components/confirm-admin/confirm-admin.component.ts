import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-admin',
  templateUrl: './confirm-admin.component.html',
  styleUrls: ['./confirm-admin.component.scss']
})
export class ConfirmAdminComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ConfirmAdminComponent>) { }

  ngOnInit() {
  }
  onConfirmManager(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.matDialogRef.close(form.value.managerString);
  }
}
