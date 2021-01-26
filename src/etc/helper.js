export const getPathStr = (pathArr) => {
  // using for loop because first item is not required
  let pathStr = "";
  for (let i = 1; i < pathArr.length; i++) {
    pathStr += `/${pathArr[i]}`;
  }
  return pathStr;
};
