import { auth } from "@/auth";
import EmptyPage from "@/components/EmptyPage";
import { cartInterface, getCustomerCart } from "../actions/auth";
import { toSentenceCase } from "@/utils";

export default async function CartPage() {
  const session = await auth();
  if (!session) {
    return <EmptyPage />;
  } else {
    const cartProducts: Awaited<cartInterface[]> = await getCustomerCart(
      session.user.id
    );
    return (
      <div className="flex flex-col justify-start items-start w-full p-4">
        {/* -------------------- CART TITLE -------------------- */}
        <span className="text-xl font-semibold text-primary">
          {toSentenceCase(session.user.name)}, review your cart
        </span>
        {/* -------------------- CART LIST -------------------- */}
        <div className="flex flex-col justify-start items-start w-4/5 gap-1 divide-y-2 py-2">
          {cartProducts.map((c: cartInterface, index: number) => (
            <div
              className="flex flex-row justify-between items-start w-full"
              key={index}
            >
              {/* -------------------- CART IMAGE & DETAILS -------------------- */}
              <div className="flex flex-row justify-start items-start w-full">
                <img
                  src={c.image}
                  alt={c.productName}
                  height={150}
                  width={150}
                />
                {/* -------------------- CART DETAILS -------------------- */}
                <div className="flex flex-col justify-start items-start w-full gap-1 mt-3">
                  <span className="text-lg font-semibold">{c.productName}</span>
                  <span className="text-base font-medium text-green-400">
                    {c.stockSource}
                  </span>
                  <span>Quantity: {c.quantity}</span>
                </div>
              </div>
              {/* -------------------- CART PRICE -------------------- */}
              <span className="text-lg font-semibold py-1.5">
                ${c.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
