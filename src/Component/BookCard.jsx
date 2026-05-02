'use client'
import { Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const BookCard = ({ book }) => {
  
  const router = useRouter();
    const { data: session } = authClient.useSession();
  
    const handleBorrow = () => {
      if (!session) {
        toast.error("Please login first!");
        router.push("/login");
        return;
      }
  
      router.push(`/all-book/${book.id}`)
  
    };

  return (
    <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="h-72 overflow-hidden">
        <img
          src={book.image_url}
          alt={book.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <h1 className="text-xl font-bold text-gray-800">
          {book.title}
        </h1>

        <p className="text-sm text-gray-500">
          by {book.author || "Unknown Author"}
        </p>

        {/* Button */}
        
       
        
         
          <button 

          onClick={handleBorrow}
           className="w-full rounded-xl bg-linear-to-r from-blue-600 to-indigo-700 px-4 py-2 font-medium text-white transition hover:from-indigo-700 hover:to-purple-700"
          > View Details
          </button>
      


      </div>
    </Card>
  );
};

export default BookCard;