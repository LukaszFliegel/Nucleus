import { Component } from '@angular/core';
import { AchievementsService } from '../achievements.service';
import { OnInit } from '@angular/core';
import { IAchievement } from '../achievement';

@Component({
    selector: 'nc-achievement-list',
    templateUrl: './achievement-list.component.html'
})
export class AchievementListComponent implements OnInit {

    achievements: IAchievement[];
    _errorMessage: string;
    pageTitle = 'Achievements';

    constructor(private _achievementsService: AchievementsService) {

    }

    ngOnInit() : void {
        this._achievementsService.getAchievements().subscribe(
            achievements => this.achievements = achievements,
            error => this._errorMessage = <any>error);
    }

}