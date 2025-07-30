import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import '../Components/Login.css'; // ✅ import CSS

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return <div className="profile-message">Please log in to view your profile.</div>;

  return <div className="profile-message">Welcome {user.username}!</div>;
}

export default Profile;
