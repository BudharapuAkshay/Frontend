import React from "react";
import ContentLoader from "react-content-loader";

const ShimmerPlaceholder = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#1c1c1c"
    foregroundColor="#333333"
  >
    <rect x="10" y="20" rx="4" ry="4" width="300" height="20" /> 
    <rect x="10" y="50" rx="4" ry="4" width="250" height="20" /> 
    <rect x="10" y="80" rx="4" ry="4" width="350" height="80" />
  </ContentLoader>
);

export default ShimmerPlaceholder;
