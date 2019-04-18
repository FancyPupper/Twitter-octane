import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@action
	onSubmit (description) {
		let post = this.store.createRecord('draft_tweet', {
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2EL7tcnLcWLnVsgH33PD2bMMnivD79-Cyg8TWZNahcmqE8kh",
			userName: "FancyPupper",
			description: description,
			createdAt: "2019-04-01"
		});

		post.save();
	}
}
