import Image from 'next/image';
import img from '../../../assets/adsp-removebg-preview.png';
const DiscountBanner = () => {
  return (
    <div className="bg-blue-500   lg:flex justify-between lg:mx-[120px] px-10 text-white py-4 rounded">
      <div className="left flex items-center">
        <div className="space-y-4">
          <p>Tablet Collection 2023</p>
          <p className="text-4xl font-bold">
            Galaxy Tab S6 Lite
            <br /> Android Tablet
          </p>
          <p className="line-through">$320.00</p>
          <p className="text-3xl font-bold">$288.00</p>
          <button className="px-7 py-2 bg-black text-white text-sm">
            Shop now
          </button>
        </div>
      </div>
      <div className="right ">
        <Image src={img} width={400} height={400} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default DiscountBanner;
