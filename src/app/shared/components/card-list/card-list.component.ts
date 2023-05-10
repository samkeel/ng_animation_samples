import { Component, OnInit } from '@angular/core';
import { BpObserverService } from '../../services/bp-observer.service';
import { Observable } from 'rxjs';
import { CardModel } from '../../models/card-model';
import { staggerListAnimation } from '../../animations/staggered-list.animation';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [ staggerListAnimation]
})
export class CardListComponent implements OnInit {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;
  // displayedCards: CardModel[] = [];

  cards: CardModel[] = [
    {
      title: 'card-title-1',
      subtitle: 'card-subtitle-1',
      content: 'card-content-1',
    },
    {
      title: 'card-title-2',
      subtitle: 'card-subtitle-2',
      content: 'card-content-2',
    },
    {
      title: 'card-title-3',
      subtitle: 'card-subtitle-3',
      content: 'card-content-3',
    },
  ];

  constructor(private bpoService: BpObserverService) {}

  ngOnInit() {
    // this.displayedCards.push(this.cards[0]);
  }

  // onItemAnimated(animationEvent: AnimationEvent, lastId: number) {
  //   // if (animationEvent != 'void') {
  //   //   return;
  //   // }
  //   if (this.cards.length > lastId + 1) {
  //     this.displayedCards.push(this.cards[lastId + 1]);
  //   } else {
  //     this.cards = this.displayedCards;
  //   }
  // }
}
