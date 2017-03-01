import { Injectable } from '@angular/core';
import { IAchievement } from './achievement';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AchievementsService {

    private _achievementsUrl = 'http://localhost:7496/api/achievements';

    constructor(private _http: Http){

    }

    getAchievements(): Observable<IAchievement[]> {
        return this._http.get(this._achievementsUrl)
            .map((response: Response) => <IAchievement[]>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAchievement(id): Observable<IAchievement> {
        return this._http.get(this._achievementsUrl + '/' + id)
            .map((response: Response) => <IAchievement>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    postAchievement(achievement): Observable<Response> {
        let headers = new Headers({ 
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({ headers: headers });

        return this._http.put(
            this._achievementsUrl + '/' + achievement.id,
            JSON.stringify(achievement),
            options
        )
        .do(data => console.log(data.status))
        .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw('ERROR: ' || error.json().error || 'Server error');
    }
}