
function JobCard({company_name,position,status}) {
  return (
    <div className="bg-blue-300/30 m-3 border border-gray-800 rounded p-3 text-lg ">
      <input className="" type="text" value={company_name} readOnly />
      <input type="text" value={position} readOnly />
      <input type="text" value={status} readOnly />
    </div>
  )
}

export default JobCard
