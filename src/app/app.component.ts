import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Finra';

  accordionData: Array<any>;

  ngOnInit() {
    // assuming contents are returning from a server
    this.accordionData = [
      {
        id: 'sec-1',
        title: 'Member Regulation',
        content: [
          'Every firm and broker that sells securities to the public in the United States must be licensed and registered by FINRA. Member Regulation (Risk Oversight and Operational Regulation and Sales Practice) regularly examines all firms to determine compliance with FINRA’s rules and those of the SEC and the Municipal Securities Rulemaking Board (MSRB). All firms are examined no less than once every four years.',
          'During a routine exam, FINRA uses a risk-based approach focusing on those aspects of a firm’s business that present heightened regulatory risk as well as on certain core areas. FINRA uses enhanced data analytics resulting in examinations with a sharper focus and narrower scope. The cause program also investigates more discrete allegations of customer harm typically directed at individual registered representatives and supervisors. The Surveillance Program monitors broker-dealer risk management and supervision and is also responsible for the day-to-day surveillance of member firms.'
        ]
      },
      {
        id: 'sec-2',
        title: 'Market Regulation',
        content: [
          "FINRA's Market Regulation department oversees and regulates over-the-counter (OTC) trading of exchange-listed and non-exchange-listed securities for compliance with FINRA rules and federal securities laws. Market Regulation also provides regulatory services to equities and options markets operated by other self-regulatory organizations. The department monitors approximately 99 percent of the equities market and approximately 50 percent of the options market.",
          "Key to FINRA's mandate to maintain market integrity is effective, even-handed regulation, which protects investors and other market participants and enhances investor confidence in the markets. Market Regulation meets this mandate with sophisticated surveillance and examination programs. The surveillance units review trading activity to determine whether firms have failed to meet regulatory requirements. The examination unit conducts on-site reviews of firms compliance with FINRA rules and federal securities laws. The surveillance and examination units refers matters to FINRA’s Enforcement Department, which is responsible for FINRA’s disciplinary program. In addition the department refers matters to the Securities and Exchange Commission when the market participant under investigation is not a FINRA member."
        ]
      },
      {
        id: 'sec-3',
        title: 'Enforment',
        content: [
          'One of FINRA’s top priorities is to advance investor confidence in the securities markets through vigorous, fair and effective enforcement of FINRA and MSRB rules, and federal securities laws and rules. The Enforcement Department is tasked with investigating potential securities violations and, when warranted, bringing formal disciplinary actions against firms and their associated persons.',
          'FINRA has the authority to fine, suspend or bar brokers and firms from the industry. Enforcement handles a broad range of investigations and cases. The department works closely with other FINRA departments and offices, such as Market Regulation and Member Regulation.'
        ]
      }
    ];
  }

  onOpen(event) {
    console.log('open: ', event);
  }
  onClose(event) {
    console.log('close: ', event);
  }
}
