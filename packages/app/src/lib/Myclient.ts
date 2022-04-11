import {
    RadarEntry,
    RadarQuadrant,
    RadarRing,
    TechRadarApi,
    TechRadarLoaderResponse,
  } from '@backstage/plugin-tech-radar';
  
  const rings = new Array<RadarRing>();
  rings.push({ id: 'use', name: 'USE', color: '#93c47d' });
  rings.push({ id: 'trial', name: 'TRIAL', color: '#93d2c2' });
  rings.push({ id: 'assess', name: 'ASSESS', color: '#fbdb84' });
  rings.push({ id: 'hold', name: 'HOLD', color: '#efafa9' });
  
  const quadrants = new Array<RadarQuadrant>();
  quadrants.push({ id: 'infrastructure', name: 'Infrastructure' });
  quadrants.push({ id: 'frameworks', name: 'Frameworks' });
  quadrants.push({ id: 'languages', name: 'Languages' });
  quadrants.push({ id: 'process', name: 'Process' });
  
  const entries = new Array<RadarEntry>();
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2020-08-06'),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
    ],
    url: '#',
    key: 'javascript',
    id: 'javascript',
    title: 'JavaScript',
    quadrant: 'languages',
    description:
      'Excepteur **sint** occaecat *cupidatat* non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n```ts\nconst x = "3";\n```\n',
  });
  entries.push({
    timeline: [
      {
        moved: -1,
        ringId: 'use',
        date: new Date('2020-08-06'),
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
    ],
    url: '#',
    key: 'typescript',
    id: 'typescript',
    title: 'TypeScript',
    quadrant: 'languages',
    description:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
  });
  entries.push({
    timeline: [
      {
        moved: 1,
        ringId: 'use',
        date: new Date('2020-08-06'),
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      },
    ],
    url: 'https://webpack.js.org/',
    key: 'webpack',
    id: 'webpack',
    title: 'Webpack',
    quadrant: 'frameworks',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2020-08-06'),
      },
    ],
    url: 'https://reactjs.org/',
    key: 'react',
    id: 'react',
    title: 'React',
    quadrant: 'frameworks',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2020-08-06'),
      },
    ],
    url: '#',
    key: 'code-reviews',
    id: 'code-reviews',
    title: 'Code Reviews',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2020-08-06'),
      },
    ],
    url: 'https://www.agilealliance.org/agile101/',
    key: 'agile-development',
    id: 'agile-development',
    title: 'Agile Development',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'assess',
        date: new Date('2020-08-06'),
      },
    ],
    url: 'https://docs.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code',
    key: 'infrastructure-as-code',
    id: 'infrastructure-as-code',
    title: 'Infrastructure As Code',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2020-08-06'),
      },
    ],
    url: '#',
    key: 'docs-like-code',
    id: 'docs-like-code',
    title: 'Docs-like-code',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        ringId: 'hold',
        date: new Date('2020-08-06'),
      },
    ],
    url: '#',
    key: 'force-push',
    id: 'force-push',
    title: 'Force push to main',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        ringId: 'use',
        date: new Date('2020-08-06'),
        description: 'long description',
      },
    ],
    url: 'https://github.com',
    key: 'github-actions',
    id: 'github-actions',
    title: 'GitHub Actions',
    quadrant: 'infrastructure',
  });
  
  export const mock: TechRadarLoaderResponse = {
    entries,
    quadrants,
    rings,
  };
  
  export class TechRadarApiClient implements TechRadarApi {
    async load() {
      return mock;
    }
  }