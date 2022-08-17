import React, { useEffect, useState } from "react";
import "!style-loader!css-loader!./TabBar.css";
import styles from "./TabBar.css";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import { render } from "react-dom";

const TabBar = () => {
  const [stickyHeader, setStickyHeader] = useState(false);

  let menu;
  let menuItems;
  let menuBorder;
  let activeItem;
  const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
  const body = document.body;
  useEffect(() => {
    menu = body.querySelector(".menu");
    menuItems = menu.querySelectorAll(".menu__item");
    menuBorder = menu.querySelector(".menu__border");
    activeItem = menu.querySelector(".active");
    offsetMenuBorder(activeItem, menuBorder);
    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => clickItem(item, index));
    });
  });
  function clickItem(item, index) {
    menu.style.removeProperty("--timeOut");

    if (activeItem == item) return;

    if (activeItem) {
      activeItem.classList.remove("active");
    }

    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
  }

  function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.left -
          menu.offsetLeft -
          (menuBorder.offsetWidth - offsetActiveItem.width) / 2
      ) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  }

  window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
  });

  const scrolled = (item) => {
    if (window.scrollY > 0) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };

  window.addEventListener("scroll", scrolled);
  window.addEventListener("scroll", renderLink);

  function hidetabbar(){
    var menusItem = document.getElementsByClassName("menus-open");
    for(let i=0; i<1; i++){
      menusItem[i].checked= false;
    }
  }

  const renderLink = (title, url) => {
    return (
      <a
        className={"link"}
        href={`${url}`}
        onClick={() => document.getElementById(url)}
      >
        {title}
      </a>
    );
  };
  const scrollTab = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      scrollTab.classList.remove("scroll-up");
      return;
    }

    if (
      currentScroll > lastScroll &&
      !scrollTab.classList.contains("scroll-down")
    ) {
      scrollTab.classList.remove("scroll-up");
      scrollTab.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      scrollTab.classList.contains("scroll-down")
    ) {
      scrollTab.classList.remove("scroll-down");
      scrollTab.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });

  return (
    <div
      className={[stickyHeader ? "headerWrapper fixedHeader" : "headerWrapper"]}
    >
      <div className="title ">LITTRA</div>
      <div className="togglerr">
        <nav className="menus">
          <input
            type="checkbox"
            href="#"
            className="menus-open"
            name="menus-open"
            id="menus-open"
          />
          <label className="menus-open-button" for="menus-open">
            <span className="hamburger hamburger-1"></span>
            <span className="hamburger hamburger-2"></span>
            <span className="hamburger hamburger-3"></span>
          </label>

          <a href="#" className="menus-item" onClick={hidetabbar}>
            <img
              className="menus-icon"
              src={`${PUBLIC_ASSETS_PATH}/menu.png`}
              alt=""
            />
          </a>
          <a href="#aboutus" className="menus-item" onClick={hidetabbar}>
            <img
              className="menus-icon"
              src={`${PUBLIC_ASSETS_PATH}/welcome.png`}
              alt=""
            />
          </a>
          <a href="#features" className="menus-item" onClick={hidetabbar}>
            <img
              className="menus-icon"
              src={`${PUBLIC_ASSETS_PATH}/support.png`}
              alt=""
            />
          </a>
          <a href="#pages" className="menus-item" onClick={hidetabbar}>
            <img
              className="menus-icon"
              src={`${PUBLIC_ASSETS_PATH}/idea.png`}
              alt=""
            />
          </a>
          <a href="#creativity" className="menus-item" onClick={hidetabbar}>
            <img
              className="menus-icon"
              src={`${PUBLIC_ASSETS_PATH}/creativety.png`}
              alt=""
            />
          </a>
          <a href="#portfolio" className="menus-item" onClick={hidetabbar}>
            <img
              className="menus-icon"
              src={`${PUBLIC_ASSETS_PATH}/ourWorks.png`}
              alt=""
            />
          </a>
          <a href="#whyus" className="menus-item" onClick={hidetabbar}>
            <img
              className="menus-icon"
              src={`${PUBLIC_ASSETS_PATH}/chooseUs.png`}
              alt=""
            />
          </a>
          <a href="#newFooter" className="menus-item" onClick={hidetabbar}>
            <img
              className="menus-icon"
              src={`${PUBLIC_ASSETS_PATH}/footer.png`}
              alt=""
            />
          </a>
        </nav>
      </div>
      <menu className="menu">
        {renderLink(
          <button 
            className="menu__item active"
            style={{ "--bgColorItem": "#ff8c00" }}
          >
            <div className="iconNew">
              <Icon image={`${PUBLIC_ASSETS_PATH}/menu.png`} size={25} />
            </div>
          </button>,
          "#"
        )}
        {renderLink(
          <button className="menu__item" style={{ "--bgColorItem": "#f54888" }}>
            <div className="iconNew">
              <Icon image={`${PUBLIC_ASSETS_PATH}/welcome.png`} size={38} />
            </div>
          </button>,
          "#aboutus"
        )}
        {renderLink(
          <button className="menu__item" style={{ "--bgColorItem": "#4343f5" }}>
            <div className="iconNew">
              <Icon image={`${PUBLIC_ASSETS_PATH}/support.png`} size={38} />
            </div>
          </button>,
          "#features"
        )}
        {renderLink(
          <button className="menu__item" style={{ "--bgColorItem": "#e0b115" }}>
            <div className="iconNew">
              <Icon image={`${PUBLIC_ASSETS_PATH}/idea.png`} size={38} />
            </div>
          </button>,
          "#pages"
        )}
        {renderLink(
          <button className="menu__item" style={{ "--bgColorItem": "#65ddb7" }}>
            <div className="iconNew">
              <Icon image={`${PUBLIC_ASSETS_PATH}/creativety.png`} size={38} />
            </div>
          </button>,
          "#creativity"
        )}
        {renderLink(
          <button className="menu__item" style={{ "--bgColorItem": "#65ddb7" }}>
            <div className="iconNew">
              <Icon image={`${PUBLIC_ASSETS_PATH}/ourWorks.png`} size={38} />
            </div>
          </button>,
          "#portfolio"
        )}
        {renderLink(
          <button className="menu__item" style={{ "--bgColorItem": "#65ddb7" }}>
            <div className="iconNew">
              <Icon image={`${PUBLIC_ASSETS_PATH}/chooseUs.png`} size={38} />
            </div>
          </button>,
          "#whyus"
        )}
        {renderLink(
          <button className="menu__item" style={{ "--bgColorItem": "#65ddb7" }}>
            <div className="iconNew">
              <Icon image={`${PUBLIC_ASSETS_PATH}/footer.png`} size={33} />
            </div>
          </button>,
          "#newFooter"
        )}

        <div className="menu__border"></div>
      </menu>

      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default TabBar;
