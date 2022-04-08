
/*
 * Copyright 2021 NationalGrid Author
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
} from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { REGISTER_COMPONENT_URL } from '../../constants';


const useStyles = makeStyles({
  horizontalInfoCard: {
    height: '100%',
  },
});


/**
 * Default homepage for the developer portal
 *
 * @see https://www.npmjs.com/package/@backstage/plugin-home
 */
export const HomePage = () => {
  const classes = useStyles();
  return (
    <Page themeId="tool">
      <Header title="BCGDV Developer Dashboard" />
      <Content>
        <ContentHeader title="Welcome" />
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <InfoCard >
              <Typography variant="subtitle1" gutterBottom>
                Powered by a centralized software catalog, the{' '}
                <em>BCGDV Development Dashboard</em> restores order to your
                infrastructure and enables your product teams to ship
                high-quality code quickly — without compromising autonomy.
              </Typography>

              <Typography variant="subtitle1"

              >

                The <em>BCGDV Development Dashboard</em> unifies all your
                infrastructure tooling, services, and documentation to create a
                streamlined development environment from end to end.
              </Typography>
            </InfoCard>
          </Grid>

          <Grid item xs={12}>
            <HomePageSearchBar />
          </Grid>

          <Grid item md={4}>
            <InfoCard
              title="Explore API's"
              deepLink={{ title: 'Learn more', link: '/api-docs' }}
              className={classes.horizontalInfoCard}
            >
              <Typography variant="body1" gutterBottom>

                Discover and display API entities defined in OpenAPIs, ASyncAPI or GraphQL.
                Explore documentation and methods for these APIs.

              </Typography>
            </InfoCard>
          </Grid>


          {/* Anurag Lasne, 01/29 : New InfoCard for Development Guidelines  grid sizing original value md={4} ---- xs={12} sm={6} md={3}*/}

          <Grid item md={4}>
            <InfoCard
              title="Explore Techdocs"
              deepLink={{ title: 'Learn more', link: '/docs?filters%5Buser%5D=all' }}
              className={classes.horizontalInfoCard}
            >
              <Typography variant="body1" gutterBottom>
                Discover the product and service documentation written by developers for developers.
              </Typography>
            </InfoCard>
          </Grid>

          <Grid item md={4}>
            <InfoCard
              title="Explore Catalog"
              deepLink={{ title: 'Learn more', link: 'catalog?filters%5Bkind%5D=component&filters%5Buser%5D=all' }}
              className={classes.horizontalInfoCard}
            >
              <Typography variant="body1" gutterBottom>
                The Software Catalog is a centralized system that keeps track of ownership and metadata for all the software in our ecosystem
                (services, components, APIs, Resources, data pipelines, etc).
              </Typography>
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};