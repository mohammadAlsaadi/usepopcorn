import { useState, useEffect, useRef } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          //   onCloseMovie();
          //   callback();
          action();
          //   console.log("Close");
          //   console.log(e.back);
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
