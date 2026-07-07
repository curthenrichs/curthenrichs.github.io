// Pure port of PageTemplate's scroll-tracking selection (kept byte-faithful
// to the original branching, including strict inequalities on the intersect
// point and insertion-order tie resolution). PageTemplate measures DOM rects
// and delegates the choice here so the logic is unit-testable.
export function chooseActiveNavItem({ sections, viewportHeight, activeNavItem, clickedNavItem }) {
  const intersectPoint = viewportHeight * 1;

  const data = sections.reduce((acc, entry) => {
    let area, point;

    if (!entry.navItem) {
      area = -1;
      point = false;
    } else {
      const { top, bottom } = entry;

      if (top > viewportHeight || bottom < 0) {
        area = 0;
      } else if (top < 0 && bottom > viewportHeight) {
        area = (bottom - top) / viewportHeight;
      } else if (top < 0) {
        area = (bottom - 0) / viewportHeight;
      } else if (bottom > viewportHeight) {
        area = (viewportHeight - top) / viewportHeight;
      } else {
        area = 1;
      }

      point = intersectPoint > top && intersectPoint < bottom;
    }

    return { ...acc, [entry.navItem]: { area, point } };
  }, {});

  let nextChoice = [activeNavItem];
  let nextArea = data[activeNavItem].area;
  for (let key of Object.keys(data)) {
    if (data[key].area > nextArea) {
      nextChoice = [key];
      nextArea = data[key].area;
    } else if (data[key].area == nextArea && !nextChoice.includes(key)) {
      nextChoice.push(key);
    }
  }

  let newNavItem;
  if (nextChoice.length > 1) {
    if (clickedNavItem != null && nextChoice.includes(clickedNavItem)) {
      newNavItem = clickedNavItem;
    } else {
      const intersect = Object.keys(data)
        .map((key) => ({ key, point: data[key].point }))
        .filter(({ point }) => point);
      if (intersect.length < 1) {
        newNavItem = activeNavItem;
      } else {
        newNavItem = intersect[0].key;
      }
    }
  } else {
    newNavItem = nextChoice[0];
  }

  return newNavItem;
}
