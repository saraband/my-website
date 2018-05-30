webpackJsonp([35783957827783],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(5);
	
	var emptyObject = __webpack_require__(44);
	var _invariant = __webpack_require__(1);
	
	if (false) {
	  var warning = require('fbjs/lib/warning');
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (false) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (false) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (false) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (false) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (false) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;
	
	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );
	
	        Constructor[name] = createMergedResultFunction(Constructor[name], property);
	
	        return;
	      }
	
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (false) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (false) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (false) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (false) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (false) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (false) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.hoistNonReactStatics = factory());
	}(this, (function () {
	    'use strict';
	    
	    var REACT_STATICS = {
	        childContextTypes: true,
	        contextTypes: true,
	        defaultProps: true,
	        displayName: true,
	        getDefaultProps: true,
	        getDerivedStateFromProps: true,
	        mixins: true,
	        propTypes: true,
	        type: true
	    };
	    
	    var KNOWN_STATICS = {
	        name: true,
	        length: true,
	        prototype: true,
	        caller: true,
	        callee: true,
	        arguments: true,
	        arity: true
	    };
	    
	    var defineProperty = Object.defineProperty;
	    var getOwnPropertyNames = Object.getOwnPropertyNames;
	    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    var getPrototypeOf = Object.getPrototypeOf;
	    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	    
	    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	            
	            if (objectPrototype) {
	                var inheritedComponent = getPrototypeOf(sourceComponent);
	                if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	                }
	            }
	            
	            var keys = getOwnPropertyNames(sourceComponent);
	            
	            if (getOwnPropertySymbols) {
	                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	            }
	            
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                    try { // Avoid failures from read-only properties
	                        defineProperty(targetComponent, key, descriptor);
	                    } catch (e) {}
	                }
	            }
	            
	            return targetComponent;
	        }
	        
	        return targetComponent;
	    };
	})));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(114);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(45),
	    getRawTag = __webpack_require__(111),
	    objectToString = __webpack_require__(112);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(113);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(45);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(109);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(108),
	    getPrototype = __webpack_require__(110),
	    isObjectLike = __webpack_require__(115);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createProvider = createProvider;
	
	var _react = __webpack_require__(2);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PropTypes = __webpack_require__(52);
	
	var _warning = __webpack_require__(24);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	function createProvider() {
	  var _Provider$childContex;
	
	  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
	  var subKey = arguments[1];
	
	  var subscriptionKey = subKey || storeKey + 'Subscription';
	
	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);
	
	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;
	
	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };
	
	    function Provider(props, context) {
	      _classCallCheck(this, Provider);
	
	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	      _this[storeKey] = props.store;
	      return _this;
	    }
	
	    Provider.prototype.render = function render() {
	      return _react.Children.only(this.props.children);
	    };
	
	    return Provider;
	  }(_react.Component);
	
	  if (false) {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }
	
	  Provider.propTypes = {
	    store: _PropTypes.storeShape.isRequired,
	    children: _propTypes2.default.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
	
	  return Provider;
	}
	
	exports.default = createProvider();

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = connectAdvanced;
	
	var _hoistNonReactStatics = __webpack_require__(70);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(13);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(2);
	
	var _Subscription = __webpack_require__(141);
	
	var _Subscription2 = _interopRequireDefault(_Subscription);
	
	var _PropTypes = __webpack_require__(52);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };
	
	  return selector;
	}
	
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);
	
	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;
	
	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
	
	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));
	
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	
	    var displayName = getDisplayName(wrappedComponentName);
	
	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
	
	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
	
	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }
	
	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;
	
	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;
	
	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };
	
	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };
	
	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };
	
	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;
	
	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));
	
	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };
	
	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);
	
	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };
	
	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };
	
	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };
	
	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;
	
	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;
	
	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        var _this2 = this;
	
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();
	
	          // If any connected descendants don't hot reload (and resubscribe in the process), their
	          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
	          // listeners, this does mean that the old versions of connected descendants will still be
	          // notified of state changes; however, their onStateChange function is a no-op so this
	          // isn't a huge deal.
	          var oldListeners = [];
	
	          if (this.subscription) {
	            oldListeners = this.subscription.listeners.get();
	            this.subscription.tryUnsubscribe();
	          }
	          this.initSubscription();
	          if (shouldHandleStateChanges) {
	            this.subscription.trySubscribe();
	            oldListeners.forEach(function (listener) {
	              return _this2.subscription.listeners.subscribe(listener);
	            });
	          }
	        }
	      };
	    }
	
	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createConnect = createConnect;
	
	var _connectAdvanced = __webpack_require__(50);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _shallowEqual = __webpack_require__(142);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _mapDispatchToProps = __webpack_require__(136);
	
	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);
	
	var _mapStateToProps = __webpack_require__(137);
	
	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);
	
	var _mergeProps = __webpack_require__(138);
	
	var _mergeProps2 = _interopRequireDefault(_mergeProps);
	
	var _selectorFactory = __webpack_require__(139);
	
	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:
	
	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.
	
	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.
	
	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */
	
	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }
	
	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}
	
	function strictEqual(a, b) {
	  return a === b;
	}
	
	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);
	
	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	
	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',
	
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },
	
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	
	    }, extraOptions));
	  };
	}
	
	exports.default = createConnect();

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
	
	var _redux = __webpack_require__(55);
	
	var _wrapMapToProps = __webpack_require__(51);
	
	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}
	
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	
	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
	
	var _wrapMapToProps = __webpack_require__(51);
	
	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}
	
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}
	
	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
	
	var _verifyPlainObject = __webpack_require__(53);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}
	
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	
	    var hasRunOnce = false;
	    var mergedProps = void 0;
	
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	
	        if (false) (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }
	
	      return mergedProps;
	    };
	  };
	}
	
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	
	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;
	
	var _verifySubselectors = __webpack_require__(140);
	
	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	
	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;
	
	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }
	
	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	    return mergedProps;
	  }
	
	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }
	
	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}
	
	// TODO: Add more comments
	
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.
	
	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);
	
	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);
	
	  if (false) {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }
	
	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifySubselectors;
	
	var _warning = __webpack_require__(24);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}
	
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
	
	var _verifyPlainObject = __webpack_require__(53);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);
	
	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}
	
	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}
	
	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;
	
	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };
	
	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;
	
	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);
	
	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }
	
	      if (false) (0, _verifyPlainObject2.default)(props, displayName, methodName);
	
	      return props;
	    };
	
	    return proxy;
	  };
	}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(134);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connectAdvanced = __webpack_require__(50);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _connect = __webpack_require__(135);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Provider = _Provider2.default;
	exports.createProvider = _Provider.createProvider;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
	  trySubscribe: _propTypes2.default.func.isRequired,
	  tryUnsubscribe: _propTypes2.default.func.isRequired,
	  notifyNestedSubs: _propTypes2.default.func.isRequired,
	  isSubscribed: _propTypes2.default.func.isRequired
	});
	
	var storeShape = exports.storeShape = _propTypes2.default.shape({
	  subscribe: _propTypes2.default.func.isRequired,
	  dispatch: _propTypes2.default.func.isRequired,
	  getState: _propTypes2.default.func.isRequired
	});

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	
	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};
	
	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];
	
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    get: function get() {
	      return next;
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}
	
	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);
	
	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }
	
	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };
	
	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };
	
	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };
	
	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
	
	      this.listeners = createListenerCollection();
	    }
	  };
	
	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };
	
	  return Subscription;
	}();
	
	exports.default = Subscription;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) return false;
	
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifyPlainObject;
	
	var _isPlainObject = __webpack_require__(116);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(24);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var $$observable = _interopDefault(__webpack_require__(146));
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
	  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
	};
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;
	
	  var proto = obj;
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return Object.getPrototypeOf(obj) === proto;
	}
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    if (isDispatching) {
	      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
	    }
	
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected the listener to be a function.');
	    }
	
	    if (isDispatching) {
	      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      if (isDispatching) {
	        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.REPLACE });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[$$observable] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[$$observable] = observable, _ref2;
	}
	
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	  } catch (e) {} // eslint-disable-line no-empty
	}
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';
	
	  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!isPlainObject(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (action && action.type === ActionTypes.REPLACE) return;
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        warning('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var unexpectedKeyCache = void 0;
	  if (false) {
	    unexpectedKeyCache = {};
	  }
	
	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	
	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        warning(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(this, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}
	
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function () {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      var store = createStore.apply(undefined, args);
	      var _dispatch = function dispatch() {
	        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
	      };
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(undefined, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}
	
	/*
	 * This is a dummy function to check if the function name has been altered by minification.
	 * If the function has been minified and NODE_ENV !== 'production', warn the user.
	 */
	function isCrushed() {}
	
	if (false) {
	  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = createStore;
	exports.combineReducers = combineReducers;
	exports.bindActionCreators = bindActionCreators;
	exports.applyMiddleware = applyMiddleware;
	exports.compose = compose;
	exports.__DO_NOT_USE__ActionTypes = ActionTypes;


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(147);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(148)(module)))

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	// Insert the class inside the inline svg tag
	var insertClassName = function insertClassName(src, className) {
	  if (className === undefined) return src;
	
	  return src.slice(0, 4) + (' class=\'' + className + '\' ') + src.slice(4);
	};
	
	exports.default = function (_ref) {
	  var src = _ref.src,
	      className = _ref.className,
	      props = _objectWithoutProperties(_ref, ['src', 'className']);
	
	  return _react2.default.createElement('div', _extends({ dangerouslySetInnerHTML: { __html: insertClassName(src, className) } }, props));
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Translation = __webpack_require__(229);
	
	var _Translation2 = _interopRequireDefault(_Translation);
	
	var _reactRedux = __webpack_require__(36);
	
	__webpack_require__(332);
	
	var _InlineSvg = __webpack_require__(151);
	
	var _InlineSvg2 = _interopRequireDefault(_InlineSvg);
	
	var _logo = __webpack_require__(439);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _reduxLogo = __webpack_require__(442);
	
	var _reduxLogo2 = _interopRequireDefault(_reduxLogo);
	
	var _reactLogo = __webpack_require__(441);
	
	var _reactLogo2 = _interopRequireDefault(_reactLogo);
	
	var _htmlLogo = __webpack_require__(437);
	
	var _htmlLogo2 = _interopRequireDefault(_htmlLogo);
	
	var _cssLogo = __webpack_require__(435);
	
	var _cssLogo2 = _interopRequireDefault(_cssLogo);
	
	var _nodeLogo = __webpack_require__(440);
	
	var _nodeLogo2 = _interopRequireDefault(_nodeLogo);
	
	var _graph = __webpack_require__(436);
	
	var _graph2 = _interopRequireDefault(_graph);
	
	var _ToolTip = __webpack_require__(228);
	
	var _ToolTip2 = _interopRequireDefault(_ToolTip);
	
	var _index = __webpack_require__(57);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PresentationComponent = function (_React$Component) {
	  _inherits(PresentationComponent, _React$Component);
	
	  function PresentationComponent(props) {
	    _classCallCheck(this, PresentationComponent);
	
	    return _possibleConstructorReturn(this, _React$Component.call(this, props));
	  }
	
	  PresentationComponent.prototype.render = function render() {
	    var _props = this.props,
	        tr = _props.tr,
	        setLang = _props.setLang,
	        lang = _props.lang;
	
	
	    return _react2.default.createElement(
	      'div',
	      { id: 'presentation-container' },
	      _react2.default.createElement(
	        'div',
	        { id: 'presentation-header' },
	        _react2.default.createElement(_logo2.default, { id: 'logo', className: 'fadeIn' }),
	        _react2.default.createElement(
	          'div',
	          { id: 'presentation-lang-container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'presentation-lang-item' + (lang === 'en' ? ' selectedLang' : ''),
	              onClick: function onClick() {
	                return setLang('en');
	              } },
	            'EN'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'presentation-lang-item' + (lang === 'fr' ? ' selectedLang' : ''),
	              onClick: function onClick() {
	                return setLang('fr');
	              } },
	            'FR'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'presentation-lang-item' + (lang === 'es' ? ' selectedLang' : ''),
	              onClick: function onClick() {
	                return setLang('es');
	              } },
	            'ES'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { id: 'presentation-body' },
	        _react2.default.createElement(
	          'div',
	          { id: 'presentation-title' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            tr('presentation-title')
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            tr('presentation-subtitle')
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'presentation-projects' },
	          _react2.default.createElement(
	            'div',
	            { id: 'presentation-logos-container' },
	            _react2.default.createElement(
	              _ToolTip2.default,
	              { text: 'CSS3' },
	              _react2.default.createElement(_cssLogo2.default, { className: 'presentation-logo-item' })
	            ),
	            _react2.default.createElement(
	              _ToolTip2.default,
	              { text: 'Redux' },
	              _react2.default.createElement(_reduxLogo2.default, { className: 'presentation-logo-item' })
	            ),
	            _react2.default.createElement(
	              _ToolTip2.default,
	              { text: 'React' },
	              _react2.default.createElement(_reactLogo2.default, { className: 'presentation-logo-item' })
	            ),
	            _react2.default.createElement(
	              _ToolTip2.default,
	              { text: 'Node' },
	              _react2.default.createElement(_nodeLogo2.default, { className: 'presentation-logo-item' })
	            ),
	            _react2.default.createElement(
	              _ToolTip2.default,
	              { text: 'HTML5' },
	              _react2.default.createElement(_htmlLogo2.default, { className: 'presentation-logo-item' })
	            )
	          ),
	          _react2.default.createElement(_graph2.default, { id: 'graph' }),
	          _react2.default.createElement(
	            'button',
	            null,
	            'Projects'
	          )
	        )
	      )
	    );
	  };
	
	  return PresentationComponent;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    tr: (0, _Translation2.default)(state.lang),
	    lang: state.lang
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    setLang: function setLang(lang) {
	      return dispatch((0, _index.setLang)(lang));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PresentationComponent);
	module.exports = exports['default'];

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(36);
	
	__webpack_require__(333);
	
	var _InlineSvg = __webpack_require__(151);
	
	var _InlineSvg2 = _interopRequireDefault(_InlineSvg);
	
	var _leftArrow = __webpack_require__(438);
	
	var _leftArrow2 = _interopRequireDefault(_leftArrow);
	
	var _rightArrow = __webpack_require__(443);
	
	var _rightArrow2 = _interopRequireDefault(_rightArrow);
	
	var _ProjectsData = __webpack_require__(78);
	
	var _ProjectsData2 = _interopRequireDefault(_ProjectsData);
	
	var _index = __webpack_require__(57);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProjectComponent = function (_React$Component) {
	  _inherits(ProjectComponent, _React$Component);
	
	  function ProjectComponent(props) {
	    _classCallCheck(this, ProjectComponent);
	
	    return _possibleConstructorReturn(this, _React$Component.call(this, props));
	  }
	
	  ProjectComponent.prototype.render = function render() {
	    var _props = this.props,
	        nextProject = _props.nextProject,
	        previousProject = _props.previousProject,
	        currentProjectFade = _props.currentProjectFade;
	    var _props$currentProject = this.props.currentProject,
	        id = _props$currentProject.id,
	        title = _props$currentProject.title,
	        component = _props$currentProject.component;
	
	
	    return _react2.default.createElement(
	      'div',
	      { id: 'project-container' },
	      _react2.default.createElement(
	        'div',
	        { id: 'project-overlay' },
	        _react2.default.createElement(
	          'div',
	          { id: 'project-controls' },
	          _react2.default.createElement(_leftArrow2.default, {
	            className: 'arrow-img',
	            onClick: function onClick() {
	              return previousProject(id);
	            }
	          }),
	          _react2.default.createElement(_rightArrow2.default, {
	            className: 'arrow-img',
	            onClick: function onClick() {
	              return nextProject(id);
	            }
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { id: 'project-left-panel', className: currentProjectFade },
	        title
	      ),
	      _react2.default.createElement(
	        'div',
	        { id: 'project-right-panel', className: currentProjectFade },
	        component
	      )
	    );
	  };
	
	  return ProjectComponent;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    currentProject: state.currentProject,
	    currentProjectFade: state.currentProjectFade
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    nextProject: function nextProject(currentId) {
	      var length = _ProjectsData2.default.length;
	      var nextId = currentId + 1 >= length ? 0 : currentId + 1;
	      var nextProject = _ProjectsData2.default[nextId];
	
	      dispatch((0, _index.setProject)(nextProject));
	    },
	    previousProject: function previousProject(currentId) {
	      var length = _ProjectsData2.default.length;
	      var nextId = currentId - 1 < 0 ? length - 1 : currentId - 1;
	      var nextProject = _ProjectsData2.default[nextId];
	
	      dispatch((0, _index.setProject)(nextProject));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProjectComponent);
	module.exports = exports['default'];

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [{
	  id: 0,
	  title: 'Application 1',
	  component: _react2.default.createElement(
	    'p',
	    null,
	    'Application 1'
	  )
	}, {
	  id: 1,
	  title: 'Application 2',
	  component: _react2.default.createElement(
	    'p',
	    null,
	    'Application 2'
	  )
	}, {
	  id: 2,
	  title: 'Application 3',
	  component: _react2.default.createElement(
	    'p',
	    null,
	    'Application 3'
	  )
	}];
	module.exports = exports['default'];

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var text = _ref.text,
	      children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { className: 'tool-tip' },
	    children,
	    _react2.default.createElement(
	      'p',
	      { className: 'tool-tip-text' },
	      text
	    )
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var translations = {
	  'en': {
	    'presentation-title': 'Front-end developper',
	    'presentation-subtitle': 'I design, implement and connect user interfaces.'
	  },
	  'fr': {
	    'presentation-title': 'Développeur front-end',
	    'presentation-subtitle': 'Je conçois, implémente et connecte des interfaces utilisateur.'
	  },
	  'es': {
	    'presentation-title': 'Front-end developper',
	    'presentation-subtitle': 'I design, implement and connect user interfaces.'
	  }
	};
	
	exports.default = function (lang) {
	  return function (key) {
	    return translations[lang][key] === undefined ? 'No translation available for lang=' + lang + ', key=' + key : translations[lang][key];
	  };
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function CssLogo (props) {
	    return React.createElement("svg",props,[React.createElement("sodipodi:namedview",{"fitMarginLeft":"0","id":"base","showgrid":"false","inkscapeZoom":"0.35","inkscapeCx":"-276.49014","borderopacity":"1.0","fitMarginTop":"0","bordercolor":"#666666","pagecolor":"#ffffff","inkscapeCy":"244.10462","inkscapeCurrentLayer":"layer1","inkscapeDocumentUnits":"px","inkscapeWindowMaximized":"1","inkscapeWindowY":"31","fitMarginBottom":"0","inkscapeWindowX":"0","fitMarginRight":"0","inkscapePageopacity":"0.0","inkscapePageshadow":"2","inkscapeWindowHeight":"938","inkscapeWindowWidth":"1280","key":0}),React.createElement("g",{"id":"layer1","transform":"translate(-170.06157,-270.18109)","inkscapeLabel":"Calque 1","inkscapeGroupmode":"layer","key":1},React.createElement("g",{"id":"g3013","transform":"translate(95.428571,270.18109)"},[React.createElement("polygon",{"id":"polygon2989","style":{"fill":"#264DE4"},"points":"-638.6,1129.6 -1068.3,1010.4 -1164,-63.4 -112,-63.4 -208,1010.1 \t\t","key":0}),React.createElement("polygon",{"id":"polygon2991","style":{"fill":"#2965F1"},"points":"-290,942 -208,24.5 -638,24.5 -638,1038.3 \t\t","key":1}),React.createElement("polygon",{"id":"polygon2993","style":{"fill":"#EBEBEB"},"points":"-944.5,422.6 -932.6,554.3 -638,554.3 -638,422.6 \t\t","key":2}),React.createElement("polygon",{"id":"polygon2995","style":{"fill":"#EBEBEB"},"points":"-968.3,156.1 -956.1,287.8 -638,287.8 -638,156.1 -638.6,156.1 \t\t","key":3}),React.createElement("polygon",{"id":"polygon2997","style":{"fill":"#EBEBEB"},"points":"-638,764.8 -638.6,764.8 -785.3,725.4 -794.6,620.4 -865.9,620.4 \r\n\t\t\t-926.8,620.4 -908.3,827.1 -638.6,902 -638,901.7 \t\t","key":4}),React.createElement("polygon",{"id":"polygon3005","style":{"fill":"#FFFFFF"},"points":"-332.4,422.6 -308.6,156.1 -638.6,156.1 -638.6,287.8 -453,287.8 \r\n\t\t\t-464.9,422.6 -638.6,422.6 -638.6,554.3 -476.2,554.3 -491.6,725.1 -638.6,764.8 -638.6,902 -368.6,827.1 -366.6,804.8 \r\n\t\t\t-335.5,458 \t\t","key":5})]))]);
	}
	
	CssLogo.displayName = "CssLogo";
	
	CssLogo.defaultProps = {"version":"1.1","id":"svg2","xmlnsCc":"http://creativecommons.org/ns#","xmlnsInkscape":"http://www.inkscape.org/namespaces/inkscape","xmlnsRdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlnsSvg":"http://www.w3.org/2000/svg","xmlnsSodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlnsDc":"http://purl.org/dc/elements/1.1/","sodipodiDocname":"htmlcss.svg","inkscapeVersion":"0.48.3.1 r9886","x":"0px","y":"0px","viewBox":"-1238.7 -63.4 1052.1 1193","style":{"enableBackground":"new -1238.7 -63.4 1052.1 1193"},"xmlSpace":"preserve"};
	
	module.exports = CssLogo;
	
	CssLogo.default = CssLogo;


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function Graph (props) {
	    return React.createElement("svg",props,[React.createElement("rect",{"id":"XMLID_37_","x":"80.3","y":"109.4","transform":"matrix(0.9925 -0.1219 0.1219 0.9925 -19.6107 11.456)","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"width":"7","height":"113.1","key":0}),React.createElement("path",{"id":"XMLID_51_","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M72.7,146.5l-3.6-29.2\r\n\tc-0.3-2.7,1.6-5.2,4.3-5.5h0","key":1}),React.createElement("path",{"id":"XMLID_45_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M86.9,149.1l-10.2,1.3l-5.2-42.4\r\n\tc-0.2-1.9,1.1-3.6,3-3.8l3.4-0.4c1.9-0.2,3.6,1.1,3.8,3L86.9,149.1z","key":2}),React.createElement("path",{"id":"XMLID_39_","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M300.5,194.3\r\n\tc0,37.5-113.8,9.3-113.8,58.8s0,50,0,50","key":3}),React.createElement("path",{"id":"XMLID_15_","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M508.2,1H238.6\r\n\tc-6.5,0-12,5.1-12,11.6v169.6c0,6.5,5.4,11.8,12,11.8h126v26h-41.7c-8.8,0-16,7.2-16,16v0h133v0c0-8.8-7.2-16-16-16h-42.3v-26h126.6\r\n\tc6.5,0,11.4-5.2,11.4-11.8V12.6C519.7,6.1,514.8,1,508.2,1z","key":4}),React.createElement("rect",{"id":"XMLID_2_","x":"241.7","y":"17","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"width":"263.5","height":"160.8","key":5}),React.createElement("circle",{"id":"XMLID_3_","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"cx":"273.7","cy":"73.9","r":"12.8","key":6}),React.createElement("path",{"id":"XMLID_4_","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M439.4,39.3h-132\r\n\tc-3.1,0-5.6-2.5-5.6-5.6v-0.3c0-3.1,2.5-5.6,5.6-5.6h132c3.1,0,5.6,2.5,5.6,5.6v0.3C445,36.7,442.5,39.3,439.4,39.3z","key":7}),React.createElement("rect",{"id":"XMLID_5_","x":"300.5","y":"67.9","style":{"fill":"none","stroke":"#E5424A","strokeMiterlimit":"10"},"width":"47.4","height":"11.5","key":8}),React.createElement("rect",{"id":"XMLID_6_","x":"300.5","y":"86.8","style":{"fill":"none","stroke":"#E5424A","strokeMiterlimit":"10"},"width":"73","height":"11.5","key":9}),React.createElement("rect",{"id":"XMLID_34_","x":"300.5","y":"106.5","style":{"fill":"none","stroke":"#E5424A","strokeMiterlimit":"10"},"width":"59.7","height":"11.5","key":10}),React.createElement("rect",{"id":"XMLID_35_","x":"360.2","y":"67.9","style":{"fill":"none","stroke":"#E5424A","strokeMiterlimit":"10"},"width":"34.5","height":"11.5","key":11}),React.createElement("g",{"id":"XMLID_49_","key":12},[React.createElement("circle",{"id":"XMLID_36_","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"cx":"472.2","cy":"153.2","r":"9.9","key":0}),React.createElement("path",{"id":"XMLID_7_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M480.1,217h-45c-4.9,0-9-4-9-9\r\n\t\tv-89.4c0-4.9,4-9,9-9h45c4.9,0,9,4,9,9V208C489,213,485,217,480.1,217z","key":1}),React.createElement("line",{"id":"XMLID_9_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"426.7","y1":"201","x2":"488.7","y2":"201","key":2}),React.createElement("circle",{"id":"XMLID_11_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"cx":"457.9","cy":"209","r":"2.9","key":3}),React.createElement("line",{"id":"XMLID_8_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeMiterlimit":"10"},"x1":"467.7","y1":"209.5","x2":"482.7","y2":"209.5","key":4}),React.createElement("line",{"id":"XMLID_1_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeMiterlimit":"10"},"x1":"433.7","y1":"209.5","x2":"448.7","y2":"209.5","key":5}),React.createElement("line",{"id":"XMLID_26_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"441.7","y1":"176","x2":"465.7","y2":"176","key":6}),React.createElement("line",{"id":"XMLID_27_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"441.7","y1":"183","x2":"474.7","y2":"183","key":7}),React.createElement("line",{"id":"XMLID_28_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"441.7","y1":"188","x2":"453.7","y2":"188","key":8}),React.createElement("circle",{"id":"XMLID_25_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"cx":"457.9","cy":"147","r":"14.3","key":9}),React.createElement("line",{"id":"XMLID_29_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"468.7","y1":"176","x2":"474.7","y2":"176","key":10}),React.createElement("line",{"id":"XMLID_30_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"457.7","y1":"188","x2":"461.7","y2":"188","key":11}),React.createElement("line",{"id":"XMLID_31_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"426.7","y1":"118","x2":"488.7","y2":"118","key":12}),React.createElement("line",{"id":"XMLID_32_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"454.7","y1":"114","x2":"464.7","y2":"114","key":13}),React.createElement("line",{"id":"XMLID_33_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"451.7","y1":"114","x2":"453.7","y2":"114","key":14})]),React.createElement("path",{"id":"XMLID_38_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M571.2,265H15.5\r\n\tc-8,0-14.5-6.5-14.5-14.5v0c0-8,6.5-14.5,14.5-14.5h555.7c8,0,14.5,6.5,14.5,14.5v0C585.7,258.5,579.2,265,571.2,265z","key":13}),React.createElement("path",{"id":"XMLID_40_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M195.7,323.7h-18v-13.1\r\n\tc0-4.2,3.4-7.7,7.7-7.7h2.7c4.2,0,7.7,3.4,7.7,7.7V323.7z","key":14}),React.createElement("line",{"id":"XMLID_42_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"181.7","y1":"324","x2":"181.7","y2":"332","key":15}),React.createElement("line",{"id":"XMLID_41_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"x1":"190.7","y1":"324","x2":"190.7","y2":"332","key":16}),React.createElement("circle",{"id":"XMLID_43_","style":{"fill":"none","stroke":"#E5424A","strokeMiterlimit":"10"},"cx":"373.5","cy":"187.5","r":"3.7","key":17}),React.createElement("polyline",{"id":"XMLID_46_","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"points":"58.5,136.9 79,188.3 \r\n\t69.2,192.3 48.7,140.9 ","key":18}),React.createElement("polygon",{"id":"XMLID_47_","style":{"fill":"none","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"points":"53.9,139 51.6,141.2 \r\n\t48.7,140.9 47.3,123.1 58.6,137 57.2,139 ","key":19}),React.createElement("line",{"id":"XMLID_48_","style":{"fill":"none","stroke":"#E5424A","strokeMiterlimit":"10"},"x1":"47.6","y1":"127.4","x2":"50.1","y2":"126.4","key":20}),React.createElement("line",{"id":"XMLID_50_","style":{"fill":"none","stroke":"#E5424A","strokeMiterlimit":"10"},"x1":"53.9","y1":"139","x2":"74.4","y2":"191.1","key":21}),React.createElement("rect",{"id":"XMLID_44_","x":"59.7","y":"168","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"width":"60.7","height":"68","key":22}),React.createElement("g",{"id":"XMLID_62_","key":23},[React.createElement("path",{"id":"XMLID_59_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M80.7,181c0,20,7.8,33,7.8,33\r\n\t\th35.2c0,0-7.8-13-7.8-33H80.7z","key":0}),React.createElement("line",{"id":"XMLID_60_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeMiterlimit":"10"},"x1":"88.7","y1":"189.5","x2":"110.7","y2":"189.5","key":1}),React.createElement("line",{"id":"XMLID_61_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeMiterlimit":"10"},"x1":"90.7","y1":"197.5","x2":"111.7","y2":"197.5","key":2}),React.createElement("line",{"id":"XMLID_58_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeMiterlimit":"10"},"x1":"93.7","y1":"205.5","x2":"113.7","y2":"205.5","key":3})]),React.createElement("path",{"id":"XMLID_54_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeMiterlimit":"10"},"d":"M161.3,219.8L161.3,219.8\r\n\tc-2.2,0-3.9-1.8-3.9-3.9l0,0c0-2.2,1.8-3.9,3.9-3.9l0,0c2.2,0,3.9,1.8,3.9,3.9l0,0C165.2,218.1,163.5,219.8,161.3,219.8z","key":24}),React.createElement("path",{"id":"XMLID_52_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M158,215.9h6.6\r\n\tc7.2,0,13.1,5.9,13.1,13.1v0h-32.8v0C144.9,221.8,150.8,215.9,158,215.9z","key":25}),React.createElement("path",{"id":"XMLID_53_","style":{"fill":"#FFFFFF","stroke":"#E5424A","strokeWidth":"2","strokeMiterlimit":"10"},"d":"M144.9,229h32.8v0\r\n\tc0,3.2-2.6,5.8-5.8,5.8h-21.2C147.5,234.8,144.9,232.2,144.9,229L144.9,229z","key":26})]);
	}
	
	Graph.displayName = "Graph";
	
	Graph.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 586.7 332","style":{"enableBackground":"new 0 0 586.7 332"},"xmlSpace":"preserve"};
	
	module.exports = Graph;
	
	Graph.default = Graph;


/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function HtmlLogo (props) {
	    return React.createElement("svg",props,[React.createElement("title",{"key":0},"HTML5 Logo Badge"),React.createElement("path",{"style":{"fill":"#E34F26"},"d":"M-500.4,648.7L-569.3-124h757.5l-68.9,772.7L-191.3,736","key":1}),React.createElement("path",{"style":{"fill":"#EF652A"},"d":"M-189.7,668.8l250.3-68.9l58.8-661.8h-309.1","key":2}),React.createElement("path",{"style":{"fill":"#EBEBEB"},"d":"M-189.7,225.4h-126L-324,128h134.4V33.9h-1.7h-236.8l1.7,25.2l23.5,262h213.3V225.4z M-189.7,472.3\r\n\th-1.7l-105.8-28.6l-6.7-75.6h-50.4h-43.7l11.8,149.5l194.8,53.8h1.7V472.3z","key":3}),React.createElement("path",{"style":{"fill":"#FFFFFF"},"d":"M-191.3,225.4v95.7h117.6l-11.8,122.6l-105.8,28.6v99.1L3.5,517.6l1.7-16.8L27,250.6l3.4-25.2H3.5\r\n\tH-191.3z M-191.3,33.9v58.8V128l0,0H38.8l0,0l0,0l1.7-20.2l5-48.7l1.7-25.2H-191.3z","key":4})]);
	}
	
	HtmlLogo.displayName = "HtmlLogo";
	
	HtmlLogo.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"-569.3 -124 757.5 860","style":{"enableBackground":"new -569.3 -124 757.5 860"},"xmlSpace":"preserve"};
	
	module.exports = HtmlLogo;
	
	HtmlLogo.default = HtmlLogo;


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function LeftArrow (props) {
	    return React.createElement("svg",props,React.createElement("polygon",{"points":"352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "}));
	}
	
	LeftArrow.displayName = "LeftArrow";
	
	LeftArrow.defaultProps = {"height":"512px","id":"Layer_1","style":{"enableBackground":"new 0 0 512 512"},"version":"1.1","viewBox":"0 0 512 512","width":"512px","xmlSpace":"preserve"};
	
	module.exports = LeftArrow;
	
	LeftArrow.default = LeftArrow;


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function Logo (props) {
	    return React.createElement("svg",props,[React.createElement("polygon",{"id":"XMLID_3_","style":{"opacity":"0.4","fill":"#E5428C"},"points":"177,306.4 88.5,357.6 0,306.4 0,204.1 88.5,153 177,204.1 ","key":0}),React.createElement("polygon",{"id":"XMLID_4_","style":{"opacity":"0.4","fill":"#E55B52"},"points":"266,153.4 177.5,204.6 89,153.4 89,51.1 177.5,0 266,51.1 ","key":1}),React.createElement("polygon",{"id":"XMLID_2_","style":{"opacity":"0.4","fill":"#E5425E"},"points":"354,307.4 265.5,358.6 177,307.4 177,205.1 265.5,154 354,205.1 \r\n\t","key":2}),React.createElement("polygon",{"id":"XMLID_1_","style":{"fill":"#E5424A"},"points":"266,255.4 177.5,306.6 89,255.4 89,153.1 177.5,102 266,153.1 ","key":3}),React.createElement("polygon",{"id":"XMLID_6_","style":{"fill":"#CC1746"},"points":"89,255.4 177.5,204.6 89,153.4 ","key":4}),React.createElement("polygon",{"id":"XMLID_7_","style":{"fill":"#E55E5E"},"points":"177.5,204.5 266,255.4 266,153.3 ","key":5}),React.createElement("polygon",{"id":"XMLID_8_","style":{"fill":"#ED8A8A"},"points":"177,204.3 177,102.3 266,153.3 ","key":6}),React.createElement("g",{"id":"XMLID_5_","key":7},React.createElement("path",{"id":"XMLID_10_","style":{"fill":"#FFFFFF"},"d":"M329.7,128.6l-143.8,82.1v124.6H165V211.7L22.3,116.6l17.3-14.3l136.2,90.1L315,112\r\n\t\tL329.7,128.6z"}))]);
	}
	
	Logo.displayName = "Logo";
	
	Logo.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 354 358.6","style":{"enableBackground":"new 0 0 354 358.6"},"xmlSpace":"preserve"};
	
	module.exports = Logo;
	
	Logo.default = Logo;


/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function NodeLogo (props) {
	    return React.createElement("svg",props,React.createElement("g",null,React.createElement("path",{"style":{"fill":"#539E43"},"d":"M-574.1,845c-11.9,0-22.9-3.3-33-8.6l-104.6-62.1c-15.8-8.6-8-11.9-3.3-13.4\r\n\t\tc21.4-7.1,25.3-8.6,47.3-21.4c2.4-1.5,5.6-0.9,8,0.9l80.3,48.2c3.3,1.5,7.1,1.5,9.5,0l314.2-181.9c3.3-1.5,4.8-4.8,4.8-8.6V234.5\r\n\t\tc0-3.9-1.5-7.1-4.8-8.6L-569.9,44.5c-3.3-1.5-7.1-1.5-9.5,0l-314.2,181.3c-3.3,1.5-4.8,5.6-4.8,8.6v363.2c0,3.3,1.5,7.1,4.8,8.6\r\n\t\tl85.9,49.6c46.4,23.8,75.5-3.9,75.5-31.5V266c0-4.8,3.9-9.5,9.5-9.5h40.1c4.8,0,9.5,3.9,9.5,9.5v358.5c0,62.1-33.9,98.4-93,98.4\r\n\t\tc-18.1,0-32.4,0-72.5-19.6l-82.6-47.3c-20.5-11.9-33-33.9-33-57.4V235.1c0-23.8,12.5-45.8,33-57.4L-607.1-4.2\r\n\t\tc19.6-11,46.4-11,66.3,0l314.2,181.9c20.5,11.9,33,33.9,33,57.4v363.2c0,23.8-12.5,45.8-33,57.4l-314.2,181.9\r\n\t\tC-551.2,842.6-563.1,845-574.1,845L-574.1,845z M-477.2,595.3c-137.9,0-166.2-63-166.2-116.5c0-4.8,3.9-9.5,9.5-9.5h41\r\n\t\tc4.8,0,8.6,3.3,8.6,8c6.2,41.6,24.4,62.1,107.9,62.1c66.3,0,94.5-14.9,94.5-50.5c0-20.5-8-35.4-111.2-45.8\r\n\t\tc-85.9-8.6-139.4-27.6-139.4-96c0-63.9,53.5-101.7,143.3-101.7c100.8,0,150.4,34.8,156.6,110.3c0,2.4-0.9,4.8-2.4,7.1\r\n\t\tc-1.5,1.5-3.9,3.3-6.2,3.3h-41c-3.9,0-8-3.3-8.6-7.1c-9.5-43.4-33.9-57.4-98.4-57.4c-72.5,0-81.1,25.3-81.1,44\r\n\t\tc0,22.9,10.1,30,107.9,42.5c96.9,12.5,142.7,30.6,142.7,98.4C-320.5,555.8-377,595.3-477.2,595.3L-477.2,595.3z"})));
	}
	
	NodeLogo.displayName = "NodeLogo";
	
	NodeLogo.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"-954.3 -12.5 760.6 857.5","style":{"enableBackground":"new -954.3 -12.5 760.6 857.5"},"xmlSpace":"preserve"};
	
	module.exports = NodeLogo;
	
	NodeLogo.default = NodeLogo;


/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function ReactLogo (props) {
	    return React.createElement("svg",props,React.createElement("g",null,[React.createElement("path",{"style":{"fill":"#61DAFB"},"d":"M467.4,403.5c0-75.8-95-147.7-240.6-192.3c33.6-148.4,18.7-266.5-47.1-304.3\r\n\t\tc-15.2-8.9-32.9-13.1-52.3-13.1v52c10.7,0,19.4,2.1,26.6,6.1c31.7,18.2,45.5,87.5,34.8,176.6c-2.6,21.9-6.8,45-11.9,68.6\r\n\t\tc-45.7-11.2-95.7-19.8-148.2-25.4C-2.8,128.6-35.5,89.4-68.4,55.1C7.7-15.6,79.1-54.4,127.6-54.4v-52l0,0\r\n\t\tc-64.2,0-148.2,45.7-233.1,125.1c-84.9-78.9-168.9-124.1-233.1-124.1v52c48.3,0,119.9,38.5,196,108.7\r\n\t\tc-32.7,34.3-65.3,73.3-96.4,116.4c-52.7,5.6-102.7,14.2-148.4,25.7c-5.4-23.3-9.3-46-12.1-67.7c-11-89.1,2.6-158.4,34.1-176.9\r\n\t\tc7-4.2,16.1-6.1,26.8-6.1v-52l0,0c-19.6,0-37.3,4.2-52.7,13.1c-65.6,37.8-80.3,155.6-46.4,303.6c-145.1,44.8-239.6,116.4-239.6,192\r\n\t\tc0,75.8,95,147.7,240.6,192.3c-33.6,148.4-18.7,266.5,47.1,304.3c15.2,8.9,32.9,13.1,52.5,13.1c64.2,0,148.2-45.7,233.1-125.1\r\n\t\tC-19.1,866.9,64.9,912.2,129,912.2c19.6,0,37.3-4.2,52.7-13.1c65.6-37.8,80.3-155.6,46.4-303.6\r\n\t\tC372.9,550.9,467.4,479.1,467.4,403.5z M163.6,247.8c-8.6,30.1-19.4,61.1-31.5,92.2c-9.6-18.7-19.6-37.3-30.6-56\r\n\t\tc-10.7-18.7-22.2-36.9-33.6-54.6C101,234.3,133,240.4,163.6,247.8z M56.7,496.3c-18.2,31.5-36.9,61.4-56.2,89.1\r\n\t\tc-34.8,3-70,4.7-105.5,4.7c-35.2,0-70.5-1.6-105-4.4c-19.4-27.8-38.3-57.4-56.5-88.7c-17.7-30.6-33.8-61.6-48.5-92.9\r\n\t\tc14.5-31.3,30.8-62.5,48.3-93.1c18.2-31.5,36.9-61.4,56.2-89.1c34.8-3,70-4.7,105.5-4.7c35.2,0,70.5,1.6,105,4.4\r\n\t\tc19.4,27.8,38.3,57.4,56.5,88.7c17.7,30.6,33.8,61.6,48.5,92.9C90.3,434.5,74.2,465.8,56.7,496.3z M132.1,466\r\n\t\tc12.6,31.3,23.3,62.5,32.2,92.9c-30.6,7.5-62.8,13.8-96.1,18.7c11.4-18,22.9-36.4,33.6-55.3C112.5,503.6,122.5,484.7,132.1,466z\r\n\t\t M-104.5,715c-21.7-22.4-43.4-47.4-64.9-74.7c21,0.9,42.5,1.6,64.2,1.6c21.9,0,43.6-0.5,64.9-1.6C-61.4,667.6-83.1,692.6-104.5,715\r\n\t\tz M-278.1,577.5c-33.1-4.9-65.1-11-95.7-18.4c8.6-30.1,19.4-61.1,31.5-92.2c9.6,18.7,19.6,37.3,30.6,56\r\n\t\tC-300.8,541.6-289.6,559.8-278.1,577.5z M-105.7,91.9c21.7,22.4,43.4,47.4,64.9,74.7c-21-0.9-42.5-1.6-64.2-1.6\r\n\t\tc-21.9,0-43.6,0.5-64.9,1.6C-148.9,139.3-127.2,114.3-105.7,91.9z M-278.4,229.4c-11.4,18-22.9,36.4-33.6,55.3\r\n\t\tc-10.7,18.7-20.8,37.3-30.3,56c-12.6-31.3-23.3-62.5-32.2-92.9C-343.9,240.6-311.7,234.3-278.4,229.4z M-489.6,521.5\r\n\t\tc-82.6-35.2-136-81.4-136-118.1s53.4-83.1,136-118.1c20.1-8.6,42-16.3,64.6-23.6c13.3,45.7,30.8,93.3,52.5,142.1\r\n\t\tc-21.5,48.5-38.7,95.9-51.8,141.4C-447.3,538.1-469.3,530.2-489.6,521.5z M-364,855c-31.7-18.2-45.5-87.5-34.8-176.6\r\n\t\tc2.6-21.9,6.8-45,11.9-68.6c45.7,11.2,95.7,19.8,148.2,25.4c31.5,43.2,64.2,82.4,97.1,116.7c-76.1,70.7-147.5,109.4-196,109.4\r\n\t\tC-348.1,861.1-357,859-364,855z M189.5,677.2c11,89.1-2.6,158.4-34.1,176.9c-7,4.2-16.1,6.1-26.8,6.1c-48.3,0-119.9-38.5-196-108.7\r\n\t\tc32.7-34.3,65.3-73.3,96.4-116.4c52.7-5.6,102.7-14.2,148.4-25.7C182.7,632.8,186.9,655.5,189.5,677.2z M279.3,521.5\r\n\t\tc-20.1,8.6-42,16.3-64.6,23.6c-13.3-45.7-30.8-93.3-52.5-142.1c21.5-48.5,38.7-95.9,51.8-141.4c23.1,7.2,45,15.2,65.6,23.8\r\n\t\tc82.6,35.2,136,81.4,136,118.1C415.4,440.1,361.9,486.5,279.3,521.5z","key":0}),React.createElement("path",{"style":{"fill":"#61DAFB"},"d":"M-338.8-105.5L-338.8-105.5L-338.8-105.5z","key":1}),React.createElement("circle",{"style":{"fill":"#61DAFB"},"cx":"-105.2","cy":"403.5","r":"106.6","key":2}),React.createElement("path",{"style":{"fill":"#61DAFB"},"d":"M127.2-106.2L127.2-106.2L127.2-106.2z","key":3})]));
	}
	
	ReactLogo.displayName = "ReactLogo";
	
	ReactLogo.defaultProps = {"version":"1.1","id":"Layer_2_1_","x":"0px","y":"0px","viewBox":"-677.4 -106.4 1144.8 1019.5","style":{"enableBackground":"new -677.4 -106.4 1144.8 1019.5"},"xmlSpace":"preserve"};
	
	module.exports = ReactLogo;
	
	ReactLogo.default = ReactLogo;


/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function ReduxLogo (props) {
	    return React.createElement("svg",props,React.createElement("path",{"style":{"fill":"#764ABC"},"d":"M3272.2-159.8c92.3-9.6,162.2-89.1,159.1-184.5c-3.2-95.4-82.7-171.8-178.2-171.8h-6.4\r\n\tc-98.6,3.2-175,85.9-171.8,184.5c3.2,47.7,22.3,89.1,50.9,117.7c-108.2,213.2-273.6,369.1-521.7,499.5\r\n\tc-168.6,89.1-343.6,120.9-518.6,98.6c-143.2-19.1-254.5-82.7-324.5-187.7c-101.8-155.9-111.3-324.5-25.4-493.1\r\n\tc60.4-120.9,155.9-210,216.3-254.5c-12.7-41.4-31.8-111.3-41.4-162.2C1449.3-379.3,1497,72.5,1637,285.6\r\n\tc105,159.1,318.1,257.7,553.6,257.7c63.6,0,127.2-6.4,190.9-22.3C2788.7,441.5,3097.3,199.7,3272.2-159.8L3272.2-159.8z\r\n\t M3832.2-554.3c-241.8-283.2-598.1-439-1005.3-439H2776c-28.6-57.3-89.1-95.4-155.9-95.4h-6.4c-98.6,3.2-175,85.9-171.8,184.5\r\n\tc3.2,95.4,82.7,171.8,178.2,171.8h6.4c70-3.2,130.4-47.7,155.9-108.2h57.3c241.8,0,470.8,70,677.6,206.8\r\n\tc159.1,105,273.6,241.8,337.2,407.2c54.1,133.6,50.9,264.1-6.4,375.4c-89.1,168.6-238.6,260.9-435.8,260.9\r\n\tc-127.3,0-248.1-38.2-311.8-66.8c-35,31.8-98.6,82.7-143.2,114.5c136.8,63.6,276.8,98.6,410.4,98.6c305.4,0,531.3-168.6,617.2-337.2\r\n\tC4077.1,34.3,4070.8-283.8,3832.2-554.3L3832.2-554.3z M2216-105.7c3.2,95.4,82.7,171.8,178.2,171.8h6.4\r\n\tc98.6-3.2,175-85.9,171.8-184.5c-3.2-95.4-82.7-171.8-178.2-171.8h-6.4c-6.4,0-15.9,0-22.3,3.2\r\n\tc-130.4-216.4-184.5-451.8-165.4-706.3c12.7-190.9,76.3-356.3,187.7-493.1c92.3-117.7,270.4-175,391.3-178.2\r\n\tc337.2-6.4,480.4,413.6,489.9,582.2c41.4,9.5,111.3,31.8,159.1,47.7c-38.2-515.4-356.3-782.6-661.7-782.6\r\n\tc-286.3,0-550.4,206.8-655.4,512.2c-146.3,407.2-50.9,798.5,127.3,1107.1C2222.4-175.7,2212.8-140.7,2216-105.7L2216-105.7z"}));
	}
	
	ReduxLogo.displayName = "ReduxLogo";
	
	ReduxLogo.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"1540 -1817.3 2500.1 2373.3","style":{"enableBackground":"new 1540 -1817.3 2500.1 2373.3"},"xmlSpace":"preserve"};
	
	module.exports = ReduxLogo;
	
	ReduxLogo.default = ReduxLogo;


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	function RightArrow (props) {
	    return React.createElement("svg",props,React.createElement("polygon",{"points":"160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "}));
	}
	
	RightArrow.displayName = "RightArrow";
	
	RightArrow.defaultProps = {"height":"512px","id":"Layer_1","style":{"enableBackground":"new 0 0 512 512"},"version":"1.1","viewBox":"0 0 512 512","width":"512px","xmlSpace":"preserve"};
	
	module.exports = RightArrow;
	
	RightArrow.default = RightArrow;


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(36);
	
	__webpack_require__(334);
	
	var _PresentationComponent = __webpack_require__(226);
	
	var _PresentationComponent2 = _interopRequireDefault(_PresentationComponent);
	
	var _ProjectComponent = __webpack_require__(227);
	
	var _ProjectComponent2 = _interopRequireDefault(_ProjectComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, _React$Component.call(this, props));
	  }
	
	  App.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'app-container' },
	      _react2.default.createElement(_PresentationComponent2.default, null),
	      _react2.default.createElement(_ProjectComponent2.default, null)
	    );
	  };
	
	  return App;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	module.exports = exports['default'];

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setLang = exports.setProject = exports.setProjectFade = exports.ProjectFadeTypes = exports.SET_PROJECT_FADE = exports.SET_PROJECT = exports.SET_LANG = undefined;
	
	var _index = __webpack_require__(79);
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var SET_LANG = exports.SET_LANG = 'SET_LANG';
	var SET_PROJECT = exports.SET_PROJECT = 'SET_PROJECT';
	var SET_PROJECT_FADE = exports.SET_PROJECT_FADE = 'SET_PROJECT_FADE';
	
	var ProjectFadeTypes = exports.ProjectFadeTypes = {
	  FADE_IN: 'fadeIn',
	  FADE_OUT: 'fadeOut'
	};
	
	var setProjectFade = exports.setProjectFade = function setProjectFade(fadeType) {
	  return {
	    type: SET_PROJECT_FADE,
	    fadeType: fadeType
	  };
	};
	
	var setProject = exports.setProject = function setProject(project) {
	  return function () {
	    var _ref = _asyncToGenerator(function* (dispatch) {
	      dispatch(setProjectFade(ProjectFadeTypes.FADE_OUT));
	      yield (0, _index.sleep)(500);
	      dispatch({ type: SET_PROJECT, project: project });
	      dispatch(setProjectFade(ProjectFadeTypes.FADE_IN));
	    });
	
	    return function (_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	};
	
	var setLang = exports.setLang = function setLang(lang) {
	  return function (dispatch) {
	    if (lang === 'fr' || lang === 'es') {
	      if (window !== undefined) {
	        window.history.pushState('test', 'yoo', '/' + lang);
	      }
	    }
	
	    dispatch({
	      type: SET_LANG,
	      lang: lang
	    });
	  };
	};

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var getRandomInt = exports.getRandomInt = function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	};
	
	var intervals = [{ label: 'year', seconds: 31536000 }, { label: 'month', seconds: 2592000 }, { label: 'day', seconds: 86400 }, { label: 'hour', seconds: 3600 }, { label: 'minute', seconds: 60 }, { label: 'second', seconds: 0 }];
	
	var timeSince = exports.timeSince = function timeSince(date) {
	  if ((Date.now() - date) / 1000 < 60) return 'just now';
	
	  var seconds = Math.floor((Date.now() - date) / 1000);
	  var interval = intervals.find(function (i) {
	    return i.seconds < seconds;
	  });
	  var count = Math.floor(seconds / interval.seconds);
	
	  return count + ' ' + interval.label + (count !== 1 ? 's' : '') + ' ago';
	};
	
	var sleep = exports.sleep = function () {
	  var _ref = _asyncToGenerator(function* (ms) {
	    return new Promise(function (resolve, reject) {
	      return setTimeout(resolve, ms);
	    });
	  });
	
	  return function sleep(_x) {
	    return _ref.apply(this, arguments);
	  };
	}();

/***/ })

});
//# sourceMappingURL=component---src-pages-index-js-ebaa241c83526f20ee6a.js.map