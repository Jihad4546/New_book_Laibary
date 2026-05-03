import Banner from "@/Component/Banner";
import Book from "@/Component/Book";
import FeaturedCategories from "@/Component/FeaturedCategories"


export default function Home() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <Banner></Banner>
      <Book></Book>
      <FeaturedCategories>
        
      </FeaturedCategories>
      
    </div>
  );
}
