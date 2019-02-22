import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAdminComponent } from '../../confirm-admin/confirm-admin.component';
import { take, tap, switchMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
// login provider
import { AuthService as socialService} from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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
    private socialAuthSevice: socialService
  ) { }

  ngOnInit() {
    this.initForm();

    this.route.params.subscribe(params => {
      if (params["registered"] === "success") {
        this.notifyMessage =
          "You have been successfuly registered, you can login now!";
      }
    });
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
          )
        ]
      ],
      password: ["", Validators.required]
    });
  }

  isInvalidForm(fieldName): boolean {
    return;
    this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty ||
        this.loginForm.controls[fieldName].touched);
  }

  isRequired(fieldName): boolean {
    return this.loginForm.controls[fieldName].errors.required;
  }

  isPattern(fieldName): boolean {
    return this.loginForm.controls[fieldName].errors.pattern;
  }

  // login() {
  //   this.auth.login(this.loginForm.value).subscribe(
  //     token => {
  //     },

  //     errorResponse => {
  //       console.log(errorResponse);
  //       this.errors = errorResponse.error.err;
  //     },

  //     () => { }
  //   );
  // }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.auth
      .login(this.loginForm.value)
      .pipe(
        switchMap(({ token, user }) => {
          if (user && user.role === "manager") {
            /**
             * TODO: create ConfirmManagerComponent
             */
            const confirmManagerDialogRef = this.matDialog.open(
              ConfirmAdminComponent,
              {
                width: '700px',
                height: '500px'
              }
            );
            return confirmManagerDialogRef.afterClosed().pipe(
              take(1),
              /**
               * TODO: Should check for dialog close with no data (user click X, or cancel) to remove Authenticated data in LocalStorage??
               */
              /**
               * TODO: if tap() doesn't work, change to switchMap
               * switchMap(inputValue => {
               *  if (!inputValue || inputValue === '') {
               *    this.authService.clearAuthData();
               *    return of(null);
               *  }
               *
               *  return of(inputValue);
               * })
               */
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
      .subscribe(response => {
        if (this.auth.checkMangerRole(response)) {
          this.router.navigate(["/"]);
        } else {
          this.router.navigate(["login"]); // TODO: Do something if checkManager fails
        }
      });
  }

}
