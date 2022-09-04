import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import $ from "jquery";

import { Helmet } from "react-helmet";

import "./first.css";
import { toast } from "react-toastify";
import Keyboard from "../components/keyboard";
import Searchbar from "../components/searchbar";

const First = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyDown = (key) => {
    if (key === "go") {
      $.ajax({
        url: `https://api.stripe.com/v1/search?query=email:${email}@email.com&prefix=false`,
        headers: {
          authorization:
            "Bearer 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",
        },
        success: (data) => {
          if (data.data.length > 0) {
            history.push("/second");
          } else {
            toast.error("Invalid Email Address");
          }
        },
        error: (error) => {
          toast.error(error.statusText);
        },
      });
    } else if (key === "backspace") {
      setEmail((email) => email.slice(0, email.length - 1));
    } else if (key === "123") {
    } else if (key === "uppercase") {
    } else {
      setEmail((email) => email + key);
    }
  };

  return (
    <div className="first-container">
      <Helmet>
        <title>Test - First</title>
      </Helmet>
      <div className="first-first">
        <div className="first-object"></div>
        <span className="first-text">
          <span>
            Tee is served
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="first-text002">
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
        <span className="first-text007">
          <span>UP TO 35% OFF</span>
        </span>
        <span className="first-text009">
          <span>Shop:</span>
        </span>
        <span className="first-text011">
          <span>Women</span>
        </span>
        <span className="first-text013">
          <span>Men</span>
        </span>
        <img
          src="/first_assets/bitmap3361-kixj-200h.png"
          alt="Bitmap3361"
          className="first-bitmap"
        />
        <img
          src="/first_assets/screenshot20200803at80657pm3361-2mod-200h.png"
          alt="ScreenShot20200803at80657PM3361"
          className="first-screen-shot20200803at80657p-m"
        />
        <img
          src="/first_assets/rectangle3362-2b9l-200h.png"
          alt="Rectangle3362"
          className="first-rectangle"
        />
        <span className="first-text015">
          <span>Shop boxer briefs</span>
        </span>
        <img
          src="/first_assets/rectanglecopy33362-it9i-200h.png"
          alt="RectangleCopy33362"
          className="first-rectangle-copy3"
        />
        <span className="first-text017">
          <span>Look good, do good, feel good.</span>
        </span>
        <span className="first-text019">
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
          src="/first_assets/rectanglecopy253362-04hg-200h.png"
          alt="RectangleCopy253362"
          className="first-rectangle-copy25"
        />
        <img
          src="/first_assets/rectanglecopy173362-sylb-200h.png"
          alt="RectangleCopy173362"
          className="first-rectangle-copy17"
        />
        <img
          src="/first_assets/rectanglecopy223362-shse-500h.png"
          alt="RectangleCopy223362"
          className="first-rectangle-copy22"
        />
        <img
          src="/first_assets/rectanglecopy93362-6qn5-500h.png"
          alt="RectangleCopy93362"
          className="first-rectangle-copy9"
        />
        <img
          src="/first_assets/rectanglecopy23362-a7w-300h.png"
          alt="RectangleCopy23362"
          className="first-rectangle-copy2"
        />
        <img
          src="/first_assets/rectanglecopy103363-5ggb-300h.png"
          alt="RectangleCopy103363"
          className="first-rectangle-copy10"
        />
        <img
          src="/first_assets/rectanglecopy143363-s5u-300h.png"
          alt="RectangleCopy143363"
          className="first-rectangle-copy14"
        />
        <img
          src="/first_assets/rectanglecopy193363-po1d-400h.png"
          alt="RectangleCopy193363"
          className="first-rectangle-copy19"
        />
        <img
          src="/first_assets/rectanglecopy53363-3ya-500h.png"
          alt="RectangleCopy53363"
          className="first-rectangle-copy5"
        />
        <img
          src="/first_assets/bitmap3363-rrlp-200h.png"
          alt="Bitmap3363"
          className="first-bitmap01"
        />
        <img
          src="/first_assets/bitmap3363-mlho-200h.png"
          alt="Bitmap3363"
          className="first-bitmap02"
        />
        <img
          src="/first_assets/bitmap3363-6elu-200h.png"
          alt="Bitmap3363"
          className="first-bitmap03"
        />
        <img
          src="/first_assets/bitmap3363-4jfp-200h.png"
          alt="Bitmap3363"
          className="first-bitmap04"
        />
        <img
          src="/first_assets/bitmap3363-rgu-200h.png"
          alt="Bitmap3363"
          className="first-bitmap05"
        />
        <div className="first-country-flags-asia-japan">
          <div className="first-g-b">
            <img
              src="/first_assets/maski336-1lie-200h.png"
              alt="MaskI336"
              className="first-mask"
            />
            <img
              src="/first_assets/maskcopyi336-0ybf-200h.png"
              alt="MaskCopyI336"
              className="first-mask-copy"
            />
          </div>
        </div>
        <img
          src="/first_assets/bitmap3364-z9yd-200h.png"
          alt="Bitmap3364"
          className="first-bitmap06"
        />
        <img
          src="/first_assets/bitmap3364-0c9-200h.png"
          alt="Bitmap3364"
          className="first-bitmap07"
        />
        <img
          src="/first_assets/bitmap3364-r6c-200h.png"
          alt="Bitmap3364"
          className="first-bitmap08"
        />
        <img
          src="/first_assets/bitmap3364-ab1h-200h.png"
          alt="Bitmap3364"
          className="first-bitmap09"
        />
        <img
          src="/first_assets/bitmap3364-6rpd-200h.png"
          alt="Bitmap3364"
          className="first-bitmap10"
        />
        <img
          src="/first_assets/bitmap3364-pgo-200h.png"
          alt="Bitmap3364"
          className="first-bitmap11"
        />
        <img
          src="/first_assets/bitmap3364-vkle-200h.png"
          alt="Bitmap3364"
          className="first-bitmap12"
        />
        <span className="first-text021">
          <span>
            Useful
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="first-text023">
          <span>Stores</span>
        </span>
        <span className="first-text025">
          <span>United Kingdom</span>
        </span>
        <span className="first-text027">
          <span>English</span>
        </span>
        <span className="first-text029">
          <span>
            <span>Free delivery for orders above €19.00</span>
            <br></br>
            <span>Delivered in 3 - 5 days</span>
          </span>
        </span>
        <span className="first-text034">
          <span>FAQ</span>
        </span>
        <span className="first-text036">
          <span>B2B</span>
        </span>
        <img
          src="/first_assets/rectangle3365-xir-200h.png"
          alt="Rectangle3365"
          className="first-rectangle01"
        />
        <img
          src="/first_assets/rectanglecopy23365-65cr-1100w.png"
          alt="RectangleCopy23365"
        />
        <span className="first-text038">
          <span>© OneSevenTech 2020, All Rights Reserved</span>
        </span>
        <img
          src="/first_assets/purplecopy23365-52y-200h.png"
          alt="PurpleCopy23365"
          className="first-purple-copy2"
        />
        <span className="first-text040">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="first-text045">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/first_assets/rectanglecopy213366-w2ay-500h.png"
          alt="RectangleCopy213366"
          className="first-rectangle-copy21 first-rectangle-copy21"
        />
        <div className="first-group28copy3">
          <img
            src="/first_assets/rectangle3366-m52m-200h.png"
            alt="Rectangle3366"
            className="first-rectangle02"
          />
          <span className="first-text050">
            <span>Productivity</span>
          </span>
          <img
            src="/first_assets/rectanglecopy353366-iab8-200h.png"
            alt="RectangleCopy353366"
            className="first-rectangle-copy35"
          />
          <img
            src="/first_assets/rectanglecopy443366-p1j-200h.png"
            alt="RectangleCopy443366"
            className="first-rectangle-copy44"
          />
          <img
            src="/first_assets/rectanglecopy393366-zqlq-200h.png"
            alt="RectangleCopy393366"
            className="first-rectangle-copy39"
          />
        </div>
        <span className="first-text052">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="first-text057">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/first_assets/rectanglecopy203367-v2x9-500h.png"
          alt="RectangleCopy203367"
          className="first-rectangle-copy20"
        />
        <div className="first-group28copy2">
          <img
            src="/first_assets/rectangle3367-yv4-200h.png"
            alt="Rectangle3367"
            className="first-rectangle03"
          />
          <span className="first-text062">
            <span>SaaS</span>
          </span>
          <img
            src="/first_assets/rectanglecopy353367-1rbg-200h.png"
            alt="RectangleCopy353367"
            className="first-rectangle-copy351"
          />
          <img
            src="/first_assets/rectanglecopy443367-ppn-200h.png"
            alt="RectangleCopy443367"
            className="first-rectangle-copy441"
          />
          <img
            src="/first_assets/rectanglecopy393367-chse-200h.png"
            alt="RectangleCopy393367"
            className="first-rectangle-copy391"
          />
        </div>
        <span className="first-text064">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="first-text069">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/first_assets/rectanglecopy183368-4px-500h.png"
          alt="RectangleCopy183368"
          className="first-rectangle-copy18"
        />
        <div className="first-group28copy">
          <img
            src="/first_assets/rectangle3368-08k-200h.png"
            alt="Rectangle3368"
            className="first-rectangle04"
          />
          <span className="first-text074">
            <span>Ed-tech</span>
          </span>
          <img
            src="/first_assets/rectanglecopy353368-sayd-200h.png"
            alt="RectangleCopy353368"
            className="first-rectangle-copy352"
          />
          <img
            src="/first_assets/rectanglecopy443368-qlen-200h.png"
            alt="RectangleCopy443368"
            className="first-rectangle-copy442"
          />
          <img
            src="/first_assets/rectanglecopy393368-naxq-200h.png"
            alt="RectangleCopy393368"
            className="first-rectangle-copy392"
          />
        </div>
        <span className="first-text076">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="first-text081">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <div className="first-group4copy3">
          <div className="first-bodycopy2"></div>
          <div className="first-butonscopy2"></div>
          <div className="first-group49">
            <div className="first-group5">
              <div className="first-group12">
                <div className="first-group19">
                  <img
                    src="/first_assets/rectangle3370-adrl-200h.png"
                    alt="Rectangle3370"
                    className="first-rectangle05"
                  />
                  <img
                    src="/first_assets/rectanglecopy763370-kb2u-200h.png"
                    alt="RectangleCopy763370"
                    className="first-rectangle-copy76"
                  />
                </div>
              </div>
            </div>
            <div className="first-group6">
              <div className="first-group12copy">
                <div className="first-group191">
                  <img
                    src="/first_assets/rectangle3370-7cu-200h.png"
                    alt="Rectangle3370"
                    className="first-rectangle06"
                  />
                  <img
                    src="/first_assets/rectanglecopy763371-s7y-200h.png"
                    alt="RectangleCopy763371"
                    className="first-rectangle-copy761"
                  />
                </div>
              </div>
            </div>
            <img
              src="/first_assets/rectanglecopy133371-xdhs-200h.png"
              alt="RectangleCopy133371"
              className="first-rectangle-copy13"
            />
            <img
              src="/first_assets/rectangle3371-5m89-200h.png"
              alt="Rectangle3371"
              className="first-rectangle07"
            />
            <img
              src="/first_assets/rectanglecopy253371-nho8-200h.png"
              alt="RectangleCopy253371"
              className="first-rectangle-copy251"
            />
            <img
              src="/first_assets/rectanglecopy263371-i8k9-200h.png"
              alt="RectangleCopy263371"
              className="first-rectangle-copy26"
            />
            <img
              src="/first_assets/rectanglecopy273371-c81p-200h.png"
              alt="RectangleCopy273371"
              className="first-rectangle-copy27"
            />
          </div>
        </div>
        <div className="first-group21copy6">
          <div className="first-i-phone11copy3">
            <div className="first-i-phone11choose-color">
              <img
                src="/first_assets/black3371-ce46-300h.png"
                alt="Black3371"
                className="first-black"
              />
            </div>
            <div className="first-placeyour-design">
              <div className="first-placeyour-design1"></div>
            </div>
          </div>
          <div className="first-group5copy">
            <div className="first-group121">
              <div className="first-group192">
                <img
                  src="/first_assets/rectangle3372-9eh-200h.png"
                  alt="Rectangle3372"
                  className="first-rectangle08"
                />
                <img
                  src="/first_assets/rectanglecopy763372-ju3-200h.png"
                  alt="RectangleCopy763372"
                  className="first-rectangle-copy762"
                />
              </div>
            </div>
          </div>
          <div className="first-group7">
            <div className="first-group6copy"></div>
            <div className="first-group122">
              <div className="first-group193">
                <img
                  src="/first_assets/rectangle3373-vu18-200h.png"
                  alt="Rectangle3373"
                  className="first-rectangle09"
                />
                <img
                  src="/first_assets/rectanglecopy763373-wwzb-200h.png"
                  alt="RectangleCopy763373"
                  className="first-rectangle-copy763"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="first-group4copy4">
          <div className="first-bodycopy21"></div>
          <div className="first-butonscopy21"></div>
          <div className="first-group491">
            <div className="first-group51">
              <div className="first-group123">
                <div className="first-group194">
                  <img
                    src="/first_assets/rectangle3375-hzn-200h.png"
                    alt="Rectangle3375"
                    className="first-rectangle10"
                  />
                  <img
                    src="/first_assets/rectanglecopy763375-gcrk-200h.png"
                    alt="RectangleCopy763375"
                    className="first-rectangle-copy764"
                  />
                </div>
              </div>
            </div>
            <div className="first-group61">
              <div className="first-group12copy1">
                <div className="first-group195">
                  <img
                    src="/first_assets/rectangle3375-kjlq-200h.png"
                    alt="Rectangle3375"
                    className="first-rectangle11"
                  />
                  <img
                    src="/first_assets/rectanglecopy763375-9qhc-200h.png"
                    alt="RectangleCopy763375"
                    className="first-rectangle-copy765"
                  />
                </div>
              </div>
            </div>
            <img
              src="/first_assets/rectanglecopy133376-yd2o-200h.png"
              alt="RectangleCopy133376"
              className="first-rectangle-copy131"
            />
            <img
              src="/first_assets/rectangle3376-und8-200h.png"
              alt="Rectangle3376"
              className="first-rectangle12"
            />
            <img
              src="/first_assets/rectanglecopy253376-45y-200h.png"
              alt="RectangleCopy253376"
              className="first-rectangle-copy252"
            />
            <img
              src="/first_assets/rectanglecopy263376-ni1j-200h.png"
              alt="RectangleCopy263376"
              className="first-rectangle-copy261"
            />
            <img
              src="/first_assets/rectanglecopy273376-5aih-200h.png"
              alt="RectangleCopy273376"
              className="first-rectangle-copy271"
            />
          </div>
        </div>
        <img
          src="/first_assets/rectangle3376-co-200h.png"
          alt="Rectangle3376"
          className="first-rectangle13"
        />
        <Searchbar />
        <span className="first-text090">
          <span>Billing</span>
        </span>
        <span className="first-text092">
          <span>Payment</span>
        </span>
        <span className="first-text094">
          <span>
            ***4342
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="first-text096">
          <span>
            408 Wilshire Blvd
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <div className="first-american-express">
          <img
            src="/first_assets/rectanglecopy43378-443r.svg"
            alt="RectangleCopy43378"
            className="first-rectangle-copy4"
          />
          <div className="first-american-expresslogo2018">
            <img
              src="/first_assets/path30823378-eldt.svg"
              alt="path30823378"
              className="first-path3082"
            />
            <img
              src="/first_assets/path30803378-t2v.svg"
              alt="path30803378"
              className="first-path3080"
            />
            <img
              src="/first_assets/path30463378-pxuo.svg"
              alt="path30463378"
              className="first-path3046"
            />
            <img
              src="/first_assets/path30483379-o8s.svg"
              alt="path30483379"
              className="first-path3048"
            />
            <img
              src="/first_assets/path30503379-ldqq.svg"
              alt="path30503379"
              className="first-path3050"
            />
            <img
              src="/first_assets/path30523379-b06.svg"
              alt="path30523379"
              className="first-path3052"
            />
            <img
              src="/first_assets/path30543379-uen.svg"
              alt="path30543379"
              className="first-path3054"
            />
            <img
              src="/first_assets/path30563379-mywf.svg"
              alt="path30563379"
              className="first-path3056"
            />
            <img
              src="/first_assets/path30583379-ozqh.svg"
              alt="path30583379"
              className="first-path3058"
            />
            <img
              src="/first_assets/path30603380-cpho.svg"
              alt="path30603380"
              className="first-path3060"
            />
            <img
              src="/first_assets/path30623380-djjl.svg"
              alt="path30623380"
              className="first-path3062"
            />
            <img
              src="/first_assets/path30643380-1umi.svg"
              alt="path30643380"
              className="first-path3064"
            />
            <img
              src="/first_assets/path30663380-vowk.svg"
              alt="path30663380"
              className="first-path3066"
            />
            <img
              src="/first_assets/path30683380-mec.svg"
              alt="path30683380"
              className="first-path3068"
            />
            <img
              src="/first_assets/path30723380-xwzp.svg"
              alt="path30723380"
              className="first-path3072"
            />
            <img
              src="/first_assets/path30743381-wbvb.svg"
              alt="path30743381"
              className="first-path3074"
            />
            <img
              src="/first_assets/path30763381-hr25.svg"
              alt="path30763381"
              className="first-path3076"
            />
          </div>
        </div>
        <img
          src="/first_assets/rectanglecopy3381-t33-200h.png"
          alt="RectangleCopy3381"
          className="first-rectangle-copy"
        />
        <span className="first-text098">
          <span>$12</span>
        </span>
        <span className="first-text100">
          <span>/mo</span>
        </span>
        <span className="first-text102">
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
          src="/first_assets/rectanglecopy43381-f1wp-200h.png"
          alt="RectangleCopy43381"
          className="first-rectangle-copy41"
        />
        <img
          src="/first_assets/rectanglecopy783381-2vj-200h.png"
          alt="RectangleCopy783381"
          className="first-rectangle-copy78"
        />
        <img
          src="/first_assets/rectanglecopy43381-5q4-200h.png"
          alt="RectangleCopy43381"
          className="first-rectangle-copy42"
        />
        <img
          src="/first_assets/rectanglecopy783382-d4rf-200h.png"
          alt="RectangleCopy783382"
          className="first-rectangle-copy781"
        />
        <div className="first-tabbarcopy5">
          <img
            src="/first_assets/background3382-5rwa-200h.png"
            alt="background3382"
            className="first-background1"
          />
          <div className="first-bars-first-indicator-on-dark">
            <img
              src="/first_assets/firstindicatori338-dsfo-200h.png"
              alt="FirstIndicatorI338"
              className="first-first-indicator"
            />
          </div>
          <img
            src="/first_assets/more3382-j27m.svg"
            alt="more3382"
            className="first-more"
          />
          <div className="first-tabs">
            <img
              src="/first_assets/rectangle23382-8bdy-200h.png"
              alt="Rectangle23382"
              className="first-rectangle2"
            />
            <span className="first-text104">3</span>
          </div>
          <div className="first-search">
            <img
              src="/first_assets/iconsearch3383-im5r.svg"
              alt="iconsearch3383"
              className="first-iconsearch"
            />
          </div>
          <img
            src="/first_assets/arrowright3383-xemv.svg"
            alt="arrowright3383"
            className="first-arrowright"
          />
          <img
            src="/first_assets/arrowleft3383-hgorh.svg"
            alt="arrowleft3383"
            className="first-arrowleft"
          />
        </div>
        <img
          src="/first_assets/shape3384-ufmj.svg"
          alt="Shape3384"
          className="first-shape"
        />
        <img
          src="/first_assets/rectanglecopy233386-5pm-500w.png"
          alt="RectangleCopy233386"
          className="first-rectangle-copy23"
        />
        <img
          src="/first_assets/rectanglecopy163387-jjjl-500w.png"
          alt="RectangleCopy163387"
          className="first-rectangle-copy16"
        />
        <img
          src="/first_assets/rectanglecopy73387-t7ie-200h.png"
          alt="RectangleCopy73387"
          className="first-rectangle-copy7"
        />
        <img
          src="/first_assets/rectanglecopy73387-ypgj-200h.png"
          alt="RectangleCopy73387"
          className="first-rectangle-copy71"
        />
        <span className="first-text105">
          <input
            id="email"
            type="text"
            placeholder="user@example.com"
            onChange={handleChangeEmail}
            value={email}
            className="email-input"
          />
        </span>
        <div className="first-tabbarcopy6">
          <img
            src="/first_assets/background3387-amg-200h.png"
            alt="background3387"
            className="first-background2"
          />
          <div className="first-bars-first-indicator-on-dark1">
            <img
              src="/first_assets/firstindicatori338-ey37-200h.png"
              alt="FirstIndicatorI338"
              className="first-first-indicator1"
            />
          </div>
          <img
            src="/first_assets/more3387-ksbk.svg"
            alt="more3387"
            className="first-more1"
          />
          <div className="first-tabs1">
            <img
              src="/first_assets/rectangle23388-49fvf-200h.png"
              alt="Rectangle23388"
              className="first-rectangle21"
            />
            <span className="first-text109">3</span>
          </div>
          <div className="first-search1">
            <img
              src="/first_assets/iconsearch3388-jfed.svg"
              alt="iconsearch3388"
              className="first-iconsearch1"
            />
          </div>
          <img
            src="/first_assets/arrowright3389-endb.svg"
            alt="arrowright3389"
            className="first-arrowright1"
          />
          <img
            src="/first_assets/arrowleft3389-nme.svg"
            alt="arrowleft3389"
            className="first-arrowleft1"
          />
        </div>
        <div className="first-group6copy10">
          <Keyboard onKeyDown={handleKeyDown} />
        </div>
        <img
          src="/first_assets/shapecopy3403-xuf.svg"
          alt="ShapeCopy3403"
          className="first-shape-copy"
        />
      </div>
    </div>
  );
};

export default First;
