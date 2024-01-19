import postgres from 'postgres'

export async function userProfilePolicies(sql: postgres.Sql<{}>) {
  console.log('🟩 Creating user profile policies...')

  await sql`drop policy if exists "user_profile_are_viewable_by_everyone" on user_profile;`
  await sql`create policy "user_profile_are_viewable_by_everyone" on user_profile for select using ( true );`

  await sql`drop policy if exists "user_can_update_own_profile" on user_profile;`
  await sql`create policy "user_can_update_own_profile" on user_profile for update using ( auth.uid() = id );`

  await sql`drop policy if exists "user_can_delete_own_profile" on user_profile;`
  await sql`create policy "user_can_delete_own_profile" on user_profile for delete using ( auth.uid() = id );`

  console.log('🟩 Success: User profile policies')
}
