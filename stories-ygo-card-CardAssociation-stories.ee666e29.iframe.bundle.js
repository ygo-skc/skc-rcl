"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[261],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx.A)(classes.root,className)},other))}))},"./src/stories/ygo-card/CardAssociation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Divine:()=>Divine,Earth:()=>Earth,Fire:()=>Fire,Level:()=>Level,Light:()=>Light,Pendulum:()=>Pendulum,Rank:()=>Rank,Water:()=>Water,Wind:()=>Wind,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Yugioh Card/Card Association",component:__webpack_require__("./src/components/ygo-card/CardAssociation.tsx").A,args:{monsterAssociation:{level:4},attribute:"Wind"}},Level={},Rank={args:{monsterAssociation:{rank:4}}},Pendulum={args:{monsterAssociation:{level:4,scaleRating:10}}},Dark={args:{attribute:"Dark"}},Earth={args:{attribute:"Earth"}},Fire={args:{attribute:"Fire"}},Light={args:{attribute:"Light"}},Water={args:{attribute:"Water"}},Wind={args:{attribute:"Wind"}},Divine={args:{attribute:"Divine"}},__namedExportsOrder=["Level","Rank","Pendulum","Dark","Earth","Fire","Light","Water","Wind","Divine"];Level.parameters={...Level.parameters,docs:{...Level.parameters?.docs,source:{originalSource:"{}",...Level.parameters?.docs?.source}}},Rank.parameters={...Rank.parameters,docs:{...Rank.parameters?.docs,source:{originalSource:"{\n  args: {\n    monsterAssociation: {\n      rank: 4\n    }\n  }\n}",...Rank.parameters?.docs?.source}}},Pendulum.parameters={...Pendulum.parameters,docs:{...Pendulum.parameters?.docs,source:{originalSource:"{\n  args: {\n    monsterAssociation: {\n      level: 4,\n      scaleRating: 10\n    }\n  }\n}",...Pendulum.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {\n    attribute: 'Dark'\n  }\n}",...Dark.parameters?.docs?.source}}},Earth.parameters={...Earth.parameters,docs:{...Earth.parameters?.docs,source:{originalSource:"{\n  args: {\n    attribute: 'Earth'\n  }\n}",...Earth.parameters?.docs?.source}}},Fire.parameters={...Fire.parameters,docs:{...Fire.parameters?.docs,source:{originalSource:"{\n  args: {\n    attribute: 'Fire'\n  }\n}",...Fire.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {\n    attribute: 'Light'\n  }\n}",...Light.parameters?.docs?.source}}},Water.parameters={...Water.parameters,docs:{...Water.parameters?.docs,source:{originalSource:"{\n  args: {\n    attribute: 'Water'\n  }\n}",...Water.parameters?.docs?.source}}},Wind.parameters={...Wind.parameters,docs:{...Wind.parameters?.docs,source:{originalSource:"{\n  args: {\n    attribute: 'Wind'\n  }\n}",...Wind.parameters?.docs?.source}}},Divine.parameters={...Divine.parameters,docs:{...Divine.parameters?.docs,source:{originalSource:"{\n  args: {\n    attribute: 'Divine'\n  }\n}",...Divine.parameters?.docs?.source}}}},"./src/components/ygo-card/CardAssociation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ygo_card_CardAssociation});var react=__webpack_require__("./node_modules/react/index.js"),ImageWithText=__webpack_require__("./src/components/ygo-card/ImageWithText.tsx");const card_level_namespaceObject=__webpack_require__.p+"static/media/card_level.64a5ea85.svg",card_rank_namespaceObject=__webpack_require__.p+"static/media/card_rank.9add8e4c.svg",card_pendulum_scale_namespaceObject=__webpack_require__.p+"static/media/card_pendulum_scale.dd0653a7.svg",dark_namespaceObject=__webpack_require__.p+"static/media/dark.b84f8908.svg",earth_namespaceObject=__webpack_require__.p+"static/media/earth.4df96a49.svg",fire_namespaceObject=__webpack_require__.p+"static/media/fire.8f44d770.svg",light_namespaceObject=__webpack_require__.p+"static/media/light.476144bf.svg",water_namespaceObject=__webpack_require__.p+"static/media/water.89031493.svg",wind_namespaceObject=__webpack_require__.p+"static/media/wind.5f8c3841.svg",divine_namespaceObject=__webpack_require__.p+"static/media/divine.ddd39c45.svg";var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),card_association=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/card-association.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(card_association.A,options);card_association.A&&card_association.A.locals&&card_association.A.locals;const ygo_card_CardAssociation=({monsterAssociation,attribute})=>{if(void 0===monsterAssociation)return null;if(void 0===monsterAssociation.level&&void 0===monsterAssociation.rank&&void 0===monsterAssociation.linkRating)return null;const getMonsterAssociationImage=monsterAssociation=>{switch(monsterAssociation){case"level":return react.createElement("img",{src:card_level_namespaceObject,alt:"Card Level",className:"base-img"});case"rank":return react.createElement("img",{src:card_rank_namespaceObject,alt:"Card Rank",className:"base-img"});case"pendulum":return react.createElement("img",{src:card_pendulum_scale_namespaceObject,alt:"Card Rank",className:"pend-img"})}};return react.createElement("div",{className:"card-association-parent"},react.createElement("div",{className:"card-association-sub-parent"},(attribute=>{switch(attribute){case"dark":return react.createElement("img",{src:dark_namespaceObject,alt:"Dark Attribute",className:"base-img"});case"earth":return react.createElement("img",{src:earth_namespaceObject,alt:"Earth Attribute",className:"base-img"});case"fire":return react.createElement("img",{src:fire_namespaceObject,alt:"Fire Attribute",className:"base-img"});case"light":return react.createElement("img",{src:light_namespaceObject,alt:"Light Attribute",className:"base-img"});case"water":return react.createElement("img",{src:water_namespaceObject,alt:"Water Attribute",className:"base-img"});case"wind":return react.createElement("img",{src:wind_namespaceObject,alt:"Wind Attribute",className:"base-img"});case"divine":return react.createElement("img",{src:divine_namespaceObject,alt:"Divine Attribute",className:"base-img"});default:return}})(attribute?.toLowerCase()),void 0!==monsterAssociation.level&&react.createElement(ImageWithText.A,{imageComponent:getMonsterAssociationImage("level"),text:`x${monsterAssociation.level}`}),void 0!==monsterAssociation.rank&&react.createElement(ImageWithText.A,{imageComponent:getMonsterAssociationImage("rank"),text:`x${monsterAssociation.rank}`}),void 0!==monsterAssociation.scaleRating&&react.createElement(ImageWithText.A,{imageComponent:getMonsterAssociationImage("pendulum"),text:`x${monsterAssociation.scaleRating}`}),void 0!==monsterAssociation.linkRating&&react.createElement(ImageWithText.A,{text:`L${monsterAssociation.linkRating}: ${monsterAssociation.linkArrows.join(" ")}`})))}},"./src/components/ygo-card/ImageWithText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ygo_card_ImageWithText});var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),image_with_text=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/image-with-text.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(image_with_text.A,options);image_with_text.A&&image_with_text.A.locals&&image_with_text.A.locals;const ygo_card_ImageWithText=({imageComponent,text})=>react.createElement("div",{"data-testid":"image-with-text-component",className:"img-with-number-parent"},imageComponent,react.createElement(Typography.A,{"data-testid":"image-text",variant:"subtitle1",textAlign:"center"},text))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/card-association.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".base-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.35rem;\n\tvertical-align: middle;\n}\n\n.pend-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.35rem;\n\tmargin-left: 0.5rem;\n\tvertical-align: middle;\n}\n\n.attribute-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.85rem;\n\tvertical-align: middle;\n}\n\n.card-association-parent {\n\twidth: 100%;\n\tmargin-bottom: 0.35rem;\n\ttext-align: center;\n}\n\n.card-association-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.82);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n\ttext-align: center;\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/card-association.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,YAAY;CACZ,qBAAqB;CACrB,qBAAqB;CACrB,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,qBAAqB;CACrB,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,qBAAqB;CACrB,qBAAqB;CACrB,sBAAsB;AACvB;;AAEA;CACC,WAAW;CACX,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,qCAAqC;CACrC,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;CACtB,oBAAoB;CACpB,qBAAqB;CACrB,mBAAmB;CACnB,kBAAkB;AACnB",sourcesContent:[".base-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.35rem;\n\tvertical-align: middle;\n}\n\n.pend-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.35rem;\n\tmargin-left: 0.5rem;\n\tvertical-align: middle;\n}\n\n.attribute-img {\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: inline-block;\n\tmargin-right: 0.85rem;\n\tvertical-align: middle;\n}\n\n.card-association-parent {\n\twidth: 100%;\n\tmargin-bottom: 0.35rem;\n\ttext-align: center;\n}\n\n.card-association-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.82);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n\ttext-align: center;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/ygo-card/image-with-text.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".img-with-number-parent {\n\tdisplay: inline-block;\n}\n\n.img-with-number-parent .MuiTypography-root {\n\tdisplay: inline-block;\n\tcolor: rgba(0, 0, 0, 0.55);\n\tline-height: 24px;\n\tvertical-align: middle;\n\tmargin: auto;\n\tfont-weight: 800;\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/image-with-text.css"],names:[],mappings:"AAAA;CACC,qBAAqB;AACtB;;AAEA;CACC,qBAAqB;CACrB,0BAA0B;CAC1B,iBAAiB;CACjB,sBAAsB;CACtB,YAAY;CACZ,gBAAgB;AACjB",sourcesContent:[".img-with-number-parent {\n\tdisplay: inline-block;\n}\n\n.img-with-number-parent .MuiTypography-root {\n\tdisplay: inline-block;\n\tcolor: rgba(0, 0, 0, 0.55);\n\tline-height: 24px;\n\tvertical-align: middle;\n\tmargin: auto;\n\tfont-weight: 800;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);