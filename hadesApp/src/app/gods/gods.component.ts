import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {God} from './god.model';
import { GodsService } from './godsService.service';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css'],
  providers: [GodsService]
})
export class GodsComponent implements OnInit {
  selectedGod?: God = undefined;
  count = 0;
  gods: God [];
  
  constructor(private godsService: GodsService, private router: Router) { }

  ngOnInit() {
    this.gods = this.godsService.getGods();
  }

  selectGod(god: God){
    this.router.navigate(['/gods/' + god.name]);
  }
}
