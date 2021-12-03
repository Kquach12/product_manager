import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';



const Main = () => {
    // const [people, setPeople] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/people')
    //         .then(res=>{
    //             setPeople(res.data);
    //             setLoaded(true);
    //         });
    // },[])
    return (
        <div>
            <ProductForm/>
            {/* <hr/>
            { loaded && <PersonList people={people}/> } */}
        </div>
    )
}
export default Main;