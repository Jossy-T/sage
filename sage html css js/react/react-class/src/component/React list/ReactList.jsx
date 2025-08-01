

function ReactList(){
    const cars=["BMW","Porch","Ferrari","Mclaren"]
    return(
        <>
        <ul>
            {cars.map((cars,index)=>(
                <li key={index}>{car}</li>
            ))}
        </ul>
        
        </>
    );
}
export default ReactList;