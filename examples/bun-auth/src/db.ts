import type { Database } from 'bun:sqlite'
import type { AccessTokenResponse } from '@gnosticdev/highlevel-sdk/oauth-config'

type DBTokenData = {
	id?: number
	expiresAt: number
} & Required<
	Pick<
		AccessTokenResponse,
		'access_token' | 'refresh_token' | 'locationId' | 'userId'
	>
>

type $Keys<T> = `$${T extends string ? T : never}`

type InsertDBRow = Omit<
	{
		[K in keyof DBTokenData as $Keys<K>]: DBTokenData[K]
	},
	'$id'
>

/**
 * Get the access token from the database
 * @param db - The database instance
 * @returns - The access token
 */
const getAccessToken = (db: Database): DBTokenData | null => {
	const token = db.query<DBTokenData, []>('SELECT * FROM tokens_table').get()
	return token
}

/**
 * Save a token response to the database
 * @param db - The database instance
 * @param dbRow - The token response to save
 */
const saveTokenResponse = (db: Database, dbRow: DBTokenData) => {
	db.prepare<DBTokenData, InsertDBRow>(
		`INSERT INTO tokens_table (userId, locationId, access_token, refresh_token, expiresAt)
            VALUES ($userId, $locationId, $access_token, $refresh_token, $expiresAt)
            ON CONFLICT(userId) DO UPDATE SET
            locationId = excluded.locationId,
            access_token = excluded.access_token,
            refresh_token = excluded.refresh_token,
            expiresAt = excluded.expiresAt;
            `,
	).run({
		$userId: dbRow.userId,
		$locationId: dbRow.locationId,
		$access_token: dbRow.access_token,
		$expiresAt: dbRow.expiresAt,
		$refresh_token: dbRow.refresh_token,
	})
}

const getTokenByUserId = (sqlite: Database, userId: string) =>
	sqlite
		.query<DBTokenData, Pick<InsertDBRow, '$userId'>>(
			'SELECT * FROM tokens_table WHERE userId = $userId',
		)
		.get({ $userId: userId })

/**
 * Create a database for storing tokens
 * @param db - The database instance
 * @returns - An object with methods for interacting with the database
 */
export const createTokensDB = (db: Database) => {
	db.run(`CREATE TABLE IF NOT EXISTS tokens_table (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId TEXT UNIQUE,
            locationId TEXT,
            access_token TEXT UNIQUE,
            refresh_token TEXT UNIQUE,
            expiresAt INTEGER
        )
        `)

	return {
		getAccessToken: () => getAccessToken(db),
		saveTokenResponse: (dbRow: DBTokenData) => saveTokenResponse(db, dbRow),
		getTokenByUserId: (userId: string) => getTokenByUserId(db, userId),
	}
}
