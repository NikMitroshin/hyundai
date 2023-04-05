import axios from 'axios'

import { mapGitHubEventsData } from 'clients/gitHubClient/mappers'
import { GitHubEventsResponse } from 'clients/gitHubClient/types'
import { GitHubEventItem } from 'features/eventsGH/types'
import { EnvConfigService } from 'services/EnvConfigService'

const apiGitHub = axios.create({
  baseURL: EnvConfigService.gitHubConfig.apiUrl,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

export const getEventsList = async (): Promise<GitHubEventItem[]> => {
  const { data } = await apiGitHub.get<GitHubEventsResponse>(`/networks/facebook/react-native/events`, {
    params: {
      per_page: 25,
    },
  })

  return mapGitHubEventsData(data)
}
