const Product = (props) => {
    return ( 
        <div class="product">
            <h1>Products</h1>
             <img class="product-image" src={props.gambar} alt={props.nama}  />
            <h1>Product {props.id}</h1>
            <h2>{props.nama}</h2>
            <h3>Rp {props.harga}</h3>
           
        </div>
     );
}
 
export default Product;