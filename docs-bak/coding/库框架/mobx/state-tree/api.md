# api

## 类型

- `isType(value)`
- `isArrayType(value)`
- `isFrozenType(value)`
- `isIdentifierType(value)`
- `isLateType(value)`
- `isLiteralType(value)`
- `isMapType(value)`
- `isModelType(value)`
- `isOptionalType(value)`
- `isPrimitiveType(value)`
- `isReferenceType(value)`
- `isRefinementType(value)`
- `isUnionType(value)`
- `isActionContextChildOf(actionContext, parent)`
- `isActionContextThisOrChildOf(actionContext, parentOrSame)`
- `isRoot(node)`
- `isAlive(node)`
- `isStateTreeNode(value)`
- `isProtected(value)`
- `isValidReference(func, checkIfAlive)`
- `hasParent(node, depth=1)`
- `hasParentOfType(node, type)`
- `typecheck(type, value)`
- `getLivelinessChecking()`

## 获取信息

- `getEnv(node)`
- `getParent(node, depth=1)`
- `getParentOfType(node, type)`
- `getPath(node)`
- `getPathParts(node)`
- `getRelativePath(base, target)`
- `getRoot(node)`
- `getIdentifier(node)`
- `getNodeId(node)`
- `getSnapshot(node, applyPostProcess)`
- `getType(node)`
- `getRunningActionContext()`
- `getMembers(node)`
- `getPropertyMembers(typeOrNode)`

## 修改

- `process(generator)`
- `clone(node, keepEnvironment?: boolean / newEnvironment)`
- `destroy(node)` 销毁 节点
- `detach(node)` 分离节点

- `addDisposer(node, () => void)` 添加清除器
- `addMiddleware(node, middleware, includeHooks)` 添加中间件
- `applyAction(node, actionDescription)` 应用 action操作
- `applyPatch(node, jsonPatch)` 应用 补丁
- `cast(nodeOrSnapshot)` 投掷
- `castToSnapshot(nodeOrSnapshot)`
- `castToReferenceSnapshot(node)`
- `castFlowReturn(value)`
- `decorate(handler, function)` 装饰操作
- `flow(generator)` 添加异步操作
- `protect(node)`
- `unprotect(node)`
- `recordActions(node)`
- `recordPatches(node)`

- `tryResolve(node, path)`
- `resolve(node, path)`
- `resolveIdentifier(type, target, identifier)`
- `resolvePath(target, path)`

- `tryReference(() => node / null / undefined, checkIfAlive = true)`

- `walk(startNode, (node) => void)`
- `joinJsonPath(parts)`
- `splitJsonPath(path)`
- `unescapeJsonPath(path)`
- `escapeJsonPath(path)`

## 回调

- `onAction(node, (actionDescription) => void)`
- `onPatch(node, (patch) => void)`
- `onSnapshot(node, (snapshot) => void)`
