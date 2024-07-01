import contact_img from '../images/contact.jpg'; 

export const Contact = () =>{
    return(
        <div>
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
              <h1>Contact</h1>
          </div>
      </div>

      </div>
     
    </article>
  </div>
      <div className='contact_section'>
        <img src={contact_img}></img>
        <div className="text-info">
                    <h1>Dr. Hee Yun Lee</h1>
                    <p>Professor & Endowed Academic Chair</p>
                    <br/>
                    <b><p>Office:</p></b>
                    <p>City, State, ZIP</p>
                    <br/>
                    <b><p>Lab:</p></b>
                    <p>City, State, ZIP</p>
                    <br/>
                    <p><a href="">email@email.com</a></p>
                    <p>123456789</p>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.172042453614!2d144.95373631568307!3d-37.81627967975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ceed0!2z44CSMzAwMCBWaWN0b3JpYSwg5qCq5byP5Lya56S-55Sw5Yy65LiK55uu77yS5LiB55uu!5e0!3m2!1sja!2sjp!4v1549449757488"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
      
                        aria-hidden="false"
                    ></iframe>
                </div>
      </div>
        </div>
    )
}