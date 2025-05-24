import React from 'react'

const TeacherSection = () => {
  return (
    <>
    <div className='teacher-container'>
      <div className='teacher-sub-container-1'>
        <h1>For Teachers</h1>
       <h2>Streamline your teaching:</h2>
<div className='teacher-style'>
    <ul>
        <li><img src='https://api.iconify.design/mdi:checkbox-marked-circle.svg?color=%23888888' />
         Manage your classroom</li>
         <li><img src='https://api.iconify.design/mdi:checkbox-marked-circle.svg?color=%23888888' />
         Ready-to-use learning materials</li>
         <li><img src='https://api.iconify.design/mdi:checkbox-marked-circle.svg?color=%23888888' />
         Customize study plans</li>
         <li><img src='https://api.iconify.design/mdi:checkbox-marked-circle.svg?color=%23888888' />
         Track student progress</li>
         <li><img src='https://api.iconify.design/mdi:checkbox-marked-circle.svg?color=%23888888' />
         Interactive coding chalanges</li>
    </ul>
    <div className='learning-btn'>
    <div className='spacing-button'>Learn More</div>
    </div>
</div>

</div>
<div className='teacher-sub-cntainer-2'>
  <div className='pic'>
    <img src='https://www.w3schools.com/images/classroom.webp'></img>
   </div>
</div>
    </div>
    </>
  );
}

export default TeacherSection;