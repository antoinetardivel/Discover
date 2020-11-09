import { useMemo } from 'react';
import Context from './Context';
import useDevice from './useDevice'
import useLoadSdk from './useLoadSdk'
import useToken from './useToken'

const SpotifyWrapper = ({ children }) => {
  useLoadSdk()
  const token = useToken()
  const { deviceId } = useDevice({ token })
  const contextValue = useMemo(() => ({ deviceId, token }), [token, deviceId])

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export const SpotifyContext = Context

export default SpotifyWrapper
