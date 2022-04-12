import {
    TechRadarApi,
  } from '@backstage/plugin-tech-radar';

  export class TechRadarApiClient implements TechRadarApi {
    async load() {
        const url = 'https://raw.githubusercontent.com/simon-ouyang-tech-work/devportal/main/tech-radar.json'
        return await fetch(url).then(res => res.json())
    }
  }