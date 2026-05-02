
import { Card, Button } from "@heroui/react";
import Link from "next/link";
import Brrowing from '@/Component/Brrowing'
const BookDetailsPage = async ({ params }) => {

  
    const { bookId } = await params;
    const res = await fetch('http://localhost:3000/data.json' , {cache:'no-store'});
    const books = await res.json();
    const book = books.find(p => p.id == bookId);
   
    

    
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
                         available: {book.available_quantity} copies left
                        </p>



                        <div className="flex gap-3 pt-3">

                            <Button color="primary">
                                Borrow Book
                            </Button>

                          <Brrowing>
                          </Brrowing>

                        </div>

                    </div>

                </div>

            </Card>
        </div>
    );
};

export default BookDetailsPage;