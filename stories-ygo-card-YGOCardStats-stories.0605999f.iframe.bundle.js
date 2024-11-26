"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[300],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js");function createSimplePaletteValueFilter(additionalPropertiesToCheck=[]){return([,value])=>value&&function checkSimplePaletteColorValues(obj,additionalPropertiesToCheck=[]){if(!function hasCorrectMainProperty(obj){return"string"==typeof obj.main}(obj))return!1;for(const value of additionalPropertiesToCheck)if(!obj.hasOwnProperty(value)||"string"!=typeof obj[value])return!1;return!0}(value,additionalPropertiesToCheck)}var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const v6Colors={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Typography_extendSxProp=function internal_createExtendSxProp(){return extendSxProp.A}(),TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((0,memoTheme.A)((({theme})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(theme.typography).filter((([variant,value])=>"inherit"!==variant&&value&&"object"==typeof value)).map((([variant,value])=>({props:{variant},style:value}))),...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}}))),...Object.entries(theme.palette?.text||{}).filter((([,value])=>"string"==typeof value)).map((([color])=>({props:{color:`text${(0,capitalize.A)(color)}`},style:{color:(theme.vars||theme).palette.text[color]}}))),{props:({ownerState})=>"inherit"!==ownerState.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState})=>ownerState.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState})=>ownerState.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState})=>ownerState.paragraph,style:{marginBottom:16}}]})))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const{color,...themeProps}=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiTypography"}),props=Typography_extendSxProp({...themeProps,...!v6Colors[color]&&{color}}),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping,...other}=props,ownerState={...props,align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping},Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,{as:Component,ref,className:(0,clsx.A)(classes.root,className),...other,ownerState,style:{..."inherit"!==align&&{"--Typography-textAlign":align},...other.style}})}))},"./src/stories/ygo-card/YGOCardStats.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardStats:()=>CardStats,CardStatsFullDetails:()=>CardStatsFullDetails,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Yugioh Card/Yugioh Card Data",component:__webpack_require__("./src/components/ygo-card/YGOCardStats.tsx").A,args:{cardColor:"Normal",cardEffect:"The ultimate wizard in terms of attack and defense.",monsterType:"Spellcaster/Normal",monsterAttack:"2500",monsterDefense:"2100",cardID:"46986414",fullDetails:!1}},CardStats={},CardStatsFullDetails={args:{fullDetails:!0}},__namedExportsOrder=["CardStats","CardStatsFullDetails"];CardStats.parameters={...CardStats.parameters,docs:{...CardStats.parameters?.docs,source:{originalSource:"{}",...CardStats.parameters?.docs?.source}}},CardStatsFullDetails.parameters={...CardStatsFullDetails.parameters,docs:{...CardStatsFullDetails.parameters?.docs,source:{originalSource:"{\n  args: {\n    fullDetails: true\n  }\n}",...CardStatsFullDetails.parameters?.docs?.source}}}},"./src/components/ygo-card/AtkDef.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ygo_card_AtkDef});var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),atk_def=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/atk-def.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(atk_def.A,options);atk_def.A&&atk_def.A.locals&&atk_def.A.locals;const modifyStat=stat=>void 0===stat?"?":stat,ygo_card_AtkDef=({monsterAtk,monsterDef,cardColor})=>react.createElement("div",{"data-testid":"atk-def-component",className:"monster-stat-parent"},react.createElement("div",{"data-testid":"atk-def-wrapper",className:"monster-stat-sub-parent"},react.createElement(Typography.A,{"data-testid":"atk-text",className:"monster-stat monster-attack-stat",variant:"body1"},modifyStat(monsterAtk)),"Link"!==cardColor?react.createElement(Typography.A,{"data-testid":"def-text",className:"monster-stat monster-defense-stat",variant:"body1"},modifyStat(monsterDef)):void 0))},"./src/components/ygo-card/YGOCardStats.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_AtkDef__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ygo-card/AtkDef.tsx");__webpack_require__("./src/css/ygo-card/ygo-card-styles.css");const __WEBPACK_DEFAULT_EXPORT__=({cardColor,cardEffect,monsterType,monsterAttack,monsterDefense,cardID,fullDetails})=>{const color=void 0===cardColor?"Err":cardColor?.toLowerCase(),isBackRow="spell"===color||"trap"===color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`YgoCardDarkText ${cardColor?.toLowerCase()}-ygo-card-style-light`,id:"card-description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{variant:"body1",id:"monster-type",noWrap:!0},isBackRow?cardColor:monsterType),fullDetails?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{className:"ygo-card-effect-component-full-details",variant:"body2"},cardEffect):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{className:"ygo-card-effect-component-some-details",variant:"body2"},cardEffect),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ygo-card-footer-parent"},fullDetails?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{variant:"body2",id:"card-id"},cardID):void 0,fullDetails&&!isBackRow&&"err"!==color&&void 0!==cardColor&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AtkDef__WEBPACK_IMPORTED_MODULE_1__.A,{monsterAtk:monsterAttack,monsterDef:monsterDefense,cardColor})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/atk-def.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monster-stat-parent {\n\twidth: 100%;\n\ttext-align: right;\n}\n\n.monster-stat-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.75);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n}\n\n.monster-stat {\n\tdisplay: inline-block;\n\tfont-weight: 800;\n}\n\n.monster-attack-stat {\n\tcolor: rgb(255, 77, 77, 0.93);\n}\n\n.monster-defense-stat {\n\tmargin-left: 0.6rem;\n\tcolor: rgba(77, 166, 255, 0.9);\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/atk-def.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,iBAAiB;AAClB;;AAEA;CACC,qCAAqC;CACrC,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;CACtB,oBAAoB;CACpB,qBAAqB;CACrB,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,gBAAgB;AACjB;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,8BAA8B;AAC/B",sourcesContent:[".monster-stat-parent {\n\twidth: 100%;\n\ttext-align: right;\n}\n\n.monster-stat-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.75);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n}\n\n.monster-stat {\n\tdisplay: inline-block;\n\tfont-weight: 800;\n}\n\n.monster-attack-stat {\n\tcolor: rgb(255, 77, 77, 0.93);\n}\n\n.monster-defense-stat {\n\tmargin-left: 0.6rem;\n\tcolor: rgba(77, 166, 255, 0.9);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/ygo-card-styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ygo-card-style-base {\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tborder-radius: 1.25rem;\n\tpadding: 0.4rem;\n\tpadding-top: 0.65rem;\n\tpadding-bottom: 0.65rem;\n}\n\n.normal-ygo-card-style {\n\tbackground: #efba4b;\n\tcolor: #333 !important;\n}\n.normal-ygo-card-style-light {\n\tbackground: #fff1b2;\n\tcolor: #333 !important;\n}\n\n.effect-ygo-card-style {\n\tbackground: #e16d33;\n\tcolor: #fffbeb !important;\n}\n\n.effect-ygo-card-style-light {\n\tbackground: rgba(255, 205, 132, 0.9);\n\tcolor: #333 !important;\n}\n\n.ritual-ygo-card-style {\n\tbackground: #51a7f3;\n\tcolor: #fffbeb !important;\n}\n.ritual-ygo-card-style-light {\n\tbackground: #dbeefd;\n\tcolor: #333 !important;\n}\n\n.fusion-ygo-card-style {\n\tbackground: #7d57c2;\n\tcolor: #fffbeb !important;\n}\n.fusion-ygo-card-style-light {\n\tbackground: #ede7f6;\n\tcolor: #333 !important;\n}\n\n.synchro-ygo-card-style {\n\tbackground: #d1d1d1;\n\tcolor: #333 !important;\n}\n.synchro-ygo-card-style-light {\n\tbackground: #f5f5f5;\n\tcolor: #333 !important;\n}\n\n.xyz-ygo-card-style {\n\tbackground: #424242;\n\tcolor: #fffbeb !important;\n}\n.xyz-ygo-card-style-light {\n\tbackground: rgba(224, 224, 224, 0.95);\n\tcolor: #333 !important;\n}\n\n.pendulum-normal-ygo-card-style {\n\tbackground: linear-gradient(#efba4b 40%, #03bfa5 55%);\n\tcolor: #333 !important;\n}\n\n.pendulum-normal-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-effect-ygo-card-style {\n\tbackground: linear-gradient(#e16d33 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-effect-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-ritual-ygo-card-style {\n\tbackground: linear-gradient(#51a7f3 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n\n.pendulum-ritual-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-fusion-ygo-card-style {\n\tbackground: linear-gradient(#7d57c2 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-fusion-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-xyz-ygo-card-style {\n\tbackground: linear-gradient(#424242 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-xyz-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-synchro-ygo-card-style {\n\tbackground: linear-gradient(#d1d1d1 40%, #03bfa5 55%);\n\tcolor: #333 !important;\n}\n\n.pendulum-synchro-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.token-ygo-card-style {\n\tbackground: #313131;\n\tcolor: #fffbeb !important;\n}\n\n.token-ygo-card-style-light {\n\tbackground: #bdbdbd;\n\tcolor: #333 !important;\n}\n\n.link-ygo-card-style {\n\tbackground: #1876d2;\n\tcolor: #fffbeb !important;\n}\n\n.link-ygo-card-style-light {\n\tbackground: #b3e5fc;\n\tcolor: #333 !important;\n}\n\n.spell-ygo-card-style {\n\tbackground: #03bfa5;\n\tcolor: #fffbeb !important;\n}\n\n.spell-ygo-card-style-light {\n\tbackground: #e0f2f1;\n\tcolor: #333 !important;\n}\n\n.trap-ygo-card-style {\n\tbackground: #d01a5e;\n\tcolor: #fffbeb !important;\n}\n\n.trap-ygo-card-style-light {\n\tbackground: #f06292;\n\tcolor: #fffbeb !important;\n}\n\n.err-ygo-card-style {\n\tbackground: #fe0944;\n\tcolor: #fffbeb !important;\n}\n.err-ygo-card-style-light {\n\tbackground: #ffcdd2;\n\tcolor: #333 !important;\n}\n\n#card-id {\n\tfont-style: italic;\n\tcolor: inherit;\n}\n\n#card-name {\n\tmargin-bottom: 0.25rem;\n\ttext-align: center;\n\tflex: 1;\n\tcolor: inherit;\n}\n\n#card-description {\n\tpadding: 0.445rem;\n\tborder-radius: 0.5rem;\n}\n\n#monster-type {\n\tfont-weight: 800;\n\tmargin-bottom: 0.28rem;\n\tcolor: inherit;\n}\n\n.ygo-card-grid-item {\n\tborder-radius: 1.2rem;\n\tpadding: 0.3rem;\n\tcursor: pointer;\n}\n\n.ygo-card-grid-item:hover {\n\tbackground: #eee;\n}\n\n.ygo-card-effect-component-some-details {\n\twhite-space: pre-wrap;\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n\toverflow: hidden;\n\tcolor: inherit;\n}\n\n.ygo-card-effect-component-full-details {\n\twhite-space: pre-wrap;\n\tcolor: inherit;\n}\n\n.ygo-card-footer-parent {\n\tdisplay: flex;\n\tpadding-top: 0.5rem;\n\talign-items: center;\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/ygo-card-styles.css"],names:[],mappings:"AAAA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,uBAAuB;CACvB,sBAAsB;CACtB,eAAe;CACf,oBAAoB;CACpB,uBAAuB;AACxB;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,qCAAqC;CACrC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,sBAAsB;AACvB;;AAEA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,yBAAyB;AAC1B;AACA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,yBAAyB;AAC1B;;AAEA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,yBAAyB;AAC1B;AACA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,yBAAyB;AAC1B;AACA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,qDAAqD;CACrD,sBAAsB;AACvB;;AAEA;CACC,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,cAAc;AACf;;AAEA;CACC,sBAAsB;CACtB,kBAAkB;CAClB,OAAO;CACP,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;CAChB,sBAAsB;CACtB,cAAc;AACf;;AAEA;CACC,qBAAqB;CACrB,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,oBAAoB;CACpB,qBAAqB;CACrB,4BAA4B;CAC5B,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,qBAAqB;CACrB,cAAc;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;AACpB",sourcesContent:[".ygo-card-style-base {\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tborder-radius: 1.25rem;\n\tpadding: 0.4rem;\n\tpadding-top: 0.65rem;\n\tpadding-bottom: 0.65rem;\n}\n\n.normal-ygo-card-style {\n\tbackground: #efba4b;\n\tcolor: #333 !important;\n}\n.normal-ygo-card-style-light {\n\tbackground: #fff1b2;\n\tcolor: #333 !important;\n}\n\n.effect-ygo-card-style {\n\tbackground: #e16d33;\n\tcolor: #fffbeb !important;\n}\n\n.effect-ygo-card-style-light {\n\tbackground: rgba(255, 205, 132, 0.9);\n\tcolor: #333 !important;\n}\n\n.ritual-ygo-card-style {\n\tbackground: #51a7f3;\n\tcolor: #fffbeb !important;\n}\n.ritual-ygo-card-style-light {\n\tbackground: #dbeefd;\n\tcolor: #333 !important;\n}\n\n.fusion-ygo-card-style {\n\tbackground: #7d57c2;\n\tcolor: #fffbeb !important;\n}\n.fusion-ygo-card-style-light {\n\tbackground: #ede7f6;\n\tcolor: #333 !important;\n}\n\n.synchro-ygo-card-style {\n\tbackground: #d1d1d1;\n\tcolor: #333 !important;\n}\n.synchro-ygo-card-style-light {\n\tbackground: #f5f5f5;\n\tcolor: #333 !important;\n}\n\n.xyz-ygo-card-style {\n\tbackground: #424242;\n\tcolor: #fffbeb !important;\n}\n.xyz-ygo-card-style-light {\n\tbackground: rgba(224, 224, 224, 0.95);\n\tcolor: #333 !important;\n}\n\n.pendulum-normal-ygo-card-style {\n\tbackground: linear-gradient(#efba4b 40%, #03bfa5 55%);\n\tcolor: #333 !important;\n}\n\n.pendulum-normal-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-effect-ygo-card-style {\n\tbackground: linear-gradient(#e16d33 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-effect-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-ritual-ygo-card-style {\n\tbackground: linear-gradient(#51a7f3 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n\n.pendulum-ritual-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-fusion-ygo-card-style {\n\tbackground: linear-gradient(#7d57c2 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-fusion-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-xyz-ygo-card-style {\n\tbackground: linear-gradient(#424242 40%, #03bfa5 55%);\n\tcolor: #fffbeb !important;\n}\n.pendulum-xyz-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.pendulum-synchro-ygo-card-style {\n\tbackground: linear-gradient(#d1d1d1 40%, #03bfa5 55%);\n\tcolor: #333 !important;\n}\n\n.pendulum-synchro-ygo-card-style-light {\n\tbackground: rgba(238, 248, 247, 0.8);\n\tcolor: #333 !important;\n}\n\n.token-ygo-card-style {\n\tbackground: #313131;\n\tcolor: #fffbeb !important;\n}\n\n.token-ygo-card-style-light {\n\tbackground: #bdbdbd;\n\tcolor: #333 !important;\n}\n\n.link-ygo-card-style {\n\tbackground: #1876d2;\n\tcolor: #fffbeb !important;\n}\n\n.link-ygo-card-style-light {\n\tbackground: #b3e5fc;\n\tcolor: #333 !important;\n}\n\n.spell-ygo-card-style {\n\tbackground: #03bfa5;\n\tcolor: #fffbeb !important;\n}\n\n.spell-ygo-card-style-light {\n\tbackground: #e0f2f1;\n\tcolor: #333 !important;\n}\n\n.trap-ygo-card-style {\n\tbackground: #d01a5e;\n\tcolor: #fffbeb !important;\n}\n\n.trap-ygo-card-style-light {\n\tbackground: #f06292;\n\tcolor: #fffbeb !important;\n}\n\n.err-ygo-card-style {\n\tbackground: #fe0944;\n\tcolor: #fffbeb !important;\n}\n.err-ygo-card-style-light {\n\tbackground: #ffcdd2;\n\tcolor: #333 !important;\n}\n\n#card-id {\n\tfont-style: italic;\n\tcolor: inherit;\n}\n\n#card-name {\n\tmargin-bottom: 0.25rem;\n\ttext-align: center;\n\tflex: 1;\n\tcolor: inherit;\n}\n\n#card-description {\n\tpadding: 0.445rem;\n\tborder-radius: 0.5rem;\n}\n\n#monster-type {\n\tfont-weight: 800;\n\tmargin-bottom: 0.28rem;\n\tcolor: inherit;\n}\n\n.ygo-card-grid-item {\n\tborder-radius: 1.2rem;\n\tpadding: 0.3rem;\n\tcursor: pointer;\n}\n\n.ygo-card-grid-item:hover {\n\tbackground: #eee;\n}\n\n.ygo-card-effect-component-some-details {\n\twhite-space: pre-wrap;\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n\toverflow: hidden;\n\tcolor: inherit;\n}\n\n.ygo-card-effect-component-full-details {\n\twhite-space: pre-wrap;\n\tcolor: inherit;\n}\n\n.ygo-card-footer-parent {\n\tdisplay: flex;\n\tpadding-top: 0.5rem;\n\talign-items: center;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/css/ygo-card/ygo-card-styles.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/ygo-card-styles.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_ygo_card_styles_css__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);