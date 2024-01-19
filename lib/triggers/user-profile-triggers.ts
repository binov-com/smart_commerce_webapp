import postgres from 'postgres'

export async function userProfileTriggers(sql: postgres.Sql<{}>) {
  console.log('🟩 Creating user profile triggers...')

  await sql`
        create or replace function public.handle_new_user()
        returns trigger
        language plpgsql
        security definer set search_path = public
        as $$
        begin
          insert into public.user_profile (id, email, first_name, last_name)
          values (new.id, new.email, new.raw_user_meta_data ->> 'firstName', new.raw_user_meta_data ->> 'lastName');
          return new;
        end;
        $$;
        `
  await sql`
        create or replace trigger on_auth_user_created
            after insert on auth.users
            for each row execute procedure public.handle_new_user();
      `

  await sql`
        create or replace function public.handle_user_delete()
        returns trigger as $$
        begin
          delete from auth.users where id = old.id;
          return old;
        end;
        $$ language plpgsql security definer;
      `
  await sql`
        create or replace trigger on_profile_user_deleted
          after delete on public.user_profile
          for each row execute procedure public.handle_user_delete()
      `

  await sql`
        create or replace function public.handle_email_confirmation_user()
        returns trigger as $$
        begin
            if new.email_confirmed_at IS NOT NULL AND old.email_confirmed_at IS null then
                update public.user_profile
                set is_activated = true
                where id = new.id;
            end if;
            return new;
        end;
        $$ language plpgsql security definer;
        `
  await sql`
        create or replace trigger on_email_verified
            after update on auth.users 
            for each row execute procedure public.handle_email_confirmation_user(); 
      `

  console.log('🟩 Success: User profile triggers')
}
