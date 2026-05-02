
import { Card, Button } from "@heroui/react";
import Link from "next/link";
const BookDetailsPage = async ({ params }) => {

  
    const { bookId } = await params;
    const res = await fetch('https://new-book-laibary-3sius4oqi-hasanjihad4546-8977s-projects.vercel.app/data.json');
    const books = await res.json();
    const book = books.find(p => p.id == bookId);
    console.log(book)

    
    return (
        <div className="">
            <Card className="flex flex-col justify-center items-center max-w-4xl w-full overflow-hidden rounded-2xl border shadow-lg mx-auto my-10">

                <div className="flex flex-col md:flex-row gap-6 p-5">


                    <div className="md:w-1/2">
                        <img
                            width={300}
                            height={300}
                            src={book.image_url}
                            alt={book.title}
                            className="h-96 w-full object-cover rounded-xl"
                        />
                    </div>


                    <div className="md:w-1/2 space-y-4">

                        <h1 className="text-3xl font-bold">
                            {book.title}
                        </h1>
                        <p className="text-sm text-gray-500">
                            Author: {book.author || "Unknown"}
                        </p>
                        <p className="text-gray-600">
                            {book.description}
                        </p>

                        <p className="text-yellow-500 font-semibold">
                           available_quantity:  {book.available_quantity} 
                        </p>



                        <div className="flex gap-3 pt-3">

                            <Button color="primary">
                                Borrow Book
                            </Button>

                            <Link href="/all-book">
                                <button className="px-6 py-2 rounded-xl text-white font-semibold 
                                    bg-linear-to-r from-emerald-400 via-green-500 to-teal-500
                                    shadow-md hover:shadow-xl transform hover:scale-105 
                                    transition-all duration-300">
                                    ← Back
                                </button>
                            </Link>

                        </div>

                    </div>

                </div>

            </Card>
        </div>
    );
};

export default BookDetailsPage;