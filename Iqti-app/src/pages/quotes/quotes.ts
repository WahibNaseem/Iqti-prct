import { NavController } from 'ionic-angular';
import { Component } from "@angular/core";

@Component({
  selector:'page-quotes',
  templateUrl:'quotes.html'
})

export class QuotesPage {
  constructor(private navCtrl: NavController) { }
}
