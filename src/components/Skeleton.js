import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { isMobile } from "mobile-device-detect";

export const SkeletonLoader = () => {
  return (
    <div className="skeleton">
      {!isMobile ? (
        <div className="skeleton-menu flex">
          <div className="skeleton-father-div flex">
            <SkeletonTheme color="lightGray">
              <Skeleton circle={true} height={50} width={50} />
            </SkeletonTheme>
          </div>
          <div className="skeleton-father-div flex">
            <SkeletonTheme color="lightGray">
              <Skeleton reactangle={true} height={50} width={80} />
            </SkeletonTheme>
          </div>
          <div className="skeleton-father-div flex">
            <SkeletonTheme color="lightGray">
              <Skeleton reactangle={true} height={50} width={80} />
            </SkeletonTheme>
          </div>
          <div className="skeleton-father-div flex">
            <SkeletonTheme color="lightGray">
              <Skeleton reactangle={true} height={50} width={80} />
            </SkeletonTheme>
          </div>
          <div className="skeleton-father-div flex">
            <SkeletonTheme color="lightGray">
              <Skeleton reactangle={true} height={50} width={80} />
            </SkeletonTheme>
          </div>
        </div>
      ) : null}
      <div
        className={
          !isMobile
            ? "father-description-title flex"
            : "father-description-titleResponsive flex"
        }
      >
        <div className="container-skeleton flex">
          <SkeletonTheme color="lightGray">
            <Skeleton reactangle={true} height={50} width={400} />
          </SkeletonTheme>
          <SkeletonTheme color="lightGray">
            <Skeleton reactangle={true} height={50} width={200} />
          </SkeletonTheme>
          <SkeletonTheme color="lightGray">
            <Skeleton reactangle={true} height={20} width={60} />
          </SkeletonTheme>
          <SkeletonTheme color="lightGray">
            <Skeleton reactangle={true} height={100} width={350} />
          </SkeletonTheme>
          <SkeletonTheme color="lightGray">
            <Skeleton reactangle={true} height={20} width={60} />
          </SkeletonTheme>
          <div className="social-skeleton flex">
            <SkeletonTheme color="lightGray">
              <Skeleton circle={true} height={50} width={50} />
            </SkeletonTheme>
            <SkeletonTheme color="lightGray">
              <Skeleton circle={true} height={50} width={50} />
            </SkeletonTheme>
          </div>
          <div className="buttons-skeleton flex">
            <SkeletonTheme color="lightGray">
              <Skeleton reactangle={true} height={50} width={140} />
            </SkeletonTheme>
            <SkeletonTheme color="lightGray">
              <Skeleton reactangle={true} height={50} width={140} />
            </SkeletonTheme>
          </div>
        </div>
        {!isMobile ? (
          <div className="second-container-skeleton flex">
            <SkeletonTheme color="lightGray">
              <Skeleton circle={true} height={350} width={350} />
            </SkeletonTheme>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
