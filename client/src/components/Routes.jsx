import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { pages } from "../data";
import { AppContext } from "./AppContext";
import { Page } from "./Page";
import { MissionPage } from "./MissionPage"
import { ServicesPage } from "./ServicesPage"
import { LocationPage } from "./LocationPage"
import { OurCommunityPage} from "./OurCommunityPage"

export function Routes() {
  const { preset, enterAnimation, exitAnimation } = useContext(AppContext);

  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/page-1" />} />

      <Route
        render={({ location }) => (
          <PageTransition
            preset={preset}
            transitionKey={location.pathname}
            enterAnimation={enterAnimation}
            exitAnimation={exitAnimation}
          >
            <Switch location={location}>
              <Route key={0}
                     exact path="/page-1"
                     render={() => <MissionPage page={pages[0]} />}
              />
              <Route key={1}
                     exact path="/page-2"
                     render={() => <ServicesPage page={pages[1]} />}
              />
              <Route key={2}
                     exact path="/page-3"
                     render={() => <LocationPage page={pages[2]} />}
              />
              <Route key={3}
                     exact path="/page-4"
                     render={() => <OurCommunityPage page={pages[3]} />}
              />
              <Route exact path="/" render={() => <Redirect to="/page-1" />} />
            </Switch>
          </PageTransition>
        )}
      />
    </>
  );
}