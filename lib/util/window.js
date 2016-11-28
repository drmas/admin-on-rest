"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowWidth = getWindowWidth;
exports.isMobileScreens = isMobileScreens;
exports.isSmallScreens = isSmallScreens;
exports.isMediumScreens = isMediumScreens;
exports.isBigScreens = isBigScreens;
exports.isSmallScreen = isSmallScreen;
function getWindowWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function isMobileScreens() {
  return getWindowWidth() < 768;
}

function isSmallScreens() {
  return getWindowWidth() >= 768 && getWindowWidth() < 992;
}

function isMediumScreens() {
  return getWindowWidth() >= 992 && getWindowWidth() < 1200;
}

function isBigScreens() {
  return getWindowWidth() >= 1200;
}
function isSmallScreen() {
  return isSmallScreens() || isMobileScreens();
}