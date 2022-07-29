// import React, {useState,useEffect} from "react";
// // import Users from "./Users";

// const Pagination = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [userPerPage] = useState(1);
//     const [totalUsers, setTotalUsers] = useState(0);


// useEffect(() => {
//     const loadUser = async() => {
//         setLoading(true);
//         const res = await fetch("https://reqres.in/api/users/");
//     const json = await res.json();
//     setUsers(json.data);
//     setTotalUsers(json.data.length)
//         setLoading(false);
//     };
//     loadUser();
// },[])

// const indexOfLastUser = currentPage + userPerPage;
// const indexOfFirstUser = indexOfLastUser - userPerPage;
// const cuurentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

// const paginate = (pageNum) => setCurrentPage(pageNum);
// const prevPage = () => setCurrentPage(prevPage - 1);
// const nextPage = () => setCurrentPage(prevPage + 1);

//  const showPagination = () => {
//     return(
//         <User
//         userPerPage = {userPerPage}
//         totalUsers = {totalUsers}
//         currentPage = {currentPage}
//         paginate = {paginate}
//         prevPage = {prevPage}
//         nextPage = {nextPage}

//         />
//     )
//  }

// console.log("users ===>", users);
// return (
//     <>
    // <div className="App">
    //   <h1>Hello ReqRes users!</h1>
    //   <div className="flex">
    //     {!loading? users.length &&
    //       cuurentUsers.map((user) => {
    //         return (
    //           <div key={user.id}>
    //             <p>
    //               <strong>{user.first_name}</strong>
    //             </p>
    //             <p>{user.email}</p>
    //             <img key={user.avatar} src={user.avatar} />
    //           </div>
    //         );
    //       }) : "loading..." }
    //   </div>
    // </div>
//     <div>{showPagination}</div>
    
//               </>
// );

// }


// export default Pagination; 