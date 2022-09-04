import React from "react";

import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import Searchbar from "../components/searchbar";

import "./fifth.css";

const Fifth = (props) => {
  const history = useHistory();

  const handlePrev = () => {
    history.push("/fourth");
  };

  const handleEnter = () => {
    history.push("/third");
  };

  const handleKeyDown = (key) => {
    if (key === "go") {
      history.push("/third");
    }
  };

  return (
    <div className="fifth-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="fifth-fifth">
        <div className="fifth-object"></div>
        <span className="fifth-text">
          <span>
            Tee is served
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="fifth-text002">
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
        <span className="fifth-text007">
          <span>UP TO 35% OFF</span>
        </span>
        <span className="fifth-text009">
          <span>Shop:</span>
        </span>
        <span className="fifth-text011">
          <span>Women</span>
        </span>
        <span className="fifth-text013">
          <span>Men</span>
        </span>
        <img
          src="/fifth_assets/bitmap8874-zmuv-200h.png"
          alt="Bitmap8874"
          className="fifth-bitmap"
        />
        <img
          src="/fifth_assets/screenshot20200803at80657pm8875-h3n-200h.png"
          alt="ScreenShot20200803at80657PM8875"
          className="fifth-screen-shot20200803at80657p-m"
        />
        <img
          src="/fifth_assets/rectangle8876-1l7-200h.png"
          alt="Rectangle8876"
          className="fifth-rectangle"
        />
        <span className="fifth-text015">
          <span>Shop boxer briefs</span>
        </span>
        <img
          src="/fifth_assets/rectanglecopy38878-lldc-200h.png"
          alt="RectangleCopy38878"
          className="fifth-rectangle-copy3"
        />
        <span className="fifth-text017">
          <span>Look good, do good, feel good.</span>
        </span>
        <span className="fifth-text019">
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
          src="/fifth_assets/rectanglecopy258881-kprf-200h.png"
          alt="RectangleCopy258881"
          className="fifth-rectangle-copy25"
        />
        <img
          src="/fifth_assets/rectanglecopy178882-kq6k-200h.png"
          alt="RectangleCopy178882"
          className="fifth-rectangle-copy17"
        />
        <img
          src="/fifth_assets/rectanglecopy228883-zpbn-500h.png"
          alt="RectangleCopy228883"
          className="fifth-rectangle-copy22"
        />
        <img
          src="/fifth_assets/rectanglecopy98884-7zu-500h.png"
          alt="RectangleCopy98884"
          className="fifth-rectangle-copy9"
        />
        <img
          src="/fifth_assets/rectanglecopy28885-2e2r-300h.png"
          alt="RectangleCopy28885"
          className="fifth-rectangle-copy2"
        />
        <img
          src="/fifth_assets/rectanglecopy108886-ok6c-300h.png"
          alt="RectangleCopy108886"
          className="fifth-rectangle-copy10"
        />
        <img
          src="/fifth_assets/rectanglecopy148887-ovhv-300h.png"
          alt="RectangleCopy148887"
          className="fifth-rectangle-copy14"
        />
        <img
          src="/fifth_assets/rectanglecopy198888-owhc-400h.png"
          alt="RectangleCopy198888"
          className="fifth-rectangle-copy19"
        />
        <img
          src="/fifth_assets/rectanglecopy58889-vcsk-500h.png"
          alt="RectangleCopy58889"
          className="fifth-rectangle-copy5"
        />
        <img
          src="/fifth_assets/bitmap8890-bplf-200h.png"
          alt="Bitmap8890"
          className="fifth-bitmap01"
        />
        <img
          src="/fifth_assets/bitmap8891-vu2f-200h.png"
          alt="Bitmap8891"
          className="fifth-bitmap02"
        />
        <img
          src="/fifth_assets/bitmap8892-34si-200h.png"
          alt="Bitmap8892"
          className="fifth-bitmap03"
        />
        <img
          src="/fifth_assets/bitmap8893-5ida-200h.png"
          alt="Bitmap8893"
          className="fifth-bitmap04"
        />
        <img
          src="/fifth_assets/bitmap8894-44th-200h.png"
          alt="Bitmap8894"
          className="fifth-bitmap05"
        />
        <div className="fifth-country-flags-asia-japan">
          <div className="fifth-g-b">
            <img
              src="/fifth_assets/maski889-43sh-200h.png"
              alt="MaskI889"
              className="fifth-mask"
            />
            <img
              src="/fifth_assets/maskcopyi889-vgs-200h.png"
              alt="MaskCopyI889"
              className="fifth-mask-copy"
            />
          </div>
        </div>
        <img
          src="/fifth_assets/bitmap8896-mdq5-200h.png"
          alt="Bitmap8896"
          className="fifth-bitmap06"
        />
        <img
          src="/fifth_assets/bitmap8897-e7le-200h.png"
          alt="Bitmap8897"
          className="fifth-bitmap07"
        />
        <img
          src="/fifth_assets/bitmap8898-v9p-200h.png"
          alt="Bitmap8898"
          className="fifth-bitmap08"
        />
        <img
          src="/fifth_assets/bitmap8899-djmd-200h.png"
          alt="Bitmap8899"
          className="fifth-bitmap09"
        />
        <img
          src="/fifth_assets/bitmap8900-3o0v-200h.png"
          alt="Bitmap8900"
          className="fifth-bitmap10"
        />
        <img
          src="/fifth_assets/bitmap8901-cwc-200h.png"
          alt="Bitmap8901"
          className="fifth-bitmap11"
        />
        <img
          src="/fifth_assets/bitmap8902-dnjj-200h.png"
          alt="Bitmap8902"
          className="fifth-bitmap12"
        />
        <span className="fifth-text021">
          <span>
            Useful
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="fifth-text023">
          <span>Stores</span>
        </span>
        <span className="fifth-text025">
          <span>United Kingdom</span>
        </span>
        <span className="fifth-text027">
          <span>English</span>
        </span>
        <span className="fifth-text029">
          <span>
            <span>Free delivery for orders above €19.00</span>
            <br></br>
            <span>Delivered in 3 - 5 days</span>
          </span>
        </span>
        <span className="fifth-text034">
          <span>FAQ</span>
        </span>
        <span className="fifth-text036">
          <span>B2B</span>
        </span>
        <img
          src="/fifth_assets/rectangle8912-lz3x-200h.png"
          alt="Rectangle8912"
          className="fifth-rectangle01"
        />
        <img
          src="/fifth_assets/rectanglecopy28913-fj0n-1100w.png"
          alt="RectangleCopy28913"
        />
        <span className="fifth-text038">
          <span>© OneSevenTech 2020, All Rights Reserved</span>
        </span>
        <img
          src="/fifth_assets/purplecopy28915-5k3z-200h.png"
          alt="PurpleCopy28915"
          className="fifth-purple-copy2"
        />
        <span className="fifth-text040">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="fifth-text045">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/fifth_assets/rectanglecopy218918-kgxp-500h.png"
          alt="RectangleCopy218918"
          className="fifth-rectangle-copy21 fifth-rectangle-copy21"
        />
        <div className="fifth-group28copy3">
          <img
            src="/fifth_assets/rectangle8920-bkhs-200h.png"
            alt="Rectangle8920"
            className="fifth-rectangle02"
          />
          <span className="fifth-text050">
            <span>Productivity</span>
          </span>
          <img
            src="/fifth_assets/rectanglecopy358922-bkvs-200h.png"
            alt="RectangleCopy358922"
            className="fifth-rectangle-copy35"
          />
          <img
            src="/fifth_assets/rectanglecopy448923-n49-200h.png"
            alt="RectangleCopy448923"
            className="fifth-rectangle-copy44"
          />
          <img
            src="/fifth_assets/rectanglecopy398924-upe-200h.png"
            alt="RectangleCopy398924"
            className="fifth-rectangle-copy39"
          />
        </div>
        <span className="fifth-text052">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="fifth-text057">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/fifth_assets/rectanglecopy208927-647-500h.png"
          alt="RectangleCopy208927"
          className="fifth-rectangle-copy20"
        />
        <div className="fifth-group28copy2">
          <img
            src="/fifth_assets/rectangle8929-jk8-200h.png"
            alt="Rectangle8929"
            className="fifth-rectangle03"
          />
          <span className="fifth-text062">
            <span>SaaS</span>
          </span>
          <img
            src="/fifth_assets/rectanglecopy358931-9rts-200h.png"
            alt="RectangleCopy358931"
            className="fifth-rectangle-copy351"
          />
          <img
            src="/fifth_assets/rectanglecopy448932-y83o-200h.png"
            alt="RectangleCopy448932"
            className="fifth-rectangle-copy441"
          />
          <img
            src="/fifth_assets/rectanglecopy398933-yz-200h.png"
            alt="RectangleCopy398933"
            className="fifth-rectangle-copy391"
          />
        </div>
        <span className="fifth-text064">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="fifth-text069">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <img
          src="/fifth_assets/rectanglecopy188936-wkjl-500h.png"
          alt="RectangleCopy188936"
          className="fifth-rectangle-copy18"
        />
        <div className="fifth-group28copy">
          <img
            src="/fifth_assets/rectangle8938-w4o8-200h.png"
            alt="Rectangle8938"
            className="fifth-rectangle04"
          />
          <span className="fifth-text074">
            <span>Ed-tech</span>
          </span>
          <img
            src="/fifth_assets/rectanglecopy358940-c89-200h.png"
            alt="RectangleCopy358940"
            className="fifth-rectangle-copy352"
          />
          <img
            src="/fifth_assets/rectanglecopy448941-1o9a-200h.png"
            alt="RectangleCopy448941"
            className="fifth-rectangle-copy442"
          />
          <img
            src="/fifth_assets/rectanglecopy398942-008g-200h.png"
            alt="RectangleCopy398942"
            className="fifth-rectangle-copy392"
          />
        </div>
        <span className="fifth-text076">
          <span>
            <span></span>
            <br></br>
            <span>
              We launched their flagship product to help connect teachers &amp;
              students through remote learning.
            </span>
          </span>
        </span>
        <span className="fifth-text081">
          <span>
            <span></span>
            <br></br>
            <span>Englight</span>
          </span>
        </span>
        <div className="fifth-group4copy3">
          <div className="fifth-bodycopy2"></div>
          <div className="fifth-butonscopy2"></div>
          <div className="fifth-group49">
            <div className="fifth-group5">
              <div className="fifth-group12">
                <div className="fifth-group19">
                  <img
                    src="/fifth_assets/rectangle8958-i0zc-200h.png"
                    alt="Rectangle8958"
                    className="fifth-rectangle05"
                  />
                  <img
                    src="/fifth_assets/rectanglecopy768959-1xm-200h.png"
                    alt="RectangleCopy768959"
                    className="fifth-rectangle-copy76"
                  />
                </div>
              </div>
            </div>
            <div className="fifth-group6">
              <div className="fifth-group12copy">
                <div className="fifth-group191">
                  <img
                    src="/fifth_assets/rectangle8965-3v1l-200h.png"
                    alt="Rectangle8965"
                    className="fifth-rectangle06"
                  />
                  <img
                    src="/fifth_assets/rectanglecopy768966-hs2n-200h.png"
                    alt="RectangleCopy768966"
                    className="fifth-rectangle-copy761"
                  />
                </div>
              </div>
            </div>
            <img
              src="/fifth_assets/rectanglecopy138967-s7y8-200h.png"
              alt="RectangleCopy138967"
              className="fifth-rectangle-copy13"
            />
            <img
              src="/fifth_assets/rectangle8968-2pg-200h.png"
              alt="Rectangle8968"
              className="fifth-rectangle07"
            />
            <img
              src="/fifth_assets/rectanglecopy258969-fh8j-200h.png"
              alt="RectangleCopy258969"
              className="fifth-rectangle-copy251"
            />
            <img
              src="/fifth_assets/rectanglecopy268970-twb-200h.png"
              alt="RectangleCopy268970"
              className="fifth-rectangle-copy26"
            />
            <img
              src="/fifth_assets/rectanglecopy278971-65jg-200h.png"
              alt="RectangleCopy278971"
              className="fifth-rectangle-copy27"
            />
          </div>
        </div>
        <div className="fifth-group21copy6">
          <div className="fifth-i-phone11copy3">
            <div className="fifth-i-phone11choose-color">
              <img
                src="/fifth_assets/black8975-swsi-300h.png"
                alt="Black8975"
                className="fifth-black"
              />
            </div>
            <div className="fifth-placeyour-design">
              <div className="fifth-placeyour-design1"></div>
            </div>
          </div>
          <div className="fifth-group5copy">
            <div className="fifth-group121">
              <div className="fifth-group192">
                <img
                  src="/fifth_assets/rectangle8984-z6e-200h.png"
                  alt="Rectangle8984"
                  className="fifth-rectangle08"
                />
                <img
                  src="/fifth_assets/rectanglecopy768985-hepk-200h.png"
                  alt="RectangleCopy768985"
                  className="fifth-rectangle-copy762"
                />
              </div>
            </div>
          </div>
          <div className="fifth-group7">
            <div className="fifth-group6copy"></div>
            <div className="fifth-group122">
              <div className="fifth-group193">
                <img
                  src="/fifth_assets/rectangle8992-c0tg-200h.png"
                  alt="Rectangle8992"
                  className="fifth-rectangle09"
                />
                <img
                  src="/fifth_assets/rectanglecopy768993-nymv-200h.png"
                  alt="RectangleCopy768993"
                  className="fifth-rectangle-copy763"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="fifth-group4copy4">
          <div className="fifth-bodycopy21"></div>
          <div className="fifth-butonscopy21"></div>
          <div className="fifth-group491">
            <div className="fifth-group51">
              <div className="fifth-group123">
                <div className="fifth-group194">
                  <img
                    src="/fifth_assets/rectangle8100-dpyk-200h.png"
                    alt="Rectangle8100"
                    className="fifth-rectangle10"
                  />
                  <img
                    src="/fifth_assets/rectanglecopy768100-j5lk-200h.png"
                    alt="RectangleCopy768100"
                    className="fifth-rectangle-copy764"
                  />
                </div>
              </div>
            </div>
            <div className="fifth-group61">
              <div className="fifth-group12copy1">
                <div className="fifth-group195">
                  <img
                    src="/fifth_assets/rectangle8101-ea8w-200h.png"
                    alt="Rectangle8101"
                    className="fifth-rectangle11"
                  />
                  <img
                    src="/fifth_assets/rectanglecopy768101-m8ts-200h.png"
                    alt="RectangleCopy768101"
                    className="fifth-rectangle-copy765"
                  />
                </div>
              </div>
            </div>
            <img
              src="/fifth_assets/rectanglecopy138101-l0cb-200h.png"
              alt="RectangleCopy138101"
              className="fifth-rectangle-copy131"
            />
            <img
              src="/fifth_assets/rectangle8101-vcxr-200h.png"
              alt="Rectangle8101"
              className="fifth-rectangle12"
            />
            <img
              src="/fifth_assets/rectanglecopy258101-e3t7-200h.png"
              alt="RectangleCopy258101"
              className="fifth-rectangle-copy252"
            />
            <img
              src="/fifth_assets/rectanglecopy268101-4hcd-200h.png"
              alt="RectangleCopy268101"
              className="fifth-rectangle-copy261"
            />
            <img
              src="/fifth_assets/rectanglecopy278102-zdx-200h.png"
              alt="RectangleCopy278102"
              className="fifth-rectangle-copy271"
            />
          </div>
        </div>

        <Searchbar />

        <img
          src="/fifth_assets/rectangle8103-rukd-200h.png"
          alt="Rectangle8103"
          className="fifth-rectangle13"
        />
        <span className="fifth-text094">
          <span>0000 0000 0000 0000</span>
        </span>
        <span className="fifth-text090">
          <span>01/26</span>
        </span>
        <span className="fifth-text092">
          <span>204</span>
        </span>
        <div className="fifth-cardnetworks-union-pay-copy">
          <div className="fifth-cardnetworks-union-pay">
            <img
              src="/fifth_assets/fill18104-kds.svg"
              alt="Fill18104"
              className="fifth-fill1"
            />
            <img
              src="/fifth_assets/fill28104-99ie.svg"
              alt="Fill28104"
              className="fifth-fill2"
            />
            <img
              src="/fifth_assets/fill38104-tf5n.svg"
              alt="Fill38104"
              className="fifth-fill3"
            />
            <img
              src="/fifth_assets/fill48104-5rx.svg"
              alt="Fill48104"
              className="fifth-fill4"
            />
            <img
              src="/fifth_assets/fill58104-05n.svg"
              alt="Fill58104"
              className="fifth-fill5"
            />
            <img
              src="/fifth_assets/fill68104-6lk2.svg"
              alt="Fill68104"
              className="fifth-fill6"
            />
            <img
              src="/fifth_assets/fill78105-w04n.svg"
              alt="Fill78105"
              className="fifth-fill7"
            />
            <img
              src="/fifth_assets/fill88105-709n.svg"
              alt="Fill88105"
              className="fifth-fill8"
            />
            <img
              src="/fifth_assets/fill98106-acix.svg"
              alt="Fill98106"
              className="fifth-fill9"
            />
            <img
              src="/fifth_assets/fill108106-t0y4.svg"
              alt="Fill108106"
              className="fifth-fill10"
            />
            <img
              src="/fifth_assets/fill118106-iqcg.svg"
              alt="Fill118106"
              className="fifth-fill11"
            />
            <img
              src="/fifth_assets/fill128106-audq.svg"
              alt="Fill128106"
              className="fifth-fill12"
            />
            <img
              src="/fifth_assets/fill138106-jgfk.svg"
              alt="Fill138106"
              className="fifth-fill13"
            />
            <img
              src="/fifth_assets/fill148107-ubv9.svg"
              alt="Fill148107"
              className="fifth-fill14"
            />
            <img
              src="/fifth_assets/fill158107-0tef.svg"
              alt="Fill158107"
              className="fifth-fill15"
            />
          </div>
        </div>
        <div className="fifth-group-copy3">
          <div className="fifth-keyboard">
            <img
              src="/fifth_assets/delete8107-r46.svg"
              alt="delete8107"
              className="fifth-delete"
            />
            <img
              src="/fifth_assets/svg08109-bv5b.svg"
              alt="SVG08109"
              className="fifth-s-v-g0"
            />
            <img
              src="/fifth_assets/dot8109-wm0e.svg"
              alt="dot8109"
              className="fifth-dot"
            />
            <img
              src="/fifth_assets/svg98109-cnfc.svg"
              alt="SVG98109"
              className="fifth-s-v-g9"
            />
            <img
              src="/fifth_assets/svg88110-dqit.svg"
              alt="SVG88110"
              className="fifth-s-v-g8"
            />
            <img
              src="/fifth_assets/svg78110-33np.svg"
              alt="SVG78110"
              className="fifth-s-v-g7"
            />
            <img
              src="/fifth_assets/svg68111-gm5i.svg"
              alt="SVG68111"
              className="fifth-s-v-g6"
            />
            <img
              src="/fifth_assets/svg58111-q8im.svg"
              alt="SVG58111"
              className="fifth-s-v-g5"
            />
            <img
              src="/fifth_assets/svg48112-f8mo.svg"
              alt="SVG48112"
              className="fifth-s-v-g4"
            />
            <img
              src="/fifth_assets/svg38112-g7i.svg"
              alt="SVG38112"
              className="fifth-s-v-g3"
            />
            <img
              src="/fifth_assets/svg28112-vuwe.svg"
              alt="SVG28112"
              className="fifth-s-v-g2"
            />
            <img
              src="/fifth_assets/svg18113-xq7t.svg"
              alt="SVG18113"
              className="fifth-s-v-g1"
            />
          </div>
        </div>
        <div onClick={handleEnter} className="key">
          <img
            src="/fifth_assets/rectanglecopy8113-tgrp-200h.png"
            alt="RectangleCopy8113"
            className="fifth-rectangle-copy"
          />
          <span className="fifth-text100">
            <span>Enter</span>
          </span>
        </div>
        <div className="fifth-tabbarcopy3">
          <img
            src="/fifth_assets/background8113-8yv-200h.png"
            alt="background8113"
            className="fifth-background1"
          />
          <div className="fifth-bars-home-indicator-on-dark">
            <img
              src="/fifth_assets/homeindicatori811-ugs-200h.png"
              alt="HomeIndicatorI811"
              className="fifth-home-indicator"
            />
          </div>
          <img
            src="/fifth_assets/more8114-4f3.svg"
            alt="more8114"
            className="fifth-more"
          />
          <div className="fifth-tabs">
            <img
              src="/fifth_assets/rectangle28114-cvdl-200h.png"
              alt="Rectangle28114"
              className="fifth-rectangle2"
            />
            <span className="fifth-text102">3</span>
          </div>
          <div className="fifth-search">
            <img
              src="/fifth_assets/iconsearch8115-u5r3.svg"
              alt="iconsearch8115"
              className="fifth-iconsearch"
            />
          </div>
          <img
            src="/fifth_assets/arrowright8115-xjha.svg"
            alt="arrowright8115"
            className="fifth-arrowright"
          />
          <img
            src="/fifth_assets/arrowleft8115-qow.svg"
            alt="arrowleft8115"
            className="fifth-arrowleft"
            onClick={handlePrev}
          />
        </div>
      </div>
    </div>
  );
};

export default Fifth;
