"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[592],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx.A)(classes.root,className)},other))}))},"./src/stories/data-display/Section.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Section_stories});__webpack_require__("./node_modules/react/index.js");var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),section=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/data-display/section.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(section.A,options);section.A&&section.A.locals&&section.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Section=({children,sectionName,sectionHeaderBackground="default",sticky=!1,maxWidth="100%",shadow="heavy-shadow",border="no-border",margin="no-shadow"})=>{let sectionHeaderBackgroundClass="";void 0!==sectionHeaderBackground&&""!==sectionHeaderBackground&&(sectionHeaderBackgroundClass="default"===sectionHeaderBackground||"ban-list"===sectionHeaderBackground||"product"===sectionHeaderBackground?`${sectionHeaderBackground}-section-header-container`:`${sectionHeaderBackground.toLocaleLowerCase()}-ygo-card-style`);const stickyClass=sticky?"sticky":"";return(0,jsx_runtime.jsxs)("div",{style:{maxWidth},className:`section-parent ${margin}-margin ${shadow} ${border} ${stickyClass}`,children:[(0,jsx_runtime.jsx)("div",{className:`section-header-container ${shadow} ${sectionHeaderBackgroundClass}`,children:(0,jsx_runtime.jsx)(Typography.A,{variant:"h1",align:"center",className:"section-header-text",children:sectionName})}),children]})};Section.displayName="Section";const Section_stories={title:"Generic/Section",component:Section,args:{sectionName:"Content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("p",{children:"This is the content"})})}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/css/data-display/section.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".section-parent {\n\tmargin: auto;\n\tmargin-bottom: 5rem;\n\tborder-radius: 1.75rem;\n\tpadding: 0rem;\n\tbackground: white;\n\twidth: 100%;\n}\n\n.section-header-container {\n\tcolor: white;\n\tborder-top-left-radius: 1.5rem;\n\tborder-top-right-radius: 1.5rem;\n}\n\n.default-section-header-container {\n\tbackground: #4d4a59;\n}\n\n.ban-list-section-header-container {\n\tbackground: #fe3d58;\n}\n\n.product-section-header-container {\n\tbackground: #a4508b;\n}\n\n.section-header-text {\n\tcolor: inherit;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n\n.section-content {\n\tpadding-left: 0.8rem;\n\tpadding-right: 0.8rem;\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n\tbackground: white;\n\tborder-bottom-left-radius: 1.75rem;\n\tborder-bottom-right-radius: 1.75rem;\n}\n\n.default-border {\n\tborder: 2px rgba(0, 0, 0, 0.3);\n\tborder-style: solid;\n}\n\n.multi-section:nth-child(even) {\n\tbackground: rgb(246, 246, 246);\n\tmargin-left: -0.8rem;\n\tmargin-right: -0.8rem;\n\tpadding-left: 0.8rem;\n\tpadding-right: 0.8rem;\n}\n\n.multi-section:first-child {\n\tpadding-bottom: 2rem;\n}\n\n.multi-section:not(:first-child) {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\n","",{version:3,sources:["webpack://./src/css/data-display/section.css"],names:[],mappings:"AAAA;CACC,YAAY;CACZ,mBAAmB;CACnB,sBAAsB;CACtB,aAAa;CACb,iBAAiB;CACjB,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,8BAA8B;CAC9B,+BAA+B;AAChC;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB,iBAAiB;CACjB,oBAAoB;AACrB;;AAEA;CACC,oBAAoB;CACpB,qBAAqB;CACrB,iBAAiB;CACjB,oBAAoB;CACpB,iBAAiB;CACjB,kCAAkC;CAClC,mCAAmC;AACpC;;AAEA;CACC,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,8BAA8B;CAC9B,oBAAoB;CACpB,qBAAqB;CACrB,oBAAoB;CACpB,qBAAqB;AACtB;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,iBAAiB;CACjB,oBAAoB;AACrB",sourcesContent:[".section-parent {\n\tmargin: auto;\n\tmargin-bottom: 5rem;\n\tborder-radius: 1.75rem;\n\tpadding: 0rem;\n\tbackground: white;\n\twidth: 100%;\n}\n\n.section-header-container {\n\tcolor: white;\n\tborder-top-left-radius: 1.5rem;\n\tborder-top-right-radius: 1.5rem;\n}\n\n.default-section-header-container {\n\tbackground: #4d4a59;\n}\n\n.ban-list-section-header-container {\n\tbackground: #fe3d58;\n}\n\n.product-section-header-container {\n\tbackground: #a4508b;\n}\n\n.section-header-text {\n\tcolor: inherit;\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n\n.section-content {\n\tpadding-left: 0.8rem;\n\tpadding-right: 0.8rem;\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n\tbackground: white;\n\tborder-bottom-left-radius: 1.75rem;\n\tborder-bottom-right-radius: 1.75rem;\n}\n\n.default-border {\n\tborder: 2px rgba(0, 0, 0, 0.3);\n\tborder-style: solid;\n}\n\n.multi-section:nth-child(even) {\n\tbackground: rgb(246, 246, 246);\n\tmargin-left: -0.8rem;\n\tmargin-right: -0.8rem;\n\tpadding-left: 0.8rem;\n\tpadding-right: 0.8rem;\n}\n\n.multi-section:first-child {\n\tpadding-bottom: 2rem;\n}\n\n.multi-section:not(:first-child) {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);