import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import { routes } from '../../ui-admin/client/routes';

routes.route('/mailer', {
	name: 'admin-mailer',
	async action() {
		await import('./views');
		return BlazeLayout.render('main', {
			center: 'mailer',
		});
	},
});

FlowRouter.route('/mailer/unsubscribe/:_id/:createdAt', {
	name: 'mailer-unsubscribe',
	async action(params) {
		await import('./views');
		Meteor.call('Mailer:unsubscribe', params._id, params.createdAt);
		return BlazeLayout.render('mailerUnsubscribe');
	},
});
