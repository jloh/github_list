# GitHub Repo List

GitHub Repo List is a small theme to list all your GitHub repos and forks taken live from the API.

## Quick Start

1. First make sure you have [Hugo installed](https://gohugo.io/getting-started/installing/)
1. Start a new site

    ```
    hugo new site mySite
    ```

1. Install and use this theme

    ```
    cd mySite
    git clone https://github.com/jloh/github_list --depth=1 themes/github_list
    ```

1. Use this theme and set your GitHub username in `config.toml`

    ```toml
    theme = "github_list"
    [params]
      description  = "Example website description"
      github_repos = [
        "gohugoio"
      ]
    ```

1. Done!


## Configuration

Check out the [exampleSite](./exampleSite) folder for a working example.

## Licence

MIT Licence.
