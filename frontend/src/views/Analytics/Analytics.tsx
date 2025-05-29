import React from 'react';
import { StatsCard } from '../../components/StatsCard';
import { Stats } from '../../types/Stats';

const analyticsStats: Stats = {
  followers: 1200,
  following: 300,
  posts: 45,
  engagementRate: 4.2,
  growth: 2.1,
};

const Analytics: React.FC = () => (
  <div>
    <h2>Analytics</h2>
    <StatsCard stats={analyticsStats} />
    <p>Analyze your account's performance and growth trends here.</p>
  </div>
);

export default Analytics;