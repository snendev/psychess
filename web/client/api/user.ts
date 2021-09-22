import type {UserProfile} from '~/common/user/user.ts'

export async function createUserProfile(id: string, name: string): Promise<UserProfile | null> {
  const response = await fetch(`api/users`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, displayName: name }),
  })
  return response.json()
}

export async function getUserProfile(id: string): Promise<UserProfile | null> {
  const response = await fetch(`api/users/${id}`)
  return response.json()
}
