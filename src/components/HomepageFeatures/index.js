import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built with users in mind.',
    description: (
      <>
        You are able to change DankRPG's settings and behaviour to suit your needs.
        Either per owned server, or your own custom settings.
      </>
    ),
  },
  {
    title: 'Privacy focused.',
    description: (
      <>
      DankRPG is 100% open-source, and free to use.
      You can view the source code on <a href="https://github.com/Snoozeds/DankRPG">GitHub</a><svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>.
      </>
    ),
  },
  {
    title: 'Lots of variety.',
    description: (
      <>
      DankRPG features multiple economy and RPG systems, with different outcomes for commands, including random events.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h1>Features:</h1>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
