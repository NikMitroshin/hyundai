import { GitHubEventsResponseItem } from 'clients/gitHubClient/types'
import { GitHubEventItem } from 'features/eventsGH/types'

export const mapGitHubEventsData = (data: GitHubEventsResponseItem[]): GitHubEventItem[] =>
  data.map((item) => ({
    id: item.id,
    type: item.type,
    repoUrl: item.repo.url,
    authorId: item.actor.id,
    authorLogin: item.actor.display_login,
    authorAvatarUrl: item.actor.avatar_url,
    authorUrl: `https://github.com/${item.actor.login}`,
    created_at: item.created_at,
  }))
