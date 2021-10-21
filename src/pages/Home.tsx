import React from 'react';
import classnames from 'classnames';
import styles from './Home.scss';

interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.home)}>home</div>
    </>
  );
};

export default Home;
