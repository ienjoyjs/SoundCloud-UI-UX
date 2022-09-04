import $ from "jquery";
import { useEffect } from "react";

function Keyboard({ onKeyDown }) {
  useEffect(() => {
    $(document).on("keydown", function (event) {
      console.error(event.key);
    });

    return () => {
      $(document).off("keydown");
    };
  }, []);

  const handleClick = (event) => {
    onKeyDown($(event.currentTarget).attr("value"));
  };

  return (
    <div className="first-keyboard">
      <div className="first-frame3">
        <div value="go" onClick={handleClick}>
          <img
            src="/first_assets/key3389-rzu6-200h.png"
            alt="Key3389"
            className="first-key"
          />
          <img
            src="/first_assets/search3389-3p9u.svg"
            alt="Search3389"
            className="first-search2"
          />
          <img
            src="/first_assets/key3390-usqh-200h.png"
            alt="Key3390"
            className="first-key01"
          />
          <img
            src="/first_assets/go3390-cpyh.svg"
            alt="Go3390"
            className="first-go"
          />
        </div>

        <div value="." onClick={handleClick}>
          <img
            src="/first_assets/key3391-6j7l-200w.png"
            alt="Key3391"
            className="first-key02"
          />
          <img
            src="/first_assets/svg3391-vmnp.svg"
            alt="SVG3391"
            className="first-s-v-g"
          />
        </div>

        <div value="@" onClick={handleClick}>
          <img
            src="/first_assets/key3391-v9a-200w.png"
            alt="Key3391"
            className="first-key03"
          />
          <img
            src="/first_assets/svg3391-cnxv.svg"
            alt="SVG3391"
            className="first-s-v-g1"
          />
        </div>

        <div value=" " onClick={handleClick}>
          <img
            src="/first_assets/key3391-paek-200h.png"
            alt="Key3391"
            className="first-key04"
          />
          <img
            src="/first_assets/space3392-ou4.svg"
            alt="space3392"
            className="first-space"
          />
        </div>

        <div value="123" onClick={handleClick}>
          <img
            src="/first_assets/key3392-ebci-200h.png"
            alt="Key3392"
            className="first-key05"
          />
          <img
            src="/first_assets/svg1233393-6gsb.svg"
            alt="SVG1233393"
            className="first-s-v-g123"
          />
        </div>

        <div value="backspace" onClick={handleClick}>
          <img
            src="/first_assets/key3393-f9i8-200w.png"
            alt="Key3393"
            className="first-key06"
          />
          <img
            src="/first_assets/path3393-kul.svg"
            alt="Path3393"
            className="first-path"
          />
          <img
            src="/first_assets/path3393-x6he.svg"
            alt="Path3393"
            className="first-path1"
          />
        </div>

        <div value="uppercase" onClick={handleClick}>
          <img
            src="/first_assets/key3393-w15m-200w.png"
            alt="Key3393"
            className="first-key07"
          />
          <img
            src="/first_assets/path24583394-iuwi.svg"
            alt="Path24583394"
            className="first-path2458"
          />
        </div>

        <div value="dictation" onClick={handleClick}>
          <img
            src="/first_assets/dictation3394-t7u.svg"
            alt="Dictation3394"
            className="first-dictation"
          />
        </div>

        <div value="emoji" onClick={handleClick}>
          <img
            src="/first_assets/emoji3395-3g1e.svg"
            alt="Emoji3395"
            className="first-emoji"
          />
        </div>
      </div>
      <div className="first-frame2">
        <img
          src="/first_assets/key3396-g25l-200w.png"
          alt="Key3396"
          className="first-key08"
        />
        <img
          src="/first_assets/l3396-qq9u.svg"
          alt="l3396"
          className="first-l"
        />
        <img
          src="/first_assets/key3396-01y-200w.png"
          alt="Key3396"
          className="first-key09"
        />
        <img
          src="/first_assets/k3396-d7v.svg"
          alt="k3396"
          className="first-k"
        />
        <img
          src="/first_assets/key3396-pdpd-200w.png"
          alt="Key3396"
          className="first-key10"
        />
        <img
          src="/first_assets/j3396-3bmg.svg"
          alt="j3396"
          className="first-j"
        />
        <img
          src="/first_assets/key3396-tcpm-200w.png"
          alt="Key3396"
          className="first-key11"
        />
        <img
          src="/first_assets/h3396-udrt.svg"
          alt="h3396"
          className="first-h"
        />
        <img
          src="/first_assets/key3397-w7b9-200w.png"
          alt="Key3397"
          className="first-key12"
        />
        <img
          src="/first_assets/g3397-xaxqk.svg"
          alt="g3397"
          className="first-g"
        />
        <img
          src="/first_assets/key3397-gajw-200w.png"
          alt="Key3397"
          className="first-key13"
        />
        <img
          src="/first_assets/f3397-51dg.svg"
          alt="f3397"
          className="first-f"
        />
        <img
          src="/first_assets/key3397-qlie-200w.png"
          alt="Key3397"
          className="first-key14"
        />
        <img
          src="/first_assets/d3397-erbs.svg"
          alt="d3397"
          className="first-d"
        />
      </div>
      <div className="first-frame1">
        <img
          src="/first_assets/key3397-w02l-200w.png"
          alt="Key3397"
          className="first-key15"
        />
        <img
          src="/first_assets/l3397-r5agt.svg"
          alt="l3397"
          className="first-l1"
        />
        <img
          src="/first_assets/key3397-ns17-200w.png"
          alt="Key3397"
          className="first-key16"
        />
        <img
          src="/first_assets/k3398-6e1k.svg"
          alt="k3398"
          className="first-k1"
        />
        <img
          src="/first_assets/key3398-xtua-200w.png"
          alt="Key3398"
          className="first-key17"
        />
        <img
          src="/first_assets/j3398-fk9q.svg"
          alt="j3398"
          className="first-j1"
        />
        <img
          src="/first_assets/key3398-e8fm-200w.png"
          alt="Key3398"
          className="first-key18"
        />
        <img
          src="/first_assets/h3398-4vxp.svg"
          alt="h3398"
          className="first-h1"
        />
        <img
          src="/first_assets/key3398-bznq-200w.png"
          alt="Key3398"
          className="first-key19"
        />
        <img
          src="/first_assets/g3398-k8w.svg"
          alt="g3398"
          className="first-g1"
        />
        <img
          src="/first_assets/key3399-vi8-200w.png"
          alt="Key3399"
          className="first-key20"
        />
        <img
          src="/first_assets/f3399-asq7.svg"
          alt="f3399"
          className="first-f1"
        />
        <img
          src="/first_assets/key3399-rjzv-200w.png"
          alt="Key3399"
          className="first-key21"
        />
        <img
          src="/first_assets/d3399-m2qp.svg"
          alt="d3399"
          className="first-d1"
        />
        <img
          src="/first_assets/key3399-gt59-200w.png"
          alt="Key3399"
          className="first-key22"
        />
        <img
          src="/first_assets/s3399-kaas.svg"
          alt="s3399"
          className="first-s"
        />
        <img
          src="/first_assets/key3399-bvc-200w.png"
          alt="Key3399"
          className="first-key23"
        />
        <img
          src="/first_assets/a3400-adv.svg"
          alt="a3400"
          className="first-a"
        />
        <img
          src="/first_assets/key3400-g9bk-200w.png"
          alt="Key3400"
          className="first-key24"
        />
        <img
          src="/first_assets/p3400-wc7.svg"
          alt="p3400"
          className="first-p"
        />
        <img
          src="/first_assets/key3400-et8e-200w.png"
          alt="Key3400"
          className="first-key25"
        />
        <img
          src="/first_assets/o3400-q78.svg"
          alt="o3400"
          className="first-o"
        />
        <img
          src="/first_assets/key3401-dqc-200w.png"
          alt="Key3401"
          className="first-key26"
        />
        <img
          src="/first_assets/i3401-xrh.svg"
          alt="i3401"
          className="first-i"
        />
        <img
          src="/first_assets/key3401-3n8-200w.png"
          alt="Key3401"
          className="first-key27"
        />
        <img
          src="/first_assets/u3401-atl.svg"
          alt="u3401"
          className="first-u"
        />
        <img
          src="/first_assets/key3401-5twy-200w.png"
          alt="Key3401"
          className="first-key28"
        />
        <img
          src="/first_assets/y3401-76aq.svg"
          alt="y3401"
          className="first-y"
        />
        <img
          src="/first_assets/key3401-sku-200w.png"
          alt="Key3401"
          className="first-key29"
        />
        <img
          src="/first_assets/t3402-qw9g.svg"
          alt="t3402"
          className="first-t"
        />
        <img
          src="/first_assets/key3402-1d7-200w.png"
          alt="Key3402"
          className="first-key30"
        />
        <img
          src="/first_assets/r3402-xdc7.svg"
          alt="r3402"
          className="first-r"
        />
        <img
          src="/first_assets/key3402-ac3-200w.png"
          alt="Key3402"
          className="first-key31"
        />
        <img
          src="/first_assets/e3402-jpkg.svg"
          alt="e3402"
          className="first-e"
        />
        <img
          src="/first_assets/key3402-6vkb-200w.png"
          alt="Key3402"
          className="first-key32"
        />
        <img
          src="/first_assets/w3402-f2cm.svg"
          alt="w3402"
          className="first-w"
        />
        <img
          src="/first_assets/key3402-13qs-200w.png"
          alt="Key3402"
          className="first-key33"
        />
        <img
          src="/first_assets/q3403-rbg5.svg"
          alt="q3403"
          className="first-q"
        />
      </div>
    </div>
  );
}

export default Keyboard;