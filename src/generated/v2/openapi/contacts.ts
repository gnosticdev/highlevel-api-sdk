export type paths = {
	'/contacts/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Contacts
		 * @description Get Contacts
		 */
		get: operations['get-contacts']
		put?: never
		/**
		 * Create Contact
		 * @description Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
		 */
		post: operations['create-contact']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Contact
		 * @description Get Contact
		 */
		get: operations['get-contact']
		/**
		 * Update Contact
		 * @description Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
		 */
		put: operations['update-contact']
		post?: never
		/**
		 * Delete Contact
		 * @description Delete Contact
		 */
		delete: operations['delete-contact']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/appointments': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Appointments for Contact
		 * @description Get Appointments for Contact
		 */
		get: operations['get-appointments-for-contact']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/campaigns/{campaignId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Add Contact to Campaign
		 * @description Add contact to Campaign
		 */
		post: operations['add-contact-to-campaign']
		/**
		 * Remove Contact From Campaign
		 * @description Remove Contact From Campaign
		 */
		delete: operations['remove-contact-from-campaign']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/campaigns/removeAll': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		/**
		 * Remove Contact From Every Campaign
		 * @description Remove Contact From Every Campaign
		 */
		delete: operations['remove-contact-from-every-campaign']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/followers': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Add Followers
		 * @description Add Followers
		 */
		post: operations['add-followers-contact']
		/**
		 * Remove Followers
		 * @description Remove Followers
		 */
		delete: operations['remove-followers-contact']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/notes': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get All Notes
		 * @description Get All Notes
		 */
		get: operations['get-all-notes']
		put?: never
		/**
		 * Create Note
		 * @description Create Note
		 */
		post: operations['create-note']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/notes/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Note
		 * @description Get Note
		 */
		get: operations['get-note']
		/**
		 * Update Note
		 * @description Update Note
		 */
		put: operations['update-note']
		post?: never
		/**
		 * Delete Note
		 * @description Delete Note
		 */
		delete: operations['delete-note']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/tags': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Add Tags
		 * @description Add Tags
		 */
		post: operations['add-tags']
		/**
		 * Remove Tags
		 * @description Remove Tags
		 */
		delete: operations['remove-tags']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/tasks': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get all Tasks
		 * @description Get all Tasks
		 */
		get: operations['get-all-tasks']
		put?: never
		/**
		 * Create Task
		 * @description Create Task
		 */
		post: operations['create-task']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/tasks/{taskId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Task
		 * @description Get Task
		 */
		get: operations['get-task']
		/**
		 * Update Task
		 * @description Update Task
		 */
		put: operations['update-task']
		post?: never
		/**
		 * Delete Task
		 * @description Delete Task
		 */
		delete: operations['delete-task']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/tasks/{taskId}/completed': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Task Completed
		 * @description Update Task Completed
		 */
		put: operations['update-task-completed']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/{contactId}/workflow/{workflowId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Add Contact to Workflow
		 * @description Add Contact to Workflow
		 */
		post: operations['add-contact-to-workflow']
		/**
		 * Delete Contact to Workflow
		 * @description Delete Contact to Workflow
		 */
		delete: operations['delete-contact-to-workflow']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/bulk/business': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Add/Remove Contacts From Business
		 * @description Add/Remove Contacts From Business
		 */
		post: operations['add-remove-contact-from-business']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/business/{businessId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Contacts By BusinessId
		 * @description Get Contacts By BusinessId
		 */
		get: operations['get-contacts-by-businessId']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Search Contacts
		 * @description Search contacts based on combinations of advanced filters. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad
		 */
		post: operations['search-contacts-advanced']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/search/duplicate': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Duplicate Contact
		 * @description Get Duplicate Contact.<br><br>If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is `email` and the second priority will be `phone`.
		 */
		get: operations['get-duplicate-contact']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/contacts/upsert': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Upsert Contact
		 * @description Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a><br><br>If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for de-duplication. If the setting is enabled, a new contact will get created with the shared details.
		 */
		post: operations['upsert-contact']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export type components = {
	schemas: {
		AddContactToCampaignDto: Record<string, never>
		AttributionSource: {
			campaign?: string | null
			campaignId?: string | null
			dclid?: string | null
			fbc?: string | null
			fbclid?: string | null
			/** @example Mozilla/5.0 */
			fbEventId?: string | null
			/** @example fb. 1.1674748390986.1171287961 */
			fbp?: string | null
			/** @example CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB */
			gclid?: string | null
			/** @example 58.111.106.198 */
			ip?: string | null
			/** @example survey */
			medium?: string | null
			/** @example FglfHAn30PRwsZVyQlKp */
			mediumId?: string | null
			msclikid?: string | null
			/** @example https: //www.google.com */
			referrer?: string | null
			/** @example Trigger Link */
			url: string
			/** @example Mozilla/5.0 */
			userAgent?: string | null
			utmContent?: string | null
			utmMedium?: string | null
			utmSource?: string | null
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		Contact: {
			/** @example [
			 *       "john@example.com",
			 *       "jane@example.com"
			 *     ] */
			additionalEmails?: string[]
			/** @example [
			 *       "123456789",
			 *       "987654321"
			 *     ] */
			additionalPhones?: string[]
			/** @example 123 Main Street */
			address?: string
			/** @example 182goXVW3lIExEQPOnd3 */
			assignedTo?: string
			/** @example 282goXVW3lIExEQPOnd3 */
			businessId?: string
			/** @example Acme Corporation */
			businessName?: string
			/** @example New York */
			city?: string
			/** @example XYZ Corp */
			companyName?: string
			/** @example United States */
			country?: string
			customFields?: components['schemas']['CustomFieldSchema'][]
			/** @example 2024-06-06T18:54:57.221Z */
			dateAdded?: string
			/** @example 1990-01-01 */
			dateOfBirth?: string
			/** @example 2024-06-06T18:54:57.221Z */
			dateUpdated?: string
			/** @example false */
			dnd?: boolean
			dndSettings?: components['schemas']['DndSettingsSchema']
			/** @example john@example.com */
			email?: string
			/** @example john */
			firstNameLowerCase?: string
			/** @example [
			 *       "682goXVW3lIExEQPOnd3",
			 *       "582goXVW3lIExEQPOnd3"
			 *     ] */
			followers?: string[]
			/** @example 102goXVW3lIExEQPOnd3 */
			id?: string
			/** @example doe */
			lastNameLowerCase?: string
			/** @example 502goXVW3lIExEQPOnd3 */
			locationId?: string
			opportunities?: components['schemas']['ContactOpportunity'][]
			/** @example +123456789 */
			phone?: string
			/** @example Mobile */
			phoneLabel?: string
			/** @example 12345 */
			postalCode?: string
			/** @example [
			 *       1234,
			 *       "102goXVW3lIExEQPOnd3"
			 *     ] */
			searchAfter?: string[]
			/** @example Website */
			source?: string
			/** @example California */
			state?: string
			/** @example [
			 *       "tag-1",
			 *       "tag-2"
			 *     ] */
			tags?: string[]
			/** @example lead */
			type?: string
			/** @example true */
			validEmail?: boolean
		}
		ContactOpportunity: {
			/** @example 1a2b3c4d5e6f7g8h9i0j */
			id: string
			/** @example 10000 */
			monetary_value: number
			/** @example pipeline123 */
			pipeline_id: string
			/** @example stage456 */
			pipeline_stage_id: string
			/** @example open */
			status: string
		}
		ContactsBulkUpateResponse: {
			/** @example [
			 *       "pOC0uJ97VYOKH2m3fkMD"
			 *     ] */
			ids: string[]
			/** @example true */
			success: boolean
		}
		ContactsBusinessUpdate: {
			/** @example 63b7ec34ea409a9a8bd2a4ff */
			businessId: string | null
			/** @example [
			 *       "IDqvFHGColiyK6jiatuz",
			 *       "pOC0uJ97VYOKH2m3fkMD"
			 *     ] */
			ids: string[]
			/** @example PX8m5VwxEbcpFlzYEPVG */
			locationId: string
		}
		ContactsByIdSuccessfulResponseDto: {
			contact?: components['schemas']['GetContectByIdSchema']
		}
		ContactsMetaSchema: {
			/** @example 2 */
			currentPage?: number
			/** @example 3 */
			nextPage?: number
			/** @example http://localhost:5058/contacts/?locationId=ve9EPM428h8vShlRW1KT&startAfter=1631087949919&startAfterId=yd0jdjOavGk2o6Nh5Ndb */
			nextPageUrl?: string
			/** @example 1 */
			prevPage?: number | null
			/** @example 1631087949919 */
			startAfter?: number
			/** @example yd0jdjOavGk2o6Nh5Ndb */
			startAfterId?: string
			/** @example 50 */
			total?: number
		}
		ContactsSearchSchema: {
			attributions?: components['schemas']['AttributionSource'][]
			/** @example 641c094001436dbc2081e642 */
			businessId?: string
			/** @example DE */
			country?: string
			customFields?: components['schemas']['CustomFieldSchema'][]
			/** @example 2020-10-29T09:31:30.255Z */
			dateAdded?: string
			/** @example JohnDeo@gmail.com */
			email?: string
			/** @example 641c094001436dbc2081e642 */
			followers?: string[]
			/** @example ocQHyuzHvysMo5N5VsXc */
			id?: string
			/** @example C2QujeCh8ZnC7al2InWR */
			locationId?: string
			/** @example xyz form */
			source?: string
			/** @example [
			 *       "nisi sint commodo amet",
			 *       "consequat"
			 *     ] */
			tags?: string[]
			/** @example Asia/Calcutta */
			timezone?: string
		}
		ContactsSearchSuccessfulResponseDto: {
			contacts?: components['schemas']['ContactsSearchSchema'][]
			/** @example 10 */
			count?: number
		}
		ContactsWorkflowSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		CreateAddFollowersSuccessfulResponseDto: {
			/** @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "sx6wyHhbFdRXh302LLss"
			 *     ] */
			followers?: string[]
			/** @example [
			 *       "Mx6wyHhbFdRXh302Luer",
			 *       "Ka6wyHhbFdRXh302LLsAm"
			 *     ] */
			followersAdded?: string[]
		}
		CreateAddTagSuccessfulResponseDto: {
			/** @example [
			 *       "minim",
			 *       "velit magna"
			 *     ] */
			tags?: string[]
		}
		CreateContactDto: {
			/** @example 3535 1st St N */
			address1?: string | null
			/** @example Dolomite */
			city?: string | null
			/** @example DGS VolMAX */
			companyName?: string | null
			/** @example US */
			country?: string
			customFields?: (
				| components['schemas']['customFieldsInputStringSchema']
				| components['schemas']['customFieldsInputArraySchema']
				| components['schemas']['customFieldsInputObjectSchema']
			)[]
			/** @example true */
			dnd?: boolean
			dndSettings?: components['schemas']['DndSettingsSchema']
			/** @example rosan@deos.com */
			email?: string | null
			/** @example Rosan */
			firstName?: string | null
			/** @example male */
			gender?: string
			inboundDndSettings?: components['schemas']['InboundDndSettingsSchema']
			/** @example Deo */
			lastName?: string | null
			/** @example ve9EPM428h8vShlRW1KT */
			locationId: string
			/** @example Rosan Deo */
			name?: string | null
			/** @example +1 888-888-8888 */
			phone?: string | null
			/** @example 35061 */
			postalCode?: string
			/** @example public api */
			source?: string
			/** @example AL */
			state?: string | null
			/** @example [
			 *       "nisi sint commodo amet",
			 *       "consequat"
			 *     ] */
			tags?: string[]
			/** @example America/Chihuahua */
			timezone?: string | null
			/** @example https://www.tesla.com */
			website?: string | null
		}
		CreateContactSchema: {
			/** @example 3535 1st St N */
			address1?: string
			/** @example 25 */
			birthDay?: number
			/** @example 8 */
			birthMonth?: number
			/** @example false */
			bounceEmail?: boolean
			/** @example 641c094001436dbc2081e642 */
			businessId?: string
			/** @example ruDolomitebika */
			city?: string
			/** @example DGS VolMAX */
			companyName?: string
			/** @example US */
			country?: string
			customFields?: components['schemas']['CustomFieldSchema'][]
			/** @example 2021-08-31T09:59:41.937Z */
			dateAdded?: string
			/** @example 1990-09-25T00:00:00.000Z */
			dateOfBirth?: string
			/** @example 2021-08-31T09:59:41.937Z */
			dateUpdated?: string
			/** @example false */
			deleted?: boolean
			/** @example true */
			dnd?: boolean
			dndSettings?: components['schemas']['DndSettingsSchema']
			/** @example rubika@deos.com */
			email?: string
			/** @example rubika@deos.com */
			emailLowerCase?: string
			/** @example rubika */
			firstName?: string
			/** @example rubika */
			firstNameLowerCase?: string
			/** @example rubika deo */
			fullNameLowerCase?: string
			/** @example seD4PfOuKoVMLkEZqohJ */
			id?: string
			/** @example Deo */
			lastName?: string
			/** @example deo */
			lastNameLowerCase?: string
			/** @example 2021-07-16T11:39:30.564Z */
			lastSessionActivityAt?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
			/** @example [] */
			offers?: string[]
			/** @example +18832327657 */
			phone?: string
			/** @example 35061 */
			postalCode?: string
			/** @example [] */
			products?: string[]
			/** @example public api */
			source?: string
			/** @example AL */
			state?: string
			/** @example [
			 *       "nisi sint commodo amet",
			 *       "consequat"
			 *     ] */
			tags?: string[]
			/** @example read */
			type?: string
			/** @example false */
			unsubscribeEmail?: boolean
			/** @example https://www.tesla.com */
			website?: string
		}
		CreateContactsSuccessfulResponseDto: {
			contact?: components['schemas']['CreateContactSchema']
		}
		CreateDeleteCantactsCampaignsSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		CreateDeleteTagSuccessfulResponseDto: {
			/** @example [
			 *       "minim",
			 *       "velit magna"
			 *     ] */
			tags?: string[]
		}
		CreateTaskParams: {
			/** @example hxHGVRb1YJUscrCB8eXK */
			assignedTo?: string
			/** @example loram ipsum */
			body?: string
			/** @example true */
			completed: boolean
			/** @example 2020-10-25T11:00:00Z */
			dueDate: string
			/** @example First Task */
			title: string
		}
		CreateWorkflowDto: {
			/** @example 2021-06-23T03:30:00+01:00 */
			eventStartTime?: string
		}
		CustomFieldSchema: {
			/** @example MgobCB14YMVKuE4Ka8p1 */
			id?: string
			/** @example name */
			value?: string
		}
		customFieldsInputArraySchema: {
			/** @example [
			 *       "test",
			 *       "test2"
			 *     ] */
			field_value?: string[]
			/** @example 6dvNaf7VhkQ9snc5vnjJ */
			id: string
			/** @example my_custom_field */
			key?: string
		}
		customFieldsInputObjectSchema: {
			/** @example {} */
			field_value?: Record<string, never>
			/** @example 6dvNaf7VhkQ9snc5vnjJ */
			id: string
			/** @example my_custom_field */
			key?: string
		}
		customFieldsInputStringSchema: {
			/** @example 9039160788 */
			field_value?: string
			/**
			 * @description Pass either `id` or `key` of custom field
			 * @example 6dvNaf7VhkQ9snc5vnjJ
			 */
			id?: string
			/**
			 * @description Pass either `id` or `key` of custom field
			 * @example my_custom_field
			 */
			key?: string
		}
		DeleteContactsSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		DeleteFollowersSuccessfulResponseDto: {
			/** @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "sx6wyHhbFdRXh302LLss"
			 *     ] */
			followers?: string[]
			/** @example [
			 *       "Mx6wyHhbFdRXh302Luer",
			 *       "Ka6wyHhbFdRXh302LLsAm"
			 *     ] */
			followersRemoved?: string[]
		}
		DeleteNoteSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		DeleteTaskSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		DndSettingSchema: {
			code?: string
			message?: string
			/** @enum {string} */
			status: 'active' | 'inactive' | 'permanent'
		}
		DndSettingsSchema: {
			Call?: components['schemas']['DndSettingSchema']
			Email?: components['schemas']['DndSettingSchema']
			FB?: components['schemas']['DndSettingSchema']
			GMB?: components['schemas']['DndSettingSchema']
			SMS?: components['schemas']['DndSettingSchema']
			WhatsApp?: components['schemas']['DndSettingSchema']
		}
		FollowersDTO: {
			/** @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "sx6wyHhbFdRXh302Lunr"
			 *     ] */
			followers: string[]
		}
		GetContectByIdSchema: {
			/** @example 3535 1st St N */
			address1?: string
			/** @example ve9EPM428h8vShlRW1KT */
			assignedTo?: string
			attachments?: string
			attributionSource?: components['schemas']['AttributionSource']
			/** @example 641c094001436dbc2081e642 */
			businessId?: string
			/** @example ruDolomitebika */
			city?: string
			/** @example DGS VolMAX */
			companyName?: string
			/** @example US */
			country?: string
			customFields?: components['schemas']['CustomFieldSchema'][]
			/** @example 2021-07-02T05:18:26.704Z */
			dateAdded?: string
			/** @example 1990-09-25T00:00:00.000Z */
			dateOfBirth?: string
			/** @example 2021-07-02T05:18:26.704Z */
			dateUpdated?: string
			/** @example true */
			dnd?: boolean
			dndSettings?: components['schemas']['DndSettingsSchema']
			/** @example rubika@deos.com */
			email?: string
			/** @example rubika@deos.com */
			emailLowerCase?: string
			/** @example rubika */
			firstName?: string
			/** @example rubika */
			firstNameLowerCase?: string
			/** @example rubika deo */
			fullNameLowerCase?: string
			/** @example male */
			gender?: string
			/** @example seD4PfOuKoVMLkEZqohJ */
			id?: string
			/** @example test */
			keyword?: string
			/** @example 2021-07-16T11:39:30.564Z */
			lastActivity?: string
			lastAttributionSource?: components['schemas']['AttributionSource']
			/** @example Deo */
			lastName?: string
			/** @example deo */
			lastNameLowerCase?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
			/** @example rubika deo */
			name?: string
			/** @example +18832327657 */
			phone?: string
			/** @example 35061 */
			postalCode?: string
			/** @example public api */
			source?: string
			ssn?: string
			/** @example AL */
			state?: string
			/** @example [
			 *       "nisi sint commodo amet",
			 *       "consequat"
			 *     ] */
			tags?: string[]
			/** @example  */
			timezone?: string
			/** @example read */
			type?: string
			/** @example https://www.tesla.com */
			website?: string
		}
		GetCreateUpdateNoteSuccessfulResponseDto: {
			note?: components['schemas']['GetNoteSchema']
		}
		GetEventSchema: {
			/** @example confirmed */
			appoinmentStatus?: string
			/** @example YlWd2wuCAZQzh2cH1fVZ */
			assignedUserId?: string
			/** @example YlWd2wuCAZQzh2cH1fVZ */
			calendarId?: string
			/** @example 2021-07-16 11:30:00 */
			endTime?: string
			/** @example YS3jaqqeehkR2Is80miy */
			id?: string
			/** @example test */
			notes?: string
			/** @example 2021-07-16 11:00:00 */
			startTime?: string
			/** @example booked */
			status?: string
			/** @example Test */
			title?: string
		}
		GetEventsSuccessfulResponseDto: {
			events?: components['schemas']['GetEventSchema'][]
		}
		GetNoteSchema: {
			/** @example lorem ipsum */
			body?: string
			/** @example TUcmRxWrjqzJS8EjkxNK */
			contactId?: string
			/** @example 2021-07-08T12:02:11.285Z */
			dateAdded?: string
			/** @example HGPcayliwcdoUFzvbTok */
			id?: string
			/** @example TUcmRxWrjqzJS8EjkxNK */
			userId?: string
		}
		GetNotesListSuccessfulResponseDto: {
			notes?: components['schemas']['GetNoteSchema'][]
		}
		InboundDndSettingSchema: {
			message?: string
			/** @enum {string} */
			status: 'active' | 'inactive'
		}
		InboundDndSettingsSchema: {
			all?: components['schemas']['InboundDndSettingSchema']
		}
		NotesDTO: {
			/** @example lorem ipsum */
			body: string
			/** @example GCs5KuzPqTls7vWclkEV */
			userId?: string
		}
		SearchBodyV2DTO: Record<string, never>
		SearchContactSuccessResponseDto: {
			contacts: components['schemas']['Contact'][]
			/** @example 120 */
			total: number
		}
		TagsDTO: {
			/** @example [
			 *       "minim",
			 *       "velit magna"
			 *     ] */
			tags: string[]
		}
		TaskByIsSuccessfulResponseDto: {
			task?: components['schemas']['TaskSchema']
		}
		TaskSchema: {
			/** @example tesTUcmRxWrjqzJS8EjkxNKting */
			assignedTo?: string
			/** @example testing */
			body?: string
			/** @example true */
			completed?: boolean
			/** @example lJpzYrWdpkC2hX6t2yue */
			contactId?: string
			/** @example 2021-07-08T02:30:00.000Z */
			dueDate?: string
			/** @example lJpzYrWdpkC2hX6t2yue */
			id?: string
			/** @example test */
			title?: string
		}
		TasksListSuccessfulResponseDto: {
			tasks?: components['schemas']['TaskSchema'][]
		}
		UnauthorizedDTO: {
			/** @example Unauthorized */
			error?: string
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example 401 */
			statusCode?: number
		}
		UnprocessableDTO: {
			/** @example Unprocessable Entity */
			error?: string
			/** @example [
			 *       "Unprocessable Entity"
			 *     ] */
			message?: string[]
			/** @example 422 */
			statusCode?: number
		}
		UpdateContactDto: {
			/** @example 3535 1st St N */
			address1?: string | null
			/** @example Dolomite */
			city?: string | null
			/** @example US */
			country?: string
			customFields?: (
				| components['schemas']['customFieldsInputStringSchema']
				| components['schemas']['customFieldsInputArraySchema']
				| components['schemas']['customFieldsInputObjectSchema']
			)[]
			/** @example true */
			dnd?: boolean
			dndSettings?: components['schemas']['DndSettingsSchema']
			/** @example rosan@deos.com */
			email?: string | null
			/** @example rosan */
			firstName?: string | null
			inboundDndSettings?: components['schemas']['InboundDndSettingsSchema']
			/** @example Deo */
			lastName?: string | null
			/** @example rosan Deo */
			name?: string | null
			/** @example +1 888-888-8888 */
			phone?: string | null
			/** @example 35061 */
			postalCode?: string
			/** @example public api */
			source?: string | null
			/** @example AL */
			state?: string | null
			/**
			 * @description This field will overwrite all current tags associated with the contact. To update a tags, it is recommended to use the Add Tag or Remove Tag API instead.
			 * @example [
			 *       "nisi sint commodo amet",
			 *       "consequat"
			 *     ]
			 */
			tags?: string[]
			/** @example America/Chihuahua */
			timezone?: string | null
			/** @example https://www.tesla.com */
			website?: string | null
		}
		UpdateContactsSuccessfulResponseDto: {
			contact?: components['schemas']['GetContectByIdSchema']
			/** @example true */
			succeded?: boolean
		}
		UpdateTaskBody: {
			/** @example hxHGVRb1YJUscrCB8eXK */
			assignedTo?: string
			/** @example loram ipsum */
			body?: string
			/** @example true */
			completed?: boolean
			/** @example 2020-10-25T11:00:00Z */
			dueDate?: string
			/** @example First Task */
			title?: string
		}
		UpdateTaskStatusParams: {
			/** @example true */
			completed: boolean
		}
		UpsertContactDto: {
			/** @example 3535 1st St N */
			address1?: string | null
			/** @example Dolomite */
			city?: string | null
			/** @example DGS VolMAX */
			companyName?: string | null
			/** @example US */
			country?: string
			customFields?: (
				| components['schemas']['customFieldsInputStringSchema']
				| components['schemas']['customFieldsInputArraySchema']
				| components['schemas']['customFieldsInputObjectSchema']
			)[]
			/** @example true */
			dnd?: boolean
			dndSettings?: components['schemas']['DndSettingsSchema']
			/** @example rosan@deos.com */
			email?: string | null
			/** @example Rosan */
			firstName?: string | null
			/** @example male */
			gender?: string
			inboundDndSettings?: components['schemas']['InboundDndSettingsSchema']
			/** @example Deo */
			lastName?: string | null
			/** @example ve9EPM428h8vShlRW1KT */
			locationId: string
			/** @example Rosan Deo */
			name?: string | null
			/** @example +1 888-888-8888 */
			phone?: string | null
			/** @example 35061 */
			postalCode?: string
			/** @example public api */
			source?: string
			/** @example AL */
			state?: string | null
			/**
			 * @description This field will overwrite all current tags associated with the contact. To update a tags, it is recommended to use the Add Tag or Remove Tag API instead.
			 * @example [
			 *       "nisi sint commodo amet",
			 *       "consequat"
			 *     ]
			 */
			tags?: string[]
			/** @example America/Chihuahua */
			timezone?: string | null
			/** @example https://www.tesla.com */
			website?: string | null
		}
		UpsertContactsSuccessfulResponseDto: {
			contact?: components['schemas']['GetContectByIdSchema']
			/** @example true */
			new?: boolean
			traceId?: string
		}
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
	'get-contacts': {
		parameters: {
			query: {
				/**
				 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
				 * @example 20
				 */
				limit?: number
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Contact Query
				 * @example John
				 */
				query?: string
				/**
				 * @description Start Afte
				 * @example 1603870249758
				 */
				startAfter?: number
				/**
				 * @description Start After Id
				 * @example UIaE1WjAwWKdlyD7osQI
				 */
				startAfterId?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ContactsSearchSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'create-contact': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateContactDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateContactsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-contact': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ContactsByIdSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'update-contact': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateContactDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateContactsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-contact': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteContactsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-appointments-for-contact': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetEventsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'add-contact-to-campaign': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Campaigns Id
				 * @example Y2I9XM7aO1hncuSOlc9L
				 */
				campaignId: string
				/**
				 * @description Contact Id
				 * @example 3bZD1nQzbul0MCancbQD
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AddContactToCampaignDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateDeleteCantactsCampaignsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'remove-contact-from-campaign': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Campaigns Id
				 * @example Y2I9XM7aO1hncuSOlc9L
				 */
				campaignId: string
				/**
				 * @description Contact Id
				 * @example 3bZD1nQzbul0MCancbQD
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateDeleteCantactsCampaignsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'remove-contact-from-every-campaign': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example 3bZD1nQzbul0MCancbQD
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateDeleteCantactsCampaignsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'add-followers-contact': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302Lunr
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['FollowersDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateAddFollowersSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'remove-followers-contact': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302Lunr
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['FollowersDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteFollowersSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-all-notes': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetNotesListSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'create-note': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['NotesDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetCreateUpdateNoteSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-note': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Note Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				id: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetCreateUpdateNoteSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'update-note': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Note Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['NotesDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetCreateUpdateNoteSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-note': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Note Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				id: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteNoteSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'add-tags': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['TagsDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateAddTagSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'remove-tags': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['TagsDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateDeleteTagSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-all-tasks': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['TasksListSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'create-task': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateTaskParams']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['TaskByIsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-task': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Task Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				taskId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['TaskByIsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'update-task': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Task Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				taskId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateTaskBody']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['TaskByIsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-task': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Task Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				taskId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteTaskSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'update-task-completed': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Task Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				taskId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateTaskStatusParams']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['TaskByIsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'add-contact-to-workflow': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Workflow Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				workflowId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateWorkflowDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ContactsWorkflowSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-contact-to-workflow': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Contact Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				contactId: string
				/**
				 * @description Workflow Id
				 * @example sx6wyHhbFdRXh302LLNR
				 */
				workflowId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateWorkflowDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ContactsWorkflowSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'add-remove-contact-from-business': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['ContactsBusinessUpdate']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ContactsBulkUpateResponse']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-contacts-by-businessId': {
		parameters: {
			query: {
				/** @example 10 */
				limit?: string
				/** @example 5DP4iH6HLkQsiKESj6rh */
				locationId: string
				/** @example contact name */
				query?: string
				/** @example 10 */
				skip?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				businessId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ContactsSearchSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'search-contacts-advanced': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SearchBodyV2DTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SearchContactSuccessResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-duplicate-contact': {
		parameters: {
			query: {
				/**
				 * @description Email - Pass in URL Encoded form. i.e test+abc@gmail.com will become `test%2Babc%40gmail.com`
				 * @example abc@abc.com
				 */
				email?: string
				/**
				 * @description Location Id
				 * @example sadadya1u12basyhasd
				 */
				locationId: string
				/**
				 * @description Phone Number - Pass in URL Encoded form. i.e +1423164516 will become `%2B1423164516`
				 * @example +1423164516
				 */
				number?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'upsert-contact': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpsertContactDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpsertContactsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
}
