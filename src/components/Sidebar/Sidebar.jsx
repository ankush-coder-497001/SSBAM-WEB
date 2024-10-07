import React, { useState } from 'react';
import './Sidebar.css'; // Import the styles
import '../Courses/Courses.css'

const Sidebar = () => {
    const [selectedCourseType, setSelectedCourseType] = useState('UG'); // Default to UG courses



    const handleCourseTypeChange = (courseType) => {
        setSelectedCourseType(courseType);
    };

    return (
        <>
            <div className="hamburger" onClick={() => setSelectedCourseType(selectedCourseType)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className="sidebar open">
                <h2>Courses</h2>
                <div className="button-group">
                    <button 
                        className={`course-btn ${selectedCourseType === 'UG' ? 'active' : ''}`}
                        onClick={() => handleCourseTypeChange('UG')}
                    >
                        UG Courses
                    </button>
                    <button 
                        className={`course-btn ${selectedCourseType === 'PG' ? 'active' : ''}`}
                        onClick={() => handleCourseTypeChange('PG')}
                    >
                        PG Courses
                    </button>
                </div>
                    
                <div className="course-section">
                    {selectedCourseType === 'UG' && (
                           <div class="course-column">
                           <h2>UG Courses</h2>
                           <ul class="course-list">
                               <li>BCA</li>
                               <li>B.Sc. - Computer Science, Information Technology, Maths, Microbiology, Anthropology, Biology, Biotechnology</li>
                               <li>B.Sc. B.Ed.</li>
                               <li>B.Com. - Plain, Tax Procedure & Practices, Computer Application</li>
                               <li>BBA</li>
                               <li>B.A. - Computer Application, Anthropology, Political Science, History, Economics, English Literature, Sociology</li>
                               <li>DCA</li>
                           </ul>
                       </div>
                    )}
                    {selectedCourseType === 'PG' && (
                     <div class="course-column">
                     <h2>PG Courses</h2>
                     <ul class="course-list">
                         <li>M.Sc. (CS)</li>
                         <li>M.Sc. (IT)</li>
                         <li>M.Sc. - Mathematics</li>
                         <li>M.Sc. - Physics</li>
                         <li>M.Sc. - Chemistry</li>
                         <li>M.Sc. - Zoology</li>
                         <li>M.Sc. - Botany</li>
                         <li>M.Sc. - Biotechnology</li>
                         <li>M.Com.</li>
                         <li>MSW</li>
                         <li>M.A. Geography</li>
                         <li>M.A. Education</li>
                         <li>PGDCA</li>
                         <li>PGDBM</li>
                     </ul>
                 </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
