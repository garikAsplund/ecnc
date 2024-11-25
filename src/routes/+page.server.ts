import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { schema } from '$lib/schema';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
    default: async ({ request, fetch }) => {
		const form = await superValidate(request, zod(schema));
		console.log(form);

		if (!form.valid) {
			return fail(400, { form });
		} else {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			});

			if (response.ok) {
				return message(form, 'Email sent successfully');
			} else {
				const errorData = await response.json();
				return message(form, `Error sending email: ${errorData.error}`);
			}
		}
	}
} satisfies Actions;