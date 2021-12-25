function TaskList(props){
    console.log('This is coming from props',props.data)
    const list = props.data.map((task, index)=> {<li>{task}</li>
    return <li key={index}>{task}</li>

})
    return(
        <div>
            <ol>
            {list}
             </ol>
         </div>
    )
}



export default TaskList