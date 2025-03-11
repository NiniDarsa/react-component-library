'use strict';

var React = require('react');
var styled = require('styled-components');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Button$1 = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, className = _a.className, style = _a.style;
    return (React.createElement(ButtonStyled, { className: className, style: style, onClick: onClick, disabled: disabled, variant: variant, size: size }, children));
};
var ButtonStyled = styled.button(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  padding: ", ";\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  padding: ", ";\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) { return (props.size === 'small' ? '4px 8px' : props.size === 'large' ? '17px 32px' : '10px 20px'); }, function (props) { return props.variant === 'primary' &&
    "background-color: #007bff;\n    color: white;\n    &:hover {\n      background-color: #0056b3;\n    }\n  "; }, function (props) { return props.variant === 'secondary' &&
    "background-color: #6c757d;\n    color: white;\n    &:hover {\n      background-color: #5a6268;\n    }\n  "; }, function (props) { return props.disabled &&
    "background-color: #e0e0e0;\n    color: #9e9e9e;\n    cursor: not-allowed;\n  "; });
var templateObject_1$r;

var Input$2 = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, value = _a.value, onChange = _a.onChange, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.label, label = _d === void 0 ? "" : _d, _e = _a.placeholder, placeholder = _e === void 0 ? "" : _e, _f = _a.error, error = _f === void 0 ? "" : _f, className = _a.className, style = _a.style;
    return (React.createElement("div", { className: className, style: style },
        React.createElement(LabelStyled, null,
            label,
            React.createElement(InputStyled, { label: label, type: type, value: value, onChange: onChange, disabled: disabled, placeholder: placeholder, error: error }),
            error && React.createElement(ErrorMessage$1, null, error))));
};
var InputStyled = styled.input(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  padding: 2px 8px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  font-size: 16px;\n  width: 100%;\n  box-sizing: border-box;\n\n  ", "\n  ", "\n"], ["\n  padding: 2px 8px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  font-size: 16px;\n  width: 100%;\n  box-sizing: border-box;\n\n  ", "\n  ", "\n"])), function (props) {
    return props.error &&
        "\n    border-color: red;\n  ";
}, function (props) { return props.disabled &&
    "background-color: #e0e0e0;\n    color: #9e9e9e;\n    cursor: not-allowed;\n  "; });
var LabelStyled = styled.label(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 4px;\n  font-size: 14px;\n  color: #1d1f1f;\n"], ["\n  display: block;\n  margin-bottom: 4px;\n  font-size: 14px;\n  color: #1d1f1f;\n"])));
var ErrorMessage$1 = styled.p(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  color: red;\n  font-size: 12px;\n  margin-top: 4px;\n"], ["\n  color: red;\n  font-size: 12px;\n  margin-top: 4px;\n"])));
var templateObject_1$q, templateObject_2$k, templateObject_3$8;

var Card = function (_a) {
    var imgUrl = _a.imgUrl, title = _a.title, description = _a.description, actions = _a.actions, children = _a.children, className = _a.className, style = _a.style;
    //??????????/
    return (React.createElement(CardStyled, { className: className, style: style, imgUrl: imgUrl, title: title, description: description },
        imgUrl && React.createElement(CardImage, { src: imgUrl, alt: title }),
        React.createElement(CardTitle, null, title),
        React.createElement(CardDescription, null, description),
        children && React.createElement("div", null, children),
        actions && React.createElement(CardActions, null, actions)));
};
var CardStyled = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  background-color: #e0e0e0a5;\n  overflow: hidden;\n  width: 300px;\n  padding: 16px;\n\n"], ["\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  background-color: #e0e0e0a5;\n  overflow: hidden;\n  width: 300px;\n  padding: 16px;\n\n"])));
var CardTitle = styled.h3(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: bold;\n  color: #333;\n"], ["\n  font-size: 18px;\n  font-weight: bold;\n  color: #333;\n"])));
var CardDescription = styled.p(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  font-size: 14px;\n  color: #666;\n"], ["\n  font-size: 14px;\n  color: #666;\n"])));
var CardImage = styled.img(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 4px;\n"], ["\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 4px;\n"])));
var CardActions = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 12px;\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  margin-top: 12px;\n  display: flex;\n  justify-content: flex-end;\n"])));
var templateObject_1$p, templateObject_2$j, templateObject_3$7, templateObject_4$4, templateObject_5;

var Modal = function (_a) {
    var visible = _a.visible, onClick = _a.onClick, children = _a.children, className = _a.className, style = _a.style;
    return (React.createElement(ModalOverlay, { visible: visible, onClick: onClick, className: className, style: style },
        React.createElement(ModalContent, { onClick: function (e) { return e.stopPropagation(); } },
            children,
            React.createElement("button", { onClick: onClick }, "Close"))));
};
var ModalOverlay = styled.div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n"], ["\n  display: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n"])), function (props) { return (props.visible ? 'block' : 'none'); });
var ModalContent = styled.div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  width: 80%;\n  max-width: 400px;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  width: 80%;\n  max-width: 400px;\n"])));
var templateObject_1$o, templateObject_2$i;

var Dropdown = function (_a) {
    var options = _a.options, onSelect = _a.onSelect, label = _a.label, className = _a.className, style = _a.style;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(null), selectedOption = _c[0], setSelectedOption = _c[1];
    var toggleDropdown = function () { return setIsOpen(!isOpen); };
    var handleSelect = function (option) {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };
    return (React.createElement(DropdownWrapper, { className: className, style: style },
        React.createElement("label", null, label),
        React.createElement(DropdownButton, { onClick: toggleDropdown },
            selectedOption || 'Select an option',
            React.createElement("span", null, isOpen ? '▲' : '▼')),
        isOpen && (React.createElement(DropdownList, null, options.map(function (option, index) { return (React.createElement(DropdownItem, { key: index, onClick: function () { return handleSelect(option); } }, option)); })))));
};
var DropdownWrapper = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var DropdownButton = styled.button(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  padding: 10px;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  color: black;\n  cursor: pointer;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 200px;\n"], ["\n  padding: 10px;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  color: black;\n  cursor: pointer;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 200px;\n"])));
var DropdownList = styled.ul(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin: 5px 0 0 0;\n  padding: 0;\n  list-style: none;\n  max-height: 150px;\n  overflow-y: auto;\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin: 5px 0 0 0;\n  padding: 0;\n  list-style: none;\n  max-height: 150px;\n  overflow-y: auto;\n"])));
var DropdownItem = styled.li(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  padding: 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: #f1f1f1;\n  }\n"], ["\n  padding: 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: #f1f1f1;\n  }\n"])));
var templateObject_1$n, templateObject_2$h, templateObject_3$6, templateObject_4$3;

var Tooltip = function (_a) {
    var text = _a.text, children = _a.children, position = _a.position, className = _a.className, style = _a.style;
    var _b = React.useState(false), isVisible = _b[0], setIsVisible = _b[1];
    return (React.createElement(TooltipTarget, { className: className, style: style, onMouseEnter: function () { return setIsVisible(true); }, onMouseLeave: function () { return setIsVisible(false); } },
        children,
        React.createElement(TooltipWrapper, { visible: isVisible, position: position }, text)));
};
var TooltipWrapper = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  opacity: ", ";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 2px;\n  font-size: 10px;\n  transition: all 0.4s ease-in-out;\n\n  ", "\n"], ["\n  opacity: ", ";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 2px;\n  font-size: 10px;\n  transition: all 0.4s ease-in-out;\n\n  ", "\n"])), function (props) { return (props.visible ? '1' : '0'); }, function (_a) {
    var position = _a.position;
    switch (position) {
        case 'top':
            return "bottom: 100%; left: 50%; transform: translateX(-50%);";
        case 'right':
            return "top: 50%; left: 100%; transform: translateY(-50%);";
        case 'bottom':
            return "top: 100%; left: 50%; transform: translateX(-50%);";
        case 'left':
            return "top: 50%; right: 100%; transform: translateY(-50%);";
        default:
            return "bottom: 100%; left: 50%; transform: translateX(-50%);";
    }
});
var TooltipTarget = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  margin-left: 40px;\n"], ["\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  margin-left: 40px;\n"])));
var templateObject_1$m, templateObject_2$g;

var Avatar = function (_a) {
    var src = _a.src, alt = _a.alt, size = _a.size, className = _a.className, style = _a.style;
    return (React.createElement(Wrapper$1, { size: size, className: className, style: style }, src ? React.createElement(Image, { src: src, alt: alt }) : React.createElement("span", null, alt)));
};
var Wrapper$1 = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) { return props.size; }, function (props) { return props.size; });
var Image = styled.img(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"], ["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"])));
var templateObject_1$l, templateObject_2$f;

var Badge = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 100 : _b, variant = _a.variant, className = _a.className, style = _a.style;
    return (React.createElement(Wrapper, { size: size, variant: variant, className: className, style: style },
        React.createElement("p", null, children)));
};
var Wrapper = styled.p(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: .4rem;\n  padding: 2px 4px;\n  color: aliceblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: .4rem;\n  padding: 2px 4px;\n  color: aliceblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) { return props.size; }, function (props) { return props.size / 2; }, function (props) {
    return props.variant === 'success'
        ? 'green'
        : props.variant === 'error'
            ? 'red'
            : 'orange';
});
var templateObject_1$k;

var Accordion = function (_a) {
    var title = _a.title, content = _a.content, className = _a.className, style = _a.style;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    return (React.createElement(AccordionItem, { className: className, style: style },
        React.createElement(AccordionHeader, { onClick: function () { return setIsOpen(!isOpen); } }, title),
        React.createElement(AccordionContent, { isOpen: isOpen }, content)));
};
var AccordionGroup = function (_a) {
    var items = _a.items;
    return (React.createElement(AccordionContainer, null, items.map(function (item, index) { return (React.createElement(Accordion, { key: index, title: item.title, content: item.content })); })));
};
var AccordionContainer = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  width: 100%;\n  max-width: 500px;\n  margin: 20px auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  color: black;\n"], ["\n  width: 100%;\n  max-width: 500px;\n  margin: 20px auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  color: black;\n"])));
var AccordionItem = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  border-top: 1px solid #ddd;\n"], ["\n  border-top: 1px solid #ddd;\n"])));
var AccordionHeader = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  padding: 16px;\n  background-color: #f4f4f4;\n  cursor: pointer;\n  font-weight: bold;\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #e2e2e2;\n  }\n"], ["\n  padding: 16px;\n  background-color: #f4f4f4;\n  cursor: pointer;\n  font-weight: bold;\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #e2e2e2;\n  }\n"])));
var AccordionContent = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  padding: 16px;\n  background-color: #fafafa;\n  display: ", ";\n"], ["\n  padding: 16px;\n  background-color: #fafafa;\n  display: ", ";\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "block" : "none");
});
var templateObject_1$j, templateObject_2$e, templateObject_3$5, templateObject_4$2;

var ButtonGroup = function (_a) {
    var buttons = _a.buttons, onClick = _a.onClick, className = _a.className, style = _a.style;
    return (React.createElement(ButtonGroupContainer, { className: className, style: style }, buttons.map(function (button) { return (React.createElement(Button, { key: button, onClick: function () { return onClick(button); } }, button)); })));
};
var ButtonGroupContainer = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex;\n  gap: 10px;\n"], ["\n  display: flex;\n  gap: 10px;\n"])));
var Button = styled.button(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"], ["\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"])));
var templateObject_1$i, templateObject_2$d;

var Tabs = function (_a) {
    var items = _a.items, className = _a.className, style = _a.style;
    var _b = React.useState(0), activeTab = _b[0], setActiveTab = _b[1];
    return (React.createElement("div", { className: className, style: style },
        React.createElement(TabContainer, null, items.map(function (item, index) { return (React.createElement(Tab, { key: index, isActive: activeTab === index, onClick: function () { return setActiveTab(index); } }, item.label)); })),
        React.createElement(TabContent, null, items[activeTab].content)));
};
var TabContainer = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: flex;\n  border-bottom: 1px solid #ddd;\n"], ["\n  display: flex;\n  border-bottom: 1px solid #ddd;\n"])));
var Tab = styled.button(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  padding: 10px 20px;\n  background: ", ";\n  color: red;\n  border: 1px solid #ddd;\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n  &:hover {\n    background: #e2e2e2;\n  }\n"], ["\n  padding: 10px 20px;\n  background: ", ";\n  color: red;\n  border: 1px solid #ddd;\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n  &:hover {\n    background: #e2e2e2;\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "#f0f0f0" : "transparent");
});
var TabContent = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  padding: 20px;\n  border-top: 1px solid #ddd;\n  background: #fafafa;\n"], ["\n  padding: 20px;\n  border-top: 1px solid #ddd;\n  background: #fafafa;\n"])));
var templateObject_1$h, templateObject_2$c, templateObject_3$4;

var ProgressBar = function (_a) {
    var percentage = _a.percentage, className = _a.className, style = _a.style;
    return (React.createElement(ProgressWrapper, { className: className, style: style },
        React.createElement(ProgressFill, { percentage: percentage })));
};
var ProgressWrapper = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  width: 100%;\n  background-color: #f3f3f3;\n  border-radius: 20px;\n  height: 20px;\n"], ["\n  width: 100%;\n  background-color: #f3f3f3;\n  border-radius: 20px;\n  height: 20px;\n"])));
var ProgressFill = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  width: ", ";\n  height: 100%;\n  background-color: #157419;\n  border-radius: 20px 0 0 20px;\n  transition: all 0.4s ease;\n"], ["\n  width: ", ";\n  height: 100%;\n  background-color: #157419;\n  border-radius: 20px 0 0 20px;\n  transition: all 0.4s ease;\n"])), function (_a) {
    var percentage = _a.percentage;
    return "".concat(percentage, "%");
});
var templateObject_1$g, templateObject_2$b;

var Spinner = function (_a) {
    var size = _a.size, className = _a.className, style = _a.style;
    return React.createElement(SpinnerWrapper, { size: size, className: className, style: style });
};
var SpinnerWrapper = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: ", "px;\n  height: ", "px;\n  animation: spin 2s linear infinite;\n\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n"], ["\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: ", "px;\n  height: ", "px;\n  animation: spin 2s linear infinite;\n\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n"])), function (props) { return (props.size ? props.size : '48'); }, function (props) { return (props.size ? props.size : '48'); });
var templateObject_1$f;

var Sidebar = function (_a) {
    var className = _a.className, style = _a.style;
    return (React.createElement(SidebarContainer, { className: className, style: style },
        React.createElement(SidebarItem, null, "Home"),
        React.createElement(SidebarItem, null, "About Us"),
        React.createElement(SidebarItem, null, "Profile"),
        React.createElement(SidebarItem, null, "Settings")));
};
var SidebarContainer = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  width: 250px;\n  height: 100vh;\n  background-color: #39526c;\n  padding: 20px;\n  position: fixed;\n"], ["\n  width: 250px;\n  height: 100vh;\n  background-color: #39526c;\n  padding: 20px;\n  position: fixed;\n"])));
var SidebarItem = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: white;\n  padding: 15px;\n  cursor: pointer;\n  border-bottom: 1px solid #34495e;\n  &:hover {\n    background-color: #34495e;\n  }\n"], ["\n  color: white;\n  padding: 15px;\n  cursor: pointer;\n  border-bottom: 1px solid #34495e;\n  &:hover {\n    background-color: #34495e;\n  }\n"])));
var templateObject_1$e, templateObject_2$a;

var Toast = function (_a) {
    var message = _a.message, className = _a.className, style = _a.style;
    var _b = React.useState(true), isVisible = _b[0], setIsVisible = _b[1];
    React.useEffect(function () {
        var timer = setTimeout(function () { return setIsVisible(false); }, 4000);
        return function () { return clearTimeout(timer); };
    }, []);
    return (React.createElement(React.Fragment, null, isVisible && (React.createElement(ToastWrapper, { className: className, style: style }, message))));
};
var ToastWrapper = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #333;\n  color: black;\n  padding: 15px;\n  border-radius: 5px;\n  animation: fade-in 0.5s forwards, fade-out 0.5s 3.5s forwards;\n"], ["\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #333;\n  color: black;\n  padding: 15px;\n  border-radius: 5px;\n  animation: fade-in 0.5s forwards, fade-out 0.5s 3.5s forwards;\n"])));
var templateObject_1$d;

var List = function (_a) {
    var items = _a.items, className = _a.className, style = _a.style;
    return (React.createElement(ListContainer, { className: className, style: style }, items.map(function (item, index) { return (React.createElement(ListItem, { key: index }, item)); })));
};
var ListContainer = styled.ul(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  color: black;\n"], ["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  color: black;\n"])));
var ListItem = styled.li(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd;\n  background-color: #f9f9f9;\n  &:hover {\n    background-color: #f1f1f1;\n  }\n"], ["\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd;\n  background-color: #f9f9f9;\n  &:hover {\n    background-color: #f1f1f1;\n  }\n"])));
var templateObject_1$c, templateObject_2$9;

var Pagination = function (_a) {
    var currentPage = _a.currentPage, totalPages = _a.totalPages, onPageChange = _a.onPageChange, className = _a.className, style = _a.style;
    var pages = [];
    for (var i = 0; i < totalPages; i++) {
        pages.push(i + 1);
    }
    return (React.createElement(PaginationWrapper, { className: className, style: style }, pages.map(function (page) { return (React.createElement(PageButton, { key: page, isActive: page === currentPage, onClick: function () { return onPageChange(page); } }, page)); })));
};
var PaginationWrapper = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n  "], ["\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n  "])));
var PageButton = styled.button(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n    padding: 10px 20px;\n    background-color: ", ";\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    margin: 0 5px;\n    cursor: pointer;\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  "], ["\n    padding: 10px 20px;\n    background-color: ", ";\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    margin: 0 5px;\n    cursor: pointer;\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  "])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "#4caf50" : "#fff");
});
var templateObject_1$b, templateObject_2$8;

var Carousel = function (_a) {
    var images = _a.images, className = _a.className, style = _a.style;
    var _b = React.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var nextSlide = function () {
        setCurrentIndex(function (prev) { return (prev + 1) % images.length; });
    };
    var prevSlide = function () {
        setCurrentIndex(function (prev) { return prev === 0 ? images.length - 1 : prev - 1; });
    };
    return (React.createElement(CarouselWrapper, { className: className, style: style },
        React.createElement(CarouselContent, { style: { transform: "translateX(-".concat(currentIndex * 100, "%)") } }, images.map(function (image, index) { return (React.createElement(Slide, { key: index, backgroundImage: image })); })),
        React.createElement(Arrow, { left: true, onClick: prevSlide }, " <"),
        React.createElement(Arrow, { onClick: nextSlide }, ">")));
};
var CarouselWrapper = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n"], ["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n"])));
var CarouselContent = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: flex;\n  transition: all 0.5s ease-in-out;\n"], ["\n  display: flex;\n  transition: all 0.5s ease-in-out;\n"])));
var Slide = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-width: 100%;\n  height: 300px;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n"], ["\n  min-width: 100%;\n  height: 300px;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n"])), function (_a) {
    var backgroundImage = _a.backgroundImage;
    return "url(".concat(backgroundImage, ")");
});
var Arrow = styled.button(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  ", "\n  transform: translateY(-50%);\n  font-size: 24px;\n  color: black;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 50%;\n  ", "\n  transform: translateY(-50%);\n  font-size: 24px;\n  color: black;\n  cursor: pointer;\n"])), function (_a) {
    var left = _a.left;
    return (left ? "left: 10px;" : "right: 10px;");
});
var templateObject_1$a, templateObject_2$7, templateObject_3$3, templateObject_4$1;

var Rating = function (_a) {
    var maxRating = _a.maxRating, className = _a.className, style = _a.style;
    var _b = React.useState(0), rating = _b[0], setRating = _b[1];
    var handleClick = function (index) {
        setRating(index + 1);
    };
    var array = [];
    for (var i = 0; i < maxRating; i++) {
        array.push(i);
    }
    return (React.createElement(RatingWrapper, { className: className, style: style }, array.map(function (_, index) { return (React.createElement(Star, { key: index, filled: index < rating, onClick: function () { return handleClick(index); } }, "\u2605")); })));
};
var RatingWrapper = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  cursor: pointer;\n"], ["\n  display: flex;\n  cursor: pointer;\n"])));
var Star = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  font-size: 24px;\n  color: ", ";\n"], ["\n  font-size: 24px;\n  color: ", ";\n"])), function (_a) {
    var filled = _a.filled;
    return (filled ? "#FFD700" : "#d3d3d3");
});
var templateObject_1$9, templateObject_2$6;

var SearchBar = function (_a) {
    var onSearch = _a.onSearch, placeholder = _a.placeholder, className = _a.className, style = _a.style;
    var _b = React.useState(""), query = _b[0], setQuery = _b[1];
    var handleChange = function (e) {
        var value = e.target.value;
        setQuery(value);
        onSearch(value);
    };
    return (React.createElement(SearchWrapper, { className: className, style: style },
        React.createElement(Input$1, { type: "text", value: query, onChange: handleChange, placeholder: placeholder }),
        React.createElement(SearchIcon, null, "\uD83D\uDD0D")));
};
var SearchWrapper = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  position: relative;\n  width: 300px;\n"], ["\n  position: relative;\n  width: 300px;\n"])));
var Input$1 = styled.input(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"], ["\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"])));
var SearchIcon = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: #aaa;\n"], ["\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: #aaa;\n"])));
var templateObject_1$8, templateObject_2$5, templateObject_3$2;

var Breadcrumbs = function (_a) {
    var items = _a.items, className = _a.className, style = _a.style;
    return (React.createElement(BreadcrumbsWrapper, { className: className, style: style }, items.map(function (item, index) { return (React.createElement(BreadcrumbItem, { key: index, isLast: index === items.length - 1 }, item)); })));
};
var BreadcrumbsWrapper = styled.nav(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var BreadcrumbItem = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n  &:not(:last-child) {\n    margin-right: 8px;\n  }\n  &:not(:last-child)::after {\n    content: '>';\n    margin-left: 8px;\n  }\n"], ["\n  font-size: 14px;\n  color: ", ";\n  &:not(:last-child) {\n    margin-right: 8px;\n  }\n  &:not(:last-child)::after {\n    content: '>';\n    margin-left: 8px;\n  }\n"])), function (_a) {
    var isLast = _a.isLast;
    return (isLast ? 'gray' : '#3084de');
});
var templateObject_1$7, templateObject_2$4;

var DatePicker = function (_a) {
    var className = _a.className, style = _a.style;
    var _b = React.useState(''), date = _b[0], setDate = _b[1];
    return (React.createElement(DatePickerWrapper, { className: className, style: style, type: "date", value: date, onChange: function (e) { return setDate(e.target.value); } }));
};
var DatePickerWrapper = styled.input(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"], ["\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"])));
var templateObject_1$6;

var TimePicker = function (_a) {
    var className = _a.className, style = _a.style;
    var _b = React.useState(''), time = _b[0], setTime = _b[1];
    return (React.createElement(TimePickerWrapper, { className: className, style: style, type: "time", value: time, onChange: function (e) { return setTime(e.target.value); } }));
};
var TimePickerWrapper = styled.input(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"], ["\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"])));
var templateObject_1$5;

var Textarea = function (_a) {
    var rows = _a.rows, className = _a.className, style = _a.style;
    return React.createElement(TextareaWrapper, { rows: rows, className: className, style: style });
};
var TextareaWrapper = styled.textarea(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"], ["\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"])));
var templateObject_1$4;

var Slider = function (_a) {
    var defautValue = _a.defautValue, className = _a.className, style = _a.style;
    var _b = React.useState(defautValue), value = _b[0], setValue = _b[1];
    return (React.createElement(SliderWrapper, { className: className, style: style },
        React.createElement(SliderInput, { type: "range", min: "0", max: "100", value: value, onChange: function (e) { return setValue(Number(e.target.value)); } }),
        React.createElement("div", null, value)));
};
var SliderWrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 300px;\n"], ["\n  width: 100%;\n  max-width: 300px;\n"])));
var SliderInput = styled.input(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$3, templateObject_2$3;

var FormValidation = function (_a) {
    var className = _a.className, style = _a.style;
    var _b = React.useState(''), email = _b[0], setEmail = _b[1];
    var _c = React.useState(''), error = _c[0], setError = _c[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email.');
        }
        else {
            setError('');
            alert('Form submitted!');
        }
    };
    return (React.createElement(FormWrapper, { onSubmit: handleSubmit, className: className, style: style },
        React.createElement(Input, { type: "email", placeholder: "Enter your email", value: email, onChange: function (e) { return setEmail(e.target.value); } }),
        error && React.createElement(ErrorMessage, null, error),
        React.createElement("button", { type: "submit" }, "Submit")));
};
var FormWrapper = styled.form(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Input = styled.input(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  padding: 10px;\n  font-size: 16px;\n  margin: 10px 0;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"], ["\n  padding: 10px;\n  font-size: 16px;\n  margin: 10px 0;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n"])));
var ErrorMessage = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  color: red;\n  font-size: 12px;\n  margin-bottom: 10px;\n"], ["\n  color: red;\n  font-size: 12px;\n  margin-bottom: 10px;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$1;

var Table = function (_a) {
    var headers = _a.headers, data = _a.data, className = _a.className, style = _a.style;
    return (React.createElement(TableWrapper, { className: className, style: style },
        React.createElement("thead", null,
            React.createElement("tr", null, headers.map(function (header, index) { return (React.createElement(TableHeader, { key: index }, header)); }))),
        React.createElement("tbody", null, data.map(function (row, rowIndex) { return (React.createElement(TableRow, { key: rowIndex }, headers.map(function (header, colIndex) { return (React.createElement(TableCell, { key: colIndex }, row[header])); }))); }))));
};
var TableWrapper = styled.table(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n  margin: 20px 0;\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  margin: 20px 0;\n"])));
var TableHeader = styled.th(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  padding: 12px;\n  background-color: #f4f4f4;\n  border: 1px solid #ddd;\n  text-align: left;\n  color: black;\n"], ["\n  padding: 12px;\n  background-color: #f4f4f4;\n  border: 1px solid #ddd;\n  text-align: left;\n  color: black;\n"])));
var TableRow = styled.tr(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &:nth-child(even) {\n    background-color: #595858;\n  }\n"], ["\n  &:nth-child(even) {\n    background-color: #595858;\n  }\n"])));
var TableCell = styled.td(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px;\n  border: 1px solid #ddd;\n"], ["\n  padding: 10px;\n  border: 1px solid #ddd;\n"])));
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4;

var Toggle = function (_a) {
    var checked = _a.checked, onChange = _a.onChange, className = _a.className, style = _a.style;
    return (React.createElement(ToggleWrapper, { className: className, style: style, checked: checked, onClick: function () { return onChange(!checked); } },
        React.createElement(ToggleBall, { checked: checked })));
};
var ToggleWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  width: 50px;\n  height: 25px;\n  background-color: ", ";\n  border-radius: 25px;\n  position: relative;\n  cursor: pointer;\n"], ["\n  display: inline-block;\n  width: 50px;\n  height: 25px;\n  background-color: ", ";\n  border-radius: 25px;\n  position: relative;\n  cursor: pointer;\n"])), function (_a) {
    var checked = _a.checked;
    return (checked ? '#4caf50' : '#ccc');
});
var ToggleBall = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: ", ";\n  transition: left 0.2s;\n"], ["\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: ", ";\n  transition: left 0.2s;\n"])), function (_a) {
    var checked = _a.checked;
    return (checked ? '26px' : '4px');
});
var templateObject_1, templateObject_2;

var Clock = function (_a) {
    var className = _a.className, style = _a.style;
    var getCurrentTime = function () {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    };
    var _b = React.useState(getCurrentTime()), currentTime = _b[0], setCurrentTime = _b[1];
    React.useEffect(function () {
        var interval = setInterval(function () {
            setCurrentTime(getCurrentTime());
        }, 1000);
        return function () { return clearInterval(interval); };
    }, []);
    return React.createElement("div", { className: className, style: style }, currentTime);
};

var Stopwatch = function (_a) {
    var className = _a.className, style = _a.style;
    var _b = React.useState(0), time = _b[0], setTime = _b[1];
    var _c = React.useState(false), isRunning = _c[0], setIsRunning = _c[1];
    var intervalId = React.useRef(null);
    // Function to start the stopwatch
    var startStopwatch = function () {
        if (isRunning)
            return;
        var id = setInterval(function () {
            setTime(function (prev) { return prev + 1; });
        }, 1000);
        setIsRunning(true);
        intervalId.current = id;
    };
    // Function to stop the stopwatch
    var stopStopwatch = function () {
        if (!isRunning)
            return;
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
        setIsRunning(false);
    };
    // Function to reset the stopwatch
    var resetStopwatch = function () {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
        setIsRunning(false);
        setTime(0);
    };
    // Cleanup interval on component unmount
    React.useEffect(function () {
        return function () {
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        };
    }, []);
    // Format time in HH:MM:SS format
    var formatTime = function (seconds) {
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        var secs = seconds % 60;
        return "".concat(String(hours).padStart(2, '0'), ":").concat(String(minutes).padStart(2, '0'), ":").concat(String(secs).padStart(2, '0'));
    };
    return (React.createElement("div", { className: className, style: style },
        React.createElement("h1", null, "Stopwatch"),
        React.createElement("div", null, formatTime(time)),
        React.createElement("div", null,
            React.createElement("button", { onClick: startStopwatch, disabled: isRunning }, "Start"),
            React.createElement("button", { onClick: stopStopwatch, disabled: !isRunning }, "Stop"),
            React.createElement("button", { onClick: resetStopwatch }, "Reset"))));
};

exports.Accordion = AccordionGroup;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.BreadCrumbs = Breadcrumbs;
exports.Button = Button$1;
exports.ButtonGroup = ButtonGroup;
exports.Card = Card;
exports.Carousel = Carousel;
exports.Clock = Clock;
exports.DatePicker = DatePicker;
exports.Dropdown = Dropdown;
exports.FormValidation = FormValidation;
exports.Input = Input$2;
exports.List = List;
exports.Modal = Modal;
exports.Pagination = Pagination;
exports.ProgressBar = ProgressBar;
exports.Rating = Rating;
exports.SearchBar = SearchBar;
exports.SideBar = Sidebar;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.StopWatch = Stopwatch;
exports.Table = Table;
exports.Tabs = Tabs;
exports.Textarea = Textarea;
exports.TimePicker = TimePicker;
exports.Toast = Toast;
exports.Toggle = Toggle;
exports.Tooltip = Tooltip;
