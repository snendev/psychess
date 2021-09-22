import { DB } from 'sqlite';

import type {UserProfile} from '~/common/user/user.ts'

// shapes for DB tables
type UserProfileRow = [string, string]

export function initDB(): void {
  // Open a database
  const db = new DB("test.db");
  db.query("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, display_name TEXT)");
  db.close()
}

export function createUserProfile(id: string, name: string): UserProfile | null {
  const db = new DB("test.db");
  const conflict = db.query(`SELECT * FROM users WHERE id = ${id}`) as UserProfileRow[]
  if (conflict.length !== 0) {
    db.close()
    return null
  }
  db.query(`INSERT INTO users (id,display_name) VALUES (${id}, ${name})`)
  return {displayName: name}
}

export function getUserProfile(id: string): UserProfile | null {
  const db = new DB("test.db");
  const names = db.query(`SELECT display_name FROM users WHERE id = ${id}`) as UserProfileRow[]
  if (names.length === 0) {
    return null
  }
  const [_id, name] = names[0]
  db.close()
  return {displayName: name}
}
