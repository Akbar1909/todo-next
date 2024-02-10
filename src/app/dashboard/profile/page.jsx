import Link from "next/link";
import SearchBar from "./_components/SearchBar";
import Counter from "./_components/Counter";
import { getTime } from "./api";

const ProfilePage = async ({ searchParams }) => {
  const now = await getTime();
  return (
    <div>
      <h1>Profile Page {searchParams?.count}</h1>
      <Counter />
      <Link href="/dashboard/settings">Link</Link>
      <SearchBar />
      {now}
      test
    </div>
  );
};

export default ProfilePage;
