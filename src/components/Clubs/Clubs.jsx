import ClubCard from "./ClubCard";
import "./Clubs.css"
const Clubs = ()=>{


  const Clubs = [
    {
     img:"images/nss.jpg",
     name:"NSS"
    },
    {
     img:"images/sciencelogo.jpg",
     name:"Science Club"
    },
    {
     img:"images/ecoclub_copy(1).jpg",
     name:"Eco Club"
    },
    {
     img:"images/culturallogo.jpg",
     name:"Cultural Society"
    },
    {
     img:"images/genderissue.jpg",
     name:"Gender Issue Club"
    },
    {
     img:"images/redcross.jpg",
     name:"Red Cross"
    },
    {
     img:"images/social-worklogo.jpg",
     name:"Social Work"
    },
    {
     img:"images/itclublogo.jpg",
     name:"IT Club"
    },
    {
     img:"images/youthlogo.jpg",
     name:"Youth Activity"
    },
    {
     img:"images/sportsclub.jpg",
     name:"Sports Club"
    },
  ];

  const Activities = [
    {
     img:"images/inspare.jpg",
     name:"Inspare Program"
    },
    {
     img:"images/abhiperna.png",
     name:"Abhiperna"
    },
    {
     img:"images/exihibition.jpg",
     name:"Exihibition"
    },
    {
     img:"images/jagriti.jpg",
     name:"Jagriti"
    },
    {
     img:"images/vaibhav.jpg",
     name:"Project Vaibhav"
    },
  ];

  const Publication = [
    {
      img:"images/researchzone.jpg",
      name:"Researchzone"
     },
     {
      img:"images/srijan.jpg",
      name:"Srijan "
     },
     {
      img:"images/prospectus.jpg",
      name:"Prospectus"
     },
     {
      img:"images/Press-Release.jpg",
      name:"Press Release"
     },
  ];



  return(
    <>
    <div className="CLubs-main-conatiner">
    <div className="CLubs-con">
       <h1 className="club-title">Clubs and Societies</h1>
    <div class="card-container">
  {
    Clubs.map((item)=>(
      <ClubCard key={item.name} img = {item.img} name = {item.name} />
    ))
  }  
 
    </div>
  </div>
  <div>
    <div className="CLubs-con">
       <h1 className="club-title">Other Activities</h1>
    <div class="card-container">
    {
    Activities.map((item)=>(
      <ClubCard key={item.name} img = {item.img} name = {item.name} />
    ))
  }  
 
    </div>
  </div>
    <div className="CLubs-con-pub">
       <h1 className="club-title">Our Publications </h1>
    <div class="card-container">
    {
    Publication.map((item)=>(
      <ClubCard key={item.name} img = {item.img} name = {item.name} />
    ))
  }  
 
    </div>
  </div>
  </div>
  </div>
    </>
  )
}

export default Clubs;