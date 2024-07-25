import { SecondaryNavbar } from "../components/secondary-navbar";
import homeImage1 from "../images/home01.gif";
import homeImage2 from "../images/home02.png";
import back from '../images/back.jpg'; 

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
    <button className="ua_cta" onClick={downloadPdf}>Download my CV</button>
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
      <div className="home-images">
        <img src={homeImage1} alt="Description of image 1" />
        <img src={homeImage2} alt="Description of image 2" />
      </div>
    </div>

        </div>
    )
}