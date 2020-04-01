import React, { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { isLoading, fetchData } from '../Redux/actions/resource';
import { useLocation } from 'react-router-dom';

import { Typography, Table } from 'antd';

import styles from '../Views/styles/common.module.css';

const { Title } = Typography;

const Resource: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const resource = useSelector((state: RootStateOrAny) => state.resource);

  useEffect(() => {
    const resource = location.pathname.replace('/', '');
    dispatch(isLoading());
    dispatch(fetchData(resource));
  }, [dispatch, location]);

  return (
    <section className={styles.container}>
      <Title style={{ textTransform: 'capitalize' }}>{resource.name}</Title>
      <Table
        loading={resource.loading}
        dataSource={resource.data}
        columns={resource.columns}
        rowKey="id"
      ></Table>
    </section>
  );
};

export default Resource;
