const ClubCard = ({img,name})=>{
  return (
    <>
          <div class="card">
            <img src={img} alt=""/>
            <h2>{name}</h2>
        </div>
    </>
  )
}

export default ClubCard;