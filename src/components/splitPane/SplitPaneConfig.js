import Weave from 'Weave';
import weavejs from 'weavejs';
import PaneConfig from "./PaneConfig";

(function (module) {

    function SplitPaneConfig() {

        Object.defineProperties(this, {
            "active": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "resized": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "position": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "pane1": {
                value: Weave.linkableChild(this, new PaneConfig())
            },
            "pane2": {
                value: Weave.linkableChild(this, new PaneConfig())
            },
            "unFocusCount": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(0))
            }

        });


    }


    var p = SplitPaneConfig.prototype;

    p.updateUnFocus = function () {
        this.unFocusCount.value = this.unFocusCount.value + 1;
    }




    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.SplitPaneConfig', SplitPaneConfig);

    module.exports = SplitPaneConfig;

}(module));
