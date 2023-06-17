import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Highly Customisable.',
    description: (
      <>
        DankRPG is highly customisable, allowing you to change your own
        user settings.
      </>
    ),
  },
  {
    title: 'Privacy focused.',
    description: (
      <>
        DankRPG prioritises privacy. We are 100% open source with our code, 
        and you can view our code on <a href="https://github.com/Snoozeds/DankRPG">Github</a>.
      </>
    ),
  },
  {
    title: 'Extensive RPG System.',
    description: (
      <>
        DankRPG has an extensive RPG system, allowing you to fight monsters, go on adventures, buy and sell items, and more.
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
