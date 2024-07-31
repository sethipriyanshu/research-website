import { SecondaryNavbar } from "../components/secondary-navbar";
import homeImage1 from "../images/home01.gif";
import homeImage2 from "../images/home02.png";
import back from '../images/back.jpg'; 
import contact_img from '../images/contact.jpg';

export const Home = () =>{
  const downloadPdf = () => {
    const url = process.env.PUBLIC_URL + '/cv_hee_yun_lee.pdf'; 
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'cv_hee_yun_lee.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
              <h1 style={{fontSize:'40px'}}>Hee Lab</h1>
              <p style={{fontSize:'20px'}}>The School of Social Work</p>
              <div className="ua_component_wrapper ua_custom-class">
  </div>
            <SecondaryNavbar/>
          </div>
      </div>

      </div>
     
    </article>
  </div>

  <div className="home-content">
      <p className="home-text">
        We study the relationship between stress, aging and metabolism, focusing on the following projects:
        (1) Stress-inducible Sestrins and their role in age- and obesity-associated metabolic pathologies,
        (2) Biochemical mechanisms underlying physiological functions of Sestrins, (3) Pathogenetic mechanisms 
        of how autophagy is abrogated in human diseases including non-alcoholic fatty liver disease (NAFLD) and movement 
        disorders, (4) Stress-induced protein inclusions and RNA granules, (5) Single cell-level understanding of 
        stress-induced transcriptome changes, and (6) Technology development for single-cell and subcellular
        studies of spatial transcriptome and proteome.
      </p>


    <div className='contact_section'>
        <img src={contact_img}></img>
        <div className="text-info">
                    <h1>Dr. Hee Yun Lee</h1>
                    <p>Professor & Endowed Academic Chair</p>
                    <br/>
                    <b><p>Office:</p></b>
                    <p>1022 Little Hall, Box 870314, Tuscaloosa, Alabama</p>
                    <br/>
                    <p><a href="" style={{color:"blue"}}>hlee94@ua.edu</a></p>
                    <p>205-348-6553</p>
                    <br />
                    <div className="ua_component_wrapper ua_custom-class">
    <button className="ua_cta" onClick={downloadPdf}>Download my CV</button>
  </div>
                </div>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.2110499828627!2d-87.54804012485982!3d33.20856286180825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888602993b0ccf9b%3A0xbb276ece861283db!2sLittle%20Hall%2C%20Tuscaloosa%2C%20AL%2035401!5e0!3m2!1sen!2sus!4v1721763943549!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
      
                        aria-hidden="false"
                    ></iframe>
                </div>
                
              
      </div>
    </div>

        </div>
    )
}