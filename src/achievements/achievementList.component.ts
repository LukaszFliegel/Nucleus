import { Component } from '@angular/core';
import { AchievementsService } from './achievements.service';
import { OnInit } from '@angular/core';
import { IAchievement } from './achievement';

@Component({
    selector: 'nc-achievement-list',
    templateUrl: './achievementList.component.html'
})
export class AchievementListComponent implements OnInit {

    achievements: IAchievement[] = [
        {
            "Id": 1,
            "AchievementName": "test"
        },
        {
            "Id": 2,
            "AchievementName": "test2"
        },
        {
            "Id": 3,
            "AchievementName": "test3"
        }
    ];

    constructor(private _achievementsService: AchievementsService) {

    }

    ngOnInit() : void {
        //this.achievements = this._achievementsService.getAchievements();
        // this.achievements = [
        //     {
        //         "Name": "aaa"
        //     }
        // ];
    }

}