import { SecondaryNavbar } from "../components/secondary-navbar"
import back from '../images/back.jpg'; 

export const Members = () =>{
    return(
        <div>
            <div className="ua_component_wrapper ua_custom-class">
    <article className="ua_card">
      <div className="container">
      <img
      src={back}
      alt=""
      style={{ width: '100%', height: '30vh', objectFit: 'cover', objectPosition: 'top' }}
    />
        <div className="text-overlay">
          <div>
              <h1>Lab Members</h1>
              <SecondaryNavbar/>
          </div>
      </div>

      </div>
     
    </article>
  </div>
        </div>
    )
}