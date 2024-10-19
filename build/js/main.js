"use strict";

(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
window.addEventListener("orientationchange", function () {
  location.reload(true);
});

// color padding-top for banner__title-top
document.addEventListener("DOMContentLoaded", function () {
  function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  function isMacOS() {
    return navigator.platform === 'MacIntel' && !navigator.userAgent.includes('Mobile');
  }
  var bannerTitleTop = document.querySelector('.banner__title-top');
  if (!isIOS() && !isMacOS() && bannerTitleTop) {
    bannerTitleTop.classList.add('mar-pad');
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImlzSU9TIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzTWFjT1MiLCJwbGF0Zm9ybSIsImluY2x1ZGVzIiwiYmFubmVyVGl0bGVUb3AiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsU0FBU0EsU0FBUyxHQUFFO0VBQ2pCLFNBQVNDLFNBQVMsR0FBRztJQUNqQixJQUFJQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLElBQUk7SUFDbENDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxNQUFNLFlBQUtOLEVBQUUsUUFBSztFQUNqRTtFQUNBRCxTQUFTLEVBQUU7RUFDWEUsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVSLFNBQVMsQ0FBQztBQUNoRCxDQUFDLEdBQUc7QUFFSkUsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFNO0VBQy9DQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDekIsQ0FBQyxDQUFDOztBQUVGO0FBQ0FOLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyRCxTQUFTRyxLQUFLLEdBQUc7SUFDYixPQUFPLG1CQUFtQixDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDO0VBQ3hEO0VBRUEsU0FBU0MsT0FBTyxHQUFHO0lBQ2YsT0FBT0YsU0FBUyxDQUFDRyxRQUFRLEtBQUssVUFBVSxJQUFJLENBQUNILFNBQVMsQ0FBQ0MsU0FBUyxDQUFDRyxRQUFRLENBQUMsUUFBUSxDQUFDO0VBQ3ZGO0VBRUEsSUFBSUMsY0FBYyxHQUFHZCxRQUFRLENBQUNlLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztFQUVqRSxJQUFJLENBQUNSLEtBQUssRUFBRSxJQUFJLENBQUNJLE9BQU8sRUFBRSxJQUFJRyxjQUFjLEVBQUU7SUFDMUNBLGNBQWMsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQzNDO0FBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gaW5pdDEwMHZoKCl7XG4gICAgZnVuY3Rpb24gc2V0SGVpZ2h0KCkge1xuICAgICAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgIH1cbiAgICBzZXRIZWlnaHQoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcbn0pKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKVxufSlcblxuLy8gY29sb3IgcGFkZGluZy10b3AgZm9yIGJhbm5lcl9fdGl0bGUtdG9wXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBpc0lPUygpIHtcbiAgICAgICAgcmV0dXJuIC9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc01hY09TKCkge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdNb2JpbGUnKTtcbiAgICB9XG5cbiAgICBsZXQgYmFubmVyVGl0bGVUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyX190aXRsZS10b3AnKTtcblxuICAgIGlmICghaXNJT1MoKSAmJiAhaXNNYWNPUygpICYmIGJhbm5lclRpdGxlVG9wKSB7XG4gICAgICAgIGJhbm5lclRpdGxlVG9wLmNsYXNzTGlzdC5hZGQoJ21hci1wYWQnKTtcbiAgICB9XG59KTsiXX0=
