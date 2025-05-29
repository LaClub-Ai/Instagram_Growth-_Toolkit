import React from 'react';
import { StatsCard } from '../../components/StatsCard';
import { Stats } from '../../types/Stats';

const mockStats: Stats = {
  followers: 1200,
  following: 300,
  posts: 45,
  engagementRate: 4.2,
  growth: 2.1,
};

const Dashboard: React.FC = () => (
  <div>
    <h2>Dashboard</h2>
    <StatsCard stats={mockStats} />
    <p>Welcome to your Instagram Growth Dashboard!</p>
  </div>
);

export default Dashboard;