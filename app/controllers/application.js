import Controller from '@ember/controller';

export default Controller.extend({
	data: null,
	actions: {
		addData: function(){
			var title = this.get('title');
			var description = this.get('description');
			
			//Create New Post
			var newPost = this.store.createRecord('posts', {
				title: title,
				description: description,
			});

			// Save to Database
			newPost.save();

			// Clear Form
			this.setProperties({
				title: '',
				description: '',
			});
		}
	}
});
