import React, { useState } from 'react';
import { AccountList } from '../../components/AccountList';
import { Account } from '../../types/Account';

const mockAccounts: Account[] = [
  { id: '1', username: 'my_ig_account', followers: 1200, following: 300, posts: 45, isActive: true },
  { id: '2', username: 'my_second_account', followers: 800, following: 150, posts: 20, isActive: false },
];

const Accounts: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <h2>Accounts</h2>
      <AccountList accounts={mockAccounts} onSelect={setSelected} />
      {selected && <div>Selected Account ID: {selected}</div>}
    </div>
  );
};

export default Accounts;