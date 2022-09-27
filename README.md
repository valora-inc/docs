# docs

## Installation

```
yarn
```

## Development

```
yarn start
```

This command starts a local development server and opens up a browser
window. Most changes are reflected live without having to restart the
server.

## Adding new content

Docs aggregates content from multiple different projects and
repositories using Git submodules. Docs stores submodules in
[submodules/](submodules/] and there's a `postinstall` script to
initialize all submodules.

You can publish content from these other projects or author new
content by adding .md, .mdx, or .tsx files to [docs/](docs/).

See the [Docusaurus Guides](https://docusaurus.io/docs/category/guides)
for more information.

## Deployment

Deployment happens automatically with each commit to `main` (_e.g._,
PR merge).

## Environments

- <https://valora-docs-staging.web.app>

## Related

This website is built using [Docusaurus 2](https://docusaurus.io/).
