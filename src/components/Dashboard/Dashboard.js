import React from "react";
import { connect } from "react-redux";
import { getDashboard } from "../../actions";
import CustomBreadCrumb from "../CustomBreadCrumb/CustomBreadCrumb";
import DirectoryStructure from "../DirectoryStructure/DirectoryStructure";

function Dashboard(props) {
  const [isFile, setIsFile] = React.useState(false);
  const [path, setPath] = React.useState(["Root"]);
  const onSearchChange = (e) => {
    e.preventDefault();
    props.updateStructure({ symbol: "" });
  };
  const showDashboard = props.directoryContent;

  return (
    <div style={{ width: 300, paddingBottom: 20 }}>
      {!showDashboard && <button onClick={onSearchChange}>Login</button>}
      {showDashboard && (
        <CustomBreadCrumb
          path={path}
          setPath={setPath}
          updateStructure={props.updateStructure}
          setIsFile={setIsFile}
          isFile={isFile}
        />
      )}
      {showDashboard && (
        <DirectoryStructure
          structure={props.directoryContent}
          path={path}
          setPath={setPath}
          updateStructure={props.updateStructure}
          isFile={isFile}
          setIsFile={setIsFile}
        />
      )}
    </div>
  );
}

const mapStateToProps = ({ dashboard }) => {
  return { directoryContent: dashboard.stocksInfo, loading: dashboard.loading };
};

const mapDispatchToProps = {
  updateStructure: getDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
