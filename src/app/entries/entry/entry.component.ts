import { Component} from "@angular/core";

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    title: string = 'My first Photo';
    photo: string = 'http://placehold.it/800x500?text=Angular Basics';
    description: string = 'a description of my first photo';
    comments: any[] = [
        {name: "John", comment: "A comment"},
        {name: "Amy", comment: "A comment"},
        {name: "Jack", comment: "A comment"}
    ]
}