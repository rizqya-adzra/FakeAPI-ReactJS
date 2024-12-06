import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import axios from "axios";
import Wrapper from "./templates/Wrapper";

//file ract pasti selalu menghasilkan 1 func, nama func dibuat sama dengan nama file. kalau
//di laravel ini dama dengna class
//useEffect = memanggil func ketika sesuatu terjadi
function App() {
  //const [namavar, funcVar] = useState({})
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //baris kode html disimpal di return()
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        //then: success
        setLoading(false);
        setProducts(res.data);
      })
      .catch((err) => {
        //catch: error
        setLoading(false);
        setError(err.message);
      })
  }, []);

  //react hanya bisa menampilkan satu element
  return (
    <>
      <Wrapper>
      {loading && <Loading></Loading>}
      {error && <Alert message={error}> </Alert>}

      {!loading && !error && (
        <div className="d-flex justify-content-center container flex-wrap">
          {
            products.map((product) => (
              <Card title={product.title} image={product.image} description={product.description} 
              price={product.price} category={product.category} key={product.id}></Card>
            ))
          }
        </div>
      )}
      </Wrapper>
    </>
  )
}
export default App;