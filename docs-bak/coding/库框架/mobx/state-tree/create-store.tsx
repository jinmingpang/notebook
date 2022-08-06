/**
 * 创建通用的 store
 */

import { IAnyModelType, Instance, onSnapshot } from 'mobx-state-tree'
import { createContext, FunctionComponent, useContext } from 'react'
import logger from './logger'

const log = logger.create('createStore')

type CrateStoreOptions = {
  showLog?: false
}
const createStore = <T extends IAnyModelType>(
  Model: T,
  initialState,
  options: CrateStoreOptions = {}
) => {
  const { showLog = false } = options
  log.info(`[${Model.name}]`, initialState)

  let store = Model.create(initialState)
  let Context = createContext(initialState)

  if (typeof window !== 'undefined') {
    window['__' + Model.name] = store
  }

  if (showLog) {
    onSnapshot(store, (snapshot) => {
      log.info(`[${Model.name}] Snapshot:`, snapshot)
    })
  }

  let useStore = () => {
    let _store = useContext<Instance<T>>(Context)
    if (_store === null) {
      throw new Error(
        `[${Model.name}] Store cannot be null, please add a context provider`
      )
    }
    return _store
  }

  return {
    context: store,
    useContext: useStore,
    Provider: Context.Provider,
    withContext: <P extends any>(WrapComponent: FunctionComponent<P>) => {
      return (props) => (
        <Context.Provider value={store}>
          <WrapComponent {...props} />
        </Context.Provider>
      )
    },
  }
}

export { createStore }
