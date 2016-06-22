"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("../../components/modal/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _SplitPane = require("../../components/splitPane/SplitPane");

var _SplitPane2 = _interopRequireDefault(_SplitPane);

var _SessionEditorConfig = require("./SessionEditorConfig");

var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

var _TreeSection = require("./TreeSection");

var _TreeSection2 = _interopRequireDefault(_TreeSection);

var _NodeView = require("./NodeView");

var _NodeView2 = _interopRequireDefault(_NodeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SessionEditor = function (_React$Component) {
    _inherits(SessionEditor, _React$Component);

    function SessionEditor(props) {
        _classCallCheck(this, SessionEditor);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SessionEditor).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _SessionEditorConfig2.default();
        _this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(_this.props.weave.root);
        _this.tree.label = _this.props.isDashboard ? "WeaveDashboard" : "Weave";

        _this.changeSessionValue = _this.changeSessionValue.bind(_this);
        _this.nodeClick = _this.nodeClick.bind(_this);
        _this.saveFile = _this.saveFile.bind(_this);
        _this.openFile = _this.openFile.bind(_this);
        _this.selectedData; // to-do:try with linkableWatcher and add forceUpdate to that watcher
        return _this;
    }

    _createClass(SessionEditor, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                this.settings = nextProps.settings;
            }
            if (this.props.weave !== nextProps.weave) {
                this.settings = nextProps.settings;
                this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(nextProps.weave.root);
                this.tree.label = nextProps.isDashboard ? "WeaveDashboard" : "Weave";
                this.selectedData = null;
            }
        }
    }, {
        key: "nodeClick",
        value: function nodeClick(node) {
            this.selectedData = node.data;
            var state = Weave.getState(node.data);
            var str;
            if (node.data instanceof weavejs.core.LinkableString) str = state;else str = Weave.stringify(state, null, '\t', true);
            this.settings.activeNodeValue.state = str;
        }
    }, {
        key: "changeSessionValue",
        value: function changeSessionValue(e) {
            var value = this.settings.activeNodeValue.state;
            if (this.selectedData instanceof weavejs.core.LinkableString) this.selectedData.value = value;else Weave.setState(this.selectedData, JSON.parse(value));

            this.forceUpdate();
        }
    }, {
        key: "saveFile",
        value: function saveFile() {
            var archive = weavejs.core.WeaveArchive.createArchive(this.props.weave);
            var uint8Array = archive.serialize();
            var arrayBuffer = uint8Array.buffer;
            window.saveAs(new Blob([arrayBuffer]), "test.weave");
        }
    }, {
        key: "openFile",
        value: function openFile(e) {
            var selectedfile = e.target.files[0];
            // Build Promise List, each promise resolved by FileReader.onload.
            this.tree = null;
            this.settings.activeNodeValue.state = "";
            this.forceUpdate();
            var that = this;
            new Promise(function (resolve, reject) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    // Resolve both the FileReader result and its original file.
                    resolve([event, selectedfile]);
                };

                // Read the file.
                reader.readAsArrayBuffer(selectedfile);
            }).then(function (zippedResults) {
                // Run the callback after all files have been read.
                var e = zippedResults[0];
                var result = e.target.result;
                // read the content of the file with JSZip

                weavejs.core.WeaveArchive.loadFileContent(that.props.weave, result);
                that.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(that.props.weave.root);
                that.tree.label = "Weave";
                that.selectedData = null; // to-do:try with linkableWatcher and add forceUpdate to that watcher
                that.forceUpdate();
            });
        }
    }, {
        key: "render",
        value: function render() {

            var applyButtonStyle = {
                marginTop: "4px",
                marginLeft: "2px",
                borderStyle: "solid",
                borderRadius: "4px",
                borderWidth: "1px",
                borderColor: "grey",
                float: "right",
                padding: "4px",
                cursor: "pointer",
                fontSize: "12px",
                position: "relative"
            };
            var inputButtonStyle = {
                width: "100%",
                opacity: "0",
                overflow: "hidden",
                position: "absolute",
                left: "0",
                top: "2px",
                bottom: "2px"
            };

            return _react2.default.createElement(
                _Modal2.default,
                { settings: this.settings.modalConfig, keyPress: "true", title: this.props.title },
                _react2.default.createElement(
                    "div",
                    { style: { height: "90%", width: "100%", display: "flex", position: "relative", overflow: "hidden" } },
                    _react2.default.createElement(
                        _SplitPane2.default,
                        { split: "vertical", minSize: "50", defaultSize: "256" },
                        _react2.default.createElement(_TreeSection2.default, { tree: this.tree, settings: this.settings, nodeClick: this.nodeClick }),
                        _react2.default.createElement(_NodeView2.default, { activeNodeValue: this.settings.activeNodeValue })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { style: applyButtonStyle, onClick: this.changeSessionValue },
                    " Apply "
                ),
                _react2.default.createElement(
                    "div",
                    { style: applyButtonStyle, onClick: this.saveFile },
                    _react2.default.createElement(
                        "i",
                        { className: "fa fa-fw fa-download" },
                        " "
                    ),
                    " Save "
                ),
                _react2.default.createElement(
                    "div",
                    { style: applyButtonStyle },
                    _react2.default.createElement("input", { onChange: this.openFile, type: "file", style: inputButtonStyle }),
                    _react2.default.createElement(
                        "i",
                        { className: "fa fa-fw fa-upload" },
                        " "
                    ),
                    " Load"
                )
            );
        }
    }]);

    return SessionEditor;
}(_react2.default.Component);

exports.default = SessionEditor;
//# sourceMappingURL=data:application/json;base64,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QUwsRUFBdkM7O2lCQVJIO2dCQVNHOztzQkFBSyxPQUFPLGdCQUFQLEVBQXlCLFNBQVMsS0FBSyxRQUFMLEVBQXZDO29CQUFzRDs7MEJBQUksV0FBWSxzQkFBWixFQUFKOztxQkFBdEQ7O2lCQVRIO2dCQVVHOztzQkFBSyxPQUFPLGdCQUFQLEVBQUw7b0JBQ0kseUNBQU8sVUFBVSxLQUFLLFFBQUwsRUFBZSxNQUFLLE1BQUwsRUFBWSxPQUFPLGdCQUFQLEVBQTVDLENBREo7b0JBRUk7OzBCQUFJLFdBQVksb0JBQVosRUFBSjs7cUJBRko7O2lCQVZIO2FBQVQsQ0E1Qk87Ozs7V0F0R1U7RUFBc0IsZ0JBQU0sU0FBTjs7a0JBQXRCIiwiZmlsZSI6IlNlc3Npb25FZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxcIjtcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3BsaXRQYW5lL1NwbGl0UGFuZVwiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3JDb25maWcgZnJvbSBcIi4vU2Vzc2lvbkVkaXRvckNvbmZpZ1wiO1xuaW1wb3J0IFRyZWVTZWN0aW9uIGZyb20gXCIuL1RyZWVTZWN0aW9uXCI7XG5pbXBvcnQgTm9kZVZpZXcgZnJvbSBcIi4vTm9kZVZpZXdcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICB0aGlzLnByb3BzLnNldHRpbmdzP3RoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZSh0aGlzLnByb3BzLndlYXZlLnJvb3QpO1xuICAgICAgICB0aGlzLnRyZWUubGFiZWwgPSB0aGlzLnByb3BzLmlzRGFzaGJvYXJkP1wiV2VhdmVEYXNoYm9hcmRcIjpcIldlYXZlXCI7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWUgPSB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGVDbGljayA9IHRoaXMubm9kZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2F2ZUZpbGUgPSB0aGlzLnNhdmVGaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3BlbkZpbGUgPSB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhOy8vIHRvLWRvOnRyeSB3aXRoIGxpbmthYmxlV2F0Y2hlciBhbmQgYWRkIGZvcmNlVXBkYXRlIHRvIHRoYXQgd2F0Y2hlclxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy53ZWF2ZSAhPT0gbmV4dFByb3BzLndlYXZlKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKG5leHRQcm9wcy53ZWF2ZS5yb290KTtcbiAgICAgICAgICAgIHRoaXMudHJlZS5sYWJlbCA9IG5leHRQcm9wcy5pc0Rhc2hib2FyZD9cIldlYXZlRGFzaGJvYXJkXCI6XCJXZWF2ZVwiO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGEgPSBudWxsIDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVDbGljayhub2RlKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgIHZhciBzdGF0ZSA9IFdlYXZlLmdldFN0YXRlKG5vZGUuZGF0YSk7XG4gICAgICAgIHZhciBzdHI7XG4gICAgICAgIGlmIChub2RlLmRhdGEgaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcpXG4gICAgICAgIFx0c3RyID0gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRzdHIgPSBXZWF2ZS5zdHJpbmdpZnkoc3RhdGUsIG51bGwsICdcXHQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWUuc3RhdGUgPSBzdHI7XG4gIH1cblxuXG4gIGNoYW5nZVNlc3Npb25WYWx1ZShlKXtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWUuc3RhdGU7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgXHR0aGlzLnNlbGVjdGVkRGF0YS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBlbHNlXG4gICAgICAgIFx0V2VhdmUuc2V0U3RhdGUodGhpcy5zZWxlY3RlZERhdGEsIEpTT04ucGFyc2UodmFsdWUpKTtcblxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzYXZlRmlsZSgpe1xuICAgIHZhciBhcmNoaXZlICA9IHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUuY3JlYXRlQXJjaGl2ZSh0aGlzLnByb3BzLndlYXZlKVxuICAgIHZhciB1aW50OEFycmF5ID0gYXJjaGl2ZS5zZXJpYWxpemUoKTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgID0gdWludDhBcnJheS5idWZmZXI7XG4gICAgd2luZG93LnNhdmVBcyhuZXcgQmxvYihbYXJyYXlCdWZmZXJdKSwgXCJ0ZXN0LndlYXZlXCIpO1xuICB9XG5cblxuXG4gIG9wZW5GaWxlKGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIC8vIEJ1aWxkIFByb21pc2UgTGlzdCwgZWFjaCBwcm9taXNlIHJlc29sdmVkIGJ5IEZpbGVSZWFkZXIub25sb2FkLlxuICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgYm90aCB0aGUgRmlsZVJlYWRlciByZXN1bHQgYW5kIGl0cyBvcmlnaW5hbCBmaWxlLlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtldmVudCwgc2VsZWN0ZWRmaWxlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGUuXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHNlbGVjdGVkZmlsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHppcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNhbGxiYWNrIGFmdGVyIGFsbCBmaWxlcyBoYXZlIGJlZW4gcmVhZC5cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHppcHBlZFJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyByZWFkIHRoZSBjb250ZW50IG9mIHRoZSBmaWxlIHdpdGggSlNaaXBcblxuICAgICAgICAgICAgICAgIHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUubG9hZEZpbGVDb250ZW50KHRoYXQucHJvcHMud2VhdmUscmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGF0LnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKHRoYXQucHJvcHMud2VhdmUucm9vdCk7XG4gICAgICAgICAgICAgICAgIHRoYXQudHJlZS5sYWJlbCA9IFwiV2VhdmVcIjtcbiAgICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RlZERhdGEgPSBudWxsIDsvLyB0by1kbzp0cnkgd2l0aCBsaW5rYWJsZVdhdGNoZXIgYW5kIGFkZCBmb3JjZVVwZGF0ZSB0byB0aGF0IHdhdGNoZXJcbiAgICAgICAgICAgICAgICAgdGhhdC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuXG5cblxuICAgIHZhciBhcHBseUJ1dHRvblN0eWxlID0ge1xuICAgICAgICBtYXJnaW5Ub3A6XCI0cHhcIixcbiAgICAgICAgbWFyZ2luTGVmdDpcIjJweFwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgZmxvYXQ6XCJyaWdodFwiLFxuICAgICAgICBwYWRkaW5nOlwiNHB4XCIsXG4gICAgICAgIGN1cnNvcjpcInBvaW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6XCIxMnB4XCIsXG4gICAgICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuICAgIH1cbiAgICB2YXIgaW5wdXRCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGxlZnQ6XCIwXCIsXG4gICAgICAgIHRvcDpcIjJweFwiLFxuICAgICAgICBib3R0b206XCIycHhcIlxuICAgIH1cblxuXG4gICAgcmV0dXJuICggPE1vZGFsIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLm1vZGFsQ29uZmlnfSBrZXlQcmVzcz1cInRydWVcIiB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCIxMDAlXCIsZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImhpZGRlblwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9XCI1MFwiIGRlZmF1bHRTaXplPVwiMjU2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJlZVNlY3Rpb24gdHJlZT17dGhpcy50cmVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5nc30gIG5vZGVDbGljaz17dGhpcy5ub2RlQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBhY3RpdmVOb2RlVmFsdWU9e3RoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlU2Vzc2lvblZhbHVlfT4gQXBwbHkgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5zYXZlRmlsZX0+PCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtZG93bmxvYWRcIiAgPiA8IC9pID4gU2F2ZSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9wZW5GaWxlfSB0eXBlPSdmaWxlJyBzdHlsZT17aW5wdXRCdXR0b25TdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8IGkgY2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS11cGxvYWRcIiAgPiA8IC9pID4gTG9hZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==