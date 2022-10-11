import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss']
})
export class GuardComponent implements OnInit {
  formMode = false;
  email = '';
  errorMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSendEmail() {
    if (!this.email) {
      this.errorMode = true;
    }
    else if (!this.email.includes('@')) {
      this.errorMode = true;
    }
    else {
      this.errorMode = false;
      const subject = 'A 🔗 for the FinePrint Web App';
      const body = `Note to self: don't forget to visit https://fine-print.app`;
      const sendOut = `mailto:${this.email}?subject=${subject}&body=${body}`;
      window.open(sendOut);
    }

    
  }

}
