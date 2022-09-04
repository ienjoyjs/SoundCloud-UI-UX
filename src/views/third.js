import React from "react";

import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import "./third.css";
import { ReactComponent as Arrow } from "../assets/arrow1.svg";
import Searchbar from "../components/searchbar";

const Third = (props) => {
  const history = useHistory();

  const handlePrev = () => {
    history.push("/first");
  };

  const handleCharge = () => {
    history.push("/sixth");
  };

  return (
    <div className="third-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="third-third">
        <div className="third-object"></div>
        <span className="third-text">
          <span>
            Tee is served
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="third-text002">
          <span>
            <span>Everybody</span>
            <br></br>
            <span>
              underwear
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
        </span>
        <span className="third-text007">
          <span>UP TO 35% OFF</span>
        </span>
        <span className="third-text009">
          <span>Shop:</span>
        </span>
        <span className="third-text011">
          <span>Women</span>
        </span>
        <span className="third-text013">
          <span>Men</span>
        </span>
        <img
          src="/third_assets/bitmap6581-ua7q-200h.png"
          alt="Bitmap6581"
          className="third-bitmap"
        />
        <img
          src="/third_assets/screenshot20200803at80657pm6582-ix5d-200h.png"
          alt="ScreenShot20200803at80657PM6582"
          className="third-screen-shot20200803at80657p-m"
        />
        <img
          src="/third_assets/rectangle6583-lefq-200h.png"
          alt="Rectangle6583"
          className="third-rectangle"
        />
        <span className="third-text015">
          <span>Shop boxer briefs</span>
        </span>
        <img
          src="/third_assets/rectanglecopy36585-daq-200h.png"
          alt="RectangleCopy36585"
          className="third-rectangle-copy3"
        />
        <span className="third-text017">
          <span>Look good, do good, feel good.</span>
        </span>
        <span className="third-text019">
          <span>
            Giftboxes
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <img
          src="/third_assets/rectanglecopy256588-t09j-200h.png"
          alt="RectangleCopy256588"
          className="third-rectangle-copy25"
        />
        <img
          src="/third_assets/rectanglecopy176589-gxe8-200h.png"
          alt="RectangleCopy176589"
          className="third-rectangle-copy17"
        />
        <img
          src="/third_assets/rectanglecopy226590-84f8-500h.png"
          alt="RectangleCopy226590"
          className="third-rectangle-copy22"
        />
        <img
          src="/third_assets/rectanglecopy96591-g3nn-500h.png"
          alt="RectangleCopy96591"
          className="third-rectangle-copy9"
        />
        <img
          src="/third_assets/rectanglecopy26592-w5y-300h.png"
          alt="RectangleCopy26592"
          className="third-rectangle-copy2"
        />
        <img
          src="/third_assets/rectanglecopy106593-482t-300h.png"
          alt="RectangleCopy106593"
          className="third-rectangle-copy10"
        />
        <img
          src="/third_assets/rectanglecopy146594-l7ne-300h.png"
          alt="RectangleCopy146594"
          className="third-rectangle-copy14"
        />
        <img
          src="/third_assets/rectanglecopy196595-ww88-400h.png"
          alt="RectangleCopy196595"
          className="third-rectangle-copy19"
        />
        <img
          src="/third_assets/rectanglecopy56596-zte-500h.png"
          alt="RectangleCopy56596"
          className="third-rectangle-copy5"
        />
        <img
          src="/third_assets/bitmap6597-h99d-200h.png"
          alt="Bitmap6597"
          className="third-bitmap01"
        />
        <img
          src="/third_assets/bitmap6598-tyjd-200h.png"
          alt="Bitmap6598"
          className="third-bitmap02"
        />
        <img
          src="/third_assets/bitmap6599-pnf5-200h.png"
          alt="Bitmap6599"
          className="third-bitmap03"
        />
        <img
          src="/third_assets/bitmap6600-l4qm-200h.png"
          alt="Bitmap6600"
          className="third-bitmap04"
        />
        <img
          src="/third_assets/bitmap6601-ddtu-200h.png"
          alt="Bitmap6601"
          className="third-bitmap05"
        />
        <div className="third-country-flags-asia-japan">
          <div className="third-g-b">
            <img
              src="/third_assets/maski660-yy6-200h.png"
              alt="MaskI660"
              className="third-mask"
            />
            <img
              src="/third_assets/maskcopyi660-in0a-200h.png"
              alt="MaskCopyI660"
              className="third-mask-copy"
            />
          </div>
        </div>
        <img
          src="/third_assets/bitmap6603-q8-200h.png"
          alt="Bitmap6603"
          className="third-bitmap06"
        />
        <img
          src="/third_assets/bitmap6604-3cn-200h.png"
          alt="Bitmap6604"
          className="third-bitmap07"
        />
        <img
          src="/third_assets/bitmap6605-n6gv-200h.png"
          alt="Bitmap6605"
          className="third-bitmap08"
        />
        <img
          src="/third_assets/bitmap6606-jvp8-200h.png"
          alt="Bitmap6606"
          className="third-bitmap09"
        />
        <img
          src="/third_assets/bitmap6607-6w6h-200h.png"
          alt="Bitmap6607"
          className="third-bitmap10"
        />
        <img
          src="/third_assets/bitmap6608-ju9e-200h.png"
          alt="Bitmap6608"
          className="third-bitmap11"
        />
        <img
          src="/third_assets/bitmap6609-e5n-200h.png"
          alt="Bitmap6609"
          className="third-bitmap12"
        />
        <span className="third-text021">
          <span>
            Useful
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="third-text023">
          <span>Stores</span>
        </span>
        <span className="third-text025">
          <span>United Kingdom</span>
        </span>
        <span className="third-text027">
          <span>English</span>
        </span>
        <span className="third-text029">
          <span>
            <span>Free delivery for orders above €19.00</span>
            <br></br>
            <span>Delivered in 3 - 5 days</span>
          </span>
        </span>
        <span className="third-text034">
          <span>FAQ</span>
        </span>
        <span className="third-text036">
          <span>B2B</span>
        </span>
        <img
          src="/third_assets/rectangle6619-qvja-200h.png"
          alt="Rectangle6619"
          className="third-rectangle01"
        />
        <img
          src="/third_assets/rectanglecopy26620-blgj-1100w.png"
          alt="RectangleCopy26620"
        />
        <span className="third-text038">
          <span>© OneSevenTech 2020, All Rights Reserved</span>
        </span>
        <img
          src="/third_assets/purplecopy26622-fsju-200h.png"
          alt="PurpleCopy26622"
          className="third-purple-copy2"
        />
        <span className="third-text040">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="third-text045">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/third_assets/rectanglecopy216625-5e3k-500h.png"
          alt="RectangleCopy216625"
          className="third-rectangle-copy21 third-rectangle-copy21"
        />
        <div className="third-group28copy3">
          <img
            src="/third_assets/rectangle6627-jd5h-200h.png"
            alt="Rectangle6627"
            className="third-rectangle02"
          />
          <span className="third-text050">
            <span>Productivity</span>
          </span>
          <img
            src="/third_assets/rectanglecopy356629-uvhq-200h.png"
            alt="RectangleCopy356629"
            className="third-rectangle-copy35"
          />
          <img
            src="/third_assets/rectanglecopy446630-m6mn-200h.png"
            alt="RectangleCopy446630"
            className="third-rectangle-copy44"
          />
          <img
            src="/third_assets/rectanglecopy396631-5hg6-200h.png"
            alt="RectangleCopy396631"
            className="third-rectangle-copy39"
          />
        </div>
        <span className="third-text052">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="third-text057">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/third_assets/rectanglecopy206634-3who-500h.png"
          alt="RectangleCopy206634"
          className="third-rectangle-copy20"
        />
        <div className="third-group28copy2">
          <img
            src="/third_assets/rectangle6636-yhar-200h.png"
            alt="Rectangle6636"
            className="third-rectangle03"
          />
          <span className="third-text062">
            <span>SaaS</span>
          </span>
          <img
            src="/third_assets/rectanglecopy356638-omli-200h.png"
            alt="RectangleCopy356638"
            className="third-rectangle-copy351"
          />
          <img
            src="/third_assets/rectanglecopy446639-1h7a-200h.png"
            alt="RectangleCopy446639"
            className="third-rectangle-copy441"
          />
          <img
            src="/third_assets/rectanglecopy396640-mxwd-200h.png"
            alt="RectangleCopy396640"
            className="third-rectangle-copy391"
          />
        </div>
        <span className="third-text064">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="third-text069">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/third_assets/rectanglecopy186643-rr7b-500h.png"
          alt="RectangleCopy186643"
          className="third-rectangle-copy18"
        />
        <div className="third-group28copy">
          <img
            src="/third_assets/rectangle6645-uusm-200h.png"
            alt="Rectangle6645"
            className="third-rectangle04"
          />
          <span className="third-text074">
            <span>Ed-tech</span>
          </span>
          <img
            src="/third_assets/rectanglecopy356647-xon-200h.png"
            alt="RectangleCopy356647"
            className="third-rectangle-copy352"
          />
          <img
            src="/third_assets/rectanglecopy446648-labo-200h.png"
            alt="RectangleCopy446648"
            className="third-rectangle-copy442"
          />
          <img
            src="/third_assets/rectanglecopy396649-312a-200h.png"
            alt="RectangleCopy396649"
            className="third-rectangle-copy392"
          />
        </div>
        <span className="third-text076">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="third-text081">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <div className="third-group4copy3">
          <div className="third-bodycopy2"></div>
          <div className="third-butonscopy2"></div>
          <div className="third-group49">
            <div className="third-group5">
              <div className="third-group12">
                <div className="third-group19">
                  <img
                    src="/third_assets/rectangle6665-hgc2-200h.png"
                    alt="Rectangle6665"
                    className="third-rectangle05"
                  />
                  <img
                    src="/third_assets/rectanglecopy766666-pev-200h.png"
                    alt="RectangleCopy766666"
                    className="third-rectangle-copy76"
                  />
                </div>
              </div>
            </div>
            <div className="third-group6">
              <div className="third-group12copy">
                <div className="third-group191">
                  <img
                    src="/third_assets/rectangle6672-1lq-200h.png"
                    alt="Rectangle6672"
                    className="third-rectangle06"
                  />
                  <img
                    src="/third_assets/rectanglecopy766673-95jw-200h.png"
                    alt="RectangleCopy766673"
                    className="third-rectangle-copy761"
                  />
                </div>
              </div>
            </div>
            <img
              src="/third_assets/rectanglecopy136674-ct1r-200h.png"
              alt="RectangleCopy136674"
              className="third-rectangle-copy13"
            />
            <img
              src="/third_assets/rectangle6675-s24j-200h.png"
              alt="Rectangle6675"
              className="third-rectangle07"
            />
            <img
              src="/third_assets/rectanglecopy256676-z6r-200h.png"
              alt="RectangleCopy256676"
              className="third-rectangle-copy251"
            />
            <img
              src="/third_assets/rectanglecopy266677-yi5-200h.png"
              alt="RectangleCopy266677"
              className="third-rectangle-copy26"
            />
            <img
              src="/third_assets/rectanglecopy276678-c5t-200h.png"
              alt="RectangleCopy276678"
              className="third-rectangle-copy27"
            />
          </div>
        </div>
        <div className="third-group21copy6">
          <div className="third-i-phone11copy3">
            <div className="third-i-phone11choose-color">
              <img
                src="/third_assets/black6682-p0hf-300h.png"
                alt="Black6682"
                className="third-black"
              />
            </div>
            <div className="third-placeyour-design">
              <div className="third-placeyour-design1"></div>
            </div>
          </div>
          <div className="third-group5copy">
            <div className="third-group121">
              <div className="third-group192">
                <img
                  src="/third_assets/rectangle6691-efqv-200h.png"
                  alt="Rectangle6691"
                  className="third-rectangle08"
                />
                <img
                  src="/third_assets/rectanglecopy766692-khc6-200h.png"
                  alt="RectangleCopy766692"
                  className="third-rectangle-copy762"
                />
              </div>
            </div>
          </div>
          <div className="third-group7">
            <div className="third-group6copy"></div>
            <div className="third-group122">
              <div className="third-group193">
                <img
                  src="/third_assets/rectangle6699-ir8-200h.png"
                  alt="Rectangle6699"
                  className="third-rectangle09"
                />
                <img
                  src="/third_assets/rectanglecopy766700-6zp8-200h.png"
                  alt="RectangleCopy766700"
                  className="third-rectangle-copy763"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="third-group4copy4">
          <div className="third-bodycopy21"></div>
          <div className="third-butonscopy21"></div>
          <div className="third-group491">
            <div className="third-group51">
              <div className="third-group123">
                <div className="third-group194">
                  <img
                    src="/third_assets/rectangle6714-iipc-200h.png"
                    alt="Rectangle6714"
                    className="third-rectangle10"
                  />
                  <img
                    src="/third_assets/rectanglecopy766715-j40r-200h.png"
                    alt="RectangleCopy766715"
                    className="third-rectangle-copy764"
                  />
                </div>
              </div>
            </div>
            <div className="third-group61">
              <div className="third-group12copy1">
                <div className="third-group195">
                  <img
                    src="/third_assets/rectangle6721-ttp-200h.png"
                    alt="Rectangle6721"
                    className="third-rectangle11"
                  />
                  <img
                    src="/third_assets/rectanglecopy766722-7k8-200h.png"
                    alt="RectangleCopy766722"
                    className="third-rectangle-copy765"
                  />
                </div>
              </div>
            </div>
            <img
              src="/third_assets/rectanglecopy136723-jn38-200h.png"
              alt="RectangleCopy136723"
              className="third-rectangle-copy131"
            />
            <img
              src="/third_assets/rectangle6724-1h6j-200h.png"
              alt="Rectangle6724"
              className="third-rectangle12"
            />
            <img
              src="/third_assets/rectanglecopy256725-61dd-200h.png"
              alt="RectangleCopy256725"
              className="third-rectangle-copy252"
            />
            <img
              src="/third_assets/rectanglecopy266726-u8k-200h.png"
              alt="RectangleCopy266726"
              className="third-rectangle-copy261"
            />
            <img
              src="/third_assets/rectanglecopy276727-7bgu-200h.png"
              alt="RectangleCopy276727"
              className="third-rectangle-copy271"
            />
          </div>
        </div>
        <img
          src="/third_assets/rectangle6728-dsfd-200h.png"
          alt="Rectangle6728"
          className="third-rectangle13"
        />
        <Searchbar />
        <span className="third-text090">
          <span>Billing</span>
        </span>
        <span className="third-text092">
          <span>Payment</span>
        </span>
        <span className="third-text094">
          <span>
            ***4342
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="third-text096">
          <span>
            408 Wilshire Blvd
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <div className="third-american-express">
          <img
            src="/third_assets/rectanglecopy46747-ak3e.svg"
            alt="RectangleCopy46747"
            className="third-rectangle-copy4"
          />
          <div className="third-american-expresslogo2018">
            <img
              src="/third_assets/path30826749-boz.svg"
              alt="path30826749"
              className="third-path3082"
            />
            <img
              src="/third_assets/path30806750-93bc.svg"
              alt="path30806750"
              className="third-path3080"
            />
            <img
              src="/third_assets/path30466751-hyy.svg"
              alt="path30466751"
              className="third-path3046"
            />
            <img
              src="/third_assets/path30486754-xhq9.svg"
              alt="path30486754"
              className="third-path3048"
            />
            <img
              src="/third_assets/path30506755-cgl5.svg"
              alt="path30506755"
              className="third-path3050"
            />
            <img
              src="/third_assets/path30526756-96uo.svg"
              alt="path30526756"
              className="third-path3052"
            />
            <img
              src="/third_assets/path30546759-15um.svg"
              alt="path30546759"
              className="third-path3054"
            />
            <img
              src="/third_assets/path30566760-jsa.svg"
              alt="path30566760"
              className="third-path3056"
            />
            <img
              src="/third_assets/path30586761-org.svg"
              alt="path30586761"
              className="third-path3058"
            />
            <img
              src="/third_assets/path30606764-u2z.svg"
              alt="path30606764"
              className="third-path3060"
            />
            <img
              src="/third_assets/path30626765-re44.svg"
              alt="path30626765"
              className="third-path3062"
            />
            <img
              src="/third_assets/path30646766-6zqw.svg"
              alt="path30646766"
              className="third-path3064"
            />
            <img
              src="/third_assets/path30666767-yer.svg"
              alt="path30666767"
              className="third-path3066"
            />
            <img
              src="/third_assets/path30686768-n2oh.svg"
              alt="path30686768"
              className="third-path3068"
            />
            <img
              src="/third_assets/path30726771-yt2m.svg"
              alt="path30726771"
              className="third-path3072"
            />
            <img
              src="/third_assets/path30746774-j0bg.svg"
              alt="path30746774"
              className="third-path3074"
            />
            <img
              src="/third_assets/path30766775-fhn.svg"
              alt="path30766775"
              className="third-path3076"
            />
          </div>
        </div>
        <img
          src="/third_assets/rectanglecopy6776-t45k-200h.png"
          alt="RectangleCopy6776"
          className="third-rectangle-copy"
        />
        <div onClick={handleCharge}>
          <span className="third-text098">
            <span>$12</span>
          </span>
          <span className="third-text100">
            <span>/mo</span>
          </span>
          <span className="third-text102">
            <span>
              Charge
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
        </div>
        <div className="third-group">
          <Arrow />
        </div>
        <Arrow className="third-rectangle-copy42" />
        <div className="third-tabbarcopy5">
          <img
            src="/third_assets/background6786-fsvf-200h.png"
            alt="background6786"
            className="third-background1"
          />
          <div className="third-bars-home-indicator-on-dark">
            <img
              src="/third_assets/homeindicatori678-pltk-200h.png"
              alt="HomeIndicatorI678"
              className="third-home-indicator"
            />
          </div>
          <img
            src="/third_assets/more6788-pvf.svg"
            alt="more6788"
            className="third-more"
          />
          <div className="third-tabs">
            <img
              src="/third_assets/rectangle26793-dvam-200h.png"
              alt="Rectangle26793"
              className="third-rectangle2"
            />
            <span className="third-text104">3</span>
          </div>
          <div className="third-search">
            <img
              src="/third_assets/iconsearch6797-4t8q.svg"
              alt="iconsearch6797"
              className="third-iconsearch"
            />
          </div>
          <img
            src="/third_assets/arrowright6802-157.svg"
            alt="arrowright6802"
            className="third-arrowright"
          />
          <img
            src="/third_assets/arrowleft6803-6sui.svg"
            alt="arrowleft6803"
            className="third-arrowleft"
            onClick={handlePrev}
          />
        </div>
        <img
          src="/third_assets/shape6804-bqeg.svg"
          alt="Shape6804"
          className="third-shape"
        />
      </div>
    </div>
  );
};

export default Third;
