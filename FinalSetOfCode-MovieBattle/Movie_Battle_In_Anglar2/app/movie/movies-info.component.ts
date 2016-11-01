import { Component, Input } from 'angular2/core';
import {IMovies} from './movies';

@Component({
    selector: 'movies-iterator',
    template: `
         <h2 *ngIf="indx==0 && comparision==true">Movie One</h2>
         <h2 *ngIf="indx==1 && comparision==true">Movie Two</h2>

         <h2 *ngIf="indx==0 && comparision==false">Winner</h2>
         <h2 *ngIf="indx==1 && comparision==false">Looser</h2>

        <p class='lead'>
            <li class="list-group-item" *ngIf="ratingVisible==true">IMDB Rating:  {{moviesInfo.imdbRating}}</li>
            <li class="list-group-item"><img src={{moviesInfo.Poster}} class="img-rounded img-responsive center-block" /></li>
            <li class="list-group-item">Title:  {{moviesInfo.Title}}</li>
            <li class="list-group-item">Genre: {{moviesInfo.Genre}}</li>
            <li class="list-group-item">Director: {{moviesInfo.Director}}</li>
            <li class="list-group-item">Actors: {{moviesInfo.Actors}}</li>
            <li class="list-group-item">Released: {{moviesInfo.Released}}</li>
            <li class="list-group-item">Language: {{moviesInfo.Language}}</li>

        </p>
   
  `
})
export class MoviesInfoComponent {
    @Input() moviesInfo: IMovies;
    @Input() ratingVisible: boolean;
    @Input() indx: number;
    @Input() comparision: boolean;
    //@Input('master') masterName: string;
}
