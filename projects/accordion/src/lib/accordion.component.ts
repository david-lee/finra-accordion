import { Component, OnInit, AfterContentInit, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { AccordionSectionComponent } from './accordion-section.component';

@Component({
  selector: 'finra-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterContentInit {
  // inline styles
  @Input() style: string;
  // custom class name
  @Input() styleClass: string;
  @Output() onOpen: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @ContentChildren(AccordionSectionComponent) accordionSections: QueryList<AccordionSectionComponent>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    const sections = this.accordionSections.toArray();

    sections.forEach(section => {
      section.toggle.subscribe(() => this.openPanel(section));
    });

    setTimeout(() => this.openPanel(sections[0]));
  }

  openPanel(clickedSection: AccordionSectionComponent) {
    this.accordionSections.toArray().forEach((section: AccordionSectionComponent) => {
      if (section.expanded) {
        section.expanded = false;
        this.onOpen.emit({ evt: event, id: section.id });
      }
    });
    clickedSection.expanded = true;
    this.onClose.emit({ evt: event, id: clickedSection.id });
  }
}
