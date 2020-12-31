import React, {useContext} from "react";
import {CurrentPage} from "../config";

export const App = () => {
  const {path} = useContext(CurrentPage);
  return (
    <div>
      {path}
    </div>
  )
}