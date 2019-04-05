import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'finra-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.scss']
})
export class AccordionSectionComponent implements OnInit {
  @Input() id: string;
  @Input() headerTitle: string;
  @Input() transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @Output() expanded = false;
  constructor() {}

  ngOnInit() {}
}
