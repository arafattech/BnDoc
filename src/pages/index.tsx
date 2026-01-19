import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {customFields} = siteConfig;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.hero.title">{siteConfig.title}</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.hero.tagline">{siteConfig.tagline}</Translate>
        </p>
        
        <div className={styles.metadata}>
          <p>
            <strong>
              <Translate id="homepage.hero.preparedByLabel">Prepared By:</Translate>
            </strong>{' '}
            <Translate id="homepage.hero.preparedByValue">{customFields.preparedBy as string}</Translate>
          </p>
          <p>
            <strong>
              <Translate id="homepage.hero.dateLabel">Date:</Translate>
            </strong>{' '}
            <Translate id="homepage.hero.dateValue">{customFields.date as string}</Translate>
          </p>
          <p>
            <strong>
              <Translate id="homepage.hero.versionLabel">Version:</Translate>
            </strong>{' '}
            <Translate id="homepage.hero.versionValue">{customFields.version as string}</Translate>
          </p>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
             <Translate id="homepage.hero.button">Get Started ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Mes Document ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
