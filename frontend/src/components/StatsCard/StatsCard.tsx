import React from 'react';
import { Stats } from '../../types/Stats';

interface Props {
  stats: Stats;
}

const StatsCard: React.FC<Props> = ({ stats }) => (
  <div style={{border: '1px solid #ccc', padding: 16, borderRadius: 8, margin: 8}}>
    <div>Followers: {stats.followers}</div>
    <div>Following: {stats.following}</div>
    <div>Posts: {stats.posts}</div>
    <div>Engagement: {stats.engagementRate}%</div>
    <div>Growth: {stats.growth}%</div>
  </div>
);

export default StatsCard;