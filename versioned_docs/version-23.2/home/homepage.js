import React from 'react';
import styles from './homepage.module.css';
import Feature from '../../../src/components/Feature';
import Grid from '../../../src/components/Grid';
import FooterMenu from '../../../src/components/FooterMenu';

const FeatureList = [
  {
    title: 'Redpanda Quickstart',
    image: require('../../../static/img/quickstart.png').default,
    description: (
      <>
        Quickly get started and try out Redpanda.
      </>
    ),
    url: '/docs/beta/get-started/quick-start',
    learnText: true,
  },
  {
    title: 'Use rpk',
    image: require('../../../static/img/RPK-commands.png').default,
    description: (
      <>
        Browse commands or use rpk to interact with the Redpanda platform.
      </>
    ),
    url: '/docs/beta/reference/rpk',
    learnText: true,
  },
  {
    title: 'Deploy Redpanda',
    image: require('../../../static/img/rocket.png').default,
    description: (
      <>
        Configure Redpanda and deploy for production.
      </>
    ),
    url: '/docs/beta/deploy',
    learnText: true,
  },
  {
    title: 'Redpanda Console',
    image: require('../../../static/img/console-icon.png').default,
    description: (
      <>
        Use the Redpanda Console dashboard to administer clusters and get visibility into your data streams.
      </>
    ),
    url: '/docs/beta/manage/console/',
    learnText: true,
  },
  {
    title: 'Tiered Storage',
    image: require('../../../static/img/cloud-first.png').default,
    description: (
      <>
        Save storage costs by offloading log segments to object storage.
      </>
    ),
    url: '/docs/beta/manage/tiered-storage',
    learnText: true,
  },
  {
    title: 'Redpanda on Kubernetes',
    image: require('../../../static/img/redpanda-kubernetes.png').default,
    description: (
      <>
        Get started with Redpanda on the Kubernetes platform.
      </>
    ),
    url: '/docs/beta/deploy/deployment-option/self-hosted/kubernetes/',
    learnText: true,
  },
];

const FooterMenuList = [
  {
    title: 'Get Started',
    icon: {
      url: require('../../../static/img/get-started-icon.png').default,
      size: 'higher',
    },
    items: [
      { text: 'Introduction to Redpanda', url: "/docs/beta/get-started/intro-to-events/" },
      { text: 'How Redpanda Works', url: "/docs/beta/get-started/architecture/" },
      { text: 'Redpanda Licensing', url: "/docs/beta/get-started/licenses/" },
      { text: 'Redpanda Quickstart', url: "/docs/beta/get-started/quick-start/" },
      { text: 'Introduction to rpk', url: "/docs/beta/get-started/rpk-install/" },
    ],
  },
  {
    title: 'Develop',
    icon: {
      url: require('../../../static/img/develop-icon.png').default,
      size: 'wider',
    },
    items: [
      { text: 'Supported Kafka Clients', url: "/docs/beta/develop/kafka-clients/" },
      { text: 'Use Redpanda with Kafka Client Libraries', url: "/docs/beta/develop/code-examples/" },
      { text: 'Use Redpanda with NodeJS', url: "/docs/beta/develop/guide-nodejs/" },
      { text: 'Use Redpanda with HTTP Proxy API', url: "/docs/beta/develop/http-proxy/" },
      { text: 'Produce Data', url: "/docs/beta/develop/produce-data/" },
      { text: 'Consume Data', url: "/docs/beta/develop/consume-data/" },
      { text: 'Transactions', url: "/docs/beta/develop/transactions" },
    ],
  },
  {
    title: 'Deploy',
    icon: {
      url: require('../../../static/img/deploy-icon.png').default,
      size: 'wider',
    },
    items: [
      { text: 'Cloud Deployment', url: "/docs/beta/deploy/deployment-option/cloud/" },
      { text: 'Self-Hosted Deployment', url: "/docs/beta/deploy/deployment-option/self-hosted/" },
      { text: 'Sizing Guidelines', url: "/docs/beta/deploy/deployment-option/self-hosted/manual/sizing/" },
      { text: 'Sizing Use Cases', url: "/docs/beta/deploy/deployment-option/self-hosted/manual/sizing-use-cases/" },
      { text: 'High Availability', url: "/docs/beta/deploy/deployment-option/self-hosted/manual/high-availability/" },
      
    ],
  },
  {
    title: 'Manage',
    icon: {
      url: require('../../../static/img/manage-icon.png').default,
      size: 'default',
    },
    items: [
      { text: 'Redpanda on Kubernetes', url: "/docs/beta/manage/kubernetes/" },
      { text: 'Redpanda Console', url: "/docs/beta/manage/console/" },
      { text: 'Security', url: "/docs/beta/manage/security/" },
      { text: 'Schema Registry', url: "/docs/beta/manage/schema-registry/" },
      { text: 'Monitor Redpanda', url: "/docs/beta/manage/monitoring/" },
      { text: 'Continuous Data Balancing', url: "/docs/beta/manage/cluster-maintenance/continuous-data-balancing/" },
    ],
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Grid gap="2rem" minWidth="300px">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </Grid>
      <Grid gap="3.85rem" minWidth="175px" title='Highlights'>
        {FooterMenuList.map((props, idx) => (
          <FooterMenu key={idx} {...props} />
        ))}
      </Grid>
    </section >
  );
}