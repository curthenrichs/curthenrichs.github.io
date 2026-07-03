import detailRoutes from "./detailRoutes.json";

// Shared by the Projects/Career/Education section lists (and ItemCardTemplate
// consumers) to look up a content item's detail page path by content id.
const detailPathByContentId = {};
detailRoutes.forEach((r) => {
  detailPathByContentId[r.contentId] = r.path;
});

export default detailPathByContentId;
