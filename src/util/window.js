 
export function getWindowWidth() {
  return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
}

export function isMobileScreens() {
  return getWindowWidth() < 768;
}

export function isSmallScreens() {
  return getWindowWidth() >= 768 && getWindowWidth() < 992;
}

export function isMediumScreens() {
  return getWindowWidth() >= 992 && getWindowWidth() < 1200;
}

export function isBigScreens() {
  return getWindowWidth() >= 1200;
}
export function isSmallScreen() {
  return isSmallScreens() || isMobileScreens()
}