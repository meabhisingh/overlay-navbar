"use strict";

require("core-js/modules/esnext.weak-map.delete-all.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./ReactNavbar.min.css");

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ReactNavbar = _ref => {
  let {
    burgerColor = "black",
    burgerColorHover = burgerColor,
    navColor1 = "rgb(35, 35, 35)",
    navColor2 = navColor1,
    navColor3 = navColor2,
    navColor4 = navColor3,
    logo,
    logoWidth = "100px",
    logoHeight = "unset",
    logoHoverSize = "15px",
    logoHoverColor = "green",
    logoTransition = 0.5,
    logoAnimationTime = 1,
    nav1FlexDirection = "row",
    nav2FlexDirection = "row",
    nav3FlexDirection = "row",
    nav4FlexDirection = "row",
    nav1alignItems = "center",
    nav1justifyContent = "center",
    nav2alignItems = "center",
    nav2justifyContent = "center",
    nav3alignItems = "center",
    nav3justifyContent = "center",
    nav4alignItems = "center",
    nav4justifyContent = "center",
    nav1Transition = 0.4,
    nav2Transition = nav1Transition + 0.4,
    nav3Transition = nav2Transition + 0.4,
    nav4Transition = nav3Transition + 0.4,
    link1Text = "Text 1",
    link2Text = "Text 2",
    link3Text = "Text 3",
    link4Text = "Text 4",
    link1Url = "/text1",
    link2Url = "/text2",
    link3Url = "/text3",
    link4Url = "/text4",
    link1Size = "1vmax",
    link2Size = link1Size,
    link3Size = link2Size,
    link4Size = link3Size,
    link1Family = "Roboto",
    link2Family = link1Family,
    link3Family = link2Family,
    link4Family = link3Family,
    link1Color = "black",
    link2Color = link1Color,
    link3Color = link2Color,
    link4Color = link3Color,
    link1BackgroundColor = "",
    link2BackgroundColor = link1BackgroundColor,
    link3BackgroundColor = link2BackgroundColor,
    link4BackgroundColor = link3BackgroundColor,
    link1ColorHover = link1Color,
    link2ColorHover = link1ColorHover,
    link3ColorHover = link2ColorHover,
    link4ColorHover = link3ColorHover,
    link1Decoration = "none",
    link2Decoration = link1Decoration,
    link3Decoration = link2Decoration,
    link4Decoration = link3Decoration,
    link1Margin = "0",
    link2Margin = link1Margin,
    link3Margin = link2Margin,
    link4Margin = link3Margin,
    link1Padding = "0",
    link2Padding = link1Padding,
    link3Padding = link2Padding,
    link4Padding = link3Padding,
    link1Border = "none",
    link2Border = link1Border,
    link3Border = link2Border,
    link4Border = link3Border,
    link1Transition = 0.5,
    link2Transition = link1Transition,
    link3Transition = link2Transition,
    link4Transition = link3Transition,
    link1AnimationTime = 1.5,
    link2AnimationTime = link1AnimationTime + 0.5,
    link3AnimationTime = link2AnimationTime + 0.5,
    link4AnimationTime = link3AnimationTime + 0.5,
    searchIcon = false,
    SearchIconElement,
    searchIconMargin = "0",
    searchIconUrl = "/Search",
    searchIconSize = "2vmax",
    searchIconColor = "white",
    searchIconColorHover = searchIconColor,
    searchIconTransition = 0.5,
    searchIconAnimationTime = 2,
    cartIcon = false,
    CartIconElement,
    cartIconMargin = "0",
    cartIconUrl = "/Cart",
    cartIconSize = "2vmax",
    cartIconColor = "white",
    cartIconColorHover = cartIconColor,
    cartIconTransition = 0.5,
    cartIconAnimationTime = searchIconAnimationTime + 0.5,
    profileIcon = false,
    ProfileIconElement,
    profileIconMargin = "0",
    profileIconUrl = "/Account",
    profileIconSize = "2.5vmax",
    profileIconColor = "white",
    profileIconColorHover = profileIconColor,
    profileIconTransition = 0.5,
    profileIconAnimationTime = cartIconAnimationTime + 0.5
  } = _ref;
  const [menuToggle, setMenuToggle] = (0, _react.useState)(false);
  const menuBurgerItem1 = (0, _react.useRef)(null);
  const menuBurgerItem2 = (0, _react.useRef)(null);
  const menuBurgerItem3 = (0, _react.useRef)(null);
  const menuBurger = (0, _react.useRef)(null);
  const logoRef = (0, _react.useRef)(null);
  const link1 = (0, _react.useRef)(null);
  const link2 = (0, _react.useRef)(null);
  const link3 = (0, _react.useRef)(null);
  const link4 = (0, _react.useRef)(null);

  const menuToggleHandler = () => {
    if (menuToggle) {
      menuBurgerItem1.current.classList.remove("menuBurgerItem1");
      menuBurgerItem2.current.classList.remove("menuBurgerItem2");
      menuBurgerItem3.current.classList.remove("menuBurgerItem3");
      return setMenuToggle(false);
    }

    menuBurgerItem1.current.classList.add("menuBurgerItem1");
    menuBurgerItem2.current.classList.add("menuBurgerItem2");
    menuBurgerItem3.current.classList.add("menuBurgerItem3");
    setMenuToggle(true);
  };

  const closeBarOnClick = () => {
    menuBurgerItem1.current.classList.remove("menuBurgerItem1");
    menuBurgerItem2.current.classList.remove("menuBurgerItem2");
    menuBurgerItem3.current.classList.remove("menuBurgerItem3");
    return setMenuToggle(false);
  };

  (0, _react.useEffect)(() => {
    menuBurger.current.addEventListener("mouseover", () => {
      menuBurgerItem1.current.style.backgroundColor = burgerColorHover;
      menuBurgerItem2.current.style.backgroundColor = burgerColorHover;
      menuBurgerItem3.current.style.backgroundColor = burgerColorHover;
    });
    menuBurger.current.addEventListener("mouseleave", () => {
      menuBurgerItem1.current.style.backgroundColor = burgerColor;
      menuBurgerItem2.current.style.backgroundColor = burgerColor;
      menuBurgerItem3.current.style.backgroundColor = burgerColor;
    });
    logoRef.current.addEventListener("mouseover", () => {
      logoRef.current.style.filter = "drop-shadow(0 0 ".concat(logoHoverSize, " ").concat(logoHoverColor, ")");
    });
    logoRef.current.addEventListener("mouseleave", () => {
      logoRef.current.style.filter = "none";
    });
    link1.current.addEventListener("mouseover", () => {
      link1.current.style.color = link1ColorHover;
    });
    link1.current.addEventListener("mouseleave", () => {
      link1.current.style.color = link1Color;
    });
    link2.current.addEventListener("mouseover", () => {
      link2.current.style.color = link2ColorHover;
    });
    link2.current.addEventListener("mouseleave", () => {
      link2.current.style.color = link2Color;
    });
    link3.current.addEventListener("mouseover", () => {
      link3.current.style.color = link3ColorHover;
    });
    link3.current.addEventListener("mouseleave", () => {
      link3.current.style.color = link3Color;
    });
    link4.current.addEventListener("mouseover", () => {
      link4.current.style.color = link4ColorHover;
    });
    link4.current.addEventListener("mouseleave", () => {
      link4.current.style.color = link4Color;
    });
    const search = document.querySelector("#searchIcon");
    const cart = document.querySelector("#cartIcon");
    const profile = document.querySelector("#profileIcon");

    if (searchIcon) {
      search.addEventListener("mouseover", () => {
        search.style.color = searchIconColorHover;
      });
      search.addEventListener("mouseleave", () => {
        search.style.color = searchIconColor;
      });
    }

    if (cartIcon) {
      cart.addEventListener("mouseover", () => {
        cart.style.color = cartIconColorHover;
      });
      cart.addEventListener("mouseleave", () => {
        cart.style.color = cartIconColor;
      });
    }

    if (profileIcon) {
      profile.addEventListener("mouseover", () => {
        profile.style.color = profileIconColorHover;
      });
      profile.addEventListener("mouseleave", () => {
        profile.style.color = profileIconColor;
      });
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "menuBurger",
    ref: menuBurger,
    onClick: menuToggleHandler
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: menuBurgerItem1,
    className: "menuBurgerItem",
    style: {
      backgroundColor: burgerColor
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: menuBurgerItem2,
    className: "menuBurgerItem",
    style: {
      backgroundColor: burgerColor
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: menuBurgerItem3,
    className: "menuBurgerItem",
    style: {
      backgroundColor: burgerColor
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav1",
    style: {
      transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
      backgroundColor: navColor1,
      flexDirection: nav1FlexDirection,
      alignItems: nav1alignItems,
      justifyContent: nav1justifyContent,
      transition: "all ".concat(nav1Transition, "s")
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "logoReactNavbar",
    src: logo,
    style: {
      cursor: "pointer",
      width: logoWidth,
      height: logoHeight,
      transition: "all ".concat(logoTransition, "s"),
      animation: menuToggle ? "LogoleftIn ".concat(logoAnimationTime, "s") : "LogoleftOut ".concat(logoAnimationTime, "s")
    },
    ref: logoRef,
    alt: "Not Passed"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav2",
    style: {
      transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
      backgroundColor: navColor2,
      flexDirection: nav2FlexDirection,
      alignItems: nav2alignItems,
      justifyContent: nav2justifyContent,
      transition: "all ".concat(nav2Transition, "s")
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "linksReactNavbar",
    ref: link1,
    style: {
      fontSize: link1Size,
      fontFamily: link1Family,
      color: link1Color,
      backgroundColor: link1BackgroundColor,
      textDecoration: link1Decoration,
      margin: link1Margin,
      padding: link1Padding,
      border: link1Border,
      transition: "all ".concat(link1Transition, "s"),
      animation: menuToggle ? "LinkIn ".concat(link1AnimationTime, "s") : "LinkOut ".concat(link1AnimationTime, "s")
    },
    to: link1Url,
    onClick: closeBarOnClick
  }, link1Text), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "linksReactNavbar",
    ref: link2,
    style: {
      fontSize: link2Size,
      fontFamily: link2Family,
      color: link2Color,
      backgroundColor: link2BackgroundColor,
      textDecoration: link2Decoration,
      margin: link2Margin,
      padding: link2Padding,
      border: link2Border,
      transition: "all ".concat(link2Transition, "s"),
      animation: menuToggle ? "LinkIn ".concat(link2AnimationTime, "s") : "LinkOut ".concat(link2AnimationTime, "s")
    },
    to: link2Url,
    onClick: closeBarOnClick
  }, link2Text)), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav3",
    style: {
      transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
      backgroundColor: navColor3,
      flexDirection: nav3FlexDirection,
      alignItems: nav3alignItems,
      justifyContent: nav3justifyContent,
      transition: "all ".concat(nav3Transition, "s")
    }
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "linksReactNavbar",
    ref: link3,
    style: {
      fontSize: link3Size,
      fontFamily: link3Family,
      color: link3Color,
      backgroundColor: link3BackgroundColor,
      textDecoration: link3Decoration,
      margin: link3Margin,
      padding: link3Padding,
      border: link3Border,
      transition: "all ".concat(link3Transition, "s"),
      animation: menuToggle ? "LinkIn ".concat(link3AnimationTime, "s") : "LinkOut ".concat(link3AnimationTime, "s")
    },
    to: link3Url,
    onClick: closeBarOnClick
  }, link3Text), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "linksReactNavbar",
    ref: link4,
    style: {
      fontSize: link4Size,
      fontFamily: link4Family,
      color: link4Color,
      backgroundColor: link4BackgroundColor,
      textDecoration: link4Decoration,
      margin: link4Margin,
      padding: link4Padding,
      border: link4Border,
      transition: "all ".concat(link4Transition, "s"),
      animation: menuToggle ? "LinkIn ".concat(link4AnimationTime, "s") : "LinkOut ".concat(link4AnimationTime, "s")
    },
    to: link4Url,
    onClick: closeBarOnClick
  }, link4Text)), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav4",
    style: {
      transform: menuToggle ? "translateY(0)" : "translateY(-100vmax)",
      backgroundColor: navColor4,
      flexDirection: nav4FlexDirection,
      alignItems: nav4alignItems,
      justifyContent: nav4justifyContent,
      transition: "all ".concat(nav4Transition, "s")
    }
  }, searchIcon ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: searchIconUrl,
    onClick: closeBarOnClick
  }, /*#__PURE__*/_react.default.createElement(SearchIconElement, {
    id: "searchIcon",
    style: {
      transition: "all ".concat(searchIconTransition, "s"),
      margin: searchIconMargin,
      animation: menuToggle ? "IconIn ".concat(searchIconAnimationTime, "s") : "IconOut ".concat(searchIconAnimationTime, "s")
    },
    fontSize: searchIconSize,
    color: searchIconColor
  })) : "", cartIcon ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: cartIconUrl,
    onClick: closeBarOnClick
  }, /*#__PURE__*/_react.default.createElement(CartIconElement, {
    id: "cartIcon",
    style: {
      transition: "all ".concat(cartIconTransition, "s"),
      margin: cartIconMargin,
      animation: menuToggle ? "IconIn ".concat(cartIconAnimationTime, "s") : "IconOut ".concat(cartIconAnimationTime, "s")
    },
    fontSize: cartIconSize,
    color: cartIconColor
  })) : "", profileIcon ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: profileIconUrl,
    onClick: closeBarOnClick
  }, /*#__PURE__*/_react.default.createElement(ProfileIconElement, {
    id: "profileIcon",
    style: {
      transition: "all ".concat(profileIconTransition, "s"),
      margin: profileIconMargin,
      animation: menuToggle ? "IconIn ".concat(profileIconAnimationTime, "s") : "IconOut ".concat(profileIconAnimationTime, "s")
    },
    fontSize: profileIconSize,
    color: profileIconColor
  })) : "")));
};

var _default = ReactNavbar;
exports.default = _default;