import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/productsSlice";

function Cart() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  if (products.length == 0) {
    return (
      <h1 className="text-2xl font-bold text-center mt-3">
        You don't have any product yet !
      </h1>
    );
  } else {
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name/Type</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={product.category.image}
                              alt={product.title}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{product.title}</div>
                          <div className="text-sm opacity-50">
                            {product.category.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="">
                        {product.description.substring(0, 150)}
                      </span>
                    </td>
                    <td>
                      {new Intl.NumberFormat("us-Us", {
                        currency: "USD",
                        style: "currency",
                      }).format(product.amount * product.price)}
                    </td>
                    <th>
                      <button
                        onClick={() => dispatch(removeProduct(product.id))}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
