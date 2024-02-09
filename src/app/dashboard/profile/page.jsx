import Link from "next/link";
import SearchBar from "./_components/SearchBar";
import Counter from "./_components/Counter";

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Counter />
      <Link href="/dashboard/settings">Link</Link>
      <SearchBar />
      {Date.now()}
    </div>
  );
};

export default ProfilePage;
