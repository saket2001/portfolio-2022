import React from "react";
import { JsTag } from "./JsTag";
import { ReactTag } from "./ReactTag";
import { NodejsTag } from "./NodejsTag";
import { HtmlTag } from "./HtmlTag";
import { CssTag } from "./CssTag";
import { MongoDbTag } from "./MongoDbTag";

export const TagSelector = ({ tagName }) => {
  let tag = "";

  if (tagName === "React") tag = <ReactTag />;
  else if (tagName === "JS") tag = <JsTag />;
  else if (tagName === "Node") tag = <NodejsTag />;
  else if (tagName === "Html") tag = <HtmlTag />;
  else if (tagName === "Css") tag = <CssTag />;
  else if (tagName === "MongoDb") tag = <MongoDbTag />;

  return tag;
};
