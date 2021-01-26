import React from "react";
import { getPathStr } from "../../etc/helper";

export default function DirectoryStructure(props) {
  const content = props.structure;
  const itemObject = content.children;
  const handleClick = (e) => {
    e.preventDefault();
    const newPath = [...props.path];
    newPath.push(e.target.outerText);
    props.setPath(newPath);

    if (e.target.title === "file") {
      props.setIsFile(true);
    } else {
      const pathStr = getPathStr(newPath);
      props.updateStructure({ symbol: pathStr });
    }
  };
  return (
    <div>
      {!props.isFile && (
        <ul>
          {Object.keys(itemObject).map((key, i) => (
            <p key={i}>
              <a href="/" onClick={handleClick} title={itemObject[key].type}>
                {key}
              </a>
            </p>
          ))}
        </ul>
      )}
      {props.isFile && <p>This is the content of the file</p>}
    </div>
  );
}
