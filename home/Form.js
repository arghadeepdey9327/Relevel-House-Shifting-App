const Form=()=>{
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            I am Shifting my
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">1 BHK</a></li>
          <li><a className="dropdown-item" href="#">2 BHK</a></li>
          <li><a className="dropdown-item" href="#">3 BHK</a></li>
          <li><a className="dropdown-item" href="#">3 + BHK</a></li>
          <li><a className="dropdown-item" href="#">FEW ITEMS</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown paddExtra">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Located In
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Bengaluru</a></li>
          <li><a className="dropdown-item" href="#">Chennai</a></li>
          <li><a className="dropdown-item" href="#">Coimbatore</a></li>
          <li><a className="dropdown-item" href="#">Hyderabad</a></li>
          <li><a className="dropdown-item" href="#">Kochi</a></li>
          <li><a className="dropdown-item" href="#">Mumbai</a></li>
            </ul>
          </li>  
          <li className="nav-item dropdown paddExtra">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            From
          </a>
          </li> 

          <li className="nav-item dropdown paddExtra">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            To
          </a>

          </li>
      
          <li className="nav-item dropdown paddExtra">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            On
          </a>

          </li>
          <li className="nav-item">
          <button class="btn btn-outline-success" type="submit">get Free Quote</button>
          </li>

            </ul> 
            </div>
        </div>
    </nav>
};
export default Form;
