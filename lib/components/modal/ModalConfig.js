"use strict";

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _ModalPanelConfig = require("./ModalPanelConfig");

var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function ModalConfig() {

        _ComponentManager2.default.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "panelConfig": {
                value: Weave.linkableChild(this, new _ModalPanelConfig2.default())
            },
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "buttonIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });
    }

    //This Function makes this class as SessionClass
    Weave.registerClass(ModalConfig, ['weavereact.ModalConfig'], [weavejs.api.core.ILinkableObject], "Modal Config");

    module.exports = ModalConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUVmLGFBQVMsV0FBVCxHQUF1Qjs7QUFFbkIsbUNBQWlCLDhCQUFqQixDQUFnRCxJQUFoRCxFQUZtQjs7QUFJbkIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQiwyQkFBZTtBQUNYLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixnQ0FBMUIsQ0FBUDthQURKO0FBR0Esb0JBQVE7QUFDSix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQTFCLENBQVA7YUFESjtBQUdBLDBCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUExQixDQUFQO2FBREo7O1NBUEosRUFKbUI7S0FBdkI7OztBQUZlLFNBc0JmLENBQU0sYUFBTixDQUFxQixXQUFyQixFQUFpQyxDQUFDLHdCQUFELENBQWpDLEVBQTRELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUE3RCxFQUErRixjQUEvRixFQXRCZTs7QUF3QmYsV0FBTyxPQUFQLEdBQWlCLFdBQWpCLENBeEJlO0NBQWxCLEVBMEJDLE1BMUJELENBQUQiLCJmaWxlIjoiTW9kYWxDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5pbXBvcnQgTW9kYWxQYW5lbENvbmZpZyBmcm9tIFwiLi9Nb2RhbFBhbmVsQ29uZmlnXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBNb2RhbENvbmZpZygpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInBhbmVsQ29uZmlnXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTW9kYWxQYW5lbENvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYnV0dG9uSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoIE1vZGFsQ29uZmlnLFsnd2VhdmVyZWFjdC5Nb2RhbENvbmZpZyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJNb2RhbCBDb25maWdcIik7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE1vZGFsQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19