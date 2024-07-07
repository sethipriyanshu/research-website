import { Link } from "react-router-dom";

export const SecondaryNavbar = () =>{
    return(
        <div>
                <div className="side-align">
              <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-sm">Menu</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <div
  className="ua_sb_layout--padded ua_contrast--default ua_layout--none"
  dir="LTR"
  data-note="This wrapper is for Storybook purposes only and can be removed in production code."
>
  <nav
    aria-label="Supplementary Navigation"
    className="ua_secondary-navigation"
    id="UA_SecondaryNav"
  >
    <ul className="ua_secondary-navigation_list">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/research">Research</Link></li>
      <li><Link to="/global">Global Engagement</Link></li>
      <li><Link to="/publications">Publications</Link></li>
      <li><Link to="/lab-members">Lab Members</Link></li>
      <li><Link to="/album">Lab Album</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</div>

    </ul>
  </div>
</div>
              
          </div>
        </div>
    )
}