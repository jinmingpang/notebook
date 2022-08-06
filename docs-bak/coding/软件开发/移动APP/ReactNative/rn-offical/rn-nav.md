# Rn-Navigation

- [文档](https://reactnavigation.org/docs/navigation-container)

## NavigationContainer

### ref

- resetRoot
- getRootState
- getCurrentRoute
- getCurrentOptions
- addListener
  - state
  - options

### props

- initialState
- onStateChange
- onReady​
- linking
- fallback
- documentTitle
  - enabled
  - formatter
- theme
- independent

## Group

### Props

- screenOptions
- navigationKey

## Screen

### Props

- name
- options
- initialParams
- getId
- component
- getComponent
- children
- navigationKey

## Stack ScreenOptions

- title
- cardShadowEnabled
- cardOverlayEnabled
- cardOverlay
- cardStyle
- presentation
- animationEnabled
- animationTypeForReplace
- gestureEnabled
- gestureResponseDistance
- gestureVelocityImpact
- gestureDirection
- transitionSpec
- cardStyleInterpolator
- header
- detachPreviousScreen

## NativeStack ScreenOptions

- header
- title
- headerBackImageSource
- headerLargeTitleShadowVisible
- headerShown
- headerStyle
  - backgroundColor
- headerShadowVisible
- headerTransparent
- headerBlurEffect
- headerTintColor
- headerLeft
- headerRight
- headerTitle
- headerTitleStyle
- autoCapitalize
- obscureBackground
- placeholder
- textColor
- onBlur
- onCancelButtonPress
- onChangeText
- contentStyle
- animationTypeForReplace
- android only
  - headerTitleAlign
  - autoFocus
  - disableBackButtonOverride
  - inputType
  - hintTextColor
  - headerIconColor
  - shouldShowHintSearchIcon
- ios only
  - headerBackButtonMenuEnabled
  - headerBackVisible
  - headerBackTitle
  - headerBackTitle
  - headerBackTitleVisible
  - headerBackTitleStyle
  - headerLargeStyle
  - headerLargeTitle
  - headerLargeTitleStyle
  - headerSearchBarOptions
  - barTintColor
  - cancelButtonText
  - hideNavigationBar
  - hideWhenScrolling
  - statusBarAnimation
  - statusBarHidden
  - statusBarStyle
  - customAnimationOnGesture
  - fullScreenGestureEnabled
  - gestureEnabled
  - animation
  - presentation
  - orientation
