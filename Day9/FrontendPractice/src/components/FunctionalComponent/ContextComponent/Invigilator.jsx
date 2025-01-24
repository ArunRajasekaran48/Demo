import Faculty from "./Faculty"
const Invigilator=(res)=>{
    return(
        <div style={{textAlign:"center"}}>
<h2>Invigilation in Process</h2>
<Faculty sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Invigilator