"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[592],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),memoTheme=__webpack_require__("./node_modules/@mui/material/utils/memoTheme.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js");function createSimplePaletteValueFilter(additionalPropertiesToCheck=[]){return([,value])=>value&&function checkSimplePaletteColorValues(obj,additionalPropertiesToCheck=[]){if(!function hasCorrectMainProperty(obj){return"string"==typeof obj.main}(obj))return!1;for(const value of additionalPropertiesToCheck)if(!obj.hasOwnProperty(value)||"string"!=typeof obj[value])return!1;return!0}(value,additionalPropertiesToCheck)}var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const v6Colors={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Typography_extendSxProp=function internal_createExtendSxProp(){return extendSxProp.A}(),TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((0,memoTheme.A)((({theme})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(theme.typography).filter((([variant,value])=>"inherit"!==variant&&value&&"object"==typeof value)).map((([variant,value])=>({props:{variant},style:value}))),...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map((([color])=>({props:{color},style:{color:(theme.vars||theme).palette[color].main}}))),...Object.entries(theme.palette?.text||{}).filter((([,value])=>"string"==typeof value)).map((([color])=>({props:{color:`text${(0,capitalize.A)(color)}`},style:{color:(theme.vars||theme).palette.text[color]}}))),{props:({ownerState})=>"inherit"!==ownerState.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState})=>ownerState.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState})=>ownerState.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState})=>ownerState.paragraph,style:{marginBottom:16}}]})))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const{color,...themeProps}=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiTypography"}),props=Typography_extendSxProp({...themeProps,...!v6Colors[color]&&{color}}),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping,...other}=props,ownerState={...props,align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping},Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,{as:Component,ref,className:(0,clsx.A)(classes.root,className),...other,ownerState,style:{..."inherit"!==align&&{"--Typography-textAlign":align},...other.style}})}))},"./src/stories/data-display/Section.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Section_stories});var react=__webpack_require__("./node_modules/react/index.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),section=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/data-display/section.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(section.A,options);section.A&&section.A.locals&&section.A.locals;const Section_stories={title:"Generic/Section",component:({children,sectionName,sectionHeaderBackground="default",sticky=!1,maxWidth="100%",shadow="heavy-shadow",border="no-border",margin="no-shadow"})=>{let sectionHeaderBackgroundClass="";void 0!==sectionHeaderBackground&&""!==sectionHeaderBackground&&(sectionHeaderBackgroundClass="default"===sectionHeaderBackground||"ban-list"===sectionHeaderBackground||"product"===sectionHeaderBackground?`${sectionHeaderBackground}-section-header-container`:`${sectionHeaderBackground.toLocaleLowerCase()}-ygo-card-style`);const stickyClass=sticky?"sticky":"";return react.createElement("div",{style:{maxWidth},className:`section-parent ${margin}-margin ${shadow} ${border} ${stickyClass}`},react.createElement("div",{className:`section-header-container ${shadow} ${sectionHeaderBackgroundClass}`},react.createElement(Typography.A,{variant:"h1",align:"center",className:"section-header-text"},sectionName)),children)},args:{sectionName:"Content",children:react.createElement("div",null,react.createElement("p",null,"This is the content"))}},Default={},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/data-display/section.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".section-parent {\n\tmargin: auto;\n\tmargin-bottom: 5rem;\n\tborder-radius: 1.75rem;\n\tpadding: 0rem;\n\tbackground: white;\n\twidth: 100%;\n}\n\n.section-header-container {\n\tcolor: white;\n\tborder-top-left-radius: 1.5rem;\n\tborder-top-right-radius: 1.5rem;\n}\n\n.default-section-header-container {\n\tbackground: #4d4a59;\n}\n\n.ban-list-section-header-container {\n\tbackground: #fe3d58;\n}\n\n.product-section-header-container {\n\tbackground: #a4508b;\n}\n\n.section-header-text {\n\tcolor: inherit;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n\n.section-content {\n\tpadding-left: 0.8rem;\n\tpadding-right: 0.8rem;\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n\tbackground: white;\n\tborder-bottom-left-radius: 1.75rem;\n\tborder-bottom-right-radius: 1.75rem;\n}\n\n.default-border {\n\tborder: 2px rgba(0, 0, 0, 0.3);\n\tborder-style: solid;\n}\n\n.multi-section:nth-child(even) {\n\tbackground: rgb(246, 246, 246);\n\tmargin-left: -0.8rem;\n\tmargin-right: -0.8rem;\n\tpadding-left: 0.8rem;\n\tpadding-right: 0.8rem;\n}\n\n.multi-section:first-child {\n\tpadding-bottom: 2rem;\n}\n\n.multi-section:not(:first-child) {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\n","",{version:3,sources:["webpack://./src/css/data-display/section.css"],names:[],mappings:"AAAA;CACC,YAAY;CACZ,mBAAmB;CACnB,sBAAsB;CACtB,aAAa;CACb,iBAAiB;CACjB,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,8BAA8B;CAC9B,+BAA+B;AAChC;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB,iBAAiB;CACjB,oBAAoB;AACrB;;AAEA;CACC,oBAAoB;CACpB,qBAAqB;CACrB,iBAAiB;CACjB,oBAAoB;CACpB,iBAAiB;CACjB,kCAAkC;CAClC,mCAAmC;AACpC;;AAEA;CACC,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,8BAA8B;CAC9B,oBAAoB;CACpB,qBAAqB;CACrB,oBAAoB;CACpB,qBAAqB;AACtB;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,iBAAiB;CACjB,oBAAoB;AACrB",sourcesContent:[".section-parent {\n\tmargin: auto;\n\tmargin-bottom: 5rem;\n\tborder-radius: 1.75rem;\n\tpadding: 0rem;\n\tbackground: white;\n\twidth: 100%;\n}\n\n.section-header-container {\n\tcolor: white;\n\tborder-top-left-radius: 1.5rem;\n\tborder-top-right-radius: 1.5rem;\n}\n\n.default-section-header-container {\n\tbackground: #4d4a59;\n}\n\n.ban-list-section-header-container {\n\tbackground: #fe3d58;\n}\n\n.product-section-header-container {\n\tbackground: #a4508b;\n}\n\n.section-header-text {\n\tcolor: inherit;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n\n.section-content {\n\tpadding-left: 0.8rem;\n\tpadding-right: 0.8rem;\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n\tbackground: white;\n\tborder-bottom-left-radius: 1.75rem;\n\tborder-bottom-right-radius: 1.75rem;\n}\n\n.default-border {\n\tborder: 2px rgba(0, 0, 0, 0.3);\n\tborder-style: solid;\n}\n\n.multi-section:nth-child(even) {\n\tbackground: rgb(246, 246, 246);\n\tmargin-left: -0.8rem;\n\tmargin-right: -0.8rem;\n\tpadding-left: 0.8rem;\n\tpadding-right: 0.8rem;\n}\n\n.multi-section:first-child {\n\tpadding-bottom: 2rem;\n}\n\n.multi-section:not(:first-child) {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);