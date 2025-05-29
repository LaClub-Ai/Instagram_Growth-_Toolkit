import React from 'react';
import { Account } from '../../types/Account';

interface Props {
  accounts: Account[];
  onSelect: (id: string) => void;
}

const AccountList: React.FC<Props> = ({ accounts, onSelect }) => (
  <ul>
    {accounts.map(acc => (
      <li key={acc.id} onClick={() => onSelect(acc.id)}>
        {acc.username} ({acc.followers} followers)
        {acc.isActive && <span style={{color: 'green'}}> ●</span>}
      </li>
    ))}
  </ul>
);

export default AccountList;