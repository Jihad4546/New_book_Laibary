"use client";
import React from "react";
import { Card, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState("Jihad hosen");
  const [image, setImage] = React.useState("");

  const { data: session } = authClient.useSession();
  const email = session?.user.email;

  // ✅ Upload image to imgbb
  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=88b6095c9d5939e558f8baf6867bf63c",
        { method: "POST", body: formData }
      );

      const data = await res.json();

      if (!data.success) {
        console.error("Upload failed:", data);
        return null;
      }

      return data.data.display_url; // ✅ correct field
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handleSave = async () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    try {
      await authClient.updateUser({
        name,
        image: image || session?.user?.image,
      });

      setIsEditing(false);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl space-y-8">

        <Card className="rounded-3xl p-8 shadow-xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">

            {/* ✅ Profile Image */}
            <img
              src={image || session?.user?.image || "/default-avatar.png"}
              alt="Profile"
              className="rounded-full w-25 h-25 object-cover border-4 border-indigo-300"
            />

            {/* Info / Edit */}
            <div className="flex-1 space-y-4">

              {isEditing ? (
                <div className="space-y-4">

                  {/* Name input */}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border p-3 text-black"
                  />

                  {/* Image input */}
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full rounded-xl border p-3 text-black"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const url = await uploadImage(file);
                      if (url) setImage(url);
                    }}
                  />

                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    {name}
                  </h1>
                  <p className="mt-2 text-gray-500">
                    {email}
                  </p>
                </div>
              )}

            </div>

            {/* Save / Edit Button */}
            <Button
              onClick={handleSave}
              radius="lg"
              className="p-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white"
            >
              {isEditing ? "Save Profile" : "Edit Profile"}
            </Button>

          </div>
        </Card>
        <Card className="rounded-3xl p-8 shadow-xl bg-white">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Account Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="p-4 rounded-2xl bg-indigo-50">
              <h3 className="font-semibold text-indigo-700">Member Since</h3>
              <p className="text-gray-600">2024</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50">
              <h3 className="font-semibold text-purple-700">Status</h3>
              <p className="text-gray-600">Active User</p>
            </div>

            <div className="p-4 rounded-2xl bg-green-50">
              <h3 className="font-semibold text-green-700">Plan</h3>
              <p className="text-gray-600">Free</p>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;