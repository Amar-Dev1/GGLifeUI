import React, { useEffect, useState } from "react";
import { useTheme } from "../../../components/ThemeProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return null;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    bio: "",
    photo: "",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/profiles/me`,
        user,
        config
      );
      if (response.data) {
        setUser(response.data); // Update the user data with the response
        setIsEditing(false); // Exit editing mode
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { theme } = useTheme();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/profiles/me`,
          config
        );
        if (response.data) {
          setUser({
            name: response.data.name,
            photo: response.data.photo,
            bio: response.data.bio,
          }); // Load user data from the database
        }
      } catch (err) {
        console.error("Error fetching profile data:", err);
        alert("Failed to load profile data.");
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div
      className={`p-6 space-y-6 ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      <h2 className="text-2xl font-bold">👤 Your Profile</h2>

      {/* Profile Picture */}
      <div className="flex items-center space-x-4">
        <img
          src={user.photo || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        {isEditing && (
          <input
            type="text"
            name="photo"
            value={user.photo}
            onChange={handleChange}
            placeholder="Profile Picture URL"
            className="p-2 border rounded-md flex-grow"
          />
        )}
      </div>

      {/* User Information */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          ) : (
            <p className="text-lg">{user.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Bio:</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
              rows={4}
            />
          ) : (
            <p className="text-lg">{user.bio}</p>
          )}
        </div>
      </div>

      {/* Edit and Save Buttons */}
      <div className="flex space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              disabled={isLoading}
              className={`px-4 py-2 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              } text-white rounded-md`}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
