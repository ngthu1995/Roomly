import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAdminComponent } from '../../confirm-admin/confirm-admin.component';
import { take, tap, switchMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
// import { of, Subscription } from 'rxjs';
// login provider
// import { AuthService as socialService } from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  errors: any = [];
  notifyMessage: string = "";
  hide = true;
  isAdmin: boolean;





  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    // private authStatusSub: Subscription
    // private socialAuthSevice: socialService
  ) { }

  ngOnInit() {
    // this.initForm();
    // this.authStatusSub = this.auth.getAuthStatusListener().subscribe(
    //   authStatus => {
    //     console.log(authStatus)
    //   }
    // )

    this.route.params.subscribe(params => {
      if (params["registered"] === "success") {
        this.notifyMessage =
          "You have been successfuly registered, you can login now!";
      }
    });
  }



  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth
      .login(form.value.email, form.value.password)
      .pipe(
        switchMap(({ token, user }) => {
          if (user && user.role === "manager") {
            const confirmManagerDialogRef = this.matDialog.open(
              ConfirmAdminComponent,
              {
                width: '700px',
                height: '247px'
              }
            );
            return confirmManagerDialogRef.afterClosed().pipe(
              take(1),

              tap(inputValue => {
                if (!inputValue || inputValue === "") {
                  this.auth.clearAuthData();
                }
              }),
              filter(data => data),
              switchMap(this.auth.checkMangerRole)
            );
          }

          return of({ isAuthenticated: true });
        })
      )
      .subscribe(_ => {
        this.router.navigate([''])
      })
  }
}
