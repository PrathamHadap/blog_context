// import { createContext, useState } from "react";
// import { baseUrl } from "../baseUrl";



// export const AppContext = createContext();
 
// export default function AppContextProvider({children}){


//     const[loading , setLoading] = useState(false)
//     const [page , setPage] = useState(1)
//     const [posts, setPosts] = useState([])
//     const [totalPages , setTotalPages] = useState(null)

//     async function FetchBlogPosts(page=1){

//         setLoading(true)

//         // let url = `${baseUrl}?page=${page}`;
//         let url = `${baseUrl}?page=${page}`;

//         try{
//             // const result = await fetch(url);
//             const result = await fetch(url);
//             const data = await result.json();
//             setPage(data.page)
//             setPosts(data.posts)
//             setTotalPages(data.totalPages)
//         }
//         catch(error){
//             console.log("no data fetch")
//             setPage(1)
//             setPosts([])
//             setTotalPages(null)
//         }

//         setLoading(false)
//     }

//     function handlePage(page){
//         setPage(page)
//         FetchBlogPosts(page);
//     }




//     const value = {
//         loading, 
//         setLoading, 
//         page, 
//         setPage,
//         posts,
//         setPosts,
//         totalPages,
//         setTotalPages,
//         FetchBlogPosts,
//         handlePage
//     }



//     return <AppContext.Provider value={value}>
//         {children}
//     </AppContext.Provider>

// }

import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step1
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let pratham = `${baseUrl}?page=${page}`;
        console.log("printing the final URL");
        // console.log(url);
        try{
            const result = await fetch(pratham);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error) {
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }



    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    //step2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}

