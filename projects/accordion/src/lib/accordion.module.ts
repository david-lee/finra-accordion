import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionSectionComponent } from './accordion-section.component';

@NgModule({
  declarations: [AccordionComponent, AccordionSectionComponent],
  imports: [CommonModule],
  exports: [AccordionComponent, AccordionSectionComponent]
})
export class AccordionModule {}
