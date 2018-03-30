import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    @Input() title: string;
    @Input() content: string;
    @Input() create_at: Date;
    @Input() loveIts: number;

    constructor() {
    }

    ngOnInit() {
    }

    //add 1 to loveIts
    addLoveIt() {
        this.loveIts += 1;
    }
    // decrease loveIt of 1
    minusLoveIt() {
        this.loveIts -= 1;
    }

}
