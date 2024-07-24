export default function ProductDeatils({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Deatils about Product {params.productId}</h1>;
}
