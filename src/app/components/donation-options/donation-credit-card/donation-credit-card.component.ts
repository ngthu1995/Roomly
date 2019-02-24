import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-donation-credit-card',
  templateUrl: './donation-credit-card.component.html',
  styleUrls: ['./donation-credit-card.component.scss']
})
export class DonationCreditCardComponent implements OnInit, OnDestroy {

  stripe: any;
  elements: any;

  @ViewChild("cardNumber") cardNumRef: ElementRef;
  @ViewChild("cardExpiry") cardExpRef: ElementRef;
  @ViewChild("cardCvc") cardCvcRef: ElementRef;

  @Output() paymentConfirmed = new EventEmitter

  cardNumber: any;
  cardExp: any;
  cardCvc: any;

  isValidatingCard: boolean = false;

  error: string = '';
  token: any;

  constructor(private toastr: ToastrService) {
    this.stripe = Stripe(environment.STRIPE_PK)
    this.elements = this.stripe.elements();

    this.onChange = this.onChange.bind(this);
  }

  ngOnInit() {
    // it has to follow the exact string of Stripe
    this.cardNumber = this.elements.create("cardNumber", { style });
    this.cardNumber.mount(this.cardNumRef.nativeElement);

    this.cardExp = this.elements.create("cardExpiry", { style });
    this.cardExp.mount(this.cardExpRef.nativeElement);

    this.cardCvc = this.elements.create("cardCvc", { style });
    this.cardCvc.mount(this.cardCvcRef.nativeElement);

    this.cardNumber.addEventListener('change', this.onChange);
    this.cardExp.addEventListener('change', this.onChange);
    this.cardCvc.addEventListener('change', this.onChange);
  }



  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = '';
    }
  }

  async onSubmit() {
    this.isValidatingCard = true;
    const { token, error } = await this.stripe.createToken(this.cardNumber)

    this.isValidatingCard = false;
    if (error) {
      console.error(error)
    } else {
      this.token = token;
      this.paymentConfirmed.next(token);
      this.toastr.success('Thanks For Donating Money', 'Success')
    }
  }

  isCardValid(): boolean {
    return this.cardNumber._complete &&
      this.cardExp._complete && this.cardCvc._complete
  }
  ngOnDestroy() {
    this.cardNumber.removeEventListener('change', this.onChange)
    this.cardExp.removeEventListener('change', this.onChange)
    this.cardCvc.removeEventListener('change', this.onChange)

    this.cardNumber.destroy();
    this.cardExp.destroy();
    this.cardCvc.destroy();
  }
}

const style = {
  base: {
    iconColor: "#666EE8",
    color: "#31325F",
    lineHeight: "40px",
    fontWeight: 300,
    fontFamily: "Helvetica Neue",
    fontSize: "15px",

    "::placeholder": {
      color: "#CFD7E0"
    }
  }
}
