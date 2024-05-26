import React, {Component} from 'react';
import { FaRegHeart,FaHeart } from "react-icons/fa";

function Like(props) {
    let icon =<FaHeart style={{cursor:"pointer"}} onClick={props.onClick}/>
    if (!props.liked){
            icon= <FaRegHeart style={{cursor:"pointer"}} onClick={props.onClick} />
        }
    return icon
}

export default Like;
// class Like extends Component {
//     render() {
//
//     }
// }
//
// export default Like;



