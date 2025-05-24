// Union-Type 

type DataUnion = {
    status: "loding" | "waiting" | "success";
}

const Union =({status}: DataUnion)=> {

    if(status ==="loding"){
        return <h2>data loading .....</h2>
    }else if (status=== "waiting"){
        return <h1>Data not found</h1>
    }
    
  return (
    <div>data success full</div>
  )
}

export default Union