let menu = document.getElementById("nav-bar1");
let data = `
<div id="nav-bar1">
<div class=" w-100  ">
      <nav class="navbar navbar-expand-lg h-nav  shadow  ">
        <div class="logo container  "><img src="/image/1.jpg" class="img-fluid logo mx-auto mx-lg-2" alt="">
        </div>
        <div class="container-fluid z">
          <a class="navbar-brand" href="#"><img src="logo.svg" class="" alt="" /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!--  -->
          <nav class="navbar mt-2 navbar-expand-lg navbar-light bg-light d-sm-block d-lg-none w-100 ">
         
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="nav-link  p" href="/accueil/ecole.html">ACCUEIL</a>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="nav-link dropdown-toggle p" href="/cycles/cycles.html" role="button" id="dropdownCycles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CYCLES</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownCycles">
                      <li><a class="dropdown-item p" href="/cycles/maternelle.html">MATERNNEILLE</a></li>
                      <li><a class="dropdown-item p" href="/cycles/primaire.html">PRIMMAIRE</a></li>
                      <li><a class="dropdown-item p" href="/cycles/college.html">COLLEGE</a></li>
                      <li><a class="dropdown-item p" href="/cycles/lycee.html">LYCEE</a></li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="nav-link dropdown-toggle p" href="/poles/poles1.html" role="button" id="dropdownPoles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PÔLES D'ACTIVITÉS</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownPoles">
                      <li><a class="dropdown-item p" href="/poles/poleA.html">Pôle Artistique</a></li>
                      <li><a class="dropdown-item p" href="/poles/poleSport.html">Pôle Sportif</a></li>
                      <li><a class="dropdown-item p" href="/poles/polecolturel.html">Pôle Culturel</a></li>
                      <li><a class="dropdown-item p" href="/poles/poleeco.html">Pôle Ecologie</a></li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="nav-link dropdown-toggle p text-capitalize" href="/A-propos/propos.html" role="button" id="dropdownAbout" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">À PROPOS DE NOUS</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownAbout">
                      <li><a class="dropdown-item p" href="/A-propos/equipes.html">Equipe Pédagogique</a></li>
                      <li><a class="dropdown-item p " href="/A-propos/mot.html">Mot Du Fondateur</a></li>
                      <li><a class="dropdown-item p" href="/A-propos/enseignement.html">Enseignement</a></li>
                      <li><a class="dropdown-item p" href="/A-propos/infrastructure.html">Infrastructure</a></li>
                      <li><a class="dropdown-item p" href="/A-propos/parent.html">Parents D’élèves</a></li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="nav-link dropdown-toggle p" href="/service/service.html" role="button" id="dropdownNews" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SERVICES</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownNews">
                      <li><a class="dropdown-item p" href="/service/trasnsport.html">Transport</a></li>
                      <li><a class="dropdown-item p" href="/service/kids.html">Kid’s Club</a></li>
                      <li><a class="dropdown-item p " href="/service/garde_manger.html">Garde Manger</a></li>
                      <li><a class="dropdown-item p " href="/service/activite.html">Activités Parascolaires</a></li>
                      <li><a class="dropdown-item p" href="/service/cours.html">Cours De Soutien</a></li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="nav-link  p" href="/actualite/actualite.html">ACTUALITÉS</a>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <a class="nav-link  p" href="/contact/contact.html">CONTACT</a>
                  </div>
                </li>
              </ul>
            </div>
        </nav>
          <!--  -->
          <div class="collapse navbar-collapse d-sm-none d-lg-block" id="">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item ms-auto pe-3 ">
                <div class="dropdown ">
                  <a
                    class="nav-link p"
                    href="/accueil/ecole.html"
                
                  >
                    ACCUEIL
                  </a>
                  <div class="container w-100 d-flex"></div>
                </div>
              </li>
              <div class="container">
                <li class="nav-item ms-auto pe-3 d-block">
                  <div class="dropdown">
                    <a
                    
                      class="nav-link dropdown-toggle p "
                      href="/cycles/cycles.html"
                    
                    >
                      CYCLES
                    </a>
                    <ul class="dropdown-menu a4" aria-labelledby="dropdownTrigger">
                      <div class="mather row d-flex g-3 w-100">
                        <div class="boy1 col-4 lh-lg">
                          <li class="d-flex icon d-block">
                            <a class="dropdown-item p" href="/cycles/maternelle.html">
                              <img
                                src="/image/alphabet.png"
                                class="img-fluid w-25 me-2"
                              />MATERNNEILLE</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item p" href="/cycles/primaire.html"
                              ><img
                                src="/image/cartable.png"
                                class="img-fluid w-25 me-2"
                                alt=""
                              />
                              PRIMMAIRE</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item p" href="/cycles/college.html"
                              ><img
                                src="/image/cahier-de-texte.png"
                                class="img-fluid w-25 me-2"
                                alt=""
                              />COLLEGE</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item p" href="/cycles/lycee.html"
                              ><img
                                src="/image/mortier.png"
                                class="img-fluid w-25 me-2"
                                alt=""
                              />LYCEE</a
                            >
                          </li>
                        </div>
                        <div class="boy2 col-4">
                          <p class="p1-nav pt-3 text-secondary">
                            Le Groupe Scolaire IMANE EL WIFAK accueille les enfants en
                            maternelle (petite section à partir de 3 ans, petite
                            section, moyenne section et grande section), en
                            primaire, au collège et au lycée.
                          </p>
                        </div>
                        <div class="boy3 col-4">
                          <img src="/image/e1.jpg" alt="" class="img-fluid pt-3" />
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
              </div>
              <li class="nav-item ms-auto pe-3">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle p"
                    href="/poles/poles1.html"
                   
                  >
                    Pôles d’activités
                  </a>
                  <ul
                    class="dropdown-menu a3"
                    aria-labelledby="dropdownTrigger"
                  >
                    <div class="mather row d-flex g-3 w-100">
                      <div class="boy1 col-4 lh-lg">
                        <li class="d-flex icon d-block">
                          <a class="dropdown-item p " href="/poles/poleA.html">
                            <img
                              src="/image/palette-de-peinture.png"
                              class="img-fluid w-25 me-2"
                            />Pôle Artistique</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/poles/poleSport.html"
                            ><img
                              src="/image/coupe.png"
                              class="img-fluid w-25 me-2"
                              alt=""
                            />
                            Pôle Sportif
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/poles/polecolturel.html"
                            ><img
                              src="/image/livre-ouvert.png"
                              class="img-fluid w-25 me-2"
                              alt=""
                            />Pôle Culturel</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/poles/poleeco.html"
                            ><img
                              src="/image/ecologique.png"
                              class="img-fluid w-25 me-2"
                              alt=""
                            />Pôle Ecologie</a
                          >
                        </li>
                      </div>
                      <div class="boy2 col-4">
                        <p class="p1-nav pt-3 text-secondary">
                          Nos différents pôles proposent aux élèves des
                          activités artistiques, culturelles et sportives ainsi
                          que la sensibilisation au respect de l’environnement
                          afin de développer des savoir-faire.
                        </p>
                      </div>
                      <div class="boy3 col-4">
                        <img
                          src="/image/maternelleFCPE.jpg"
                          alt=""
                          class="img-fluid pt-4"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li class="nav-item ms-auto pe-3">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle p"
                    href="/A-propos/propos.html"
                              
                  >
                    À propos de nous
                  </a>
                  <ul
                    class="dropdown-menu a2"
                    aria-labelledby="dropdownTrigger"
                  >
                    <div class="mather row d-flex  w-100">
                      <div class="boy1 col-4 g-4 lh-lg">
                        <li class="d-flex icon d-block">
                          <a class="dropdown-item p" href="/A-propos/equipes.html">
                            Equipe Pédagogique</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/A-propos/mot.html"
                            >
                            Mot Du Fondateur</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/A-propos/enseignement.html"
                            >Enseignement</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/A-propos/infrastructure.html"
                            >Infrastructure</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/A-propos/parent.html"
                            >Parents D’élèves</a
                          >
                        </li>
                      </div>
                      <div class="boy2 pt-4 pb-2 col-4">
                        <p class="p1-nav text-secondary" >
                          Depuis sa fondation en 2005, le Groupe scolaire IMANE EL WIFAK situé à Casablanca a acquis au fil du temps une
                          solide expérience dans l’éducation et la formation de
                          nos jeunes générations.
                        </p>
                      </div>
                      <div class="boy3 col-4">
                        <img src="/image/qui.png" alt="" class="img-fluid h-100" />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li class="nav-item ms-auto pe-3">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle p"
                    href="/service/service.html"
                    
                  >
                  SERVICES
                  </a>
                  <ul
                    class="dropdown-menu a1"
                    aria-labelledby="dropdownTrigger"
                  >
                    <div class="mather row d-flex g-3 w-100">
                      <div class="boy1 col-4 lh-lg">
                        <li class="d-flex icon d-block">
                          <a class="dropdown-item p" href="/service/trasnsport.html">
                            Transport</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/service/kids.html"
                            >
                            Kid’s Club</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/service/garde_manger.html"
                            >Garde Manger</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item p" href="/service/activite.html"
                            >Activités <br> Parascolaires</a
                          >
                        </li>
                        <a class="dropdown-item p" href="/service/cours.html"
                        >Cours De Soutien</a
                      >
                    </li>
                      </div>
                      <div class="boy2 col-4">
                        <p class="p1-nav pt-3 text-secondary">
                          Le Groupe Scolaire IMANE EL WIFAK accueille les enfants en
                          maternelle (petite section à partir de 3 ans, petite
                          section, moyenne section et grande section), en
                          primaire, au collège et au lycée.
                        </p>
                      </div>
                      <div class="boy3 col-4">
                        <img src="/image/w.jpg" alt="" class="img-fluid pt-4" />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li class="nav-item ms-auto pe-3">
                <div class="dropdown">
                  <a
                    class="nav-link p"
                    href="/actualite/actualite.html"
               
                  >
                    
                    Actualités
                  </a>
                </div>
              </li>

              <li class="nav-item ms-auto pe-3">
                <div class="dropdown">
                  <a
                    class="nav-link p"
                    href="/contact/contact.html"
                  
                  >
                    CONTACT
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
    `;
menu.innerHTML = data;
