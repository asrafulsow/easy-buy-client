import Image from 'next/image';
import img from '../../../../assets/adsp-removebg-preview.png';
const ProductCard = ({ product }) => {
  console.log(product);
  console.log('hello');
  return (
    <div className="bg-white border rounded  w-[250px] px-5 py-7">
      <Image
        className="py-3"
        src={img}
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <div className="py-4">
        <span>Headphones</span>
        <p className="font-bold text-sm">{product.title}</p>
        <span className="line-through">$129</span>
        <span className="text-blue-400 px-3">$103.20</span>
      </div>
    </div>
  );
};

export default ProductCard;
