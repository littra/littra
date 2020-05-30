import express from "express";
import compression from "compression";
import path from "path";
import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Loadable from "react-loadable";
import { getBundles } from "react-loadable-ssr-addon";

import store from "./src/configureStore";
import App from "./src/App";
import fs from "fs";
import { Helmet } from "react-helmet";
import { matchRoutes } from "react-router-config";
import Routes from "./src/Route";
import cloneDeep from "lodash.clonedeep";

import { isArabicLanguageUrl } from "./src/Utils/UserAgent";

// const helmet = require("helmet");

const BASE_PATH = process.env.BASE_PATH;
const PORT = process.env.PORT ? process.env.PORT : 3000;
console.log(BASE_PATH);
const manifest = require("./dist/react-loadable-ssr-addon.json");

const server = express();

server.use(compression());
server.use(function(req, res, next) {
  req.url = req.url.replace(BASE_PATH, "/");
  if (req.url.includes("index.html")) {
    req.url = req.url.replace("index.html", "");
  }

  next();
});
server.use(
  `/robots.txt`,
  express.static(path.join(__dirname, "public/robots.txt"))
);
server.use(
  `/sitemap.xml`,
  express.static(path.join(__dirname, "public/sitemap.xml"))
);
server.use(
  `/manifest.json`,
  express.static(path.join(__dirname, "public/manifest.json"))
);
server.use(
  `/favicon.ico`,
  express.static(path.join(__dirname, "public/favicon.ico"))
);
server.use(
  `/icon_192.png`,
  express.static(path.join(__dirname, "public/icon_192.png"))
);

server.use(`/assets`, express.static(path.join(__dirname, "public/assets/")));
server.use(`/.well-known`, express.static(path.join(__dirname, ".well-known/")));

// server.use(`/index.html`, express.static(path.join(__dirname, "dist")));

server.get("*.js", function(req, res, next) {
  if (req.url !== "/service-worker.js") {
    let url = req.url.split("?");
    let gipVersionFile = "/dist" + url[0] + ".gz";
    if (fs.existsSync(__dirname + gipVersionFile)) {
      req.url = gipVersionFile + "?" + url[1];
      res.set("Content-Encoding", "gzip");
    } else {
      req.url = "/dist" + req.url;
    }
  } else {
    req.url = "/dist" + req.url;
  }
  res.set("Content-Type", "application/javascript");
  next();
});

server.get("*.css", function(req, res, next) {
  // let url = req.url.split("?");
  // let gipVersionFile = "/dist" + url[0] + ".gz";
  // if (fs.existsSync(__dirname + gipVersionFile)) {
  //   req.url = gipVersionFile + "?" + url[1];
  //   res.set("Content-Encoding", "gzip");
  // } else {
  req.url = "/dist" + req.url;
  // }
  next();
});
server.use("/dist", express.static(path.join(__dirname, "dist")));

if (typeof localStorage === "undefined") {
  global.localStorage = {};
}
// server.get(SPP_ROUTE, async (req, res) => {
//   const filePath = path.resolve(__dirname, "dist/spp.html");
//   res.sendFile(filePath);
// });
// server.get("/checkout", async (req, res) => {
//   const filePath = path.resolve(__dirname, "dist/checkout.html");
//   res.sendFile(filePath);
// });


server.get("*", async (req, res) => {
  global.navigator = {
    userAgent: req.headers["user-agent"]
  };

  let storeObj;
  const userAgent = req.headers["user-agent"];

  const isBot = /bot|googlebot|google|crawler|spider|robot|crawling/i.test(
    userAgent
  );

  // if (isBot) {
  //   storeObj = cloneDeep(ssrStore);
  // } else {
  storeObj = cloneDeep(store);
  // }
  //  need to fix this later
  if (typeof fetch !== "function") {
    global.fetch = require("node-fetch-polyfill");
  }
  global.window = {
    location: {
      pathname: req.url,
      search: req.url.split("?")[1],
      href: `${req.headers.host}${req.url}`,
      host: req.headers.host
    },
    isBot
  };
  global.document = {
    cookie: {}
  };
  const filePath = path.resolve(__dirname, "dist/index.html");
  fs.readFile(filePath, "utf8", async (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    const actionsTemp = matchRoutes(Routes, req.path).map(({ route }) => {
      return !route.component.preload
        ? route.component
        : isBot
        ? route.component.preload().then(res => res.default)
        : route.component;
    });

    const loadedActions = await Promise.all(actionsTemp);
    const actions = loadedActions
      .map(component => {
        return isBot && component.fetching
          ? component.fetching({
              ...storeObj,
              path: req.path
            })
          : null;
      })
      .map(
        async actions =>
          await Promise.all(
            (actions || []).map(
              p => p && new Promise(resolve => p.then(resolve).catch(resolve))
            )
          )
      );

    await Promise.all(actions);
    const modules = new Set();
    const html = renderToString(
      <Loadable.Capture report={moduleName => modules.add(moduleName)}>
        <Provider store={storeObj}>
          <StaticRouter location={req.url} context={{}}>
            <App />
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    );
    const helmet = Helmet.renderStatic();
    const bundles = getBundles(manifest, [
      ...manifest.entrypoints,
      ...Array.from(modules)
    ]);

    const styles = bundles.css || [];
    const scripts = bundles.js || [];

    let css;
    if (isBot) {
      css = await Promise.all(
        styles.map(file => {
          const cssFile = fs.readFileSync(`./dist/${file.file}`, "utf-8");
          return cssFile.replace(/'/g, "");
        })
      );
    }

    return res.send(
      htmlData
        .replace(
          "<link/>",
          !isBot
            ? styles
                .map(style => {
                  return `<link rel="preload" type="text/css" href="${BASE_PATH}${style.file}"   as="style" onload="if(rel!='stylesheet')rel='stylesheet'"></link>`;
                })
                .join("\n")
            : `<style>${css.join("")}</style>`
        )
        .replace(
          `<html>`,
          isArabicLanguageUrl()
            ? `<html lang="ar" dir="rtl">`
            : `<html lang="en" dir="ltr">`
        )
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace(
          "</body>",
          "</body>" +
            scripts
              .map(script => {
                return `<script src="${BASE_PATH}${script.file}"   defer></script>`;
              })
              .join("\n") +
            `<script>window.INITIAL_STATE = ${JSON.stringify(
              storeObj.getState()
            )}
          </script>`
        )
        .replace(
          "<title>TLC</title>",
          helmet.title.toString() == '<title data-react-helmet="true"></title>'
            ? "<title>TLC</title>"
            : helmet.title.toString()
        )
        .replace(
          "<meta/>",
          `${helmet.meta.toString()}\n${helmet.link.toString()}`
        )
    );
  });
});
Loadable.preloadAll()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Running on http://localhost:${PORT}/`);
    });
  })
  .catch(err => {
    console.log(err);
  });
