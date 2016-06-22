

(function (module) {

    function ModalPanelConfig() {

        Object.defineProperties(this, {

            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });

        Object.defineProperties(this, {
            "width": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("60%"))
            },
            "height": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("80%"))
            },
            "marginLeft": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
            },
            "marginTop": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("0"))
            },
            "left": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
            },
            "top": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20%"))
            }

        });
    }



    var p = ModalPanelConfig.prototype;

    p.getLayoutState = function () {
        return {
            "top": this.top.value,
            "left": this.left.value,
            "marginTop": this.marginTop.value,
            "marginLeft": this.marginLeft.value,
            "width": this.width.value,
            "height": this.height.value
        }
    }

    //This Function makes this class as SessionClass
    Weave.registerClass( ModalPanelConfig,['weavereact.ModalPanelConfig'],[weavejs.api.core.ILinkableObject],"Modal Panel Config");

    module.exports = ModalPanelConfig;

}(module));
