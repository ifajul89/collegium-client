import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SectionTitle from "../../components/Shared/SectonTitle/SectionTitle";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="fitting space-top-bottom flex items-center justify-center">
      <div className="border-4 border-gray-200 p-10 rounded-3xl w-2/3">
        <SectionTitle heading="See Your" headingEnd="Profile" />
        <div className="flex items-center gap-2">
          <img className="rounded-full w-1/3" src={user?.photoURL} alt="" />
          <div className="divider lg:divider-horizontal"></div>
          <div className="text-lg space-y-1">
            <p className="font-thin text-gray-500 text-sm">
              <span className="font-normal">Id: </span>
              {user.uid}
            </p>
            <p className="font-semibold text-5xl">{user.displayName}</p>
            <p className="text-2xl">{user.email}</p>
            <p>
              <span className="font-semibold">Account Created: </span>
              {user.metadata.creationTime}
            </p>
            <p>
              <span className="font-semibold">Last Sign In: </span>
              {user.metadata.lastSignInTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
