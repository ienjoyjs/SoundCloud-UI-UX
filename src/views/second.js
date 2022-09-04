import React from "react";

import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import Searchbar from "../components/searchbar";

import "./second.css";

const Second = (props) => {
  const history = useHistory();

  const handlePrev = () => {
    history.push("/first");
  };

  const handleContinue = () => {
    history.push("/third");
  };

  return (
    <div className="second-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="second-second">
        <div className="second-object"></div>
        <span className="second-text">
          <span>
            Tee is served
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="second-text002">
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
        <span className="second-text007">
          <span>UP TO 35% OFF</span>
        </span>
        <span className="second-text009">
          <span>Shop:</span>
        </span>
        <span className="second-text011">
          <span>Women</span>
        </span>
        <span className="second-text013">
          <span>Men</span>
        </span>
        <img
          src="/second_assets/bitmap6259-7xl-200h.png"
          alt="Bitmap6259"
          className="second-bitmap"
        />
        <img
          src="/second_assets/screenshot20200803at80657pm6260-nqeb-200h.png"
          alt="ScreenShot20200803at80657PM6260"
          className="second-screen-shot20200803at80657p-m"
        />
        <img
          src="/second_assets/rectangle6261-49ci-200h.png"
          alt="Rectangle6261"
          className="second-rectangle"
        />
        <span className="second-text015">
          <span>Shop boxer briefs</span>
        </span>
        <img
          src="/second_assets/rectanglecopy36263-zu1g-200h.png"
          alt="RectangleCopy36263"
          className="second-rectangle-copy3"
        />
        <span className="second-text017">
          <span>Look good, do good, feel good.</span>
        </span>
        <span className="second-text019">
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
          src="/second_assets/rectanglecopy256266-3nfb-200h.png"
          alt="RectangleCopy256266"
          className="second-rectangle-copy25"
        />
        <img
          src="/second_assets/rectanglecopy176267-k87d-200h.png"
          alt="RectangleCopy176267"
          className="second-rectangle-copy17"
        />
        <img
          src="/second_assets/rectanglecopy226268-f9a-500h.png"
          alt="RectangleCopy226268"
          className="second-rectangle-copy22"
        />
        <img
          src="/second_assets/rectanglecopy96269-51g-500h.png"
          alt="RectangleCopy96269"
          className="second-rectangle-copy9"
        />
        <img
          src="/second_assets/rectanglecopy26270-1m2-300h.png"
          alt="RectangleCopy26270"
          className="second-rectangle-copy2"
        />
        <img
          src="/second_assets/rectanglecopy106271-4c49-300h.png"
          alt="RectangleCopy106271"
          className="second-rectangle-copy10"
        />
        <img
          src="/second_assets/rectanglecopy146272-hlti-300h.png"
          alt="RectangleCopy146272"
          className="second-rectangle-copy14"
        />
        <img
          src="/second_assets/rectanglecopy196273-sa7-400h.png"
          alt="RectangleCopy196273"
          className="second-rectangle-copy19"
        />
        <img
          src="/second_assets/rectanglecopy56274-s9th-500h.png"
          alt="RectangleCopy56274"
          className="second-rectangle-copy5"
        />
        <img
          src="/second_assets/bitmap6275-104-200h.png"
          alt="Bitmap6275"
          className="second-bitmap01"
        />
        <img
          src="/second_assets/bitmap6276-u0kg-200h.png"
          alt="Bitmap6276"
          className="second-bitmap02"
        />
        <img
          src="/second_assets/bitmap6277-vp4p-200h.png"
          alt="Bitmap6277"
          className="second-bitmap03"
        />
        <img
          src="/second_assets/bitmap6278-yyen-200h.png"
          alt="Bitmap6278"
          className="second-bitmap04"
        />
        <img
          src="/second_assets/bitmap6279-scim-200h.png"
          alt="Bitmap6279"
          className="second-bitmap05"
        />
        <div className="second-country-flags-asia-japan">
          <div className="second-g-b">
            <img
              src="/second_assets/maski628-64t0o-200h.png"
              alt="MaskI628"
              className="second-mask"
            />
            <img
              src="/second_assets/maskcopyi628-7o8-200h.png"
              alt="MaskCopyI628"
              className="second-mask-copy"
            />
          </div>
        </div>
        <img
          src="/second_assets/bitmap6281-uk0j-200h.png"
          alt="Bitmap6281"
          className="second-bitmap06"
        />
        <img
          src="/second_assets/bitmap6282-a5to-200h.png"
          alt="Bitmap6282"
          className="second-bitmap07"
        />
        <img
          src="/second_assets/bitmap6283-bct9-200h.png"
          alt="Bitmap6283"
          className="second-bitmap08"
        />
        <img
          src="/second_assets/bitmap6284-871l-200h.png"
          alt="Bitmap6284"
          className="second-bitmap09"
        />
        <img
          src="/second_assets/bitmap6285-jl-200h.png"
          alt="Bitmap6285"
          className="second-bitmap10"
        />
        <img
          src="/second_assets/bitmap6286-w1ro-200h.png"
          alt="Bitmap6286"
          className="second-bitmap11"
        />
        <img
          src="/second_assets/bitmap6287-q78q-200h.png"
          alt="Bitmap6287"
          className="second-bitmap12"
        />
        <span className="second-text021">
          <span>
            Useful
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="second-text023">
          <span>Stores</span>
        </span>
        <span className="second-text025">
          <span>United Kingdom</span>
        </span>
        <span className="second-text027">
          <span>English</span>
        </span>
        <span className="second-text029">
          <span>
            <span>Free delivery for orders above €19.00</span>
            <br></br>
            <span>Delivered in 3 - 5 days</span>
          </span>
        </span>
        <span className="second-text034">
          <span>FAQ</span>
        </span>
        <span className="second-text036">
          <span>B2B</span>
        </span>
        <img
          src="/second_assets/rectangle6297-8s5a-200h.png"
          alt="Rectangle6297"
          className="second-rectangle01"
        />
        <img
          src="/second_assets/rectanglecopy26298-vr0r-1100w.png"
          alt="RectangleCopy26298"
        />
        <span className="second-text038">
          <span>© OneSevenTech 2020, All Rights Reserved</span>
        </span>
        <img
          src="/second_assets/purplecopy26300-75k-200h.png"
          alt="PurpleCopy26300"
          className="second-purple-copy2"
        />
        <span className="second-text040">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="second-text045">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/second_assets/rectanglecopy216303-8yv8-500h.png"
          alt="RectangleCopy216303"
          className="second-rectangle-copy21 second-rectangle-copy21"
        />
        <div className="second-group28copy3">
          <img
            src="/second_assets/rectangle6305-2318-200h.png"
            alt="Rectangle6305"
            className="second-rectangle02"
          />
          <span className="second-text050">
            <span>Productivity</span>
          </span>
          <img
            src="/second_assets/rectanglecopy356307-62kj-200h.png"
            alt="RectangleCopy356307"
            className="second-rectangle-copy35"
          />
          <img
            src="/second_assets/rectanglecopy446308-0z4p-200h.png"
            alt="RectangleCopy446308"
            className="second-rectangle-copy44"
          />
          <img
            src="/second_assets/rectanglecopy396309-qixr-200h.png"
            alt="RectangleCopy396309"
            className="second-rectangle-copy39"
          />
        </div>
        <span className="second-text052">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="second-text057">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/second_assets/rectanglecopy206312-2zd3-500h.png"
          alt="RectangleCopy206312"
          className="second-rectangle-copy20"
        />
        <div className="second-group28copy2">
          <img
            src="/second_assets/rectangle6314-mm3k-200h.png"
            alt="Rectangle6314"
            className="second-rectangle03"
          />
          <span className="second-text062">
            <span>SaaS</span>
          </span>
          <img
            src="/second_assets/rectanglecopy356316-1j8fl-200h.png"
            alt="RectangleCopy356316"
            className="second-rectangle-copy351"
          />
          <img
            src="/second_assets/rectanglecopy446317-b0gc-200h.png"
            alt="RectangleCopy446317"
            className="second-rectangle-copy441"
          />
          <img
            src="/second_assets/rectanglecopy396318-9vjc-200h.png"
            alt="RectangleCopy396318"
            className="second-rectangle-copy391"
          />
        </div>
        <span className="second-text064">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="second-text069">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/second_assets/rectanglecopy186321-0a4m-500h.png"
          alt="RectangleCopy186321"
          className="second-rectangle-copy18"
        />
        <div className="second-group28copy">
          <img
            src="/second_assets/rectangle6323-wojj-200h.png"
            alt="Rectangle6323"
            className="second-rectangle04"
          />
          <span className="second-text074">
            <span>Ed-tech</span>
          </span>
          <img
            src="/second_assets/rectanglecopy356325-vqw5-200h.png"
            alt="RectangleCopy356325"
            className="second-rectangle-copy352"
          />
          <img
            src="/second_assets/rectanglecopy446326-uvq5-200h.png"
            alt="RectangleCopy446326"
            className="second-rectangle-copy442"
          />
          <img
            src="/second_assets/rectanglecopy396327-c9ar-200h.png"
            alt="RectangleCopy396327"
            className="second-rectangle-copy392"
          />
        </div>
        <span className="second-text076">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="second-text081">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <div className="second-group4copy3">
          <div className="second-bodycopy2"></div>
          <div className="second-butonscopy2"></div>
          <div className="second-group49">
            <div className="second-group5">
              <div className="second-group12">
                <div className="second-group19">
                  <img
                    src="/second_assets/rectangle6343-rt-200h.png"
                    alt="Rectangle6343"
                    className="second-rectangle05"
                  />
                  <img
                    src="/second_assets/rectanglecopy766344-4jlf-200h.png"
                    alt="RectangleCopy766344"
                    className="second-rectangle-copy76"
                  />
                </div>
              </div>
            </div>
            <div className="second-group6">
              <div className="second-group12copy">
                <div className="second-group191">
                  <img
                    src="/second_assets/rectangle6350-c2xh-200h.png"
                    alt="Rectangle6350"
                    className="second-rectangle06"
                  />
                  <img
                    src="/second_assets/rectanglecopy766351-heji-200h.png"
                    alt="RectangleCopy766351"
                    className="second-rectangle-copy761"
                  />
                </div>
              </div>
            </div>
            <img
              src="/second_assets/rectanglecopy136352-7iag-200h.png"
              alt="RectangleCopy136352"
              className="second-rectangle-copy13"
            />
            <img
              src="/second_assets/rectangle6353-plxm-200h.png"
              alt="Rectangle6353"
              className="second-rectangle07"
            />
            <img
              src="/second_assets/rectanglecopy256354-yv7k-200h.png"
              alt="RectangleCopy256354"
              className="second-rectangle-copy251"
            />
            <img
              src="/second_assets/rectanglecopy266355-g2h9-200h.png"
              alt="RectangleCopy266355"
              className="second-rectangle-copy26"
            />
            <img
              src="/second_assets/rectanglecopy276356-ux8l-200h.png"
              alt="RectangleCopy276356"
              className="second-rectangle-copy27"
            />
          </div>
        </div>
        <div className="second-group21copy6">
          <div className="second-i-phone11copy3">
            <div className="second-i-phone11choose-color">
              <img
                src="/second_assets/black6360-aemwj-300h.png"
                alt="Black6360"
                className="second-black"
              />
            </div>
            <div className="second-placeyour-design">
              <div className="second-placeyour-design1"></div>
            </div>
          </div>
          <div className="second-group5copy">
            <div className="second-group121">
              <div className="second-group192">
                <img
                  src="/second_assets/rectangle6369-ug7e-200h.png"
                  alt="Rectangle6369"
                  className="second-rectangle08"
                />
                <img
                  src="/second_assets/rectanglecopy766370-3ykj-200h.png"
                  alt="RectangleCopy766370"
                  className="second-rectangle-copy762"
                />
              </div>
            </div>
          </div>
          <div className="second-group7">
            <div className="second-group6copy"></div>
            <div className="second-group122">
              <div className="second-group193">
                <img
                  src="/second_assets/rectangle6377-doka-200h.png"
                  alt="Rectangle6377"
                  className="second-rectangle09"
                />
                <img
                  src="/second_assets/rectanglecopy766378-vxg-200h.png"
                  alt="RectangleCopy766378"
                  className="second-rectangle-copy763"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="second-group4copy4">
          <div className="second-bodycopy21"></div>
          <div className="second-butonscopy21"></div>
          <div className="second-group491">
            <div className="second-group51">
              <div className="second-group123">
                <div className="second-group194">
                  <img
                    src="/second_assets/rectangle6392-qdrg-200h.png"
                    alt="Rectangle6392"
                    className="second-rectangle10"
                  />
                  <img
                    src="/second_assets/rectanglecopy766393-3k8-200h.png"
                    alt="RectangleCopy766393"
                    className="second-rectangle-copy764"
                  />
                </div>
              </div>
            </div>
            <div className="second-group61">
              <div className="second-group12copy1">
                <div className="second-group195">
                  <img
                    src="/second_assets/rectangle6399-ylwv-200h.png"
                    alt="Rectangle6399"
                    className="second-rectangle11"
                  />
                  <img
                    src="/second_assets/rectanglecopy766400-jpyp-200h.png"
                    alt="RectangleCopy766400"
                    className="second-rectangle-copy765"
                  />
                </div>
              </div>
            </div>
            <img
              src="/second_assets/rectanglecopy136401-e557-200h.png"
              alt="RectangleCopy136401"
              className="second-rectangle-copy131"
            />
            <img
              src="/second_assets/rectangle6402-pom9-200h.png"
              alt="Rectangle6402"
              className="second-rectangle12"
            />
            <img
              src="/second_assets/rectanglecopy256403-b1m-200h.png"
              alt="RectangleCopy256403"
              className="second-rectangle-copy252"
            />
            <img
              src="/second_assets/rectanglecopy266404-54t-200h.png"
              alt="RectangleCopy266404"
              className="second-rectangle-copy261"
            />
            <img
              src="/second_assets/rectanglecopy276405-aoig-200h.png"
              alt="RectangleCopy276405"
              className="second-rectangle-copy271"
            />
          </div>
        </div>
        <img
          src="/second_assets/rectangle6406-iglv-200h.png"
          alt="Rectangle6406"
          className="second-rectangle13"
        />
        <Searchbar />
        <span className="second-text090">
          <span>Billing</span>
        </span>
        <span className="second-text092">
          <span>Payment</span>
        </span>
        <span className="second-text094">
          <span>
            ***4342
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="second-text096">
          <span>
            408 Wilshire Blvd
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <div className="second-american-express">
          <img
            src="/second_assets/rectanglecopy46425-bbyr.svg"
            alt="RectangleCopy46425"
            className="second-rectangle-copy4"
          />
          <div className="second-american-expresslogo2018">
            <img
              src="/second_assets/path30826427-rkga.svg"
              alt="path30826427"
              className="second-path3082"
            />
            <img
              src="/second_assets/path30806428-7f3j.svg"
              alt="path30806428"
              className="second-path3080"
            />
            <img
              src="/second_assets/path30466429-cdke.svg"
              alt="path30466429"
              className="second-path3046"
            />
            <img
              src="/second_assets/path30486432-pnxf.svg"
              alt="path30486432"
              className="second-path3048"
            />
            <img
              src="/second_assets/path30506433-jaj.svg"
              alt="path30506433"
              className="second-path3050"
            />
            <img
              src="/second_assets/path30526434-6cp.svg"
              alt="path30526434"
              className="second-path3052"
            />
            <img
              src="/second_assets/path30546437-p9rf.svg"
              alt="path30546437"
              className="second-path3054"
            />
            <img
              src="/second_assets/path30566438-46w.svg"
              alt="path30566438"
              className="second-path3056"
            />
            <img
              src="/second_assets/path30586439-fam.svg"
              alt="path30586439"
              className="second-path3058"
            />
            <img
              src="/second_assets/path30606442-5tl4.svg"
              alt="path30606442"
              className="second-path3060"
            />
            <img
              src="/second_assets/path30626443-7hts.svg"
              alt="path30626443"
              className="second-path3062"
            />
            <img
              src="/second_assets/path30646444-dfxt.svg"
              alt="path30646444"
              className="second-path3064"
            />
            <img
              src="/second_assets/path30666445-w6ug.svg"
              alt="path30666445"
              className="second-path3066"
            />
            <img
              src="/second_assets/path30686446-g2qf.svg"
              alt="path30686446"
              className="second-path3068"
            />
            <img
              src="/second_assets/path30726449-u0q.svg"
              alt="path30726449"
              className="second-path3072"
            />
            <img
              src="/second_assets/path30746452-ltm.svg"
              alt="path30746452"
              className="second-path3074"
            />
            <img
              src="/second_assets/path30766453-5pp.svg"
              alt="path30766453"
              className="second-path3076"
            />
          </div>
        </div>
        <img
          src="/second_assets/rectanglecopy6454-t9vn-200h.png"
          alt="RectangleCopy6454"
          className="second-rectangle-copy"
        />
        <span className="second-text098">
          <span>$12</span>
        </span>
        <span className="second-text100">
          <span>/mo</span>
        </span>
        <span className="second-text102">
          <span>
            Charge
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <img
          src="/second_assets/rectanglecopy46458-w90g-200h.png"
          alt="RectangleCopy46458"
          className="second-rectangle-copy41"
        />
        <img
          src="/second_assets/rectanglecopy786459-0jb4-200h.png"
          alt="RectangleCopy786459"
          className="second-rectangle-copy78"
        />
        <img
          src="/second_assets/rectanglecopy46460-szx-200h.png"
          alt="RectangleCopy46460"
          className="second-rectangle-copy42"
        />
        <img
          src="/second_assets/rectanglecopy786461-4x87-200h.png"
          alt="RectangleCopy786461"
          className="second-rectangle-copy781"
        />
        <div className="second-tabbarcopy5">
          <img
            src="/second_assets/background6463-fndvi-200h.png"
            alt="background6463"
            className="second-background1"
          />
          <div className="second-bars-home-indicator-on-dark">
            <img
              src="/second_assets/homeindicatori646-2z9n-200h.png"
              alt="HomeIndicatorI646"
              className="second-home-indicator"
            />
          </div>
          <img
            src="/second_assets/more6465-sz7j.svg"
            alt="more6465"
            className="second-more"
          />
          <div className="second-tabs">
            <img
              src="/second_assets/rectangle26470-ytq8-200h.png"
              alt="Rectangle26470"
              className="second-rectangle2"
            />
            <span className="second-text104">3</span>
          </div>
          <div className="second-search">
            <img
              src="/second_assets/iconsearch6474-4b8.svg"
              alt="iconsearch6474"
              className="second-iconsearch"
            />
          </div>
          <img
            src="/second_assets/arrowright6479-ztwl.svg"
            alt="arrowright6479"
            className="second-arrowright"
          />
          <img
            src="/second_assets/arrowleft6480-66cq.svg"
            alt="arrowleft6480"
            className="second-arrowleft"
          />
        </div>
        <img
          src="/second_assets/shape6481-3x4a.svg"
          alt="Shape6481"
          className="second-shape"
        />
        <img
          src="/second_assets/rectanglecopy236510-7ya4-500w.png"
          alt="RectangleCopy236510"
          className="second-rectangle-copy23"
        />
        <img
          src="/second_assets/rectanglecopy166511-d8py-500w.png"
          alt="RectangleCopy166511"
          className="second-rectangle-copy16"
        />
        <img
          src="/second_assets/rectanglecopy76512-mh6f-200h.png"
          alt="RectangleCopy76512"
          className="second-rectangle-copy7"
        />
        <span className="second-text105">
          <span>Email</span>
        </span>
        <span className="second-text107">
          <span>@gmail.com</span>
        </span>
        <span className="second-text109" onClick={handleContinue}>
          <span>
            Continue
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <div onClick={handleContinue}>
          <img
            src="/second_assets/rectanglecopy76516-8djk-200h.png"
            alt="RectangleCopy76516"
            className="second-rectangle-copy71"
          />
          <span className="second-text111">
            <span>Email</span>
          </span>
          <span className="second-text113">
            <span>@gmail.com</span>
          </span>
          <span className="second-text115">
            <span>
              Continue
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
        </div>
        <div className="second-tabbarcopy6">
          <img
            src="/second_assets/background6521-4umh-200h.png"
            alt="background6521"
            className="second-background2"
          />
          <div className="second-bars-home-indicator-on-dark1">
            <img
              src="/second_assets/homeindicatori652-fboo-200h.png"
              alt="HomeIndicatorI652"
              className="second-home-indicator1"
            />
          </div>
          <img
            src="/second_assets/more6523-3gme.svg"
            alt="more6523"
            className="second-more1"
          />
          <div className="second-tabs1">
            <img
              src="/second_assets/rectangle26528-kmt-200h.png"
              alt="Rectangle26528"
              className="second-rectangle21"
            />
            <span className="second-text117">3</span>
          </div>
          <div className="second-search1">
            <img
              src="/second_assets/iconsearch6532-yma.svg"
              alt="iconsearch6532"
              className="second-iconsearch1"
            />
          </div>
          <img
            src="/second_assets/arrowright6537-ii86.svg"
            alt="arrowright6537"
            className="second-arrowright1"
          />
          <img
            src="/second_assets/arrowleft6538-eqm4.svg"
            alt="arrowleft6538"
            className="second-arrowleft1"
            onClick={handlePrev}
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
