import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {God} from '../god.model';
import {GodsService} from '../godsService.service';

@Component({
  selector: 'app-boons',
  templateUrl: './boons.component.html',
  styleUrls: ['./boons.component.css'],
  providers: [GodsService]
})
export class BoonsComponent implements OnInit {
  god?: God;
  constructor(private godsService: GodsService, private route:ActivatedRoute) { }
  godName: string | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.godName = paramMap.get('name');

      this.god = this.godsService.getGotByName(this.godName!);
  })
  }
}
