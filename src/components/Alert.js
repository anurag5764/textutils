import React from "react";

export default function Alert(prop) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // prop.alert with && because initial value of alert is null
    // wrapped the js in div and then giving it permanent height to avoid constant changing layout
    <div style={{ height: "50px" }}>
      {prop.alert && (
        <div
          className={`alert alert-${prop.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(prop.alert.type)}</strong>: {prop.alert.message}
        </div>
      )}
    </div>
  );
}
