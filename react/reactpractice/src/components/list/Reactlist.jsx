function Reactlist(){
    const cars=["BMW","Porch","Ferrari","Mclaren"]
    return(
        <>
        <ul>
            {cars.map((cars,index)=>(
                <li key={index}>{cars}</li>
            ))}
        </ul>
        
        </>
    );
}
export default Reactlist;