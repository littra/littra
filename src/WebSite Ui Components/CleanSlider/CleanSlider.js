import React from "react";
import "./ClieanSlider.css";
import $ from "jquery";

function CleanSlider() {
  $(document).ready(function () {
    const $app = $(".app");
    const $img = $(".app__img");
    const $pageNav1 = $(".pages__item--1");
    const $pageNav2 = $(".pages__item--2");
    let animation = true;
    let curSlide = 1;
    let scrolledUp, nextSlide;

    let pagination = function (slide, target) {
      animation = true;
      if (target === undefined) {
        nextSlide = scrolledUp ? slide - 1 : slide + 1;
      } else {
        nextSlide = target;
      }

      $(".pages__item--" + nextSlide).addClass("page__item-active");
      $(".pages__item--" + slide).removeClass("page__item-active");

      $app.toggleClass("active");
      setTimeout(function () {
        animation = false;
      }, 3000);
    };

    let navigateDown = function () {
      if (curSlide > 1) return;
      scrolledUp = false;
      pagination(curSlide);
      curSlide++;
    };

    let navigateUp = function () {
      if (curSlide === 1) return;
      scrolledUp = true;
      pagination(curSlide);
      curSlide--;
    };

    setTimeout(function () {
      $app.addClass("initial");
    }, 1500);

    setTimeout(function () {
      animation = false;
    }, 4500);

    $(document).on("mousewheel DOMMouseScroll", function (e) {
      var delta = e.originalEvent.wheelDelta;
      if (animation) return;
      if (delta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    });

    $(document).on(
      "click",
      ".pages__item:not(.page__item-active)",
      function () {
        if (animation) return;
        let target = +$(this).attr("data-target");
        pagination(curSlide, target);
        curSlide = target;
      }
    );
  });
  return (
    <div>
      <div className="cont">
        <div className="mouse"></div>
        <div className="app">
          <div className="app__bgimg">
            <div className="app__bgimg-image app__bgimg-image--1"></div>
            <div className="app__bgimg-image app__bgimg-image--2"></div>
          </div>
          <div className="app__img">
            <img
              onMouseDown="return false"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/whiteTest4.png"
              alt="city"
            />
          </div>

          <div className="app__text app__text--1">
            <div className="app__text-line app__text-line--4">LITTRA</div>
            <div className="app__text-line app__text-line--3">TECHNOLOGIES</div>
            <div className="app__text-line app__text-line--2">Bengalore</div>
            <div className="app__text-line app__text-line--1">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png"
                alt=""
              />
            </div>
          </div>

          <div className="app__text app__text--2">
            <div className="app__text-line app__text-line--4">habitant</div>
            <div className="app__text-line app__text-line--3">ut eget</div>
            <div className="app__text-line app__text-line--2">
              Nam imperdiet
            </div>
            <div className="app__text-line app__text-line--1">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pages">
          <ul className="pages__list">
            <li
              data-target="1"
              className="pages__item pages__item--1 page__item-active"
            ></li>
            <li data-target="2" className="pages__item pages__item--2"></li>
          </ul>
        </div>
      </div>
      <a
        href="https://dribbble.com/shots/2936160-Opus-Animation"
        target="_blank"
        className="icon-link"
      >
        <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png" />
      </a>
      <a
        href="https://twitter.com/mrspok407"
        target="_blank"
        className="icon-link icon-link--twitter"
      >
        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
      </a>
    </div>
  );
}

export default CleanSlider;
