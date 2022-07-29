// import React from "react";
// import { Button } from 'antd';


// const User = (props) => {
//     const {
//         userPerPage,
//         totalUsers,
//         currentPage,
//         paginate ,
//         prevPage ,
//         nextPage
//     } = props;
// }
// const pageNumbers = [];
// for(let i = 1; i<= Math.ceil(totalUsers / userPerPage); i++){
//     pageNumbers.push(i);
// }

// return(
//     <nav>
//         <div className="pagination justify-content-center">
//             {currentPage !==1 && (
//                 <li>
//                     <Button style={{cursor : "pointer"}}
//                     type="primary"
//                     onClick={() => prevPage()}
//                     >
//                         Previous
//                     </Button>
//                 </li>
//             )}

//             {pageNumbers.map((num) => (
//                 <li className="page-item" key={num}>
//                     <a 
//                     onClick={() => paginate(num)}
//                     className="page-link"
//                     style={{cursor : "pointer"}}
//                     >
//                         {num}
//                     </a>
//                 </li>
//             ))}

//             {pageNumbers.length !==currentPage && (
//                 <li>
//                     <Button style={{cursor : "pointer"}}
//                     type="primary"
//                     onClick={() => nextPage()}
//                     >
//                         Next
//                     </Button>
//                 </li>
//             )}
//         </div>
//     </nav>
// )

// export default User;