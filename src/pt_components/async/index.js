/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from "react";
import Loadable from "react-loadable";
import PageLoading from "../page_loading";

const AsyncUserComponent = Loadable({
    loader: () => import("../../pt_views/users"),
    loading: () => <PageLoading />
});


export {
    AsyncUserComponent
};
