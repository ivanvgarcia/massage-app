import React, { useState, useEffect } from 'react';

import appInfo from '../Config/appInfo.js';
import Slide from '../Components/Carousel/Slide';
import FeatureCard from '../Components/Cards/FeatureCard';

import { ReactComponent as ReactLogo } from '../Assets/svgs/React-icon.svg';
import styles from './styles/common.module.css';

import { Typography, Carousel, Descriptions, Row, Col } from 'antd';
import { AntDesignOutlined, GithubFilled } from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;

const Home: React.FC = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/news');
      setData(result.data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <section>
      <Carousel autoplay>
        <Slide
          title="Hivelocity Deploy"
          description="Starter React template for front end applications deployed by Hivelocity developers"
        />
        <Slide
          title="About"
          description="Created for quick and efficient front end development using React.js and other modern web technologies and tools."
        />
      </Carousel>

      {appInfo.name && (
        <React.Fragment>
          <div className={styles.heading}>
            <Title>Application Information</Title>
          </div>

          <div className={styles.container}>
            <Descriptions title="Information" layout="vertical" bordered>
              <Descriptions.Item label="App Name">
                <a href={`//${appInfo.domain}`} target="_blank" rel="noopener noreferrer">
                  {appInfo.name}
                </a>
              </Descriptions.Item>
              <Descriptions.Item label="Deployed By">{appInfo.deployedBy}</Descriptions.Item>
              <Descriptions.Item label="Github">
                <a href={appInfo.githubRepository} target="_blank" rel="noopener noreferrer">
                  <GithubFilled />
                </a>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </React.Fragment>
      )}

      <div className={styles.heading}>
        <Title>Features</Title>
      </div>
      <div className={styles.container}>
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col xs={24} md={12} lg={8}>
            <FeatureCard
              title="Made with React.js"
              description={
                <React.Fragment>
                  <p>
                    A declarative JavaScript library to create interactive UIs with greater ease. To
                    learn more, check out the documentation:
                  </p>
                  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    React Documentation
                  </a>
                </React.Fragment>
              }
              icon={<ReactLogo />}
            />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FeatureCard
              title="Styled with Ant Design"
              description={
                <React.Fragment>
                  <p>
                    A design system for enterprise-level products. Create an efficient and enjoyable
                    work experience. To learn more, check out the documentation:
                  </p>
                  <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">
                    Ant Design Documentation{' '}
                  </a>
                </React.Fragment>
              }
              icon={<AntDesignOutlined />}
            />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FeatureCard
              title="Automated Deployment"
              description={
                <React.Fragment>
                  <p>
                    Configured to deploy automatically using Github actions to Amazon Web Services.
                    To learn more, check out the documentation:
                  </p>
                  <a
                    href="https://github.com/features/actions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Actions
                  </a>
                </React.Fragment>
              }
              icon={<GithubFilled />}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
