"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[264],{"./src/stories/ygo-card/YGOCardWithQuantity.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>YGOCardWithQuantity_stories});var react=__webpack_require__("./node_modules/react/index.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),CardImageRounded=__webpack_require__("./src/components/photo/CardImageRounded.tsx"),YGOCard=__webpack_require__("./src/components/ygo-card/YGOCard.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ygo_card_with_quantity=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/css/ygo-card/ygo-card-with-quantity.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ygo_card_with_quantity.Z,options);ygo_card_with_quantity.Z&&ygo_card_with_quantity.Z.locals&&ygo_card_with_quantity.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const YGOCardWithQuantity=({card,occurrences})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"header",children:[(0,jsx_runtime.jsx)(CardImageRounded.Z,{cardImg:`https://images.thesupremekingscastle.com/cards/tn/${card.cardID}.jpg`}),(0,jsx_runtime.jsx)("div",{className:"quantity-text-container",children:(0,jsx_runtime.jsx)(Chip.Z,{className:"quantity-chip",label:`${occurrences} Reference(s)`},card.cardID)})]}),(0,jsx_runtime.jsx)(YGOCard.Z,{cardID:card.cardID,cardName:card.cardName,cardColor:card.cardColor,cardEffect:card.cardEffect,monsterType:card.monsterType,cardAttribute:card.cardAttribute,monsterAttack:card.monsterAttack,monsterDefense:card.monsterDefense,monsterAssociation:card.monsterAssociation,fullDetails:!1})]});YGOCardWithQuantity.displayName="YGOCardWithQuantity";const ygo_card_YGOCardWithQuantity=YGOCardWithQuantity,Template=args=>(0,jsx_runtime.jsx)(ygo_card_YGOCardWithQuantity,{...args});Template.displayName="Template";const YGOCardWithQuantity_stories={title:"Yugioh-Card/YGOCardWithQuantity",component:ygo_card_YGOCardWithQuantity},Default=Template.bind({});Default.args={card:{cardName:"DARK MAGICIAN",cardColor:"Normal",cardEffect:"The ultimate wizard in terms of attack and defense.",monsterType:"Spellcaster/Normal",monsterAssociation:{level:"7"},monsterAttack:"2500",monsterDefense:"2100",cardID:"46986414"},occurrences:2},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <YGOCardWithQuantity {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/photo/CardImageRounded.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>photo_CardImageRounded});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),rounded_img=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/css/photo/rounded-img.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(rounded_img.Z,options);rounded_img.Z&&rounded_img.Z.locals&&rounded_img.Z.locals;var visibility_sensor=__webpack_require__("./node_modules/react-visibility-sensor/dist/visibility-sensor.js"),visibility_sensor_default=__webpack_require__.n(visibility_sensor),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardImageRounded=({cardImg,defaultVisibility=!1})=>{const[visible,setVisible]=(0,react.useState)(defaultVisibility),handleVisibility=(0,react.useCallback)((isVisible=>{(0,react.startTransition)((()=>{!1!==isVisible&&setVisible(isVisible)}))}),[]);return(0,jsx_runtime.jsx)(visibility_sensor_default(),{partialVisibility:!0,offset:{bottom:-350,top:-200},onChange:handleVisibility,children:(0,jsx_runtime.jsx)("div",{id:"rounded-img-outer-container",children:(0,jsx_runtime.jsx)("div",{id:"rounded-img-inner-container",children:visible?(0,jsx_runtime.jsx)("img",{src:cardImg,id:"rounded-img",width:"100%",height:"100%",alt:"Card"}):void 0})})})};CardImageRounded.displayName="CardImageRounded";const photo_CardImageRounded=CardImageRounded},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/css/photo/rounded-img.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"#rounded-img-outer-container {\n\tmargin: auto;\n\tmargin-bottom: 0.5rem;\n\twidth: 96%;\n}\n\n#rounded-img-inner-container {\n\tborder-radius: 4rem;\n\toverflow: hidden;\n\twidth: 100%;\n\theight: 0;\n\tpadding-bottom: 100%;\n}\n\n#rounded-img {\n\theight: auto;\n\tobject-fit: cover;\n\taspect-ratio: 1;\n}\n","",{version:3,sources:["webpack://./src/css/photo/rounded-img.css"],names:[],mappings:"AAAA;CACC,YAAY;CACZ,qBAAqB;CACrB,UAAU;AACX;;AAEA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,WAAW;CACX,SAAS;CACT,oBAAoB;AACrB;;AAEA;CACC,YAAY;CACZ,iBAAiB;CACjB,eAAe;AAChB",sourcesContent:["#rounded-img-outer-container {\n\tmargin: auto;\n\tmargin-bottom: 0.5rem;\n\twidth: 96%;\n}\n\n#rounded-img-inner-container {\n\tborder-radius: 4rem;\n\toverflow: hidden;\n\twidth: 100%;\n\theight: 0;\n\tpadding-bottom: 100%;\n}\n\n#rounded-img {\n\theight: auto;\n\tobject-fit: cover;\n\taspect-ratio: 1;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/css/ygo-card/ygo-card-with-quantity.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".quantity-chip {\n\tbackground: rgba(107, 52, 91, 0.8);\n\tmargin: 0;\n\tfloat: right;\n}\n\n.quantity-text-container {\n\tmin-width: 55%;\n\tmargin: auto;\n}\n\n.header {\n\tdisplay: flex;\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/ygo-card-with-quantity.css"],names:[],mappings:"AAAA;CACC,kCAAkC;CAClC,SAAS;CACT,YAAY;AACb;;AAEA;CACC,cAAc;CACd,YAAY;AACb;;AAEA;CACC,aAAa;AACd",sourcesContent:[".quantity-chip {\n\tbackground: rgba(107, 52, 91, 0.8);\n\tmargin: 0;\n\tfloat: right;\n}\n\n.quantity-text-container {\n\tmin-width: 55%;\n\tmargin: auto;\n}\n\n.header {\n\tdisplay: flex;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);