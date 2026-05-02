"use client";

import React from "react";
import { Card, Button, Avatar } from "@heroui/react";



const ProfilePage = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState("Jihad hosen");
  const [image, setImage] = React.useState("");
  const borrowedBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
      status: "Borrowed",
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

              {/* Info */}
              <div className="flex-1 space-y-4">

                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-gray-300 p-3 outline-none text-black"
                    />

                    <input
                      type="file"
                      accept="image/*"
                      
                onChange={(e)=>setImage(e.target.value)}
                      placeholder="Enter image URL"
                      className="w-full rounded-xl border border-gray-300 p-3 outline-none text-black"
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

              {/* Edit Button */}
              <Button
                onClick={() => setIsEditing(!isEditing)}
                radius="lg"
                className="p-2 cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
              >
                {isEditing ? "Save Profile" : "Edit Profile"}
              </Button>
            </div>
        </Card>

        {/* Borrowed Books */}
        <Card className="rounded-3xl p-8 shadow-xl text-black">
       
            <h2 className="mb-6 text-2xl font-bold">
              Borrowed Books
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {borrowedBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex gap-4 rounded-2xl border p-4"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-28 w-24 rounded-xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold">
                        {book.title}
                      </h3>
                    </div>

                    <Button
                      size="sm"
                      radius="lg"
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
