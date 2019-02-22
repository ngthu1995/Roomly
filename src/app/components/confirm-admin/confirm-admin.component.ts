import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-admin',
  templateUrl: './confirm-admin.component.html',
  styleUrls: ['./confirm-admin.component.scss']
})
export class ConfirmAdminComponent implements OnInit {
  hide = true;
  constructor(private matDialogRef: MatDialogRef<ConfirmAdminComponent>,
    private authService: AuthService) { }

  ngOnInit() {
  }
  onConfirmManager(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.checkMangerRole(form.value.managerString)
      .subscribe(data => {
        this.matDialogRef.close(data)
      })
  }
}
