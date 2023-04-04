import config from 'react-native-config'

interface GitHubConfig {
  apiUrl: string
}

export class EnvConfigService {
  public static get gitHubConfig(): GitHubConfig {
    return {
      apiUrl: String(config.GITHUB_API_URL).trim(),
    }
  }
}
