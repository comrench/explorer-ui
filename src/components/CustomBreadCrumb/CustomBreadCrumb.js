import React from "react";
import { getPathStr } from "../../etc/helper";

export default function CustomBreadCrumb(props) {
  const chev = ">";
  const handleClick = (e) => {
    e.preventDefault();
    const index = e.target.title;
    if (props.path.length !== index) {
      props.setIsFile(false);
    }
    console.log("isFile => " + props.isFile);
    if (!props.isFile) {
      const newPath = [...props.path].slice(0, index);
      props.setPath(newPath);

      props.setIsFile(false);
      const pathStr = getPathStr(newPath);
      props.updateStructure({ symbol: pathStr });
    }
  };
  return (
    <div>
      <span>
        {props.path.map((item, index) => (
          <span key={item}>
            <a href="/" onClick={handleClick} title={index + 1}>
              {item}
            </a>
            {chev}
          </span>
        ))}
      </span>
    </div>
  );
}
