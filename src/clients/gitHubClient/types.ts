export type GitHubEventsResponse = GitHubEventsResponseItem[]
export interface GitHubEventsResponseItem {
  id: string
  type: string
  actor: {
    id: number
    login: string
    display_login: string
    url: string
    avatar_url: string
  }
  repo: {
    id: number
    name: string
    url: string
  }
  public: true
  created_at: string
}
