export type paths = {
	'/calendars/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Calendars
		 * @description Get all calendars in a location.
		 */
		get: operations['get-calendars']
		put?: never
		/**
		 * Create Calendar
		 * @description Create calendar in a location.
		 */
		post: operations['create-calendar']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/{calendarId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Calendar
		 * @description Get calendar by ID
		 */
		get: operations['get-calendar']
		/**
		 * Update Calendar
		 * @description Update calendar by ID.
		 */
		put: operations['update-calendar']
		post?: never
		/**
		 * Delete Calendar
		 * @description Delete calendar by ID
		 */
		delete: operations['delete-calendar']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/{calendarId}/free-slots': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Free Slots
		 * @description Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.
		 */
		get: operations['get-slots']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/{calendarId}/notifications': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get notifications
		 * @description Get calendar notifications based on query
		 */
		get: operations['get-event-notification']
		put?: never
		/**
		 * Create notification
		 * @description Create Calendar notifications, either one or multiple. All notification settings must be for single calendar only
		 */
		post: operations['create-event-notification']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/{calendarId}/notifications/{notificationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get notification
		 * @description Find Event notification by notificationId
		 */
		get: operations['find-event-notification']
		/**
		 * Update notification
		 * @description Update Event notification by id
		 */
		put: operations['update-event-notification']
		post?: never
		/** @description Delete notification */
		delete: operations['delete-event-notification']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/appointments/{appointmentId}/notes': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Notes
		 * @description Get Appointment Notes
		 */
		get: operations['get-appointment-notes']
		put?: never
		/**
		 * Create Note
		 * @description Create Note
		 */
		post: operations['create-appointment-note']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/appointments/{appointmentId}/notes/{noteId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Note
		 * @description Update Note
		 */
		put: operations['update-appointment-note']
		post?: never
		/**
		 * Delete Note
		 * @description Delete Note
		 */
		delete: operations['delete-appointment-note']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/blocked-slots': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Blocked Slots
		 * @description Get Blocked Slots
		 */
		get: operations['get-blocked-slots']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Calendar Events
		 * @description Get Calendar Events
		 */
		get: operations['get-calendar-events']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/{eventId}': {
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
		 * Delete Event
		 * @description Delete event by ID
		 */
		delete: operations['delete-event']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/appointments': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Appointment
		 * @description Create appointment
		 */
		post: operations['create-appointment']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/appointments/{eventId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Appointment
		 * @description Get appointment by ID
		 */
		get: operations['get-appointment']
		/**
		 * Update Appointment
		 * @description Update appointment by ID
		 */
		put: operations['edit-appointment']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/block-slots': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Block Slot
		 * @description Create block slot
		 */
		post: operations['create-block-slot']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/block-slots/{eventId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Block Slot
		 * @description Update block slot by ID
		 */
		put: operations['edit-block-slot']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/groups': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Groups
		 * @description Get all calendar groups in a location.
		 */
		get: operations['get-groups']
		put?: never
		/**
		 * Create Calendar Group
		 * @description Create Calendar Group
		 */
		post: operations['create-calendar-group']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/groups/{groupId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Group
		 * @description Update Group by group ID
		 */
		put: operations['edit-group']
		post?: never
		/**
		 * Delete Group
		 * @description Delete Group
		 */
		delete: operations['delete-group']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/groups/{groupId}/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Disable Group
		 * @description Disable Group
		 */
		put: operations['disable-group']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/groups/validate-slug': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Validate group slug
		 * @description Validate if group slug is available or not.
		 */
		post: operations['validate-groups-slug']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/resources/{resourceType}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Calendar Resources
		 * @description List calendar resources by resource type and location ID
		 */
		get: operations['fetch-calendar-resources']
		put?: never
		/**
		 * Create Calendar Resource
		 * @description Create calendar resource by resource type
		 */
		post: operations['create-calendar-resource']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/resources/{resourceType}/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Calendar Resource
		 * @description Get calendar resource by ID
		 */
		get: operations['get-calendar-resource']
		/**
		 * Update Calendar Resource
		 * @description Update calendar resource by ID
		 */
		put: operations['update-calendar-resource']
		post?: never
		/**
		 * Delete Calendar Resource
		 * @description Delete calendar resource by ID
		 */
		delete: operations['delete-calendar-resource']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export type components = {
	schemas: {
		AllGroupsSuccessfulResponseDTO: {
			groups?: components['schemas']['GroupDTO'][]
		}
		AppointmentCreateSchema: {
			/**
			 * @description Appointment Address
			 * @example Zoom
			 */
			address?: string
			/**
			 * @example confirmed
			 * @enum {string}
			 */
			appointmentStatus?:
				| 'new'
				| 'confirmed'
				| 'cancelled'
				| 'showed'
				| 'noshow'
				| 'invalid'
			/**
			 * @description Assigned User Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			assignedUserId?: string
			/**
			 * @description Calendar Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId: string
			/**
			 * @description Contact Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			contactId: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime?: string
			/**
			 * @description If set to true, the minimum scheduling notice and date range would be ignored
			 * @example false
			 */
			ignoreDateRange?: boolean
			/**
			 * @description If true the time slot validation would be avoided for any appointment creation (even the ignoreDateRange)
			 * @example true
			 */
			ignoreFreeSlotValidation?: boolean
			/**
			 * @description Location Id
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description The unique identifier for the meeting location.
			 *     - This value can be found in `calendar.locationConfigurations`or `calendar.teamMembers[].locationConfigurations`
			 * @default default
			 * @example custom_0
			 */
			meetingLocationId: string
			/**
			 * @description Meeting location type.
			 *     - If `address` is provided in the request body, the `meetingLocationType` defaults to **custom**.
			 * @example custom
			 * @enum {string}
			 */
			meetingLocationType?:
				| 'custom'
				| 'zoom'
				| 'gmeet'
				| 'phone'
				| 'address'
				| 'ms_teams'
				| 'google'
			/**
			 * @description Flag to override location config
			 *     - **false** - If only `meetingLocationId` is provided
			 *     - **true** - If only `meetingLocationType` is provided
			 *
			 * @example true
			 */
			overrideLocationConfig?: boolean
			/** @description RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true. */
			rrule?: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
			/**
			 * @description If set to false, the automations will not run
			 * @example false
			 */
			toNotify?: boolean
		}
		AppointmentEditSchema: {
			/**
			 * @description Appointment Address
			 * @example Zoom
			 */
			address?: string
			/**
			 * @example confirmed
			 * @enum {string}
			 */
			appointmentStatus?:
				| 'new'
				| 'confirmed'
				| 'cancelled'
				| 'showed'
				| 'noshow'
				| 'invalid'
			/**
			 * @description Assigned User Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			assignedUserId?: string
			/**
			 * @description Calendar Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId?: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime?: string
			/**
			 * @description If set to true, the minimum scheduling notice and date range would be ignored
			 * @example false
			 */
			ignoreDateRange?: boolean
			/**
			 * @description If true the time slot validation would be avoided for any appointment creation (even the ignoreDateRange)
			 * @example true
			 */
			ignoreFreeSlotValidation?: boolean
			/**
			 * @description The unique identifier for the meeting location.
			 *     - This value can be found in `calendar.locationConfigurations`or `calendar.teamMembers[].locationConfigurations`
			 * @default default
			 * @example custom_0
			 */
			meetingLocationId: string
			/**
			 * @description Meeting location type.
			 *     - If `address` is provided in the request body, the `meetingLocationType` defaults to **custom**.
			 * @example custom
			 * @enum {string}
			 */
			meetingLocationType?:
				| 'custom'
				| 'zoom'
				| 'gmeet'
				| 'phone'
				| 'address'
				| 'ms_teams'
				| 'google'
			/**
			 * @description Flag to override location config
			 *     - **false** - If only `meetingLocationId` is provided
			 *     - **true** - If only `meetingLocationType` is provided
			 *
			 * @example true
			 */
			overrideLocationConfig?: boolean
			/** @description RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true. */
			rrule?: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime?: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
			/**
			 * @description If set to false, the automations will not run
			 * @example false
			 */
			toNotify?: boolean
		}
		AppointmentSchemaResponse: {
			/**
			 * @description Appointment Address
			 * @example Zoom
			 */
			address?: string
			/**
			 * @example confirmed
			 * @enum {string}
			 */
			appointmentStatus?:
				| 'new'
				| 'confirmed'
				| 'cancelled'
				| 'showed'
				| 'noshow'
				| 'invalid'
			/**
			 * @description Assigned User Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			assignedUserId?: string
			/**
			 * @description Calendar Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId: string
			/**
			 * @description Contact Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			contactId: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime?: string
			/**
			 * @description Id
			 * @example 0TkCdp9PfvLeWKYRRvIz
			 */
			id: string
			/**
			 * @description true if the event is recurring otherwise false
			 * @example true
			 */
			isRecurring?: boolean
			/**
			 * @description Location Id
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Meeting Location Type
			 * @default default
			 * @example custom
			 */
			meetingLocationType: string
			/** @description RRULE as per the iCalendar (RFC 5545) specification for recurring events */
			rrule?: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime?: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
		}
		Availability: {
			/**
			 * @description Formulate the date string in the format of `<YYYY-MM-DD in local timezone>T00:00:00.000Z`.
			 * @example 2023-09-24T00:00:00.000Z
			 */
			date: string
			/** @default false */
			deleted: boolean
			hours: components['schemas']['Hour'][]
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		BlockSlotCreateSchema: {
			/**
			 * @description Assigned User Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			assignedUserId?: string
			/**
			 * @description Calendar Id (Block Slot can only be created on simple/event calendars)
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId?: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime: string
			/**
			 * @description Location Id
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
		}
		BlockSlotEditSchema: {
			/**
			 * @description Assigned User Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			assignedUserId?: string
			/**
			 * @description Calendar Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId?: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime?: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime?: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
		}
		CalendarByIdSuccessfulResponseDTO: {
			calendar: components['schemas']['CalendarDTO']
		}
		CalendarCreateDTO: {
			alertEmail?: string
			/** @description Minimum scheduling notice for events */
			allowBookingAfter?: number
			/**
			 * @description Unit for minimum scheduling notice
			 * @example days
			 * @enum {string}
			 */
			allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months'
			/** @description Minimum number of days/weeks/months for which to allow booking events */
			allowBookingFor?: number
			/**
			 * @description Unit for controlling the duration for which booking would be allowed for
			 * @example days
			 * @enum {string}
			 */
			allowBookingForUnit?: 'days' | 'weeks' | 'months'
			/** @default true */
			allowCancellation: boolean
			/** @default true */
			allowReschedule: boolean
			/** @description Number of appointments that can be booked for a given day */
			appoinmentPerDay?: number
			/**
			 * @description Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar.
			 * @default 1
			 */
			appoinmentPerSlot: number
			/** @default true */
			autoConfirm: boolean
			/** @description This is only to set the custom availability. For standard availability, use the openHours property */
			availabilities?: components['schemas']['Availability'][]
			/**
			 * @description Determines which availability type to consider:
			 *     - **1**: Only custom availabilities will be used.
			 *     - **0**: Only open hours will be used.
			 *     - **null**: Both custom availabilities and open hours will be considered.
			 * @enum {number}
			 */
			availabilityType?: 0 | 1
			/** @example https://path-to-image.com */
			calendarCoverImage?: string
			/** @enum {string} */
			calendarType?:
				| 'round_robin'
				| 'event'
				| 'class_booking'
				| 'collective'
				| 'service_booking'
				| 'personal'
			consentLabel?: string
			/** @example this is used for testing */
			description?: string
			/**
			 * @description Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this
			 * @default false
			 */
			enableRecurring: boolean
			/** @default #039be5 */
			eventColor: string
			/** @default {{contact.name}} */
			eventTitle: string
			/**
			 * @default RoundRobin_OptimizeForAvailability
			 * @enum {string}
			 */
			eventType:
				| 'RoundRobin_OptimizeForAvailability'
				| 'RoundRobin_OptimizeForEqualDistribution'
			formId?: string
			formSubmitRedirectURL?: string
			formSubmitThanksMessage?: string
			/**
			 * @default ThankYouMessage
			 * @enum {string}
			 */
			formSubmitType: 'RedirectURL' | 'ThankYouMessage'
			/** @default false */
			googleInvitationEmails: boolean
			/**
			 * @description Group Id
			 * @example BqTwX8QFwXzpegMve9EQ
			 */
			groupId?: string
			/** @enum {string} */
			guestType?: 'count_only' | 'collect_detail'
			/**
			 * @description Should the created calendar be active or draft
			 * @default true
			 */
			isActive: boolean
			isLivePaymentMode?: boolean
			/** @description Meeting location configuration for event calendar */
			locationConfigurations?: components['schemas']['LocationConfiguration'][]
			/** @example ocQHyuzHvysMo5N5VsXc */
			locationId: string
			/** @description Look Busy Configuration */
			lookBusyConfig?: components['schemas']['LookBusyConfiguration']
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Use `locationConfigurations.location` or `teamMembers[].locationConfigurations.location` instead.
			 */
			readonly meetingLocation?: string
			/** @example test calendar */
			name: string
			notes?: string
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Please use 'Calendar Notifications APIs' instead.
			 */
			notifications?: components['schemas']['CalendarNotification'][]
			/** @description This is only to set the standard availability. For custom availability, use the availabilities property */
			openHours?: components['schemas']['OpenHour'][]
			pixelId?: string
			/** @description Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready */
			preBuffer?: number
			/**
			 * @description Unit for pre-buffer.
			 * @enum {string}
			 */
			preBufferUnit?: 'mins' | 'hours'
			recurring?: components['schemas']['Recurring']
			shouldAssignContactToTeamMember?: boolean
			shouldSendAlertEmailsToAssignedMember?: boolean
			shouldSkipAssigningContactForExisting?: boolean
			/** @description Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up */
			slotBuffer?: number
			/**
			 * @description Unit for slot buffer.
			 * @enum {string}
			 */
			slotBufferUnit?: 'mins' | 'hours'
			/**
			 * @description This controls the duration of the meeting
			 * @default 30
			 */
			slotDuration: number
			/**
			 * @description Unit for slot duration.
			 * @enum {string}
			 */
			slotDurationUnit?: 'mins' | 'hours'
			/**
			 * @description Slot interval reflects the amount of time the between booking slots that will be shown in the calendar.
			 * @default 30
			 */
			slotInterval: number
			/**
			 * @description Unit for slot interval.
			 * @enum {string}
			 */
			slotIntervalUnit?: 'mins' | 'hours'
			/** @example test1 */
			slug?: string
			stickyContact?: boolean
			/** @description Team members are required for calendars of type: Round Robin, Collective, Class, Service. */
			teamMembers?: components['schemas']['TeamMember'][]
			/** @example test1 */
			widgetSlug?: string
			/**
			 * @description Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
			 * @default classic
			 * @example classic
			 * @enum {string}
			 */
			widgetType: 'default' | 'classic'
		}
		CalendarDeleteSuccessfulResponseDTO: {
			/**
			 * @description Success
			 * @example true
			 */
			success: boolean
		}
		CalendarDTO: {
			alertEmail?: string
			/** @description Minimum scheduling notice for events */
			allowBookingAfter?: number
			/**
			 * @description Unit for minimum scheduling notice
			 * @example days
			 * @enum {string}
			 */
			allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months'
			/** @description Minimum number of days/weeks/months for which to allow booking events */
			allowBookingFor?: number
			/**
			 * @description Unit for controlling the duration for which booking would be allowed for
			 * @example days
			 * @enum {string}
			 */
			allowBookingForUnit?: 'days' | 'weeks' | 'months'
			/** @default true */
			allowCancellation: boolean
			/** @default true */
			allowReschedule: boolean
			/** @description Number of appointments that can be booked for a given day */
			appoinmentPerDay?: number
			/**
			 * @description Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar.
			 * @default 1
			 */
			appoinmentPerSlot: number
			/** @default true */
			autoConfirm: boolean
			/** @description This is only to set the custom availability. For standard availability, use the openHours property */
			availabilities?: components['schemas']['Availability'][]
			/**
			 * @description Determines which availability type to consider:
			 *     - **1**: Only custom availabilities will be used.
			 *     - **0**: Only open hours will be used.
			 *     - **null**: Both custom availabilities and open hours will be considered.
			 * @enum {number}
			 */
			availabilityType?: 0 | 1
			/** @example https://path-to-image.com */
			calendarCoverImage?: string
			/** @enum {string} */
			calendarType?:
				| 'round_robin'
				| 'event'
				| 'class_booking'
				| 'collective'
				| 'service_booking'
				| 'personal'
			consentLabel?: string
			/** @example this is used for testing */
			description?: string
			/**
			 * @description Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this
			 * @default false
			 */
			enableRecurring: boolean
			/** @default #039be5 */
			eventColor: string
			/** @default {{contact.name}} */
			eventTitle: string
			/**
			 * @default RoundRobin_OptimizeForAvailability
			 * @enum {string}
			 */
			eventType:
				| 'RoundRobin_OptimizeForAvailability'
				| 'RoundRobin_OptimizeForEqualDistribution'
			formId?: string
			formSubmitRedirectURL?: string
			formSubmitThanksMessage?: string
			/**
			 * @default ThankYouMessage
			 * @enum {string}
			 */
			formSubmitType: 'RedirectURL' | 'ThankYouMessage'
			/** @default false */
			googleInvitationEmails: boolean
			/**
			 * @description Group Id
			 * @example BqTwX8QFwXzpegMve9EQ
			 */
			groupId?: string
			/** @enum {string} */
			guestType?: 'count_only' | 'collect_detail'
			/** @example 0TkCdp9PfvLeWKYRRvIz */
			id: string
			/**
			 * @description Should the created calendar be active or draft
			 * @default true
			 */
			isActive: boolean
			isLivePaymentMode?: boolean
			/** @description Meeting location configuration for event calendar */
			locationConfigurations?: components['schemas']['LocationConfigurationResponse'][]
			/** @example ocQHyuzHvysMo5N5VsXc */
			locationId: string
			/** @description Look Busy Configuration */
			lookBusyConfig?: components['schemas']['LookBusyConfiguration']
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Use `locationConfigurations.location` or `teamMembers[].locationConfigurations.location` instead.
			 */
			readonly meetingLocation?: string
			/** @example test calendar */
			name: string
			notes?: string
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Please use 'Calendar Notifications APIs' instead.
			 */
			notifications?: components['schemas']['CalendarNotification'][]
			/** @description This is only to set the standard availability. For custom availability, use the availabilities property */
			openHours?: components['schemas']['OpenHour'][]
			pixelId?: string
			/** @description Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready */
			preBuffer?: number
			/**
			 * @description Unit for pre-buffer.
			 * @enum {string}
			 */
			preBufferUnit?: 'mins' | 'hours'
			recurring?: components['schemas']['Recurring']
			shouldAssignContactToTeamMember?: boolean
			shouldSendAlertEmailsToAssignedMember?: boolean
			shouldSkipAssigningContactForExisting?: boolean
			/** @description Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up */
			slotBuffer?: number
			/**
			 * @description Unit for slot buffer.
			 * @enum {string}
			 */
			slotBufferUnit?: 'mins' | 'hours'
			/**
			 * @description This controls the duration of the meeting
			 * @default 30
			 */
			slotDuration: number
			/**
			 * @description Unit for slot duration.
			 * @enum {string}
			 */
			slotDurationUnit?: 'mins' | 'hours'
			/**
			 * @description Slot interval reflects the amount of time the between booking slots that will be shown in the calendar.
			 * @default 30
			 */
			slotInterval: number
			/**
			 * @description Unit for slot interval.
			 * @enum {string}
			 */
			slotIntervalUnit?: 'mins' | 'hours'
			/** @example test1 */
			slug?: string
			stickyContact?: boolean
			/** @description Team members are for calendars of type: Round Robin, Collective, Class, Service. */
			teamMembers?: components['schemas']['TeamMemberResponse'][]
			/** @example test1 */
			widgetSlug?: string
			/**
			 * @description Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
			 * @default classic
			 * @example classic
			 * @enum {string}
			 */
			widgetType: 'default' | 'classic'
		}
		CalendarEventDTO: {
			/**
			 * @description Calendar Event address
			 * @example https://meet.google.com/yqp-gogr-wve
			 */
			address?: string
			/**
			 * @description Appointment Status
			 * @example confirmed
			 */
			appointmentStatus: string
			/** @description Ids of associated resources rooms and/or equipments */
			assignedResources?: string[]
			/**
			 * @description AssignedUser - the primary owner of an appointment
			 * @example YlWd2wuCAZQzh2cH1fVZ
			 */
			assignedUserId: string
			/**
			 * @description Calendar ID
			 * @example BqTwX8QFwXzpegMve9EQ
			 */
			calendarId: string
			/**
			 * @description Contact ID
			 * @example 9NkT25Vor1v4aQatFsv2
			 */
			contactId: string
			/** @description Appointment booked by metadata */
			createdBy?: components['schemas']['CreatedOrUpdatedBy']
			/**
			 * @description Date Added
			 * @example 2023-09-25T16:00:00+05:30
			 */
			dateAdded: Record<string, never>
			/**
			 * @description Date Updated
			 * @example 2023-09-25T16:00:00+05:30
			 */
			dateUpdated: Record<string, never>
			/**
			 * @description End Time
			 * @example 2023-09-25T16:00:00+05:30
			 */
			endTime: Record<string, never>
			/**
			 * @description Group ID
			 * @example 9NkT25Vor1v4aQatFsv2
			 */
			groupId: string
			/** @description Event Id or Instance id for a recurring event */
			id: string
			/**
			 * @description true if the event is recurring otherwise false
			 * @example true
			 */
			isRecurring?: boolean
			/**
			 * @description Location ID
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			locationId: string
			/**
			 * @description Master event id for a recurring instance
			 * @example ocWd2wuBGAQzh2cH1fSZ
			 */
			masterEventId?: string
			/**
			 * @description Notes
			 * @example Some dummy note
			 */
			notes?: string
			/** @description RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. */
			rrule?: string
			/**
			 * @description Start Time
			 * @example 2023-09-25T16:00:00+05:30
			 */
			startTime: Record<string, never>
			/**
			 * @description Calendar Event title
			 * @example Appointment with GHL Dev team
			 */
			title: string
			/**
			 * @description Users - the secondary owners of an appointment.
			 * @example [
			 *       "YlWd2wuCAZQzh2cH1fVZ",
			 *       "9NkT25Vor1v4aQatFsv2"
			 *     ]
			 */
			users: string[]
		}
		CalendarNotification: {
			/**
			 * @description Comma separated emails
			 * @example user1@testemail.com,user2@testemail.com
			 */
			selectedUsers: string
			shouldSendToContact: boolean
			shouldSendToGuest: boolean
			shouldSendToSelectedUsers: boolean
			shouldSendToUser: boolean
			/**
			 * @description Calendar Notification
			 * @default email
			 * @example email
			 * @enum {string}
			 */
			type: 'email'
		}
		CalendarNotificationDeleteResponseDTO: {
			/** @description Result of delete/update operation */
			message: string
		}
		CalendarNotificationResponseDTO: {
			/** @description Notification ID */
			_id?: string
			/** @example [
			 *       "example1@email.com",
			 *       "example2@email.com"
			 *     ] */
			additionalEmailIds?: string[]
			/** @example [
			 *       {
			 *         "timeOffset": 1,
			 *         "unit": "hours"
			 *       }
			 *     ] */
			afterTime?: components['schemas']['SchedulesDTO'][]
			/**
			 * @example calendar
			 * @enum {string}
			 */
			altType?: 'calendar'
			/** @example [
			 *       {
			 *         "timeOffset": 1,
			 *         "unit": "hours"
			 *       }
			 *     ] */
			beforeTime?: components['schemas']['SchedulesDTO'][]
			/** @example This is a test notification */
			body?: string
			/** @example 0as9d8as0d */
			calendarId?: string
			/**
			 * @example email
			 * @enum {string}
			 */
			channel?: 'email' | 'inApp'
			/** @example false */
			deleted?: boolean
			/** @example true */
			isActive?: boolean
			/**
			 * @example confirmation
			 * @enum {string}
			 */
			notificationType?:
				| 'booked'
				| 'confirmation'
				| 'cancellation'
				| 'reminder'
				| 'followup'
				| 'reschedule'
			/**
			 * @example contact
			 * @enum {string}
			 */
			receiverType?: 'contact' | 'guest' | 'assignedUser' | 'emails'
			/** @example [
			 *       "user1",
			 *       "user2"
			 *     ] */
			selectedUsers?: string[]
			/** @example Test Notification */
			subject?: string
			/** @example 0as9d8as0d */
			templateId?: string
		}
		CalendarResourceByIdResponseDTO: {
			/**
			 * @description Calendar IDs
			 * @example [
			 *       "Jsj0xnlDDjw0SuvX1J13",
			 *       "oCM5feFC86FAAbcO7lJK"
			 *     ]
			 */
			calendarIds: string[]
			/**
			 * @description Capacity of the resource
			 * @example 85
			 */
			capacity?: number
			/** @description Description of the resource */
			description?: string
			/** @description Whether the resource is active */
			isActive: boolean
			/** @description Location ID of the resource */
			locationId: string
			/**
			 * @description Name of the resource
			 * @example yoga room
			 */
			name: string
			/**
			 * @description Indicates if the resource is out of service
			 * @example 0
			 */
			outOfService?: number
			/** @description Quantity of the resource */
			quantity?: number
			/** @enum {string} */
			resourceType: 'equipments' | 'rooms'
		}
		CalendarResourceResponseDTO: {
			/**
			 * @description Capacity of the resource
			 * @example 85
			 */
			capacity?: number
			/** @description Description of the resource */
			description?: string
			/** @description Whether the resource is active */
			isActive: boolean
			/** @description Location ID of the resource */
			locationId: string
			/**
			 * @description Name of the resource
			 * @example yoga room
			 */
			name: string
			/**
			 * @description Indicates if the resource is out of service
			 * @example 0
			 */
			outOfService?: number
			/** @description Quantity of the resource */
			quantity?: number
			/** @enum {string} */
			resourceType: 'equipments' | 'rooms'
		}
		CalendarsGetSuccessfulResponseDTO: {
			calendars?: components['schemas']['CalendarDTO'][]
		}
		CalendarUpdateDTO: {
			alertEmail?: string
			/** @description Minimum scheduling notice for events */
			allowBookingAfter?: number
			/**
			 * @description Unit for minimum scheduling notice
			 * @example days
			 * @enum {string}
			 */
			allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months'
			/** @description Minimum number of days/weeks/months for which to allow booking events */
			allowBookingFor?: number
			/**
			 * @description Unit for controlling the duration for which booking would be allowed for
			 * @example days
			 * @enum {string}
			 */
			allowBookingForUnit?: 'days' | 'weeks' | 'months'
			allowCancellation?: boolean
			allowReschedule?: boolean
			/** @description Number of appointments that can be booked for a given day */
			appoinmentPerDay?: number
			appoinmentPerSlot?: number
			autoConfirm?: boolean
			/** @description This is only to set the custom availability. For standard availability, use the openHours property */
			availabilities?: components['schemas']['UpdateAvailability'][]
			/**
			 * @description Determines which availability type to consider:
			 *     - **1**: Only custom availabilities will be used.
			 *     - **0**: Only open hours will be used.
			 *     - **null**: Both the custom availabilities and open hours will be considered.
			 * @enum {number}
			 */
			availabilityType?: 0 | 1
			calendarCoverImage?: string
			consentLabel?: string
			/** @example this is used for testing */
			description?: string
			/**
			 * @description Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this
			 * @default false
			 */
			enableRecurring: boolean
			/** @default #039be5 */
			eventColor: string
			eventTitle?: string
			/** @enum {string} */
			eventType?:
				| 'RoundRobin_OptimizeForAvailability'
				| 'RoundRobin_OptimizeForEqualDistribution'
			formId?: string
			formSubmitRedirectURL?: string
			formSubmitThanksMessage?: string
			/**
			 * @default ThankYouMessage
			 * @enum {string}
			 */
			formSubmitType: 'RedirectURL' | 'ThankYouMessage'
			googleInvitationEmails?: boolean
			/**
			 * @description Group Id
			 * @example BqTwX8QFwXzpegMve9EQ
			 */
			groupId?: string
			/** @enum {string} */
			guestType?: 'count_only' | 'collect_detail'
			isActive?: boolean
			isLivePaymentMode?: boolean
			/** @description Meeting location configuration for event calendar */
			locationConfigurations?: components['schemas']['LocationConfiguration'][]
			/** @description Look Busy Configuration */
			lookBusyConfig?: components['schemas']['LookBusyConfiguration']
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Use `locationConfigurations.location` or `teamMembers[].locationConfigurations.location` instead.
			 */
			readonly meetingLocation?: string
			/** @example test calendar */
			name?: string
			notes?: string
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Please use 'Calendar Notifications APIs' instead.
			 */
			notifications?: components['schemas']['CalendarNotification'][]
			openHours?: components['schemas']['OpenHour'][]
			pixelId?: string
			/** @description Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready */
			preBuffer?: number
			/**
			 * @description Unit for pre-buffer.
			 * @enum {string}
			 */
			preBufferUnit?: 'mins' | 'hours'
			recurring?: components['schemas']['Recurring']
			shouldAssignContactToTeamMember?: boolean
			shouldSendAlertEmailsToAssignedMember?: boolean
			shouldSkipAssigningContactForExisting?: boolean
			/** @description Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up */
			slotBuffer?: number
			/**
			 * @description This controls the duration of the meeting
			 * @default 30
			 */
			slotDuration: number
			/**
			 * @description Unit for slot duration.
			 * @enum {string}
			 */
			slotDurationUnit?: 'mins' | 'hours'
			/**
			 * @description Slot interval reflects the amount of time the between booking slots that will be shown in the calendar.
			 * @default 30
			 */
			slotInterval: number
			/**
			 * @description Unit for slot interval.
			 * @enum {string}
			 */
			slotIntervalUnit?: 'mins' | 'hours'
			/** @example test1 */
			slug?: string
			stickyContact?: boolean
			/** @description Team members */
			teamMembers?: components['schemas']['TeamMember'][]
			/** @example test1 */
			widgetSlug?: string
			/**
			 * @description Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
			 * @default classic
			 * @example classic
			 * @enum {string}
			 */
			widgetType: 'default' | 'classic'
		}
		CreateBookedSlotSuccessfulResponseDto: {
			/**
			 * @description Assigned User Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			assignedUserId?: string
			/**
			 * @description Calendar id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId?: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime: string
			/**
			 * @description Id
			 * @example 0TkCdp9PfvLeWKYRRvIz
			 */
			id: string
			/**
			 * @description Location Id
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime: string
			/**
			 * @description Title
			 * @example My event
			 */
			title: string
		}
		CreateCalendarNotificationDTO: {
			/**
			 * @description Additional email addresses to receive notifications.
			 * @example [
			 *       "example1@email.com",
			 *       "example2@email.com"
			 *     ]
			 */
			additionalEmailIds?: string[]
			/**
			 * @description Specifies the time after which the follow-up notification should be sent. This is not required for other notification types.
			 * @example [
			 *       {
			 *         "timeOffset": 1,
			 *         "unit": "hours"
			 *       }
			 *     ]
			 */
			afterTime?: components['schemas']['SchedulesDTO'][]
			/**
			 * @description Specifies the time before which the reminder notification should be sent. This is not required for other notification types.
			 * @example [
			 *       {
			 *         "timeOffset": 1,
			 *         "unit": "hours"
			 *       }
			 *     ]
			 */
			beforeTime?: components['schemas']['SchedulesDTO'][]
			/** @description Body  for email notification. Not necessary for in-App notification */
			body?: string
			/**
			 * @description Notification channel
			 * @enum {string}
			 */
			channel: 'email' | 'inApp'
			/** @description from address for email notification */
			fromAddress?: string
			/** @description from name for email notification */
			fromName?: string
			/**
			 * @description Is the notification active
			 * @default true
			 */
			isActive: boolean
			/**
			 * @description Notification type
			 * @enum {string}
			 */
			notificationType:
				| 'booked'
				| 'confirmation'
				| 'cancellation'
				| 'reminder'
				| 'followup'
				| 'reschedule'
			/**
			 * @description notification recipient type
			 * @enum {string}
			 */
			receiverType: 'contact' | 'guest' | 'assignedUser' | 'emails'
			/** @description selected user for in-App notification */
			selectedUsers?: string[]
			/** @description Subject  for email notification. Not necessary for in-App notification */
			subject?: string
			/** @description Template ID for email notification. Not necessary for in-App notification */
			templateId?: string
		}
		CreateCalendarResourceDTO: {
			/** @description Service calendar IDs to be mapped with the resource.
			 *
			 *         One equipment can only be mapped with one service calendar.
			 *
			 *     One room can be mapped with multiple service calendars. */
			calendarIds: string[]
			/** @description Capacity of the room. */
			capacity: number
			description: string
			locationId: string
			name: string
			/** @description Quantity of the out of service equipment. */
			outOfService: number
			/** @description Quantity of the equipment. */
			quantity: number
		}
		CreatedOrUpdatedBy: {
			/** @description The source of the appointment */
			source: string
			/** @description The ID of the user who created or updated the appointment */
			userId?: string
		}
		DeleteAppointmentSchema: Record<string, never>
		DeleteEventSuccessfulResponseDto: {
			/** @example true */
			succeeded?: boolean
		}
		DeleteNoteSuccessfulResponseDto: {
			/** @example true */
			success?: boolean
		}
		GetCalendarEventsSuccessfulResponseDTO: {
			events?: components['schemas']['CalendarEventDTO'][]
		}
		GetCalendarEventSuccessfulResponseDTO: {
			event?: components['schemas']['CalendarEventDTO']
		}
		GetCreateUpdateNoteSuccessfulResponseDto: {
			note?: components['schemas']['GetNoteSchema']
		}
		GetNoteSchema: {
			/** @example lorem ipsum */
			body?: string
			/** @example TUcmRxWrjqzJS8EjkxNK */
			contactId?: string
			createdBy?: components['schemas']['NoteCreatedBySchema']
			/** @example 2021-07-08T12:02:11.285Z */
			dateAdded?: string
			/** @example HGPcayliwcdoUFzvbTok */
			id?: string
			/** @example TUcmRxWrjqzJS8EjkxNK */
			userId?: string
		}
		GetNotesListSuccessfulResponseDto: {
			/** @example true */
			hasMore?: boolean
			notes?: components['schemas']['GetNoteSchema'][]
		}
		GetSlotsSuccessfulResponseDto: {
			_dates_: components['schemas']['SlotsSchema']
		}
		GroupCreateDTO: {
			/** @example group description */
			description: string
			/** @example true */
			isActive?: boolean
			/** @example ocQHyuzHvysMo5N5VsXc */
			locationId: string
			/** @example group a */
			name: string
			/** @example 15-mins */
			slug: string
		}
		GroupCreateSuccessfulResponseDTO: {
			group?: components['schemas']['GroupDTO']
		}
		GroupDTO: {
			/** @example group description */
			description: string
			/** @example ocQHyuzHvysMo5N5VsXc */
			id?: string
			/** @example true */
			isActive?: boolean
			/** @example ocQHyuzHvysMo5N5VsXc */
			locationId: string
			/** @example group a */
			name: string
			/** @example 15-mins */
			slug: string
		}
		GroupStatusUpdateParams: {
			/**
			 * @description Is Active?
			 * @example true
			 */
			isActive: boolean
		}
		GroupSuccessfulResponseDTO: {
			/**
			 * @description Success
			 * @example true
			 */
			success?: boolean
		}
		GroupUpdateDTO: {
			/** @example group description */
			description: string
			/** @example group a */
			name: string
			/** @example 15-mins */
			slug: string
		}
		Hour: {
			closeHour: number
			closeMinute: number
			openHour: number
			openMinute: number
		}
		LocationConfiguration: {
			/**
			 * @description Type of meeting location. zoom_conference/google_conference/ms_teams_conference is not supported in event calendar type
			 * @example custom
			 * @enum {string}
			 */
			kind:
				| 'custom'
				| 'zoom_conference'
				| 'google_conference'
				| 'inbound_call'
				| 'outbound_call'
				| 'physical'
				| 'booker'
				| 'ms_teams_conference'
			/** @description Address for meeting location. Not applicable on "zoom_conference", "google_conference" and "ms_teams_conference" kind */
			location?: string
		}
		LocationConfigurationResponse: {
			/**
			 * @description Type of meeting location. zoom_conference/google_conference/ms_teams_conference is not supported in event calendar type
			 * @example custom
			 * @enum {string}
			 */
			kind:
				| 'custom'
				| 'zoom_conference'
				| 'google_conference'
				| 'inbound_call'
				| 'outbound_call'
				| 'physical'
				| 'booker'
				| 'ms_teams_conference'
			/** @description Address for meeting location. Not applicable on "zoom_conference", "google_conference" and "ms_teams_conference" kind */
			location?: string
			/**
			 * @description Unique ID used to select a specific meeting location
			 * @example my_conference_id
			 */
			meetingId?: string
		}
		LookBusyConfiguration: {
			/**
			 * @description Apply Look Busy
			 * @default false
			 * @example true
			 */
			enabled: boolean
			/** @description Percentage of slots that will be hidden */
			LookBusyPercentage: number
		}
		NoteCreatedBySchema: {
			/** @example TUcmRxWr */
			id?: string
			/** @example John Doe */
			name?: string
		}
		NotesDTO: {
			/**
			 * @description Note body
			 * @example lorem ipsum
			 */
			body: string
			/** @example GCs5KuzPqTls7vWclkEV */
			userId?: string
		}
		OpenHour: {
			daysOfTheWeek: number[]
			hours: components['schemas']['Hour'][]
		}
		Recurring: {
			/**
			 * @description This setting contols what to do incase a recurring slot is unavailable
			 * @enum {string}
			 */
			bookingOption?: 'skip' | 'continue' | 'book_next'
			/**
			 * @description This setting contols what to do incase a recurring slot is unavailable
			 * @enum {string}
			 */
			bookingOverlapDefaultStatus?: 'confirmed' | 'new'
			/** @description Number of recurrences */
			count?: number
			/** @enum {string} */
			freq?: 'DAILY' | 'WEEKLY' | 'MONTHLY'
		}
		ResourceDeleteResponseDTO: {
			/**
			 * @description Success
			 * @example true
			 */
			success?: boolean
		}
		SchedulesDTO: {
			timeOffset?: number
			unit?: string
		}
		SlotsSchema: {
			slots: string[]
		}
		TeamMember: {
			/** @description Marks a user as primary. This property is required in case of collective booking calendars. Only one user can be primary. */
			isPrimary?: boolean
			/** @description Meeting location configuration for event calendar.
			 *     - *Multiple locations are allowed only when one team member is selected.*
			 *     - *For **Class booking** and **Collective** calendars, only one location configuration is allowed for each team member.* */
			locationConfigurations?: components['schemas']['LocationConfiguration'][]
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Use `locationConfigurations.location` instead.
			 */
			readonly meetingLocation?: string
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Use `locationConfigurations.kind` instead.
			 * @default custom
			 * @example custom
			 * @enum {string}
			 */
			readonly meetingLocationType:
				| 'custom'
				| 'zoom'
				| 'gmeet'
				| 'phone'
				| 'address'
				| 'teams'
				| 'booker'
			/**
			 * @default 0.5
			 * @enum {number}
			 */
			priority: 0 | 0.5 | 1
			/** @example ocQHyuzHvysMo5N5VsXc */
			userId: string
		}
		TeamMemberResponse: {
			/** @description Marks a user as primary. This property is required in case of collective booking calendars. Only one user can be primary. */
			isPrimary?: boolean
			/** @description Meeting location configurations */
			locationConfigurations?: components['schemas']['LocationConfigurationResponse'][]
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Use `locationConfigurations.location` instead.
			 */
			readonly meetingLocation?: string
			/**
			 * @deprecated
			 * @description 🚨 Deprecated! Use `locationConfigurations.kind` instead.
			 * @default custom
			 * @example custom
			 * @enum {string}
			 */
			readonly meetingLocationType:
				| 'custom'
				| 'zoom'
				| 'gmeet'
				| 'phone'
				| 'address'
				| 'teams'
				| 'booker'
			/**
			 * @default 0.5
			 * @enum {number}
			 */
			priority: 0 | 0.5 | 1
			/** @example ocQHyuzHvysMo5N5VsXc */
			userId: string
		}
		UnauthorizedDTO: {
			/** @example Unauthorized */
			error?: string
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example 401 */
			statusCode?: number
		}
		UpdateAvailability: {
			/**
			 * @description Formulate the date string in the format of `<YYYY-MM-DD in local timezone>T00:00:00.000Z`.
			 * @example 2023-09-24T00:00:00.000Z
			 */
			date: string
			/** @default false */
			deleted: boolean
			hours: components['schemas']['Hour'][]
			/** @description The ID of the custom availability object. It is required while updating or deleting the existing custom date availability */
			id?: string
		}
		UpdateCalendarNotificationsDTO: {
			/**
			 * @description Additional email addresses to receive notifications.
			 * @example [
			 *       "example1@email.com",
			 *       "example2@email.com"
			 *     ]
			 */
			additionalEmailIds?: string[]
			/**
			 * @description Specifies the time after which the follow-up notification should be sent.
			 * @example [
			 *       {
			 *         "timeOffset": 1,
			 *         "unit": "hours"
			 *       }
			 *     ]
			 */
			afterTime?: components['schemas']['SchedulesDTO'][]
			/**
			 * @description Specifies the ID of the model associated with the notification. This can be extended to support additional models in the future.
			 * @example D7JP6b67AgWqTtfGaQcw
			 */
			altId?: string
			/**
			 * @description Specifies the model associated with the notification. This can be extended to support additional models in the future. For now only Calendars is supported
			 * @default calendar
			 * @enum {string}
			 */
			altType: 'calendar'
			/**
			 * @description Specifies the time before which the reminder notification should be sent.
			 * @example [
			 *       {
			 *         "timeOffset": 1,
			 *         "unit": "hours"
			 *       }
			 *     ]
			 */
			beforeTime?: components['schemas']['SchedulesDTO'][]
			/** @description Body  for email notification. Not necessary for in-App notification */
			body?: string
			/**
			 * @description Notification channel
			 * @enum {string}
			 */
			channel?: 'email' | 'inApp'
			/**
			 * @description Marks the notification as deleted (soft delete)
			 * @default false
			 */
			deleted: boolean
			/** @description From address for email notification */
			fromAddress?: string
			/** @description From name for email notification */
			fromName?: string
			/**
			 * @description Is the notification active
			 * @default true
			 */
			isActive: boolean
			/**
			 * @description Notification type
			 * @enum {string}
			 */
			notificationType?:
				| 'booked'
				| 'confirmation'
				| 'cancellation'
				| 'reminder'
				| 'followup'
				| 'reschedule'
			/**
			 * @description Notification recipient type
			 * @enum {string}
			 */
			receiverType?: 'contact' | 'guest' | 'assignedUser' | 'emails'
			/** @description Subject  for email notification. Not necessary for in-App notification */
			subject?: string
			/** @description Template ID for email notification */
			templateId?: string
		}
		UpdateCalendarResourceDTO: {
			/** @description Service calendar IDs to be mapped with the resource.
			 *
			 *         One equipment can only be mapped with one service calendar.
			 *
			 *     One room can be mapped with multiple service calendars. */
			calendarIds?: string[]
			/** @description Capacity of the room. */
			capacity?: number
			description?: string
			isActive?: boolean
			locationId?: string
			name?: string
			/** @description Quantity of the out of service equipment. */
			outOfService?: number
			/** @description Quantity of the equipment. */
			quantity?: number
		}
		ValidateGroupSlugPostBody: {
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Slug
			 * @example calendar-1
			 */
			slug: string
		}
		ValidateGroupSlugSuccessResponseDTO: {
			available: boolean
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
	'get-calendars': {
		parameters: {
			query: {
				/**
				 * @description Group Id
				 * @example BqTwX8QFwXzpegMve9EQ
				 */
				groupId?: string
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Show drafted
				 * @example false
				 */
				showDrafted?: boolean
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
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
					'application/json': components['schemas']['CalendarsGetSuccessfulResponseDTO']
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
	'create-calendar': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CalendarCreateDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarByIdSuccessfulResponseDTO']
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
	'get-calendar': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Calendar Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				calendarId: string
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
					'application/json': components['schemas']['CalendarByIdSuccessfulResponseDTO']
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
	'update-calendar': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Calendar Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				calendarId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CalendarUpdateDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarByIdSuccessfulResponseDTO']
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
	'delete-calendar': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Calendar Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				calendarId: string
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
					'application/json': components['schemas']['CalendarDeleteSuccessfulResponseDTO']
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
	'get-slots': {
		parameters: {
			query: {
				/**
				 * @description Apply Look Busy
				 * @example false
				 */
				enableLookBusy?: boolean
				/**
				 * @description End Date (**⚠️ Important:** Date range cannot be more than 31 days)
				 * @example 1601490599999
				 */
				endDate: number
				/**
				 * @description Start Date (**⚠️ Important:** Date range cannot be more than 31 days)
				 * @example 1548898600000
				 */
				startDate: number
				/**
				 * @description The timezone in which the free slots are returned
				 * @example America/Chihuahua
				 */
				timezone?: string
				/**
				 * @description The user for whom the free slots are returned
				 * @example 082goXVW3lIExEQPOnd3
				 */
				userId?: string
				/**
				 * @description The users for whom the free slots are returned
				 * @example [082goXVW3lIExEQPOnd3]
				 */
				userIds?: string[]
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Calendar Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				calendarId: string
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
					'application/json': components['schemas']['GetSlotsSuccessfulResponseDto']
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
	'get-event-notification': {
		parameters: {
			query?: {
				/** @description Specifies the ID of the model associated with the notification. This can be extended to support additional models in the future. */
				altId?: string
				/** @description Specifies the model associated with the notification. This can be extended to support additional models in the future. For now only Calendars is supported */
				altType?: 'calendar'
				deleted?: boolean
				isActive?: boolean
				/** @description Number of records to return */
				limit?: number
				/** @description Number of records to skip */
				skip?: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				calendarId: string
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
					'application/json': components['schemas']['CalendarNotificationResponseDTO'][]
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
	'create-event-notification': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				calendarId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateCalendarNotificationDTO'][]
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarNotificationResponseDTO'][]
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
	'find-event-notification': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				calendarId: string
				notificationId: string
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
					'application/json': components['schemas']['CalendarNotificationResponseDTO']
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
	'update-event-notification': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				calendarId: string
				notificationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCalendarNotificationsDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarNotificationDeleteResponseDTO']
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
	'delete-event-notification': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				calendarId: string
				notificationId: string
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
					'application/json': components['schemas']['CalendarNotificationDeleteResponseDTO']
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
	'get-appointment-notes': {
		parameters: {
			query: {
				/**
				 * @description Limit of notes to fetch
				 * @example 10
				 */
				limit: number
				/**
				 * @description Offset of notes to fetch
				 * @example 0
				 */
				offset: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Appointment ID */
				appointmentId: string
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
	'create-appointment-note': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Appointment ID */
				appointmentId: string
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
		}
	}
	'update-appointment-note': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Appointment ID */
				appointmentId: string
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
		}
	}
	'delete-appointment-note': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Appointment ID */
				appointmentId: string
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
		}
	}
	'get-blocked-slots': {
		parameters: {
			query: {
				/**
				 * @description Either of calendarId, userId or groupId is required
				 * @example BqTwX8QFwXzpegMve9EQ
				 */
				calendarId?: string
				/** @description End Time (in millis) */
				endTime: string
				/**
				 * @description Either of groupId, calendarId or userId is required
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId?: string
				/**
				 * @description Location Id
				 * @example 0007BWpSzSwfiuSl0tR2
				 */
				locationId: string
				/**
				 * @description Start Time (in millis)
				 * @example 1680373800000
				 */
				startTime: string
				/**
				 * @description User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
				 * @example CVokAlI8fgw4WYWoCtQz
				 */
				userId?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
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
					'application/json': components['schemas']['GetCalendarEventsSuccessfulResponseDTO']
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
	'get-calendar-events': {
		parameters: {
			query: {
				/**
				 * @description Either of calendarId, userId or groupId is required
				 * @example BqTwX8QFwXzpegMve9EQ
				 */
				calendarId?: string
				/**
				 * @description End Time (in millis)
				 * @example 1680978599999
				 */
				endTime: string
				/**
				 * @description Either of groupId, calendarId or userId is required
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId?: string
				/**
				 * @description Location Id
				 * @example 0007BWpSzSwfiuSl0tR2
				 */
				locationId: string
				/**
				 * @description Start Time (in millis)
				 * @example 1680373800000
				 */
				startTime: string
				/**
				 * @description User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
				 * @example CVokAlI8fgw4WYWoCtQz
				 */
				userId?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
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
					'application/json': components['schemas']['GetCalendarEventsSuccessfulResponseDTO']
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
	'delete-event': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Event Id or Instance id. For recurring appointments send masterEventId to modify original series. */
				eventId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['DeleteAppointmentSchema']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteEventSuccessfulResponseDto']
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
	'create-appointment': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AppointmentCreateSchema']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['AppointmentSchemaResponse']
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
	'get-appointment': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Event Id or Instance id. For recurring appointments send masterEventId to modify original series. */
				eventId: string
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
					'application/json': components['schemas']['GetCalendarEventSuccessfulResponseDTO']
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
	'edit-appointment': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Event Id or Instance id. For recurring appointments send masterEventId to modify original series. */
				eventId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AppointmentEditSchema']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['AppointmentSchemaResponse']
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
	'create-block-slot': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BlockSlotCreateSchema']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateBookedSlotSuccessfulResponseDto']
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
	'edit-block-slot': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Event Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				eventId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BlockSlotEditSchema']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateBookedSlotSuccessfulResponseDto']
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
	'get-groups': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
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
					'application/json': components['schemas']['AllGroupsSuccessfulResponseDTO']
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
	'create-calendar-group': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['GroupCreateDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GroupCreateSuccessfulResponseDTO']
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
	'edit-group': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Group Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['GroupUpdateDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GroupCreateSuccessfulResponseDTO']
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
	'delete-group': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Group Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId: string
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
					'application/json': components['schemas']['GroupSuccessfulResponseDTO']
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
	'disable-group': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Group Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['GroupStatusUpdateParams']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GroupSuccessfulResponseDTO']
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
	'validate-groups-slug': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['ValidateGroupSlugPostBody']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ValidateGroupSlugSuccessResponseDTO']
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
	'fetch-calendar-resources': {
		parameters: {
			query: {
				limit: number
				locationId: string
				skip: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Calendar resources listed */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarResourceByIdResponseDTO'][]
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
	'create-calendar-resource': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateCalendarResourceDTO']
			}
		}
		responses: {
			/** @description Calendar resource created */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarResourceByIdResponseDTO']
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
	'get-calendar-resource': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource ID */
				id: string
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Calendar resource fetched */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarResourceByIdResponseDTO']
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
	'update-calendar-resource': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource ID */
				id: string
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCalendarResourceDTO']
			}
		}
		responses: {
			/** @description Calendar resource updated */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarResourceResponseDTO']
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
	'delete-calendar-resource': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource ID */
				id: string
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Calendar resource deleted */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceDeleteResponseDTO']
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
}
