import React, { useEffect, useContext } from "react";
import TagManager from 'react-gtm-module'
import GlobalContext, { themeConfigDefault } from "../../context/GlobalContext";

const tagManagerArgs = {
  gtmId: "GTM-NGL85SQ"
}

TagManager.initialize(tagManagerArgs)

const PageWrapper = ({ children, themeConfig = null }) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    gContext.changeTheme({ ...themeConfigDefault, ...themeConfig });
  }, []);

  return <>{children}</>;
};

export default PageWrapper;
