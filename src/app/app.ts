import { Component, inject, signal } from '@angular/core';
import { AboutPublisher } from './about-publisher/about-publisher';
import { Chapters } from './chapters/chapters';
import { Footer } from './footer/footer';
import { ReleaseCampaign } from './release-campaign/release-campaign';
import { Pill } from './pill/pill';
import { RouterModule } from '@angular/router';
import { SubscribeLeadService } from './release-campaign/services/subscribe-lead.service';
import { TotalLeadsResponse } from './interfaces/leads-response.interface';
import { CountdownService } from './services/countdown.service';
import { Faq } from './faq/faq';


@Component({
  selector: 'app-root',
  imports: [AboutPublisher, Chapters, Footer, ReleaseCampaign, Pill, RouterModule, Faq],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private subscribeLeadService = inject(SubscribeLeadService);
  private countdownService = inject(CountdownService);
  
  protected readonly totalLeads = signal(0);
  protected remainingDays = signal(0);

  ngOnInit() {
    this.subscribeLeadService.getTotal().subscribe({
      next: (response: TotalLeadsResponse) => {
        this.totalLeads.set(response.total);
      },
      error: (error) => {
        console.error('Error loading total leads:', error);
      }
    });

    const remainingDays = this.countdownService.getTimeRemaining();

    this.remainingDays.set(remainingDays);
  }

 

  
}
