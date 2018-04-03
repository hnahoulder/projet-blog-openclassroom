import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
    @Input() element: { title: string, content: string, create_at: Date, loveIts: number };

    constructor() {
    }

    ngOnInit() {
    }

    loveIt() {
        this.element.loveIts += 1;
    }

    dontLoveIt() {
        this.element.loveIts -= 1;
    }
}
