"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[476],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx.A)(classes.root,className)},other))}))},"./src/stories/data-display/Hint.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NonFullWidth:()=>NonFullWidth,Tight:()=>Tight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Hint_stories});var react=__webpack_require__("./node_modules/react/index.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),hint=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/data-display/hint.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(hint.A,options);hint.A&&hint.A.locals&&hint.A.locals;const Hint_stories={title:"Generic/Hint",component:({children,backgroundColor="#f6f2fb",textColor="black",variant="default",fullWidth=!0})=>{const className=fullWidth?`hint-full-width hint-${variant}`:`hint hint-${variant}`,typographyVariant="tight"===variant?"subtitle1":"h6";return react.createElement("div",{"data-testid":"hint-component",className,style:{backgroundColor}},react.createElement(Typography.A,{"data-testid":"hint-text",className:"hint-text",style:{color:textColor},variant:typographyVariant,align:"center"},children))},args:{children:"No Content To Show"}},Default={},Tight={args:{variant:"tight"}},NonFullWidth={args:{variant:"tight",fullWidth:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Tight.parameters={...Tight.parameters,docs:{...Tight.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'tight'\n  }\n}",...Tight.parameters?.docs?.source}}},NonFullWidth.parameters={...NonFullWidth.parameters,docs:{...NonFullWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'tight',\n    fullWidth: false\n  }\n}",...NonFullWidth.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Tight","NonFullWidth"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/data-display/hint.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hint {\n\tmax-width: 70%;\n\twidth: 70%;\n\tborder-radius: 2rem;\n\tmargin: auto;\n}\n\n.hint-full-width {\n\tmax-width: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tborder-radius: 2rem;\n\tmargin: auto;\n}\n\n.hint-default {\n\tpadding: 1.8rem;\n\tmargin-top: 2rem;\n\tmargin-bottom: 2rem;\n}\n\n.hint-tight {\n\tpadding: 1rem;\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n\n.hint-text {\n\tmargin: 0rem;\n}\n","",{version:3,sources:["webpack://./src/css/data-display/hint.css"],names:[],mappings:"AAAA;CACC,cAAc;CACd,UAAU;CACV,mBAAmB;CACnB,YAAY;AACb;;AAEA;CACC,eAAe;CACf,WAAW;CACX,sBAAsB;CACtB,mBAAmB;CACnB,YAAY;AACb;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,YAAY;AACb",sourcesContent:[".hint {\n\tmax-width: 70%;\n\twidth: 70%;\n\tborder-radius: 2rem;\n\tmargin: auto;\n}\n\n.hint-full-width {\n\tmax-width: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tborder-radius: 2rem;\n\tmargin: auto;\n}\n\n.hint-default {\n\tpadding: 1.8rem;\n\tmargin-top: 2rem;\n\tmargin-bottom: 2rem;\n}\n\n.hint-tight {\n\tpadding: 1rem;\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n\n.hint-text {\n\tmargin: 0rem;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);