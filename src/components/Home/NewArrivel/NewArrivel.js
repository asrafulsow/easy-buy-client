import ProductCard from '../Egadget/microphone/ProductCard';

const NewArrivel = () => {
  const products = [
    {
      id: '1',
      title: 'Headphones Wireless.',
      description:
        'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
      date: 'may 10, 2023',
      link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
      thumbnail:
        'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },
    {
      id: '2',
      title: 'Headphones Wireless.',
      description:
        'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
      date: 'may 10, 2023',
      link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
      thumbnail:
        'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },
    {
      id: '3',
      title: 'Headphones Wireless.',
      description:
        'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
      date: 'may 10, 2023',
      link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
      thumbnail:
        'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },
    {
      id: '4',
      title: 'Headphones Wireless.',
      description:
        'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
      date: 'may 10, 2023',
      link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
      thumbnail:
        'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },
  ];
  return (
    <div className="lg:px-[200px] flex justify-center">
      <div>
        <p className="text-3xl  py-10">New Arrivel</p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 place-content-center">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivel;
