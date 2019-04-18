import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TwitterBoxComponent extends Component {
	@tracked text;
	@tracked error;

	@action
	handleChange(text){
		this.text = text;
	}

	@action
	onInput (value) {
		this.error = false;
		this.text = value;
	}

	@action
	onSubmit () {
	//	if (this.args.handleSubmit) {
		let text = this.text;
		let req =  this.args.handleSubmit(text);

			//this.text = null;
			//this.error = false;
		//} else {
		//	this.error = true;
		//}
		this.text = "";
	}
}
