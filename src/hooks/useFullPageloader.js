import React, { useState } from "react";
import { SkeletonLoader } from "../components/Skeleton";

export const useFullPageloader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <SkeletonLoader /> : null,
    () => setLoading(true), //show
    () => setLoading(false) //hidde
  ];
};
