# DevPortal catalog description

## Introduction
To ensure that the new projects be automatically discovered and added to the dashboard, add a catalog file to the root of your repository. The catalog file `catalog-info.yaml` is a YAML file that contains information about the project and the assoicated dependencies.
The most common used entities for most developments are domain, system, component and api. You will need to keep this updated as you add new systems, components and APIs.

## Catalog Entity Hierarchy
```
Domain
 |-- System
      |-- Component
           |-- Api (Optional)
```
## Catalog Entity Structure

### Domain
A Domain groups a collection of systems that share terminology, domain models, business purpose, or documentation. More info could be found [here](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-domain).
#### File Template
```yaml
apiVersion: backstage.io/v1alpha1
kind: Domain
metadata:
  name: <domain name>
  title: <domain title>
spec:
  owner: <domain owner>
```
#### Sample yaml
```yaml
apiVersion: backstage.io/v1alpha1
kind: Domain
metadata:
  name: gridstack
  title: GridStack
spec:
  owner: gridinit
```

### System
A system is a collection of resources and components. The system may expose or consume one or several APIs. More info could be found [here](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-system).
#### File Template
```yaml
apiVersion: backstage.io/v1alpha1
kind: System
metadata:
  name: <system name>
  title: <system title>
spec:
  owner: <system owner>
  domain: <Associated domain name>
```
#### Sample yaml
```yaml
apiVersion: backstage.io/v1alpha1
kind: System
metadata:
  name: bcgdv-service
  title: BCGDV Services
spec:
  owner: gridinit
  domain: gridstack
```
### Component
A Component describes a software component. It is typically intimately linked to the source code that constitutes the component, and should be what a developer may regard a "unit of software", usually with a distinct deployable or linkable artifact. More info could be found [here](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component).
#### Available Annotations
1. backstage.io/techdocs-ref: `dir:.`
2. jenkins.io/job-full-name: `<folder-name>/<job-name>`
3.  sonarqube.org/project-key: `<sonarqube project name>`
4. jira/project-key: `<example-jira-project-key>`
5. dev.azure.com/project-repo: `<project-name>/<repo-name>`
#### File Template
```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: <component name>
  title: <component title>
  annotations:
    backstage.io/techdocs-ref: dir:.
    <dependency key>: <dependency value>
spec:
  type: <service|website|library>
  lifecycle: <experimental|production|deprecated>
  owner: <component owener name>
  system: <associated system name>
  providesApis:
    - <api name>
```
#### Sample yaml
```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: bcgdv-api-service
  title: Bcgdv API Service
  annotations:
    backstage.io/techdocs-ref: dir:.
    jira/project-key: GSTTEAM
    sonarqube.org/project-key: omw:vulcan-omw-api
    jenkins.io/job-full-name: oip-backend build
spec:
  type: service
  lifecycle: experimental
  owner: bcgdv
  system: bcgdv
  providesApis:
    - bcgdv-api
```
### Api (Optional but recommeded)
An API describes an interface that can be exposed by a component. The API can be defined in different formats, like OpenAPI, AsyncAPI, GraphQL, gRPC, or other formats. More info could be found [here](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api).
#### File Template
```yaml
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: <api name>
  title: <api title>
spec:
  type: <openapi|asyncapi|graphql|grpc>
  lifecycle: <experimental|production|deprecated>
  owner: <api owner name>
  system: <system owner name>
  definition:
    $text: <file path>
```
#### Sample yaml
```yaml
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: bcgdv-api
  title: Bcgdv API
spec:
  type: openapi
  lifecycle: experimental
  owner: bcgdv
  system: bcgdv
  definition:
    $text: ./openapi.json
```

#### Sample yaml file all in one
```yaml
# catalog-info.yaml
apiVersion: backstage.io/v1alpha1
kind: Domain
metadata:
  name: gridstack
  title: GridStack
spec:
  owner: gridinit
---
apiVersion: backstage.io/v1alpha1
kind: System
metadata:
  name: gridstack
  title: GridStack Services
spec:
  owner: gridinit
  domain: gridstack
---
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: gridinit-api-service
  title: GridInit API Service
  annotations:
    backstage.io/techdocs-ref: dir:.
    jira/project-key: GSTTEAM
    sonarqube.org/project-key: omw:vulcan-omw-api
    jenkins.io/job-full-name: oip-backend build
spec:
  type: service
  lifecycle: experimental
  owner: gridinit
  system: gridstack
  providesApis:
    - gridinit-api
---
apiVersion: backstage.io/v1alpha1
kind: API
metadata:
  name: gridinit-api
  title: GridInit API
spec:
  type: openapi
  lifecycle: experimental
  owner: gridinit
  system: gridstack
  definition:
    $text: ./openapi.json
```

### Catalog Entity Descriptor Format Reference
If you want to know more information, please refer to the [official documentation](https://backstage.io/docs/features/software-catalog/descriptor-format)