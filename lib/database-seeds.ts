import postgres from 'postgres'
import 'dotenv/config'

import { userProfilePolicies } from './policies/user-profile-policies'
import { userProfileTriggers } from './triggers/user-profile-triggers'

const dbUrl = process.env.DATABASE_URL

if (!dbUrl) {
  throw new Error('🟥 Error: connection string not found')
}

const sql = postgres(dbUrl)

async function main() {
  await userProfilePolicies(sql)
  await userProfileTriggers(sql)

  process.exit()
}

main()
