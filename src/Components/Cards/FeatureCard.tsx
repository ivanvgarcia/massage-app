import React, { ReactNode } from 'react';

import { Card } from 'antd';

const { Meta } = Card;

interface FeatureCardProps {
  title: string;
  description: ReactNode;
  icon: ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card hoverable cover={icon}>
      <Meta title={title} description={description} />
    </Card>
  );
};

export default FeatureCard;
