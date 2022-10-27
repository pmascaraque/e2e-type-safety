import type { User } from "./types";
import UserDisplay from "./components/UserDisplay";
function App() {
  const users: User[] = [
    {
      //mock data
      name: "Sabin Adams",
      messages: [
        {
          body: "Hey There!",
        },
        {
          body: "Whats up!",
        },
      ],
    },
  ];

  return (
    <div className='bg-zinc-800 flex-col h-screen w-full flex items-center justify-center'>
      {users.map((user, index) => (
        <UserDisplay user={user} key={index} />
      ))}
    </div>
  );
}

export default App;
