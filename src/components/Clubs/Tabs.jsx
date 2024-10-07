import React, { useState } from 'react';
import './Tabs.css'; // Import the styles
import ClubCard from './ClubCard';
import "./Clubs.css"


const Tabs = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('Tab1');

    // Function to switch between tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

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
    

    return (
        <div className="tabs-container">
            {/* Tab buttons */}
            <div className="tabs">
                <button 
                    className={`tab-button ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab1')}
                >
                   Clubs and Societies
                </button>
                <button 
                    className={`tab-button ${activeTab === 'Tab2' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab2')}
                >
                   Other Activities
                </button>
                <button 
                    className={`tab-button ${activeTab === 'Tab3' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab3')}
                >
                  Our Publications
                </button>
            </div>

            {/* Content based on the active tab */}
            <div className="tab-content">
                {activeTab === 'Tab1' && (
                    <div className="content">
                          <div className="CLubs-con">
    <div class="card-container">
  {
    Clubs.map((item)=>(
      <ClubCard key={item.name} img = {item.img} name = {item.name} />
    ))
  }  
 
    </div>
  </div>
                    </div>
                )}
                {activeTab === 'Tab2' && (
                    <div className="content">
                          <div className="CLubs-con">
    <div class="card-container">
    {
    Activities.map((item)=>(
      <ClubCard key={item.name} img = {item.img} name = {item.name} />
    ))
  }  
 
    </div>
  </div>
                    </div>
                )}
                {activeTab === 'Tab3' && (
                    <div className="content">
                    <div className="CLubs-con-pub">
    <div class="card-container">
    {
    Publication.map((item)=>(
      <ClubCard key={item.name} img = {item.img} name = {item.name} />
    ))
  }  
 
    </div>
  </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
