import { Database } from 'bun:sqlite'
import type { AccessTokenResponse } from '../client/oauth.types'

type DBColumns = {
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
		[K in keyof DBColumns as $Keys<K>]: DBColumns[K]
	},
	'$id'
>

const getAccessToken = (sqlite: Database) => {
	const token = sqlite.query<DBColumns, []>('SELECT * FROM tokens_table').get()
	return token
}

const saveTokenResponse = (sqlite: Database, dbRow: DBColumns) => {
	sqlite
		.prepare<DBColumns, InsertDBRow>(
			`INSERT INTO tokens_table (userId, locationId, access_token, refresh_token, expiresAt)
            VALUES ($userId, $locationId, $access_token, $refresh_token, $expiresAt)
            ON CONFLICT(userId) DO UPDATE SET
            locationId = excluded.locationId,
            access_token = excluded.access_token,
            refresh_token = excluded.refresh_token,
            expiresAt = excluded.expiresAt;
            `,
		)
		.run({
			$userId: dbRow.userId,
			$locationId: dbRow.locationId,
			$access_token: dbRow.access_token,
			$expiresAt: dbRow.expiresAt,
			$refresh_token: dbRow.refresh_token,
		})
}

const getTokenByUserId = (sqlite: Database, userId: string) =>
	sqlite
		.query<DBColumns, Pick<InsertDBRow, '$userId'>>(
			'SELECT * FROM tokens_table WHERE userId = $userId',
		)
		.get({ $userId: userId })

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
		saveTokenResponse: (dbRow: DBColumns) => saveTokenResponse(db, dbRow),
		getTokenByUserId: (userId: string) => getTokenByUserId(db, userId),
	}
}
