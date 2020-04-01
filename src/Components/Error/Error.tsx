import React from 'react';
import { Typography, Button } from 'antd';
import styles from '../../Views/styles/common.module.css';

const { Title } = Typography;

interface ErrorProps {
  resetApp: () => void;
}

const Error: React.FC<ErrorProps> = ({ resetApp }) => {
  return (
    <div className={styles.container}>
      <Title>Sorry, but there was an error</Title>
      <Button onClick={resetApp}>Go Back to Home Page</Button>
    </div>
  );
};

export default Error;
