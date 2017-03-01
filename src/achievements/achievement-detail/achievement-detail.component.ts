import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AchievementsService } from '../achievements.service';

import { IAchievement } from '../achievement';

@Component({
  selector: 'nc-achievement-detail',
  templateUrl: './achievement-detail.component.html',
  styleUrls: ['./achievement-detail.component.css']
})
export class AchievementDetailComponent implements OnInit {

  achievement: IAchievement;
  _errorMessage: string;

  constructor(
    private _achievementsService: AchievementsService,
    private _route: ActivatedRoute,
    private _router: Router
    ) 
  {
    
  }

  ngOnInit() {
    let achievementId = +this._route.snapshot.params['id'];
    this._achievementsService.getAchievement(achievementId).subscribe(
      result => this.achievement = result,
      error => this._errorMessage = <any>error);
  }

  onSave(): void {
    this._achievementsService.postAchievement(this.achievement).subscribe(
      result => this._router.navigate(['/achievements']),
      error => this._errorMessage = <any>error
    )

    
  }

}
