'use client';

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const BorrowButton = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleBorrow = () => {
    if (!session) {
      toast.error("Please login first!");
      router.push("/login");
      return;
    }

    toast.success("Book borrowed successfully 🎉");

  };

  return (
    <button
      onClick={handleBorrow}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      Borrow This Book
    </button>
  );
};

export default BorrowButton;