import React from 'react'

// function car() {
//     return(
//         <div>This is car component</div>
//     )
// }

// const car = () => {
//     return(
//         <div>This is car component</div>
//     )
// }
//
// const car = () => <div>This is car component</div>
// const car = () => (
//     <div>This is car component
//         <strong> test</strong>
//     </div>
// )

// export default car

// export default () => (
//     <div>
//         This is car component
//         <strong> test</strong>
//     </div>
// )

// export default () => (
//     <div>
//         <h3>This is car component</h3>
//         <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
//     </div>
// )

// export default props => ( //можно не писать круглые скобочки у пропс если у нас всего лишь один параметр
//     <div>
//         <h3>Car name: {props.name}</h3>
//         <p>Year: <strong>{props.year}</strong></p>
//         {props.children}
//     </div>
// )


export default props => ( //можно не писать круглые скобочки у пропс если у нас всего лишь один параметр
    <div style = {{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px'}}>

        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)