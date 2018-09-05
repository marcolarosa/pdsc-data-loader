"use strict";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
Vue.use(VueRouter);
Vue.use(Vuex);

import IntroductionComponent from "./components/introduction.component.vue";
import LibraryBoxLoadDataComponent from "./components/librarybox-load-data/load-data.component.vue";
import LibraryBoxConfigureComponent from "./components/librarybox-configure/librarybox-configure.component.vue";
import LoggerComponent from "./components/logger/logger.component.vue";
import LoadDiskComponent from "./components/load-disk/LoadDiskComponent.vue";
import storeConfiguration from "./store";
const routes = [
    {
        path: "/introduction",
        name: "introduction",
        component: IntroductionComponent
    },
    {
        path: "/loadLibraryBox",
        name: "loadLibraryBox",
        component: LibraryBoxLoadDataComponent
    },
    {
        path: "/configureLibraryBox",
        name: "configureLibraryBox",
        component: LibraryBoxConfigureComponent
    },
    {
        path: "/loadDisk",
        name: "loadDisk",
        component: LoadDiskComponent
    },
    {
        path: "/logs/librarybox-logs",
        name: "viewLibraryBoxLogs",
        component: LoggerComponent
    },
    {
        path: "/logs/loaddisk-logs",
        name: "viewDiskLogs",
        component: LoggerComponent
    }
];

const router = new VueRouter({ routes });
const store = new Vuex.Store(storeConfiguration);

import App from "./components/app";
App.router = router;
App.store = store;
new Vue(App);
