/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-12 15:03:48
 * @LastEditTime: 2021-08-12 15:18:00
 */

import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: false,
  });
}
