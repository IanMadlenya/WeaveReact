(function (module) {

    function PaneConfig() {

        Object.defineProperties(this, {

            "size": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });


    }



    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.PaneConfig', PaneConfig);

    module.exports = PaneConfig;

}(module));
