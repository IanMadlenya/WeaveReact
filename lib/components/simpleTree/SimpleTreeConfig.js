"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleTreeConfig = function () {
    function SimpleTreeConfig() {
        _classCallCheck(this, SimpleTreeConfig);

        Object.defineProperties(this, {
            "nodeIcon": {
                value: new weavejs.core.LinkableString("fa fa-folder")
            },
            "nodeOpenIcon": {
                value: new weavejs.core.LinkableString("fa fa-folder-open")
            },
            "leafIcon": {
                value: new weavejs.core.LinkableString("fa fa-file-text")
            },
            "leafOpenIcon": {
                value: new weavejs.core.LinkableString("fa fa-file-text-o")
            },
            "nodePadding": {
                value: new weavejs.core.LinkableString("20px")
            },
            nodeStyle: {
                value: new weavejs.core.LinkableVariable()
            },
            leafStyle: {
                value: new weavejs.core.LinkableVariable()
            },
            selectedLeafStyle: {
                value: new weavejs.core.LinkableVariable()
            },
            activeLeafStyle: {
                value: new weavejs.core.LinkableVariable()
            }
        });
        this.labelAccessor = null;
        this.childrenAccessor = null;
        this.activeNode = null;

        this.selectedLeafStyle.state = {
            "background": "grey"
        };

        this.activeLeafStyle.state = {
            "background": "blue"
        };
    }

    _createClass(SimpleTreeConfig, [{
        key: "getIcon",
        value: function getIcon(type, isOpen) {
            var iconName = type === "node" ? isOpen ? this.nodeOpenIcon.state : this.nodeIcon.state : isOpen ? this.leafOpenIcon.state : this.leafIcon.state;

            return iconName;
        }

        // temp: move to Utils

    }, {
        key: "mergeInto",
        value: function mergeInto(into, obj) {
            for (var attr in obj) {
                into[attr] = obj[attr];
            }
            return into;
        }
    }, {
        key: "getTreeNodes",
        value: function getTreeNodes(data) {
            var nodes = this.childrenAccessor;
            if (data[nodes] instanceof Function) return data[nodes]();else if (nodes instanceof Function) return nodes(data);else return data[nodes];
        }
    }, {
        key: "getTreeLabel",
        value: function getTreeLabel(data, label) {
            var label = this.labelAccessor;
            if (data[label] instanceof Function) return data[label]();else if (label instanceof Function) return label(data);else return data[label];
        }
    }, {
        key: "getLeafStyle",
        value: function getLeafStyle(open, active) {
            var style = this.leafStyle.state ? this.leafStyle.state : {};

            if (open) {
                var selectedStyle = this.selectedLeafStyle.state;
                if (selectedStyle) this.mergeInto(style, this.selectedLeafStyle.state);
                if (active) {
                    var activeStyle = this.activeLeafStyle.state;
                    return activeStyle ? this.mergeInto(style, this.activeLeafStyle.state) : style;
                }
            }
            return style;
        }
    }, {
        key: "changeActiveNode",
        value: function changeActiveNode(nodeComponent) {
            if (this.activeNode) {
                this.activeNode.active.value = false;
            }
            this.activeNode = nodeComponent;
            this.activeNode.active.value = true;
        }
    }]);

    return SimpleTreeConfig;
}();

exports.default = SimpleTreeConfig;
//# sourceMappingURL=data:application/json;base64,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QUEvQyxDQURVOztBQUd0QixnQkFBRyxJQUFILEVBQVE7QUFDSixvQkFBSSxnQkFBZ0IsS0FBSyxpQkFBTCxDQUF1QixLQUF2QixDQURoQjtBQUVKLG9CQUFHLGFBQUgsRUFBaUIsS0FBSyxTQUFMLENBQWUsS0FBZixFQUFxQixLQUFLLGlCQUFMLENBQXVCLEtBQXZCLENBQXJCLENBQWpCO0FBQ0Esb0JBQUcsTUFBSCxFQUFVO0FBQ04sd0JBQUksY0FBYyxLQUFLLGVBQUwsQ0FBcUIsS0FBckIsQ0FEWjtBQUVOLDJCQUFPLGNBQWMsS0FBSyxTQUFMLENBQWUsS0FBZixFQUFxQixLQUFLLGVBQUwsQ0FBcUIsS0FBckIsQ0FBbkMsR0FBaUUsS0FBakUsQ0FGRDtpQkFBVjthQUhKO0FBUUEsbUJBQU8sS0FBUCxDQVhzQjs7Ozt5Q0FnQlQsZUFBZTtBQUM1QixnQkFBSSxLQUFLLFVBQUwsRUFBaUI7QUFDakIscUJBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixHQUErQixLQUEvQixDQURpQjthQUFyQjtBQUdBLGlCQUFLLFVBQUwsR0FBa0IsYUFBbEIsQ0FKNEI7QUFLNUIsaUJBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixHQUErQixJQUEvQixDQUw0Qjs7OztXQWpHOUI7OztrQkEyR1MiLCJmaWxlIjoiU2ltcGxlVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgU2ltcGxlVHJlZUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwibm9kZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZm9sZGVyXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZm9sZGVyLW9wZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlYWZJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZpbGUtdGV4dFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZk9wZW5JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZpbGUtdGV4dC1vXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlUGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZVN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYWJlbEFjY2Vzc29yID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbkFjY2Vzc29yID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcImdyZXlcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImJhY2tncm91bmRcIiA6IFwiYmx1ZVwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0SWNvbih0eXBlLCBpc09wZW4pe1xuICAgICAgICB2YXIgaWNvbk5hbWUgPSAgKHR5cGUgPT09IFwibm9kZVwiKT8gKGlzT3BlbiA/IHRoaXMubm9kZU9wZW5JY29uLnN0YXRlIDogdGhpcy5ub2RlSWNvbi5zdGF0ZSkgOiAoaXNPcGVuID8gdGhpcy5sZWFmT3Blbkljb24uc3RhdGUgOiB0aGlzLmxlYWZJY29uLnN0YXRlKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpY29uTmFtZTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8vIHRlbXA6IG1vdmUgdG8gVXRpbHMgXG4gICAgbWVyZ2VJbnRvKGludG8sIG9iaikge1xuICAgICAgICBmb3IobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cbiAgICBcbiAgICBnZXRUcmVlTm9kZXMoZGF0YSl7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGRyZW5BY2Nlc3NvcjtcbiAgICAgICAgaWYoZGF0YVtub2Rlc10gaW5zdGFuY2VvZiBGdW5jdGlvbilcbiAgICAgICAgICAgIHJldHVybiBkYXRhW25vZGVzXSgpO1xuICAgICAgICBlbHNlIGlmKG5vZGVzIGluc3RhbmNlb2YgRnVuY3Rpb24pXG4gICAgICAgICAgICByZXR1cm4gbm9kZXMoZGF0YSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdO1xuICAgIH1cblxuXG4gICAgZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpe1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmxhYmVsQWNjZXNzb3I7XG4gICAgICAgIGlmKGRhdGFbbGFiZWxdIGluc3RhbmNlb2YgRnVuY3Rpb24pXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF0oKTtcbiAgICAgICAgZWxzZSBpZihsYWJlbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsKGRhdGEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF07XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGdldExlYWZTdHlsZShvcGVuLCBhY3RpdmUpe1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmxlYWZTdHlsZS5zdGF0ZSA/ICB0aGlzLmxlYWZTdHlsZS5zdGF0ZSA6IHt9O1xuICAgICAgICBcbiAgICAgICAgaWYob3Blbil7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRTdHlsZSA9IHRoaXMuc2VsZWN0ZWRMZWFmU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICBpZihzZWxlY3RlZFN0eWxlKXRoaXMubWVyZ2VJbnRvKHN0eWxlLHRoaXMuc2VsZWN0ZWRMZWFmU3R5bGUuc3RhdGUpO1xuICAgICAgICAgICAgaWYoYWN0aXZlKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlU3R5bGUgPSB0aGlzLmFjdGl2ZUxlYWZTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZlU3R5bGUgPyB0aGlzLm1lcmdlSW50byhzdHlsZSx0aGlzLmFjdGl2ZUxlYWZTdHlsZS5zdGF0ZSkgOiBzdHlsZTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gICAgXG5cblxuICAgIGNoYW5nZUFjdGl2ZU5vZGUobm9kZUNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVUcmVlQ29uZmlnO1xuXG5cblxuIl19
