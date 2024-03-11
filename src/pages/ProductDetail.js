import { useParams } from "react-router-dom";

function ProductDetailPage(){
    const param = useParams();
    return(
        <>
        <h1>Product Deatail</h1>
        <p>{param.productId}</p>
        </>
    )
}

export default ProductDetailPage;