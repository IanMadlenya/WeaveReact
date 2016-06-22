/*import Weave from 'Weave';
import weavejs from 'weavejs';*/
(function (module) {

    function PaneConfig() {

        Object.defineProperties(this, {

            "size": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });


    }



    //This Function makes this class as SessionClass
    Weave.registerClass( PaneConfig,['weavereact.PaneConfig'],[weavejs.api.core.ILinkableObject],"Pane Config");

    module.exports = PaneConfig;

}(module));
