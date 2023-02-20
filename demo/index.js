import {Metro} from "../src/core/metro"
import * as CommonCss from "../src/common"
import * as Components from "../src/components"

globalThis.Metro = new Metro({
    removeCloakTimeout: 1000,
    onInit: ()=>console.log("Hello world!")
})