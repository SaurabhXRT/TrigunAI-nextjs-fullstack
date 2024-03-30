"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4bc68796-6a9c-4bd2-985e-e60fcd230e95");
  }, []);

  return null;
};
