"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[15],{"./src/components/ygo-card/AtkDef.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ygo_card_AtkDef});var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),atk_def=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/ygo-card/atk-def.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(atk_def.A,options);atk_def.A&&atk_def.A.locals&&atk_def.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const modifyStat=stat=>void 0===stat?"?":stat,AtkDef=({monsterAtk,monsterDef,cardColor})=>(0,jsx_runtime.jsx)("div",{"data-testid":"atk-def-component",className:"monster-stat-parent",children:(0,jsx_runtime.jsxs)("div",{"data-testid":"atk-def-wrapper",className:"monster-stat-sub-parent",children:[(0,jsx_runtime.jsx)(Typography.A,{"data-testid":"atk-text",className:"monster-stat monster-attack-stat",variant:"body1",children:modifyStat(monsterAtk)}),"Link"!==cardColor?(0,jsx_runtime.jsx)(Typography.A,{"data-testid":"def-text",className:"monster-stat monster-defense-stat",variant:"body1",children:modifyStat(monsterDef)}):void 0]})});AtkDef.displayName="AtkDef";const ygo_card_AtkDef=AtkDef},"./src/components/ygo-card/CardAssociation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ygo_card_CardAssociation});__webpack_require__("./node_modules/react/index.js");var ImageWithText=__webpack_require__("./src/components/ygo-card/ImageWithText.tsx");const card_level_namespaceObject=__webpack_require__.p+"static/media/card_level.64a5ea85.svg",card_rank_namespaceObject=__webpack_require__.p+"static/media/card_rank.9add8e4c.svg",card_pendulum_scale_namespaceObject=__webpack_require__.p+"static/media/card_pendulum_scale.dd0653a7.svg",dark_namespaceObject=__webpack_require__.p+"static/media/dark.b84f8908.svg",earth_namespaceObject=__webpack_require__.p+"static/media/earth.4df96a49.svg",fire_namespaceObject=__webpack_require__.p+"static/media/fire.8f44d770.svg",light_namespaceObject=__webpack_require__.p+"static/media/light.476144bf.svg",water_namespaceObject=__webpack_require__.p+"static/media/water.89031493.svg",wind_namespaceObject=__webpack_require__.p+"static/media/wind.5f8c3841.svg",divine_namespaceObject=__webpack_require__.p+"static/media/divine.ddd39c45.svg";var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),card_association=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/ygo-card/card-association.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(card_association.A,options);card_association.A&&card_association.A.locals&&card_association.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardAssociation=({monsterAssociation,attribute})=>{if(void 0===monsterAssociation)return null;if(void 0===monsterAssociation.level&&void 0===monsterAssociation.rank&&void 0===monsterAssociation.linkRating)return null;const getMonsterAssociationImage=monsterAssociation=>{switch(monsterAssociation){case"level":return(0,jsx_runtime.jsx)("img",{src:card_level_namespaceObject,alt:"Card Level",className:"base-img"});case"rank":return(0,jsx_runtime.jsx)("img",{src:card_rank_namespaceObject,alt:"Card Rank",className:"base-img"});case"pendulum":return(0,jsx_runtime.jsx)("img",{src:card_pendulum_scale_namespaceObject,alt:"Card Rank",className:"pend-img"})}};return(0,jsx_runtime.jsx)("div",{className:"card-association-parent",children:(0,jsx_runtime.jsxs)("div",{className:"card-association-sub-parent",children:[(attribute=>{switch(attribute){case"dark":return(0,jsx_runtime.jsx)("img",{src:dark_namespaceObject,alt:"Dark Attribute",className:"base-img"});case"earth":return(0,jsx_runtime.jsx)("img",{src:earth_namespaceObject,alt:"Earth Attribute",className:"base-img"});case"fire":return(0,jsx_runtime.jsx)("img",{src:fire_namespaceObject,alt:"Fire Attribute",className:"base-img"});case"light":return(0,jsx_runtime.jsx)("img",{src:light_namespaceObject,alt:"Light Attribute",className:"base-img"});case"water":return(0,jsx_runtime.jsx)("img",{src:water_namespaceObject,alt:"Water Attribute",className:"base-img"});case"wind":return(0,jsx_runtime.jsx)("img",{src:wind_namespaceObject,alt:"Wind Attribute",className:"base-img"});case"divine":return(0,jsx_runtime.jsx)("img",{src:divine_namespaceObject,alt:"Divine Attribute",className:"base-img"});default:return}})(attribute?.toLowerCase()),void 0!==monsterAssociation.level&&(0,jsx_runtime.jsx)(ImageWithText.A,{imageComponent:getMonsterAssociationImage("level"),text:`x${monsterAssociation.level}`}),void 0!==monsterAssociation.rank&&(0,jsx_runtime.jsx)(ImageWithText.A,{imageComponent:getMonsterAssociationImage("rank"),text:`x${monsterAssociation.rank}`}),void 0!==monsterAssociation.scaleRating&&(0,jsx_runtime.jsx)(ImageWithText.A,{imageComponent:getMonsterAssociationImage("pendulum"),text:`x${monsterAssociation.scaleRating}`}),void 0!==monsterAssociation.linkRating&&(0,jsx_runtime.jsx)(ImageWithText.A,{text:`L${monsterAssociation.linkRating}: ${monsterAssociation.linkArrows.join(" ")}`})]})})};CardAssociation.displayName="CardAssociation";const ygo_card_CardAssociation=CardAssociation},"./src/components/ygo-card/ImageWithText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ygo_card_ImageWithText});var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),image_with_text=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/ygo-card/image-with-text.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(image_with_text.A,options);image_with_text.A&&image_with_text.A.locals&&image_with_text.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ImageWithText=({imageComponent,text})=>(0,jsx_runtime.jsxs)("div",{"data-testid":"image-with-text-component",className:"img-with-number-parent",children:[imageComponent,(0,jsx_runtime.jsx)(Typography.A,{"data-testid":"image-text",variant:"subtitle1",textAlign:"center",children:text})]});ImageWithText.displayName="ImageWithText";const ygo_card_ImageWithText=ImageWithText},"./src/components/ygo-card/YGOCardData.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Skeleton/Skeleton.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_CardAssociation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ygo-card/CardAssociation.tsx"),_YGOCardStats__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ygo-card/YGOCardStats.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/css/ygo-card/ygo-card-styles.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const YGOCardData=({cardName,cardColor,cardEffect,monsterType,cardAttribute,monsterAttack,monsterDefense,monsterAssociation,cardID,fullDetails,isLoading,className})=>isLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"rectangular",height:"150px",className:"rounded-skeleton"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:[className,"ygo-card-style-base",`${cardColor?.toLowerCase()}-ygo-card-style`,"YgoCardLightText"].join(" "),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{variant:"subtitle1",id:"card-name",noWrap:!0,children:cardName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CardAssociation__WEBPACK_IMPORTED_MODULE_1__.A,{monsterAssociation,attribute:cardAttribute}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_YGOCardStats__WEBPACK_IMPORTED_MODULE_2__.A,{cardColor,cardEffect,monsterType,monsterAttack,monsterDefense,cardID,fullDetails})]});YGOCardData.displayName="YGOCardData";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(YGOCardData,((prevProps,newProps)=>prevProps.cardName===newProps.cardName))},"./src/components/ygo-card/YGOCardStats.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_AtkDef__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ygo-card/AtkDef.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/css/ygo-card/ygo-card-styles.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const YGOCardStats=({cardColor,cardEffect,monsterType,monsterAttack,monsterDefense,cardID,fullDetails})=>{const color=void 0===cardColor?"Err":cardColor?.toLowerCase(),isBackRow="spell"===color||"trap"===color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:`YgoCardDarkText ${cardColor?.toLowerCase()}-ygo-card-style-light`,id:"card-description",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"body1",id:"monster-type",noWrap:!0,children:isBackRow?cardColor:monsterType}),fullDetails?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{className:"ygo-card-effect-component-full-details",variant:"body2",children:cardEffect}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{className:"ygo-card-effect-component-some-details",variant:"body2",children:cardEffect}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"ygo-card-footer-parent",children:[fullDetails?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"body2",id:"card-id",children:cardID}):void 0,fullDetails&&!isBackRow&&"err"!==color&&void 0!==cardColor&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AtkDef__WEBPACK_IMPORTED_MODULE_1__.A,{monsterAtk:monsterAttack,monsterDef:monsterDefense,cardColor})]})]})};YGOCardStats.displayName="YGOCardStats";const __WEBPACK_DEFAULT_EXPORT__=YGOCardStats},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/ygo-card/atk-def.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monster-stat-parent {\n\twidth: 100%;\n\ttext-align: right;\n}\n\n.monster-stat-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.75);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n}\n\n.monster-stat {\n\tdisplay: inline-block;\n\tfont-weight: 800;\n}\n\n.monster-attack-stat {\n\tcolor: rgb(255, 77, 77, 0.93);\n}\n\n.monster-defense-stat {\n\tmargin-left: 0.6rem;\n\tcolor: rgba(77, 166, 255, 0.9);\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/atk-def.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,iBAAiB;AAClB;;AAEA;CACC,qCAAqC;CACrC,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;CACtB,oBAAoB;CACpB,qBAAqB;CACrB,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,gBAAgB;AACjB;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,8BAA8B;AAC/B",sourcesContent:[".monster-stat-parent {\n\twidth: 100%;\n\ttext-align: right;\n}\n\n.monster-stat-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.75);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n}\n\n.monster-stat {\n\tdisplay: inline-block;\n\tfont-weight: 800;\n}\n\n.monster-attack-stat {\n\tcolor: rgb(255, 77, 77, 0.93);\n}\n\n.monster-defense-stat {\n\tmargin-left: 0.6rem;\n\tcolor: rgba(77, 166, 255, 0.9);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/ygo-card/card-association.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".base-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.35rem;\n\tvertical-align: middle;\n}\n\n.pend-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.35rem;\n\tmargin-left: 0.5rem;\n\tvertical-align: middle;\n}\n\n.attribute-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.85rem;\n\tvertical-align: middle;\n}\n\n.card-association-parent {\n\twidth: 100%;\n\tmargin-bottom: 0.35rem;\n\ttext-align: center;\n}\n\n.card-association-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.82);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n\ttext-align: center;\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/card-association.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,YAAY;CACZ,qBAAqB;CACrB,qBAAqB;CACrB,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,qBAAqB;CACrB,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,qBAAqB;CACrB,qBAAqB;CACrB,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,qCAAqC;CACrC,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;CACtB,oBAAoB;CACpB,qBAAqB;CACrB,mBAAmB;CACnB,kBAAkB;AACnB",sourcesContent:[".base-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.35rem;\n\tvertical-align: middle;\n}\n\n.pend-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.35rem;\n\tmargin-left: 0.5rem;\n\tvertical-align: middle;\n}\n\n.attribute-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.85rem;\n\tvertical-align: middle;\n}\n\n.card-association-parent {\n\twidth: 100%;\n\tmargin-bottom: 0.35rem;\n\ttext-align: center;\n}\n\n.card-association-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.82);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n\ttext-align: center;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/ygo-card/image-with-text.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".img-with-number-parent {\n\tdisplay: inline-block;\n}\n\n.img-with-number-parent .MuiTypography-root {\n\tdisplay: inline-block;\n\tcolor: rgba(0, 0, 0, 0.55);\n\tline-height: 24px;\n\tvertical-align: middle;\n\tmargin: auto;\n\tfont-weight: 800;\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/image-with-text.css"],names:[],mappings:"AAAA;CACC,qBAAqB;AACtB;;AAEA;CACC,qBAAqB;CACrB,0BAA0B;CAC1B,iBAAiB;CACjB,sBAAsB;CACtB,YAAY;CACZ,gBAAgB;AACjB",sourcesContent:[".img-with-number-parent {\n\tdisplay: inline-block;\n}\n\n.img-with-number-parent .MuiTypography-root {\n\tdisplay: inline-block;\n\tcolor: rgba(0, 0, 0, 0.55);\n\tline-height: 24px;\n\tvertical-align: middle;\n\tmargin: auto;\n\tfont-weight: 800;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/ygo-card/ygo-card-styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ygo-card-style-base {\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tborder-radius: 1rem;\n\tpadding: 0.4rem;\n\tpadding-top: 0.65rem;\n\tpadding-bottom: 0.65rem;\n}\n\n.normal-ygo-card-style {\n\tbackground: #efba4b;\n\tcolor: #333 !important;\n}\n.normal-ygo-card-style-light {\n\tbackground: #fff1b2;\n\tcolor: #333 !important;\n}\n\n.effect-ygo-card-style {\n\tbackground: #e16d33;\n\tcolor: #fffbeb !important;\n}\n\n.effect-ygo-card-style-light {\n\tbackground: rgba(255, 205, 132, 0.9);\n\tcolor: #333 !important;\n}\n\n.ritual-ygo-card-style {\n\tbackground: #51a7f3;\n\tcolor: #fffbeb !important;\n}\n.ritual-ygo-card-style-light {\n\tbackground: #dbeefd;\n\tcolor: #333 !important;\n}\n\n.fusion-ygo-card-style {\n\tbackground: #7d57c2;\n\tcolor: #fffbeb !important;\n}\n.fusion-ygo-card-style-light {\n\tbackground: #ede7f6;\n\tcolor: #333 !important;\n}\n\n.synchro-ygo-card-style {\n\tbackground: #d1d1d1;\n\tcolor: #333 !important;\n}\n.synchro-ygo-card-style-light {\n\tbackground: #f5f5f5;\n\tcolor: #333 !important;\n}\n\n.xyz-ygo-card-style {\n\tbackground: #424242;\n\tcolor: #fffbeb !important;\n}\n.xyz-ygo-card-style-light {\n\tbackground: rgba(224, 224, 224, 0.95);\n\tcolor: #333 !important;\n}\n\n.pendulum-normal-ygo-card-style {\n\tbackground: linear-gradient(#efba4b 40%, #03bfa5 55%);\n\tcolor: #333 !important;\n}\n\n.pendulum-normal-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-effect-ygo-card-style {\n\tbackground: linear-gradient(#e16d33 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-effect-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-ritual-ygo-card-style {\n\tbackground: linear-gradient(#51a7f3 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n\n.pendulum-ritual-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-fusion-ygo-card-style {\n\tbackground: linear-gradient(#7d57c2 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-fusion-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-xyz-ygo-card-style {\n\tbackground: linear-gradient(#424242 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-xyz-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-synchro-ygo-card-style {\n\tbackground: linear-gradient(#d1d1d1 40%, #03bfa5 55%);\n\tcolor: #333 !important;\n}\n\n.pendulum-synchro-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.token-ygo-card-style {\n\tbackground: #313131;\n\tcolor: #fffbeb !important;\n}\n\n.token-ygo-card-style-light {\n\tbackground: #bdbdbd;\n\tcolor: #333 !important;\n}\n\n.link-ygo-card-style {\n\tbackground: #1876d2;\n\tcolor: #fffbeb !important;\n}\n\n.link-ygo-card-style-light {\n\tbackground: #b3e5fc;\n\tcolor: #333 !important;\n}\n\n.spell-ygo-card-style {\n\tbackground: #03bfa5;\n\tcolor: #fffbeb !important;\n}\n\n.spell-ygo-card-style-light {\n\tbackground: #e0f2f1;\n\tcolor: #333 !important;\n}\n\n.trap-ygo-card-style {\n\tbackground: #d01a5e;\n\tcolor: #fffbeb !important;\n}\n\n.trap-ygo-card-style-light {\n\tbackground: #f06292;\n\tcolor: #fffbeb !important;\n}\n\n.err-ygo-card-style {\n\tbackground: #fe0944;\n\tcolor: #fffbeb !important;\n}\n.err-ygo-card-style-light {\n\tbackground: #ffcdd2;\n\tcolor: #333 !important;\n}\n\n#card-id {\n\tfont-style: italic;\n\tcolor: inherit;\n}\n\n#card-name {\n\tmargin-bottom: 0.25rem;\n\ttext-align: center;\n\tflex: 1;\n\tcolor: inherit;\n}\n\n#card-description {\n\tpadding: 0.445rem;\n\tborder-radius: 0.5rem;\n}\n\n#monster-type {\n\tfont-weight: 800;\n\tmargin-bottom: 0.28rem;\n\tcolor: inherit;\n}\n\n.ygo-card-grid-item {\n\tborder-radius: 1.2rem;\n\tpadding: 0.3rem;\n\tcursor: pointer;\n}\n\n.ygo-card-grid-item:hover {\n\tbackground: #eee;\n}\n\n.ygo-card-effect-component-some-details {\n\twhite-space: pre-wrap;\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n\toverflow: hidden;\n\tcolor: inherit;\n}\n\n.ygo-card-effect-component-full-details {\n\twhite-space: pre-wrap;\n\tcolor: inherit;\n}\n\n.ygo-card-footer-parent {\n\tdisplay: flex;\n\tpadding-top: 0.5rem;\n\talign-items: center;\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/ygo-card-styles.css"],names:[],mappings:"AAAA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;CACf,oBAAoB;CACpB,uBAAuB;AACxB;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,qCAAqC;CACrC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,sBAAsB;AACvB;;AAEA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,yBAAyB;AAC1B;AACA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,yBAAyB;AAC1B;;AAEA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,yBAAyB;AAC1B;AACA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,yBAAyB;AAC1B;AACA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,sBAAsB;AACvB;;AAEA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,cAAc;AACf;;AAEA;CACC,sBAAsB;CACtB,kBAAkB;CAClB,OAAO;CACP,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;CAChB,sBAAsB;CACtB,cAAc;AACf;;AAEA;CACC,qBAAqB;CACrB,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,oBAAoB;CACpB,qBAAqB;CACrB,4BAA4B;CAC5B,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,qBAAqB;CACrB,cAAc;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;AACpB",sourcesContent:[".ygo-card-style-base {\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tborder-radius: 1rem;\n\tpadding: 0.4rem;\n\tpadding-top: 0.65rem;\n\tpadding-bottom: 0.65rem;\n}\n\n.normal-ygo-card-style {\n\tbackground: #efba4b;\n\tcolor: #333 !important;\n}\n.normal-ygo-card-style-light {\n\tbackground: #fff1b2;\n\tcolor: #333 !important;\n}\n\n.effect-ygo-card-style {\n\tbackground: #e16d33;\n\tcolor: #fffbeb !important;\n}\n\n.effect-ygo-card-style-light {\n\tbackground: rgba(255, 205, 132, 0.9);\n\tcolor: #333 !important;\n}\n\n.ritual-ygo-card-style {\n\tbackground: #51a7f3;\n\tcolor: #fffbeb !important;\n}\n.ritual-ygo-card-style-light {\n\tbackground: #dbeefd;\n\tcolor: #333 !important;\n}\n\n.fusion-ygo-card-style {\n\tbackground: #7d57c2;\n\tcolor: #fffbeb !important;\n}\n.fusion-ygo-card-style-light {\n\tbackground: #ede7f6;\n\tcolor: #333 !important;\n}\n\n.synchro-ygo-card-style {\n\tbackground: #d1d1d1;\n\tcolor: #333 !important;\n}\n.synchro-ygo-card-style-light {\n\tbackground: #f5f5f5;\n\tcolor: #333 !important;\n}\n\n.xyz-ygo-card-style {\n\tbackground: #424242;\n\tcolor: #fffbeb !important;\n}\n.xyz-ygo-card-style-light {\n\tbackground: rgba(224, 224, 224, 0.95);\n\tcolor: #333 !important;\n}\n\n.pendulum-normal-ygo-card-style {\n\tbackground: linear-gradient(#efba4b 40%, #03bfa5 55%);\n\tcolor: #333 !important;\n}\n\n.pendulum-normal-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-effect-ygo-card-style {\n\tbackground: linear-gradient(#e16d33 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-effect-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-ritual-ygo-card-style {\n\tbackground: linear-gradient(#51a7f3 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n\n.pendulum-ritual-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-fusion-ygo-card-style {\n\tbackground: linear-gradient(#7d57c2 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-fusion-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-xyz-ygo-card-style {\n\tbackground: linear-gradient(#424242 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-xyz-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-synchro-ygo-card-style {\n\tbackground: linear-gradient(#d1d1d1 40%, #03bfa5 55%);\n\tcolor: #333 !important;\n}\n\n.pendulum-synchro-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.token-ygo-card-style {\n\tbackground: #313131;\n\tcolor: #fffbeb !important;\n}\n\n.token-ygo-card-style-light {\n\tbackground: #bdbdbd;\n\tcolor: #333 !important;\n}\n\n.link-ygo-card-style {\n\tbackground: #1876d2;\n\tcolor: #fffbeb !important;\n}\n\n.link-ygo-card-style-light {\n\tbackground: #b3e5fc;\n\tcolor: #333 !important;\n}\n\n.spell-ygo-card-style {\n\tbackground: #03bfa5;\n\tcolor: #fffbeb !important;\n}\n\n.spell-ygo-card-style-light {\n\tbackground: #e0f2f1;\n\tcolor: #333 !important;\n}\n\n.trap-ygo-card-style {\n\tbackground: #d01a5e;\n\tcolor: #fffbeb !important;\n}\n\n.trap-ygo-card-style-light {\n\tbackground: #f06292;\n\tcolor: #fffbeb !important;\n}\n\n.err-ygo-card-style {\n\tbackground: #fe0944;\n\tcolor: #fffbeb !important;\n}\n.err-ygo-card-style-light {\n\tbackground: #ffcdd2;\n\tcolor: #333 !important;\n}\n\n#card-id {\n\tfont-style: italic;\n\tcolor: inherit;\n}\n\n#card-name {\n\tmargin-bottom: 0.25rem;\n\ttext-align: center;\n\tflex: 1;\n\tcolor: inherit;\n}\n\n#card-description {\n\tpadding: 0.445rem;\n\tborder-radius: 0.5rem;\n}\n\n#monster-type {\n\tfont-weight: 800;\n\tmargin-bottom: 0.28rem;\n\tcolor: inherit;\n}\n\n.ygo-card-grid-item {\n\tborder-radius: 1.2rem;\n\tpadding: 0.3rem;\n\tcursor: pointer;\n}\n\n.ygo-card-grid-item:hover {\n\tbackground: #eee;\n}\n\n.ygo-card-effect-component-some-details {\n\twhite-space: pre-wrap;\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n\toverflow: hidden;\n\tcolor: inherit;\n}\n\n.ygo-card-effect-component-full-details {\n\twhite-space: pre-wrap;\n\tcolor: inherit;\n}\n\n.ygo-card-footer-parent {\n\tdisplay: flex;\n\tpadding-top: 0.5rem;\n\talign-items: center;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/css/ygo-card/ygo-card-styles.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/ygo-card/ygo-card-styles.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);