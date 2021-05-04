import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'star-root',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit{
    
    @Input() rating:number = 0;
    cropWidth:number = 0;
    maxWidth: number = 75;
    maxStar: number = 5;

    @Output() notifyRatingClicked: EventEmitter<string> = new EventEmitter<string>();

    onRatingClicked(){
        this.notifyRatingClicked.emit(`${this.rating} was clicked`);
    }

    ngOnInit(): void {
        this.cropWidth = this.rating * this.maxWidth/this.maxStar;
    }
}