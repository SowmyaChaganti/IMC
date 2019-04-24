import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
	items: Observable<any[]>;

	constructor(
		db: AngularFirestore,
	) {
		this.items = db.collection('items').valueChanges();
	}

	ngOnInit() {
	}

}
