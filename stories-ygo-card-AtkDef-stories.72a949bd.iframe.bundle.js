"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[209],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/styleFunctionSx/extendSxProp.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const v6Colors={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Typography_extendSxProp=function internal_createExtendSxProp(){return extendSxProp.A}(),TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((0,memoTheme.A)((({theme})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(theme.typography).filter((([variant,value])=>"inherit"!==variant&&value&&"object"==typeof value)).map((([variant,value])=>({props:{variant},style:value}))),...Object.entries(theme.palette).filter((([,value])=>value&&value.main)).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}}))),...Object.entries(theme.palette?.text||{}).filter((([,value])=>"string"==typeof value)).map((([color])=>({props:{color:`text${(0,capitalize.A)(color)}`},style:{color:(theme.vars||theme).palette.text[color]}}))),{props:({ownerState})=>"inherit"!==ownerState.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState})=>ownerState.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState})=>ownerState.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState})=>ownerState.paragraph,style:{marginBottom:16}}]})))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const{color,...themeProps}=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiTypography"}),props=Typography_extendSxProp({...themeProps,...!v6Colors[color]&&{color}}),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping,...other}=props,ownerState={...props,align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping},Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,{as:Component,ref,className:(0,clsx.A)(classes.root,className),...other,ownerState,style:{..."inherit"!==align&&{"--Typography-textAlign":align},...other.style}})}))},"./src/stories/ygo-card/AtkDef.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LinkMonster:()=>LinkMonster,NormalMonster:()=>NormalMonster,NormalMonsterUndefinedStats:()=>NormalMonsterUndefinedStats,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Yugioh Card/Attack and Defense",component:__webpack_require__("./src/components/ygo-card/AtkDef.tsx").A,args:{monsterAtk:"2500",monsterDef:"2000",cardColor:"Normal"}},NormalMonster={},NormalMonsterUndefinedStats={args:{monsterAtk:void 0,monsterDef:void 0}},LinkMonster={args:{cardColor:"Link"}},__namedExportsOrder=["NormalMonster","NormalMonsterUndefinedStats","LinkMonster"];NormalMonster.parameters={...NormalMonster.parameters,docs:{...NormalMonster.parameters?.docs,source:{originalSource:"{}",...NormalMonster.parameters?.docs?.source}}},NormalMonsterUndefinedStats.parameters={...NormalMonsterUndefinedStats.parameters,docs:{...NormalMonsterUndefinedStats.parameters?.docs,source:{originalSource:"{\n  args: {\n    monsterAtk: undefined,\n    monsterDef: undefined\n  }\n}",...NormalMonsterUndefinedStats.parameters?.docs?.source}}},LinkMonster.parameters={...LinkMonster.parameters,docs:{...LinkMonster.parameters?.docs,source:{originalSource:"{\n  args: {\n    cardColor: 'Link'\n  }\n}",...LinkMonster.parameters?.docs?.source}}}},"./src/components/ygo-card/AtkDef.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ygo_card_AtkDef});var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),atk_def=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/atk-def.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(atk_def.A,options);atk_def.A&&atk_def.A.locals&&atk_def.A.locals;const modifyStat=stat=>void 0===stat?"?":stat,ygo_card_AtkDef=({monsterAtk,monsterDef,cardColor})=>react.createElement("div",{"data-testid":"atk-def-component",className:"monster-stat-parent"},react.createElement("div",{"data-testid":"atk-def-wrapper",className:"monster-stat-sub-parent"},react.createElement(Typography.A,{"data-testid":"atk-text",className:"monster-stat monster-attack-stat",variant:"body1"},modifyStat(monsterAtk)),"Link"!==cardColor?react.createElement(Typography.A,{"data-testid":"def-text",className:"monster-stat monster-defense-stat",variant:"body1"},modifyStat(monsterDef)):void 0))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/atk-def.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monster-stat-parent {\n\twidth: 100%;\n\ttext-align: right;\n}\n\n.monster-stat-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.75);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n}\n\n.monster-stat {\n\tdisplay: inline-block;\n\tfont-weight: 800;\n}\n\n.monster-attack-stat {\n\tcolor: rgb(255, 77, 77, 0.93);\n}\n\n.monster-defense-stat {\n\tmargin-left: 0.6rem;\n\tcolor: rgba(77, 166, 255, 0.9);\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/atk-def.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,iBAAiB;AAClB;;AAEA;CACC,qCAAqC;CACrC,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;CACtB,oBAAoB;CACpB,qBAAqB;CACrB,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,gBAAgB;AACjB;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,8BAA8B;AAC/B",sourcesContent:[".monster-stat-parent {\n\twidth: 100%;\n\ttext-align: right;\n}\n\n.monster-stat-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.75);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n}\n\n.monster-stat {\n\tdisplay: inline-block;\n\tfont-weight: 800;\n}\n\n.monster-attack-stat {\n\tcolor: rgb(255, 77, 77, 0.93);\n}\n\n.monster-defense-stat {\n\tmargin-left: 0.6rem;\n\tcolor: rgba(77, 166, 255, 0.9);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);