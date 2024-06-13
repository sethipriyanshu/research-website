import { Link } from "react-router-dom";


export const Navbar = () =>{
    return(
        <div>

<section className="ua_brand-bar">
    <div className="ua_brand-bar_content">
      <a href="https://ua.edu" className="ua_brand-bar_logo">
        <img
          src="https://assetfiles.ua.edu/brand/logos/UA_Wordmark-White.svg"
          alt="The University of Alabama"
        />
      </a>
      <a href="http://mybama.ua.edu/" className="ua_brand-bar_link">myBama</a>
    </div>
  </section>
 
  <nav aria-label="Primary Navigation" className="ua_primary-navigation" id="UA_PrimaryNav">
    <ul className="ua_primary-navigation_list">
      <li>
        <div className="ua_title-bar_title-group">
          <a href="/" className="ua_title-bar_name">Hee Lab</a>
        </div>
      </li>
      <span style={{ width: '240px' }}></span>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/research">Research</Link></li>
      <li><Link to="/global">Global Engagement</Link></li>
      <li><Link to="/publications">Publications</Link></li>
      <li><Link to="/lab-members">Lab Members</Link></li>
      <li><Link to="/album">Lab Album</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>

  <div className="ua_component_wrapper ua_custom-class">
    <article className="ua_card">
      <div className="container">
      <img
      src="https://picsum.photos/1600/900"
      alt=""
      style={{ width: '100%', height: '30vh', objectFit: 'cover', objectPosition: 'top' }}
    />
        <div className="text-overlay">
          <div>
              <h1>Hee Lab</h1>
              <p>Department of Social Work</p>
          </div>
      </div>

      </div>
     
    </article>
  </div>


        </div>
    )
}