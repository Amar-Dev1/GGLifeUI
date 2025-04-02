import React, { useState } from "react";
import { useTheme } from "../../../components/ThemeProvider";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [editedUser, setEditedUser] = useState(user);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedUser(user); // Reset edited fields when toggling
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const {theme} = useTheme()
const navigate = useNavigate()
  return (
    <div className={`p-6 space-y-6 ${theme === 'light'?'text-black':'text-white'}`}>
      <h2 className="text-2xl font-bold">👤 Your Profile</h2>

      {/* Profile Picture */}
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        {isEditing && (
          <input
            type="text"
            name="profilePicture"
            value={editedUser.profilePicture}
            onChange={handleChange}
            placeholder="Profile Picture URL"
            className="p-2 border! rounded-md flex-grow"
          />
        )}
      </div>

      {/* User Information */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="p-2 border! rounded-md w-full"
            />
          ) : (
            <p className="text-lg">{user.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          ) : (
            <p className="text-lg">{user.email}</p>
          )}
        </div>
      </div>

      {/* Edit and Save Buttons */}
      <div className="flex space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Logout Button */}
      <div className="mt-6">
        <button
          onClick={() => navigate('/logout')}
          className="px-4 py-2 cursor-pointer bg-gray-500 text-white rounded-xl hover:bg-gray-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;