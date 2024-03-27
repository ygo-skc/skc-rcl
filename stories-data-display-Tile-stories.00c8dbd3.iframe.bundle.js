"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[963],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx.A)(classes.root,className)},other))}))},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/stories/data-display/Tile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullWidth:()=>FullWidth,Large:()=>Large,Medium:()=>Medium,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tile_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tile=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/data-display/tile.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tile.A,options);tile.A&&tile.A.locals&&tile.A.locals;const Tile_stories={title:"Generic/Tile",component:({total,subject,color,action,variant})=>react.createElement("button",{"data-testid":"tile-component",className:`tile ${variant}`,onClick:action},react.createElement(Typography.A,{"data-testid":"tile-component-prominent-text",className:"tile-prominent-text",variant:"h1",align:"center"},total.toLocaleString("en")),react.createElement(Typography.A,{"data-testid":"tile-component-sub-text",className:"tile-secondary-text",variant:"h5",align:"center",style:{color}},subject)),args:{total:30,subject:"Active Members Currently Online",color:"purple",action:(0,dist.XI)("Clicked!")}},Small={args:{variant:"small"}},Medium={args:{variant:"medium"}},Large={args:{variant:"large"}},FullWidth={args:{variant:"full-width"}};Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'medium'\n  }\n}",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'large'\n  }\n}",...Large.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'full-width'\n  }\n}",...FullWidth.parameters?.docs?.source}}};const __namedExportsOrder=["Small","Medium","Large","FullWidth"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/css/data-display/tile.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tile {\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n\tborder-radius: 1.5rem;\n\tflex: 1;\n\tbackground: #f3f3f3;\n\tborder: none;\n\tdisplay: inline-block;\n}\n\n.small {\n\tmax-width: 10rem;\n}\n\n.medium {\n\tmax-width: 12rem;\n}\n\n.large {\n\tmax-width: 16rem;\n}\n\n.full-width {\n\twidth: 100%;\n}\n\n.tile:hover {\n\tcursor: pointer;\n\ttransform: scale(1.04);\n}\n\n.tile-prominent-text {\n\tmargin-bottom: 0.2rem;\n\tcolor: #444;\n}\n\n.tile-secondary-text {\n\tmargin-bottom: 0rem;\n}\n","",{version:3,sources:["webpack://./src/css/data-display/tile.css"],names:[],mappings:"AAAA;CACC,oBAAoB;CACpB,qBAAqB;CACrB,iBAAiB;CACjB,oBAAoB;CACpB,qBAAqB;CACrB,OAAO;CACP,mBAAmB;CACnB,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,sBAAsB;AACvB;;AAEA;CACC,qBAAqB;CACrB,WAAW;AACZ;;AAEA;CACC,mBAAmB;AACpB",sourcesContent:[".tile {\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n\tborder-radius: 1.5rem;\n\tflex: 1;\n\tbackground: #f3f3f3;\n\tborder: none;\n\tdisplay: inline-block;\n}\n\n.small {\n\tmax-width: 10rem;\n}\n\n.medium {\n\tmax-width: 12rem;\n}\n\n.large {\n\tmax-width: 16rem;\n}\n\n.full-width {\n\twidth: 100%;\n}\n\n.tile:hover {\n\tcursor: pointer;\n\ttransform: scale(1.04);\n}\n\n.tile-prominent-text {\n\tmargin-bottom: 0.2rem;\n\tcolor: #444;\n}\n\n.tile-secondary-text {\n\tmargin-bottom: 0rem;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);