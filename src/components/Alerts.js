import React from "react";

export default function Alerts(props) {
  let captialize = (message) => {
    const lower = message.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  

  return (
    props.alert && (
        <div>
          <div
            class={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{captialize(props.alert.type)}: </strong> {props.alert.msg}
          </div>
        </div>
    )
  );
}
