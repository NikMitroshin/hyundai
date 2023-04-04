import { GitHubEventsResponseItem } from 'clients/gitHubClient/types'
import { GitHubEventItem } from 'features/events/types'

export const mapGitHubEventsData = (data: GitHubEventsResponseItem[]): GitHubEventItem[] =>
  data.map((item) => ({
    id: item.id,
    type: item.type,
    repoUrl: item.repo.url,
    authorId: item.actor.id,
    authorLogin: item.actor.display_login,
    authorAvatarUrl: item.actor.avatar_url,
    authorUrl: item.actor.url,
    created_at: item.created_at,
  }))
