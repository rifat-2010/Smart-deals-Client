// import axios from 'axios';
import React from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
// import { axiosInstance } from '../hooks/useAxios';
// import useAxios from '../hooks/useAxios';

const CreatAProduct = () => {
const {user} = useAuth();
// const axiosInstance = useAxios();
const axiosSecure = useAxiosSecure();



    const handleCreatAProduct = e => {
        e.preventDefault();
         const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;
    console.log(title, image, price_min, price_max)


    const newProduct = {title, image, price_min, price_max, email: user.email,
    seller_name: user.displayName,
     };

    // axios.post('http://localhost:3000/products', newProduct)
    axiosSecure.post('/products', newProduct)
    .then(data => {
        console.log('after secure call', data.data);
        // if(data.data.insertedId){
            alert('your product has been placed')
        // }
    })
    }

    return (
        <div className='w-1/2 mx-auto'>
           <form onSubmit={handleCreatAProduct}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="title"
                    className="input"
                  />
                  {/* email */}
                  <label className="label">Image URL</label>
                  <input
                    type="text"
                    className="input"
                    name="image"
                  />
                  {/* bid amount */}
                  <label className="label">Min Price</label>
                  <input
                    type="text"
                    name="price_min"
                    className="input"
                    placeholder="Min Price"
                  />
                  <label className="label">Max Price</label>
                  <input
                    type="text"
                    name="price_max"
                    className="input"
                    placeholder="Max Price"
                  />
                  <button className="btn btn-neutral mt-4">
                   Add a Product
                  </button>
                </fieldset>
              </form>
        </div>
    );
};

export default CreatAProduct;