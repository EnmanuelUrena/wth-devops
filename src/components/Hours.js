// Placeholder to host a component
const getOpeningHours = () => { 
    const today = new Date().getDay(); 
    let openingHours; 
    if (today >= 1 && today <= 5)
         { openingHours = '10 a.m. - 4 p.m.'; }
     else if (today === 0 || today === 6) 
        { openingHours = '9 a.m. - 8 p.m.'; } 
     else { openingHours = 'Closed'; } 
     return openingHours; };
    
     const Hours = () => { 
        const openingHours = getOpeningHours(); 
        return ( 
        <div> 
            <h2>Shelter Opening Hours</h2> <p>Today's hours: {openingHours}</p> 
        </div> ); 
        }; 
    export default Hours;