import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button/Button'

// Component for testing ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  const throwError = () => {
    setError(true)
  }

  return <Button onClick={throwError}>{t('Set error')}</Button>
}
