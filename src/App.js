import React, {useState, useEffect} from "react";
import * as axios from "axios";
import Table from "./Table";

const App = () => {
    const [getState, setStata] = useState([]);
    const USER_API_URL="/api/users"

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(USER_API_URL);
            setStata(result.data);
            console.log(result.data)
        }
        fetchItems()
    }, [])

    return(
        <div className="container">
           <Table users={getState}/>
        </div>
    )

}


export default App;