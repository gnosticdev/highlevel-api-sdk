import { OauthClient } from '../oauth'
import type { HighLevelConfig } from '../types/highlevel-client'
import type { AccessType } from '../types/scopes-builder'
import { LocationsClient } from './locations'

/**
 * You can use this class to build your own HighLevel API client. You can use the pre-configured client with `createHighLevelClient`.
 */
export class HighLevelClient<T extends AccessType> {
	/** the locations client for accessing location endpoints */
	locations: () => LocationsClient<T>
	oauth: () => OauthClient<T>
	readonly config: HighLevelConfig<T>
	/**
	 * creates a new HighLevel API client
	 * @constructor
	 */
	constructor(config: HighLevelConfig<T>) {
		this.locations = () => new LocationsClient(config)
		this.oauth = () => new OauthClient(config)
		this.config = config
	}
}

export class EndpointClient<T extends AccessType> {
	readonly config: HighLevelConfig<T>
	readonly client: HighLevelClient<T>
	constructor(config: HighLevelConfig<T>) {
		this.config = config
		this.client = new HighLevelClient(config)
	}
}

/**
 * A client for accessing sub-account endpoints
 */
export class SubAccountClient extends HighLevelClient<'Sub-Account'> {}
