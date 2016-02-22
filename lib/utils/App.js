"use strict";

var _Style = require("./Style");

var _Style2 = _interopRequireDefault(_Style);

var _HTMLWrapperConfig = require("../configs/HTMLWrapperConfig");

var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function App() {}

    var toolRegistry = {};

    App.registerToolImplementation = function (asClassName, jsClass) {
        if (!toolRegistry[asClassName]) toolRegistry[asClassName] = jsClass;
    };

    App.getToolImplementation = function (asClassName) {
        return toolRegistry[asClassName];
    };

    var toolConfigMap = new Map();

    App.registerToolConfig = function (tool, config) {
        if (!toolConfigMap.has(tool)) toolConfigMap.set(tool, config);
    };

    App.getToolConfig = function (tool) {
        return toolConfigMap.get(tool);
    };

    App.hookSessionStateForComponentChildren = function (children, config) {
        config.children.delayCallbacks();

        config.childConfigMap = new Map();
        config.configChildMap.forEach(function (value, key) {
            var configName = config.children.getName(key);
            config.children.removeObject(configName);
        });
        config.configChildMap = new Map();

        _react2.default.Children.forEach(children, function (child, index) {
            var childName = "";
            var childConfig = config.childConfigMap.get(child);
            var childConfigName = "";
            if (typeof child.type === "string") {
                // for HTML Elements
                if (!childConfig) {
                    childConfig = config.children.requestObject('', _HTMLWrapperConfig2.default);
                }
            } else {
                // for React Composite Elements
                var configClass = App.getToolConfig(child.type);
                if (!childConfig && configClass) {
                    childConfig = config.children.requestObject('', configClass);
                }
            }
            if (child.props.style) childConfig.style.domDefined.state = child.props.style;
            config.childConfigMap.set(child, childConfig);
            config.configChildMap.set(childConfig, child);
            //config.configChildObjectMap[childConfigName] = childConfig;
        });
        config.children.resumeCallbacks();
    };

    /*  App.renderChildren = function(reactComp,CSS,additionalProps,newProps){
          var childConfigs = reactComp.settings.children.getObjects();
          var clonedChildren = childConfigs.map(function(childConfig,index){
              var child = reactComp.settings.configChildMap.get(childConfig);


              if(child){
                  var props = App.mergeInto({},child.props);
                  if(typeof(child.type) === "string"){
                      return <HTMLWrapper settings={childConfig}>{child}</HTMLWrapper>
                  }else{
                      props = App.mergeInto(props,additionalProps);
                      props["settings"] = childConfig;
                      if(CSS){
                          props["className"] = CSS[childName];
                          props["CSS"] = CSS;
                      }
                      if(this.settings.childConfigMap.has(child))
                          this.settings.childConfigMap.delete(child);
                      var clonedChild = React.cloneElement(child,props);
                      this.settings.configChildMap.set(childConfig,clonedChild);
                      this.settings.childConfigMap.set(clonedChild,childConfig);
                      return clonedChild;
                  }
               }else{
                  var configClass = Weave.getPath(childConfig).getType();
                  var ToolClass =  App.getToolImplementation(configClass);
                  var newChild = <ToolClass settings={childConfig}/>;
                  this.settings.configChildMap.set(childConfig,newChild);
                  this.settings.childConfigMap.set(newChild,childConfig);
                  return newChild;
               }

          }.bind(this));

          return clonedChildren;
      }*/

    App.mergeInto = function (into, obj) {
        for (var attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    };

    module.exports = App;
})(module);
//# sourceMappingURL=data:application/json;base64,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S0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE5QjVCLE9Bc0dmLENBQUksU0FBSixHQUFnQixVQUFTLElBQVQsRUFBZSxHQUFmLEVBQW9CO0FBQ2hDLGFBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIsaUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO1NBQXRCO0FBR0EsZUFBTyxJQUFQLENBSmdDO0tBQXBCLENBdEdEOztBQStHZixXQUFPLE9BQVAsR0FBaUIsR0FBakIsQ0EvR2U7Q0FBbEIsRUFpSEMsTUFqSEQsQ0FBRCIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBIVE1MV3JhcHBlckNvbmZpZyAgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuICAgIGZ1bmN0aW9uIEFwcCgpIHtcblxuICAgIH1cblxuICAgIHZhciB0b29sUmVnaXN0cnkgPSB7fTtcblxuXG4gICAgQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgICAgIGlmICghdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSlcbiAgICAgICAgICAgIHRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV07XG4gICAgfVxuXG4gICAgdmFyIHRvb2xDb25maWdNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICBBcHAucmVnaXN0ZXJUb29sQ29uZmlnID0gZnVuY3Rpb24gKHRvb2wsIGNvbmZpZykge1xuICAgICAgICBpZiAoIXRvb2xDb25maWdNYXAuaGFzKHRvb2wpKVxuICAgICAgICAgICAgdG9vbENvbmZpZ01hcC5zZXQodG9vbCxjb25maWcpO1xuICAgIH1cblxuICAgIEFwcC5nZXRUb29sQ29uZmlnID0gZnVuY3Rpb24gKHRvb2wpIHtcbiAgICAgICAgcmV0dXJuIHRvb2xDb25maWdNYXAuZ2V0KHRvb2wpO1xuICAgIH1cblxuICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbixjb25maWcpe1xuICAgICAgICBjb25maWcuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IGNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKGtleSk7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXsgLy8gZm9yIFJlYWN0IENvbXBvc2l0ZSBFbGVtZW50c1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IEFwcC5nZXRUb29sQ29uZmlnKGNoaWxkLnR5cGUpO1xuICAgICAgICAgICAgICAgIGlmKCFjaGlsZENvbmZpZyAmJiBjb25maWdDbGFzcyl7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzLnN0eWxlKWNoaWxkQ29uZmlnLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBjaGlsZC5wcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjaGlsZCk7XG4gICAgICAgICAgICAvL2NvbmZpZy5jb25maWdDaGlsZE9iamVjdE1hcFtjaGlsZENvbmZpZ05hbWVdID0gY2hpbGRDb25maWc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAvKiAgQXBwLnJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24ocmVhY3RDb21wLENTUyxhZGRpdGlvbmFsUHJvcHMsbmV3UHJvcHMpe1xuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHt9LGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEhUTUxXcmFwcGVyIHNldHRpbmdzPXtjaGlsZENvbmZpZ30+e2NoaWxkfTwvSFRNTFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzID0gQXBwLm1lcmdlSW50byhwcm9wcyxhZGRpdGlvbmFsUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImNsYXNzTmFtZVwiXSA9IENTU1tjaGlsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJDU1NcIl0gPSBDU1M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXZWF2ZS5nZXRQYXRoKGNoaWxkQ29uZmlnKS5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8VG9vbENsYXNzIHNldHRpbmdzPXtjaGlsZENvbmZpZ30vPjtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQobmV3Q2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDsgXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfSovXG5cbiAgICBBcHAubWVyZ2VJbnRvID0gZnVuY3Rpb24oaW50bywgb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxufShtb2R1bGUpKTtcbiJdfQ==
