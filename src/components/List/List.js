import React from 'react';

const List = (props) => {
    let data = localStorage.getItem('cart')
    let dataObj = JSON.parse(data)
   


    return (
        <div>
            <h1>i am list</h1>
            {
                Object.entries(props.obj).map(entry => {
                    return(
                        <div>
                            product key : {entry[0]} product qty : {entry[1]}
                        </div>
                    )
                })
            }
           
        </div>
    );
};

export default List;