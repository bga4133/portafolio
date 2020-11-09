import React from "react";
import { ReactComponent as ImgFirts } from "../assets/img/undraw_startup_life_2du2.svg";
import { isMobile } from "mobile-device-detect";

export const FirtsContainer = () => {
  return (
    <section className={!isMobile ? null : "sectionResponsive"}>
      <div
        className={
          !isMobile ? "container-firtsPage" : "container-firtsPageResposive"
        }
      >
        <div
          className={
            !isMobile ? "row1-containerFirts" : "row1-containerFirtsResponsive"
          }
        >
          <div
            className={
              !isMobile
                ? "container-Information"
                : "container-InformationResponsive"
            }
          >
            <h1>
              Hey I'm,<br></br>
              <strong> Brayan Garcia</strong>
              <hr></hr>
            </h1>
            <div className="description-information">
              <h3>
                <strong>
                  I'm Frontend developer (React, Vue) developer with crazy for
                  mobile & web desing.
                </strong>
              </h3>
            </div>
            <div
              className={
                !isMobile ? "social-networks" : "social-networksResponsive"
              }
            >
              <p>Social networks</p>
              <div className="father-social-links">
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTUuOTY4LDUuMzI5QzExNC42MjQsNS4zMjksMCwxMjAuNDAxLDAsMjYyLjM1M2MwLDExMy41MzYsNzMuMzQ0LDIwOS44NTYsMTc1LjEwNCwyNDMuODcyDQoJCQljMTIuOCwyLjM2OCwxNy40NzItNS41NjgsMTcuNDcyLTEyLjM4NGMwLTYuMTEyLTAuMjI0LTIyLjI3Mi0wLjM1Mi00My43MTJjLTcxLjIsMTUuNTItODYuMjQtMzQuNDY0LTg2LjI0LTM0LjQ2NA0KCQkJYy0xMS42MTYtMjkuNjk2LTI4LjQxNi0zNy42LTI4LjQxNi0zNy42Yy0yMy4yNjQtMTUuOTM2LDEuNzI4LTE1LjYxNiwxLjcyOC0xNS42MTZjMjUuNjk2LDEuODI0LDM5LjIsMjYuNDk2LDM5LjIsMjYuNDk2DQoJCQljMjIuODQ4LDM5LjI2NCw1OS45MzYsMjcuOTM2LDc0LjUyOCwyMS4zNDRjMi4zMDQtMTYuNjA4LDguOTI4LTI3LjkzNiwxNi4yNTYtMzQuMzY4DQoJCQljLTU2LjgzMi02LjQ5Ni0xMTYuNjA4LTI4LjU0NC0xMTYuNjA4LTEyNy4wMDhjMC0yOC4wNjQsOS45ODQtNTEuMDA4LDI2LjM2OC02OC45OTJjLTIuNjU2LTYuNDk2LTExLjQyNC0zMi42NCwyLjQ5Ni02OA0KCQkJYzAsMCwyMS41MDQtNi45MTIsNzAuNCwyNi4zMzZjMjAuNDE2LTUuNjk2LDQyLjMwNC04LjU0NCw2NC4wOTYtOC42NGMyMS43MjgsMC4xMjgsNDMuNjQ4LDIuOTQ0LDY0LjA5Niw4LjY3Mg0KCQkJYzQ4Ljg2NC0zMy4yNDgsNzAuMzM2LTI2LjMzNiw3MC4zMzYtMjYuMzM2YzEzLjk1MiwzNS4zOTIsNS4xODQsNjEuNTA0LDIuNTYsNjhjMTYuNDE2LDE3Ljk4NCwyNi4zMDQsNDAuOTI4LDI2LjMwNCw2OC45OTINCgkJCWMwLDk4LjcyLTU5Ljg0LDEyMC40NDgtMTE2Ljg2NCwxMjYuODE2YzkuMTg0LDcuOTM2LDE3LjM3NiwyMy42MTYsMTcuMzc2LDQ3LjU4NGMwLDM0LjM2OC0wLjMyLDYyLjA4LTAuMzIsNzAuNDk2DQoJCQljMCw2Ljg4LDQuNjA4LDE0Ljg4LDE3LjYsMTIuMzUyQzQzOC43Miw0NzIuMTQ1LDUxMiwzNzUuODU3LDUxMiwyNjIuMzUzQzUxMiwxMjAuNDAxLDM5Ny4zNzYsNS4zMjksMjU1Ljk2OCw1LjMyOXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                  className="animation"
                />
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM4MiAzODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4MiAzODI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDc3Qjc7IiBkPSJNMzQ3LjQ0NSwwSDM0LjU1NUMxNS40NzEsMCwwLDE1LjQ3MSwwLDM0LjU1NXYzMTIuODg5QzAsMzY2LjUyOSwxNS40NzEsMzgyLDM0LjU1NSwzODJoMzEyLjg4OQ0KCUMzNjYuNTI5LDM4MiwzODIsMzY2LjUyOSwzODIsMzQ3LjQ0NFYzNC41NTVDMzgyLDE1LjQ3MSwzNjYuNTI5LDAsMzQ3LjQ0NSwweiBNMTE4LjIwNywzMjkuODQ0YzAsNS41NTQtNC41MDIsMTAuMDU2LTEwLjA1NiwxMC4wNTYNCglINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYNCgljNS41NTQsMCwxMC4wNTYsNC41MDIsMTAuMDU2LDEwLjA1NlYzMjkuODQ0eiBNODYuNzQ4LDEyMy40MzJjLTIyLjQ1OSwwLTQwLjY2Ni0xOC4yMDctNDAuNjY2LTQwLjY2NlM2NC4yODksNDIuMSw4Ni43NDgsNDIuMQ0KCXM0MC42NjYsMTguMjA3LDQwLjY2Niw0MC42NjZTMTA5LjIwOCwxMjMuNDMyLDg2Ljc0OCwxMjMuNDMyeiBNMzQxLjkxLDMzMC42NTRjMCw1LjEwNi00LjE0LDkuMjQ2LTkuMjQ2LDkuMjQ2SDI4Ni43Mw0KCWMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OQ0KCWMwLDUuMTA2LTQuMTM5LDkuMjQ2LTkuMjQ2LDkuMjQ2aC00NC40MjZjLTUuMTA2LDAtOS4yNDYtNC4xNC05LjI0Ni05LjI0NlYxNDkuNTkzYzAtNS4xMDYsNC4xNC05LjI0Niw5LjI0Ni05LjI0Nmg0NC40MjYNCgljNS4xMDYsMCw5LjI0Niw0LjE0LDkuMjQ2LDkuMjQ2djE1LjY1NWMxMC40OTctMTUuNzUzLDI2LjA5Ny0yNy45MTIsNTkuMzEyLTI3LjkxMmM3My41NTIsMCw3My4xMzEsNjguNzE2LDczLjEzMSwxMDYuNDcyDQoJTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                  className="animation"
                />
              </div>
            </div>
            <div className="contact-buttons">
              <a href="#">Contac me</a>
              <a href="#">Projects</a>
            </div>
          </div>
        </div>
        <div className="container-imgInfo">
          {!isMobile ? <ImgFirts className="svg-imgFirts animation" /> : null}
        </div>
      </div>
    </section>
  );
};
