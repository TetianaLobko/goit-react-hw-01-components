import React from "react";

// Components
import Profile from "./components/profile/Profile";
import FriendsList from "./components/friendList/FriendList";
import Statistics from "./components/statistics/Statistics";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";

// Data
import friends from "./data/friends.json";
import user from "./data/user.json";
import statistics from "./data/statistical-data.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}

export default App;