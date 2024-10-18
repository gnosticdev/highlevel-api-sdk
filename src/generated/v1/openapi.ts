export type paths = {
	'/v1/appointments/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/appointments/
		 * @description <h4>Get all booked events.</h4> <p>Required fields in the query</p><table><thead><tr><th>Fields</th><th>Types</th><th>Example</th></tr></thead><tbody><tr><td>startDate</td><td>integer</td><td>epoch timestamp. for ex: <code>1548898600000</code></td></tr><tr><td>endDate</td><td>integer</td><td>epoch timestamp. for ex: <code>1601490599999</code></td></tr><tr><td>userId(or calendarId or teamId)</td><td>string</td><td>082goXVW3lIExEQPOnd3</td></tr><tr><td>calendarId(or userId or teamId)</td><td>string</td><td>0nU7uKSrtT2RVM1KknuF</td></tr><tr><td>teamId(or userId or calendarId)</td><td>string</td><td>O4qa8K1M6xA4oPXu1b8O</td></tr></tbody></table><p>Allowed field in the query</p><table><thead><tr><th>Fields</th><th>Types</th><th>Example</th></tr></thead><tbody><tr><td>includeAll</td><td>boolean</td><td>Include contact and more data. for ex: <code>true</code></td></tr></tbody></table> <br /> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description Calendar Id
					 * @example 0nU7uKSrtT2RVM1KknuF
					 */
					calendarId?: string
					/**
					 * @description (Required) epoch timestamp
					 * @example 1601490599999
					 */
					endDate?: number
					/**
					 * @description Include contact and more data.
					 * @example true
					 */
					includeAll?: boolean
					/**
					 * @description (Required) epoch timestamp
					 * @example 1548898600000
					 */
					startDate?: number
					/**
					 * @description Team Id
					 * @example O4qa8K1M6xA4oPXu1b8O
					 */
					teamId?: string
					/**
					 * @description User Id
					 * @example 082goXVW3lIExEQPOnd3
					 */
					userId?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments__get_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments__get_422_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/appointments/
		 * @description <h4>Booking Appoinment.</h4><p>HL Appointments API provides several different ways the endpoints can be leveraged, You can examine its application depending on any of the following use cases:</p><p><strong>Use case #1</strong>: Schedule Appointments</p><p>This predominantly focuses on consumer facing online booking applications. To be able to use it effectively, consider the following parameters during your set-up.</p><p>Required JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>email(or phone)</td><td>string</td><td>johndeo@gmail.com</td></tr><tr><td>phone(or email)</td><td>string</td><td>+1 888-888-8888</td></tr><tr><td>selectedSlot</td><td>datetime</td><td>2021-02-05T11:00:00+05:30</td></tr><tr><td>selectedTimezone</td><td>string</td><td>Asia/Calcutta</td></tr><tr><td>calendarId</td><td>string</td><td>J37gEVtdFMRYVQWPdXIc</td></tr></tbody></table><p>Allowed JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>firstName</td><td>string</td><td>John</td></tr><tr><td>lastName</td><td>string</td><td>Deo</td></tr><tr><td>name</td><td>string</td><td>John Deo</td></tr><tr><td>title</td><td>string</td><td>Best Event</td></tr><tr><td>address1</td><td>long</td><td>Tonkawa Trail W</td></tr><tr><td>city</td><td>string</td><td>Austin</td></tr><tr><td>state</td><td>string</td><td>Texas</td></tr><tr><td>website</td><td>string(url)</td><td>https://www.google.com</td></tr><tr><td>__custome_field_id__</td><td>string/array</td><td>Test</td></tr><tr><td>calendarNotes</td><td>long</td><td>Booked from public api</td></tr></tbody></table><p><strong>Use case #2</strong>: Block Off Time (Event Blocks)</p><p>This focuses specifically on actions surrounding internal applications such as posting a custom event block availability within your own application. While its application covers a range of different scenarios, you can use the following parameters during your set-up.</p><p>Required JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>selectedSlot</td><td>datetime</td><td>2021-02-10T10:00:00Z</td></tr><tr><td>endAt</td><td>datetime</td><td>2021-02-12T10:00:00Z</td></tr><tr><td>calendarId/userId</td><td>string</td><td>J37gEVtdFMRYVQWPdXIc</td></tr></tbody></table><p>Allowed JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>title</td><td>string</td><td>Blocking Event</td></tr></tbody></table> <br /> <strong>Authorization:</strong><p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/appointments/{appointmentId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/appointments/:appointmentId
		 * @description <h4>Get appointment by id.</h4><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Appointment Id
					 * @example 004B1SpcAvh3s9E3rqk8
					 */
					appointmentId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/appointments/:appointmentId
		 * @description <h4>Update exisiting appoinment.</h4><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Appointment Id
					 * @example 004B1SpcAvh3s9E3rqk8
					 */
					appointmentId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/appointments/:appointmentId
		 * @description <h4>Delete exisiting appoinment.</h4><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Appointment Id
					 * @example 004B1SpcAvh3s9E3rqk8
					 */
					appointmentId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_delete_401_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/appointments/{appointmentId}/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * /v1/appointments/:appointmentId/status
		 * @description <h4>Update exisiting appoinment status.</h4><p>Required JSON fields in the body</p><table><thead><tr><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th></tr></thead><tbody><tr><td>status</td><td>string</td><td>confirmed</td><td><ul><li>confirmed</li><li>cancelled</li><li>showed</li><li>noshow</li><li>invalid</li></ul></td></tr></tbody></table><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Appointment Id
					 * @example 004B1SpcAvh3s9E3rqk8
					 */
					appointmentId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'text/plain': string
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_status_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_status_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_{appointmentId}_status_put_422_response']
					}
				}
			}
		}
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/appointments/slots': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/appointments/slots
		 * @description <h4>Get free slots.</h4><p>Required fields in the query</p><table><thead><tr><th>Fields</th><th>Types</th><th>Example</th></tr></thead><tbody><tr><td>calendarId</td><td>string</td><td>CVokAlI8fgw4WYWoCtQz</td></tr><tr><td>startDate</td><td>integer</td><td>epoch timestamp. for ex: <code>1548898600000</code></td></tr><tr><td>endDate</td><td>integer</td><td>epoch timestamp. for ex: <code>1601490599999</code></td></tr></tbody></table><p>Allowed field in the query</p><table><thead><tr><th>Fields</th><th>Types</th><th>Example</th></tr></thead><tbody><tr><td>userId</td><td>string</td><td>082goXVW3lIExEQPOnd3</td></tr><tr><td>timezone</td><td>string</td><td>America/Chihuahua</td></tr></tbody></table> <br /> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description (Required) Calendar Id
					 * @example CVokAlI8fgw4WYWoCtQz
					 */
					calendarId?: string
					/**
					 * @description (Required) epoch timestamp
					 * @example 1601490599999
					 */
					endDate?: number
					/**
					 * @description (Required) epoch timestamp
					 * @example 1598898600000
					 */
					startDate?: number
					/**
					 * @description Timezone
					 * @example America/Chihuahua
					 */
					timezone?: string
					/**
					 * @description User Id
					 * @example 082goXVW3lIExEQPOnd3
					 */
					userId?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_slots_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_slots_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_slots_get_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_appointments_slots_get_422_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/calendars/check-slug-availability/{slug}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/calendars/check-slug-availability/:slug
		 * @description <h4>Check Calendar (Provider) slug availability.</h4><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Slug
					 * @example xyz
					 */
					slug: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_check-slug-availability_{slug}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_check-slug-availability_{slug}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_check-slug-availability_{slug}_get_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_check-slug-availability_{slug}_get_422_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/calendars/services': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/calendars/services
		 * @description <h4>Get all calendar services.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description Filter service by team id.
					 * @example ABXdTR0kegkPcTvtdr1L
					 */
					teamId?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/calendars/services/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * /v1/calendars/services/
		 * @description <h4>Create a service</h4> <p>Required JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Option?</th></thead><tbody><tr><td>teamId</td><td>string</td><td>O4qa8K1M6xA4oPXu1b8O</td><td></td></tr><tr><td>name</td><td>string</td><td>Awsome Service</td><td></td></tr><tr><td>description</td><td>string</td><td>Awsome description</td><td></td></tr><tr><td>eventType</td><td>string</td><td>RoundRobin_OptimizeForAvailability</td><td><ul><li>RoundRobin_OptimizeForAvailability</li><li>RoundRobin_OptimizeForEqualDistribution</li></ul></td></tr><tr><td>teamMembers</td><td>obbject</td><td>See field info on the <code>teamMembers</code> table</td><td></td></tr><tr><td>slug</td><td>string</td><td>awsome-service</td><td></td></tr><tr><td>appointmentTitle</td><td>string</td><td><code>{{contact.name}}</code></td><td></td></tr><tr><td>eventColor</td><td>string</td><td>Tomato</td><td><ul><li>Banana</li><li>Basil</li><li>Blueberry</li><li>Flamingo</li><li>Grape</li><li>Graphite</li><li>Lavender</li><li>Peacock</li><li>Sage</li><li>Tangerine</li><li>Tomato</li></ul></td></tr><tr><td>availability</td><td>object</td><td>See field info on <code>availability</code> table.</td><td></td></tr><tr><td>confirmation</td><td>object</td><td>See field info on <code>confirmation</code> table.</td><td></td></tr></tbody></table><p>Allowed JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Option</th></thead><tbody><tr><td>isActive</td><td>boolean</td><td><code>true</code></td><td></td></tr><tr><td>syncOption</td><td>string</td><td>oneway</td><td><ul><li>oneway</li><li>twoway</li></ul></td></tr><tr><td>slug</td><td>string</td><td>first-calendar</td></tr></tbody></table><p>Allowed JSON fields in the <code>teamMembers</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th><th>is Required?</th></thead><tbody><tr><td>userId</td><td>string</td><td>GCs5KuzPqTls7vWclkEV</td><td></td><td>Yes</td></tr><tr><td>priority</td><td>string</td><td>High</td><td><ul><li>High</li><li>Medium</li><li>Low</li></ul></td><td>Yes</td></tr><tr><td>selected</td><td>boolean</td><td>true</td><td></td><td>Yes</td></tr><tr><td>meetingLocation</td><td>string</td><td>https://zoom.us/j/XXXXXXXXXX</td><td></td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>eventTiming</td><td>object</td><td>See field info on <code>availability.eventTiming</code> table.</td><td>Yes</td></tr><tr><td>officeHours</td><td>object</td><td>See field info on <code>availability.officeHours</code> table.</td><td>Yes</td></tr><tr><td>appointmentInfo</td><td>object</td><td>See field info on <code>availability.appointmentInfo</code> table.</td><td>No</td></tr><tr><td>schedule</td><td>object</td><td>See field info on <code>availability.schedule</code> table.</td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.eventTiming</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th><th>is Required?</th></thead><tbody><tr><td>slotDuration</td><td>number</td><td>30</td><td><ul><li>10</li><li>15</li><li>20</li><li>30</li><li>45</li><li>60</li><li>90</li><li>120</li><li>180</li><li>240</li><li>300</li><li>360</li><li>420</li><li>480</li></ul></td><td>Yes</td></tr><tr><td>slotInterval</td><td>number</td><td>30</td><td><ul><li>10</li><li>15</li><li>20</li><li>30</li><li>45</li><li>60</li><li>90</li><li>120</li><li>180</li><li>240</li><li>300</li><li>360</li><li>420</li><li>480</li></ul></td><td>Yes</td></tr><tr><td>slotBuffer</td><td>number</td><td>1</td><td></td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.appointmentInfo</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>perSlot</td><td>number</td><td>1</td><td>No</td></tr><tr><td>perDay</td><td>number</td><td>5</td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.schedule</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th><th>is Required?</th></thead><tbody><tr><td>allowBookingAfter</td><td>number</td><td>1</td><td></td><td>No</td></tr><tr><td>allowBookingAfterUnit</td><td>string</td><td>days</td><td><ul><li>hours</li><li>days</li><li>weeks</li><li>months</li></ul></td><td>No</td></tr><tr><td>allowBookingFor</td><td>number</td><td>5</td><td>No</td></tr><tr><td>allowBookingForUnit</td><td>string</td><td>days</td><td><ul><li>hours</li><li>days</li><li>weeks</li><li>months</li></ul></td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.officeHours</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>monday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr><tr><td>tuesday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr><tr><td>wednesday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr><tr><td>thursday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr><tr><td>friday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.officeHours.days</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>openMinute</td><td>number</td><td>0</td><td>Yes</td></tr><tr><td>openHour</td><td>number</td><td>8</td><td>Yes</td></tr><tr><td>closeMinute</td><td>number</td><td>0</td><td>Yes</td></tr><tr><td>closeHour</td><td>number</td><td>17</td><td>Yes</td></tr></tbody></table><p>Allowed JSON fields in the <code>confirmation</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>form</td><td>object</td><td>See field info on <code>confirmation.form</code> table.</td><td>No</td></tr><tr><td>notificationAndOther</td><td>object</td><td>See field info on <code>confirmation.notificationAndOther</code> table.</td><td>Yes</td></tr><tr><td>formSubmission</td><td>object</td><td>See field info on <code>confirmation.formSubmission</code> table.</td><td>Yes</td></tr></tbody></table><p>Allowed JSON fields in the <code>confirmation.form</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>customFormId</td><td>string</td><td>jjusM6EOngDExnbo2DbU</td><td>No</td></tr><tr><td>stickyContact</td><td>boolean</td><td>false</td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>confirmation.notificationAndOther</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>autoConfirm</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>shouldSendAlertEmailsToAssignedMember</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>googleInvitationEmails</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>allowReschedule</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>allowCancellation</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>alertEmail</td><td>string</td><td>john@deo.com</td><td>No</td></tr><tr><td>notes</td><td>string</td><td>Awesome Notes</td><td>No</td></tr><tr><td>facebookPixelId</td><td>string</td><td>XXXXXXXXXX</td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>confirmation.formSubmission</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th><th>is Required?</th></thead><tbody><tr><td>type</td><td>string</td><td>ThankYouMessage</td><td><ul><li>ThankYouMessage</li><li>RedirectURL</li></ul></td><td>Yes</td></tr><tr><td>content</td><td>string</td><td>Thank you for your appointment request.</td><td></td><td>Yes</td></tr></tbody></table><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/calendars/services/{serviceId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * /v1/calendars/services/:serviceId
		 * @description <h4>Update existing service</h4> <p>Required JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Option?</th></thead><tbody><tr><td>teamId</td><td>string</td><td>O4qa8K1M6xA4oPXu1b8O</td><td></td></tr><tr><td>name</td><td>string</td><td>Awsome Service</td><td></td></tr><tr><td>description</td><td>string</td><td>Awsome description</td><td></td></tr><tr><td>eventType</td><td>string</td><td>RoundRobin_OptimizeForAvailability</td><td><ul><li>RoundRobin_OptimizeForAvailability</li><li>RoundRobin_OptimizeForEqualDistribution</li></ul></td></tr><tr><td>teamMembers</td><td>obbject</td><td>See field info on the <code>teamMembers</code> table</td><td></td></tr><tr><td>slug</td><td>string</td><td>awsome-service</td><td></td></tr><tr><td>appointmentTitle</td><td>string</td><td><code>{{contact.name}}</code></td><td></td></tr><tr><td>eventColor</td><td>string</td><td>Tomato</td><td><ul><li>Banana</li><li>Basil</li><li>Blueberry</li><li>Flamingo</li><li>Grape</li><li>Graphite</li><li>Lavender</li><li>Peacock</li><li>Sage</li><li>Tangerine</li><li>Tomato</li></ul></td></tr><tr><td>availability</td><td>object</td><td>See field info on <code>availability</code> table.</td><td></td></tr><tr><td>confirmation</td><td>object</td><td>See field info on <code>confirmation</code> table.</td><td></td></tr></tbody></table><p>Allowed JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Option</th></thead><tbody><tr><td>isActive</td><td>boolean</td><td><code>true</code></td><td></td></tr><tr><td>syncOption</td><td>string</td><td>oneway</td><td><ul><li>oneway</li><li>twoway</li></ul></td></tr><tr><td>slug</td><td>string</td><td>first-calendar</td></tr></tbody></table><p>Allowed JSON fields in the <code>teamMembers</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th><th>is Required?</th></thead><tbody><tr><td>userId</td><td>string</td><td>GCs5KuzPqTls7vWclkEV</td><td></td><td>Yes</td></tr><tr><td>priority</td><td>string</td><td>High</td><td><ul><li>High</li><li>Medium</li><li>Low</li></ul></td><td>Yes</td></tr><tr><td>selected</td><td>boolean</td><td>true</td><td></td><td>Yes</td></tr><tr><td>meetingLocation</td><td>string</td><td>https://zoom.us/j/XXXXXXXXXX</td><td></td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>eventTiming</td><td>object</td><td>See field info on <code>availability.eventTiming</code> table.</td><td>Yes</td></tr><tr><td>officeHours</td><td>object</td><td>See field info on <code>availability.officeHours</code> table.</td><td>Yes</td></tr><tr><td>appointmentInfo</td><td>object</td><td>See field info on <code>availability.appointmentInfo</code> table.</td><td>No</td></tr><tr><td>schedule</td><td>object</td><td>See field info on <code>availability.schedule</code> table.</td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.eventTiming</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th><th>is Required?</th></thead><tbody><tr><td>slotDuration</td><td>number</td><td>30</td><td><ul><li>10</li><li>15</li><li>20</li><li>30</li><li>45</li><li>60</li><li>90</li><li>120</li><li>180</li><li>240</li><li>300</li><li>360</li><li>420</li><li>480</li></ul></td><td>Yes</td></tr><tr><td>slotInterval</td><td>number</td><td>30</td><td><ul><li>10</li><li>15</li><li>20</li><li>30</li><li>45</li><li>60</li><li>90</li><li>120</li><li>180</li><li>240</li><li>300</li><li>360</li><li>420</li><li>480</li></ul></td><td>Yes</td></tr><tr><td>slotBuffer</td><td>number</td><td>1</td><td></td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.appointmentInfo</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>perSlot</td><td>number</td><td>1</td><td>No</td></tr><tr><td>perDay</td><td>number</td><td>5</td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.schedule</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th><th>is Required?</th></thead><tbody><tr><td>allowBookingAfter</td><td>number</td><td>1</td><td></td><td>No</td></tr><tr><td>allowBookingAfterUnit</td><td>string</td><td>days</td><td><ul><li>hours</li><li>days</li><li>weeks</li><li>months</li></ul></td><td>No</td></tr><tr><td>allowBookingFor</td><td>number</td><td>5</td><td>No</td></tr><tr><td>allowBookingForUnit</td><td>string</td><td>days</td><td><ul><li>hours</li><li>days</li><li>weeks</li><li>months</li></ul></td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.officeHours</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>monday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr><tr><td>tuesday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr><tr><td>wednesday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr><tr><td>thursday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr><tr><td>friday</td><td>array</td><td>Please see field info <code>availability.officeHours.days</code> table. include as a array.</td><td>Yes</td></tr></tbody></table><p>Allowed JSON fields in the <code>availability.officeHours.days</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>openMinute</td><td>number</td><td>0</td><td>Yes</td></tr><tr><td>openHour</td><td>number</td><td>8</td><td>Yes</td></tr><tr><td>closeMinute</td><td>number</td><td>0</td><td>Yes</td></tr><tr><td>closeHour</td><td>number</td><td>17</td><td>Yes</td></tr></tbody></table><p>Allowed JSON fields in the <code>confirmation</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>form</td><td>object</td><td>See field info on <code>confirmation.form</code> table.</td><td>No</td></tr><tr><td>notificationAndOther</td><td>object</td><td>See field info on <code>confirmation.notificationAndOther</code> table.</td><td>Yes</td></tr><tr><td>formSubmission</td><td>object</td><td>See field info on <code>confirmation.formSubmission</code> table.</td><td>Yes</td></tr></tbody></table><p>Allowed JSON fields in the <code>confirmation.form</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>customFormId</td><td>string</td><td>jjusM6EOngDExnbo2DbU</td><td>No</td></tr><tr><td>stickyContact</td><td>boolean</td><td>false</td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>confirmation.notificationAndOther</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>is Required?</th></thead><tbody><tr><td>autoConfirm</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>shouldSendAlertEmailsToAssignedMember</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>googleInvitationEmails</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>allowReschedule</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>allowCancellation</td><td>boolean</td><td>false</td><td>Yes</td></tr><tr><td>alertEmail</td><td>string</td><td>john@deo.com</td><td>No</td></tr><tr><td>notes</td><td>string</td><td>Awesome Notes</td><td>No</td></tr><tr><td>facebookPixelId</td><td>string</td><td>XXXXXXXXXX</td><td>No</td></tr></tbody></table><p>Allowed JSON fields in the <code>confirmation.formSubmission</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th><th>is Required?</th></thead><tbody><tr><td>type</td><td>string</td><td>ThankYouMessage</td><td><ul><li>ThankYouMessage</li><li>RedirectURL</li></ul></td><td>Yes</td></tr><tr><td>content</td><td>string</td><td>Thank you for your appointment request.</td><td></td><td>Yes</td></tr></tbody></table><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Service Id
					 * @example 0RXEzw5UVe5oLFm6GQls
					 */
					serviceId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_{serviceId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_{serviceId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_{serviceId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_{serviceId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/calendars/services/:serviceId
		 * @description <h4>Delete Service.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Service Id
					 * @example 0RXEzw5UVe5oLFm6GQls
					 */
					serviceId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'text/plain': string
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_{serviceId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_{serviceId}_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_services_{serviceId}_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/calendars/teams': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/calendars/teams
		 * @description <h4>Get all teams. <h4><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/calendars/teams/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * /v1/calendars/teams/
		 * @description <h4>Create a team.</h4> <p>Required JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>name</td><td>string</td><td>Test Team</td></tr><tr><td>userIds</td><td>array</td><td><code>["J37gEVtdFMRYVQWPdXIc"]</code></td></tr><tr><td>calendarConfig</td><td>object</td><td><code>{"calendarName": "test", "description": "dfsadfsd", "slug": "tesfdsafdsa", "link": "/widget/appointment/tesfdsafdsa", "shouldAssignContactToTeamMember": false, "shouldSkipAssigningContactForExisting": false}</code></td></tr></tbody></table><p>Required JSON fields in the <code>calendarConfig</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>calendarName</td><td>string</td><td>First Calendar</td></tr><tr><td>description</td><td>string</td><td>Some description</td></tr><tr><td>slug</td><td>string</td><td>first-calendar</td></tr></tbody></table><p>Allowed JSON fields in the <code>calendarConfig</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>shouldAssignContactToTeamMember</td><td>boolean</td><td><code>false</code></td></tr><tr><td>shouldSkipAssigningContactForExisting</td><td>boolean</td><td><code>false</code></td></tr></tbody></table><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/calendars/teams/{teamId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * /v1/calendars/teams/:teamId
		 * @description <h4>Updating existing team.</h4> <p>Required JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>name</td><td>string</td><td>Test Team</td></tr><tr><td>userIds</td><td>array</td><td><code>["J37gEVtdFMRYVQWPdXIc"]</code></td></tr><tr><td>calendarConfig</td><td>object</td><td><code>{"calendarName": "test", "description": "dfsadfsd", "slug": "tesfdsafdsa", "link": "/widget/appointment/tesfdsafdsa", "shouldAssignContactToTeamMember": false, "shouldSkipAssigningContactForExisting": false}</code></td></tr></tbody></table><p>Required JSON fields in the <code>calendarConfig</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>calendarName</td><td>string</td><td>First Calendar</td></tr><tr><td>description</td><td>string</td><td>Some description</td></tr><tr><td>slug</td><td>string</td><td>first-calendar</td></tr></tbody></table><p>Allowed JSON fields in the <code>calendarConfig</code></p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>shouldAssignContactToTeamMember</td><td>boolean</td><td><code>false</code></td></tr><tr><td>shouldSkipAssigningContactForExisting</td><td>boolean</td><td><code>false</code></td></tr></tbody></table><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Team Id
					 * @example 0nU7uKSrtT2RVM1KknuF
					 */
					teamId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_{teamId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_{teamId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_{teamId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_{teamId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/calendars/teams/:teamId
		 * @description <h4>Delete Team. </h4><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Team Id
					 * @example 0nU7uKSrtT2RVM1KknuF
					 */
					teamId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'text/plain': string
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_{teamId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_calendars_teams_{teamId}_delete_401_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/campaigns/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/campaigns/
		 * @description <h4>Get Campaigns.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description Filter by status, Allowed option are draft or published.
					 * @example published
					 */
					status?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_campaigns__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_campaigns__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_campaigns__get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/contacts/
		 * @description <h4>Get Contacts.</h4><strong>Filters:</strong><table role="table"><thead><tr><th>Fields</th><th>Description</th></tr></thead><tbody><tr><td>query</td><td>It will search on these fields: <code>Name</code>, <code>Phone</code>, <code>Email</code>, <code>Tags</code>, and <code>Company Name</code>.</td></tr></tbody></table><strong>Sorting:</strong><table role="table"><thead><tr><th>Fields</th><th>Allowed Options</th><th>Default value</th></tr></thead><tbody><tr><td>sortBy</td><td><code>date_added</code> or <code>date_updated</code></td><td><code>date_added</code></td></tr><tr><td>order</td><td><code>asc</code> or <code>desc</code></td><td><code>desc</code></td></tr></tbody></table><strong>Pagination:</strong><p>We will by default return the first matched 20 contacts. You can fetched next and more by passing the page on the query params <span style="color: red;">(deprecated)</span>. You can see page info and total records count on to the <code>meta</code> <br /><br /> <strong>New: </strong>You can fetched next and more by passing the startAfter and startAfterId on the query params. You can see <code>startAfterId</code> and <code>startAfter</code> fields found into the response <code>meta</code> field.</p><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
					 * @example 20
					 */
					limit?: number
					/**
					 * @description Contact Query
					 * @example John
					 */
					query?: string
					/**
					 * @description Start After
					 * @example 1603870249758
					 */
					startAfter?: number
					/**
					 * @description Start After Id
					 * @example UIaE1WjAwWKdlyD7osQI
					 */
					startAfterId?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/contacts/
		 * @description <h4>Create a contact.</h4><p>Create contact will allow this fields. ex:</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>firstName</td><td>string</td><td>John</td></tr><tr><td>lastName</td><td>string</td><td>Deo</td></tr><tr><td>name</td><td>string</td><td>John Deo</td></tr><tr><td>email</td><td>string</td><td>johndeo@gmail.com</td></tr><tr><td>phone</td><td>string</td><td>+1 888-888-8888</td></tr><tr><td>address1</td><td>long</td><td>Tonkawa Trail W</td></tr><tr><td>city</td><td>string</td><td>Austin</td></tr><tr><td>state</td><td>string</td><td>Texas</td></tr><tr><td>postalCode</td><td>string</td><td>45001</td></tr><tr><td>website</td><td>string(url)</td><td>https://www.google.com</td></tr><tr><td>timezone</td><td>string</td><td>America/Chihuahua</td></tr><tr><td>dnd</td><td>boolean</td><td><code>true</code></td></tr><tr><td>tags</td><td>array</td><td><code>["tag1", "tag2"]</code></td></tr><tr><td>customField</td><td>object</td><td><code>{"3r6dEOnsApNaKIhnFM6u": "Value 1", "MgobCB14YMVKuE4Ka8p1": "Value 2"}</code>. <strong>Notes:</strong> <code>3r6dEOnsApNaKIhnFM6u</code> and <code>MgobCB14YMVKuE4Ka8p1</code> is a custom field id. You can find it using *Custom Fields* endpoints.</td></tr><tr><td>source</td><td>string</td><td>Public API</td></tr></tbody></table><br /><strong>Validation:</strong><p><strong>Email</strong> or <strong>Phone</strong> are required to create contact <br /><br /> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/appointments/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/contacts/:contactId/appointments/
		 * @description <h4>Get contact appointments.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_appointments__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_appointments__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_appointments__get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/campaigns/{campaignId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * /v1/contacts/:contactId/campaigns/:campaignId
		 * @description <h4>Add contact to campaign.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Campaign Id
					 * @example Y2I9XM7aO1hncuSOlc9L
					 */
					campaignId: string
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'*/*'?: never
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_{campaignId}_post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_{campaignId}_post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_{campaignId}_post_422_response']
					}
				}
			}
		}
		/**
		 * /v1/contacts/:contactId/campaigns/:campaignId
		 * @description <h4>Remove contact from campaign.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Campaign Id
					 * @example Y2I9XM7aO1hncuSOlc9L
					 */
					campaignId: string
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_{campaignId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_{campaignId}_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_{campaignId}_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/campaigns/remove-all': {
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
		 * /v1/contacts/:contactId/campaigns/remove-all
		 * @description <h4>Remove contact from every campaign.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_remove-all_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_remove-all_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_campaigns_remove-all_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/notes/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/contacts/:contactId/notes/
		 * @description <h4>Get all contact notes.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/contacts/:contactId/notes/
		 * @description <h4>Create Notes.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/notes/{noteId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/contacts/:contactId/notes/:noteId
		 * @description <h4>Get note by id.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
					/**
					 * @description (Required) Note Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					noteId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/contacts/:contactId/notes/:noteId
		 * @description <h4>Update Note.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
					/**
					 * @description (Required) Note Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					noteId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/contacts/:contactId/notes/:noteId
		 * @description <h4>Delete one of Notes.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
					/**
					 * @description (Required) Note Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					noteId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_notes_{noteId}_delete_401_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/tags/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * /v1/contacts/:contactId/tags/
		 * @description <h4>Add Tags on contacts.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tags__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tags__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tags__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tags__post_422_response']
					}
				}
			}
		}
		/**
		 * /v1/contacts/:contactId/tags/
		 * @description <h4>Delete tags from the contact.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tags__delete_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tags__delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tags__delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tags__delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/tasks/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/contacts/:contactId/tasks/
		 * @description <h4>Get all contact tasks.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/contacts/:contactId/tasks/
		 * @description <h4>Create Tasks.</h4> <p><strong>Status:</strong> (optional) Field have following options.</p><ul><li>completed</li><li>incompleted (default)</li></ul><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/tasks/{taskId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/contacts/:contactId/tasks/:taskId
		 * @description <h4>Get task by id.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
					/**
					 * @description (Required) Task Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					taskId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/contacts/:contactId/tasks/:taskId
		 * @description <h4>Update Task.</h4><p><p><strong>Status:</strong> (optional) Field have following options.</p><ul><li>completed</li><li>incompleted (default)</li></ul><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
					/**
					 * @description (Required) Task Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					taskId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/contacts/:contactId/tasks/:taskId
		 * @description <h4>Delete one of Task.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
					/**
					 * @description (Required) Task Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					taskId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_delete_401_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/tasks/{taskId}/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * /v1/contacts/:contactId/tasks/:taskId/status
		 * @description <h4>Update Task status.</h4><p><strong>Status:</strong> Field have following option</p><ul><li>completed</li><li>incompleted</li></ul><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
					/**
					 * @description (Required) Task Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					taskId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_status_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_status_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_status_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_tasks_{taskId}_status_put_422_response']
					}
				}
			}
		}
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{contactId}/workflow/{workflowId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * /v1/contacts/:contactId/workflow/:workflowId
		 * @description <h4>Add contact to the workflow.</h4><p>Adding contact into workflow will allow these fields.</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>eventStartTime</td><td>string(datetime with timezone offset).</td><td>2021-06-23T03:30:00+01:00</td></tr></tbody></table> <br><strong>Note:</strong><p>This request will add contact in queue to be added in workflow. This will not get to be added realtime.</p><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example sx6wyHhbFdRXh302LLNR
					 */
					contactId: string
					/**
					 * @description (Required) Workflow Id
					 * @example 78559bb3-b920-461e-b010-7b2a2816d2a9
					 */
					workflowId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_workflow_{workflowId}_post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_workflow_{workflowId}_post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{contactId}_workflow_{workflowId}_post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/contacts/:id
		 * @description <h4>Get contact by id.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					id: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_get_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_get_422_response']
					}
				}
			}
		}
		/**
		 * /v1/contacts/:id
		 * @description <h4>Update a contact.</h4><p>Update contact will allow this fields. ex:</p> <table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>firstName</td><td>string</td><td>John</td></tr><tr><td>lastName</td><td>string</td><td>Deo</td></tr><tr><td>name</td><td>string</td><td>John Deo</td></tr><tr><td>email</td><td>string</td><td>johndeo@gmail.com</td></tr><tr><td>phone</td><td>string</td><td>+1 888-888-8888</td></tr><tr><td>address1</td><td>long</td><td>Tonkawa Trail W</td></tr><tr><td>city</td><td>string</td><td>Austin</td></tr><tr><td>state</td><td>string</td><td>Texas</td></tr><tr><td>postalCode</td><td>string</td><td>45001</td></tr><tr><td>website</td><td>string(url)</td><td>https://www.google.com</td></tr><tr><td>timezone</td><td>string</td><td>America/Chihuahua</td></tr><tr><td>dnd</td><td>boolean</td><td><code>true</code></td></tr><tr><td>tags</td><td>array</td><td><code>["tag1", "tag2"]</code></td></tr><tr><td>customField</td><td>object</td><td><code>{"3r6dEOnsApNaKIhnFM6u": "Value 1", "MgobCB14YMVKuE4Ka8p1": "Value 2"}</code>. <strong>Notes:</strong> <code>3r6dEOnsApNaKIhnFM6u</code> and <code>MgobCB14YMVKuE4Ka8p1</code> is a custom field id. You can find it using *Custom Fields* endpoints.</td></tr><tr><td>source</td><td>string</td><td>Public API</td></tr></tbody></table><br /><strong>Validation:</strong><p><strong>Email</strong> or <strong>Phone</strong> are required to update contact <br /><br /> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					id: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/contacts/:id
		 * @description <h4>Delete contact by id.</h4><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Contact Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					id: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'text/plain': string
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_{id}_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/contacts/lookup': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/contacts/lookup
		 * @description <h4>Search contact by email or phone number.</h4> <p>If you will pass email or phone, it will try find and give contacts based on that.<p><p>OR If you will pass both first it will try to find contact with email first and if it is not able to find contact then it will try to find the match based on the phone.</p><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p> <strong>Validation:</strong><p><strong>Email</strong> or <strong>Phone</strong> are required to lookup contact.</p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description (Required) Contact email
					 * @example john@deo.com
					 */
					email?: string
					/**
					 * @description (Required) Contact phone
					 * @example +491971259866
					 */
					phone?: number
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_lookup_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_lookup_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_lookup_get_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_contacts_lookup_get_422_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/custom-fields/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/custom-fields/
		 * @description <h4>Get all available custom fields.</h4><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/custom-fields/
		 * @description <h4>Creating Custom Field.</h4><p>Data Type Fields will allow these options. ex:</p><strong>Options:</strong><ul><li>TEXT</li><li>LARGE_TEXT</li><li>NUMERICAL</li><li>PHONE</li><li>MONETORY</li><li>CHECKBOX</li><li>SINGLE_OPTIONS</li><li>MULTIPLE_OPTIONS</li><li>FLOAT</li><li>TIME</li><li>DATE</li><li>TEXTBOX_LIST</li><li>FILE_UPLOAD</li><li>SIGNATURE</li></ul><strong>Validation:</strong><p><strong>Name</strong> and <strong>Date Type</strong> are required to create every custom field.<p>On every data type of field have diffrent validation rules. These are the different validation rules.</p><strong>FILE_UPLOAD:</strong><ul><li><strong>acceptedFormat</strong> *(required) This will allow array of file format.<ul><li>.pdf</li><li>.docx</li><li>.jpeg</li><li>.png</li><li>.gif</li><li>.csv</li><li>all</li></ul></li><li><strong>isMulitpalFile</strong> (optional) it allow <code>true</code> or <code>false</code>. If you want to allow multipal files pass <code>true</code> </li><li><strong>maxNumberOfFiles</strong> (options) It will allow maximum these number of files.</li></ul><strong>SINGLE_OPTIONS / MULTIPLE_OPTIONS / CHECKBOX:</strong><br /><ul><li><strong>options</strong> *(required) This will allow array of options.</li></ul><strong>TEXTBOX_LIST</strong><ul><li><strong>textBoxListOptions:</strong> (required) This will allow array of textbox list. Array will contanis label and prefillValue. ex.: <code>{label": "Hello", "prefillValue": "value"}</code></li></ul>  <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/custom-fields/{customFieldId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/custom-fields/:customFieldId
		 * @description <h4>Get custom fields by id</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Custom Field Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					customFieldId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/custom-fields/:customFieldId
		 * @description <h4>Updating Custom Field.</h4><p>Data Type Fields will allow these options. ex:</p><strong>Options:</strong><ul><li>TEXT</li><li>LARGE_TEXT</li><li>NUMERICAL</li><li>PHONE</li><li>MONETORY</li><li>CHECKBOX</li><li>SINGLE_OPTIONS</li><li>MULTIPLE_OPTIONS</li><li>FLOAT</li><li>TIME</li><li>DATE</li><li>TEXTBOX_LIST</li><li>FILE_UPLOAD</li><li>SIGNATURE</li></ul><strong>Validation:</strong><p><strong>Name</strong> and <strong>Date Type</strong> are required to create every custom field.<p>On every data type of field have diffrent validation rules. These are the different validation rules.</p><strong>FILE_UPLOAD:</strong><ul><li><strong>acceptedFormat</strong> *(required) This will allow array of file format.<ul><li>.pdf</li><li>.docx</li><li>.jpeg</li><li>.png</li><li>.gif</li><li>.csv</li><li>all</li></ul></li><li><strong>isMulitpalFile</strong> (optional) it allow <code>true</code> or <code>false</code>. If you want to allow multipal files pass <code>true</code> </li><li><strong>maxNumberOfFiles</strong> (options) It will allow maximum these number of files.</li></ul><strong>SINGLE_OPTIONS / MULTIPLE_OPTIONS / CHECKBOX:</strong><br /><ul><li><strong>options</strong> *(required) This will allow array of options.</li></ul><strong>TEXTBOX_LIST</strong><ul><li><strong>textBoxListOptions:</strong> (required) This will allow array of textbox list. Array will contanis label and prefillValue. ex.: <code>{label": "Hello", "prefillValue": "value"}</code></li></ul>  <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Custom Field Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					customFieldId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/custom-fields/:customFieldId
		 * @description <h4>Delete one of custom fields.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Custom Field Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					customFieldId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-fields_{customFieldId}_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/custom-values/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/custom-values/
		 * @description <h4>Get all available custom values.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/custom-values/
		 * @description <h4>Create custom value.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/custom-values/{customValueId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/custom-values/:customValueId
		 * @description <h4>Get custom value by id.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Custom Value Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					customValueId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/custom-values/:customValueId
		 * @description <h4>Update custom value.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Custom Value Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					customValueId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/custom-values/:customValueId
		 * @description <h4>Delete one of custom value.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Custom Value Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					customValueId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_custom-values_{customValueId}_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/forms/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/forms/
		 * @description <h4>Get Forms.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_forms__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_forms__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_forms__get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/forms/submissions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/forms/submissions
		 * @description <h4>Get form submissions.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description Get submission by ending of this date. By default it will be current date.
					 * @example 2020-12-14
					 */
					endAt?: string
					/**
					 * @description Filter submission by form id
					 * @example jjusM6EOngDExnbo2DbU
					 */
					formId?: string
					/**
					 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
					 * @example 20
					 */
					limit?: number
					/**
					 * @description Page No. By default it will be 1
					 * @example 1
					 */
					page?: number
					/**
					 * @description Filter by contactId, name, email or phone no.
					 * @example john@deo.com
					 */
					q?: string
					/**
					 * @description Get submission by starting of this date. By default it will be same date of last month.
					 * @example 2020-11-14
					 */
					startAt?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_forms_submissions_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_forms_submissions_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_forms_submissions_get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/links/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/links/
		 * @description <h4>Get Links.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/links/
		 * @description <h4>Create trigger link.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/links/{linkId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * /v1/links/:linkId
		 * @description <h4>Update trigger links.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Link Id
					 * @example ClK3HFY3WH9L5McNwyy1
					 */
					linkId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links_{linkId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links_{linkId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links_{linkId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links_{linkId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/links/:linkId
		 * @description <h4>Delete one of trigger links.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Link Id Id
					 * @example ClK3HFY3WH9L5McNwyy1
					 */
					linkId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links_{linkId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links_{linkId}_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_links_{linkId}_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/locations/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/locations/
		 * @description <h4>Get all agency location.</h4> <strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/locations/
		 * @description <h4>Create a Location.</h4><p>Required JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>businessName</td><td>string</td><td>ACME Agency</td></tr></tbody></table><p>Allowed JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>address</td><td>string</td><td>3500 Deer Creek Road</td></tr><tr><td>city</td><td>string</td><td>Palo Alto</td></tr><tr><td>state</td><td>string</td><td>CA</td></tr><tr><td>country</td><td>string</td><td>US</td></tr><tr><td>postalCode</td><td>string</td><td>94304</td></tr><tr><td>website</td><td>string</td><td>https://www.tesla.com</td></tr><tr><td>timezone</td><td>string</td><td>US/Central</td></tr><tr><td>firstName</td><td>string</td><td>John</td></tr><tr><td>lastName</td><td>string</td><td>Deno</td></tr><tr><td>email</td><td>string</td><td>johndeo@gmail.com</td></tr><tr><td>phone</td><td>string</td><td>+1202-555-0107</td></tr><tr><td>settings</td><td>object</td><td><code>{ "allowDuplicateContact": false, "allowDuplicateOpportunity": false, "allowFacebookNameMerge": false, "disableContactTimezone": false }</code></td></tr><tr><td>twilio</td><td>object</td><td><code>{ "sid": "AC_XXXXXXXXXXX", "authToken": "77_XXXXXXXXXXX" }</code></td></tr><tr><td>snapshot</td><td>object</td><td><code>{ "id": "XXXXXXXXXXX", "type": "vertical" }</code></td></tr><tr><td>mailgun</td><td>object</td><td><code>{"mailgun": {"apiKey": "key-XXXXXXXXXXX", "domain": "replies.yourdomain.com"}</code></td></tr></tbody></table><p>Twilio field required two field to setup</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>sid</td><td>string</td><td>AC_XXXXXXXXXXX (Twilio Account SID)</td></tr><tr><td>authToken</td><td>string</td><td>77_XXXXXXXXXXX (Twilio Auth Token)</td></tr></tbody></table><p>Snapshot field required two field to import</p><table><thead><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Option</th></thead><tbody><tr><td>id</td><td>string</td><td>XXXXXXXXXXX (Find it from snapshot api)</td><td></td></tr><tr><td>type</td><td>string</td><td>own</td><td><ul><li>own</li><li>imported</li></ul></td></tr></tbody></table><p>Mailgun field required two field to setup</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>apiKey</td><td>string</td><td>key-XXXXXXXXXXX</td><td></td></tr><tr><td>domain</td><td>string</td><td>replies.yourdomain.com</td></tr></tbody></table><p>Timezone field allowed options, Can grab it from the timezone list api.</p><br /><h5>Authorization:</h5><p>Provide your agency api key (Bearer Token). You can find it on Agency -&gt; Settings -&gt; API keys</p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/locations/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/locations/:locationId
		 * @description <h4>Get location by location id.</h4><strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Location Id
					 * @example i2SpAtBVHSVea1sL6oah
					 */
					locationId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/locations/:locationId
		 * @description <h4>Update a Location.</h4><p>Required JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>businessName</td><td>string</td><td>ACME Agency</td></tr></tbody></table><p>Allowed JSON fields in the body</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>address</td><td>string</td><td>3500 Deer Creek Road</td></tr><tr><td>city</td><td>string</td><td>Palo Alto</td></tr><tr><td>state</td><td>string</td><td>CA</td></tr><tr><td>country</td><td>string</td><td>US</td></tr><tr><td>postalCode</td><td>string</td><td>94304</td></tr><tr><td>website</td><td>string</td><td>https://www.tesla.com</td></tr><tr><td>timezone</td><td>string</td><td>US/Central</td></tr><tr><td>firstName</td><td>string</td><td>John</td></tr><tr><td>lastName</td><td>string</td><td>Deno</td></tr><tr><td>email</td><td>string</td><td>johndeo@gmail.com</td></tr><tr><td>phone</td><td>string</td><td>+1202-555-0107</td></tr><tr><td>settings</td><td>object</td><td><code>{ "allowDuplicateContact": false, "allowDuplicateOpportunity": false, "allowFacebookNameMerge": false, "disableContactTimezone": false }</code></td></tr><tr><td>twilio</td><td>object</td><td><code>{ "sid": "AC_XXXXXXXXXXX", "authToken": "77_XXXXXXXXXXX" }</code></td></tr><tr><td>mailgun</td><td>object</td><td><code>{"mailgun": {"apiKey": "key-XXXXXXXXXXX", "domain": "replies.yourdomain.com"}</code></td></tr></tbody></table><p>Twilio field required two field to setup</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>sid</td><td>string</td><td>AC_XXXXXXXXXXX (Twilio Account SID)</td></tr><tr><td>authToken</td><td>string</td><td>77_XXXXXXXXXXX (Twilio Auth Token)</td></tr></tbody></table><p>Mailgun field required two field to setup</p><table><thead><th>Fields</th><th>Types</th><th>Example</th></thead><tbody><tr><td>apiKey</td><td>string</td><td>key-XXXXXXXXXXX</td><td></td></tr><tr><td>domain</td><td>string</td><td>replies.yourdomain.com</td></tr></tbody></table><p>Timezone field allowed options, Can grab it from the timezone list api.</p> <br /><h5>Authorization:</h5><p>Provide your agency api key (Bearer Token). You can find it on Agency -&gt; Settings -&gt; API keys</p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Location Id
					 * @example i2SpAtBVHSVea1sL6oah
					 */
					locationId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/locations/:locationId
		 * @description <h4>Delete location.</h4><p>Allowed fields in the query parameter.</p><table role="table"><thead><tr><th>Fields</th><th>Allowed Options</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td>deleteTwilioAccount</td><td><code>true</code> or <code>false</code></td><td><code>false</code></td><td>If you pass <code>true</code>, When deleting the subaccount. We delete Twilio subaccount (on Twilio side) as well.</td></tr></tbody></table><h5>Authorization:</h5><p>Provide your agency api key (Bearer Token). You can find it on Agency -&gt; Settings -&gt; API keys</p>
		 */
		delete: {
			parameters: {
				query?: {
					/**
					 * @description Delete Twilio Account
					 * @example false
					 */
					deleteTwilioAccount?: boolean
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Location Id
					 * @example i2SpAtBVHSVea1sL6oah
					 */
					locationId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_delete_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/locations/{locationId}/load-snapshot/{snapshotId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * /v1/locations/:locationId/load-snapshot/:snapshotId
		 * @description <h4>Load Snapshot.</h4><h5>Fields</h5><ol><li><strong>override</strong>*: We will allow <code>true</code> or <code>false</code>. If you want override all conflict assets then pass <code>true</code>. By default it <code>false</code>. By default it <code>false</code></li></ol><h5>Authorization:</h5><p>Provide your agency api key (Bearer Token). You can find it on Agency -&gt; Settings -&gt; API keys</p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Location Id
					 * @example i2SpAtBVHSVea1sL6oah
					 */
					locationId: string
					/**
					 * @description (Required) Snapshot Id
					 * @example 5bFKHqudfotv3c1xFUuP
					 */
					snapshotId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_load-snapshot_{snapshotId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_load-snapshot_{snapshotId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_load-snapshot_{snapshotId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_{locationId}_load-snapshot_{snapshotId}_put_422_response']
					}
				}
			}
		}
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/locations/lookup': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/locations/lookup
		 * @description <h4>Find location by email.</h4><strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description (Required) Email
					 * @example john@deo.com
					 */
					email?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_lookup_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_lookup_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_locations_lookup_get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/pipelines/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/pipelines/
		 * @description <h4>Get Pipelines.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines__get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/pipelines/{pipelineId}/opportunities': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/pipelines/:pipelineId/opportunities
		 * @description <h4>Get opportunities.</h4><p><p>Allowed filter in the query</p><table> <thead> <tr> <th>Fields</th> <th>Types</th> <th>Example</th> <th>Allowed Options</th> </tr></thead> <tbody> <tr> <td>stageId</td><td>string</td><td>7915dedc-8f18-44d5-8bc3-77c04e994a10</td><td></td></tr><tr> <td>monetaryValue</td><td>number</td><td>220</td><td></td></tr><tr> <td>assignedTo</td><td>string</td><td>082goXVW3lIExEQPOnd3</td><td></td></tr><tr> <td>campaignId</td><td>string</td><td>Y2I9XM7aO1hncuSOlc9L</td><td></td></tr><tr> <td>startDate</td><td>number</td><td>epoch timestamp. for ex: <code>1598107050459</code></td><td></td></tr><tr> <td>endDate</td><td>number</td><td>epoch timestamp. for ex: <code>1614091050459</code></td><td></td></tr><tr> <td>query</td><td>string</td><td><code>?query=john@deo.com</code></td><td></td></tr><tr> <td>status</td><td>string</td><td>open</td><td> <ul> <li>open</li><li>won</li><li>lost</li><li>abandoned</li></ul> </td></tr></tbody> </table><br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
					 * @example 20
					 */
					limit?: number
					/**
					 * @description Start After
					 * @example 1603870249758
					 */
					startAfter?: number
					/**
					 * @description Start After Id
					 * @example UIaE1WjAwWKdlyD7osQI
					 */
					startAfterId?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Pipeline Id
					 * @example bCkKGpDsyPP4peuKowkG
					 */
					pipelineId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/pipelines/{pipelineId}/opportunities/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * /v1/pipelines/:pipelineId/opportunities/
		 * @description <h4>Create opportunity.</h4><p>Required JSON fields in the body</p><table><thead><tr><th>Fields</th><th>Types</th><th>Example</th><th>Allowed Options</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>First Opps</td><td></td></tr><tr><td>stageId</td><td>string</td><td>7915dedc-8f18-44d5-8bc3-77c04e994a10</td><td></td></tr><tr><td>contactId (or email or phone)</td><td>string</td><td>mTkSCb1UBjb5tk4OvB69</td><td></td></tr><tr><td>email (or contactId or phone)</td><td>string</td><td>john@deo.com</td><td></td></tr><tr><td>phone (or contactId or email)</td><td>string</td><td>+1202-555-0107</td><td></td></tr><tr><td>status</td><td>string</td><td>open</td><td><ul><li>open</li><li>won</li><li>lost</li><li>abandoned</li></ul></td></tr></tbody></table><p>Allowed JSON fields in the body</p><table><thead><tr><th>Fields</th><th>Types</th><th>Example</th></tr></thead><tbody><tr><td>monetaryValue</td><td>number</td><td>220</td></tr><tr><td>assignedTo</td><td>string</td><td>082goXVW3lIExEQPOnd3</td></tr><tr><td>name</td><td>string</td><td>John Deo</td></tr><tr><td>tags</td><td>array</td><td><code>["tag1", "tag2"]</code></td></tr><tr><td>companyName</td><td>string</td><td>Tesla Inc</td></tr></tbody></table> <br /> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Pipeline Id
					 * @example bCkKGpDsyPP4peuKowkG
					 */
					pipelineId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/pipelines/{pipelineId}/opportunities/{opportunityId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/pipelines/:pipelineId/opportunities/:opportunityId
		 * @description <h4>Get opportunity by id.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Opportunity Id
					 * @example 123akv4LFn6C9frZoy3e
					 */
					opportunityId: string
					/**
					 * @description (Required) Pipeline Id
					 * @example bCkKGpDsyPP4peuKowkG
					 */
					pipelineId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/pipelines/:pipelineId/opportunities/:opportunityId
		 * @description <h4>Update Opportunity.</h4><p>Required JSON fields in the body</p><table> <thead> <tr> <th>Fields</th> <th>Types</th> <th>Example</th> <th>Allowed Options</th> </tr></thead> <tbody> <tr> <td>title</td><td>string</td><td>First Opps</td><td></td></tr><tr> <td>stageId</td><td>string</td><td>7915dedc-8f18-44d5-8bc3-77c04e994a10</td><td></td></tr><tr> <td>status</td><td>string</td><td>open</td><td> <ul> <li>open</li><li>won</li><li>lost</li><li>abandoned</li></ul> </td></tr></tbody></table><p>Allowed JSON fields in the body</p><table> <thead> <tr> <th>Fields</th> <th>Types</th> <th>Example</th> </tr></thead> <tbody> <tr> <td>monetaryValue</td><td>number</td><td>220</td></tr><tr> <td>assignedTo</td><td>string</td><td>082goXVW3lIExEQPOnd3</td></tr><tr> <td>contactId</td><td>string</td><td>mTkSCb1UBjb5tk4OvB69</td></tr><tr> <td>email</td><td>string</td><td>john@deo.com</td></tr><tr> <td>name</td><td>string</td><td>John Deo</td></tr><tr> <td>phone</td><td>string</td><td>+1202-555-0107</td></tr><tr> <td>tags</td><td>array</td><td><code>["tag1", "tag2"]</code></td></tr><tr> <td>companyName</td><td>string</td><td>Tesla Inc</td></tr></tbody> </table> <br /><strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Opportunity Id
					 * @example 123akv4LFn6C9frZoy3e
					 */
					opportunityId: string
					/**
					 * @description (Required) Pipeline Id
					 * @example bCkKGpDsyPP4peuKowkG
					 */
					pipelineId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/pipelines/:pipelineId/opportunities/:opportunityId
		 * @description <h4>Delete opportunity.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Opportunity Id
					 * @example 123akv4LFn6C9frZoy3e
					 */
					opportunityId: string
					/**
					 * @description (Required) Pipeline Id
					 * @example bCkKGpDsyPP4peuKowkG
					 */
					pipelineId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_delete_401_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/pipelines/{pipelineId}/opportunities/{opportunityId}/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * /v1/pipelines/:pipelineId/opportunities/:opportunityId/status
		 * @description <h4>Update opportunity status and stage.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Opportunity Id
					 * @example 123akv4LFn6C9frZoy3e
					 */
					opportunityId: string
					/**
					 * @description (Required) Pipeline Id
					 * @example bCkKGpDsyPP4peuKowkG
					 */
					pipelineId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_status_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_status_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_status_put_422_response']
					}
				}
			}
		}
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/saas/locations': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/saas/locations
		 * @description <h4>Get saas locations.</h4> <strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description Customer Id
					 * @example cus_xxxxxxxxxx
					 */
					customerId?: string
					/**
					 * @description Subscription Id (optional)
					 * @example sub_xxxxxxxxxxxx
					 */
					subscriptionId?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_saas_locations_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_saas_locations_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_saas_locations_get_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_saas_locations_get_422_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/saas/update-saas-subscription/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * /v1/saas/update-saas-subscription/:locationId
		 * @description <h4>Update saas subscription.</h4> <strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Location Id
					 * @example KXD1dw233GU1Zrvyp
					 */
					locationId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_saas_update-saas-subscription_{locationId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_saas_update-saas-subscription_{locationId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_saas_update-saas-subscription_{locationId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_saas_update-saas-subscription_{locationId}_put_422_response']
					}
				}
			}
		}
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/snapshots/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/snapshots/
		 * @description <h4>Get all snapshots.</h4> <strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_snapshots__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_snapshots__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_snapshots__get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/surveys/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/surveys/
		 * @description <h4>Get Surveys.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_surveys__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_surveys__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_surveys__get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/surveys/submissions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/surveys/submissions
		 * @description <h4>Get survey submissions.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description Get submission by ending of this date. By default it will be current date.
					 * @example 2020-12-14
					 */
					endAt?: string
					/**
					 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
					 * @example 20
					 */
					limit?: number
					/**
					 * @description Page No. By default it will be 1
					 * @example 1
					 */
					page?: number
					/**
					 * @description Filter by contactId, name, email or phone no.
					 * @example john@deo.com
					 */
					q?: string
					/**
					 * @description Get submission by starting of this date. By default it will be same date of last month.
					 * @example 2020-11-14
					 */
					startAt?: string
					/**
					 * @description Filter submission by survey id
					 * @example jjusM6EOngDExnbo2DbU
					 */
					surveyId?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_surveys_submissions_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_surveys_submissions_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_surveys_submissions_get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/tags/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/tags/
		 * @description <h4>Get Tags.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/tags/
		 * @description <h4>Create Tag.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/tags/{tagId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/tags/:tagId
		 * @description <h4>Get tag by id.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Tag Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					tagId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/tags/:tagId
		 * @description <h4>Update tag.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) Tag Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					tagId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/tags/:tagId
		 * @description <h4>Delete one of tag.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) Custom Value Id
					 * @example ocQHyuzHvysMo5N5VsXc
					 */
					tagId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_delete_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_tags_{tagId}_delete_422_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/timezones/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/timezones/
		 * @description <h4>Get timezone list.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_timezones__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_timezones__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_timezones__get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/users/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/users/
		 * @description <h4>Get all agency users.</h4> <strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description (Optional) Filter users by location.
					 * @example i2SpAtBVHSVea1sL6oah
					 */
					locationId?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users__get_401_response']
					}
				}
			}
		}
		put?: never
		/**
		 * /v1/users/
		 * @description <h4>Create a User.</h4><p>Small description for the field allow options.<p><strong>type</strong> fields will allow these options:</p><ul><li>account</li><li>agency</li></ul></p><p><strong>role</strong> fields will allow these options:</p><ul><li>admin</li><li>user</li></ul></p><p><strong>locationIds</strong> fields will allow valid locations id of the agency.</p><strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		post: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users__post_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users__post_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users__post_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users__post_422_response']
					}
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/users/{userId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/users/:userId
		 * @description <h4>Get agency by user id.</h4> <strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		get: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) User Id
					 * @example 082goXVW3lIExEQPOnd3
					 */
					userId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_get_401_response']
					}
				}
			}
		}
		/**
		 * /v1/users/:userId
		 * @description <h4>Update a User.</h4><p>Small description for the field allow options.<p><strong>type</strong> fields will allow these options:</p><ul><li>account</li><li>agency</li></ul></p><p><strong>role</strong> fields will allow these options:</p><ul><li>admin</li><li>user</li></ul></p><p><strong>locationIds</strong> fields will allow valid locations id of the agency.</p><strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		put: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
					/** @example application/json */
					'Content-Type'?: string
				}
				path: {
					/**
					 * @description (Required) User Id
					 * @example 082goXVW3lIExEQPOnd3
					 */
					userId: string
				}
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': Record<string, never>
				}
			}
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_put_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_put_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_put_401_response']
					}
				}
				/** @description Unprocessable Entity (WebDAV) (RFC 4918) */
				422: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_put_422_response']
					}
				}
			}
		}
		post?: never
		/**
		 * /v1/users/:userId
		 * @description  Delete one of user.<strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		delete: {
			parameters: {
				query?: never
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path: {
					/**
					 * @description (Required) User Id
					 * @example 082goXVW3lIExEQPOnd3
					 */
					userId: string
				}
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': Record<string, never>
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_delete_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_{userId}_delete_401_response']
					}
				}
			}
		}
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/users/location': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/users/location
		 * @description <h4>Get user by location.</h4>  <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_location_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_location_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_location_get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/users/lookup': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/users/lookup
		 * @description <h4>Find user by email.</h4> <strong>Authorization:</strong> <p>Provide your agency api key (Bearer Token). You can find it on Agency -> Settings -> API keys</p>
		 */
		get: {
			parameters: {
				query?: {
					/**
					 * @description (Required) Email
					 * @example hello@google.com
					 */
					email?: string
				}
				header?: {
					/** @description Access Token */
					Authorization?: string
				}
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_lookup_get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_lookup_get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_users_lookup_get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/v1/workflows/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * /v1/workflows/
		 * @description <h4>Get Workflow.</h4> <strong>Authorization:</strong> <p>Provide your location api key (Bearer Token). <a href="https://help.gohighlevel.com/support/solutions/articles/48000982605-company-settings" target="_blank">You can find here</a></p>
		 */
		get: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: never
			responses: {
				/** @description OK */
				200: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_workflows__get_200_response']
					}
				}
				/** @description Bad Request */
				400: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_workflows__get_400_response']
					}
				}
				/** @description Unauthorized */
				401: {
					headers: {
						'Content-Type'?: string
						[name: string]: unknown
					}
					content: {
						'application/json': components['schemas']['_v1_workflows__get_401_response']
					}
				}
			}
		}
		put?: never
		post?: never
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
		_v1_appointments__get_200_response: {
			appointments?: {
				appoinmentStatus?: string
				calendarId?: string
				calendarProviderId?: string
				calendarServiceId?: string
				contact?: {
					__moreField__?: string
					country?: string
					customField?: {
						id?: string
						value?: string
					}[]
					email?: string
					emailLowerCase?: string
					fingerprint?: string
					id?: string
					locationId?: string
					tags?: string[]
					timezone?: string
				}
				contactId?: string
				endTime?: string
				id?: string
				isRecurring?: boolean
				locationId?: string
				selectedTimezone?: string
				startTime?: string
				status?: string
				title?: string
				userId?: string
			}[]
		}
		_v1_appointments__get_400_response: {
			msg?: string
		}
		_v1_appointments__get_401_response: {
			msg?: string
		}
		_v1_appointments__get_422_response: {
			endDate?: {
				message?: string
				rule?: string
			}
			startDate?: {
				message?: string
				rule?: string
			}
			'userId or calendarProviderId'?: {
				message?: string
				rule?: string
			}
		}
		_v1_appointments__post_200_response: {
			contact?: {
				__moreField__?: string
				country?: string
				customField?: {
					id?: string
					value?: string
				}[]
				email?: string
				emailLowerCase?: string
				fingerprint?: string
				id?: string
				locationId?: string
				timezone?: string
			}
			contactId?: string
			id?: string
		}
		_v1_appointments__post_400_response: {
			msg?: string
		}
		_v1_appointments__post_401_response: {
			msg?: string
		}
		_v1_appointments__post_422_response: {
			calendarId?: {
				message?: string
				rule?: string
			}
			'email or phone'?: {
				message?: string
				rule?: string
			}
			selectedSlot?: {
				message?: string
				rule?: string
			}
			selectedTimezone?: {
				message?: string
				rule?: string
			}
		}
		'_v1_appointments_{appointmentId}_delete_400_response': {
			msg?: string
		}
		'_v1_appointments_{appointmentId}_delete_401_response': {
			msg?: string
		}
		'_v1_appointments_{appointmentId}_get_200_response': {
			appoinmentStatus?: string
			calendarId?: string
			calendarProviderId?: string
			calendarServiceId?: string
			contact?: {
				__moreField__?: string
				country?: string
				customField?: {
					id?: string
					value?: string
				}[]
				email?: string
				emailLowerCase?: string
				fingerprint?: string
				id?: string
				locationId?: string
				tags?: string[]
				timezone?: string
			}
			contactId?: string
			endTime?: string
			id?: string
			isRecurring?: boolean
			locationId?: string
			selectedTimezone?: string
			startTime?: string
			status?: string
			title?: string
			userId?: string
		}
		'_v1_appointments_{appointmentId}_get_400_response': {
			msg?: string
		}
		'_v1_appointments_{appointmentId}_get_401_response': {
			msg?: string
		}
		'_v1_appointments_{appointmentId}_put_200_response': {
			contact?: {
				__moreField__?: string
				country?: string
				customField?: {
					id?: string
					value?: string
				}[]
				email?: string
				emailLowerCase?: string
				fingerprint?: string
				id?: string
				locationId?: string
				timezone?: string
			}
			contactId?: string
			id?: string
		}
		'_v1_appointments_{appointmentId}_put_400_response': {
			msg?: string
		}
		'_v1_appointments_{appointmentId}_put_401_response': {
			msg?: string
		}
		'_v1_appointments_{appointmentId}_put_422_response': {
			selectedSlot?: {
				message?: string
				rule?: string
			}
			selectedTimezone?: {
				message?: string
				rule?: string
			}
		}
		'_v1_appointments_{appointmentId}_status_put_400_response': {
			msg?: string
		}
		'_v1_appointments_{appointmentId}_status_put_401_response': {
			msg?: string
		}
		'_v1_appointments_{appointmentId}_status_put_422_response': {
			status?: {
				message?: string
				rule?: string
			}
		}
		_v1_appointments_slots_get_200_response: {
			_dates_?: {
				slots?: string[]
			}
		}
		_v1_appointments_slots_get_400_response: {
			msg?: string
		}
		_v1_appointments_slots_get_401_response: {
			msg?: string
		}
		_v1_appointments_slots_get_422_response: {
			calendarId?: {
				message?: string
				rule?: string
			}
			endDate?: {
				message?: string
				rule?: string
			}
			startDate?: {
				message?: string
				rule?: string
			}
		}
		'_v1_calendars_check-slug-availability_{slug}_get_200_response': {
			isSlugAvailable?: boolean
			slug?: string
		}
		'_v1_calendars_check-slug-availability_{slug}_get_400_response': {
			msg?: string
		}
		'_v1_calendars_check-slug-availability_{slug}_get_401_response': {
			msg?: string
		}
		'_v1_calendars_check-slug-availability_{slug}_get_422_response': {
			'email or phone'?: {
				message?: string
				rule?: string
			}
		}
		_v1_calendars_services__post_200_response: {
			appointmentTitle?: string
			availability?: {
				appointmentInfo?: {
					perDay?: number
					perSlot?: number
				}
				eventTiming?: {
					slotBuffer?: number
					slotDuration?: number
					slotInterval?: number
				}
				officeHours?: {
					friday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
					monday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
					thursday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
					tuesday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
					wednesday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
				}
				schedule?: {
					allowBookingAfter?: number
					allowBookingAfterUnit?: string
					allowBookingFor?: number
					allowBookingForUnit?: string
				}
			}
			confirmation?: {
				form?: {
					customFormId?: string
					stickyContact?: boolean
				}
				formSubmission?: {
					content?: string
					type?: string
				}
				notificationAndOther?: {
					alertEmail?: string
					customCode?: string
					facebookPixelId?: string
					hasAllowCancellation?: boolean
					hasAllowReschedule?: boolean
					hasAutoConfirm?: boolean
					hasGoogleSendInvitationEmail?: boolean
					hasSendEmailToAssignedMember?: boolean
					notes?: string
				}
			}
			description?: string
			eventColor?: string
			id?: string
			linkedCalendars?: {
				clio?: {
					id?: string
					name?: string
				}
				drchrono?: {
					id?: string
					name?: string
				}
				google?: {
					id?: string
					name?: string
				}
			}
			meetingLocation?: string
			name?: string
			syncOption?: string
			teamId?: string
			teamMembers?: {
				meetingLocation?: string
				priority?: number
				selected?: boolean
				userId?: string
			}[]
		}
		_v1_calendars_services__post_400_response: {
			msg?: string
		}
		_v1_calendars_services__post_401_response: {
			msg?: string
		}
		_v1_calendars_services__post_422_response: {
			appointmentTitle?: {
				message?: string
				rule?: string
			}
			'availability.eventTiming.slotDuration'?: {
				message?: string
				rule?: string
			}
			'availability.eventTiming.slotInterval'?: {
				message?: string
				rule?: string
			}
			'availability.officeHours'?: {
				message?: string
				rule?: string
			}
			'confirmation.formSubmission.content'?: {
				message?: string
				rule?: string
			}
			'confirmation.formSubmission.type'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.allowCancellation'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.allowReschedule'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.autoConfirm'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.googleInvitationEmails'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.shouldSendAlertEmailsToAssignedMember'?: {
				message?: string
				rule?: string
			}
			description?: {
				message?: string
				rule?: string
			}
			eventColor?: {
				message?: string
				rule?: string
			}
			eventType?: {
				message?: string
				rule?: string
			}
			name?: {
				message?: string
				rule?: string
			}
			slug?: {
				message?: string
				rule?: string
			}
			teamId?: {
				message?: string
				rule?: string
			}
			teamMembers?: {
				message?: string
				rule?: string
			}
		}
		'_v1_calendars_services_{serviceId}_delete_400_response': {
			msg?: string
		}
		'_v1_calendars_services_{serviceId}_delete_401_response': {
			msg?: string
		}
		'_v1_calendars_services_{serviceId}_delete_422_response': {
			id?: {
				message?: string
				rule?: string
			}
		}
		'_v1_calendars_services_{serviceId}_put_200_response': {
			appointmentTitle?: string
			availability?: {
				appointmentInfo?: {
					perDay?: number
					perSlot?: number
				}
				eventTiming?: {
					slotBuffer?: number
					slotDuration?: number
					slotInterval?: number
				}
				officeHours?: {
					friday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
					monday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
					thursday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
					tuesday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
					wednesday?: {
						closeHour?: number
						closeMinute?: number
						openHour?: number
						openMinute?: number
					}[]
				}
				schedule?: {
					allowBookingAfter?: number
					allowBookingAfterUnit?: string
					allowBookingFor?: number
					allowBookingForUnit?: string
				}
			}
			confirmation?: {
				form?: {
					customFormId?: string
					stickyContact?: boolean
				}
				formSubmission?: {
					content?: string
					type?: string
				}
				notificationAndOther?: {
					alertEmail?: string
					customCode?: string
					facebookPixelId?: string
					hasAllowCancellation?: boolean
					hasAllowReschedule?: boolean
					hasAutoConfirm?: boolean
					hasGoogleSendInvitationEmail?: boolean
					hasSendEmailToAssignedMember?: boolean
					notes?: string
				}
			}
			description?: string
			eventColor?: string
			id?: string
			linkedCalendars?: {
				clio?: {
					id?: string
					name?: string
				}
				drchrono?: {
					id?: string
					name?: string
				}
				google?: {
					id?: string
					name?: string
				}
			}
			meetingLocation?: string
			name?: string
			syncOption?: string
			teamId?: string
			teamMembers?: {
				meetingLocation?: string
				priority?: number
				selected?: boolean
				userId?: string
			}[]
		}
		'_v1_calendars_services_{serviceId}_put_400_response': {
			msg?: string
		}
		'_v1_calendars_services_{serviceId}_put_401_response': {
			msg?: string
		}
		'_v1_calendars_services_{serviceId}_put_422_response': {
			appointmentTitle?: {
				message?: string
				rule?: string
			}
			'availability.eventTiming.slotDuration'?: {
				message?: string
				rule?: string
			}
			'availability.eventTiming.slotInterval'?: {
				message?: string
				rule?: string
			}
			'availability.officeHours'?: {
				message?: string
				rule?: string
			}
			'confirmation.formSubmission.content'?: {
				message?: string
				rule?: string
			}
			'confirmation.formSubmission.type'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.allowCancellation'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.allowReschedule'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.autoConfirm'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.googleInvitationEmails'?: {
				message?: string
				rule?: string
			}
			'confirmation.notificationAndOther.shouldSendAlertEmailsToAssignedMember'?: {
				message?: string
				rule?: string
			}
			description?: {
				message?: string
				rule?: string
			}
			eventColor?: {
				message?: string
				rule?: string
			}
			eventType?: {
				message?: string
				rule?: string
			}
			name?: {
				message?: string
				rule?: string
			}
			slug?: {
				message?: string
				rule?: string
			}
			teamId?: {
				message?: string
				rule?: string
			}
			teamMembers?: {
				message?: string
				rule?: string
			}
		}
		_v1_calendars_services_get_200_response: {
			services?: {
				appointmentTitle?: string
				availability?: {
					appointmentInfo?: {
						perDay?: number
						perSlot?: number
					}
					eventTiming?: {
						slotBuffer?: number
						slotDuration?: number
						slotInterval?: number
					}
					officeHours?: {
						friday?: {
							closeHour?: number
							closeMinute?: number
							openHour?: number
							openMinute?: number
						}[]
						monday?: {
							closeHour?: number
							closeMinute?: number
							openHour?: number
							openMinute?: number
						}[]
						thursday?: {
							closeHour?: number
							closeMinute?: number
							openHour?: number
							openMinute?: number
						}[]
						tuesday?: {
							closeHour?: number
							closeMinute?: number
							openHour?: number
							openMinute?: number
						}[]
						wednesday?: {
							closeHour?: number
							closeMinute?: number
							openHour?: number
							openMinute?: number
						}[]
					}
					schedule?: {
						allowBookingAfter?: number
						allowBookingAfterUnit?: string
						allowBookingFor?: number
						allowBookingForUnit?: string
					}
				}
				confirmation?: {
					form?: {
						customFormId?: string
						stickyContact?: boolean
					}
					formSubmission?: {
						content?: string
						type?: string
					}
					notificationAndOther?: {
						alertEmail?: string
						customCode?: string
						facebookPixelId?: string
						hasAllowCancellation?: boolean
						hasAllowReschedule?: boolean
						hasAutoConfirm?: boolean
						hasGoogleSendInvitationEmail?: boolean
						hasSendEmailToAssignedMember?: boolean
						notes?: string
					}
				}
				description?: string
				eventColor?: string
				id?: string
				linkedCalendars?: {
					clio?: {
						id?: string
						name?: string
					}
					drchrono?: {
						id?: string
						name?: string
					}
					google?: {
						id?: string
						name?: string
					}
				}
				meetingLocation?: string
				name?: string
				syncOption?: string
				teamId?: string
				teamMembers?: {
					meetingLocation?: string
					priority?: number
					selected?: boolean
					userId?: string
				}[]
			}[]
		}
		_v1_calendars_services_get_400_response: {
			msg?: string
		}
		_v1_calendars_services_get_401_response: {
			msg?: string
		}
		_v1_calendars_teams__post_200_response: {
			calendarConfig?: {
				calendarName?: string
				description?: string
				link?: string
				shouldAssignContactToTeamMember?: boolean
				shouldSkipAssigningContactForExisting?: boolean
				slug?: string
			}
			id?: string
			members?: {
				email?: string
				id?: string
				name?: string
			}[]
			name?: string
		}
		_v1_calendars_teams__post_400_response: {
			msg?: string
		}
		_v1_calendars_teams__post_401_response: {
			msg?: string
		}
		_v1_calendars_teams__post_422_response: {
			'calendarConfig.calendarName'?: {
				message?: string
				rule?: string
			}
			'calendarConfig.description'?: {
				message?: string
				rule?: string
			}
			'calendarConfig.slug'?: {
				message?: string
				rule?: string
			}
			name?: {
				message?: string
				rule?: string
			}
			userIds?: {
				message?: string
				rule?: string
			}
		}
		'_v1_calendars_teams_{teamId}_delete_400_response': {
			msg?: string
		}
		'_v1_calendars_teams_{teamId}_delete_401_response': {
			msg?: string
		}
		'_v1_calendars_teams_{teamId}_put_200_response': {
			calendarConfig?: {
				calendarName?: string
				description?: string
				link?: string
				shouldAssignContactToTeamMember?: boolean
				shouldSkipAssigningContactForExisting?: boolean
				slug?: string
			}
			id?: string
			members?: {
				email?: string
				id?: string
				name?: string
			}[]
			name?: string
		}
		'_v1_calendars_teams_{teamId}_put_400_response': {
			msg?: string
		}
		'_v1_calendars_teams_{teamId}_put_401_response': {
			msg?: string
		}
		'_v1_calendars_teams_{teamId}_put_422_response': {
			'calendarConfig.calendarName'?: {
				message?: string
				rule?: string
			}
			'calendarConfig.description'?: {
				message?: string
				rule?: string
			}
			'calendarConfig.slug'?: {
				message?: string
				rule?: string
			}
			name?: {
				message?: string
				rule?: string
			}
			userIds?: {
				message?: string
				rule?: string
			}
		}
		_v1_calendars_teams_get_200_response: {
			teams?: {
				calendarConfig?: {
					calendarName?: string
					description?: string
					link?: string
					shouldAssignContactToTeamMember?: boolean
					shouldSkipAssigningContactForExisting?: boolean
					slug?: string
				}
				id?: string
				members?: {
					email?: string
					id?: string
					name?: string
				}[]
				name?: string
			}[]
		}
		_v1_calendars_teams_get_400_response: {
			msg?: string
		}
		_v1_calendars_teams_get_401_response: {
			msg?: string
		}
		_v1_campaigns__get_200_response: {
			campaigns?: {
				id?: string
				name?: string
				status?: string
			}[]
		}
		_v1_campaigns__get_400_response: {
			msg?: string
		}
		_v1_campaigns__get_401_response: {
			msg?: string
		}
		_v1_contacts__get_200_response: {
			contacts?: {
				__moreField__?: string
				country?: string
				customField?: {
					id?: string
					value?: string
				}[]
				dateAdded?: string
				email?: string
				emailLowerCase?: string
				fingerprint?: string
				id?: string
				locationId?: string
				source?: string
				tags?: string[]
				timezone?: string
			}[]
			meta?: {
				currentPage?: number
				nextPage?: number
				nextPageUrl?: string
				prevPage?: number
				startAfter?: number
				startAfterId?: string
				total?: number
			}
		}
		_v1_contacts__get_400_response: {
			msg?: string
		}
		_v1_contacts__get_401_response: {
			msg?: string
		}
		_v1_contacts__post_200_response: {
			contact?: {
				__moreField__?: string
				country?: string
				customField?: {
					id?: string
					value?: string
				}[]
				dateAdded?: string
				email?: string
				emailLowerCase?: string
				fingerprint?: string
				id?: string
				locationId?: string
				source?: string
				tags?: string[]
				timezone?: string
			}
		}
		_v1_contacts__post_400_response: {
			msg?: string
		}
		_v1_contacts__post_401_response: {
			msg?: string
		}
		_v1_contacts__post_422_response: {
			'email or phone'?: {
				message?: string
				rule?: string
			}
		}
		'_v1_contacts_{contactId}_appointments__get_200_response': Record<
			string,
			never
		>
		'_v1_contacts_{contactId}_appointments__get_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_appointments__get_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_campaigns_{campaignId}_delete_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_campaigns_{campaignId}_delete_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_campaigns_{campaignId}_delete_422_response': {
			tags?: {
				message?: string
				rules?: string
			}
		}
		'_v1_contacts_{contactId}_campaigns_{campaignId}_post_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_campaigns_{campaignId}_post_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_campaigns_{campaignId}_post_422_response': {
			tags?: {
				message?: string
				rules?: string
			}
		}
		'_v1_contacts_{contactId}_campaigns_remove-all_delete_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_campaigns_remove-all_delete_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_campaigns_remove-all_delete_422_response': {
			tags?: {
				message?: string
				rules?: string
			}
		}
		'_v1_contacts_{contactId}_notes__get_200_response': {
			notes?: {
				body?: string
				createdAt?: string
				createdBy?: string
				id?: string
			}[]
		}
		'_v1_contacts_{contactId}_notes__get_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes__get_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes__post_200_response': {
			body?: string
			createdAt?: string
			createdBy?: string
			id?: string
		}
		'_v1_contacts_{contactId}_notes__post_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes__post_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes__post_422_response': {
			body?: {
				message?: string
				rule?: string
			}
		}
		'_v1_contacts_{contactId}_notes_{noteId}_delete_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes_{noteId}_delete_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes_{noteId}_get_200_response': {
			body?: string
			createdAt?: string
			createdBy?: string
			id?: string
		}
		'_v1_contacts_{contactId}_notes_{noteId}_get_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes_{noteId}_get_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes_{noteId}_put_200_response': {
			body?: string
			createdAt?: string
			createdBy?: string
			id?: string
		}
		'_v1_contacts_{contactId}_notes_{noteId}_put_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes_{noteId}_put_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_notes_{noteId}_put_422_response': {
			body?: {
				message?: string
				rule?: string
			}
		}
		'_v1_contacts_{contactId}_tags__delete_200_response': {
			tags?: string[]
		}
		'_v1_contacts_{contactId}_tags__delete_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tags__delete_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tags__delete_422_response': {
			tags?: {
				message?: string
				rules?: string
			}
		}
		'_v1_contacts_{contactId}_tags__post_200_response': {
			tags?: string[]
		}
		'_v1_contacts_{contactId}_tags__post_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tags__post_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tags__post_422_response': {
			tags?: {
				message?: string
				rules?: string
			}
		}
		'_v1_contacts_{contactId}_tasks__get_200_response': {
			tasks?: {
				assignedTo?: string
				description?: string
				dueDate?: string
				id?: string
				isCompleted?: boolean
				title?: string
			}[]
		}
		'_v1_contacts_{contactId}_tasks__get_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks__get_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks__post_200_response': {
			assignedTo?: string
			description?: string
			dueDate?: string
			id?: string
			isCompleted?: boolean
			title?: string
		}
		'_v1_contacts_{contactId}_tasks__post_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks__post_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks__post_422_response': {
			dueDate?: {
				message?: string
				rule?: string
			}
			title?: {
				message?: string
				rule?: string
			}
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_delete_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_delete_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_get_200_response': {
			assignedTo?: string
			description?: string
			dueDate?: string
			id?: string
			isCompleted?: boolean
			title?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_get_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_get_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_put_200_response': {
			assignedTo?: string
			description?: string
			dueDate?: string
			id?: string
			isCompleted?: boolean
			title?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_put_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_put_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_put_422_response': {
			dueDate?: {
				message?: string
				rule?: string
			}
			title?: {
				message?: string
				rule?: string
			}
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_status_put_200_response': {
			assignedTo?: string
			description?: string
			dueDate?: string
			id?: string
			isCompleted?: boolean
			title?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_status_put_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_status_put_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_tasks_{taskId}_status_put_422_response': {
			dueDate?: {
				message?: string
				rule?: string
			}
			title?: {
				message?: string
				rule?: string
			}
		}
		'_v1_contacts_{contactId}_workflow_{workflowId}_post_400_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_workflow_{workflowId}_post_401_response': {
			msg?: string
		}
		'_v1_contacts_{contactId}_workflow_{workflowId}_post_422_response': {
			contactId?: string
			workflowId?: string
		}
		'_v1_contacts_{id}_delete_400_response': {
			msg?: string
		}
		'_v1_contacts_{id}_delete_401_response': {
			msg?: string
		}
		'_v1_contacts_{id}_delete_422_response': {
			id?: {
				message?: string
				rule?: string
			}
		}
		'_v1_contacts_{id}_get_200_response': {
			contact?: {
				__moreField__?: string
				country?: string
				customField?: {
					id?: string
					value?: string
				}[]
				dateAdded?: string
				email?: string
				emailLowerCase?: string
				fingerprint?: string
				id?: string
				locationId?: string
				source?: string
				tags?: string[]
				timezone?: string
			}
		}
		'_v1_contacts_{id}_get_400_response': {
			msg?: string
		}
		'_v1_contacts_{id}_get_401_response': {
			msg?: string
		}
		'_v1_contacts_{id}_get_422_response': {
			id?: {
				message?: string
				rule?: string
			}
		}
		'_v1_contacts_{id}_put_200_response': {
			contact?: {
				__moreField__?: string
				country?: string
				customField?: {
					id?: string
					value?: string
				}[]
				dateAdded?: string
				email?: string
				emailLowerCase?: string
				fingerprint?: string
				id?: string
				locationId?: string
				source?: string
				tags?: string[]
				timezone?: string
			}
		}
		'_v1_contacts_{id}_put_400_response': {
			msg?: string
		}
		'_v1_contacts_{id}_put_401_response': {
			msg?: string
		}
		'_v1_contacts_{id}_put_422_response': {
			id?: {
				message?: string
				rule?: string
			}
		}
		_v1_contacts_lookup_get_200_response: {
			contacts?: {
				__moreField__?: string
				country?: string
				customField?: {
					id?: string
					value?: string
				}[]
				dateAdded?: string
				email?: string
				emailLowerCase?: string
				fingerprint?: string
				id?: string
				locationId?: string
				source?: string
				tags?: string[]
				timezone?: string
			}[]
		}
		_v1_contacts_lookup_get_400_response: {
			msg?: string
		}
		_v1_contacts_lookup_get_401_response: {
			msg?: string
		}
		_v1_contacts_lookup_get_422_response: {
			'email or phone'?: {
				message?: string
				rule?: string
			}
		}
		'_v1_custom-fields__get_200_response': {
			customFields?: {
				dateType?: string
				fieldKey?: string
				id?: string
				name?: string
				picklistOptions?: string[]
				placeholder?: string
				position?: number
			}[]
		}
		'_v1_custom-fields__get_400_response': {
			msg?: string
		}
		'_v1_custom-fields__get_401_response': {
			msg?: string
		}
		'_v1_custom-fields__post_200_response': {
			dateType?: string
			fieldKey?: string
			id?: string
			name?: string
			picklistOptions?: string[]
			placeholder?: string
			position?: number
		}
		'_v1_custom-fields__post_400_response': {
			msg?: string
		}
		'_v1_custom-fields__post_401_response': {
			msg?: string
		}
		'_v1_custom-fields__post_422_response': {
			dataType?: {
				message?: string
				rule?: string
			}
			name?: {
				message?: string
				rule?: string
			}
			'options or acceptedFormat or textBoxListOptions'?: {
				message?: string
				rule?: string
			}
		}
		'_v1_custom-fields_{customFieldId}_delete_400_response': {
			msg?: string
		}
		'_v1_custom-fields_{customFieldId}_delete_401_response': {
			msg?: string
		}
		'_v1_custom-fields_{customFieldId}_delete_422_response': {
			customFieldId?: {
				message?: string
				rule?: string
			}
		}
		'_v1_custom-fields_{customFieldId}_get_200_response': {
			dateType?: string
			fieldKey?: string
			id?: string
			name?: string
			picklistOptions?: string[]
			placeholder?: string
			position?: number
		}
		'_v1_custom-fields_{customFieldId}_get_400_response': {
			msg?: string
		}
		'_v1_custom-fields_{customFieldId}_get_401_response': {
			msg?: string
		}
		'_v1_custom-fields_{customFieldId}_put_200_response': {
			dateType?: string
			fieldKey?: string
			id?: string
			name?: string
			picklistOptions?: string[]
			placeholder?: string
			position?: number
		}
		'_v1_custom-fields_{customFieldId}_put_400_response': {
			msg?: string
		}
		'_v1_custom-fields_{customFieldId}_put_401_response': {
			msg?: string
		}
		'_v1_custom-fields_{customFieldId}_put_422_response': {
			dataType?: {
				message?: string
				rule?: string
			}
			name?: {
				message?: string
				rule?: string
			}
			'options or acceptedFormat or textBoxListOptions'?: {
				message?: string
				rule?: string
			}
		}
		'_v1_custom-values__get_200_response': {
			customFields?: {
				fieldKey?: string
				id?: string
				name?: string
				value?: string
			}[]
		}
		'_v1_custom-values__get_400_response': {
			msg?: string
		}
		'_v1_custom-values__get_401_response': {
			msg?: string
		}
		'_v1_custom-values__post_200_response': {
			fieldKey?: string
			id?: string
			name?: string
			value?: string
		}
		'_v1_custom-values__post_400_response': {
			msg?: string
		}
		'_v1_custom-values__post_401_response': {
			msg?: string
		}
		'_v1_custom-values__post_422_response': {
			name?: {
				message?: string
				rule?: string
			}
			value?: {
				message?: string
				rule?: string
			}
		}
		'_v1_custom-values_{customValueId}_delete_400_response': {
			msg?: string
		}
		'_v1_custom-values_{customValueId}_delete_401_response': {
			msg?: string
		}
		'_v1_custom-values_{customValueId}_delete_422_response': {
			customValueId?: {
				message?: string
				rule?: string
			}
		}
		'_v1_custom-values_{customValueId}_get_200_response': {
			fieldKey?: string
			id?: string
			name?: string
			value?: string
		}
		'_v1_custom-values_{customValueId}_get_400_response': {
			msg?: string
		}
		'_v1_custom-values_{customValueId}_get_401_response': {
			msg?: string
		}
		'_v1_custom-values_{customValueId}_put_200_response': {
			fieldKey?: string
			id?: string
			name?: string
			value?: string
		}
		'_v1_custom-values_{customValueId}_put_400_response': {
			msg?: string
		}
		'_v1_custom-values_{customValueId}_put_401_response': {
			msg?: string
		}
		'_v1_custom-values_{customValueId}_put_422_response': {
			name?: {
				message?: string
				rule?: string
			}
			value?: {
				message?: string
				rule?: string
			}
		}
		_v1_forms__get_200_response: {
			forms?: {
				id?: string
				name?: string
			}[]
		}
		_v1_forms__get_400_response: {
			msg?: string
		}
		_v1_forms__get_401_response: {
			msg?: string
		}
		_v1_forms_submissions_get_200_response: {
			meta?: {
				currentPage?: number
				nextPage?: number
				prevPage?: number
				total?: number
			}
			submissions?: {
				__custom_field_id__?: string
				__submissions_other_field__?: string
				contactId?: string
				createdAt?: string
				formId?: string
				id?: string
				pageDetails?: {
					fbclid?: string
					referrer?: string
					source?: string
					url?: string
				}
			}[]
		}
		_v1_forms_submissions_get_400_response: {
			msg?: string
		}
		_v1_forms_submissions_get_401_response: {
			msg?: string
		}
		_v1_links__get_200_response: {
			links?: {
				fieldKey?: string
				id?: string
				locationId?: string
				name?: string
				redirectTo?: string
			}[]
		}
		_v1_links__get_400_response: {
			msg?: string
		}
		_v1_links__get_401_response: {
			msg?: string
		}
		_v1_links__post_200_response: {
			fieldKey?: string
			id?: string
			locationId?: string
			name?: string
			redirectTo?: string
		}
		_v1_links__post_400_response: {
			msg?: string
		}
		_v1_links__post_401_response: {
			msg?: string
		}
		_v1_links__post_422_response: {
			name?: {
				message?: string
				rule?: string
			}
			redirectTo?: {
				message?: string
				rule?: string
			}
		}
		'_v1_links_{linkId}_delete_400_response': {
			msg?: string
		}
		'_v1_links_{linkId}_delete_401_response': {
			msg?: string
		}
		'_v1_links_{linkId}_delete_422_response': {
			linkId?: {
				message?: string
				rule?: string
			}
		}
		'_v1_links_{linkId}_put_200_response': {
			fieldKey?: string
			id?: string
			locationId?: string
			name?: string
			redirectTo?: string
		}
		'_v1_links_{linkId}_put_400_response': {
			msg?: string
		}
		'_v1_links_{linkId}_put_401_response': {
			msg?: string
		}
		'_v1_links_{linkId}_put_422_response': {
			linkId?: {
				message?: string
				rule?: string
			}
		}
		_v1_locations__get_200_response: {
			locations?: {
				address?: string
				business?: {
					address?: string
					city?: string
					country?: string
					name?: string
					postalCode?: string
					state?: string
					timezone?: string
					website?: string
				}
				city?: string
				country?: string
				email?: string
				firstName?: string
				id?: string
				lastName?: string
				name?: string
				phone?: string
				postalCode?: string
				settings?: {
					allowDuplicateContact?: boolean
					allowDuplicateOpportunity?: boolean
					allowFacebookNameMerge?: boolean
					disableContactTimezone?: boolean
				}
				social?: {
					blogRss?: string
					facebookUrl?: string
					foursquare?: string
					googlePlaceId?: string
					googlePlus?: string
					instagram?: string
					linkedIn?: string
					pinterest?: string
					twitter?: string
					yelp?: string
					youtube?: string
				}
				state?: string
				timezone?: string
				website?: string
			}[]
		}
		_v1_locations__get_400_response: {
			msg?: string
		}
		_v1_locations__get_401_response: {
			msg?: string
		}
		_v1_locations__post_200_response: {
			address?: string
			business?: {
				address?: string
				city?: string
				country?: string
				email?: string
				name?: string
				postalCode?: string
				state?: string
				timezone?: string
				website?: string
			}
			city?: string
			country?: string
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			name?: string
			phone?: string
			postalCode?: string
			settings?: {
				allowDuplicateContact?: boolean
				allowDuplicateOpportunity?: boolean
				allowFacebookNameMerge?: boolean
				disableContactTimezone?: boolean
			}
			social?: {
				blogRss?: string
				facebookUrl?: string
				foursquare?: string
				googlePlaceId?: string
				googlePlus?: string
				instagram?: string
				linkedIn?: string
				pinterest?: string
				twitter?: string
				yelp?: string
				youtube?: string
			}
			state?: string
			timezone?: string
			website?: string
		}
		_v1_locations__post_400_response: {
			msg?: string
		}
		_v1_locations__post_401_response: {
			msg?: string
		}
		_v1_locations__post_422_response: {
			address?: {
				message?: string
				rule?: string
			}
			businessName?: {
				message?: string
				rule?: string
			}
			city?: {
				message?: string
				rule?: string
			}
			country?: {
				message?: string
				rule?: string
			}
			email?: {
				message?: string
				rule?: string
			}
			firstName?: {
				message?: string
				rule?: string
			}
			lastName?: {
				message?: string
				rule?: string
			}
			phone?: {
				message?: string
				rule?: string
			}
			postalCode?: {
				message?: string
				rule?: string
			}
			state?: {
				message?: string
				rule?: string
			}
		}
		'_v1_locations_{locationId}_delete_200_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_delete_400_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_delete_401_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_delete_422_response': {
			locationId?: {
				message?: string
				rule?: string
			}
		}
		'_v1_locations_{locationId}_get_200_response': {
			address?: string
			business?: {
				address?: string
				city?: string
				country?: string
				email?: string
				name?: string
				postalCode?: string
				state?: string
				timezone?: string
				website?: string
			}
			city?: string
			country?: string
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			name?: string
			phone?: string
			postalCode?: string
			settings?: {
				allowDuplicateContact?: boolean
				allowDuplicateOpportunity?: boolean
				allowFacebookNameMerge?: boolean
				disableContactTimezone?: boolean
			}
			social?: {
				blogRss?: string
				facebookUrl?: string
				foursquare?: string
				googlePlaceId?: string
				googlePlus?: string
				instagram?: string
				linkedIn?: string
				pinterest?: string
				twitter?: string
				yelp?: string
				youtube?: string
			}
			state?: string
			timezone?: string
			website?: string
		}
		'_v1_locations_{locationId}_get_400_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_get_401_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_load-snapshot_{snapshotId}_put_200_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_load-snapshot_{snapshotId}_put_400_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_load-snapshot_{snapshotId}_put_401_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_load-snapshot_{snapshotId}_put_422_response': {
			locationId?: {
				message?: string
				rule?: string
			}
			snapshotId?: {
				message?: string
				rule?: string
			}
		}
		'_v1_locations_{locationId}_put_200_response': {
			address?: string
			business?: {
				address?: string
				city?: string
				country?: string
				email?: string
				name?: string
				postalCode?: string
				state?: string
				timezone?: string
				website?: string
			}
			city?: string
			country?: string
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			name?: string
			phone?: string
			postalCode?: string
			settings?: {
				allowDuplicateContact?: boolean
				allowDuplicateOpportunity?: boolean
				allowFacebookNameMerge?: boolean
				disableContactTimezone?: boolean
			}
			social?: {
				blogRss?: string
				facebookUrl?: string
				foursquare?: string
				googlePlaceId?: string
				googlePlus?: string
				instagram?: string
				linkedIn?: string
				pinterest?: string
				twitter?: string
				yelp?: string
				youtube?: string
			}
			state?: string
			timezone?: string
			website?: string
		}
		'_v1_locations_{locationId}_put_400_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_put_401_response': {
			msg?: string
		}
		'_v1_locations_{locationId}_put_422_response': {
			address?: {
				message?: string
				rule?: string
			}
			businessName?: {
				message?: string
				rule?: string
			}
			city?: {
				message?: string
				rule?: string
			}
			country?: {
				message?: string
				rule?: string
			}
			email?: {
				message?: string
				rule?: string
			}
			firstName?: {
				message?: string
				rule?: string
			}
			lastName?: {
				message?: string
				rule?: string
			}
			phone?: {
				message?: string
				rule?: string
			}
			postalCode?: {
				message?: string
				rule?: string
			}
			state?: {
				message?: string
				rule?: string
			}
		}
		_v1_locations_lookup_get_200_response: {
			address?: string
			business?: {
				address?: string
				city?: string
				country?: string
				email?: string
				name?: string
				postalCode?: string
				state?: string
				timezone?: string
				website?: string
			}
			city?: string
			country?: string
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			name?: string
			phone?: string
			postalCode?: string
			settings?: {
				allowDuplicateContact?: boolean
				allowDuplicateOpportunity?: boolean
				allowFacebookNameMerge?: boolean
				disableContactTimezone?: boolean
			}
			social?: {
				blogRss?: string
				facebookUrl?: string
				foursquare?: string
				googlePlaceId?: string
				googlePlus?: string
				instagram?: string
				linkedIn?: string
				pinterest?: string
				twitter?: string
				yelp?: string
				youtube?: string
			}
			state?: string
			timezone?: string
			website?: string
		}
		_v1_locations_lookup_get_400_response: {
			msg?: string
		}
		_v1_locations_lookup_get_401_response: {
			msg?: string
		}
		_v1_pipelines__get_200_response: {
			pipelines?: {
				id?: string
				name?: string
				stages?: {
					id?: string
					name?: string
				}[]
			}[]
		}
		_v1_pipelines__get_400_response: {
			msg?: string
		}
		_v1_pipelines__get_401_response: {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities__post_200_response': {
			assignedTo?: string
			contact?: {
				companyName?: string
				email?: string
				id?: string
				name?: string
				phone?: string
				tags?: string[]
			}
			createdAt?: string
			id?: string
			lastStatusChangeAt?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			updatedAt?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities__post_400_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities__post_401_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities__post_422_response': {
			'contactId or email'?: {
				message?: string
				rule?: string
			}
			stageId?: {
				message?: string
				rule?: string
			}
			status?: {
				message?: string
				rule?: string
			}
			title?: {
				message?: string
				rule?: string
			}
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_delete_400_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_delete_401_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_get_200_response': {
			assignedTo?: string
			contact?: {
				companyName?: string
				email?: string
				id?: string
				name?: string
				phone?: string
				tags?: string[]
			}
			createdAt?: string
			id?: string
			lastStatusChangeAt?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			updatedAt?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_get_400_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_get_401_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_put_200_response': {
			assignedTo?: string
			contact?: {
				companyName?: string
				email?: string
				id?: string
				name?: string
				phone?: string
				tags?: string[]
			}
			createdAt?: string
			id?: string
			lastStatusChangeAt?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			updatedAt?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_put_400_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_put_401_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_put_422_response': {
			'contactId or email'?: {
				message?: string
				rule?: string
			}
			stageId?: {
				message?: string
				rule?: string
			}
			status?: {
				message?: string
				rule?: string
			}
			title?: {
				message?: string
				rule?: string
			}
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_status_put_400_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_status_put_401_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_{opportunityId}_status_put_422_response': {
			stageId?: {
				message?: string
				rule?: string
			}
			status?: {
				message?: string
				rule?: string
			}
		}
		'_v1_pipelines_{pipelineId}_opportunities_get_200_response': {
			meta?: {
				currentPage?: number
				nextPage?: number
				nextPageUrl?: string
				prevPage?: number
				startAfter?: number
				startAfterId?: string
				total?: number
			}
			opportunities?: {
				assignedTo?: string
				contact?: {
					companyName?: string
					email?: string
					id?: string
					name?: string
					phone?: string
					tags?: string[]
				}
				createdAt?: string
				id?: string
				lastStatusChangeAt?: string
				monetaryValue?: number
				name?: string
				pipelineId?: string
				pipelineStageId?: string
				source?: string
				status?: string
				updatedAt?: string
			}[]
		}
		'_v1_pipelines_{pipelineId}_opportunities_get_400_response': {
			msg?: string
		}
		'_v1_pipelines_{pipelineId}_opportunities_get_401_response': {
			msg?: string
		}
		_v1_saas_locations_get_200_response: {
			locationIds?: string[]
		}
		_v1_saas_locations_get_400_response: {
			msg?: string
		}
		_v1_saas_locations_get_401_response: {
			msg?: string
		}
		_v1_saas_locations_get_422_response: {
			customerId?: {
				message?: string
				rule?: string
			}
			subscriptionId?: {
				message?: string
				rule?: string
			}
		}
		'_v1_saas_update-saas-subscription_{locationId}_put_200_response': {
			locationIds?: string[]
		}
		'_v1_saas_update-saas-subscription_{locationId}_put_400_response': {
			msg?: string
		}
		'_v1_saas_update-saas-subscription_{locationId}_put_401_response': {
			msg?: string
		}
		'_v1_saas_update-saas-subscription_{locationId}_put_422_response': {
			customerId?: {
				message?: string
				rule?: string
			}
			subscriptionId?: {
				message?: string
				rule?: string
			}
		}
		_v1_snapshots__get_200_response: {
			snapshots?: {
				id?: string
				name?: string
				type?: string
			}[]
		}
		_v1_snapshots__get_400_response: {
			msg?: string
		}
		_v1_snapshots__get_401_response: {
			msg?: string
		}
		_v1_surveys__get_200_response: {
			surveys?: {
				id?: string
				name?: string
			}[]
		}
		_v1_surveys__get_400_response: {
			msg?: string
		}
		_v1_surveys__get_401_response: {
			msg?: string
		}
		_v1_surveys_submissions_get_200_response: {
			meta?: {
				currentPage?: number
				nextPage?: number
				prevPage?: number
				total?: number
			}
			submissions?: {
				__custom_field_id__?: string
				__submissions_other_field__?: string
				contactId?: string
				createdAt?: string
				id?: string
				pageDetails?: {
					fbclid?: string
					referrer?: string
					source?: string
					url?: string
				}
				surveyId?: string
			}[]
		}
		_v1_surveys_submissions_get_400_response: {
			msg?: string
		}
		_v1_surveys_submissions_get_401_response: {
			msg?: string
		}
		_v1_tags__get_200_response: {
			tags?: {
				id?: string
				name?: string
			}[]
		}
		_v1_tags__get_400_response: {
			msg?: string
		}
		_v1_tags__get_401_response: {
			msg?: string
		}
		_v1_tags__post_200_response: {
			id?: string
			name?: string
		}
		_v1_tags__post_400_response: {
			msg?: string
		}
		_v1_tags__post_401_response: {
			msg?: string
		}
		_v1_tags__post_422_response: {
			name?: {
				message?: string
				rule?: string
			}
		}
		'_v1_tags_{tagId}_delete_400_response': {
			msg?: string
		}
		'_v1_tags_{tagId}_delete_401_response': {
			msg?: string
		}
		'_v1_tags_{tagId}_delete_422_response': {
			customValueId?: {
				message?: string
				rule?: string
			}
		}
		'_v1_tags_{tagId}_get_200_response': {
			id?: string
			name?: string
		}
		'_v1_tags_{tagId}_get_400_response': {
			msg?: string
		}
		'_v1_tags_{tagId}_get_401_response': {
			msg?: string
		}
		'_v1_tags_{tagId}_put_200_response': {
			id?: string
			name?: string
		}
		'_v1_tags_{tagId}_put_400_response': {
			msg?: string
		}
		'_v1_tags_{tagId}_put_401_response': {
			msg?: string
		}
		'_v1_tags_{tagId}_put_422_response': {
			name?: {
				message?: string
				rule?: string
			}
		}
		_v1_timezones__get_200_response: {
			timezones?: string[]
		}
		_v1_timezones__get_400_response: {
			msg?: string
		}
		_v1_timezones__get_401_response: {
			msg?: string
		}
		_v1_users__get_200_response: {
			users?: {
				email?: string
				firstName?: string
				id?: string
				lastName?: string
				permissions?: {
					adwordsReportingEnabled?: boolean
					appointmentsEnabled?: boolean
					assignedDataOnly?: boolean
					attributionsReportingEnabled?: boolean
					bulkRequestsEnabled?: boolean
					campaignsEnabled?: boolean
					campaignsReadOnly?: boolean
					contactsEnabled?: boolean
					conversationsEnabled?: boolean
					dashboardStatsEnabled?: boolean
					facebookAdsReportingEnabled?: boolean
					funnelsEnabled?: boolean
					leadValueEnabled?: boolean
					marketingEnabled?: boolean
					membershipEnabled?: boolean
					onlineListingsEnabled?: boolean
					opportunitiesEnabled?: boolean
					phoneCallEnabled?: boolean
					reviewsEnabled?: boolean
					settingsEnabled?: boolean
					tagsEnabled?: boolean
					triggersEnabled?: boolean
					websitesEnabled?: boolean
					workflowsEnabled?: boolean
				}
				roles?: {
					locationIds?: string[]
					role?: string
					type?: string
				}
			}[]
		}
		_v1_users__get_400_response: {
			msg?: string
		}
		_v1_users__get_401_response: {
			msg?: string
		}
		_v1_users__post_200_response: {
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			permissions?: {
				adwordsReportingEnabled?: boolean
				appointmentsEnabled?: boolean
				assignedDataOnly?: boolean
				attributionsReportingEnabled?: boolean
				bulkRequestsEnabled?: boolean
				campaignsEnabled?: boolean
				campaignsReadOnly?: boolean
				contactsEnabled?: boolean
				conversationsEnabled?: boolean
				dashboardStatsEnabled?: boolean
				facebookAdsReportingEnabled?: boolean
				funnelsEnabled?: boolean
				leadValueEnabled?: boolean
				marketingEnabled?: boolean
				membershipEnabled?: boolean
				onlineListingsEnabled?: boolean
				opportunitiesEnabled?: boolean
				phoneCallEnabled?: boolean
				reviewsEnabled?: boolean
				settingsEnabled?: boolean
				tagsEnabled?: boolean
				triggersEnabled?: boolean
				websitesEnabled?: boolean
				workflowsEnabled?: boolean
			}
			roles?: {
				locationIds?: string[]
				role?: string
				type?: string
			}
		}
		_v1_users__post_400_response: {
			msg?: string
		}
		_v1_users__post_401_response: {
			msg?: string
		}
		_v1_users__post_422_response: {
			email?: {
				message?: string
				rule?: string
			}
			firstName?: {
				message?: string
				rule?: string
			}
			lastName?: {
				message?: string
				rule?: string
			}
			locationIds?: {
				message?: string
				rule?: string
			}
			permissions?: {
				message?: string
				rule?: string
			}
			role?: {
				message?: string
				rule?: string
			}
			type?: {
				message?: string
				rule?: string
			}
		}
		'_v1_users_{userId}_delete_400_response': {
			msg?: string
		}
		'_v1_users_{userId}_delete_401_response': {
			msg?: string
		}
		'_v1_users_{userId}_get_200_response': {
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			permissions?: {
				adwordsReportingEnabled?: boolean
				appointmentsEnabled?: boolean
				assignedDataOnly?: boolean
				attributionsReportingEnabled?: boolean
				bulkRequestsEnabled?: boolean
				campaignsEnabled?: boolean
				campaignsReadOnly?: boolean
				contactsEnabled?: boolean
				conversationsEnabled?: boolean
				dashboardStatsEnabled?: boolean
				facebookAdsReportingEnabled?: boolean
				funnelsEnabled?: boolean
				leadValueEnabled?: boolean
				marketingEnabled?: boolean
				membershipEnabled?: boolean
				onlineListingsEnabled?: boolean
				opportunitiesEnabled?: boolean
				phoneCallEnabled?: boolean
				reviewsEnabled?: boolean
				settingsEnabled?: boolean
				tagsEnabled?: boolean
				triggersEnabled?: boolean
				websitesEnabled?: boolean
				workflowsEnabled?: boolean
			}
			roles?: {
				locationIds?: string[]
				role?: string
				type?: string
			}
		}
		'_v1_users_{userId}_get_400_response': {
			msg?: string
		}
		'_v1_users_{userId}_get_401_response': {
			msg?: string
		}
		'_v1_users_{userId}_put_200_response': {
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			permissions?: {
				adwordsReportingEnabled?: boolean
				appointmentsEnabled?: boolean
				assignedDataOnly?: boolean
				attributionsReportingEnabled?: boolean
				bulkRequestsEnabled?: boolean
				campaignsEnabled?: boolean
				campaignsReadOnly?: boolean
				contactsEnabled?: boolean
				conversationsEnabled?: boolean
				dashboardStatsEnabled?: boolean
				facebookAdsReportingEnabled?: boolean
				funnelsEnabled?: boolean
				leadValueEnabled?: boolean
				marketingEnabled?: boolean
				membershipEnabled?: boolean
				onlineListingsEnabled?: boolean
				opportunitiesEnabled?: boolean
				phoneCallEnabled?: boolean
				reviewsEnabled?: boolean
				settingsEnabled?: boolean
				tagsEnabled?: boolean
				triggersEnabled?: boolean
				websitesEnabled?: boolean
				workflowsEnabled?: boolean
			}
			roles?: {
				locationIds?: string[]
				role?: string
				type?: string
			}
		}
		'_v1_users_{userId}_put_400_response': {
			msg?: string
		}
		'_v1_users_{userId}_put_401_response': {
			msg?: string
		}
		'_v1_users_{userId}_put_422_response': {
			email?: {
				message?: string
				rule?: string
			}
			firstName?: {
				message?: string
				rule?: string
			}
			lastName?: {
				message?: string
				rule?: string
			}
			locationIds?: {
				message?: string
				rule?: string
			}
			permissions?: {
				message?: string
				rule?: string
			}
			role?: {
				message?: string
				rule?: string
			}
			type?: {
				message?: string
				rule?: string
			}
		}
		_v1_users_location_get_200_response: {
			users?: {
				email?: string
				firstName?: string
				id?: string
				lastName?: string
				permissions?: {
					adwordsReportingEnabled?: boolean
					appointmentsEnabled?: boolean
					assignedDataOnly?: boolean
					attributionsReportingEnabled?: boolean
					bulkRequestsEnabled?: boolean
					campaignsEnabled?: boolean
					campaignsReadOnly?: boolean
					contactsEnabled?: boolean
					conversationsEnabled?: boolean
					dashboardStatsEnabled?: boolean
					facebookAdsReportingEnabled?: boolean
					funnelsEnabled?: boolean
					leadValueEnabled?: boolean
					marketingEnabled?: boolean
					membershipEnabled?: boolean
					onlineListingsEnabled?: boolean
					opportunitiesEnabled?: boolean
					phoneCallEnabled?: boolean
					reviewsEnabled?: boolean
					settingsEnabled?: boolean
					tagsEnabled?: boolean
					triggersEnabled?: boolean
					websitesEnabled?: boolean
					workflowsEnabled?: boolean
				}
				roles?: {
					locationIds?: string[]
					role?: string
					type?: string
				}
			}[]
		}
		_v1_users_location_get_400_response: {
			msg?: string
		}
		_v1_users_location_get_401_response: {
			msg?: string
		}
		_v1_users_lookup_get_200_response: {
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			permissions?: {
				adwordsReportingEnabled?: boolean
				appointmentsEnabled?: boolean
				assignedDataOnly?: boolean
				attributionsReportingEnabled?: boolean
				bulkRequestsEnabled?: boolean
				campaignsEnabled?: boolean
				campaignsReadOnly?: boolean
				contactsEnabled?: boolean
				conversationsEnabled?: boolean
				dashboardStatsEnabled?: boolean
				facebookAdsReportingEnabled?: boolean
				funnelsEnabled?: boolean
				leadValueEnabled?: boolean
				marketingEnabled?: boolean
				membershipEnabled?: boolean
				onlineListingsEnabled?: boolean
				opportunitiesEnabled?: boolean
				phoneCallEnabled?: boolean
				reviewsEnabled?: boolean
				settingsEnabled?: boolean
				tagsEnabled?: boolean
				triggersEnabled?: boolean
				websitesEnabled?: boolean
				workflowsEnabled?: boolean
			}
			roles?: {
				locationIds?: string[]
				role?: string
				type?: string
			}
		}
		_v1_users_lookup_get_400_response: {
			msg?: string
		}
		_v1_users_lookup_get_401_response: {
			msg?: string
		}
		_v1_workflows__get_200_response: {
			workflow?: {
				createdAt?: string
				id?: string
				name?: string
				status?: string
				updatedAt?: string
				version?: number
			}[]
		}
		_v1_workflows__get_400_response: {
			msg?: string
		}
		_v1_workflows__get_401_response: {
			msg?: string
		}
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export type operations = Record<string, never>
