import ExamResults from "./ExamResults"
const CoE=(res)=>{
    return(
        <div style={{textAlign:"center"}}>
<h2>Paper correction done</h2>
<h2>Mark Publishing is in Process</h2>
<ExamResults sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default CoE;