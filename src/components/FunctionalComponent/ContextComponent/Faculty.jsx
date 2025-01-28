import CoE from "./CoE"
const Faculty=(res)=>{
    return(
        <div style={{textAlign:"center"}}>
<h2>Paper Correction is in Process</h2>
<CoE sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Faculty