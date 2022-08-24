import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built with users in mind.',
    Svg: '',
    description: (
      <>
        You are able to change DankRPG's settings and behaviour to suit your needs.
        Either per owned server, or your own custom settings.
      </>
    ),
  },
  {
    title: 'Privacy focused.',
    Svg: '',
    description: (
      <>
        DankRPG is 100% open-source, and free to use.
        You can view the source code on <a href="https://github.com/Snoozeds/DankRPG">GitHub</a>.
      </>
    ),
  },
  {
    title: 'Lots of variety.',
    Svg: '',
    description: (
      <>
        DankRPG features multiple economy and RPG systems, with different outcomes for commands, including random events.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
