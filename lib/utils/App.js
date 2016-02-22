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
//# sourceMappingURL=data:application/json;base64,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S0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTlCNUIsT0FzR2YsQ0FBSSxTQUFKLEdBQWdCLFVBQVMsSUFBVCxFQUFlLEdBQWYsRUFBb0I7QUFDaEMsYUFBSyxJQUFJLElBQUosSUFBWSxHQUFqQixFQUFzQjtBQUNsQixpQkFBSyxJQUFMLElBQWEsSUFBSSxJQUFKLENBQWIsQ0FEa0I7U0FBdEI7QUFHQSxlQUFPLElBQVAsQ0FKZ0M7S0FBcEIsQ0F0R0Q7O0FBK0dmLFdBQU8sT0FBUCxHQUFpQixHQUFqQixDQS9HZTtDQUFsQixFQWlIQyxNQWpIRCxDQUFEIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnICBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuXG4gICAgZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgfVxuXG4gICAgdmFyIHRvb2xSZWdpc3RyeSA9IHt9O1xuXG5cbiAgICBBcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCF0b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIChhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXTtcbiAgICB9XG5cbiAgICB2YXIgdG9vbENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcblxuICAgIEFwcC5yZWdpc3RlclRvb2xDb25maWcgPSBmdW5jdGlvbiAodG9vbCwgY29uZmlnKSB7XG4gICAgICAgIGlmICghdG9vbENvbmZpZ01hcC5oYXModG9vbCkpXG4gICAgICAgICAgICB0b29sQ29uZmlnTWFwLnNldCh0b29sLGNvbmZpZyk7XG4gICAgfVxuXG4gICAgQXBwLmdldFRvb2xDb25maWcgPSBmdW5jdGlvbiAodG9vbCkge1xuICAgICAgICByZXR1cm4gdG9vbENvbmZpZ01hcC5nZXQodG9vbCk7XG4gICAgfVxuXG4gICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkcmVuLGNvbmZpZyl7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IGNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKGtleSk7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXsgLy8gZm9yIFJlYWN0IENvbXBvc2l0ZSBFbGVtZW50c1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IEFwcC5nZXRUb29sQ29uZmlnKGNoaWxkLnR5cGUpO1xuICAgICAgICAgICAgICAgIGlmKCFjaGlsZENvbmZpZyAmJiBjb25maWdDbGFzcyl7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzLnN0eWxlKWNoaWxkQ29uZmlnLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBjaGlsZC5wcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjaGlsZCk7XG4gICAgICAgICAgICAvL2NvbmZpZy5jb25maWdDaGlsZE9iamVjdE1hcFtjaGlsZENvbmZpZ05hbWVdID0gY2hpbGRDb25maWc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAvKiAgQXBwLnJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24ocmVhY3RDb21wLENTUyxhZGRpdGlvbmFsUHJvcHMsbmV3UHJvcHMpe1xuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcblxuXG4gICAgICAgICAgICBpZihjaGlsZCl7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0gQXBwLm1lcmdlSW50byh7fSxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxIVE1MV3JhcHBlciBzZXR0aW5ncz17Y2hpbGRDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEFwcC5tZXJnZUludG8ocHJvcHMsYWRkaXRpb25hbFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiQ1NTXCJdID0gQ1NTO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChjaGlsZENvbmZpZykuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyBzZXR0aW5ncz17Y2hpbGRDb25maWd9Lz47XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KG5ld0NoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH0qL1xuXG4gICAgQXBwLm1lcmdlSW50byA9IGZ1bmN0aW9uKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbn0obW9kdWxlKSk7XG4iXX0=
