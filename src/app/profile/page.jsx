"use client";
import React from "react";
import { Card, Button, Avatar } from "@heroui/react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  const [name, setName] = React.useState("Jihad hosen");

  const [image, setImage] = React.useState(
    "https://i.pravatar.cc/150"
  );

  // 🔥 Cloudinary upload function
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_UPLOAD_PRESET");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

  const borrowedBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Atomic",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl space-y-8">

        {/* Profile Card */}
        <Card className="rounded-3xl p-8 shadow-xl">

          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">

            {/* Avatar */}
            <Avatar
              src={image}
              className="h-32 w-32 border-4 border-indigo-500"
            />

            {/* Profile Info */}
            <div className="flex-1 space-y-4">

              {isEditing ? (
                <div className="space-y-4">

                  {/* Name */}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border p-3 text-black"
                  />

                  {/* File Upload */}
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full rounded-xl border p-3 text-black"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const url = await uploadImage(file);
                      setImage(url);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    {name}
                  </h1>
                  <p className="mt-2 text-gray-500">
                    noman@example.com
                  </p>
                </div>
              )}
            </div>

            {/* Edit / Save Button */}
            <Button
              onClick={() => setIsEditing(!isEditing)}
              radius="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
            >
              {isEditing ? "Save Profile" : "Edit Profile"}
            </Button>

          </div>
        </Card>

        {/* Borrowed Books */}
        <Card className="rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl text-black">

          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-center md:text-left">
            Borrowed Books
          </h2>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">

            {borrowedBooks.map((book) => (
              <div
                key={book.id}
                className="flex flex-col sm:flex-row gap-4 rounded-2xl border p-4"
              >

                <img
                  src={book.image}
                  alt={book.title}
                  className="h-40 w-full sm:h-28 sm:w-24 rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-between gap-3">
                  <h3 className="text-lg font-bold">{book.title}</h3>

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                  >
                    Details
                  </Button>

                </div>
              </div>
            ))}

          </div>

        </Card>

      </div>
    </div>
  );
};

export default ProfilePage;