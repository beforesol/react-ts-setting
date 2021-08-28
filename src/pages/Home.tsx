import React from 'react';
import classnames from 'classnames';
import styles from './Home.scss';
import Demo from 'rollup-ts-setting';

interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.home)}>home</div>
      <Demo />
    </>
  );
};

export default Home;
