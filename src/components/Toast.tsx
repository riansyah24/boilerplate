import React from 'react';

interface Props {
  id:string;
  message:string;
  bottom:string; 
  severity:string; 
  visible:string
}

const severity = {
  success:"text-green-500 border-l-4 border-green-500",
  danger:"text-red-500 border-l-4 border-red-500"
}

const visible = {
  visible:"bottom-4",
  notVisible:"bottom-[-100px]"
}

const Toast = (props: Props) => {
  return (
    <div>
      <div data-testid={props.id} className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm duration-300 fixed ${visible[props.visible]} right-4 ${severity[props.severity]}`} role="alert">
        <div className="ms-3 text-sm font-normal">{props.message}</div>
      </div>
    </div>
  );
};

export default Toast;