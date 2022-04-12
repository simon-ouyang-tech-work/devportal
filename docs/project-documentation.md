# Project Documentation

## Introduction
The project documentation should be placed under [docs/](./docs/index.md) in the repository root directory. It consists of a list of markdown files that are part of the repository and are changed and committed together with the rest of the source code. All updates to the project documentation will automatically be reflected in the development dashboard once merged into `main`. The documentation is created using [MkDocs](https://www.mkdocs.org/user-guide/) and the [TechDocs](https://backstage.io/docs/features/techdocs/techdocs-overview) is a Backstage plugin.

## Deep Dive
We need two types of information for project documentation, doc navigation specified in `mkdocs.yml` and markdown files under `docs`.

- `mkdocs.yml` - configuration file for mkdocs (necessary for documentation registration)
- `docs/` - location of all the markdowns for MkDocs to process and display

### Doc Navigation
Documentation navigation could be done via `mkdocs.yml` file.

#### File Template
```yml
site_name: <Project Name>
site_description: <Project Description>

nav:
  - <Section Name A>: <File Name A under docs folder>
  - <Section Name B>: 
      - <Subsection Name B1>: <File Name B1 under docs folder>
      - <Subsection Name B2>: <File Name B2 under docs folder>

plugins:
  - techdocs-core  
```
#### Sample yaml file
```yml
# mkdocs.yml
site_name: gridstack-cli
site_description: GridStack CLI

nav:
  - Introduction: index.md
  - Commands:
      - help: ./commands/help/index.md
      - create-project:
          - Usage: ./commands/create-project/index.md
          - Project Templates: ./commands/create-project/templates.md
      - invoke-api: ./commands/invoke-api/index.md
      - describe-api: ./commands/describe-api/index.md
  - Roadmap: roadmap.md

plugins:
  - techdocs-core
```

### Document Folder structure under docs
All markdown files needs to be under `docs` folder, here is the folder structure looks like. Please be noted that index.md under a folder is highly recommended for description/usage. You can also have a `media` folder here to store media that will be referenced in the `.md` files.
```
|-- docs
     |   index.md
     |   file001.md
     |   ...
     |-- media
     |   |  image1.jpeg
     |   |  image2.png
     |
     |-- folder1
     |    |  index.md
     |    |  file011.md
     |    |  file012.md
     |    |  file013.md
     |    |  ...
     |    |
     |    |-- subfolder1
     |        |   index.md
     |        |   file111.md
     |        |   file112.md
     |        |   ...
     |
     |-- folder2
         |  index.md
         |  file021.md
         |  file022.md
         | ...
```
