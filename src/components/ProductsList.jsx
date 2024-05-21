import { useLoaderData, Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";

function ProductsList() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => {
        return (
          <li
            key={product.id}
            className="card  bg-base-100 shadow-xl hover:shadow-2xl  hover:-translate-y-0.5"
          >
            <figure className="border-b-2 border-red-300">
              <img src={product.images} className="w-full h-56 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="line-clamp-3">{product.description}</p>
              <div className="card-actions justify-between items-center">
                <p className="text-3xl">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  <SlBasket className="w-5 h-5" />
                  Buy Now
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
