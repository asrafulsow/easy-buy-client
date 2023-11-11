import Adds from "@/components/Home/Adds/Adds";
import Banner from "@/components/Home/Banner/Banner";
import BestDeal from "@/components/Home/BestDeal/BestDeal";
import Category from "@/components/Home/Category/Category";
import DiscountBanner from "@/components/Home/DiscountBanner/DiscountBanner";
import Egadget from "@/components/Home/Egadget/Egadget";
import FlashSell from "@/components/Home/FlashSell/FlashSell";
import Gallery from "@/components/Home/Gallery/Gallery";
import NewArrivel from "@/components/Home/NewArrivel/NewArrivel";
import News from "@/components/Home/News/News";
import Reviews from "@/components/Home/Reviews/Reviews";
import Subscribe from "@/components/Home/Subscribe/Subscribe";
import TrendingProduct from "@/components/Home/TrendingProduct/TrendingProduct";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <FlashSell />
      <Category />
      <TrendingProduct />
      <Adds />
      <BestDeal />
      <Egadget />
      <DiscountBanner />
      <NewArrivel />
      <News />
      <Gallery />
      <Reviews />
      <Subscribe />
    </main>
  )
}
