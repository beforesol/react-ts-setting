import React, { useEffect } from 'react';
import classnames from 'classnames';
import styles from './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '@src/reducers/HomeReducer';
import { RootState } from '@src/config/store';

interface IOwnProps {
};

const Home: React.FC<IOwnProps> = ({}) => {
  const { data } = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeData({ id: 1 }));
  }, []);

  console.log('fetchHomeData:', data);

  return (
    <>
      <div className={classnames(styles.home)}>home</div>
    </>
  );
};

export default Home;
